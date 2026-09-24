#!/usr/bin/env python3
"""Client MCP de recherche, Python stdlib, Linux/macOS (verrou fcntl pour Kiwi).

Usage : mcp_call.py URL list | URL call OUTIL JSON_OBJET
Sortie compatible : une ligne === UTC URL action arguments, puis JSON-RPC.
Au plus 2 tentatives HTTP par message (initiale comprise), aucun cache de prix,
aucune session persistante entre invocations. Ce client est destiné aux outils
sans effet de bord : une reprise réseau peut rejouer une requête déjà reçue.
"""

import contextlib
import email.utils
import hashlib
import http.client
import io
import json
import math
import os
import random
import sys
import tempfile
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urlsplit

PROTOCOL_VERSION = "2025-06-18"
TIMEOUT_SECONDS = 90
MAX_ATTEMPTS = 2
MAX_DELAY_SECONDS = 5.0
KIWI_INTERVAL_SECONDS = 0.5
RETRY_STATUS = {429, 500, 502, 503, 504}
NETWORK_ERRORS = (urllib.error.URLError, TimeoutError, ConnectionError,
                  http.client.IncompleteRead, http.client.RemoteDisconnected)
HEADERS = {"Content-Type": "application/json",
           "Accept": "application/json, text/event-stream",
           "User-Agent": "travel-agent-skill/1.3.0"}


class RetryLater(ValueError):
    """Le délai demandé par le serveur excède la borne d'attente locale."""


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        raise ValueError("Redirection MCP refusée ; vérifier l'endpoint configuré")


OPENER = urllib.request.build_opener(NoRedirect)


def timestamp():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def validate_url(url):
    parts = urlsplit(url)
    if (not parts.hostname or parts.username or parts.password or parts.fragment
            or (parts.scheme != "https" and not
                (parts.scheme == "http" and parts.hostname in
                 {"localhost", "127.0.0.1", "::1"}))):
        raise ValueError("Endpoint HTTPS valide requis ; HTTP limité à la boucle locale")
    return parts


def checked_response(value, request_id):
    if (not isinstance(value, dict) or value.get("jsonrpc") != "2.0"
            or type(value.get("id")) is not type(request_id)
            or value.get("id") != request_id
            or (("result" in value) == ("error" in value))):
        raise ValueError("Réponse JSON-RPC invalide ou id inattendu")
    if "error" in value and not isinstance(value["error"], dict):
        raise ValueError("Erreur JSON-RPC mal formée")
    return value


def read_sse(stream, request_id):
    """Lire événement par événement et s'arrêter dès la réponse attendue."""
    lines = []
    deadline = time.monotonic() + TIMEOUT_SECONDS
    while True:
        if time.monotonic() > deadline:
            raise TimeoutError("Délai SSE dépassé")
        raw = stream.readline()
        eof = not raw
        line = raw.decode("utf-8").rstrip("\r\n") if raw else ""
        if line.startswith("data:"):
            field = line[5:]
            lines.append(field[1:] if field.startswith(" ") else field)
        elif not line and lines:
            try:
                value = json.loads("\n".join(lines))
            except json.JSONDecodeError:
                value = None  # événement non JSON (ping, commentaire) : ignoré
            lines = []
            if isinstance(value, dict) and "method" not in value and value.get("id") == request_id:
                return checked_response(value, request_id)
            if isinstance(value, dict) and "method" in value and "id" in value:
                raise ValueError("Requête serveur interactive non prise en charge par ce client de recherche")
        if eof:
            raise http.client.IncompleteRead(b"", 1)


def decode_sse(body, request_id):
    """Adaptateur conservé pour les tests locaux de la version précédente."""
    if request_id is None:
        return None
    return read_sse(io.BytesIO(body.encode("utf-8")), request_id)


@contextlib.contextmanager
def kiwi_slot(url):
    """Un hôte Kiwi, verrou commun aux invocations sur la même machine."""
    host = urlsplit(url).hostname
    if host != "mcp.kiwi.com":
        yield
        return
    try:
        import fcntl
    except ImportError as exc:
        raise ValueError("L'espacement Kiwi requiert Linux/macOS ou le workflow Linux") from exc
    directory = Path(os.environ.get("TRAVEL_MCP_RATE_DIR") or
                     (Path(tempfile.gettempdir()) / f"travel-mcp-{os.getuid()}"))
    directory.mkdir(mode=0o700, parents=True, exist_ok=True)
    key = hashlib.sha256(host.encode()).hexdigest()[:16]
    with (directory / f"{key}.clock").open("a+") as clock:
        fcntl.flock(clock, fcntl.LOCK_EX)
        try:
            clock.seek(0)
            try:
                last = float(clock.read() or "nan")
            except ValueError:
                last = float("nan")
            elapsed = time.monotonic() - last
            if math.isfinite(elapsed) and 0 <= elapsed < KIWI_INTERVAL_SECONDS:
                time.sleep(KIWI_INTERVAL_SECONDS - elapsed)
            # Verrou maintenu jusqu'à la fin de la requête : deux processus ne
            # peuvent pas inverser leurs départs HTTP après avoir réservé un créneau.
            try:
                yield
            finally:
                clock.seek(0)
                clock.truncate()
                clock.write(str(time.monotonic()))
                clock.flush()
        finally:
            fcntl.flock(clock, fcntl.LOCK_UN)


