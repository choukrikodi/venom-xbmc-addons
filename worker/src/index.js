// Cloudflare Worker exposing a small REST/CRUD API over the venom-xbmc-addons-db
// D1 database (see sql/schema.sql and sql/README.md). Talks to D1 through the
// "DB" binding configured in wrangler.toml — no connection string or API key
// is ever embedded in this code.
//
// Routes (all under a table name from TABLES below):
//   GET    /<table>            list rows (optional ?limit=&offset=)
//   GET    /<table>/<id>       get one row by addon_id
//   POST   /<table>            create a row (JSON body, only known columns are used)
//   PUT    /<table>/<id>       update a row (JSON body, only known columns are used)
//   DELETE /<table>/<id>       delete a row
//
// Every request must carry `Authorization: Bearer <API_TOKEN>`, where
// API_TOKEN is a Wrangler secret (`wrangler secret put API_TOKEN`), never
// committed to the repo.
//
// Table names in SQL below are only ever taken from the TABLES map (fixed,
// hardcoded keys), never from user input, so there is no SQL injection
// surface there. Column names are filtered the same way. Values are always
// passed through D1's parameter binding.

export const TABLES = {
  history: {
    columns: ['title', 'disp', 'icone', 'isfolder', 'level', 'lastwatched'],
  },
  resume: {
    columns: ['title', 'hoster', 'point'],
  },
  watched: {
    columns: ['title', 'site'],
  },
  favorite: {
    columns: ['title', 'siteurl', 'site', 'fav', 'cat', 'icon', 'fanart'],
  },
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
}

function timingSafeEqual(a, b) {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

export function isAuthorized(request, env) {
  if (!env.API_TOKEN) return false;
  const header = request.headers.get('Authorization') || '';
  const [scheme, token] = header.split(' ');
  if (scheme !== 'Bearer' || !token) return false;
  return timingSafeEqual(token, env.API_TOKEN);
}

function parsePath(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const [table, idPart] = parts;
  return { table, idPart, extra: parts.length > 2 };
}

async function listAll(db, table, searchParams) {
  const limit = Math.min(Math.max(Number(searchParams.get('limit')) || 100, 1), 500);
  const offset = Math.max(Number(searchParams.get('offset')) || 0, 0);
  const { results } = await db
    .prepare(`SELECT * FROM ${table} ORDER BY addon_id DESC LIMIT ? OFFSET ?`)
    .bind(limit, offset)
    .all();
  return jsonResponse({ results });
}

async function getOne(db, table, id) {
  const row = await db.prepare(`SELECT * FROM ${table} WHERE addon_id = ?`).bind(id).first();
  if (!row) return jsonResponse({ error: 'not found' }, 404);
  return jsonResponse(row);
}

async function createRow(db, table, body) {
  const allowed = TABLES[table].columns;
  const columns = allowed.filter((c) => body && Object.prototype.hasOwnProperty.call(body, c));
  if (columns.length === 0) {
    return jsonResponse({ error: 'no valid fields provided', allowed }, 400);
  }
  const placeholders = columns.map(() => '?').join(', ');
  const values = columns.map((c) => body[c]);
  const stmt = `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders})`;
  const result = await db.prepare(stmt).bind(...values).run();
  const addon_id = result.meta && result.meta.last_row_id;
  return jsonResponse({ addon_id, ...Object.fromEntries(columns.map((c, i) => [c, values[i]])) }, 201);
}

async function updateRow(db, table, id, body) {
  const allowed = TABLES[table].columns;
  const columns = allowed.filter((c) => body && Object.prototype.hasOwnProperty.call(body, c));
  if (columns.length === 0) {
    return jsonResponse({ error: 'no valid fields provided', allowed }, 400);
  }
  const setClause = columns.map((c) => `${c} = ?`).join(', ');
  const values = columns.map((c) => body[c]);
  const stmt = `UPDATE ${table} SET ${setClause} WHERE addon_id = ?`;
  const result = await db.prepare(stmt).bind(...values, id).run();
  if (!result.meta || result.meta.changes === 0) return jsonResponse({ error: 'not found' }, 404);
  return jsonResponse({ addon_id: id, updated: columns });
}

async function deleteRow(db, table, id) {
  const result = await db.prepare(`DELETE FROM ${table} WHERE addon_id = ?`).bind(id).run();
  if (!result.meta || result.meta.changes === 0) return jsonResponse({ error: 'not found' }, 404);
  return jsonResponse({ addon_id: id, deleted: true });
}

export default {
  async fetch(request, env) {
    if (!isAuthorized(request, env)) {
      return jsonResponse({ error: 'unauthorized' }, 401);
    }

    const url = new URL(request.url);
    const { table, idPart, extra } = parsePath(url.pathname);

    if (!table || !(table in TABLES)) {
      return jsonResponse({ error: 'not found', tables: Object.keys(TABLES) }, 404);
    }
    if (extra) {
      return jsonResponse({ error: 'not found' }, 404);
    }

    let id = null;
    if (idPart !== undefined) {
      id = Number(idPart);
      if (!Number.isInteger(id) || id <= 0) {
        return jsonResponse({ error: 'invalid id' }, 400);
      }
    }

    try {
      switch (request.method) {
        case 'GET':
          return id
            ? await getOne(env.DB, table, id)
            : await listAll(env.DB, table, url.searchParams);
        case 'POST':
          if (id) return jsonResponse({ error: 'POST does not take an id in the path' }, 400);
          return await createRow(env.DB, table, await request.json());
        case 'PUT':
          if (!id) return jsonResponse({ error: 'id required in the path' }, 400);
          return await updateRow(env.DB, table, id, await request.json());
        case 'DELETE':
          if (!id) return jsonResponse({ error: 'id required in the path' }, 400);
          return await deleteRow(env.DB, table, id);
        default:
          return jsonResponse({ error: 'method not allowed' }, 405);
      }
    } catch (err) {
      return jsonResponse({ error: 'internal error', message: String((err && err.message) || err) }, 500);
    }
  },
};
