# Matrice source → rôle → indépendance → contradictions

Mise à jour 29/09/2026 (dernière relecture croisée contre README.md et
comparaison-schema.json). Construite à partir des rapports Codex du voyageur + 6
sous-agents WebSearch de cette session (`agent-orchestration-journal.md`). Aucune
réservation, contact, compte.

## Villas — hébergement

| Source | Rôle | Dates testées | Preuve obtenue | Vraiment indépendante ? | Contradictions connues |
| --- | --- | --- | --- | --- | --- |
| St Martin Blue (stmartinblue.com) | Calendrier public Bianca/Classic/Bahari | 14/14 (les 3 villas) | Total TTC + disponibilité affichés en direct pour 5-6 fenêtres | **NON** — marque de « Destination Blue » (S-Corp, Caroline du Nord, Charlotte, fondée 2013), même famille corporative qu'Isle Blue/St Barts Blue/Barbados Blue ; pas une agence locale malgré le nom. Texte exact de la page partenaires toujours non retrouvé mot pour mot (recherche indexée seulement, WebFetch bloqué) | Bahari : Expedia.fr affiche « aucune disponibilité » sur son propre canal pour 03→12/12, quand SMB confirme cette fenêtre disponible — deux canaux, deux réponses, aucune ne prime |
| Isle Blue (isleblue.co) | Villa Vittoria (NL) | 14/14 | 1 fenêtre chiffrée (06→15/12, 14 999 USD) | **NON indépendante de St Martin Blue** (même famille « Destination Blue ») — ne pas compter comme 2 sources séparées pour corroborer un prix | — |
| VillaVEO | Cross-check Bahari, agences locales | 14/14 (Bahari) | ≈7 665 EUR incomplet (taxe sur devis), bouton demande sur toutes les fenêtres | **RÉVISÉ (sous-agent, 29/09) : franchise française (fondée 2014, Martinique), MAIS Sint Maarten/St-Martin n'apparaît PAS parmi ses propres agences locales listées (6 agences actives : Martinique, Guadeloupe, Dévoluy, Corse, Réunion)** — l'inventaire St-Martin semble géré à distance via le réseau, pas par une agence locale dédiée. Confiance dégradée par rapport à l'évaluation initiale. | **CONFLIT MAJEUR non résolu avec St Martin Blue** sur 13/14 fenêtres (SMB indisponible, VillaVEO « demandable » au même prix). Bahari est aussi syndiquée sur Villas of Distinction/ExceptionalVillas/VillaRental.com (une source y cite 850-2 200 USD/nuit, cohérent avec la grille wheretostay.com déjà connue). |
| Lux Villa Vacation | Gestionnaire local Bianca/Classic (grille) | 0/14 lisible en ligne | Grille seule, pas de calendrier | Probable local (adresse Baie Rouge trouvée, hôte Airbnb « Jasmine » de longue date gérant le cluster La Perla Estate), confiance moyenne | — |
| Soualiga Homes | Agence locale, Soualiga Beach House | — | Fourchette 714-1786 €/nuit sans dates | **Non vérifiable par recherche indépendante** (domaine introuvable via WebSearch, deux tentatives) — la mention SIRET/carte CPI vient uniquement du rapport Codex, non recoupée ici | — |
| 40Weeks / Podium Caraibes | Agence locale, Villa Marie (lagune) | — | Listing catalogue | Probable modèle direct-propriétaire (description cohérente sur st-martin.org), entité « Podium Caraibes » non retrouvée en registre | — |
| So Chic | Piste locale mentionnée (Codex/forums) | — | **AUCUNE — entreprise introuvable via WebSearch** (deux tentatives ; collisions avec des annonces sans rapport) | Non déterminable | Ne pas citer comme source de prix tant que l'entreprise elle-même n'est pas localisée |
| Côte Soleil | Piste locale mentionnée (Codex/forums) | — | **AUCUNE — entreprise introuvable via WebSearch** (collisions avec des propriétés sans rapport) | Non déterminable | Idem So Chic |
| Jennifer's Vacation Villas | **Nouvelle piste primaire** — mise en avant par l'office de tourisme SHTA/visitstmaarten.com, agence Simpson Bay, spécialisée villas des deux côtés dont beachfront | Non testé | Existence confirmée par une source officielle (office de tourisme) — **prix/disponibilité/équipements NON acquis** | Source de vérification plausible car présentée directement par l'organisme officiel, pas juste indexée | À vérifier en priorité dans le prochain round |
| Slowlife Villas (slowlife-villas.com) | Piste locale française, Terres Basses | — | Catalogue seulement, aucune preuve de calendrier/prix | Non déterminée | — |
| BookStMartin | Mentionné, non utilisé comme source de prix | — | bookstmartin.com/villa-rentals/ affiche explicitement « prices powered by Booking.com and Vrbo », catalogue de 289 séjours — page lue par un agent Codex sur le web le 29/09/2026 (pas directement par le voyageur) | **CONFIRMÉ : revendeur/agrégateur, PAS une agence locale directe** | Ne compte ni comme tarif direct ni comme 2ᵉ source indépendante |
| Eden Rock Villa Rental (St-Barth, branche alentours) | Villa « Anja » | — | Catalogue Classic/Deluxe/Prestige/Ultraluxe | **Indépendante de Destination Blue** — extension de la marque hôtelière Eden Rock (Oetker Collection), pas liée à St Martin Blue/Isle Blue | — |
| Marla Villas (St-Barth, branche alentours) | Non encore utilisée comme source de prix | — | — | **Indépendante** — petite agence boutique basée à Gustavia, sans groupe parent identifié | — |

