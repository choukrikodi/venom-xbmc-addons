#!/usr/bin/env python3
"""Petit client MCP Streamable HTTP, sans dépendance ni clé.

Usage :
  python3 mcp_call.py URL list
  python3 mcp_call.py URL call NOM_OUTIL '{"parametre":"valeur"}'

La première ligne horodate l'appel en UTC ; la suite est le JSON brut de la
réponse JSON-RPC. En cas d'échec local, la suite contient `client_error`.
Les scripts existants qui ignorent cette première ligne restent compatibles.
"""

import json
import hashlib
import os
import random
import sys
import tempfile
import time
import urllib.error
import urllib.request
from email.utils import parsedate_to_datetime
from datetime import datetime, timezone
from urllib.parse import urlsplit

import fcntl


HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json, text/event-stream",
    "User-Agent": "travel-agent-skill/1.0",
}
TIMEOUT_SECONDS = 90
RETRY_STATUS = {429, 500, 502, 503, 504}
MAX_RETRIES = 2
MAX_DELAY_SECONDS = 5.0
KIWI_INTERVAL_SECONDS = 0.5


def timestamp():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def decode_sse(body, request_id):
    """Assembler les lignes data: d'un événement, ignorer les notifications."""
    events = []
    data_lines = []
    for line in body.splitlines() + [""]:
        if not line:
            if data_lines:
                try:
                    events.append(json.loads("\n".join(data_lines)))
                except json.JSONDecodeError:
                    pass
                data_lines = []
        elif line.startswith("data:"):
            data_lines.append(line[5:].lstrip(" "))
    for event in reversed(events):
        if isinstance(event, dict) and event.get("id") == request_id:
            return event
    if request_id is None:
        return None
    raise ValueError(f"Aucune réponse SSE pour id={request_id}")


def pace_kiwi(url):
    """Limiter les débuts d'appels Kiwi, y compris entre processus concurrents."""
    if urlsplit(url).hostname != "mcp.kiwi.com":
        return
    rate_dir = os.environ.get("TRAVEL_MCP_RATE_DIR") or tempfile.gettempdir()
    key = hashlib.sha256(url.encode("utf-8")).hexdigest()[:16]
    with open(os.path.join(rate_dir, f"travel-mcp-kiwi-{key}.clock"), "a+") as clock:
        fcntl.flock(clock, fcntl.LOCK_EX)
        clock.seek(0)
        try:
            last = float(clock.read() or 0)
        except ValueError:
            last = 0
        time.sleep(max(0, KIWI_INTERVAL_SECONDS - (time.monotonic() - last)))
        clock.seek(0)
        clock.truncate()
        clock.write(str(time.monotonic()))
        clock.flush()
        fcntl.flock(clock, fcntl.LOCK_UN)


def retry_delay(retry_after, retry_index):
    """Respecter Retry-After (secondes/date HTTP), avec attente plafonnée."""
    seconds = None
    if retry_after:
        try:
            seconds = float(retry_after)
        except ValueError:
            try:
                date = parsedate_to_datetime(retry_after)
                seconds = (date - datetime.now(timezone.utc)).total_seconds()
            except (ValueError, TypeError, OverflowError):
                pass
    if seconds is None:
        seconds = 2 ** retry_index + random.uniform(0, 1)
    return min(MAX_DELAY_SECONDS, max(0, seconds))


def post(url, payload, session=None):
    headers = dict(HEADERS)
    if session:
        headers["Mcp-Session-Id"] = session
    data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(url, data=data, headers=headers)
    for retry_index in range(MAX_RETRIES + 1):
        pace_kiwi(url)
        try:
            with urllib.request.urlopen(request, timeout=TIMEOUT_SECONDS) as response:
                session = response.headers.get("Mcp-Session-Id") or session
                body = response.read().decode("utf-8", "replace")
                content_type = response.headers.get("Content-Type", "")
            break
        except urllib.error.HTTPError as exc:
            if exc.code not in RETRY_STATUS or retry_index == MAX_RETRIES:
                raise
            time.sleep(retry_delay(exc.headers.get("Retry-After") if exc.headers else None, retry_index))
        except (urllib.error.URLError, TimeoutError, ConnectionError):
            if retry_index == MAX_RETRIES:
                raise
            time.sleep(retry_delay(None, retry_index))
    if "text/event-stream" in content_type:
        result = decode_sse(body, payload.get("id"))
    else:
        result = json.loads(body) if body.strip() else None
    return session, result


def open_session(url):
    session, result = post(url, {
        "jsonrpc": "2.0", "id": 1, "method": "initialize",
        "params": {
            "protocolVersion": "2025-06-18", "capabilities": {},
            "clientInfo": {"name": "travel-agent", "version": "1.0"},
        },
    })
    if not isinstance(result, dict) or result.get("error") or result.get("id") != 1:
        raise ValueError("Initialisation MCP absente ou rejetée")
    post(url, {"jsonrpc": "2.0", "method": "notifications/initialized"}, session)
    return session


def main(argv):
    if len(argv) < 3 or argv[2] not in {"list", "call"}:
        raise ValueError("Usage : mcp_call.py URL list | URL call OUTIL JSON_OBJET")
    url, action = argv[1:3]
    if len(argv) != (3 if action == "list" else 5):
        raise ValueError("Nombre d'arguments incorrect")
    parts = urlsplit(url)
    if parts.scheme != "https" and not (parts.scheme == "http" and parts.hostname in {"localhost", "127.0.0.1", "::1"}):
        raise ValueError("URL HTTPS requise (HTTP admis uniquement en test local)")
    if action == "call":
        tool, args = argv[3], json.loads(argv[4])
        if not isinstance(args, dict):
            raise ValueError("Les arguments de l'outil doivent former un objet JSON à plat")
    session = open_session(url)
    if action == "list":
        _, result = post(url, {"jsonrpc": "2.0", "id": 2, "method": "tools/list"}, session)
    else:
        _, result = post(url, {
            "jsonrpc": "2.0", "id": 2, "method": "tools/call",
            "params": {"name": tool, "arguments": args},
        }, session)
    if not isinstance(result, dict) or result.get("id") != 2:
        raise ValueError("Réponse MCP manquante ou id de requête inattendu")
    return result


if __name__ == "__main__":
    print(f"=== {timestamp()} {' '.join(sys.argv[1:])}", flush=True)
    try:
        output = main(sys.argv)
        print(json.dumps(output, ensure_ascii=False, indent=1))
        if output.get("error") or (output.get("result") or {}).get("isError"):
            sys.exit(1)
    except (ValueError, json.JSONDecodeError, OSError, urllib.error.URLError) as exc:
        print(json.dumps({"client_error": {"type": type(exc).__name__, "message": str(exc)}}, ensure_ascii=False))
        sys.exit(2)
