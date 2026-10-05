-- Proposition de schéma SQL pour le suivi des offres Saint-Martin 2026.
-- NON EXÉCUTÉ. Aucune instance D1/SQL n'a été créée ni modifiée par cette session.
--
-- Portée et garde-fous :
-- - Toutes les tables sont préfixées `sxm_` pour ne jamais collisionner avec :
--   - les tables de l'addon Kodi lui-même (`history`, `resume`, `watched`, `favorite`
--     dans la base `venom-xbmc-addons-db`, PR #3) — sans rapport, non touchées ;
--   - les tables Andaman (`hotels`, `vols`, `alias_hotels`, `avis_voyageurs`) qui
--     existeraient déjà dans la base distante UUID c770c2dc-e95e-468b-8b95-c96e4238b8a3
--     d'après les instructions AGENTS.md d'un autre workspace (signalé par le voyageur,
--     non vérifié depuis cette session) — non touchées.
-- - Avant toute exécution réelle : vérifier (1) quelle instance D1/SQL exécute ceci,
--   (2) qui en est propriétaire, (3) le schéma exact déjà présent dans la base UUID
--   c770c2dc-… le cas échéant (noms de colonnes, types, conventions déjà en usage pour
--   Andaman — à réutiliser plutôt qu'à dupliquer si compatible), (4) qu'aucune table
--   `sxm_*` n'existe déjà avec un schéma différent. Ne pas exécuter tant que ces quatre
--   points ne sont pas confirmés.
-- - Aucune donnée personnelle : pas de nom de voyageur, coordonnées, moyen de paiement.
--
-- Montants : stockés en CENTIMES (INTEGER), jamais en REAL/FLOAT, pour éliminer tout
-- risque d'arrondi flottant sur des sommes financières. Convention d'arrondi : toute
-- conversion depuis une source à 2 décimales (ou plus) est arrondie AU CENTIME SUPÉRIEUR
-- (ceil), jamais au plus proche ni tronquée, pour ne jamais sous-estimer un budget.
-- Exemple : 12 705,00 USD -> montant_total_centimes = 1270500 (devise = 'USD').
-- Aucune conversion USD/EUR n'est stockée ici sans taux de change daté (voir
-- sxm_taux_change ci-dessous) : ne jamais comparer deux montants de devises
-- différentes sans passer par cette table.

CREATE TABLE IF NOT EXISTS sxm_offres (
  offre_id            TEXT PRIMARY KEY,       -- ex: fr-baierouge-villa-laperlabianca
  cote                TEXT NOT NULL CHECK (cote IN ('FR','NL','a_verifier')),
  zone                TEXT NOT NULL,
  formule              TEXT NOT NULL CHECK (formule IN
                         ('villa_seule','hotel','package_vol_hebergement',
                          'voyage_a_composer','agence_locale_multi_unites')),
  nom_offre           TEXT NOT NULL,
  unite_exacte        TEXT NOT NULL,
  capacite_max        INTEGER,
  capacite_utilisee   INTEGER NOT NULL DEFAULT 2,
  acces_sable_statut  TEXT NOT NULL CHECK (acces_sable_statut IN ('oui','non','a_verifier')),
  acces_sable_m       REAL,                   -- distance : non financier, REAL acceptable ici
  plage_type          TEXT NOT NULL CHECK (plage_type IN
                         ('privee_exclusive','publique_acces_prive','publique','a_verifier')),
  plage_note          TEXT,
  piscine_statut      TEXT NOT NULL CHECK (piscine_statut IN
                         ('privee_a_l_unite','commune_partagee','aucune','a_verifier')),
  jacuzzi_statut      TEXT NOT NULL CHECK (jacuzzi_statut IN
                         ('prive_a_l_unite','commun_partage','aucun','a_verifier')),
  created_at_utc      TEXT NOT NULL,           -- ISO 8601, NULL interdit ici (ligne créée = horodatage connu)
  updated_at_utc      TEXT NOT NULL
);

