-- Schema for the venom-xbmc-addons-db Cloudflare D1 database (free, SQLite-compatible).
-- Mirrors the local SQLite schema used by plugin.video.vstream/resources/lib/db.py
-- so the same tables can be queried remotely (e.g. from a Worker/API) instead of
-- only on-device.

CREATE TABLE IF NOT EXISTS history (
  addon_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  disp TEXT,
  icone TEXT,
  isfolder TEXT,
  level TEXT,
  lastwatched TIMESTAMP
);

CREATE TABLE IF NOT EXISTS resume (
  addon_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  hoster TEXT,
  point TEXT,
  UNIQUE(title, hoster)
);

CREATE TABLE IF NOT EXISTS watched (
  addon_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  site TEXT,
  UNIQUE(title, site)
);

CREATE TABLE IF NOT EXISTS favorite (
  addon_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  siteurl TEXT,
  site TEXT,
  fav TEXT,
  cat TEXT,
  icon TEXT,
  fanart TEXT,
  UNIQUE(title, site)
);
