# Saint-Martin 2026 — état des lieux et structure de comparaison

## Mise à jour du 29/09/2026 (suite de mission — orchestration Codex)

- **Fenêtre de séjour corrigée deux fois par le voyageur le même jour** : d'abord
  16 nuits (30/11→16/12) fixées comme scénario principal, puis 9 nuits fixes
  (30/11→09/12, dates du projet Thaïlande), puis **fenêtre de balayage 23/11→15/12,
  9 nuits sur place, check-in réel SXM = début du séjour** (version en vigueur — voir
  `comparaison-schema.json` § `fenetres_dates_reference`). Les 16 nuits sont désormais
  **historiques uniquement**, jamais mélangées aux prix/disponibilités à 9 nuits.
- **Méthode reprise explicitement du skill `travel-agent` v1.3.0** (branche
  `claude/travel-agent-skill-setup-vhqmwf`, non fusionnée, non modifiée par ce dossier) :
  voir `roles-agents-audit.md` § 4 pour le détail des règles appliquées.
- **Premier lot Codex (4 villas)** intégré en statut `incomplet`/`indisponible` dans
  `comparaison-schema.json` et `comparaison.csv` : La Perla Bianca, La Perla Classic
  (Baie Rouge, FR), Villa Bahari at Shore Pointe (Cupecoy, NL), Villa Marie (Baie Nettlé,
  exclue — accès lagune, pas mer ouverte).
- Nouveaux fichiers de ce lot : `roles-agents-audit.md` (audit des agents/rôles avant
  toute création), `codex-missions.md` (missions ciblées + critères d'acceptation),
  `manifests/sxm_v2_hotels.json` + `manifests/sxm_v2_vols.json` (entrées adaptées au
  format du skill, sans toucher à `SKILL.md` ni à Andaman), `odoo-projet-propose.md`
  (proposition non écrite, aucun connecteur Odoo disponible), `sql-schema-sxm.sql`
  (schéma proposé, non exécuté), `photos-manifest.json` (séparé de l'`assets.json`
  partagé Asie/Andaman), `sources-legales-plages.md` (règle « jamais de plage privée
  sans preuve légale » — sources officielles non accessibles depuis cet environnement,
  egress bloqué).

---

Ce dossier n'a **aucun rapport avec l'addon Kodi** de ce dépôt. Il sert de
scratch space partagé pour un projet de voyage personnel (Saint-Martin /
Sint Maarten, 2 adultes), suivant le même usage déjà établi par la
session « travel-agent » (voir PR #1, non fusionnée) et par la session
« sxm-travel-research » (branche `claude/sxm-travel-research`).

**Aucune donnée personnelle ou sensible n'est stockée ici** : pas de nom de
voyageur, pas de coordonnées, pas de numéro de réservation, pas de moyen de
paiement. Uniquement des données publiques d'offres (prix affichés, notes,
liens) et leur statut de vérification.

Aucun achat, compte, réservation ni contact prestataire n'a été fait ou
n'est prévu depuis ce dossier.

## 1. Audit — état constaté le 29/09/2026 (UTC)

### Artefact « Saint-Martin 2026 » (https://claude.ai/artifact/4xHbYPxbs3QCZRk7qJVxJU)

- Référence de séjour dans l'artefact : **16 nuits, 30/11 → 16/12/2026**, 2 adultes, budget 8 000 €.
- Correction déjà appliquée (session en cours, 25/09) : **Hôtel La Plantation est à ~550 m
  (600 yards) de la plage d'Orient Bay, donc pas « directement sur plage »**, malgré la
  mention « plage privée » dans ses équipements Booking. C'est désormais explicite dans
  la fiche, avec un tag d'alerte sur l'écart équipements/distance. Vérifié à nouveau ce
  jour : la fiche ne classe plus La Plantation comme accès plage direct.
- Aucune autre fiche hôtel de l'artefact n'affirme un accès plage privé/exclusif sans
  disposer d'une distance vérifiée, à l'exception de Bleu Marine Beach (Grand Case,
  « plage à environ 1 m ») — donnée Booking non recoupée par une deuxième source, à
  traiter comme non confirmée tant qu'aucune autre source ne la corrobore.
- L'artefact ne distingue pas aujourd'hui équipements communs (piscine d'hôtel, spa
  partagé) vs équipements privés (piscine privée à l'unité, jacuzzi privé à l'unité) :
  toutes les fiches actuelles sont des hôtels classiques (chambres), pas des villas —
  cette distinction devient nécessaire seulement avec les offres villa, ci-dessous.

### Sessions liées (compte Claude Code Remote)

| Session | Titre | État | Branche | Remarque |
|---|---|---|---|---|
| `session_01EDaSHPYLdcvD9NvRNqQkc5` | Projet Saint Martin | en cours (celle-ci) | `claude/lucid-ride-qlbgqb` | — |
| `session_0179mWR1LwPt25hBS8iyhtUX` | Recherche détaillée Saint-Martin | **déconnectée**, bloquée depuis le 25/09 sur « continuer à approfondir un point ? » | `claude/sharp-davinci-xklhzo` (non poussée sur origin, injoignable) | Considérer comme obsolète ; son travail antérieur est déjà reflété dans l'artefact. |
| `session_01Vrdy3n8bqpuBoCu9YxtzCp` | **« Base de données SQL gratuite »** (titre trompeur) | **déconnectée**, bloquée sur « Je continue ? » | `claude/sxm-travel-research` | A poussé les manifestes de recherche SXM (vols + hôtels) et lancé un run CI. Le titre suggère aussi un travail sur une base SQL (D1 ?) potentiellement partagée avec d'autres voyages (Andaman). **Non touché, conformément à la consigne.** |

Aucune session Codex (OpenAI) n'est visible ni pilotable depuis cet environnement
Claude Code : je n'ai pas accès aux « trois recherches Codex » (villas FR, villas NL,
agences locales) mentionnées comme lancées en parallèle. Je ne peux ni suivre leur
progression ni récupérer leurs résultats automatiquement — il faudra me les transmettre
(texte, capture, export) quand ils seront sourcés, ou me donner un accès (dépôt, lien)
où ils sont déposés.

