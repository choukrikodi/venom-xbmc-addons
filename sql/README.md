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

## API REST (Cloudflare Worker)

Un petit Worker CRUD, dans [`worker/`](../worker), expose les quatre tables
via une API REST authentifiée. Le Worker se lie à la base D1 via le binding
`DB` (déclaré dans `worker/wrangler.toml`), aucun identifiant Cloudflare
n'est présent dans le code.

### Déploiement

```bash
cd worker
npm install

# Une seule fois : définir le jeton d'authentification de l'API (secret
# Cloudflare, jamais commité dans le dépôt).
npx wrangler secret put API_TOKEN

# Appliquer le schéma sur la base distante (si pas déjà fait, voir plus haut)
npx wrangler d1 execute venom-xbmc-addons-db --remote --file=../sql/schema.sql

# Déployer le Worker
npx wrangler deploy
```

`npx wrangler dev` lance le Worker en local (base D1 locale/simulée, sans
toucher à la base distante) pour tester avant déploiement.

### Appel de l'API

Toutes les requêtes doivent porter l'en-tête `Authorization: Bearer
<API_TOKEN>` (le jeton défini avec `wrangler secret put` ci-dessus), sous
peine d'un `401`. Les tables exposées sont `history`, `resume`, `watched` et
`favorite`, avec les mêmes colonnes que `schema.sql` (`addon_id` est généré
automatiquement, jamais fourni par le client).

| Méthode | Chemin | Effet |
|---|---|---|
| `GET` | `/<table>` | Liste les lignes (`?limit=` et `?offset=` optionnels, défaut 100/0, max 500) |
| `GET` | `/<table>/<addon_id>` | Une ligne, ou `404` |
| `POST` | `/<table>` | Crée une ligne (corps JSON ; les champs inconnus sont ignorés) |
| `PUT` | `/<table>/<addon_id>` | Met à jour une ligne (mêmes règles de corps JSON) |
| `DELETE` | `/<table>/<addon_id>` | Supprime une ligne |

Exemples :

```bash
# Lister les favoris
curl -H "Authorization: Bearer $API_TOKEN" \
  https://<ton-worker>.workers.dev/favorite

# Ajouter un favori
curl -X POST -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Mon film", "siteurl": "...", "site": "monsite", "fav": "1", "cat": "5", "icon": "icon.png", "fanart": "fanart.jpg"}' \
  https://<ton-worker>.workers.dev/favorite

# Supprimer une ligne d'historique
curl -X DELETE -H "Authorization: Bearer $API_TOKEN" \
  https://<ton-worker>.workers.dev/history/42
```

Cette API n'est pas encore appelée par l'addon Kodi (qui reste en SQLite
local via `plugin.video.vstream/resources/lib/db.py`) ; elle prépare une
future synchronisation. Comme noté plus haut, il n'y a pour l'instant
aucune isolation par utilisateur : le jeton `API_TOKEN` donne accès à
l'ensemble des données de la base pour quiconque le détient.

### Tests

```bash
cd worker
npm test
```

Les tests (`worker/test/`) utilisent une implémentation en mémoire du
binding D1 (`worker/test/mock-d1.js`) pour vérifier le routage, l'auth et
les opérations CRUD sans compte Cloudflare ni accès réseau.
