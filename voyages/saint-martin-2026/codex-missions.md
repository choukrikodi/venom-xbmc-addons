# Missions Codex ciblées — à dispatcher par le voyageur (orchestrateur relais)

Je (Claude Code) n'ai pas accès aux sessions Codex : le voyageur dispatche ces missions
et me rapporte les résultats sourcés, que je consolide dans `comparaison-schema.json` /
`comparaison.csv`. Toutes les missions utilisent l'agent Codex existant « Agent de
voyage » (`skills/travel-agent/agents/openai.yaml`) — aucun nouvel agent à créer (voir
`roles-agents-audit.md`). Méthode imposée : `skills/travel-agent/SKILL.md` v1.3.0
(7 phases, `## Hypothèses`, matrice datée UTC, croisement de sources, chambre
réellement sur la plage, prix total complet, liste vide ≠ absence d'offre).

## Ordre de mission (priorité fixée par le voyageur le 29/09/2026)

1. **Vague 2 — villas « bijoux » (FR/NL/agences)** : EN COURS. Voir ci-dessous.
2. **Mission D — vols TUN→SXM** : **BLOQUÉE**, ne pas dispatcher avant le retour complet
   de la Vague 2 (pas seulement dès qu'une offre atteint `incomplet` — la barre est
   désormais plus haute : au moins une offre `confirmé`, ou une conclusion explicite de
   la Vague 2 qu'aucun « bijou » à disponibilité démontrée n'existe dans le budget).
3. **Mission E — budget complet** : **BLOQUÉE**, après la mission D seulement.

**Aucune villa ne devient réservable à partir d'une grille tarifaire** — une grille (prix
par nuit/bande) reste une simulation arithmétique tant qu'un total final ET une
disponibilité ne sont pas affichés publiquement pour les dates exactes visées.

## Vague 2 — villas « bijoux », critère strict inchangé + nouvelles propriétés

**Objectif** : trouver des villas réellement **en bord de MER** (pas lagune), avec
**piscine privée ET jacuzzi privé confirmés**, et une **disponibilité démontrée** dans
la fenêtre 23/11→15/12/2026 pour 9 nuits — en cherchant aussi de **nouvelles propriétés**,
pas seulement les 3 candidats déjà connus (La Perla Bianca, La Perla Classic, Villa
Bahari, tous encore `incomplet` faute de preuve publique de prix total + disponibilité).

**Règle de preuve — priorité absolue** :
- Ne retenir que ce qui est **affiché publiquement** : total final daté + disponibilité
  affichée pour les dates exactes (une des 3 ancres ci-dessous ou une date à l'intérieur
  de la fenêtre).
- **Si le prix ou la disponibilité ne sont accessibles qu'en envoyant un formulaire ou en
  contactant le prestataire : s'arrêter là.** Ne jamais remplir de formulaire ni contacter
  qui que ce soit. Marquer explicitement le **« plafond de preuve »** atteint dans
  `ecarts_signales` (ex : « plafond de preuve : calendrier/prix visibles seulement après
  sélection de dates côté widget de réservation, non simulable sans y entrer d'informations
  de contact »), avec statut `incomplet`.
- Une évaluation qualitative de la rareté/du standing « bijou » (avec preuves/photos
  externes datées) est bienvenue en complément, mais **ne remplace jamais** les critères
  stricts (mer directe, piscine privée, jacuzzi privé, disponibilité démontrée, prix
  total). Une très belle villa sans preuve de disponibilité reste `incomplet`.

**Fenêtre commune** :
- Balayage : check-in entre le 23/11/2026 et le 06/12/2026, 9 nuits sur place (check-out
  = check-in + 9). Bornes = interprétation provisoire du relais, pas des dates exactes
  données mot pour mot par le voyageur (voir `comparaison-schema.json`).
- **Trois ancres à essayer en priorité** : 23/11→02/12, 30/11→09/12 (référence
  Thaïlande, illustrative), 06/12→15/12. Toute autre date dans la fenêtre est acceptable
  si c'est elle qui affiche une disponibilité publique.
