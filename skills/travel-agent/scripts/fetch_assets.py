#!/usr/bin/env python3
"""Télécharge les ressources visuelles listées dans un manifeste JSON (cartes
statiques, photos publiques) et les enregistre avec un journal de provenance.

Usage : fetch_assets.py MANIFEST OUT_DIR
Manifeste : {"assets": [{"name": "carte-a.png", "url": "https://...",
             "kind": "image" | "og_image", "source": "texte d'attribution"}]}
- kind "image"    : l'URL est l'image elle-même.
- kind "og_image" : l'URL est une page HTML ; on télécharge l'image déclarée
                    dans sa balise <meta property="og:image">.
Chaque téléchargement est journalisé dans OUT_DIR/assets.log.json (URL finale,
type, taille, UTC, erreur éventuelle). Aucune clé, aucun compte. Stdlib seule.
"""
import datetime as dt
import html
import json
import re
import sys
import urllib.request

UA = "travel-agent-assets/1.0 (+https://github.com/choukrikodi/venom-xbmc-addons)"
MAX_BYTES = 6 * 1024 * 1024


def fetch(url, timeout=40):
    req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept": "*/*"})
    with urllib.request.urlopen(req, timeout=timeout) as r:
        return r.geturl(), r.headers.get("Content-Type", ""), r.read(MAX_BYTES + 1)


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
    import urllib.parse
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
            if a.get("kind") == "og_image":
                url = og_image(url)
                entry["image_url"] = url
            elif a.get("kind") == "page_image":
                url = page_image(url)
                entry["image_url"] = url
            final, ctype, body = fetch(url)
            if len(body) > MAX_BYTES:
                raise ValueError("fichier trop volumineux")
            if not ctype.startswith("image/"):
                raise ValueError("type inattendu : " + ctype)
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