### Recherche automatisée déjà en dépôt (branche `claude/sxm-travel-research`, run CI 36609793370, 29/09/2026)

Différente des recherches Codex demandées — à ne pas confondre. C'est une recherche
Claude (pas Codex) via le pipeline CI `travel-agent` (Kiwi pour les vols, Trivago pour
l'hébergement), sur une **fenêtre de 9 nuits (29/11 → 08/12/2026)**, donc **non alignée**
sur les 16 nuits (30/11 → 16/12/2026) de l'artefact principal.

Constats sur les données obtenues (`skills/travel-agent/test-output-sxm-v1-hotels/…`,
branche `claude/sxm-travel-research`, non fusionnée) :

- **Requête « Orient Bay » (5★) : résultat vide/inexploitable** — un seul enregistrement
  retourné, qui est la zone elle-même (pas un hôtel), sans prix ni avis.
- **Requête « Terres Basses » (5★) : un seul résultat**, "Larbre À Graines", 93 €/nuit,
  834 € pour 9 nuits, seulement 6 avis — prix très bas pour un 5★ en zone villas de luxe :
  **à vérifier, probablement une erreur de correspondance** (nom/catégorie).
- **Requête « Simpson Bay » (5★) : un seul résultat**, "Simpson Bay Penthouse", mais avec
  `hotel_rating: 3` (incohérent avec le filtre 5★ demandé), 0 avis.
- **Requête « Grand Case » (5★) : 10 résultats, mais aucun n'est à Grand Case.** Le moteur
  a élargi la recherche à toute la zone et même à l'île voisine d'Anguilla (Cap Juluca,
  Aurora Anguilla Resort, Villa Anguillitta, Hotel Cuisinart — tous à Anguilla, pas à
  Saint-Martin). Seuls "La Samanna" (Baie Rouge, FR) et "JW Marriott St. Maarten" ont une
  localisation plausible sur l'île, mais ni l'un ni l'autre n'est à Grand Case.

**Conclusion : ces 4 requêtes Trivago sont à rejeter en l'état comme source pour le
tableau de comparaison.** Le filtrage géographique de l'outil est trop large (rayon zone
plutôt que point précis), le filtre 5★ n'est pas fiable (résultat à 3★ obtenu), et aucun
résultat ne porte les champs nécessaires (accès plage, piscine privée, jacuzzi privé).
Rien de tout cela n'est un résultat « prouvé » au sens de la consigne — statut
`indisponible` dans le schéma ci-dessous tant qu'une requête plus précise (par nom
d'établissement, ou avec géocodage exact) n'est pas relancée.

