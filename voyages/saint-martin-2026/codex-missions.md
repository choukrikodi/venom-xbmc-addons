# Missions Codex ciblées — à dispatcher par le voyageur (orchestrateur relais)

Je (Claude Code) n'ai pas accès aux sessions Codex : le voyageur dispatche ces missions
et me rapporte les résultats sourcés, que je consolide dans `comparaison-schema.json` /
`comparaison.csv`. Toutes les missions utilisent l'agent Codex existant « Agent de
voyage » (`skills/travel-agent/agents/openai.yaml`) — aucun nouvel agent à créer (voir
`roles-agents-audit.md`). Méthode imposée : `skills/travel-agent/SKILL.md` v1.3.0
(7 phases, `## Hypothèses`, matrice datée UTC, croisement de sources, chambre
réellement sur la plage, prix total complet, liste vide ≠ absence d'offre).

## Fenêtre commune à toutes les missions villas/hôtels

- **Balayage** : check-in entre le 23/11/2026 et le 06/12/2026, 9 nuits sur place
  (check-out = check-in + 9), donc check-out entre le 02/12 et le 15/12/2026.
- **Hypothèse de bornes** (à corriger si le voyageur voulait dire autre chose) :
  « dernière semaine de novembre » = 23/11→30/11 ; « quinze premiers jours de
  décembre » = 01/12→15/12.
- **Trois ancres minimales à coter pour chaque villa/hôtel retenu** (si le tarif ne
  varie pas jour par jour dans cette plage, le dire explicitement plutôt que de deviner) :
  1. précoce : 23/11→02/12
  2. référence Thaïlande (illustrative, pas exclusive) : 30/11→09/12
  3. tardive : 06/12→15/12
- 2 adultes, 1 chambre/1 unité. Budget de référence : 8 000 € + réserve séparée de
  1 000 € (2 000 € total réserve dispo si toujours applicable côté voyageur — à
  confirmer, ne pas supposer un chiffre plus récent que celui donné en mission n°1).
- **Jamais de prix recyclé d'une fenêtre de dates vers une autre**, même à un jour près.

## Mission A — Villas côté français (Baie Rouge, Terres Basses, Orient Bay, Grand Case)

**Objectif** : transformer les pistes déjà remontées (La Perla Bianca, La Perla Classic)
en devis exploitables, et en trouver 2-3 alternatives si celles-ci restent hors budget.

**Tâches** :
1. Pour La Perla Bianca et La Perla Classic : demander au gestionnaire/à l'agence un
   **devis total ferme** (pas une grille par bande) pour chacune des 3 ancres ci-dessus,
   avec **disponibilité réelle confirmée** (pas juste « la grille l'indique »).
2. Résoudre l'écart de grille signalé (exceptionalvillas.com vs VillaLuxe pour La Perla
   Bianca) : citer les deux montants, dater chaque consultation UTC, ne pas trancher sans
   plus d'info.
3. Vérifier pour La Perla Classic si la zone de baignade rocheuse signalée est confirmée
   par des avis récents (2025-2026) ou des photos datées — sinon marquer `a_verifier`.
4. Chercher 2-3 alternatives supplémentaires (villa 1 chambre, 2 adultes, accès direct
   sable, piscine privée) dans un budget plus réaliste (viser <150-200 €/nuit tout compris
   si possible, sinon documenter qu'aucune option de ce standing n'existe à ce prix).
5. Pour chaque offre : distinguer explicitement piscine/jacuzzi **privés à l'unité** vs
   **communs à la résidence/au domaine** — ne jamais supposer « privé » sans confirmation
   écrite de la source.
6. Ne jamais écrire « plage privée » : au mieux « accès direct » à une plage publique
   (voir `sources-legales-plages.md` — le domaine public maritime français ne permet pas
   de plage légalement privée).

**Critères d'acceptation (par offre)** :
- [ ] Nom exact de l'unité + capacité + lien source direct (pas une agrégation)
- [ ] Prix total (pas prix/nuit seul) pour au moins une des 3 ancres, avec dates exactes
- [ ] Disponibilité confirmée oui/non/inconnue, datée UTC
- [ ] Distance/nature de l'accès à la plage décrite factuellement (jamais « privée »)
- [ ] Piscine et jacuzzi classés privé-unité / commun / aucun, séparément
- [ ] Nombre d'avis + note si disponible
- [ ] Droits photo précisés (réutilisable oui/non/inconnu) — ne rien télécharger sinon
- [ ] Statut proposé : confirmé / incomplet / indisponible, avec justification

## Mission B — Villas côté néerlandais (Cupecoy, Simpson Bay, Maho)

Mêmes tâches et critères d'acceptation que la mission A, appliqués à Villa Bahari at
Shore Pointe et à 2-3 alternatives côté NL. Points spécifiques :
1. Confirmer ou infirmer le hot tub défaillant signalé dans un avis 2026 (date exacte de
   l'avis, a-t-il été réparé depuis ?).
2. Vérifier la nature du sable à Cupecoy pour les dates visées (variable/rocheux par
   endroits signalé) — si possible via un avis daté de la même saison (fin
   novembre-décembre).
3. Consulter, si accessible, `sintmaartengov.org` (politique des plages) pour le statut
   légal réel côté néerlandais — cette session n'a pas pu y accéder (proxy réseau
   bloqué), donc c'est un travail encore à faire, pas déjà couvert.

## Mission C — Agences locales (couvrant les deux côtés)

**Objectif** : identifier 2-3 agences de location locales fiables (pas juste des
agrégateurs internationaux) couvrant Saint-Martin/Sint Maarten, avec un catalogue
consultable en ligne.

**Tâches** :
1. Lister les agences avec présence légale vérifiable (adresse, mentions légales,
   ancienneté) — écarter tout site sans identification claire.
2. Pour chacune, extraire 2-3 villas correspondant au critère strict (1 chambre, 2
   adultes, accès direct sable, piscine privée ; jacuzzi privé si possible) dans la
   fenêtre de balayage.
3. Mêmes critères d'acceptation que la mission A pour chaque offre remontée.
4. Signaler si une agence propose un contact direct/formulaire de devis — **ne pas le
   remplir ni contacter le prestataire**, seulement noter que l'option existe pour une
   étape ultérieure explicitement demandée par le voyageur.

## Mission D — Vols TUN→SXM (EN ATTENTE, ne pas dispatcher avant stabilisation des hébergements)

Manifeste déjà préparé : `manifests/sxm_v2_vols.json` (balayage départ TUN 22/11→06/12,
nights_in_dst=9, adapté du format `skills/travel-agent`). À dispatcher seulement quand au
moins une offre villa/hôtel par côté (FR/NL) atteint le statut `confirmé` ou `incomplet`
documenté, pour pouvoir aligner les dates de vol sur un check-in réel plutôt que sur une
hypothèse.

## Mission E — Packages vol+hébergement (APRÈS la mission D)

Non cadrée pour l'instant. À définir une fois les missions A-D consolidées, en réutilisant
les mêmes critères d'acceptation (prix total, dates alignées, disponibilité confirmée).
