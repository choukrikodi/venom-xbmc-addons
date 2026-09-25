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
local sur l'appareil Kodi. Cette base D1 n'est pas encore connectée à
l'addon : aucune donnée locale (favoris, historique, etc.) n'est
synchronisée pour l'instant. Une future API partagée devra prévoir
authentification et isolation par utilisateur avant tout usage réel.

`ENAM` (est de l'Amérique du Nord) est la [localisation](https://developers.cloudflare.com/d1/configuration/data-location/)
par défaut de Cloudflare à la création ; ce n'est qu'une préférence de
placement, pas une garantie de résidence des données. Pour un usage
essentiellement européen, préférer `weur` ou `eeur` (voir
`primary_location_hint` à la création de la base).

## Utilisation

Avec [Wrangler](https://developers.cloudflare.com/workers/wrangler/) et un
compte Cloudflare (gratuit) ayant accès à cette base (l'UUID seul ne donne
pas d'autorisation), ajouter dans `wrangler.toml` :

```toml
[[d1_databases]]
binding = "DB"
database_name = "venom-xbmc-addons-db"
database_id = "c770c2dc-e95e-468b-8b95-c96e4238b8a3"
```

Puis, en ciblant explicitement la base **distante** avec `--remote`
(sans ce flag, Wrangler exécute la commande sur une base locale/simulée) :

```bash
# Appliquer le schéma
wrangler d1 execute venom-xbmc-addons-db --remote --file=sql/schema.sql

# Requête ad-hoc
wrangler d1 execute venom-xbmc-addons-db --remote --command "SELECT * FROM favorite"
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