def retry_delay(retry_after, retry_index):
    seconds = None
    if retry_after:
        try:
            raw = retry_after.strip()
            if raw.isdecimal():
                seconds = float(raw)
            else:
                date = email.utils.parsedate_to_datetime(raw)
                if date.tzinfo is None:
                    date = date.replace(tzinfo=timezone.utc)
                seconds = max(0.0, (date - datetime.now(timezone.utc)).total_seconds())
        except (ValueError, TypeError, OverflowError):
            seconds = None
    if seconds is not None:
        if seconds > MAX_DELAY_SECONDS:
            raise RetryLater(f"Retry-After={seconds:g}s dépasse le plafond local de 5s ; relancer plus tard")
        return seconds
    return min(MAX_DELAY_SECONDS, 2 ** retry_index + random.uniform(0, 1))


def post(url, payload, session=None, protocol=None):
    headers = dict(HEADERS)
    if session:
        headers["Mcp-Session-Id"] = session
    if protocol:
        headers["MCP-Protocol-Version"] = protocol
    request = urllib.request.Request(url, json.dumps(payload, ensure_ascii=False,
                                                     allow_nan=False).encode("utf-8"), headers)
    for attempt in range(MAX_ATTEMPTS):
        retry_after = None
        try:
            with kiwi_slot(url):
                with OPENER.open(request, timeout=TIMEOUT_SECONDS) as response:
                    next_session = response.headers.get("Mcp-Session-Id") or session
                    if "id" not in payload:
                        # MCP attend un 202 sans corps ; tout 2xx est toléré.
                        if not 200 <= response.status < 300:
                            raise ValueError("Notification MCP non acceptée (statut non 2xx)")
                        return next_session, None
                    content_type = response.headers.get("Content-Type", "").split(";")[0].lower().strip()
                    if content_type == "text/event-stream":
                        result = read_sse(response, payload["id"])
                    elif content_type == "application/json":
                        result = checked_response(json.loads(response.read().decode("utf-8")), payload["id"])
                    else:
                        raise ValueError("Type de réponse MCP non pris en charge")
                    return next_session, result
        except urllib.error.HTTPError as exc:
            retry_after = exc.headers.get("Retry-After") if exc.headers else None
            exc.close()
            if exc.code not in RETRY_STATUS or attempt + 1 == MAX_ATTEMPTS:
                raise
        except NETWORK_ERRORS:
            if attempt + 1 == MAX_ATTEMPTS:
                raise
        delay = retry_delay(retry_after, attempt)
        print(f"Reprise HTTP {attempt + 2}/{MAX_ATTEMPTS} dans {delay:.3f}s", file=sys.stderr)
        time.sleep(delay)


def open_session(url):
    session, response = post(url, {
        "jsonrpc": "2.0", "id": 1, "method": "initialize",
        "params": {"protocolVersion": PROTOCOL_VERSION, "capabilities": {},
                   "clientInfo": {"name": "travel-agent", "version": "1.3.0"}}})
    result = response.get("result")
    if ("error" in response or not isinstance(result, dict)
            or result.get("protocolVersion") != PROTOCOL_VERSION):
        raise ValueError("Initialisation rejetée ou version MCP non prise en charge")
    session, _ = post(url, {"jsonrpc": "2.0", "method": "notifications/initialized"},
                      session, PROTOCOL_VERSION)
    return session


def reject_constant(value):
    raise ValueError(f"Constante JSON interdite : {value}")


def main(argv):
    if len(argv) < 3 or argv[2] not in {"list", "call"}:
        raise ValueError("Usage : mcp_call.py URL list | URL call OUTIL JSON_OBJET")
    url, action = argv[1:3]
    if len(argv) != (3 if action == "list" else 5):
        raise ValueError("Nombre d'arguments incorrect")
    validate_url(url)
    if action == "call":
        tool, args = argv[3], json.loads(argv[4], parse_constant=reject_constant)
        if not tool or not isinstance(args, dict):
            raise ValueError("Nom d'outil et objet JSON d'arguments requis")
    session = open_session(url)
    payload = {"jsonrpc": "2.0", "id": 2, "method": "tools/list" if action == "list" else "tools/call"}
    if action == "call":
        payload["params"] = {"name": tool, "arguments": args}
    _, result = post(url, payload, session, PROTOCOL_VERSION)
    return result


def cli(argv):
    print(f"=== {timestamp()} {' '.join(argv[1:])}", flush=True)
    try:
        output = main(argv)
        print(json.dumps(output, ensure_ascii=False, indent=1))
        result = output.get("result")
        return int("error" in output or (isinstance(result, dict) and result.get("isError") is True))
    except (ValueError, OSError, http.client.HTTPException) as exc:
        error = {"type": type(exc).__name__, "message": str(exc)}
        if isinstance(exc, urllib.error.HTTPError):
            error["http_status"] = exc.code
        print(json.dumps({"client_error": error}, ensure_ascii=False))
        return 2


if __name__ == "__main__":
    sys.exit(cli(sys.argv))
