-- Proposition de schéma SQL pour le suivi des offres Saint-Martin 2026.
-- NON EXÉCUTÉ. Aucune instance D1/SQL n'a été créée ni modifiée par cette session.
--
-- Portée et garde-fous :
-- - Toutes les tables sont préfixées `sxm_` pour ne jamais collisionner avec :
--   - les tables de l'addon Kodi lui-même (`history`, `resume`, `watched`, `favorite`
--     dans la base `venom-xbmc-addons-db`, PR #3) — sans rapport, non touchées ;
--   - toute table Andaman existante dans une base "voyage" (session "Base de données
--     SQL gratuite", claude/sxm-travel-research) — non identifiée, non touchée.
-- - Avant toute exécution réelle : vérifier (1) quelle instance D1/SQL exécute ceci,
--   (2) qui en est propriétaire, (3) qu'aucune table `sxm_*` n'existe déjà avec un
--   schéma différent. Ne pas exécuter tant que ces trois points ne sont pas confirmés.
-- - Aucune donnée personnelle : pas de nom de voyageur, coordonnées, moyen de paiement.

CREATE TABLE IF NOT EXISTS sxm_offres (
  offre_id            TEXT PRIMARY KEY,       -- ex: fr-baierouge-villa-laperlabianca
  cote                TEXT NOT NULL CHECK (cote IN ('FR','NL')),
  zone                TEXT NOT NULL,
  formule              TEXT NOT NULL CHECK (formule IN
                         ('villa_seule','hotel','package_vol_hebergement',
                          'voyage_a_composer','agence_locale_multi_unites')),
  nom_offre           TEXT NOT NULL,
  unite_exacte        TEXT NOT NULL,
  capacite_max        INTEGER,
  capacite_utilisee   INTEGER NOT NULL DEFAULT 2,
  acces_sable_statut  TEXT NOT NULL CHECK (acces_sable_statut IN ('oui','non','a_verifier')),
  acces_sable_m       REAL,
  plage_type          TEXT NOT NULL CHECK (plage_type IN
                         ('privee_exclusive','publique_acces_prive','publique','a_verifier')),
  plage_note          TEXT,
  piscine_statut      TEXT NOT NULL CHECK (piscine_statut IN
                         ('privee_a_l_unite','commune_partagee','aucune','a_verifier')),
  jacuzzi_statut      TEXT NOT NULL CHECK (jacuzzi_statut IN
                         ('prive_a_l_unite','commun_partage','aucun','a_verifier')),
  created_at_utc      TEXT NOT NULL,           -- ISO 8601
  updated_at_utc      TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sxm_cotations (
  cotation_id         INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id            TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  fenetre_checkin     TEXT NOT NULL,           -- ISO date, doit être entre 2026-11-23 et 2026-12-06
  fenetre_checkout    TEXT NOT NULL,           -- = checkin + 9 nuits pour ce projet
  nuits               INTEGER NOT NULL DEFAULT 9,
  montant_total       REAL,
  devise              TEXT NOT NULL DEFAULT 'EUR',
  tarif_unite_exacte  INTEGER NOT NULL DEFAULT 0,  -- booléen 0/1
  note_estimation     TEXT,                    -- si estimation indicative, expliquer l'hypothèse
  disponibilite       TEXT NOT NULL CHECK (disponibilite IN ('confirmee','indisponible','inconnue')),
  verifiee_le_utc     TEXT NOT NULL,
  statut              TEXT NOT NULL CHECK (statut IN ('confirme','incomplet','indisponible')),
  UNIQUE (offre_id, fenetre_checkin, fenetre_checkout)  -- jamais deux cotations pour la même fenêtre exacte
);

CREATE TABLE IF NOT EXISTS sxm_conditions (
  offre_id                TEXT PRIMARY KEY REFERENCES sxm_offres(offre_id),
  annulation               TEXT,
  petit_dejeuner_inclus    TEXT,   -- 'oui' / 'non' / 'non_applicable' / 'non_precise'
  caution                  TEXT,
  sejour_minimum_nuits     INTEGER,
  autres                   TEXT
);

CREATE TABLE IF NOT EXISTS sxm_avis (
  offre_id       TEXT PRIMARY KEY REFERENCES sxm_offres(offre_id),
  nombre         INTEGER,
  note_moyenne   REAL,
  echelle        TEXT
);

CREATE TABLE IF NOT EXISTS sxm_sources (
  source_id             INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id              TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  url                   TEXT NOT NULL,
  date_consultation_utc TEXT NOT NULL,
  origine               TEXT NOT NULL CHECK (origine IN
                          ('codex_villas_fr','codex_villas_nl','codex_agences_locales',
                           'ci_travel_agent_trivago','ci_travel_agent_kiwi',
                           'booking_connector','autre'))
);

CREATE TABLE IF NOT EXISTS sxm_photos (
  photo_id        INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id        TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  page_url        TEXT NOT NULL,
  droits          TEXT NOT NULL CHECK (droits IN ('lien_externe_uniquement','reutilisables','inconnu')),
  telechargee     INTEGER NOT NULL DEFAULT 0,   -- 0 tant que droits != 'reutilisables'
  chemin_local    TEXT
);

-- Import contrôlé : charger depuis voyages/saint-martin-2026/comparaison.csv
-- (ou l'équivalent JSON) ligne par ligne, jamais en écrasement de masse, et seulement
-- après vérification manuelle des trois points de garde-fous en tête de fichier.
