# Projet Odoo proposé — Saint-Martin 2026 (NON ÉCRIT)

**Rien n'a été écrit dans Odoo.** Aucun connecteur Odoo n'est configuré pour ce compte
(`ListConnectors` avec le mot-clé "odoo" → résultat vide, vérifié le 29/09/2026) : cette
session ne pourrait de toute façon rien y écrire. Ce document est une proposition à
valider — instance Odoo cible et périmètre restent à confirmer par le voyageur avant
toute création réelle.

## Proposition de structure (module Projet Odoo)

**Correction du 29/09/2026** : la première version de ce document listait 7 "étapes"
qui étaient en réalité des CHANTIERS (villas FR, villas NL, agences, vols, budget…), pas
un flux Kanban. Un Kanban Odoo doit représenter une PROGRESSION d'avancement, la même
pour toute carte, pas une liste de sujets. Corrigé ci-dessous : les chantiers deviennent
des tâches parentes (ou des étiquettes), et les colonnes Kanban redeviennent un vrai flux.

**Projet** : « Saint-Martin 2026 »

**Colonnes Kanban (flux, identique pour toute carte)** :
1. À faire
2. En cours
3. À vérifier (donnée publiée mais prix/disponibilité/critère encore à confirmer —
   correspond au statut `incomplet` du schéma de comparaison)
4. Terminé (correspond au statut `confirmé` ou à une exclusion actée `indisponible`)

**Tâches parentes (ou étiquettes, selon la préférence du voyageur) — un chantier chacune,
regroupant les cartes qui le concernent** :
- Villas côté FR
- Villas côté NL
- Agences locales
- Vols TUN→SXM (bloquée : aucune sous-tâche ne doit avancer au-delà de "À faire" tant que
  villas FR et NL n'ont pas chacune au moins une carte en "À vérifier" ou "Terminé")
- Budget consolidé
- Site vitrine / suivi voyage

**Une carte = une offre** (un `offre_id` de `comparaison.csv`), qui avance dans les 4
colonnes Kanban tout en restant rattachée à sa tâche parente/étiquette de chantier — pas
l'inverse (le chantier n'est jamais lui-même une colonne d'avancement).

**Champs proposés par carte** : offre_id (référence à `comparaison.csv`), statut
(confirmé/incomplet/indisponible — détermine la colonne Kanban), URL source, date de
vérification UTC (ou vide si non transmise, jamais inventée) — mêmes champs que le
schéma de comparaison, pour rester synchronisé sans double saisie.

**Méthode** : un skill Codex nommé `odoo-projet` existe déjà côté Codex (signalé par le
voyageur) et peut guider la structuration de ce plan côté Codex — ce n'est PAS un agent
Odoo déjà configuré ni une intégration branchée (voir `roles-agents-audit.md` § 3). Si le
voyageur peut en partager le gabarit exact, cette proposition sera alignée dessus plutôt
que de rester une structure inventée indépendamment.

## Pourquoi pas encore de création réelle

- Instance Odoo non identifiée (laquelle des bases mentionnées ailleurs dans ce compte,
  le cas échéant ?).
- Périmètre d'accès non vérifié (droits d'écriture, projet déjà existant à ne pas
  écraser).
- Consigne explicite du voyageur : « sans écrire dans Odoo tant que l'instance et le
  périmètre ne sont pas vérifiés ».

## Prochaine étape

Si le voyageur confirme une instance Odoo et le périmètre d'accès (et qu'un connecteur
Odoo est ajouté à ce compte), cette structure peut être créée telle quelle, avec les
données déjà consolidées dans `comparaison.csv` comme contenu initial des cartes.