- 2 adultes. Budget historique : **8 000 € tout compris** + réserve **distincte** de
  **1 000 €** (jamais 2 000 € — deux montants séparés) ; validité pour SXM à confirmer.
- Jamais de prix recyclé d'une fenêtre de dates vers une autre. Jamais de comparaison
  directe entre un montant USD et le plafond EUR sans taux de change daté (Frankfurter/BCE).

### A — Villas côté français (Baie Rouge, Terres Basses, Orient Bay, Grand Case)

1. Pour La Perla Bianca et La Perla Classic (et « La Vie en Bleu », dont l'URL manque
   encore — la redemander) : retenter un relevé de disponibilité/prix total public sur
   les 3 ancres ; sinon documenter le plafond de preuve précisément (St Martin Blue
   affiche « Grand Total $0 » sans sélection de dates — décrire l'obstacle exact
   rencontré, pas juste « non trouvé »).
2. Chercher au moins 2-3 **nouvelles** propriétés (pas Barefoot/Blue Horizon Beach
   Bungalow, déjà exclues faute de jacuzzi) répondant au critère strict complet
   (mer directe + piscine privée + jacuzzi privé), avec disponibilité publique si possible.
3. Pour Soualiga Beach House (agence Soualiga Homes, déjà légalement vérifiée) :
   redemander un prix daté sur des dates précises (la fourchette « 714-1786 €/nuit »
   sans dates est inexploitable) ; le jacuzzi manquant reste à lever ou à écarter selon
   le critère strict.
4. Ne jamais écrire « plage privée » : au mieux « accès direct » à une plage publique
   (voir `sources-legales-plages.md`).

### B — Villas côté néerlandais (Cupecoy, Simpson Bay, Maho)

1. Villa Bahari (villa 3 chambres, corrigé) : retenter disponibilité/prix total public
   sur les 3 ancres, sinon documenter le plafond de preuve précisément.
2. Chercher au moins 2-3 **nouvelles** propriétés répondant au critère strict complet
   (Corinne's Villa, Blue Sanctuary, Beachside Villas déjà exclues — ne pas les
   rechercher à nouveau sauf nouvelle information changeant leur statut).
3. Toujours en attente : lecture de `sintmaartengov.org` (politique des plages, bloquée
   pour moi par le proxy réseau) pour le statut légal réel côté néerlandais.

### C — Agences locales et calendriers publics (les deux côtés)

1. Auprès des trois agences déjà vérifiées légalement (VillaVEO, Soualiga Homes,
   40Weeks/Podium Caraibes) : chercher d'autres biens de leur catalogue répondant au
   critère strict complet, avec calendrier/prix public si le site en expose un
   (beaucoup de moteurs de réservation affichent un calendrier sans nécessiter de
   contact — le vérifier avant de conclure au plafond de preuve).
2. Chercher 1-2 agences locales supplémentaires légalement vérifiables, si elles existent.
3. Toujours : aucun contact prestataire, aucun formulaire rempli.

**Critères d'acceptation (par offre, inchangés)** :
- [ ] Nom exact de l'unité + capacité + lien source direct
- [ ] Prix total (pas prix/nuit seul) pour une date précise dans la fenêtre, avec dates exactes
- [ ] Disponibilité confirmée oui/non/inconnue, datée UTC (ou plafond de preuve documenté si non atteignable)
- [ ] Accès à la mer directe décrit factuellement (jamais « privée » sans preuve légale)
- [ ] Piscine et jacuzzi classés privé-unité / commun / aucun, séparément — les deux doivent être « privé-unité » pour le critère strict
- [ ] Corpus d'avis listés séparément (jamais additionnés)
- [ ] Droits photo précisés — ne rien télécharger sauf « réutilisable »
- [ ] Statut proposé : confirmé / incomplet / indisponible, avec justification et plafond de preuve le cas échéant

## Mission D — Vols TUN→SXM (BLOQUÉE)

Manifeste déjà préparé : `manifests/sxm_v2_vols.json`. Ne pas dispatcher avant le retour
complet de la Vague 2 (voir « Ordre de mission » ci-dessus).

## Mission E — Budget complet (BLOQUÉE, après la mission D)

Non cadrée. À définir une fois D consolidée.