## Packages / vols

| Source | Rôle | Dates testées | Preuve obtenue | Vraiment indépendante ? | Contradictions connues |
| --- | --- | --- | --- | --- | --- |
| Expedia.com (hôtel seul, ID 87925871) | Cross-check Bianca 06→15/12 | 1/14 lue | 12 425 USD TTC, 4 avis 10/10 | Indépendante de St Martin Blue/Destination Blue (OTA généraliste) | +1 040 USD vs St Martin Blue (11 385 USD) — catégorie de chambre pas encore confirmée équivalente |
| Expedia.fr (package vol+villa, ID 105299651) | Package complet Bianca 06→15/12 | 1/14, étape paiement atteinte | **14 322,63 EUR/2 à l'étape paiement** (11 492,22 sous-total + 1 611,82 taxes/frais + 1 218,59 frais établissement), villa piscine+bain à remous privés confirmés, vol AF Standard même jour, bagage inclus | Indépendante, ID **distinct** du hôtel-seul (105299651 ≠ 87925871, 0 avis vs 4 — ne pas fusionner) | CGV : frais/surtaxes possibles sur place non garantis inclus ; observation partiellement qualifiée, pas un total définitif |
| Expedia.fr (package vol+villa) | Bahari 03→12/12 | 1/14 | « Aucune disponibilité sur notre site » | Indépendante | Contredit la disponibilité confirmée SMB sur ce canal précis |
| Google Flights + Air France direct | Vols TUN→SXM | 3 fenêtres (06→15, 02→11, 03→12) | Itinéraires + prix réels | Air France = source primaire (compagnie) ; KILROY = OTA distincte, tarif non équivalent terme à terme | **Précision (29/09) : dépend du tarif, pas généralisable** — tarif Light (1 888-2 139 USD/2 selon fenêtre) = 0 soute ; tarif Standard confirmé pour 03→12/12 ET 06→15/12 (4 512,98 USD/2) = 1×23kg/adulte/sens INCLUS. Le filtre bagages testé directement sur Google Flights (02→11 et 05→15) ne proposait que des bagages cabine, aucune option soute — ne pas généraliser l'aide officielle Google à toutes les recherches. |
| TUI | Piste package évoquée | — | **Aucune preuve d'une desserte TUN→Caraïbes** — présence TUI en Tunisie uniquement en marché entrant (Tunisie vendue aux Européens, pas l'inverse) | — | Canal jugé implausible pour ce trajet |
| AF Holidays | Piste package évoquée | — | Marque de package dynamique AF réelle (lancée 2024), AF dessert TUN et Paris-SXM — **plausible en principe, non confirmé pour cette origine précise** | — | — |
| Corsair | Piste package évoquée | — | **Aucune preuve** que Corsair dessert TUN directement ni SXM directement | — | Canal jugé implausible |
| Directours | Piste package évoquée | — | Agence généraliste réelle (depuis 1994), mix Afrique du Nord + Caraïbes dans son CA, mais **aucun produit TUN-Caraïbes concret trouvé** | — | Plausible seulement comme agence sur-mesure, pas comme vendeur de route packagée |

