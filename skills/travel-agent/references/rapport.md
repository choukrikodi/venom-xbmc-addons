# Rapport standard et règles de calcul

## Structure identique en Markdown et PDF

1. **Paramètres et `## Hypothèses`** : entrées normalisées, contraintes fermes/préférences, hypothèses et âge des traces avec leur conséquence, avant tout chiffrage.
2. **Synthèse et recommandation** : date/heure UTC du rapport ; trois lignes A/B/C ; recommandation argumentée immédiatement sous le tableau.
3. **Détail A, B, C** : arbitrages, météo datée, vols internationaux et internes, hôtels aux dates exactes et conditions, budgets, itinéraire et variante confort ; un plan B par bloc.
4. **Formalités et santé** : par nationalité et pays/transit, autorité officielle et SPF belge, dates de consultation, exigences, enfants si concernés et points à confirmer.
5. **Tracker** : tâches, responsables, échéances, statut et lien.
6. **Sources et limites** : registre des preuves, matrice dates × destinations demandées/reçues/manquantes, taux de change, sources non admissibles et données manquantes.

Synthèse : `circuit | départ origine / arrivée destination / retour origine | nuits sur place | total groupe et par personne bas–haut, marge comprise | écart au plafond | plage ou adéquation au style /5 | transferts | état budget`.
Préciser la définition des transferts (changements d'étape, aéroports inclus ou séparés). La note /5 est une appréciation motivée par les priorités du voyageur, pas une mesure fournie par un outil. Ne pas comparer des notes de style différentes comme une même métrique.

## Fiche de prix et statut

`poste | quantité/unité | montant bas | montant haut | devise | formule | ✅/⚠️ | preuve`.
La preuve comprend `identifiant | source | URL d'offre/réservation | UTC collecte | dates | effectif/âges/chambres | aéroports | bagages | taxes/conditions | paramètres confirmés/manquants | trace brute`.
Une URL générique est signalée comme telle et ne vaut pas preuve du tarif. Distinguer la date de publication, la date d'un tarif et sa date de consultation.

- ✅ : prix observé pour l'ensemble des critères déterminants du poste, sans contradiction. Ce n'est pas une garantie de disponibilité au paiement.
- ⚠️ : estimation sourcée ou prix partiellement confirmé. Nommer le critère manquant, la source et l'hypothèse de calcul.
- Si aucune source datée exploitable n'existe : indiquer « manquant », expliquer les recherches tentées et laisser les bornes nulles. Ne pas remplacer par zéro ni produire une borne haute fictive.
- Un vol hors aéroport ou date autorisés est écarté ; le rabaisser à ⚠️ ne le rend pas conforme.

Hôtel : prix **total du séjour et de toutes les chambres**, dates et nombre de nuits, voyageurs et répartition, catégorie, avis/nombre, chambre, repas, annulation (date/heure/fuseau et pénalité), prépaiement, taxes et frais sur place. Marquer séparément ce qui manque ; ne pas multiplier `price_per_stay` par les nuits.

## Budget et marge

Postes obligatoires : vols internationaux ; liaisons internes ; hôtels ; transferts locaux ; repas ; assurance ; activités ; formalités/taxes/frais obligatoires. Documenter les postes inclus ailleurs pour éviter les doubles comptes, notamment petit déjeuner, bagages, ferries et transferts hôteliers.

Noter `B` la somme basse des postes et `H` la somme haute, hors réserve. Toutes les quantités couvrent le groupe et le séjour ; les prix par personne/chambre/nuit sont convertis une seule fois.

Avec une marge `m` appliquée aux dépenses : `total bas = B × (1+m)` ; `total haut = H × (1+m)` ; plafond admissible de dépenses `H ≤ P/(1+m)` ; solde `P − total haut`. Afficher le montant de réserve séparément. Si l'utilisateur exprime la réserve en fraction du plafond, utiliser `réserve = P × m`, puis `H + réserve ≤ P` : ces conventions ne sont pas interchangeables. Préciser laquelle est retenue. Si une réserve est demandée sans taux, proposer un taux explicite de 10–15 % ; aucune marge silencieuse. Sans plafond, conserver les totaux et remplacer l'écart par « non applicable ».

États de classement :

1. **Dans le budget, sous les hypothèses indiquées** si tous les postes sont bornés et `total haut ≤ P`.
2. **Risque de dépassement** si `total bas ≤ P < total haut`.
3. **Au-dessus du plafond** si `P < total bas`.
4. **Budget non concluant** si un poste essentiel n'a pas de borne haute.

À état comparable, classer selon les priorités explicites, le confort, les heures de trajet et le risque ; ne pas inventer une pondération objective. Si toutes les options échouent, expliquer les changements nécessaires sans modifier les contraintes fermes.

La variante confort remplace des lignes identifiées (chambre/hôtel/transfert), conserve une seule version de chaque dépense et respecte le plafond avec sa réserve. Ne pas dépenser artificiellement tout le budget.

## Itinéraire, tracker et contrôle final

Pour chaque étape : `lieu | arrivée locale | départ local | nuits hôtel | hébergement | transfert vers étape suivante | durée porte à porte | coût/preuve`. Une traversée nocturne n'est pas une nuit d'hôtel. Vérifier les dates d'arrivée issues des vols, les départs matinaux et les temps d'embarquement.

Tracker : `tâche | option/étape | responsable | échéance officielle ou conseillée | source si officielle | état | lien`. Inclure prix/bagages, chambres/annulations, documents par personne, assurance et transport final. Pas de notification automatique ni d'achat sans demande distincte.

Avant export : sommes et conversions exactes, arrondis au centime en fin de calcul, conservation prudente de la borne haute, même devise partout, total par personne égal au groupe/effectif. Vérifier que les alternatives d'hôtels ne sont pas toutes additionnées et que les nuits se rejoignent sans trou ou double réservation implicite. Pour un PDF, contrôler pagination, tableaux et liens cliquables. Ne pas annoncer un PDF produit s'il n'existe pas.

## Parser les montants avant de calculer

Pour chaque chaîne, conserver le texte brut ; identifier devise et locale, retirer symbole/code et espaces ordinaires/insécables, valider groupement des milliers et séparateur décimal, puis convertir en `Decimal`. Exemples de fixtures EUR observées : `€ 951` et `€ 951` valent 951, `1.035€` vaut 1035 ; en locale anglaise `1,035.50` vaut 1035,50. Ne pas enlever indistinctement tous les points ou virgules. En présence de plusieurs montants, devise inconnue ou séparateurs ambigus, revenir à l’offre avant la somme. Recalculer par une opération déterministe, pas par lecture approximative.
