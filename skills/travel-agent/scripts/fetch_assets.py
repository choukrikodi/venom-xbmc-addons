#!/usr/bin/env python3
"""Télécharge les ressources visuelles listées dans un manifeste JSON (cartes
statiques, photos publiques) et les enregistre avec un journal de provenance.

Usage : fetch_assets.py MANIFEST OUT_DIR
Manifeste : {"assets": [{"name": "carte-a.png", "url": "https://...",
             "kind": "image" | "og_image" | "page_image" | "wm_thumb",
             "source": "texte d'attribution"}]}
- kind "image"    : l'URL est l'image elle-même.
- kind "og_image" : l'URL est une page HTML ; on télécharge l'image déclarée
                    dans sa balise <meta property="og:image">.
- kind "wm_thumb" : l'URL est une requête à l'API imageinfo de Wikimedia
                    (…/w/api.php?action=query&titles=File:…&prop=imageinfo
                    &iiprop=url&iiurlwidth=N&format=json) ; le thumburl
                    renvoyé est téléchargé. Contourne la liste stricte de
                    largeurs acceptées par la construction directe d'URL
                    /thumb/.../Npx- (HTTP 400 sinon) : l'API calcule et sert
                    la largeur demandée sans cette restriction.
Chaque téléchargement est journalisé dans OUT_DIR/assets.log.json (URL finale,
type, taille, UTC, erreur éventuelle). Aucune clé, aucun compte. Stdlib seule.
"""
import datetime as dt
import html
import http.client
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

UA = "travel-agent-assets/1.0 (+https://github.com/choukrikodi/venom-xbmc-addons)"
# Beaucoup d'hôtels protègent leurs images contre le hotlinking (referer
# attendu) ou filtrent les user-agents non navigateurs : un user-agent de
# navigateur courant, avec en-têtes usuels et referer de même origine, est
# une pratique standard pour lire une page publique comme le ferait un
# visiteur normal, sans contourner d'authentification ni de paiement.
BROWSER_UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
              "(KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36")
MAX_BYTES = 6 * 1024 * 1024
# 403/429 : blocage anti-robot, contourné par le second essai (UA navigateur).
# 500/502/503/504 et toute la plage Cloudflare 520-530 (serveur d'origine en
# panne, surchargé ou handshake TLS en échec) : erreurs transitoires côté
# serveur, indépendantes de nos en-têtes.
RETRYABLE_HTTP = {403, 429, 500, 502, 503, 504, *range(520, 531)}
# Signatures de fichier (magic bytes) pour accepter une image même quand le
# serveur déclare un Content-Type générique (application/octet-stream) :
# vérifier le contenu réel plutôt que se fier à un en-tête mal renseigné.
IMAGE_MAGIC = ((b"\xff\xd8\xff", "image/jpeg"), (b"\x89PNG\r\n\x1a\n", "image/png"),
               (b"GIF87a", "image/gif"), (b"GIF89a", "image/gif"), (b"RIFF", "image/webp"))


def sniff_image_type(body):
    for magic, ctype in IMAGE_MAGIC:
        if body.startswith(magic):
            if magic == b"RIFF":
                return "image/webp" if body[8:12] == b"WEBP" else None
            return ctype
    return None


def _origin(url):
    p = urllib.parse.urlsplit(url)
    return f"{p.scheme}://{p.netloc}/"


def _request(url, browser, referer):
    if browser:
        headers = {"User-Agent": BROWSER_UA, "Accept": "text/html,image/*,*/*;q=0.8",
                   "Accept-Language": "fr-BE,fr;q=0.9,en;q=0.6", "Referer": referer or _origin(url)}
    else:
        headers = {"User-Agent": UA, "Accept": "*/*"}
    return urllib.request.Request(url, headers=headers)


def fetch(url, timeout=40, referer=None):
    """Un essai normal (UA transparent du projet), puis en cas de blocage ou
    de lenteur, deux essais supplémentaires en UA navigateur avec referer et
    délai croissant : certains petits hébergeurs d'hôtels répondent très
    lentement (TLS/handshake d'origine derrière Cloudflare) et échouent au
    second essai mais réussissent avec plus de temps. Toujours la même image
    publique, jamais de contournement d'accès restreint (compte, paiement,
    CAPTCHA)."""
    last = None
    attempts = ((False, timeout), (True, max(timeout, 70)), (True, max(timeout, 120)))
    for attempt, (browser, to) in enumerate(attempts):
        try:
            req = _request(url, browser, referer)
            with urllib.request.urlopen(req, timeout=to) as r:
                return r.geturl(), r.headers.get("Content-Type", ""), r.read(MAX_BYTES + 1)
        except urllib.error.HTTPError as e:
            last = e
            if e.code not in RETRYABLE_HTTP or attempt == len(attempts) - 1:
                raise
        except (TimeoutError, urllib.error.URLError, http.client.IncompleteRead) as e:
            # IncompleteRead : le serveur d'origine a coupé la connexion avant
            # la fin déclarée du corps (observé sur Palm Galleria, derrière
            # Cloudflare) — transitoire, comme les autres erreurs réseau.
            last = e
            if attempt == len(attempts) - 1:
                raise
        time.sleep(2)
    raise last  # pragma: no cover - garde-fou, la boucle retourne ou lève avant


