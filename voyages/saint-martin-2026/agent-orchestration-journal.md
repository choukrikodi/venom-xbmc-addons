# Journal d'orchestration — Agent tool (Claude Code), 29/09/2026

Preuve d'exécution réelle, pas une liste décorative. Chaque ligne correspond à un appel
`Agent` effectif de cette session (`subagent_type: general-purpose`, `run_in_background:
false`), visible dans le transcript de cette session. Outils réellement utilisés par les
sous-agents : `WebSearch` uniquement — `WebFetch` est bloqué par le proxy réseau de cet
environnement (vérifié : échoue même sur `example.com`), donc aucun sous-agent n'a pu
naviguer un calendrier de réservation en direct. Aucun sous-agent n'a créé de compte, ni
contacté de prestataire, ni réservé quoi que ce soit.

| Agent ID | Mission | Outils utilisés | Appels outils | Durée | Statut |
| --- | --- | --- | --- | --- | --- |
| `a08008efc18d30125` | Indépendance des agences locales SXM (VillaVEO, Lux Villa Vacation, Soualiga Homes, 40Weeks, BookStMartin, annuaire SHTA) | WebSearch | 27 | 86,7 s | Terminé — rapport reçu |
| `a73655545077bfada` | Identité corporative de St Martin Blue, relation avec Isle Blue/WIMCO, explication de l'identité Bianca/Classic | WebSearch | 13 | 52,7 s | Terminé — rapport reçu |
| `addab6f529fd866bf` | Frais de bagages Air France, fiabilité du filtre bagages Google Flights, statut des scrapers non officiels | WebSearch | 7 | 34,8 s | Terminé — rapport reçu |

**Résultats intégrés** dans `comparaison-schema.json` / `comparaison.csv` / ce dossier
(voir `matrice-sources.md`) : correction majeure sur l'indépendance St Martin Blue/Isle
Blue (même famille corporative, PAS deux sources indépendantes), explication vérifiée de
l'identité de prix Bianca/Classic (villas jumelles d'un même domaine, "La Perla Estate",
pas une anomalie), confirmation que le même inventaire La Perla est syndiqué sur de
nombreux sites "spécialistes" en apparence indépendants (pattern industrie, pas une
fraude), statut de VillaVEO/Lux Villa Vacation/40Weeks (probablement locaux, confiance
moyenne, pas de confirmation registre), Soualiga Homes et BookStMartin non retrouvables
via WebSearch (silence ≠ infirmation).

**Ce que cette preuve NE couvre PAS** : aucun de ces trois agents n'a pu lire un
calendrier de réservation en direct (WebFetch bloqué) — la vérification live de
prix/disponibilité reste le travail de vos agents Codex, pas de ces sous-agents. Cette
session peut faire de la recherche indexée (WebSearch) en parallèle et de façon
traçable ; elle ne peut pas remplacer une navigation web réelle sur un widget de
réservation.
