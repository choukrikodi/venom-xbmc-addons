import { describe, it, expect } from 'vitest';
import worker from '../src/index.js';
import { createMockD1 } from './mock-d1.js';

const TOKEN = 'test-secret-token';

function makeEnv(initial) {
  return { DB: createMockD1(initial), API_TOKEN: TOKEN };
}

function req(path, { method = 'GET', body, token = TOKEN } = {}) {
  const headers = {};
  if (token) headers['Authorization'] = `Bearer ${token}`;
  if (body !== undefined) headers['content-type'] = 'application/json';
  return new Request(`https://worker.example${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
}

describe('auth', () => {
  it('rejects requests without a token', async () => {
    const res = await worker.fetch(req('/favorite', { token: null }), makeEnv());
    expect(res.status).toBe(401);
  });

  it('rejects requests with the wrong token', async () => {
    const res = await worker.fetch(req('/favorite', { token: 'wrong' }), makeEnv());
    expect(res.status).toBe(401);
  });
});

describe('routing', () => {
  it('404s on an unknown table', async () => {
    const res = await worker.fetch(req('/nope'), makeEnv());
    expect(res.status).toBe(404);
  });

  it('400s on a non-numeric id', async () => {
    const res = await worker.fetch(req('/favorite/abc'), makeEnv());
    expect(res.status).toBe(400);
  });

  it('405s on an unsupported method', async () => {
    const res = await worker.fetch(req('/favorite', { method: 'PATCH' }), makeEnv());
    expect(res.status).toBe(405);
  });
});

describe('favorite CRUD', () => {
  it('creates a row and only keeps known columns', async () => {
    const env = makeEnv();
    const res = await worker.fetch(
      req('/favorite', {
        method: 'POST',
        body: { title: 'Movie', site: 'demo', siteurl: 'u', fav: '1', cat: '5', icon: 'i.png', fanart: 'f.png', bogus: 'x' },
      }),
      env
    );
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.addon_id).toBe(1);
    expect(body.title).toBe('Movie');
    expect(body.bogus).toBeUndefined();
  });

  it('lists created rows', async () => {
    const env = makeEnv({ favorite: [{ addon_id: 1, title: 'Movie', site: 'demo' }] });
    const res = await worker.fetch(req('/favorite'), env);
    expect(res.status).toBe(200);
    const body = await res.json();
    expect(body.results).toHaveLength(1);
    expect(body.results[0].title).toBe('Movie');
  });

  it('gets a single row by id', async () => {
    const env = makeEnv({ favorite: [{ addon_id: 7, title: 'Movie', site: 'demo' }] });
    const res = await worker.fetch(req('/favorite/7'), env);
    expect(res.status).toBe(200);
    expect((await res.json()).title).toBe('Movie');
  });

  it('404s when getting a missing id', async () => {
    const env = makeEnv();
    const res = await worker.fetch(req('/favorite/999'), env);
    expect(res.status).toBe(404);
  });

  it('updates a row', async () => {
    const env = makeEnv({ favorite: [{ addon_id: 3, title: 'Old', site: 'demo' }] });
    const res = await worker.fetch(req('/favorite/3', { method: 'PUT', body: { title: 'New' } }), env);
    expect(res.status).toBe(200);
    const check = await worker.fetch(req('/favorite/3'), env);
    expect((await check.json()).title).toBe('New');
  });

  it('deletes a row', async () => {
    const env = makeEnv({ favorite: [{ addon_id: 4, title: 'Gone', site: 'demo' }] });
    const res = await worker.fetch(req('/favorite/4', { method: 'DELETE' }), env);
    expect(res.status).toBe(200);
    const check = await worker.fetch(req('/favorite/4'), env);
    expect(check.status).toBe(404);
  });

  it('400s creating a row with no recognized fields', async () => {
    const env = makeEnv();
    const res = await worker.fetch(req('/favorite', { method: 'POST', body: { bogus: 'x' } }), env);
    expect(res.status).toBe(400);
  });
});

describe('history/resume/watched share the same CRUD shape', () => {
  it('round-trips a history row', async () => {
    const env = makeEnv();
    const created = await worker.fetch(
      req('/history', { method: 'POST', body: { title: 'Ep1', disp: 'd', icone: 'i.png' } }),
      env
    );
    expect(created.status).toBe(201);
    const { addon_id } = await created.json();
    const fetched = await worker.fetch(req(`/history/${addon_id}`), env);
    expect((await fetched.json()).disp).toBe('d');
  });

  it('round-trips a resume row', async () => {
    const env = makeEnv();
    const created = await worker.fetch(
      req('/resume', { method: 'POST', body: { title: 'Ep1', hoster: 'h1', point: '120' } }),
      env
    );
    const { addon_id } = await created.json();
    const fetched = await worker.fetch(req(`/resume/${addon_id}`), env);
    expect((await fetched.json()).point).toBe('120');
  });

  it('round-trips a watched row', async () => {
    const env = makeEnv();
    const created = await worker.fetch(req('/watched', { method: 'POST', body: { title: 'Ep1', site: 's1' } }), env);
    const { addon_id } = await created.json();
    const fetched = await worker.fetch(req(`/watched/${addon_id}`), env);
    expect((await fetched.json()).site).toBe('s1');
  });
});