Les manifestes de vols (`sxm_v1_vols.json`, TUN et BRU, fenêtre 20/11→05/12, 9–10 nuits)
ont un run CI complété mais non encore audité en détail dans cette session — à faire à
l'étape suivante, une fois les hébergements stabilisés (cf. consigne : coter les vols
et les forfaits en dernier, pour des dates alignées).

### Dépôt GitHub

- **`choukrikodi/venom-xbmc-addons` est public** (et un fork). Confirmé via l'API ce jour.
- Aucune branche nommée explicitement « saint-martin » n'existait avant ce commit ; la
  branche la plus proche est `claude/sxm-travel-research` (recherche vols/hôtels, pas de
  dossier dédié structuré).
- PR ouvertes sans rapport avec ce sujet : #1 (skill travel-agent générique, brouillon,
  non fusionnée), #3 (API Cloudflare Worker pour la base D1 de l'addon Kodi lui-même —
  tables `history/resume/watched/favorite`, **sans rapport avec un voyage** ; ne pas
  confondre avec la base « voyage » mentionnée par la session SQL ci-dessus).
- **D1 / Andaman : non touchés**, conformément à la consigne. Aucun appel Cloudflare D1
  n'a été fait depuis cette session.

## 2. Corrections à faire

1. Ne pas relancer la recherche villa avec la même requête générique par zone sur
   Trivago : préciser soit un nom d'établissement, soit des coordonnées + rayon serré
   (< 1–2 km), et vérifier chaque résultat par `country_city`/`distance` avant de le
   garder — sinon on récupère des hôtels hors zone (voire hors île, cf. Anguilla).
2. Fixer une seule fenêtre de dates de référence pour toute comparaison villa : soit les
   16 nuits (30/11→16/12) de l'artefact, soit les 9 nuits (29/11→08/12 ou 20/11→05/12
   selon vols) de la recherche CI — **ne jamais mélanger les deux dans une même ligne du
   tableau** ; le schéma ci-dessous porte un champ dédié pour ça.
3. Distinguer explicitement, pour chaque offre : équipements **communs** à
   l'établissement (piscine d'hôtel, jacuzzi du spa) vs équipements **privés à l'unité**
   (piscine privée de la villa, jacuzzi privé de la villa/chambre) — aucune offre trouvée
   à ce jour ne documente cette distinction correctement, elle devra être vérifiée
   manuellement offre par offre.
4. Ne présenter aucune offre villa comme confirmée tant que sa fiche ne cite pas une
   source avec URL + date de consultation UTC.

## 3. Données manquantes

- Résultats Codex (villas FR, villas NL, agences locales) : **non reçus**.
- Prix vols alignés sur les mêmes dates que les villas retenues (dépend du choix de
  fenêtre, cf. correction n°2).
- Toute donnée « accès direct au sable », « piscine privée », « jacuzzi privé » pour une
  offre nommée et vérifiable : aucune à ce jour.
- Disponibilité réelle (vs prix affiché) pour les dates exactes 30/11–16/12/2026.

## 4. Prochaine étape d'intégration (après réception des rapports Codex)

1. Recevoir les trois rapports Codex sourcés (villas FR, villas NL, agences locales).
2. Les transposer un par un dans `comparaison-schema.json` / `comparaison.csv`
   ci-dessous, en renseignant `statut` honnêtement (`confirmé` seulement si prix +
   disponibilité + source datée concordent).
3. Auditer les manifestes de vols déjà exécutés (`sxm_v1_vols.json`, run 36609793370)
   avec la même rigueur que ci-dessus avant de les citer.
4. Ne construire un budget/forfait consolidé qu'une fois les séjours (villas + hôtels)
   stabilisés à un statut `confirmé` ou `incomplet` documenté — jamais avant.
5. Mettre à jour l'artefact « Saint-Martin 2026 » seulement à partir de lignes
   `confirmé`/`incomplet` de ce tableau, jamais directement depuis une sortie brute
   d'outil.
