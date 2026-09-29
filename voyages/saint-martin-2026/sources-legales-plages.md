# Statut légal des plages — règle appliquée dans ce dossier

**Règle appliquée par défaut, faute d'accès aux deux sources officielles ci-dessous
depuis cet environnement** (voir limite technique en bas de page) : ne jamais écrire
« plage privée » ou « plage exclusive » pour une offre sans preuve légale explicite et
datée. Au mieux, décrire un « accès direct » (physique, depuis l'unité) à une plage dont
le statut public/privé reste à vérifier. C'est le principe déjà appliqué dans
`comparaison-schema.json` (champ `plage.type`, quasiment toujours `a_verifier` dans ce
lot).

## Sources officielles citées par le voyageur

1. **Côté français** — préfecture de Saint-Barthélemy et Saint-Martin :
   https://www.saint-barth-saint-martin.gouv.fr/Actualites/Environnement-retablir-l-acces-aux-plages-de-la-Baie-Nettle
   (rétablissement de l'accès aux plages de la Baie Nettlé).
2. **Côté néerlandais** — gouvernement de Sint Maarten, politique des plages :
   https://www.sintmaartengov.org/Documents/Policies/beach%20policy%20rewritten.pdf

## Limite technique constatée le 29/09/2026

Cette session n'a **pas pu accéder** à ces deux URLs (`EGRESS_BLOCKED` — proxy réseau de
l'environnement Claude Code) : je ne peux donc pas citer leur contenu exact ni confirmer
un principe légal précis à partir d'elles. Ce que j'avance ci-dessous vient de
connaissances générales, pas d'une lecture de ces documents — à vérifier par quiconque
peut les consulter (Codex semble y avoir eu accès, puisque le voyageur les a obtenus de
ce lot).

**Principe général (France)**, à confirmer par la source n°1 : en droit français, le
rivage de la mer fait partie du domaine public maritime (Code général de la propriété
des personnes publiques) ; il n'existe en principe pas de plage légalement privée sur le
territoire français, y compris à Saint-Martin (collectivité d'outre-mer). Une villa peut
avoir un accès direct/physique à une plage, jamais une propriété exclusive de cette
plage. Si la source n°1 nuance ce principe (cas de la Baie Nettlé spécifiquement), le
corriger ici.

**Côté néerlandais** : aucun principe équivalent vérifié pour cette session — la source
n°2 doit être lue avant de trancher `plage.type` pour toute offre côté NL (Cupecoy,
Simpson Bay, Maho). Ne pas supposer que la règle française s'applique telle quelle.

## Utilisation dans les missions Codex

Les missions A/B (`codex-missions.md`) demandent explicitement de lire ces documents
(source n°2 en particulier, non couverte) et de rapporter la règle exacte avec citation,
plutôt que de se fier à la description commerciale d'une agence.
