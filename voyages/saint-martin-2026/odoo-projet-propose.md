# Projet Odoo proposé — Saint-Martin 2026 (NON ÉCRIT)

**Rien n'a été écrit dans Odoo.** Aucun connecteur Odoo n'est configuré pour ce compte
(`ListConnectors` avec le mot-clé "odoo" → résultat vide, vérifié le 29/09/2026) : cette
session ne pourrait de toute façon rien y écrire. Ce document est une proposition à
valider — instance Odoo cible et périmètre restent à confirmer par le voyageur avant
toute création réelle.

## Proposition de structure (module Projet Odoo)

**Projet** : « Saint-Martin 2026 »

**Étapes (stages)** :
1. Recherche hébergement (FR) — cartes : une par offre villa/hôtel FR en cours
2. Recherche hébergement (NL) — cartes : une par offre villa/hôtel NL en cours
3. Agences locales — cartes : une par agence contactable
4. Hébergement retenu — critères d'acceptation remplis (voir `codex-missions.md`)
5. Vols — cartes : recherche TUN→SXM (bloquée tant que l'étape 4 n'a pas au moins une
   carte par côté)
6. Budget consolidé
7. Suivi voyage (itinéraire, formalités)

**Champs proposés par carte/tâche** : offre_id (référence à `comparaison.csv`), statut
(confirmé/incomplet/indisponible), URL source, date de vérification UTC — mêmes champs
que le schéma de comparaison, pour rester synchronisé sans double saisie.

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