-- Une offre peut avoir PLUSIEURS cotations pour les MÊMES dates, venant de vendeurs,
-- chambres/unités ou grilles différents (ex: La Perla Bianca cotée à la fois par
-- exceptionalvillas.com et par villasinluxury.com) : la cotation est donc reliée
-- directement à sa source (source_id), et l'unicité porte sur le triplet
-- (offre_id, dates, source_id), pas sur (offre_id, dates) seul.
CREATE TABLE IF NOT EXISTS sxm_cotations (
  cotation_id             INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id                TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  source_id               INTEGER NOT NULL REFERENCES sxm_sources(source_id),
  fenetre_checkin         TEXT,               -- ISO date, NULL si aucune ancre précise n'a de prix (cas "incomplet")
  fenetre_checkout        TEXT,               -- = checkin + 9 nuits pour ce projet quand renseigné
  nuits                   INTEGER NOT NULL DEFAULT 9,
  montant_total_centimes  INTEGER,            -- NULL tant qu'aucun montant n'est connu ; jamais 0 par défaut
  devise                  TEXT NOT NULL DEFAULT 'EUR',
  arrondi_applique         TEXT,               -- ex: 'aucun montant à arrondir' ou 'arrondi au centime supérieur depuis 12704.5X'
  tarif_unite_exacte       INTEGER NOT NULL DEFAULT 0,  -- booléen 0/1
  est_simulation           INTEGER NOT NULL DEFAULT 0,  -- 1 = calcul arithmétique à partir d'une grille, PAS un devis ni un prix réservable
  note_estimation          TEXT,               -- si simulation, expliquer précisément le calcul et ses hypothèses
  disponibilite            TEXT NOT NULL CHECK (disponibilite IN ('confirmee','indisponible','inconnue')),
  verifiee_le_utc          TEXT,               -- NULL si l'horodatage précis n'a pas été transmis par la source — ne jamais inventer une heure
  statut                   TEXT NOT NULL CHECK (statut IN ('confirme','incomplet','indisponible')),
  UNIQUE (offre_id, fenetre_checkin, fenetre_checkout, source_id)
);

CREATE TABLE IF NOT EXISTS sxm_taux_change (
  taux_id         INTEGER PRIMARY KEY AUTOINCREMENT,
  devise_base     TEXT NOT NULL,
  devise_cible    TEXT NOT NULL,
  taux            REAL NOT NULL,               -- non financier stocké tel quel (taux, pas un montant) : REAL acceptable
  date_taux       TEXT NOT NULL,               -- date publiée par la source (ex: Frankfurter/BCE), pas la date de lecture
  fournisseur     TEXT NOT NULL,               -- ex: 'Frankfurter (ECB)'
  lu_le_utc       TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS sxm_conditions (
  offre_id                TEXT PRIMARY KEY REFERENCES sxm_offres(offre_id),
  annulation               TEXT,
  petit_dejeuner_inclus    TEXT,   -- 'oui' / 'non' / 'non_applicable' / 'non_precise'
  caution                  TEXT,
  sejour_minimum_nuits     INTEGER,
  autres                   TEXT
);

-- Avis : plusieurs corpus distincts par offre (plateformes différentes) — NE JAMAIS
-- sommer nombre/note entre deux lignes de cette table pour une même offre.
CREATE TABLE IF NOT EXISTS sxm_avis (
  avis_id        INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id       TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  source_corpus  TEXT NOT NULL,   -- ex: 'St Martin Blue', 'Isle Blue', 'WhereToStay', 'Airbnb'
  nombre         INTEGER,
  note_moyenne   REAL,
  echelle        TEXT,
  UNIQUE (offre_id, source_corpus)
);

CREATE TABLE IF NOT EXISTS sxm_sources (
  source_id             INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id              TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  url                   TEXT NOT NULL,
  date_consultation_utc TEXT,                  -- NULL si non transmis par Codex — ne jamais fabriquer un horodatage
  origine               TEXT NOT NULL CHECK (origine IN
                          ('codex_villas_fr','codex_villas_nl','codex_agences_locales',
                           'ci_travel_agent_trivago','ci_travel_agent_kiwi',
                           'booking_connector','autre'))
);

CREATE TABLE IF NOT EXISTS sxm_photos (
  photo_id        INTEGER PRIMARY KEY AUTOINCREMENT,
  offre_id        TEXT NOT NULL REFERENCES sxm_offres(offre_id),
  page_url        TEXT NOT NULL,
  droits          TEXT NOT NULL CHECK (droits IN ('a_verifier','reutilisables','lien_externe_uniquement')),
  telechargee     INTEGER NOT NULL DEFAULT 0,   -- 0 tant que droits != 'reutilisables'
  chemin_local    TEXT
);

-- Import contrôlé : charger depuis voyages/saint-martin-2026/comparaison.csv (ou
-- comparaison-schema.json, source de vérité) ligne par ligne, jamais en écrasement de
-- masse, et seulement après vérification manuelle des quatre points de garde-fous en
-- tête de fichier. Convertir chaque montant en centimes avec arrondi supérieur documenté
-- dans `arrondi_applique` ; laisser `montant_total_centimes` NULL si la source ne donne
-- aucun chiffre (ne jamais coder un 0 par défaut, qui se lirait comme un prix nul).