## Forums (pistes qualitatives uniquement — jamais une preuve de prix/équipement 2026)

| Source | Contenu trouvé | Valeur probante |
| --- | --- | --- |
| TripAdvisor (ShowTopic k15490294) | Sentiment positif envers St Martin Blue (2 témoignages : service réactif, transfert aéroport, fiabilité sur plusieurs années) — paraphrase de recherche, pas de citation vérifiée mot pour mot | Anecdotique, ne certifie ni prix ni équipement 2026 |
| Reddit r/SXM 1qgbe25 (« rental for march/april ») | **Non retrouvé par la recherche** — contenu inaccessible, les agences citées dans le message initial du voyageur (BookStMartin/So Chic/Soualiga/Côte Soleil/40Weeks) n'ont pas pu être recoupées indépendamment sur ce fil précis | Aucune valeur probante établie ici |
| Reddit r/SXM 1mxngaw (« villa rental companies ») | Nouvelle piste signalée par le voyageur, non encore lue par un sous-agent | À vérifier |
| Reddit r/SXM 1rffyho (« ocean front villa for 3 couples ») | Nouvelle piste signalée par le voyageur (mentionne Terres Basses), non encore lue par un sous-agent | À vérifier |

## Synthèse indépendance

**Deux familles corporatives identifiées pour Bianca/Classic/Vittoria**, pas trois/quatre
sources indépendantes : St Martin Blue et Isle Blue = même entité mère (Destination
Blue, NC). Les sites « spécialistes » qui listent La Perla ou Bahari (Isle Blue,
Exceptional Villas, Villas of Distinction, Rental Escapes, Villa Luxe, VillaRental.com)
revendent le même inventaire syndiqué — aucun d'eux ne corrobore un autre indépendamment.
BookStMartin est désormais confirmé comme un revendeur Booking.com/Vrbo, pas une source
directe. **Sources réellement indépendantes de Destination Blue obtenues à ce jour** :
VillaVEO (mais gestion St-Martin non locale confirmée), Lux Villa Vacation, Expedia
(hôtel seul et package), Air France/Google Flights, Eden Rock Villa Rental et Marla
Villas (branche alentours St-Barth). Jennifer's Vacation Villas est une piste
supplémentaire non encore exploitée.

## Contradictions ouvertes, non résolues

1. **Bahari, disponibilité 03→12/12** : confirmée par St Martin Blue, « aucune
   disponibilité » sur Expedia.fr, « demandable » sans confirmation via VillaVEO. Trois
   canaux, trois réponses différentes.
2. **Bianca, prix 06→15/12** : 11 385 USD hébergement seul (St Martin Blue) vs 12 425 USD
   hébergement seul (Expedia.com) vs 14 322,63 EUR package complet vol inclus (Expedia.fr,
   étape paiement) vs ≈14 000,88 EUR indicatif en construisant soi-même hébergement (St
   Martin Blue, taux BCE) + vol séparé (AF Standard même jour) — écart de seulement
   ≈321,75 EUR entre le package et le « construit », **mais montants non équivalents**
   (canal, taxes, frais locaux différents) : aucune garantie que l'un soit le meilleur choix.
3. **Vol La Perla 06→15/12** : DEUX itinéraires AF distincts identifiés pour cette
   fenêtre — l'ancien (AF1185, départ TUN 05/12 17:15, nuit à CDG, 25h55 total) est
   **obsolète comme recommandation, conservé en historique seulement** ; le nouveau
   (AF1385/AF446, départ TUN 06/12 05:30, même jour, pas de nuit) est le comparable
   retenu pour tout calcul de budget désormais.

## Distinction Claude / Codex (rappel)

Cette matrice mélange deux types de preuve, jamais confondus : les rapports **Codex**
(le voyageur, navigation web réelle en direct, calendriers/écrans de paiement lus) et les
**6 sous-agents Claude WebSearch** de cette session (`agent-orchestration-journal.md`,
recherche indexée seulement, WebFetch bloqué — aucune navigation de calendrier en
direct). Les deux sont complémentaires, pas équivalents.
