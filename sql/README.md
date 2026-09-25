# Base de données SQL en ligne (gratuite)

Une base [Cloudflare D1](https://developers.cloudflare.com/d1/) (SQLite-compatible,
niveau gratuit) a été provisionnée pour ce projet :

- Nom : `venom-xbmc-addons-db`
- UUID : `c770c2dc-e95e-468b-8b95-c96e4238b8a3`
- Région : ENAM

`schema.sql` reprend les tables déjà utilisées en local par
`plugin.video.vstream/resources/lib/db.py` (`history`, `resume`, `watched`,
`favorite`), pour pouvoir les interroger à distance (typiquement depuis un
Cloudflare Worker exposant une petite API REST) plutôt que seulement en
local sur l'appareil Kodi.

## Utilisation

Avec [Wrangler](https://developers.cloudflare.com/workers/wrangler/) et un
compte Cloudflare (gratuit) :

```bash
# Appliquer le schéma
wrangler d1 execute venom-xbmc-addons-db --file=sql/schema.sql

# Requête ad-hoc
wrangler d1 execute venom-xbmc-addons-db --command "SELECT * FROM favorite"
```

Ou via l'API HTTP D1 (REST), en remplaçant `<ACCOUNT_ID>` et `<API_TOKEN>` :

```bash
curl -X POST \
  "https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/d1/database/c770c2dc-e95e-468b-8b95-c96e4238b8a3/query" \
  -H "Authorization: Bearer <API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"sql": "SELECT * FROM favorite"}'
```

Aucun identifiant/API token n'est stocké dans ce dépôt ; ils doivent être
gérés côté Cloudflare (dashboard ou `wrangler login`).
