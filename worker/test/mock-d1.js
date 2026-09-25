// Minimal in-memory stand-in for the Cloudflare D1 binding, used only to
// unit-test worker/src/index.js without a real Cloudflare account or network
// access. It is NOT a general SQL engine: it only understands the exact
// query shapes produced by index.js (see the regexes below), which is
// enough to exercise the Worker's routing/auth/validation logic end to end.

export function createMockD1(initial = {}) {
  const tables = {
    history: [...(initial.history || [])],
    resume: [...(initial.resume || [])],
    watched: [...(initial.watched || [])],
    favorite: [...(initial.favorite || [])],
  };
  const nextId = {
    history: 1 + Math.max(0, ...tables.history.map((r) => r.addon_id)),
    resume: 1 + Math.max(0, ...tables.resume.map((r) => r.addon_id)),
    watched: 1 + Math.max(0, ...tables.watched.map((r) => r.addon_id)),
    favorite: 1 + Math.max(0, ...tables.favorite.map((r) => r.addon_id)),
  };

  function run(sql, args) {
    let m;

    if ((m = sql.match(/^SELECT \* FROM (\w+) ORDER BY addon_id DESC LIMIT \? OFFSET \?$/))) {
      const [table] = m.slice(1);
      const [limit, offset] = args;
      const rows = [...tables[table]].sort((a, b) => b.addon_id - a.addon_id).slice(offset, offset + limit);
      return { kind: 'all', results: rows };
    }

    if ((m = sql.match(/^SELECT \* FROM (\w+) WHERE addon_id = \?$/))) {
      const [table] = m.slice(1);
      const [id] = args;
      const row = tables[table].find((r) => r.addon_id === id) || null;
      return { kind: 'first', row };
    }

    if ((m = sql.match(/^INSERT INTO (\w+) \(([^)]+)\) VALUES \(([^)]+)\)$/))) {
      const [table, colsStr] = m.slice(1);
      const cols = colsStr.split(',').map((c) => c.trim());
      const id = nextId[table]++;
      const row = { addon_id: id };
      cols.forEach((c, i) => {
        row[c] = args[i];
      });
      tables[table].push(row);
      return { kind: 'run', changes: 1, last_row_id: id };
    }

    if ((m = sql.match(/^UPDATE (\w+) SET (.+) WHERE addon_id = \?$/))) {
      const [table, setStr] = m.slice(1);
      const cols = setStr.split(',').map((c) => c.trim().replace(/ = \?$/, ''));
      const id = args[args.length - 1];
      const values = args.slice(0, args.length - 1);
      const row = tables[table].find((r) => r.addon_id === id);
      if (!row) return { kind: 'run', changes: 0 };
      cols.forEach((c, i) => {
        row[c] = values[i];
      });
      return { kind: 'run', changes: 1 };
    }

    if ((m = sql.match(/^DELETE FROM (\w+) WHERE addon_id = \?$/))) {
      const [table] = m.slice(1);
      const [id] = args;
      const before = tables[table].length;
      tables[table] = tables[table].filter((r) => r.addon_id !== id);
      return { kind: 'run', changes: before - tables[table].length };
    }

    throw new Error(`MockD1: unrecognized query shape: ${sql}`);
  }

  return {
    _tables: tables,
    prepare(sql) {
      let bound = [];
      return {
        bind(...args) {
          bound = args;
          return this;
        },
        async all() {
          const res = run(sql, bound);
          return { results: res.results };
        },
        async first() {
          const res = run(sql, bound);
          return res.row;
        },
        async run() {
          const res = run(sql, bound);
          return { meta: { changes: res.changes, last_row_id: res.last_row_id } };
        },
      };
    },
  };
}