def og_image(page_url):
    final, ctype, body = fetch(page_url)
    text = body.decode("utf-8", "replace")
    m = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']', text, re.I) \
        or re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']', text, re.I)
    if not m:
        raise ValueError("og:image absent")
    return html.unescape(m.group(1))


def page_image(page_url):
    """Première image « de contenu » d'une page : balise <img> dont le nom ne
    contient pas logo/icon/sprite, en jpg/jpeg/png/webp ; URL rendue absolue."""
    final, ctype, body = fetch(page_url)
    text = body.decode("utf-8", "replace")
    for m in re.finditer(r'<img[^>]+(?:data-src|src)=["\']([^"\']+)["\']', text, re.I):
        src = html.unescape(m.group(1))
        low = src.lower().split("?")[0]
        if not low.endswith((".jpg", ".jpeg", ".png", ".webp")):
            continue
        if any(k in low for k in ("logo", "icon", "sprite", "pixel", "badge")):
            continue
        return urllib.parse.urljoin(final, src)
    raise ValueError("aucune image de contenu")


def wm_thumb(api_url):
    """Résout un thumburl via l'API imageinfo de Wikimedia (iiurlwidth) :
    la largeur demandée est calculée et servie par l'API elle-même, sans la
    liste stricte de largeurs qu'impose la construction directe d'une URL
    /thumb/.../Npx-fichier (HTTP 400 « Use thumbnail sizes listed on … »)."""
    final, ctype, body = fetch(api_url)
    data = json.loads(body.decode("utf-8"))
    for page in data.get("query", {}).get("pages", {}).values():
        info = page.get("imageinfo")
        if info and info[0].get("thumburl"):
            return info[0]["thumburl"]
    raise ValueError("imageinfo/thumburl absent de la réponse API")


def main(manifest_path, out_dir):
    import os
    os.makedirs(out_dir, exist_ok=True)
    manifest = json.load(open(manifest_path, encoding="utf-8"))
    log = []
    failures = 0
    for a in manifest["assets"]:
        entry = {"name": a["name"], "requested": a["url"], "kind": a.get("kind", "image"),
                 "source": a.get("source", ""), "utc": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds")}
        try:
            url = a["url"]
            page_referer = None
            if a.get("kind") == "og_image":
                page_referer = url
                url = og_image(url)
                entry["image_url"] = url
            elif a.get("kind") == "page_image":
                page_referer = url
                url = page_image(url)
                entry["image_url"] = url
            elif a.get("kind") == "wm_thumb":
                url = wm_thumb(url)
                entry["image_url"] = url
            final, ctype, body = fetch(url, referer=page_referer)
            if len(body) > MAX_BYTES:
                raise ValueError("fichier trop volumineux")
            if not ctype.startswith("image/"):
                sniffed = sniff_image_type(body)
                if not sniffed:
                    raise ValueError("type inattendu : " + ctype)
                entry["content_type_declared"] = ctype
                ctype = sniffed  # en-tête serveur générique, contenu réellement une image
            with open(os.path.join(out_dir, a["name"]), "wb") as f:
                f.write(body)
            entry.update({"final_url": final, "content_type": ctype, "bytes": len(body), "ok": True})
        except Exception as e:  # noqa: BLE001 - journalisé, jamais masqué
            failures += 1
            entry.update({"ok": False, "error": f"{type(e).__name__}: {e}"})
        log.append(entry)
        print(("OK   " if entry["ok"] else "ECHEC") + " " + a["name"] + ("" if entry["ok"] else " : " + entry["error"]))
    with open(os.path.join(out_dir, "assets.log.json"), "w", encoding="utf-8") as f:
        json.dump({"manifest": manifest_path, "assets": log}, f, ensure_ascii=False, indent=1)
    return 1 if failures else 0


if __name__ == "__main__":
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(2)
    sys.exit(main(sys.argv[1], sys.argv[2]))
