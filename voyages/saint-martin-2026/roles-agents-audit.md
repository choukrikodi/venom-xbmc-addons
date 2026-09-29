# Audit des rôles/agents déjà configurés (avant toute création)

Audité le 29/09/2026 sur les branches `claude/travel-agent-skill-setup-vhqmwf` (PR #1,
non fusionnée) et `claude/sxm-travel-research`. **Un seul rôle d'agent IA est réellement
configuré**, ci-dessous. Ne pas créer de second agent pour « villas FR », « villas NL »,
« agences locales », etc. : ce sont des **missions** (prompts) données au même agent, pas
des agents distincts.

## 1. Agent Codex configuré : `skills/travel-agent/agents/openai.yaml`

- `display_name`: "Agent de voyage" — un seul rôle générique, pas de spécialisation par
  destination ni par type de recherche (villa/hôtel/agence).
- `default_prompt`: charge `SKILL.md`, suit les 7 phases, écrit `## Hypothèses` avant
  tout chiffrage, ne réserve rien.
- Outils déclarés : MCP Kiwi (vols+bagages), Trivago (hôtels+tendances), Frankfurter
  (change BCE), Open-Meteo (météo), OSM (géocodage/distances), Playwright (relecture
  page de réservation avant tout ✅).
- `allow_implicit_invocation: true`.
- Fichiers d'accompagnement (même dossier) : `.mcp.json` (racine du dépôt, portée Claude
  Code) et `codex.config.example.toml` (à copier dans `~/.codex/config.toml`) — pas
  d'autre fichier d'agent trouvé.

**Conclusion : c'est le seul agent Codex « déjà formé ».** Les missions villas FR, villas
NL et agences locales lui sont données comme des prompts différents (voir
`codex-missions.md`), pas comme des agents séparés à créer.

## 2. Rôle « orchestrateur / ouvrier » (protocole `AGENTS.md` racine)

- **Ouvrier = Codex** (agent ci-dessus). Livre un livrable à la fois, s'arrête, déclare
  ses hypothèses et données non vérifiées, ne devine jamais une donnée manquante.
- **Orchestrateur = Claude Code (moi, cette session)**. Relit chaque livrable, décide du
  périmètre, consolide. C'est exactement le rôle que le voyageur m'a confié dans cette
  mission ("tu es l'orchestrateur opérationnel des agents Codex").
- Aucun autre rôle nommé n'existe dans ce protocole (pas de rôle « reviewer » séparé,
  pas de rôle « QA » séparé) — la relecture/consolidation fait partie du rôle
  orchestrateur, déjà rempli.

## 3. Rôles demandés par le voyageur qui n'ont AUCUNE configuration existante

Pour chacun, statut trouvé et décision (créer un fichier de config vs. traiter comme
tâche manuelle de l'orchestrateur) :

| Rôle demandé | Config existante trouvée | Décision |
| --- | --- | --- |
| Recherche villas FR/NL, agences locales | Aucune (c'est l'agent générique ci-dessus, missionné différemment) | Pas de nouvel agent ; 3 missions Codex distinctes, voir `codex-missions.md` |
| GitHub / suivi | Aucun agent dédié — fait partie du rôle orchestrateur | Assuré directement par cette session (issues/jalons créés ci-dessous) |
| Odoo Projet | **Aucun connecteur Odoo configuré** (`ListConnectors` avec le mot-clé "odoo" → liste vide) | Impossible d'écrire dans Odoo depuis cette session de toute façon ; proposition documentaire seule, voir `odoo-projet-propose.md` |
| Site de présentation | Aucun agent dédié ; l'artefact « Saint-Martin 2026 » en tient déjà lieu, distinct de `andaman-2026-visite.html` (fichier séparé sur la branche travel-agent) | Pas de nouvel agent ; continuer sur l'artefact existant, publier seulement les offres qualifiées (jamais les pistes incomplet/indisponible de ce dossier) |
| SQL | Aucun schéma ni agent SQL dédié au voyage ; le seul D1 connu (`venom-xbmc-addons-db`, PR #3) sert l'addon Kodi (tables `history/resume/watched/favorite`), sans rapport | Proposition de schéma seule, non exécutée, voir `sql-schema-sxm.sql` |
| Photos | Pas d'agent dédié ; `scripts/fetch_assets.py` + `assets.json` existent mais sont **partagés avec Asie/Andaman** dans le même dossier `skills/travel-agent/evals/files/web/` | Ne pas ajouter d'entrées SXM dans cet `assets.json` partagé ; manifeste photo séparé, voir `photos-manifest.json` |

## 4. Méthode reprise du skill `travel-agent` (v1.3.0, branche `claude/travel-agent-skill-setup-vhqmwf`)

Le voyageur a demandé de reprendre explicitement cette méthode. Points appliqués aux
missions Codex et au schéma de comparaison de ce dossier (sans modifier `SKILL.md` ni
toucher aux fichiers Andaman) :

- `## Hypothèses` déclarées avant tout chiffrage (déjà fait dans `comparaison-schema.json`
  pour les bornes de dates).
- Matrice origine × destination × date de départ × nuits, avec horodatage UTC pour
  chaque vérification (`verifiee_le_utc` / `date_consultation_utc` dans le schéma).
- Croisement de sources : ne jamais valider une offre sur une seule source (déjà appliqué
  : chaque villa a 2-3 sources ; aucune n'est encore croisée avec un opérateur
  indépendant, d'où le statut `incomplet`).
- Chambre/unité réellement sur la plage, pas seulement l'établissement qualifié « bord de
  plage » — repris dans `acces_direct_sable` (distinct de `plage.type`).
- Relevé de prix complet (prix total du séjour, pas un « à partir de » par nuit sans
  dates) — champ `prix.montant_total` obligatoire pour un statut `confirmé`.
- Une liste de résultats vide ne prouve pas l'absence d'offre — reflété dans les missions
  Codex (`codex-missions.md`) et dans les manifestes `manifests/sxm_v2_*.json`.

## 5. Ce qui N'est PAS créé dans ce lot (pour éviter les doublons)

- Aucun nouveau fichier d'agent (`agents/*.yaml`) : le rôle Codex existant suffit.
- Aucune modification de `SKILL.md`, `AGENTS.md` ou `references/` du skill générique.
- Aucun agent/skill Odoo créé (les skills `odoo-*` déjà installés sur ce compte servent un
  usage comptable/FidManager totalement différent — ne pas les réutiliser ni s'en
  inspirer pour ce projet voyage).
