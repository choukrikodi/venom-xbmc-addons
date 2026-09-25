# Rapport Asie v5 — livraison L3c

Arrêté : **2026-09-24T19:38:00+00:00** — révision conforme au prompt L3c v2. Produit avec **travel-agent v1.3.0**, selon ses sept phases et le prompt [PROMPT_L3c_codex_v2.md](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk). Base : `rapport-asie-v4.md` de la branche `claude/travel-agent-skill-setup-vhqmwf`, corrections `0933699`, traces restaurées au commit **a202a88713267d2426a057101c562fbd8693acea**. Prix vols/hôtels du run complémentaire **35983276350** et des traces antérieures référencées. **Aucun nouvel appel Kiwi/Trivago, compte, devis nominatif, réservation ni dépense.** Les relevés publics L3c sont conservés. Cette révision ajoute les recoupements transmis par l’orchestrateur (connecteurs claude.ai, vers 11:55 UTC le 24/09/2026), explicitement **⚠️ source orchestrateur, capture non versionnée**, et une vérification publique DNP. Les UTC et limites figurent aux registres.
## Hypothèses


**Entrées confirmées :** 2 adultes, passeports belges ordinaires, BRU uniquement, CRL exclu ; départ entre le 15/11 et le 10/12/2026 ; 16–18 nuits sur place ; une étape préférée, deux maximum seulement avec gain net démontré ; hôtels 4–5★, détente, Asie du Sud-Est ; 1 soute par adulte sur les vols internationaux ; plafond groupe 8 000 €. Aucun compte ni clé payante.

**Chaque option comporte un seul lieu et un seul hôtel pour tout le séjour.** Les alternatives ne s’ajoutent jamais aux nuits. Aucun gain net ne justifie une deuxième étape.

| Hypothèse | Motif et conséquence | À confirmer |
|---|---|---|
| 1 chambre double, sans besoin d’accessibilité signalé | Occupation de recherche ; assurance calculée pour deux adultes supposés de 30–59 ans | Lit, mobilité, âge pour assurance |
| Réserve fixe de 1 000 € = 12,5 % du plafond | Dépenses avant réserve à maintenir sous 7 000 € | Convention conservée du L3 |
| Prix affichés = instantanés, non paniers contrôlés | Chambre, taxes/annulation et protection finale incomplètes | Offre finale avant paiement |
| Réduction de A à 16 nuits | Combinaison vol+hôtel la moins chère parmi les calendriers complets documentés | Prix contre durée et fatigue |
| Transferts estimés pour le groupe | Sources ou proxies détaillés ; pas de devis daté du trajet | Véhicule, bagages, horaire et tarif final |
| Trois repas/jour avec boissons ordinaires | Petit déjeuner non confirmé | Déduire seulement les repas prouvés inclus |
| Haut de repas = enveloppe, pas plafond fournisseur | Données contributives et restaurants d’hôtel différents | Style réel de restauration |
| Retour avant le 20/12 préférable, non impératif | A revient le 17/12, C le 19/12, B le 20/12 | Arbitrage final |


| Hypothèse ajoutée L3c | Motif et conséquence | À confirmer |
|---|---|---|
| Résidence habituelle belge, mutualité en ordre, deux adultes de 30–59 ans | Condition de travail pour l’assurance, pas une donnée personnelle connue | Âges réels, résidence, garanties et exclusions individuelles |
| Assurance couvrant tous les jours de déplacement | A : 19 jours, B : 20, C : 21, dates BRU incluses | La durée assurée ne se réduit pas aux nuits d’hôtel |
| Annulation : provision maximale sur 7 000 € de capital admissible | 8,2 % × 7 000 = 574 €, ajoutés à l’assistance ; plafond de calcul, pas prix déclaré du voyage | Capital réellement assurable, frais non récupérables et admissibilité des achats séparés |
| Domicile inconnu | Bas : gare accessible à pied, 30 km tarifaires SNCB ; haut : voiture, 100 km A/R et P3 pour 21 jours | Adresse, horaire du premier train, distance et véhicule |
| Hôtel et vols réglés en EUR ; dépenses thaïlandaises principalement en espèces | Modèle bancaire KBC + Krungsri, sans supposer que le voyageur est client | Carte réelle, limite de retrait, frais de change et monnaie du paiement |
| Naiyang Beach Hotel : `stars_unverified` | Booking ne l’a pas reconnu sous ce nom selon l’orchestrateur ; identité et 4★ non confirmées | Ne pas assimiler prix calculable à hôtel conforme certifié |
| Variante « hôtel certifié » | L’esprit, 4★ « officiel » selon Booking rapporté par l’orchestrateur ; 1 900,41 € pour 16 nuits | Aucun certificat indépendant ni capture Booking reçu ; chambre/taxes/navette à confirmer |
| 5–6 séances payantes, avec répétitions volontaires | Programme détente et non 5–6 excursions lointaines distinctes ; activités facultatives et modifiables | Places, accueil des clients extérieurs, mer et transferts exacts |
| Soins médicaux personnels, achats, minibar, blanchisserie et alcool fort non demandés | Pas de consommation implicite ; prescriptions/vaccins éventuels hors chiffrage tant que le besoin n’est pas connu | Un besoin médical ou une dépense supplémentaire imposerait une ligne dédiée |

**Lecture du budget final :** l’assurance, les activités, le transport vers BRU, la téléphonie, les pourboires, les frais de retrait et les repas de transit sont désormais chiffrés en ⚠️ estimations. **X** désigne uniquement les suppléments obligatoires non exposés par les offres finales : taxes/service hôteliers ou d’activités éventuellement en sus, frais imposés par le vendeur ou ajustement obligatoire de chambre/bagages. Leurs bornes demeurent **manquantes**, faute de panier ou de conditions complètes. Une hausse commerciale future n’est pas confondue avec un supplément déjà dû.

Les tableaux donnent `S_bas–S_haut + 1 000 € + X`, et non un faux total ferme. **État final au sens du skill : budget non concluant pour les trois options**, puisque X n’a pas de borne haute. Sous hypothèse TVA 7 % + service 10 % (taux officiels thaïlandais) sur l’hôtel, X ≈ 336 € pour L’esprit, inférieur à la tolérance de 597,83 € : la variante recommandée serait « dans le budget sous hypothèses » ; l’état formel reste non concluant faute de panier final. Le calcul quantifie exactement la tolérance restante ; seule la confirmation de X permet de passer à « dans le budget sous hypothèses ». X est propre à chaque scénario, et non un montant commun aux variantes. Aucun montant arbitraire de taxe ne remplace X. La réserve de 1 000 € reste intacte et ne sert pas à masquer ce manque.

## Synthèse A/B/C et recommandation

| Option / hôtel unique | BRU départ → BRU retour ; hôtel / nuits | Groupe, réserve comprise | Par personne, réserve comprise | Solde sur 8 000 € au haut | État / plage / transferts |
|---|---|---:|---:|---:|---|
| **A — Nai Yang / Naiyang Beach Hotel (`stars_unverified`)** | 2026-11-29 → 2026-12-17 ; 2026-11-30→2026-12-16, 16 nuits | ⚠️ 4 035,92 €–6 272,76 € + X | 2 017,96 €–3 136,38 € + X/2 | 1 727,24 € − X | Non concluant ; 3,5/5 ; 2 accès aéroport, 0 changement d’étape |
| **B — Ao Nang / Anyavee Ao Nang Bay Resort** | 2026-12-01 → 2026-12-20 ; 2026-12-02→2026-12-20, 18 nuits | ⚠️ 5 462,98 €–7 736,68 € + X | 2 731,49 €–3 868,34 € + X/2 | 263,32 € − X | Non concluant ; 3,5/5 ; 2 accès aéroport, 0 changement d’étape |
| **C — Khao Lak / Palm Galleria Resort** | 2026-11-29 → 2026-12-19 ; 2026-11-30→2026-12-18, 18 nuits | ⚠️ 4 993,63 €–7 278,55 € + X | 2 496,82 €–3 639,28 € + X/2 | 721,45 € − X | Non concluant ; 4/5 ; 2 accès aéroport, 0 changement d’étape |

**Classement de coût des bases : A, C, B**, toutes encore non concluantes à cause de X. **La base A à 771 € d’hôtel est désormais conditionnelle à la résolution de `stars_unverified`** ; elle ne prouve pas le respect du niveau hôtelier demandé. Le climat reste un proxy daté, aucun avantage météo certain n’est attribué à une plage.

**Recommandation révisée : privilégier Nai Yang avec la variante « hôtel certifié » L’esprit à 1 900,41 €, et les vols Air China déjà documentés à 1 018 €.** Cette variante fait **5 165,33 €–7 402,17 € + X pour deux**, réserve de 1 000 € comprise ; **2 582,66 €–3 701,09 € + X/2 par personne**, avec **597,83 € de tolérance pour X** au haut. Le libellé « certifié » reprend la mention « officiel » Booking rapportée par l’orchestrateur ; aucun certificat de classement indépendant n’a été obtenu. Le choix repose sur une catégorie mieux recoupée et des accès courts, sous confirmation des conditions finales.

La base C affiche un haut inférieur de **123,62 €** à cette variante A, et deux nuits de plus ; A n’est donc plus présenté comme moins cher à niveau de preuve hôtelier comparable. Le choix A privilégie la proximité de l’aéroport et la limitation des trajets terrestres ; C reste l’alternative pour 18 nuits en resort. B est plus cher dans le scénario détente retenu.

**Confort aérien :** garder Naiyang Beach Hotel et passer à Etihad reste chiffré à **4 593,19 €–6 830,04 € + X**, mais conserve le même drapeau hôtelier. Passer à **L’esprit Booking + Etihad Kiwi** donne **5 722,60 €–7 959,45 € + X**, réserve comprise : seulement **40,55 € pour X**, trop étroit pour recommander cette combinaison sans prix final. La variante confort antérieure L’esprit/Trivago à 1 807 € reste distincte, sans fusion de tarifs entre vendeurs. B confort dépasse déjà le plafond au haut ; C confort ne laisse que 12,17 € pour X.

Les notes plage restent les appréciations de v4, pas des garanties de météo ou de certification. La navette L’esprit annoncée gratuite par Booking n’est pas déduite tant que son application à la chambre et aux horaires n’est pas confirmée.

## Comparaison 16 / 17 / 18 nuits et billets


Les cinq lignes ci-dessous associent un hôtel **aux dates exactes d’arrivée et de départ**. Même hôtel Naiyang Beach Hotel, désormais `stars_unverified`, pour isoler l’effet du calendrier ; 2 adultes, 1 chambre, BE/EUR, 2 soutes structurées. Les prix hôtel sont des séjours, pas des prix/nuit multipliés.

| Scénario | Hôtel exact / nuits | Vols groupe | Hôtel groupe | Vol+hôtel | Preuves |
|---|---|---:|---:|---:|---|
| 16 nuits exactes | 2026-11-30→2026-12-16 ; 16 | ⚠️ 1 018,00 € | ⚠️ 771,00 € | 1 789,00 € | Vol : `test-output-v3/kiwi_hkt_exact_16n.json` [0], 2026-09-24T09:48:23+00:00, [offre](https://kiwi.com/u/m9tfuy) ; hôtel : `test-output-v3/trivago_naiyang_16n.json` [9], 2026-09-24T09:48:11+00:00, [offre](https://www.trivago.be/en-US/lm/naiyang-beach-hotel-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2722380;105-1320;105-1322;200-15960;dr-20261130-20261216;drs-40;rc-1-2&dealId=-4613757501875177488) |
| 17 nuits exactes | 2026-11-30→2026-12-17 ; 17 | ⚠️ 1 234,00 € | ⚠️ 819,00 € | 2 053,00 € | Vol : `test-output-v3/kiwi_hkt_exact_17n.json` [0], 2026-09-24T09:48:26+00:00, [offre](https://kiwi.com/u/ry4uku) ; hôtel : `test-output-v3/trivago_naiyang_17n.json` [9], 2026-09-24T09:48:13+00:00, [offre](https://www.trivago.be/en-US/lm/naiyang-beach-hotel-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2722380;105-1320;105-1322;200-15960;dr-20261130-20261217;drs-40;rc-1-2&dealId=-1217118755051191533) |
| 18 nuits AR | 2026-11-30→2026-12-18 ; 18 | ⚠️ 1 417,27 € | ⚠️ 868,00 € | 2 285,27 € | Vol : `test-output-v3/kiwi_hkt_fenetre_18n.json` [5], 2026-09-24T09:48:45+00:00, [offre](https://kiwi.com/u/79rhus) ; hôtel : `test-output-v3/trivago_naiyang_18n.json` [8], 2026-09-24T09:48:15+00:00, [offre](https://www.trivago.be/en-US/lm/naiyang-beach-hotel-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2722380;105-1320;105-1322;200-15960;dr-20261130-20261218;drs-40;rc-1-2&dealId=-2006501001029522391) |
| 16 nuits décembre | 2026-12-04→2026-12-20 ; 16 | ⚠️ 1 096,00 € | ⚠️ 771,00 € | 1 867,00 € | Vol : `test-output-v3/kiwi_hkt_fenetre_16n.json` [0], 2026-09-24T09:48:37+00:00, [offre](https://kiwi.com/u/fs29nb) ; hôtel : `test-output-v3/trivago_naiyang_prix_16n.json` [9], 2026-09-24T09:48:20+00:00, [offre](https://www.trivago.be/en-US/lm/naiyang-beach-hotel-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2722380;105-1320;105-1322;200-15960;dr-20261204-20261220;drs-40;rc-1-2&dealId=-2134995730214966839) |
| 17 nuits autre départ | 2026-11-29→2026-12-16 ; 17 | ⚠️ 1 365,71 € | ⚠️ 819,00 € | 2 184,71 € | Vol : `test-output-v3/kiwi_hkt_fenetre_17n.json` [3], 2026-09-24T09:48:42+00:00, [offre](https://kiwi.com/u/xgrgjk) ; hôtel : `test-output-v3/trivago_naiyang_variante_17n.json` [9], 2026-09-24T09:48:22+00:00, [offre](https://www.trivago.be/en-US/lm/naiyang-beach-hotel-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2722380;105-1320;105-1322;200-15960;dr-20261129-20261216;drs-40;rc-1-2&dealId=-1939095446218834547) |

**18 nuits, AR contre deux allers simples :** les deux simples coûtent **1 302,00 €** = 532,00 € + 770,00 €. Preuves : `test-output-v3/kiwi_hkt_ow_aller.json` [0], 2026-09-24T09:48:30+00:00, [offre](https://kiwi.com/u/k9qtc7) ; `test-output-v3/kiwi_hkt_ow_retour.json` [0], 2026-09-24T09:48:34+00:00, [offre](https://kiwi.com/u/b9wfzp). Ils couvrent arrivée HKT 30/11 et départ HKT 18/12, donc exactement les mêmes 18 nuits que l’AR à 1 417,27 € (`test-output-v3/kiwi_hkt_fenetre_18n.json` [5], 2026-09-24T09:48:45+00:00, [offre](https://kiwi.com/u/79rhus)). Économie aérienne : **115,27 €**. Avec l’hôtel Naiyang Beach Hotel à 868,00 €, cela fait **2 170,00 € vols+hôtel**, encore au-dessus du minimum 16 nuits.

Ces deux simples sont un **aller-retour acheté séparément, pas un véritable open-jaw** : les aéroports restent BRU/HKT. Le retour Qatar dure 28 h 30, dont 14 h 45 à DOH, contre 21 h pour le retour Etihad de l’AR ; le total aérien passe de 35 h 20 à 46 h 50. Deux contrats : modification/annulation de l’un ne protège pas automatiquement l’autre. Les filtres de connexion s’appliquent à chaque sens. Aucun repositionnement d’aéroport n’est ajouté. Un véritable open-jaw avec deuxième lieu n’a pas de gain net démontré et n’est pas imposé.

**Anomalie du balayage :** `kiwi_hkt_fenetre_16n` renvoie comme minimum 1 096 €, tandis que `kiwi_hkt_exact_16n` donne 1 018 € à une date pourtant dans la fenêtre. La requête large n’est pas exhaustive. Les minima 17/18 nuits des balayages concernent le 04/12→21/22/12, pour lesquels aucun devis hôtel long correspondant n’est fourni ; ils ne remplacent pas un total comparable. Ne pas prolonger les 16 nuits de décembre d’une ou deux nuits au prorata.

**Fatigue :** A/16 nuits exactes utilise l’itinéraire 0 à 1 018 €, et non l’itinéraire 1 au même prix mais 9 h 35 plus long à l’aller. Le minimum 17 nuits exactes impose un retour de 37 h 35, dont 21 h 35 à PEK : mauvais compromis détente. Ces différences expliquent pourquoi prix et durée de vol restent séparés.

**Portée :** cette matrice compare les combinaisons vols+hôtel validées. Les anciens sous-totaux v4 « hors U » ont été retirés ; les nouveaux budgets complets en postes connus concernent les scénarios A/B/C choisis. Les dates alternatives ne reçoivent aucun faux prix d’assurance ou d’activité aux dates non retenues.

## Détail des options


Climat daté commun : source [JMA](https://www.data.jma.go.jp/tcc/tcc/products/climate/climatview/graph_mkhtml_nrm.php?e=6&k=0&m=9&n=48565&r=0&s=1&y=2025), consultation conservée du L3 le 24/09/2026 (09:01 UTC). Station Phuket Airport : normale novembre 27,4 °C / 228,9 mm ; décembre 27,2 °C / 103,2 mm. Période statistique non affichée : ne pas en inventer une. Nai Yang est proche de la station ; Ao Nang/Khao Lak sont des proxies régionaux, pas des mesures exactes. Décembre paraît plus sec selon ce proxy, sans garantir baignade ni mer calme. A : 30/11–16/12 ; B : 02–20/12 ; C : 30/11–18/12. Aucun gain météo entre les trois lieux n’est démontré et aucune prévision quotidienne n’est fabriquée. Plan B pluie/houle : repos à l’hôtel, marche si sûre, pas de sortie bateau imposée.

Les offres **Trivago** ci-dessous : **2 adultes, 1 chambre, enfants 0, BE, EUR, filtre 4★/5★**. Les recoupements Booking de l’orchestrateur indiquent 2 adultes, 1 chambre et EUR ; marché de réservation et autres paramètres non précisés. Occupation contractuelle, chambre, repas, taxes finales, annulation (heure/fuseau/pénalité), prépaiement restent non confirmés. Les catégories sont déclarées, les certificats officiels non obtenus. Les dates, prix et compteurs sont contrôlés ; le prix final reste ⚠️. L’absence d’alarme heuristique n’est pas un certificat 4★.


### A — Nai Yang, 16 nuits : base Naiyang Beach Hotel sous réserve et variante L’esprit

#### Vols retenus

**⚠️ 1 018,00 € groupe** ; `test-output-v3/kiwi_hkt_exact_16n.json` [0], 2026-09-24T09:48:23+00:00, [offre](https://kiwi.com/u/m9tfuy). Échos ✅ : `BRU → HKT on 29/11/2026–29/11/2026, returning 16/12/2026–16/12/2026, 2 adults [≤2 stops/sector; no self-transfer]` et `passengers={"adults": 2, "children": 0, "infants": 0}` ; bagages `{"personalItem": 2, "cabinBag": 2, "checkedBag": 2}`. Poids/through-check et contrat final à confirmer.
- Aller : BRU→TFU→HKT, 2026-11-29T12:25:00 → 2026-11-30T12:45:00, 18 h 20. CA464, CA413.
- Retour : HKT→TFU→BRU, 2026-12-16T14:00:00 → 2026-12-17T06:20:00, 22 h 20. CA414, CA463.

#### Hôtel unique, plan B et confort

| Rôle | Hôtel / étoiles / avis | Dates exactes | Brut → total parsé | Distance / preuve |
|---|---|---|---|---|
| Base conditionnelle | Naiyang Beach Hotel ; ⚠️ `stars_unverified`, 4★ déclarées ; 7.6/10, 1,878 avis | 2026-11-30→2026-12-16 | `€ 771` → **⚠️ 771,00 €** | Nai Yang Beach, 0.5 km to City center ; `test-output-v3/trivago_naiyang_16n.json` [9], 2026-09-24T09:48:11+00:00, [offre](https://www.trivago.be/en-US/lm/naiyang-beach-hotel-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2722380;105-1320;105-1322;200-15960;dr-20261130-20261216;drs-40;rc-1-2&dealId=-4613757501875177488) ; annonceur Agoda |
| Alternative secondaire | Panphuree Residence ; 4★ déclarées ; 8.3/10, 6,451 avis | 2026-11-30→2026-12-16 | `€ 1.035` → **⚠️ 1 035,00 €** | Nai Yang Beach, 1.7 km to City center ; `test-output-v3/trivago_naiyang_16n.json` [4], 2026-09-24T09:48:11+00:00, [offre](https://www.trivago.be/en-US/lm/hotel-panphuree-residence-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-7128130;105-1320;105-1322;200-15960;dr-20261130-20261216;drs-40;rc-1-2&dealId=-1442023536548554602) ; annonceur Trip.com |
| Confort | L'esprit De Naiyang Beach Resort - SHA Extra Plus ; 4★ déclarées ; 8.3/10, 4,167 avis | 2026-11-30→2026-12-16 | `€ 1.807` → **⚠️ 1 807,00 €** | Nai Yang Beach, 0.9 km to City center ; `test-output-v3/trivago_naiyang_16n.json` [5], 2026-09-24T09:48:11+00:00, [offre](https://www.trivago.be/en-US/lm/l-esprit-de-naiyang-beach-resort-sha-extra-plus-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-2614304;105-1320;105-1322;200-15960;dr-20261130-20261216;drs-40;rc-1-2&dealId=-7679083535497710667) ; annonceur Agoda |

**Mise à jour v2 : Naiyang Beach Hotel reste à ⚠️ 771 €, avec `stars_unverified`.** Booking n’a pas reconnu ce nom selon l’orchestrateur. Identité, catégorie et prix doivent être recoupés chez le vendeur ; l’absence de reconnaissance n’est pas une preuve que l’hôtel n’existe pas. 48,19 €/nuit est proche mais **au-dessus** du plancher heuristique de 45 € : ce n’est pas un signal de prix sous plancher. Le drapeau est une dérogation conservatrice liée à l’identité non résolue, pas un cumul artificiel de deux critères. Le recoupement Google précédent ne résout pas ce point.

**Plan B prioritaire — variante « hôtel certifié » : L’esprit De Naiyang Beach Resort, ⚠️ 1 900,41 €**, 30/11→16/12/2026, 16 nuits, 2 adultes, 1 chambre, EUR. Selon Booking transmis par l’orchestrateur : 4★ « officiel », 8,3/10, 1 768 avis, bord de plage, navette gratuite. **⚠️ source orchestrateur, capture non versionnée**, vers 11:55 UTC le 24/09/2026 ; [preuve de transmission](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk), [Booking, lien générique](https://www.booking.com/). URL exacte d’offre non fournie, taxes/chambre/annulation non exposées. Le nom, la note et les étoiles recoupent l’entrée Trivago, mais le nombre d’avis concerne un autre site. La certification Booking rapportée ne vaut pas certificat obtenu d’un registre public. Panphuree reste une alternative secondaire ; il n’est pas cumulé avec L’esprit.


#### Budget bas–haut du groupe

| Poste | Bas | Haut | Statut, quantité et preuve |
|---|---:|---:|---|
| Vols | 1 018,00 € | 1 018,00 € | ⚠️ Trace et offre exacte ci-dessus, deux adultes et deux soutes structurées ; conditions finales à confirmer |
| Hôtel unique | 771,00 € | 771,00 € | ⚠️ price_per_stay parsé ; X séparé, jamais multiplié par les nuits |
| Transferts aéroport thaïlandais A/R | 10,53 € | 26,32 € | ⚠️ Sources TA/TB/TC, section Transferts ; même proxy qu’en v4 |
| Repas sur place, 17 jours | 492,27 € | 1 476,82 € | ⚠️ REPAS : 2 adultes × 17 jours × 550–1 650 THB / 37,987 ; source et UTC conservés au registre v4 |
| Repas pendant les trajets internationaux | 96,00 € | 240,00 € | ⚠️ R5 : 2 adultes × 4 repas supplémentaires × 12–30 € ; proxy Bruxelles, pas menu d’aéroport |
| Assurance | 177,84 € | 751,84 € | ⚠️ I1/I2/I3 : 2 × jours assurés × 4,68 € ; haut ajoute 574 € de provision annulation |
| Activités et accès locaux | 331,64 € | 473,79 € | ⚠️ Programme détaillé ci-dessous ; somme des séances et des trajets supplémentaires |
| Domicile↔BRU | 53,60 € | 233,10 € | ⚠️ D1–D4 : train 53,60 € ; P3 + énergie 233,10 €, alternatives non cumulées |
| SIM, TVA provisionnée | 33,77 € | 67,55 € | ⚠️ R2/R2t : 1–2 cartes × 1 199 THB × 1,07 / FX, 30 jours |
| Pourboires volontaires | 0,00 € | 44,75 € | ⚠️ Choix de budget : 0–100 THB/groupe/jour local, pas une taxe ni un barème obligatoire |
| Banque belge + ATM thaïlandais | 51,26 € | 169,58 € | ⚠️ R3/R4 : 2–6 retraits pour A/B, 3–6 pour C ; frais et change selon le modèle explicité |
| TDAC officiel | 0,00 € | 0,00 € | ⚠️ Application au budget : 2 déclarations × 0 € ; gratuité du portail vérifiée R1 |
| Liaisons inter-étapes | n/a | n/a | Une étape, aucune liaison à acheter |
| Suppléments obligatoires des offres finales X | manquant | manquant | Taxes/service hôtel ou activité, vendeur, chambre/bagages ; pas de zéro par défaut |
| **S : postes chiffrés hors réserve** | **3 035,92 €** | **5 272,76 €** | Somme en Decimal, bas et haut arrondis au centime supérieur |
| **Réserve fixe** | **1 000,00 €** | **1 000,00 €** | Séparée, sous le plafond de 8 000 € |
| **Total groupe** | **4 035,92 € + X** | **6 272,76 € + X** | **Budget non concluant** tant que X non borné |

Par personne, réserve comprise : **2 017,96 €–3 136,38 € + X/2**. Solde au haut : **1 727,24 € − X**. Les lignes sont arrondies pour lecture ; le total utilise les valeurs non arrondies, d’où un écart possible de quelques centimes avec leur addition visuelle.

**Variante confort : L'esprit De Naiyang Beach Resort - SHA Extra Plus**, vols 1 575,27 € et hôtel 1 807,00 €, en remplacement de ces deux lignes seulement. Autres postes identiques, y compris programme, journées assurées et réserve. Hors réserve : **4 629,19 €–6 866,04 € + X** ; avec réserve : **5 629,19 €–7 866,04 € + X**, par personne **2 814,60 €–3 933,02 € + X/2**. Solde haut : **133,96 € − X**.

État formel non concluant ; conformité possible seulement après confirmation de X et des hypothèses. Ne pas consommer la réserve pour faire entrer une offre.

Vol confort : `test-output-v3/kiwi_hkt_exact_16n.json` [11], 2026-09-24T09:48:23+00:00, [offre](https://kiwi.com/u/c9jfjrn), ⚠️ 1 575,27 € groupe ; 14 h 20 aller, 21 h retour, soit 5 h 20 gagnées au total face au minimum Air China. Même 16 nuits, arrivée plus matinale : chambre tôt non garantie.

Plan B : remplacement d’hôtel aux mêmes dates sans nouvel appel de vols. Les accès aux activités depuis le nouvel hôtel restent des proxies à confirmer.

#### Variante A « hôtel certifié » — remplacement complet du poste hôtel

Même calendrier A, mêmes activités et hypothèses, **un seul hôtel sur 16 nuits**. Le séjour Booking de **1 900,41 € remplace 771 €**, soit **+1 129,41 €** ; les 1 807 € Trivago ne sont pas ajoutés. Aucun transfert gratuit n’est présumé et aucune nuit n’est proratisée. Tous les montants restent ⚠️, avec X propre à la variante.

| Poste | Bas groupe | Haut groupe | Quantité, formule et preuve |
|---|---:|---:|---|
| Vols | ⚠️ 1 018,00 € | ⚠️ 1 018,00 € | Kiwi exact_16n [0], 2026-09-24T09:48:23Z ; [offre](https://kiwi.com/u/m9tfuy), mêmes 2 soutes |
| Hôtel unique | ⚠️ 1 900,41 € | ⚠️ 1 900,41 € | 16 nuits, 1 chambre, 2 adultes ; orchestrateur/Booking, vers 2026-09-24 11:55 UTC ; [prompt v2](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk), URL d’offre manquante |
| Transferts aéroport thaïlandais A/R | ⚠️ 10,53 € | ⚠️ 26,32 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Repas sur place, 17 jours | ⚠️ 492,27 € | ⚠️ 1 476,82 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Repas pendant les trajets internationaux | ⚠️ 96,00 € | ⚠️ 240,00 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Assurance | ⚠️ 177,84 € | ⚠️ 751,84 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Activités et accès locaux | ⚠️ 331,64 € | ⚠️ 473,79 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Domicile↔BRU | ⚠️ 53,60 € | ⚠️ 233,10 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| SIM, TVA provisionnée | ⚠️ 33,77 € | ⚠️ 67,55 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Pourboires volontaires | ⚠️ 0,00 € | ⚠️ 44,75 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Banque belge + ATM thaïlandais | ⚠️ 51,26 € | ⚠️ 169,58 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| TDAC officiel | ⚠️ 0,00 € | ⚠️ 0,00 € | Même quantité, formule et source datée que le budget A ci-dessus ; aucune réduction implicite |
| Liaisons inter-étapes | n/a | n/a | Une étape |
| Frais obligatoires X | manquant | manquant | Panier et conditions finales absents |
| **Sous-total hors réserve** | **4 165,33 € + X** | **6 402,17 € + X** | Somme sans arrondi intermédiaire |
| **Réserve fixe** | **1 000,00 €** | **1 000,00 €** | Séparée et sous plafond |
| **Total groupe** | **5 165,33 € + X** | **7 402,17 € + X** | **Budget non concluant** |

**Par personne : 2 582,66 €–3 701,09 € + X/2 ; solde au haut : 597,83 € − X.** Plan B : résoudre d’abord l’identité/catégorie de l’offre à 771 € ou choisir une offre hôtelière conforme aux mêmes dates ; ne pas relancer les vols pour ce seul changement.

**Croisement avec le confort aérien :** remplacer seulement le vol Air China de 1 018 € par Etihad à 1 575,274956 € (trace `kiwi_hkt_exact_16n.json` [11], 2026-09-24T09:48:23Z, [offre](https://kiwi.com/u/c9jfjrn)) ajoute **557,274956 €**. Avec L’esprit Booking, hors réserve **4 722,60 €–6 959,45 € + X**, réserve **1 000 €**, total **5 722,60 €–7 959,45 € + X**, par personne **2 861,30 €–3 979,73 € + X/2**, solde haut **40,55 € − X**. État non concluant ; marge trop faible pour l’approuver avant confirmation de X. L’assistance reste calculée sur 19 jours et la provision annulation 574 €, car le capital admissible supposé reste inférieur à 7 000 €.

### B — Ao Nang, 18 nuits au Anyavee Ao Nang Bay Resort

#### Vols retenus

**⚠️ 1 804,27 € groupe** ; `test-output/kiwi_bags_rt_kbv.json` [5], 2026-09-24T09:47:02+00:00, [offre](https://kiwi.com/u/94dfb5). Échos ✅ : `BRU → KBV on 26/11/2026–04/12/2026, 2 adults, 16–18 nights [≤2 stops/sector; no self-transfer]` et `passengers={"adults": 2, "children": 0, "infants": 0}` ; bagages `{"personalItem": 0, "cabinBag": 2, "checkedBag": 2}`. Poids/through-check et contrat final à confirmer.
- Aller : BRU→AUH→KBV, 2026-12-01T09:55:00 → 2026-12-02T06:20:00, 14 h 25. EY58, EY422.
- Retour : KBV→AUH→BRU, 2026-12-20T08:40:00 → 2026-12-20T19:00:00, 16 h 20. EY423, EY55.

#### Hôtel unique, plan B et confort

| Rôle | Hôtel / étoiles / avis | Dates exactes | Brut → total parsé | Distance / preuve |
|---|---|---|---|---|
| Retenu | Anyavee Ao Nang Bay Resort ; 4★ déclarées ; 7.8/10, 2,319 avis | 2026-12-02→2026-12-20 | `€ 1.393` → **⚠️ 1 393,00 €** | Ao Nang, 0.9 km to City center ; `test-output-v3/trivago_aonang_comparatif_18n.json` [24], 2026-09-24T09:48:17+00:00, [offre](https://www.trivago.be/en-US/lm/hotel-anyavee-ao-nang-bay-resort?cip=234716015&currencyCode=EUR&search=100-80577;105-1320;105-1322;200-16207;dr-20261202-20261220;drs-40;rc-1-2&dealId=-4795975138524420988) ; annonceur Trip.com |
| Plan B | Krabi Resort ; 4★ déclarées ; 7.8/10, 12,698 avis | 2026-12-02→2026-12-20 | `€ 1.890` → **⚠️ 1 890,00 €** | Ao Nang, 0.7 km to City center ; `test-output-v3/trivago_aonang_comparatif_18n.json` [11], 2026-09-24T09:48:17+00:00, [offre](https://www.trivago.be/en-US/lm/krabi-resort-ao-nang?cip=234716015&currencyCode=EUR&search=100-111139;105-1320;105-1322;200-16207;dr-20261202-20261220;drs-40;rc-1-2&dealId=7759765529606037666) ; annonceur Stayforlong |

Anyavee est le prix hôtel minimum retenu dans la zone ; identité et activité hôtelière recoupées sur [ANYAVEE](https://www.aonangbayresort.com/). Krabi Resort est à la fois plan B et variante confort (une seule dépense de remplacement). Le vol à 1 583,27 € aux mêmes dates existe mais allonge l’aller de 11 h 50 : B conserve le scénario détente à 1 804,27 €. L’offre 16 nuits (29/11→16/12) à 1 778,57 € est **sans bagage cabine** ; elle n’est pas retenue. Preuve : `test-output/kiwi_bags_rt_kbv.json` [1], 2026-09-24T09:47:02+00:00, [offre](https://kiwi.com/u/ru852y).


#### Budget bas–haut du groupe

| Poste | Bas | Haut | Statut, quantité et preuve |
|---|---:|---:|---|
| Vols | 1 804,27 € | 1 804,27 € | ⚠️ Trace et offre exacte ci-dessus, deux adultes et deux soutes structurées ; conditions finales à confirmer |
| Hôtel unique | 1 393,00 € | 1 393,00 € | ⚠️ price_per_stay parsé ; X séparé, jamais multiplié par les nuits |
| Transferts aéroport thaïlandais A/R | 47,38 € | 57,91 € | ⚠️ Sources TA/TB/TC, section Transferts ; même proxy qu’en v4 |
| Repas sur place, 19 jours | 550,19 € | 1 650,56 € | ⚠️ REPAS : 2 adultes × 19 jours × 550–1 650 THB / 37,987 ; source et UTC conservés au registre v4 |
| Repas pendant les trajets internationaux | 96,00 € | 240,00 € | ⚠️ R5 : 2 adultes × 4 repas supplémentaires × 12–30 € ; proxy Bruxelles, pas menu d’aéroport |
| Assurance | 187,20 € | 761,20 € | ⚠️ I1/I2/I3 : 2 × jours assurés × 4,68 € ; haut ajoute 574 € de provision annulation |
| Activités et accès locaux | 246,29 € | 309,47 € | ⚠️ Programme détaillé ci-dessous ; somme des séances et des trajets supplémentaires |
| Domicile↔BRU | 53,60 € | 233,10 € | ⚠️ D1–D4 : train 53,60 € ; P3 + énergie 233,10 €, alternatives non cumulées |
| SIM, TVA provisionnée | 33,77 € | 67,55 € | ⚠️ R2/R2t : 1–2 cartes × 1 199 THB × 1,07 / FX, 30 jours |
| Pourboires volontaires | 0,00 € | 50,02 € | ⚠️ Choix de budget : 0–100 THB/groupe/jour local, pas une taxe ni un barème obligatoire |
| Banque belge + ATM thaïlandais | 51,26 € | 169,58 € | ⚠️ R3/R4 : 2–6 retraits pour A/B, 3–6 pour C ; frais et change selon le modèle explicité |
| TDAC officiel | 0,00 € | 0,00 € | ⚠️ Application au budget : 2 déclarations × 0 € ; gratuité du portail vérifiée R1 |
| Liaisons inter-étapes | n/a | n/a | Une étape, aucune liaison à acheter |
| Suppléments obligatoires des offres finales X | manquant | manquant | Taxes/service hôtel ou activité, vendeur, chambre/bagages ; pas de zéro par défaut |
| **S : postes chiffrés hors réserve** | **4 462,98 €** | **6 736,68 €** | Somme en Decimal, bas et haut arrondis au centime supérieur |
| **Réserve fixe** | **1 000,00 €** | **1 000,00 €** | Séparée, sous le plafond de 8 000 € |
| **Total groupe** | **5 462,98 € + X** | **7 736,68 € + X** | **Budget non concluant** tant que X non borné |

Par personne, réserve comprise : **2 731,49 €–3 868,34 € + X/2**. Solde au haut : **263,32 € − X**. Les lignes sont arrondies pour lecture ; le total utilise les valeurs non arrondies, d’où un écart possible de quelques centimes avec leur addition visuelle.

**Variante confort : Krabi Resort**, vols 1 804,27 € et hôtel 1 890,00 €, en remplacement de ces deux lignes seulement. Autres postes identiques, y compris programme, journées assurées et réserve. Hors réserve : **4 959,98 €–7 233,68 € + X** ; avec réserve : **5 959,98 €–8 233,68 € + X**, par personne **2 979,99 €–4 116,84 € + X/2**. Solde haut : **-233,68 € − X**.

**Le scénario haut confort dépasse déjà le plafond avant X** ; ne pas le qualifier de conforme. État formel non concluant et risque de dépassement documenté. Plan B : conserver l’hôtel de base ou réduire des dépenses facultatives explicitement, puis recalculer.

Plan B : remplacement d’hôtel aux mêmes dates sans nouvel appel de vols. Les accès aux activités depuis le nouvel hôtel restent des proxies à confirmer.

### C — Khao Lak, 18 nuits au Palm Galleria Resort

#### Vols retenus

**⚠️ 532,00 € groupe** ; `test-output-v3/kiwi_hkt_ow_aller.json` [0], 2026-09-24T09:48:30+00:00, [offre](https://kiwi.com/u/k9qtc7). Échos ✅ : `BRU → HKT on 29/11/2026–29/11/2026, 2 adults [≤2 stops/sector; no self-transfer]` et `passengers={"adults": 2, "children": 0, "infants": 0}` ; bagages `{"personalItem": 2, "cabinBag": 2, "checkedBag": 2}`. Poids/through-check et contrat final à confirmer.
- Aller : BRU→TFU→HKT, 2026-11-29T12:25:00 → 2026-11-30T12:45:00, 18 h 20. CA464, CA413.
**⚠️ 770,00 € groupe** ; `test-output-v3/kiwi_hkt_ow_retour.json` [0], 2026-09-24T09:48:34+00:00, [offre](https://kiwi.com/u/b9wfzp). Échos ✅ : `HKT → BRU on 18/12/2026–18/12/2026, 2 adults [≤2 stops/sector; no self-transfer]` et `passengers={"adults": 2, "children": 0, "infants": 0}` ; bagages `{"personalItem": 2, "cabinBag": 2, "checkedBag": 2}`. Poids/through-check et contrat final à confirmer.
- Aller : HKT→DOH→BRU, 2026-12-18T08:20:00 → 2026-12-19T06:50:00, 28 h 30. QR843, QR195.

#### Hôtel unique, plan B et confort

| Rôle | Hôtel / étoiles / avis | Dates exactes | Brut → total parsé | Distance / preuve |
|---|---|---|---|---|
| Retenu | Palm Galleria Resort ; 4★ déclarées ; 8.2/10, 1,901 avis | 2026-11-30→2026-12-18 | `€ 1.116` → **⚠️ 1 116,00 €** | Khao Lak, 4.2 km to City center ; `test-output-v3/trivago_khaolak_comparatif_18n.json` [10], 2026-09-24T09:48:18+00:00, [offre](https://www.trivago.be/en-US/lm/palm-galleria-resort-khao-lak?cip=234716015&currencyCode=EUR&search=100-456706;105-1320;105-1322;200-15941;dr-20261130-20261218;drs-40;rc-1-2&dealId=5950040721045348847) ; annonceur Stayforlong |
| Plan B | Apsara Beachfront Resort & Villa ; 4★ déclarées ; 9.1/10, 8,171 avis | 2026-11-30→2026-12-18 | `€ 1.710` → **⚠️ 1 710,00 €** | Khao Lak, 3.3 km to City center ; `test-output-v3/trivago_khaolak_comparatif_18n.json` [0], 2026-09-24T09:48:18+00:00, [offre](https://www.trivago.be/en-US/lm/apsara-beachfront-resort-villa-khao-lak?cip=234716015&currencyCode=EUR&search=100-591196;105-1320;105-1322;200-15941;dr-20261130-20261218;drs-40;rc-1-2&dealId=-3198176123500274561) ; annonceur Stayforlong |

Palm Galleria est retenu après contrôle de zone et des signaux ; [PALM](https://khaolakpalmgalleria.com/) corrobore l’hôtel, piscine/restaurant et la proximité de Pakarang. Snapper House à 1 028 € est 88 € moins cher mais placé en contrôle renforcé `stars_unverified` (détail ci-dessous) ; cette décision de prudence est affichée, pas une prétendue supériorité de prix de Palm. Apsara est plan B/confort ; The Sands à 8 138 € pour l’hôtel seul dépasse déjà le plafond et n’est plus proposé.


#### Budget bas–haut du groupe

| Poste | Bas | Haut | Statut, quantité et preuve |
|---|---:|---:|---|
| Vols | 1 302,00 € | 1 302,00 € | ⚠️ Trace et offre exacte ci-dessus, deux adultes et deux soutes structurées ; conditions finales à confirmer |
| Hôtel unique | 1 116,00 € | 1 116,00 € | ⚠️ price_per_stay parsé ; X séparé, jamais multiplié par les nuits |
| Transferts aéroport thaïlandais A/R | 152,68 € | 189,54 € | ⚠️ Sources TA/TB/TC, section Transferts ; même proxy qu’en v4 |
| Repas sur place, 19 jours | 550,19 € | 1 650,56 € | ⚠️ REPAS : 2 adultes × 19 jours × 550–1 650 THB / 37,987 ; source et UTC conservés au registre v4 |
| Repas pendant les trajets internationaux | 96,00 € | 240,00 € | ⚠️ R5 : 2 adultes × 4 repas supplémentaires × 12–30 € ; proxy Bruxelles, pas menu d’aéroport |
| Assurance | 196,56 € | 770,56 € | ⚠️ I1/I2/I3 : 2 × jours assurés × 4,68 € ; haut ajoute 574 € de provision annulation |
| Activités et accès locaux | 415,93 € | 489,64 € | ⚠️ Programme détaillé ci-dessous ; somme des séances et des trajets supplémentaires |
| Domicile↔BRU | 53,60 € | 233,10 € | ⚠️ D1–D4 : train 53,60 € ; P3 + énergie 233,10 €, alternatives non cumulées |
| SIM, TVA provisionnée | 33,77 € | 67,55 € | ⚠️ R2/R2t : 1–2 cartes × 1 199 THB × 1,07 / FX, 30 jours |
| Pourboires volontaires | 0,00 € | 50,02 € | ⚠️ Choix de budget : 0–100 THB/groupe/jour local, pas une taxe ni un barème obligatoire |
| Banque belge + ATM thaïlandais | 76,89 € | 169,58 € | ⚠️ R3/R4 : 2–6 retraits pour A/B, 3–6 pour C ; frais et change selon le modèle explicité |
| TDAC officiel | 0,00 € | 0,00 € | ⚠️ Application au budget : 2 déclarations × 0 € ; gratuité du portail vérifiée R1 |
| Liaisons inter-étapes | n/a | n/a | Une étape, aucune liaison à acheter |
| Suppléments obligatoires des offres finales X | manquant | manquant | Taxes/service hôtel ou activité, vendeur, chambre/bagages ; pas de zéro par défaut |
| **S : postes chiffrés hors réserve** | **3 993,63 €** | **6 278,55 €** | Somme en Decimal, bas et haut arrondis au centime supérieur |
| **Réserve fixe** | **1 000,00 €** | **1 000,00 €** | Séparée, sous le plafond de 8 000 € |
| **Total groupe** | **4 993,63 € + X** | **7 278,55 € + X** | **Budget non concluant** tant que X non borné |

Par personne, réserve comprise : **2 496,82 €–3 639,28 € + X/2**. Solde au haut : **721,45 € − X**. Les lignes sont arrondies pour lecture ; le total utilise les valeurs non arrondies, d’où un écart possible de quelques centimes avec leur addition visuelle.

**Variante confort : Apsara Beachfront Resort & Villa**, vols 1 417,27 € et hôtel 1 710,00 €, en remplacement de ces deux lignes seulement. Autres postes identiques, y compris programme, journées assurées et réserve. Hors réserve : **4 702,91 €–6 987,83 € + X** ; avec réserve : **5 702,91 €–7 987,83 € + X**, par personne **2 851,45 €–3 993,92 € + X/2**. Solde haut : **12,17 € − X**.

État formel non concluant ; conformité possible seulement après confirmation de X et des hypothèses. Ne pas consommer la réserve pour faire entrer une offre.

Vol confort : `test-output-v3/kiwi_hkt_fenetre_18n.json` [5], 2026-09-24T09:48:45+00:00, [offre](https://kiwi.com/u/79rhus), ⚠️ 1 417,27 € ; 11 h 30 de voyage aérien en moins que les deux simples, départ retour HKT l’après-midi au lieu de 08:20.

Plan B : remplacement d’hôtel aux mêmes dates sans nouvel appel de vols. Les accès aux activités depuis le nouvel hôtel restent des proxies à confirmer.

## Recoupements de l’orchestrateur — prompt L3c v2

**Provenance commune : ⚠️ source orchestrateur, capture non versionnée.** Connecteurs claude.ai, **24/09/2026 vers 11:55 UTC**, EUR, 2 adultes ; 1 chambre pour les hôtels. Source de transmission : [PROMPT_L3c_codex_v2.md](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk). Les liens lastminute/Booking ci-dessous sont **génériques**, pas des preuves de panier. Aucune URL exacte d’offre ni réponse brute n’est fournie ; aucune heure précise à la seconde n’est inventée. Ces données constituent un recoupement, pas un nouvel appel de notre part.

### Vols lastminute : comparaison limitée, horaires discordants

| Offre rapportée | Prix groupe | Paramètres rapportés | Comparabilité et traitement |
|---|---:|---|---|
| Etihad, [lastminute](https://www.lastminute.com/) | ⚠️ 1 191,66 € | BRU–HKT 29/11→17/12 ; aller 09:55→12:00+1, 20 h 05 ; retour 02:40→19:00, 22 h 20 | Soute non indiquée ; dates/horaires différents du minimum Kiwi. Ne remplace aucun total |
| Etihad, [lastminute](https://www.lastminute.com/) | ⚠️ 1 381,66 € | Même plage 29/11→17/12 ; arrivée 06:15 et retour 02:40 annoncés | Le prompt dit « mêmes horaires », mais la trace Kiwi confort [11] repart HKT **16/12 à 15:30**, arrivée BRU **17/12 à 06:30** : concordance retour non établie ; soute inconnue |
| Juneyao/Hainan, [lastminute](https://www.lastminute.com/) | ⚠️ 1 369–1 379 € | BRU–HKT 29/11→17/12 selon transmission ; autres détails non fournis | Compagnies, escales/protection et bagages non recoupés ; pas d’intégration au budget |
| Turkish Airlines | manquant | Session expirée, puis erreur serveur selon orchestrateur | Connecteur indisponible ; aucun prix ni déduction |

La base Kiwi **1 018 € est Air China**, arrivée HKT 30/11 à 12:45, retour local 16/12 à 14:00 ; ce n’est pas Etihad. Le confort Kiwi Etihad vaut **1 575,274956 €**, arrivée 06:15, retour 15:30. Les écarts bruts lastminute–Kiwi ne prouvent donc ni économie à bagages égaux ni identité des dates. Une mention 29/11→17/12 peut désigner date de retour local ou arrivée en Belgique : sans segments détaillés, ne pas lui attribuer automatiquement 16 nuits d’hôtel. Aucune soute inconnue n’est remplacée par une soute supposée gratuite.

### Hôtels Booking : séjour exact rapporté, 16 nuits

Paramètres communs : arrivée 30/11, départ 16/12/2026, **16 nuits, deux adultes, une chambre, EUR**, relevé vers 11:55 UTC. Pour chaque ligne : [source de transmission](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) et [Booking, lien générique](https://www.booking.com/) ; **URL exacte d’offre manquante**. Les montants sont des séjours, pas des nuits. Les taxes, chambre et conditions finales ne sont pas confirmées.

| Hôtel rapporté | Prix total groupe | Catégorie / éléments rapportés | Usage dans le rapport |
|---|---:|---|---|
| L’esprit De Naiyang Beach Resort | ⚠️ 1 900,41 € | 4★ « officiel » Booking ; 8,3/10, 1 768 avis ; bord de plage, navette gratuite annoncée | Variante « hôtel certifié » calculée, sans déduire la navette |
| Airport Beach Hotel Phuket | ⚠️ 1 442,80 € | 4★ « officiel » Booking ; 7,5/10, 414 avis | Recoupement transmis ; ne pas fusionner avec Naiyang Beach Hotel sur le seul nom |
| The Title Residencies | ⚠️ 1 132,52 € | 4★ « estimé par Booking » ; 9,1/10, 159 avis | Pas une certification ; type hôtelier non établi, non retenu |
| Bella Nara | ⚠️ 3 114,29 € | 5★ « officiel » selon transmission | Non substitué : aucune nouvelle sélection de zone/chambre |
| Marriott Nai Yang | ⚠️ 3 917,42 € | 5★ selon transmission | Recoupement seulement |
| Dewa Phuket Resort & Villas | ⚠️ 5 111,54 € | 5★ selon transmission | Identité distinguée de Dewa Nai Yang Beach ; recoupement seulement |
| The Slate | ⚠️ 5 300,58 € | 5★ selon transmission | Recoupement seulement |
| Naiyang Park Resort | ⚠️ 7 431,75 € | 4★ selon transmission | Ancienne exclusion de distance >10 km conservée ; recoupement ne l’annule pas |

L’esprit Booking dépasse le séjour Trivago à 1 807 € de **93,41 €** ; on ne conclut pas à une différence à chambre/taxes/annulation identiques. Naiyang Beach Hotel à 771 € n’a pas été reconnu sous ce nom : la donnée Trivago subsiste comme estimation conditionnelle, avec drapeau `stars_unverified`.

## Assurance : grilles publiques et bornes

Les deux grilles ci-dessous concernent le marché belge. **Seule la grille Trust Travel/TUI est utilisée pour les bornes courantes.** La grille Allianz est une brochure assureur datée de 2023, encore publique chez un distributeur belge : elle sert au recoupement, pas à promettre un prix 2026. Une deuxième grille récente et entièrement exploitable n’a pas été établie sans simulateur ; cet écart est déclaré.

| Offre publique / quantité | Tarif relevé et formule groupe | Médical / annulation | Franchise et limites | Source / date |
|---|---|---|---|---|
| Europ Assistance Belgique, via Trust Travel/TUI ; assistance avion Monde temporaire | ⚠️ 4,68 €/personne/jour, max. 40 jours ; `2 × D × 4,68` | Hors Europe : 1 M€/personne **après intervention de la mutualité** ; sans mutualité, limite 2 500 € dans l’IPID | Franchise médicale non établie (IPID lu via extrait ; document non ouvert intégralement) : à confirmer, jamais supposée nulle | [I1](https://www.tui.be/fr/assurances) ; UTC 2026-09-24T12:21:58.129Z → 2026-09-24T12:22:00.944Z ; IPID [I2](https://storage.googleapis.com/qover-assets/Projects/TUI/assistance/IPID%20Trust%20Travel%20-%20Assistance%20Voyage%20temporaire%20Personnes.pdf), conditions 2026 |
| Annulation Trust Travel, Advent Insurance PCC, All Risk temporaire | ⚠️ 8,2 % du capital, min. 50 €/personne ; provision haute `8,2 % × 7 000 = 574 €` | Frais contractuels admissibles remboursables intégralement, donc jusqu’à **100 % des pertes couvertes**, plafonnés au capital ; plafond 15 000 €/assuré | Sans franchise ni frais administratifs de l’assureur ; prime non remboursée ; exclusions et justificatifs applicables | [I1](https://www.tui.be/fr/assurances) ; [I3](https://storage.googleapis.com/qover-assets/Projects/TUI/insurance/Conditions%20Ge%CC%81ne%CC%81rales%20annulation%20temporaire%20All%20Risk.pdf) ; UTC 2026-09-24T12:24:27.414Z → 2026-09-24T12:24:29.362Z |
| Allianz Assistance Only + Cancellation Only ; comparaison historique | ⚠️ 5,40 €/personne/jour Monde hors USA/Canada ; annulation 6,5 % du voyage, min. 25 €/police | Frais médicaux nécessaires annoncés illimités ; annulation jusqu’à 10 000 €/personne, frais admissibles jusqu’au capital | Franchise annulation non établie dans le flyer ; conditions [I5](https://www.allianz-partners.com/content/dam/onemarketing/awp/azpartnerscom/belgium/formules-temporaires/2024/Assistance_Only_TC_BEfr_2407.pdf) à confirmer ; **pas utilisée dans nos totaux** | [I4](https://www.essentialgreece.be/wp-content/uploads/2024/03/Allianz_Flyer_TijdelijkeProducten_20231101_FR.pdf) ; UTC 2026-09-24T12:24:27.414Z → 2026-09-24T12:24:29.362Z ; tarif effectif 01/11/2023 |

Europ Assistance est ici une succursale belge ; Advent est un assureur maltais distribué en Belgique, **pas une compagnie constituée en Belgique**. La grille n’établit pas que des prestations Kiwi/Trivago achetées séparément sont acceptées par ce canal : condition contractuelle à confirmer avant choix de l’assurance.

**Capital assuré :** 7 000 € est uniquement une borne prudente pour calculer la prime maximale, en supposant que le capital admissible ne dépasse pas ce montant. On ne déclarera pas artificiellement 7 000 € si les factures non récupérables sont inférieures. Le capital réel doit inclure les réservations admissibles, exclure les coûts non engagés/la réserve/la prime et être réparti entre assurés. L’éventuel X prépayé doit aussi être pris en compte dans cette limite ; sinon recalculer.

| Option | Dates BRU incluses / D | Assistance seule, bas | Annulation ajoutée au haut | Total assurance haut |
|---|---|---:|---:|---:|
| A, base et confort | 2026-11-29→2026-12-17, 19 jours | ⚠️ 177,84 € | ⚠️ 574,00 € | ⚠️ 751,84 € |
| B, base et confort | 2026-12-01→2026-12-20, 20 jours | ⚠️ 187,20 € | ⚠️ 574,00 € | ⚠️ 761,20 € |
| C, base et confort | 2026-11-29→2026-12-19, 21 jours | ⚠️ 196,56 € | ⚠️ 574,00 € | ⚠️ 770,56 € |

La borne basse **ne comprend pas l’annulation**. Les grilles lues ne donnent pas de coefficient par âge pour notre tranche de travail ; aucun supplément senior n’est inventé. Une autre tranche, des antécédents ou une résidence différente peuvent modifier l’acceptation, les exclusions ou le prix. Contrôler âge réel, franchise médicale et couverture des excursions. Carte de crédit et mutualité peuvent déjà couvrir une partie du risque : à vérifier, jamais présumé ni déduit. Ethias a également été examiné, mais son « dès » pour un voyage court en Europe/Maghreb n’est pas une prime applicable ici ; pas de troisième fausse cotation. Plan B : autre assureur temporaire après lecture des conditions, sans abonnement annuel imposé.

## Itinéraire détente, activités et plans B

Toutes les nouvelles lignes d’activités sont **⚠️** : tarifs publics consultés le 24/09/2026, sans disponibilité vérifiée pour décembre. Chaque ID renvoie à une URL et à l’UTC de sa consultation dans le registre L3c ; les sources partageant une même fenêtre UTC ont été lues via extraits de recherche, sans ouverture directe de la page (date de consultation, pas date de validité). Les répétitions sont explicites : on compte des séances, pas des attractions distinctes. Les dates sont un programme proposé, pas des réservations. Maximum une sortie programmée par jour ici, donc ≤2 ; J1 repos. Un déjeuner inclus dans une excursion reste compris dans l’enveloppe journalière de repas : estimation prudente non optimisée, **pas achat de deux déjeuners imposé**.

### A — six séances sur 17 jours locaux

| Date / jour | Séance et quantité groupe | Bas–haut THB / formule | Preuve publique | Plan B gratuit |
|---|---|---:|---|---|
| 30/11 J1 | Arrivée, bagages, repos ; chambre tôt non garantie | n/a | Vol/hôtel A | Repos dans les espaces autorisés |
| 02/12 J3 | Sirinat, promenade courte ; 2 entrées adultes étrangers | ⚠️ 400 = 2 × 200 | [A1](https://image.mfa.go.th/mfa/0/uK8Kxy2oDV/Phuket_2019.pdf) brochure officielle 2019, recoupée DNP (registre O4) ; recoupement privé daté juin 2026 [A1b](https://www.thainationalparks.com/sirinat-national-park) | Promenade hors zone payante ou piscine de l’hôtel |
| 04/12 J5 | Spa Lime Leaf **Nai Yang**, 60–90 min ; 2 adultes | ⚠️ 3 800–5 000 = 2 × 1 900–2 500 | [A2](https://www.limeleafspa.com/), tarif standard ; aucune réduction supposée | Repos / lecture |
| 06/12 J7 | Phang Nga / James Bond en grand bateau, une journée ; 2 adultes | ⚠️ 4 000 = 2 × (1 700 + 300 transfert Nai Yang A/R) | [A3](https://www.jamesbondislandtour.com/james-bond-island-big-boat-tour.php), parc et déjeuner inclus selon opérateur | Piscine et courte marche ; pas de bateau si mer défavorable |
| 09/12 J10 | Visite matinale respectueuse du temple avec panier proposé par Proud ; 2 paniers | ⚠️ 198 = 2 × 99 | [A4](https://www.proudphuket.com/activities), accueil des visiteurs extérieurs et participation à confirmer | Promenade locale sans panier, hors cérémonie si non souhaitée |
| 11/12 J12 | Deuxième visite Sirinat ; 2 nouvelles entrées | ⚠️ 400 = 2 × 200 | [A1](https://image.mfa.go.th/mfa/0/uK8Kxy2oDV/Phuket_2019.pdf) / [A1b](https://www.thainationalparks.com/sirinat-national-park) ; ticket nouveau jour | Piscine / lecture |
| 13/12 J14 | Deuxième spa Nai Yang ; 2 adultes, 60–90 min | ⚠️ 3 800–5 000 | [A2](https://www.limeleafspa.com/) | Promenade / repos |
| Accès hors excursions | À pied si trajet adapté ; sinon 6 courts trajets de voiture pour spa/temple | ⚠️ 0–3 000 = 0–6 × 500 | Proxy TA du v4, **pas un devis de ces parcours** | Réduire/déplacer les sorties ; pas de scooter supposé |

**Total A : 12 598–17 998 THB = 331,64 €–473,79 € pour deux.** Les jours J2, J4, J6, J8, J9, J11, J13, J15 et J16 n’ont aucune activité payante prévue ; J17, 16/12, départ. « Sans dépense » signifie sans activité supplémentaire, pas sans repas. La sortie Phang Nga occupe la journée : aucune deuxième visite ajoutée au retour. Le tarif Sirinat de 200 THB/adulte étranger est recoupé par le [barème DNP du 02/06/2023](https://catalog.dnp.go.th/dataset/e1e0564c-6f4b-4988-979c-eecd4c742ee4/resource/94ee72ad-e637-4d78-9e64-6f3cb2a9b1d9/download/entrancefee020666.pdf), ligne 57, via son index de recherche public, et par l’opérateur privé actualisé juin 2026. Le PDF DNP direct a expiré à l’ouverture : pas de lecture visuelle ni de preuve d’absence de changement jusqu’en décembre ; conserver ⚠️ et contrôler au guichet. L’accès quotidien à toute la plage n’est pas présumé gratuit : si l’itinéraire choisi traverse le parc payant, acheter les entrées supplémentaires ou rester hors de cette zone.

### Plans B de marche autour de Nai Yang — AllTrails transmis

Ces données proviennent de l’orchestrateur : **⚠️ source orchestrateur, capture non versionnée, 24/09/2026 vers 11:55 UTC**, rayon annoncé 15 km. Les deux pages directes ont été tentées en lecture publique le **2026-09-24T19:31:50.193Z**, sans accès exploitable. Distances, durée, difficulté et notes restent celles transmises ; ce ne sont pas des durées porte-à-porte depuis l’hôtel.

| Parcours / lien fourni | Données transmises | Placement détente et coût additionnel |
|---|---|---|
| [Mai Khao Beach → Naiyang Beach](https://www.alltrails.com/fr/randonnee/thailand/phuket/mai-khao-beach-naiyang-beach) | 4,3 km ; 55 min ; facile ; 4,5/5 ; Sirinat | Alternative de marche à la visite du parc **J3 ou J12**, dans la même enveloppe d’entrée déjà prévue. **0 € de guidage**, mais entrée Sirinat **2 × 200 THB = 400 THB** pour le groupe, soit 10,53 €, déjà comptée. À un autre jour payant : +400 THB, donc pas un plan entièrement gratuit |
| [Nai Yang Hills East Loop](https://www.alltrails.com/fr/randonnee/thailand/phuket/nai-yang-hills-east-loop) | 4,7 km ; 68 min ; facile ; 4,7/5 | **J4 (03/12)**, option libre à la place du repos ; **0 € additionnel sous hypothèse d’accès à pied et sans droit d’entrée**, à confirmer. Sinon rester à l’hôtel ou marcher hors zone payante ; aucun taxi ni abonnement AllTrails implicite |
| Naiyang Hills Trail — URL de parcours non fournie | 7,7 km ; 2 h 27 ; modéré ; 4,1/5 | Option secondaire **J9 (08/12)**, seulement si forme/terrain favorables et accès gratuit confirmé ; même règle de coût nul conditionnel. Distance et dénivelé réels à contrôler ; aucune URL inventée |

La première trace est présentée comme un parcours d’un point à l’autre : **55 min n’est pas une durée d’aller-retour garantie**. Préférer une portion aller-retour depuis un accès proche, sans transfert payant, ou conserver le repos. Ne pas ajouter ces promenades à une journée bateau ; elles remplacent l’activité libre prévue. Les deux visites Sirinat budgétées ne sont pas doublées ; les journées libres restent sans dépense d’activité si les accès sont gratuits. Le repli gratuit certain est le repos ou une promenade dans les espaces hôteliers autorisés. Une carte AllTrails gratuite à consulter ne prouve pas la gratuité de l’accès au terrain.

### B — cinq séances sur 19 jours locaux

| Date / jour | Séance et quantité | Bas–haut THB / formule | Preuve | Plan B gratuit |
|---|---|---:|---|---|
| 04/12 J3 | Massage Sankara, 2 personnes, 60 min | ⚠️ 598–998 = 2 × 299–499 | [B4](https://www.sankarathailand.com/massage-treatments) | Promenade d’Ao Nang |
| 07/12 J6 | Quatre îles, longtail ou speedboat ; 2 adultes | ⚠️ 2 380–2 780 = 2 × (990–1 190 + 200 parc) | [B1](https://www.barracudastourkrabi.com/en/4-islands) ; transferts Ao Nang inclus | Piscine / bord de mer sans embarquement |
| 10/12 J9 | Thai Charm, cours de cuisine ; 2 adultes | ⚠️ 2 800 = 2 × 1 400 | [B3](https://www.thaicharmcookingkrabiaonang.com/) ; repas et prise en charge hôtel annoncés | Marché en promenade sans achat |
| 13/12 J12 | Hong, longtail ou speedboat ; 2 adultes | ⚠️ 2 980–3 380 = 2 × (1 190–1 390 + 300 parc) | [B2](https://www.barracudastourkrabi.com/en/hong-island) ; transferts Ao Nang inclus | Repos à l’hôtel |
| 16/12 J15 | Deuxième massage, 2 personnes | ⚠️ 598–998 | [B4](https://www.sankarathailand.com/massage-treatments) | Marche douce |
| Accès spas | À pied ; provision éventuelle 4 trajets courts | ⚠️ 0–800 = 0–4 × 200 | Hypothèse de travail, proxy régional TA ; **pas tarif Ao Nang vérifié** | Maintenir seulement les activités accessibles à pied |

**Total B : 9 356–11 756 THB = 246,29 €–309,47 €.** J1 (02/12) repos ; J2, J4–J5, J7–J8, J10–J11, J13–J14 et J16–J18 libres sans activité payante. J19 (20/12) départ matinal. Frais de parc cités par l’opérateur, source unique : vérifier la grille étrangère applicable, sans affirmer qu’elle a été confirmée au DNP.

### C — cinq séances sur 19 jours locaux

| Date / jour | Séance et quantité | Bas–haut THB / formule | Preuve | Plan B gratuit |
|---|---|---:|---|---|
| 02/12 J3 | Massage Bussaba, 2 personnes, 60 min | ⚠️ 600–1 000 = 2 × 300–500 | [C3](https://thaimassagekhaolak.com/prices/) | Piscine / repos |
| 05/12 J6 | Similan, départ standard ; 2 adultes | ⚠️ 8 000 = 2 × 4 000 | [C1](https://www.khaolakexplorer.com/snorkeling-daytrips/similan-islands-snorkeling/) ; parc, transfert hôtel et déjeuner annoncés inclus | Marche de plage sûre / hôtel |
| 08/12 J9 | Cours privé avec Pam ; groupe de 2 adultes | ⚠️ 4 000 = 2 × 2 000 | [C2](https://pamsthailand.com/cooking-class/) ; transfert dans zone habituelle inclus, Palm/Apsara à confirmer | Promenade locale sans achat |
| 11/12 J12 | Deuxième massage Bussaba | ⚠️ 600–1 000 | [C3](https://thaimassagekhaolak.com/prices/) | Lecture / repos |
| 14/12 J15 | Parc Khao Lak–Lam Ru, courte promenade côtière ; 2 adultes étrangers | ⚠️ 200–400 = 2 × 100–200 | [C5](https://www.thainationalparks.com/khao-lak-lam-ru-national-park) (opérateur : 100, juin 2026) et [C5b](https://www.thailandee.com/a-voir/le-parc-national-de-khao-lak-lam-ru-khao-lak-180) (guide : 200), contradiction tarifaire déclarée | Piscine / plage hors parc |
| Accès spas et parc | 3 A/R depuis le resort ; voiture 2 personnes | ⚠️ 2 400–4 200 = 6 × 400–700 | [C4](https://www.friendlytaxikhaolak.com/price-list/), **proxy de la grille Khao Lak→Taplamu**, autre parcours ; estimation, pas devis Palm→Bussaba | Supprimer les déplacements et se reposer |

**Total C : 15 800–18 600 THB = 415,93 €–489,64 €.** C comporte cinq séances et quatre types d’activité. La fourchette du parc conserve la contradiction 100/200 THB, sans choisir arbitrairement une grille officielle : le tarif étranger reste à confirmer au guichet, sinon plan B gratuit. J1 repos ; J2, J4–J5, J7–J8, J10–J11, J13–J14 et J16–J18 sans activité payante ; J19 (18/12) départ. Similan est une journée longue ; le départ très matinal plus cher n’est pas retenu. Saison et ouverture effective, prise en charge des deux hôtels et créneaux restent à confirmer.

**Bornes et replis :** les tarifs des opérateurs et taxes finales ne sont pas des devis datés du séjour. Les déplacements d’accès sont signalés comme proxies. Si un transfert inclus n’est pas applicable, remplacer la sortie par son plan B gratuit ou recalculer le supplément avant choix ; ne pas le faire disparaître dans la réserve. Ni scooter, ni plongée bouteille, ni location de voiture ne sont supposés. Pour la mer, conserver une journée libre de report et appliquer +50 % à la durée de navigation annoncée ; ce coefficient ne rallonge pas artificiellement toute la durée d’une excursion.

## Domicile↔BRU et frais résiduels

| Poste / paramètres | Bas–haut du groupe / formule | Source datée et limites |
|---|---|---|
| Train, deux adultes 30–59 ans, 2e classe, 30 km tarifaires, 2 trajets/personne | ⚠️ **53,60 €** = 4 × (6,50 + 6,90 supplément aéroport) | [D1](https://www.belgiantrain.be/-/media/files/pdf/productfiches/tarifs/version-actuelle/fr/tarifs-version-actuelle.ashx), tableau p.6, tarif 2026 ; [D2](https://www.belgiantrain.be/fr/tickets-and-railcards/airports/brussels-airport/). Hypothèse gare à pied ; pas le domicile réel. Billet standard sans abonnement ni promotion |
| Alternative voiture, 100 km A/R, 21 jours P3 | ⚠️ **233,10 €** = 216 P3 + 17,10 énergie | [D3](https://www.interparking.be/fr/parkings/zaventem/front-park-3/), tarif public normal, sans Pcard ; [D4](https://economie.fgov.be/sites/default/files/Files/Energy/Comparaison-prix-carburants.pdf), affichage SPF T4 2026 : maximum publié de 17,10 €/100 km parmi les motorisations affichées, utilisé prudemment, **pas prix à la pompe ni coût kilométrique complet**. Pas de location de voiture supposée |
| SIM touristique 30 jours, 1 carte partagée ou 2 cartes | ⚠️ **33,77 €–67,55 €** = 1–2 × 1 199 THB × 1,07 / FX | [R2](https://www.ais.th/en/consumers/package/international/tourist-plan), conditions TVA 7 % exclue [R2t](https://www.ais.th/en/consumers/package/international/tourist-plan) ; 1 carte seulement si partage de connexion compatible. Offre/validité décembre et taxes exactes à confirmer |
| Pourboires, 17 jours A / 19 jours B–C | ⚠️ **0–44,75 € A ; 0–50,02 € B/C** | Plafond de consommation volontaire choisi : 100 THB par groupe et jour, sans prétendre à un tarif obligatoire. Les service charges imposés restent dans X s’ils ne sont pas inclus |
| ATM et banque belge | ⚠️ **51,26 €–169,58 € A/B ; 76,89 €–169,58 € C** | [R3](https://www.kbc.be/particuliers/fr/paiements/cartes-de-paiement/utilisation-des-cartes-de-paiement/payer-retirer-etranger.html) : exemple KBC débit sans compte en devises, retrait équivalent 500 € = 19,05 € de frais ; [R4](https://www.krungsri.com/getmedia/546f2617-8522-47b8-9b06-6c2cb49f32d0/fee-withdrawal-via-atm-for-international-card-11032026-en) : 250–350 THB/retrait selon réseau, grille effet 11/03/2026. Modèle `n × (19,05 + frais locaux/FX)` ; n=2–6 A/B, 3–6 C |
| Repas supplémentaires de transport | ⚠️ **96–240 €** = 2 personnes × 4 repas × 12–30 € | [R5](https://fr.numbeo.com/co%C3%BBt-de-la-vie/ville/Bruxelles), Numbeo Bruxelles, mise à jour septembre 2026 : proxy contributif de restauration urbaine, pas prix vérifié de TFU/AUH/DOH/BRU. Quantité/enveloppe de planification pour l’ensemble des trajets ; repas servis en vol supposés compris, à vérifier |
| TDAC | ⚠️ **0 €** = 2 × 0 | [R1](https://tdac.immigration.go.th/manual/en/faq.html), portail officiel, gratuité vérifiée ; aucune agence payante |
| Autres suppléments obligatoires | **manquant : X** | Taxes/TVA/service éventuellement exclus des hôtels ou activités, supplément du vendeur, chambre/occupation ou bagage imposé ; aucune borne générale attestée par les traces |

Les billets de train et le parking sont **deux scénarios alternatifs**, jamais additionnés. Les 21 jours P3 sont une enveloppe de durée qui couvre les trois calendriers ; les heures réelles peuvent abaisser le tarif. Train à vérifier pour l’arrivée à BRU environ 3 h avant les vols matinaux, puis marge aéroport de 30 min en planning ; si impossible depuis le domicile, retenir la voiture hypothétique ou recalculer une autre solution. Une distance routière supérieure à 100 km ou l’absence de voiture invalide la borne voiture, elle ne devient pas un taxi offert.

Les retraits modélisent environ 1 000–3 000 € d’espèces A/B, 1 500–3 000 € C. **Le capital retiré n’est pas une deuxième dépense** : seuls les frais sont additionnés. Les exemples KBC intègrent leur commission ; ne pas y ajouter encore un pourcentage de change. La banque/carte réelle n’est pas connue, le plafond d’ATM non vérifié. Paiement en THB, sans conversion dynamique imposée en EUR ; une autre carte, plus de retraits ou un hôtel facturé en THB impose de recalculer. Ne pas assimiler la fourchette à tous les clients belges.

Les plans B gratuits éliminent une dépense facultative avant réservation, mais ne garantissent pas le remboursement d’une activité déjà achetée. Les dépôts de garantie hôteliers remboursables relèvent de la trésorerie ; montant manquant, non ajouté comme coût définitif. Chambre matinale, minibar et blanchisserie ne sont pas commandés implicitement.

## Transferts, zone et qualité des hôtels


Les montants suivants sont des **estimations**, pas des offres réservables pour ces dates. Un lien de source remplace le lien de réservation lorsqu’aucune offre datée n’existe.

- **TA — Nai Yang :** 200 THB par trajet d’après [TAXI_A](https://www.gobytaxi.com/popular-route/fare-calculator?city=Phuket+International+Airport&country=Thailand&from=Phuket+International+Airport&to=Nai+Yang+Beach), source unique ; borne de travail 200–500 THB par trajet, soit 400–1 000 THB A/R groupe. La borne haute est une hypothèse prudente, pas un tarif observé. Distance exacte hôtel à confirmer ; ne pas réutiliser les « 5 min Dewa » pour cet hôtel.
- **TB — Ao Nang :** [TAXI_B](https://goldenbeach-resort.com/location.html) affiche 900 THB nets par van et trajet aéroport→Golden Beach, jusqu’à 6 personnes. Proxy pour Anyavee : 900–1 100 THB par sens, soit 1 800–2 200 THB A/R groupe. Autre hôtel, retour et supplément de 200 THB non cotés : estimation. Prévoir environ 1 h de route, dont 15 min de marge, à confirmer auprès du transporteur.
- **TC — Palm Galleria :** [TAXI_C](https://www.rome2rio.com/s/Phuket-Airport-HKT/Palm-Galleria-Resort-Khao-Lak) estime le taxi HKT→Palm à 2 900–3 600 THB ; multiplication par deux sous hypothèse tarif retour identique : 5 800–7 200 THB groupe. Les prix de covoiturage ne sont pas assimilés à une voiture privée. [PALM](https://khaolakpalmgalleria.com/) indique environ 90 min de trajet, cohérent avec les 85 min du calculateur : prévoir 1 h 45, marge transfert de 15 min incluse.
Dans tous les cas, ajouter 30 min de marge aéroport au planning, sans remplacer les délais d’enregistrement du transporteur. Immigration et remise des bagages restent variables. Aucun ferry nécessaire ; si excursion maritime ajoutée, majorer de 50 % la durée de navigation annoncée et conserver une journée terrestre de remplacement.

### Contrôle de zone

Application stricte du prompt L3b : **distance affichée >10 km = exclusion**, même si la distance semble mesurée à un centre différent. Naiyang Park, Bell, Sugar Aviator, Maya et Wyndham Royal Lee apparaissent notamment autour de « Phuket-Town 24–25 km » ; l’entrée « Dewa Nai Yang Beach » autour de « Cape Panwa 34,2 km » (Dewa Phuket Resort & Villas reste à 0,3 km mais coûte 4 292 € sur 16 nuits) : ces lignes ne fondent plus les recommandations. Leur géolocalisation réelle peut être différente ; on ne corrige pas silencieusement le champ fournisseur. Une distance courte vers une autre localité (Naithon, Mai Khao, Bang Tao) ne prouve pas l’appartenance à Nai Yang.

Pour Khao Lak, sont notamment exclus Eden 10,7 km, Le Méridien 11,2, Merlin 10,6, Pullman 16,7, Kalima 11,4, Le Menara 14,3, Thai Life 15,7, Sunset Koh Kho Khao 24,5, Andaman Princess 29,6, Fondness 21,9, Robinson Phangnga 44,8 et Haven 41. Les trois principaux et leurs plans B ont une distance affichée ≤10 km. Les hôtels 3★ et logements non hôteliers sont exclus.

### `stars_unverified`

Les étoiles Trivago sont déclaratives. Test du skill : au moins deux signaux parmi prix/nuit sous plancher régional, moins de 100 avis, terme de logement suspect dans nom/URL, absence piscine et restaurant, note <7,5 avec ≥300 avis. Pour ces hôtels thaïlandais : plancher indicatif 4★ 45 €/nuit, 5★ 80 €/nuit, **heuristique de contrôle et non prix du marché**.

- **Naiyang Beach : `stars_unverified`**, contrôle conservateur imposé par le prompt v2 après identité non reconnue chez Booking. 48,19 €/nuit, 1 878 avis, 7,6 ; aucun cumul mécanique établi. Être proche de 45 € sans être dessous n’est pas un signal de prix bas. Le budget à 771 € est conditionnel, sans certification du niveau hôtelier.
- Anyavee : 77,39 €/nuit, 2 319 avis, 7,8 ; piscine/restaurant : aucun cumul établi.
- Palm Galleria : 62 €/nuit, 1 901 avis, 8,2 ; piscine/restaurant : aucun cumul établi.
- **Snapper House : `stars_unverified`, dérogation conservatrice demandée par le prompt.** 71 avis constitue un seul signal mécanique ; 57,11 €/nuit dépasse le plancher 4★, « House » ne fait pas partie du lexique du skill, restaurant présent. Ne pas prétendre avoir deux signaux. Absence de certificat officiel obtenu et catégorie de logement insuffisamment établie : contrôle renforcé, pas preuve de faux classement. Palm coûte 88 € de plus et demeure le choix retenu.
- 777 Beach Condo : prix 5★ sous plancher et aucun avis, donc cumul ; de plus logement non hôtelier. Howard Johnson ressort sous identités/catégories divergentes et à des montants atypiques : pas de correction automatique de prix, pas de recommandation sans résolution d’identité.

Aucun certificat de classement thaïlandais n’a été obtenu. L’esprit bénéficie désormais d’une mention 4★ « officiel » Booking **rapportée par l’orchestrateur**, distinguée d’un certificat indépendant. « Pas d’alarme cumulée » ne signifie pas « étoiles certifiées ». Les plans B doivent également être confirmés au panier : type de chambre, lit, taxes, repas, paiement et annulation. Aucun petit déjeuner n’est déduit du budget.

Recoupement Snapper : [SNAPPER](https://www.tripadvisor.co.uk/Hotel_Review-g2368218-d17738956-Reviews-Capital_O_1173_Snapper_House-Khuk_Khak_Khao_Lak_Takua_Pa_Phang_Nga_Province.html) ; portée limitée à identité/type, pas certification. Navette Panphuree : [PAND](https://panphuree.com/free-airport-shuttle-service/) mentionne un transfert gratuit dans un sens sous conditions ; il n’est pas déduit du proxy A/R faute de confirmation de l’offre.


## Formalités SPF / Wanda datées


**Thaïlande — passeports belges ordinaires.** Réemploi des pages lues le 24/09/2026 à 09:00:33–09:00:36 UTC : [SPF_TH](https://diplomatie.belgium.be/fr/pays/thailande/voyager-en-thailande-conseils-aux-voyageurs/informations-pratiques-pour-la-thailande) (mise à jour affichée 04/09/2026), [WANDA](https://www.wanda.be/fr/landen/thailande/), [VISA_TH](https://brussels.thaiembassy.org/en/page/visa-exemption). Passeport valable au moins six mois à l’entrée : pour A/C, entrée 30/11 → validité au moins 30/05/2027 ; B, entrée 02/12 → au moins 02/06/2027. TDAC dans les trois jours précédant l’arrivée : préparer à partir du 27/11 pour A/C et du 29/11 pour B, puis contrôler la convention exacte du portail officiel. Exemption annoncée de 30 jours : **source unique, à confirmer**, notamment la règle applicable à la date d’entrée. Les 16–18 nuits sont inférieures à cette durée ; conserver billet de sortie et adresse de l’hôtel. Pas de formalité payante inventée.
**Transits Chine de A et aller C.** [CHINE](https://be.china-embassy.gov.cn/eng/lsfw/zytz_en/202511/t20251104_11746858.htm) (avis du 04/11/2025) et [SPF_CN](https://diplomatie.belgium.be/nl/landen/china/reizen-naar-china-reisadvies/praktische-info-voor-china) (page mise à jour 28/05/2026), relus dans la fenêtre web du 2026-09-24T10:40:20.448Z–2026-09-24T10:40:22.161Z, recoupent l’exemption jusqu’au 31/12/2026 pour passeport belge ordinaire et séjours de 30 jours, transit compris. Cela ne garantit pas la faisabilité de chaque correspondance : confirmer billet protégé, acheminement de la soute et conditions du transporteur. A passe par TFU ; variante 17 nuits par PEK au retour. Ne pas confondre une escale aérienne et une nuit d’hôtel thaïlandaise.
**AUH / DOH.** B et variantes confort passent par AUH : hypothèse transit international sans entrée, source [ETIHAD](https://www.etihad.com/en/plan/travel-essentials) relue dans L3 le 24/09/2026 09:01:24–09:01:26 UTC. C minimum revient par DOH, escale 14 h 45 : conditions détaillées de transit et éventuelle sortie non vérifiées ; conserver l’hypothèse airside et vérifier auprès de Qatar avant choix ferme. Aucun hôtel de transit ni visa payant inclus implicitement.
Wanda sert de référence sanitaire : vaccinations usuelles et conseil personnalisé, prévention des piqûres ; aucune prescription individuelle. Vérifier à nouveau conseils SPF, formalités et santé avant départ. Plan B : si une condition de transit échoue, remplacer seulement le vol concerné aux mêmes dates, recalculer prix et fatigue ; ne pas prolonger l’hôtel sans devis.


**Complément L3c — TDAC :** le portail gouvernemental [R1](https://tdac.immigration.go.th/manual/en/faq.html) a été relu à l’UTC du registre ci-dessous et indique explicitement l’absence de frais. Ce constat ne certifie pas à nouveau la durée d’exemption de visa, conservée comme « source unique, à confirmer » dans v4. Aucun besoin de vaccination, consultation ou traitement personnel payant n’a été déduit de la seule destination ; s’il apparaît après avis adapté, créer une ligne distincte.

## Tracker

Aucune démarche de réservation ou de souscription exécutée.

| Tâche | Option/étape | Responsable | Échéance officielle ou conseillée | Source si officielle | État | Lien |
|---|---|---|---|---|---|---|
| Choisir lieu et niveau confort | A/B/C | Voyageurs | Avant achat — conseillé | Rapport | A L’esprit Booking recommandé sous hypothèses ; base à 771 € conditionnelle | Synthèse |
| Relire prix final, 2 soutes, cabine, poids, transit et protection | Vol retenu | Voyageurs / vendeur | Avant paiement — conseillé | Conditions compagnie | Non réservé ; traces contrôlées | Liens Kiwi des fiches |
| Obtenir total TTC, type de chambre, occupation, annulation et garanties | Hôtel retenu | Voyageurs / vendeur | Avant paiement — conseillé | Contrat de l’offre | X reste manquant | Liens Trivago des fiches |
| Fixer assurance sur âges réels, capital et couverture existante | A/B/C | Voyageurs / assureur | Avant achat des prestations — conseillé | Conditions assureur | Prime estimée ; admissibilité et franchise médicale à confirmer | [I1](https://www.tui.be/fr/assurances) |
| Confirmer séances, transferts inclus, taxes et annulation | Lieu choisi | Voyageurs / opérateurs | Avant paiement ; météo J−2 — conseillé | Conditions opérateur | 5–6 séances proposées ; aucune réservée | Registre A1–C4 |
| Confirmer domicile et trajet train/voiture | Belgique | Voyageurs | Avant décision — conseillé | SNCB / Interparking | 53,60–233,10 € sous hypothèses | [D2](https://www.belgiantrain.be/fr/tickets-and-railcards/airports/brussels-airport/) / [D3](https://www.interparking.be/fr/parkings/zaventem/front-park-3/) |
| Contrôler banque, ATM, forfait mobile et change effectif | A/B/C | Voyageurs | Avant départ — conseillé | Tarifs banque/opérateur | Proxies, carte réelle inconnue | [R3](https://www.kbc.be/particuliers/fr/paiements/cartes-de-paiement/utilisation-des-cartes-de-paiement/payer-retirer-etranger.html) / [R2](https://www.ais.th/en/consumers/package/international/tourist-plan) |
| Contrôler passeports, sortie, transit et exemption | A/B/C | Chaque voyageur | Avant achat puis avant départ — conseillé | SPF / ambassade | Durée d’exemption source unique à confirmer | [SPF](https://diplomatie.belgium.be/fr/pays/thailande/voyager-en-thailande-conseils-aux-voyageurs/informations-pratiques-pour-la-thailande) |
| Préparer TDAC | A/C : 30/11 ; B : 02/12 | Chaque voyageur | Dans les 3 jours avant arrivée — fenêtre à relire | Immigration thaïlandaise | Non déposée ; gratuite | [R1](https://tdac.immigration.go.th/manual/en/faq.html) |
| Faire le point prévention et besoins médicaux | A/B/C | Voyageurs / médecin | Début octobre — conseillé | Wanda | Besoins personnels non connus | [Wanda](https://www.wanda.be/fr/landen/thailande/) |
| Relire météo/mer, SPF et Wanda | Lieu retenu | Voyageurs | J−7 puis J−2 — conseillé | Services officiels | Normales climatiques seulement | Sources v4 ci-dessous |
| Fermer X et recalculer S_haut + X + réserve | Lieu retenu | Claude Code / voyageurs | Après conditions finales — conseillé | Offres finales | Budget non concluant ; tolérances affichées | Budgets A/B/C et confort |
| Résoudre identité et catégorie de Naiyang Beach Hotel | A base | Voyageurs / vendeur | Avant choix — conseillé | Booking transmis / vendeur | `stars_unverified` ; prix 771 € conditionnel | [Prompt v2](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) |
| Confirmer séjour L’esprit Booking et navette | A hôtel certifié | Voyageurs / vendeur | Avant paiement — conseillé | Offre Booking à obtenir | 1 900,41 € rapportés ; panier et certificat indépendant absents | [Prompt v2](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) |
| Apparier dates/horaires et soutes lastminute avec Kiwi | A vols | Orchestrateur / vendeur | Avant tout remplacement — conseillé | Segments compagnies | Retour 02:40 ≠ 15:30 ; soute lastminute inconnue | [Prompt v2](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) |
| Vérifier accès des sentiers et barème Sirinat | A activités | Voyageurs | Avant promenade — conseillé | DNP | Marche gratuite conditionnelle ; entrée parc déjà budgétée J3/J12 | [DNP](https://catalog.dnp.go.th/dataset/e1e0564c-6f4b-4988-979c-eecd4c742ee4/resource/94ee72ad-e637-4d78-9e64-6f3cb2a9b1d9/download/entrancefee020666.pdf) |

## Sources, matrice et limites


Indices des preuves **à partir de zéro** dans `structuredContent` ; images et `system_message` ne sont pas des instructions. Les dates/arguments ci-dessous permettent de reproduire la sélection sans nouvel appel.

### Matrice dates × destinations

| Destination / durée | Recherche vols | Hôtel long aux dates correspondantes | Couverture |
|---|---|---|---|
| HKT, 16 nuits, fenêtre 15/11–10/12 | 15 itinéraires + exact 29/11 | Nai Yang 30/11–16/12 et 04/12–20/12 | Deux calendriers complets |
| HKT, 17 nuits, même fenêtre | 15 itinéraires + exact 29/11 | Nai Yang 30/11–17/12 et 29/11–16/12 | Deux calendriers complets ; minimum 04/12–21/12 sans hôtel exact |
| HKT, 18 nuits, même fenêtre | 15 itinéraires et deux simples 29/11 / 18/12 | Nai Yang et Khao Lak 30/11–18/12 | Calendrier complet ; minimum 04/12–22/12 sans hôtel exact |
| KBV, 18 nuits | Trace v3 conservée, départ 01/12 | Ao Nang 02/12–20/12 | Calendrier complet B |
| KBV, 16/17 nuits et autres départs ; autres destinations | Couverture limitée des anciennes traces | Pas de couple long complet supplémentaire retenu | Non comparable, non extrapolé |

Trois balayages × 15 itinéraires ne signifient pas que les 26 dates de départ × 3 durées ont toutes un prix complet. On n’affirme ni minimum global ni absence de vol. Le meilleur résultat exact A est absent du balayage large : anomalie explicitement conservée.

### Paramètres et horodatage des traces utilisées


**`kiwi_bags_rt_kbv`** — `test-output/kiwi_bags_rt_kbv.json` — 2026-09-24T09:47:02+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_self_transfer": false, "currency": "EUR", "departureDate": "26/11/2026", "departureDateTo": "04/12/2026", "flyFrom": "BRU", "flyTo": "KBV", "locale": "fr", "max_sector_stopovers": 2, "nights_in_dst_from": 16, "nights_in_dst_to": 18, "sort": "price"}
```

**`kiwi_hkt_exact_16n`** — `test-output-v3/kiwi_hkt_exact_16n.json` — 2026-09-24T09:48:23+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "29/11/2026", "departureDateTo": "29/11/2026", "flyFrom": "BRU", "flyTo": "HKT", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "one_for_city": false, "returnDate": "16/12/2026", "returnDateTo": "16/12/2026", "sort": "price"}
```

**`kiwi_hkt_exact_17n`** — `test-output-v3/kiwi_hkt_exact_17n.json` — 2026-09-24T09:48:26+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "29/11/2026", "departureDateTo": "29/11/2026", "flyFrom": "BRU", "flyTo": "HKT", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "one_for_city": false, "returnDate": "17/12/2026", "returnDateTo": "17/12/2026", "sort": "price"}
```

**`kiwi_hkt_fenetre_16n`** — `test-output-v3/kiwi_hkt_fenetre_16n.json` — 2026-09-24T09:48:37+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "15/11/2026", "departureDateTo": "10/12/2026", "flyFrom": "BRU", "flyTo": "HKT", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "nights_in_dst_from": 16, "nights_in_dst_to": 16, "one_for_city": false, "sort": "price"}
```

**`kiwi_hkt_fenetre_17n`** — `test-output-v3/kiwi_hkt_fenetre_17n.json` — 2026-09-24T09:48:42+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "15/11/2026", "departureDateTo": "10/12/2026", "flyFrom": "BRU", "flyTo": "HKT", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "nights_in_dst_from": 17, "nights_in_dst_to": 17, "one_for_city": false, "sort": "price"}
```

**`kiwi_hkt_fenetre_18n`** — `test-output-v3/kiwi_hkt_fenetre_18n.json` — 2026-09-24T09:48:45+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "15/11/2026", "departureDateTo": "10/12/2026", "flyFrom": "BRU", "flyTo": "HKT", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "nights_in_dst_from": 18, "nights_in_dst_to": 18, "one_for_city": false, "sort": "price"}
```

**`kiwi_hkt_ow_aller`** — `test-output-v3/kiwi_hkt_ow_aller.json` — 2026-09-24T09:48:30+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "29/11/2026", "departureDateTo": "29/11/2026", "flyFrom": "BRU", "flyTo": "HKT", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "one_for_city": false, "sort": "price"}
```

**`kiwi_hkt_ow_retour`** — `test-output-v3/kiwi_hkt_ow_retour.json` — 2026-09-24T09:48:34+00:00 UTC.
```json
{"adults": 2, "adults_hold_bags": [1, 1], "allow_diff_airport_connection": false, "allow_self_transfer": false, "children": 0, "currency": "EUR", "departureDate": "18/12/2026", "departureDateTo": "18/12/2026", "flyFrom": "HKT", "flyTo": "BRU", "infants": 0, "locale": "fr", "max_sector_stopovers": 2, "one_for_city": false, "sort": "price"}
```

**`tools_kiwi`** — `test-output-v3/tools_kiwi.json` — 2026-09-24T09:48:07+00:00 UTC.
```json
{}
```

**`tools_trivago`** — `test-output-v3/tools_trivago.json` — 2026-09-24T09:48:09+00:00 UTC.
```json
{}
```

**`trivago_aonang_comparatif_18n`** — `test-output-v3/trivago_aonang_comparatif_18n.json` — 2026-09-24T09:48:17+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-12-02", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-20", "hotel_rating": {"4star": true, "5star": true}, "query": "Ao Nang, Krabi", "rooms": 1}
```

**`trivago_khaolak_comparatif_18n`** — `test-output-v3/trivago_khaolak_comparatif_18n.json` — 2026-09-24T09:48:18+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-11-30", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-18", "hotel_rating": {"4star": true, "5star": true}, "query": "Khao Lak", "rooms": 1}
```

**`trivago_naiyang_16n`** — `test-output-v3/trivago_naiyang_16n.json` — 2026-09-24T09:48:11+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-11-30", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-16", "hotel_rating": {"4star": true, "5star": true}, "query": "Nai Yang, Phuket", "rooms": 1}
```

**`trivago_naiyang_17n`** — `test-output-v3/trivago_naiyang_17n.json` — 2026-09-24T09:48:13+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-11-30", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-17", "hotel_rating": {"4star": true, "5star": true}, "query": "Nai Yang, Phuket", "rooms": 1}
```

**`trivago_naiyang_18n`** — `test-output-v3/trivago_naiyang_18n.json` — 2026-09-24T09:48:15+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-11-30", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-18", "hotel_rating": {"4star": true, "5star": true}, "query": "Nai Yang, Phuket", "rooms": 1}
```

**`trivago_naiyang_prix_16n`** — `test-output-v3/trivago_naiyang_prix_16n.json` — 2026-09-24T09:48:20+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-12-04", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-20", "hotel_rating": {"4star": true, "5star": true}, "query": "Nai Yang, Phuket", "rooms": 1}
```

**`trivago_naiyang_variante_17n`** — `test-output-v3/trivago_naiyang_variante_17n.json` — 2026-09-24T09:48:22+00:00 UTC.
```json
{"adults": 2, "arrival": "2026-11-29", "children": 0, "country": "BE", "currency": "EUR", "departure": "2026-12-16", "hotel_rating": {"4star": true, "5star": true}, "query": "Nai Yang, Phuket", "rooms": 1}
```

### Sources hors offres

- [FX](https://api.frankfurter.dev/v1/latest?base=EUR) — consultation UTC 2026-09-24T09:00:33.928Z–09:00:36.363Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [FXDOC](https://frankfurter.dev/v1/) — consultation UTC 2026-09-24T09:00:33.928Z–09:00:36.363Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [REPAS](https://fr.numbeo.com/co%C3%BBt-de-la-vie/ville/Phuket) — consultation UTC 2026-09-24T09:00:33.928Z–09:00:36.363Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [TAXI_A](https://www.gobytaxi.com/popular-route/fare-calculator?city=Phuket+International+Airport&country=Thailand&from=Phuket+International+Airport&to=Nai+Yang+Beach) — consultation UTC 2026-09-24T10:41:25.434Z–2026-09-24T10:41:27.217Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [TAXI_B](https://goldenbeach-resort.com/location.html) — consultation UTC 2026-09-24T09:01:52.066Z–09:01:53.675Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [TAXI_C](https://www.rome2rio.com/s/Phuket-Airport-HKT/Palm-Galleria-Resort-Khao-Lak) — consultation UTC 2026-09-24T10:40:54.110Z–2026-09-24T10:40:56.238Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [PALM](https://khaolakpalmgalleria.com/) — consultation UTC 2026-09-24T10:41:25.434Z–2026-09-24T10:41:27.217Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [ANYAVEE](https://www.aonangbayresort.com/) — consultation UTC 2026-09-24T10:40:54.110Z–2026-09-24T10:40:56.238Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [NAIYANG](https://www.google.com/travel/hotels/entity/ChcI4_HShYu09KkxGgsvZy8xdjlkNHdxdhAB) — consultation UTC 2026-09-24T10:40:54.110Z–2026-09-24T10:40:56.238Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [PAND](https://panphuree.com/free-airport-shuttle-service/) — consultation UTC 2026-09-24T10:40:07.661Z–2026-09-24T10:40:11.607Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [SNAPPER](https://www.tripadvisor.co.uk/Hotel_Review-g2368218-d17738956-Reviews-Capital_O_1173_Snapper_House-Khuk_Khak_Khao_Lak_Takua_Pa_Phang_Nga_Province.html) — consultation UTC 2026-09-24T10:41:25.434Z–2026-09-24T10:41:27.217Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [JMA](https://www.data.jma.go.jp/tcc/tcc/products/climate/climatview/graph_mkhtml_nrm.php?e=6&k=0&m=9&n=48565&r=0&s=1&y=2025) — consultation UTC 2026-09-24T09:01:03.021Z–09:01:06.201Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [SPF_TH](https://diplomatie.belgium.be/fr/pays/thailande/voyager-en-thailande-conseils-aux-voyageurs/informations-pratiques-pour-la-thailande) — consultation UTC 2026-09-24T09:00:33.928Z–09:00:36.363Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [WANDA](https://www.wanda.be/fr/landen/thailande/) — consultation UTC 2026-09-24T09:00:33.928Z–09:00:36.363Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [VISA_TH](https://brussels.thaiembassy.org/en/page/visa-exemption) — consultation UTC 2026-09-24T09:00:33.928Z–09:00:36.363Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [CHINE](https://be.china-embassy.gov.cn/eng/lsfw/zytz_en/202511/t20251104_11746858.htm) — consultation UTC 2026-09-24T10:40:20.448Z–2026-09-24T10:40:22.161Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [SPF_CN](https://diplomatie.belgium.be/nl/landen/china/reizen-naar-china-reisadvies/praktische-info-voor-china) — consultation UTC 2026-09-24T10:40:20.448Z–2026-09-24T10:40:22.161Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [ETIHAD](https://www.etihad.com/en/plan/travel-essentials) — consultation UTC 2026-09-24T09:01:24.369Z–09:01:26.149Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.
- [ASSURANCE](https://www.ethias.be/part/fr/assurances/loisirs/assurance-assistance-voyage/assurance-assistance-family-temporaire.html) — consultation UTC 2026-09-24T09:01:03.021Z–09:01:06.201Z. Sources antérieures réutilisées du L3 ; les autres sont des recoupements web statiques, pas des appels de prix MCP.

Les champs de chambre, taxes, pension, annulation et paiement ne sont pas complètement exposés. Un prix fournisseur reste une offre partielle même si extraction et addition sont vérifiées. Les hôtels ne sont jamais extrapolés depuis un court séjour. Les montants de transport terrestre et nourriture sont des estimations explicitement sourcées, les nouveaux postes L3c sont détaillés au registre suivant ; seuls les suppléments obligatoires X et les besoins personnels non établis restent non chiffrés. Les plafonds régionaux d’étoiles et marges de temps sont des heuristiques, pas des garanties.


### Matrice complémentaire L3c

| Poste | A : 30/11–16/12 | B : 02–20/12 | C : 30/11–18/12 | Limite |
|---|---|---|---|---|
| Vols/hôtels exacts | Traces conservées ; base hôtel `stars_unverified` ; L’esprit Booking 16 nuits recoupé | Traces conservées | Traces conservées | Aucun appel nouveau ; Booking transmis sans capture |
| Vols lastminute 29/11→17/12 | Prix transmis, retour/nuits/soutes non appariés | n/a | n/a | Recoupement, pas offre substituée |
| Variante A hôtel certifié | L’esprit 1 900,41 €, 30/11→16/12 ; deux combinaisons de vol chiffrées | n/a | n/a | Mention 4★ officielle Booking rapportée, pas certificat reçu |
| Plans B AllTrails | 3 parcours transmis ; Sirinat payant, autres accès à confirmer | n/a | n/a | Pas de gratuité du parc déduite de la carte |
| Assistance | 19 jours BRU↔BRU | 20 jours | 21 jours | Âges/résidence supposés ; pas devis nominatif |
| Annulation | Provision 574 € max. | Idem | Idem | Capital admissible ≤7 000 € ; taux courant, éligibilité non vérifiée |
| Activités | 6 séances / 4 types | 5 séances / 4 types | 5 séances / 4 types | Tarifs publics ; places et tarifs aux jours exacts non confirmés |
| Accès BRU | Deux alternatives bornées | Idem | Idem | Domicile inconnu |
| Téléphone / ATM / tips / repas transit | Bornes d’estimation | Idem | Idem | Consommation et carte supposées |
| Frais obligatoires finaux X | Manquant | Manquant | Manquant | Pas de montant final taxes incluses |

### Registre des nouvelles sources publiques L3c

La date de consultation n’est pas la date de validité du tarif. « Public sans date d’effet » signifie une page lue aujourd’hui, sans garantie de maintien en décembre. Les liens de services sont informatifs : aucune interaction d’achat réalisée.

| ID / URL | Consultation UTC | Nature et limite |
|---|---|---|
| [I1](https://www.tui.be/fr/assurances) | 2026-09-24T12:21:58.129Z → 2026-09-24T12:22:00.944Z | Grille publique TUI/Trust Travel sans date d’effet affichée ; tarifs et distribution belge. |
| [I2](https://storage.googleapis.com/qover-assets/Projects/TUI/assistance/IPID%20Trust%20Travel%20-%20Assistance%20Voyage%20temporaire%20Personnes.pdf) | 2026-09-24T12:23:45.358Z → 2026-09-24T12:23:47.547Z | IPID assistance personnes, version 2026 ; couverture et condition de mutualité. |
| [I3](https://storage.googleapis.com/qover-assets/Projects/TUI/insurance/Conditions%20Ge%CC%81ne%CC%81rales%20annulation%20temporaire%20All%20Risk.pdf) | 2026-09-24T12:24:27.414Z → 2026-09-24T12:24:29.362Z | Conditions All Risk : art.5, frais admissibles, franchise, capital maximum ; pas devis. |
| [I4](https://www.essentialgreece.be/wp-content/uploads/2024/03/Allianz_Flyer_TijdelijkeProducten_20231101_FR.pdf) | 2026-09-24T12:24:27.414Z → 2026-09-24T12:24:29.362Z | Flyer Allianz assureur, hébergé chez distributeur Essential Greece ; effet 01/11/2023, historique. |
| [I5](https://www.allianz-partners.com/content/dam/onemarketing/awp/azpartnerscom/belgium/formules-temporaires/2024/Assistance_Only_TC_BEfr_2407.pdf) | 2026-09-24T12:23:45.358Z → 2026-09-24T12:23:47.547Z | CG Allianz Assistance Only version 2407 ; ne met pas à jour la prime du flyer. |
| [A1](https://image.mfa.go.th/mfa/0/uK8Kxy2oDV/Phuket_2019.pdf) | 2026-09-24T12:23:45.358Z → 2026-09-24T12:23:47.547Z | Brochure officielle Phuket 2019, p.26, hébergée MFA ; passage tarifaire consultable par index de recherche, ouverture PDF directe en erreur. Ne pas affirmer une lecture visuelle du PDF. |
| [A1b](https://www.thainationalparks.com/sirinat-national-park) | 2026-09-24T12:24:57.413Z → 2026-09-24T12:24:59.739Z | Thai National Parks est un site privé, pas le DNP ; annonce juin 2026, recoupement de 200 THB. |
| [A2](https://www.limeleafspa.com/) | 2026-09-24T12:22:30.722Z → 2026-09-24T12:22:33.156Z | Site spa ; sélectionner Nai Yang, pas Panwa. Fiscalité finale non explicite. |
| [A3](https://www.jamesbondislandtour.com/james-bond-island-big-boat-tour.php) | 2026-09-24T12:14:04.039Z → 2026-09-24T12:14:05.962Z | James Bond big boat ; Nai Yang +300 THB/personne A/R, parc inclus ; prix public sans date de séjour. |
| [A4](https://www.proudphuket.com/activities) | 2026-09-24T12:11:54.876Z → 2026-09-24T12:11:57.005Z | Proud Phuket activités : panier 99 THB ; visite extérieure non confirmée, tarif sans date d’effet. |
| [B1](https://www.barracudastourkrabi.com/en/4-islands) | 2026-09-24T12:16:20.165Z → 2026-09-24T12:16:23.642Z | Barracudas Quatre îles : 990/1 190 adulte +200 parc ; source unique non recoupée pour parc. |
| [B2](https://www.barracudastourkrabi.com/en/hong-island) | 2026-09-24T12:22:13.266Z → 2026-09-24T12:22:15.533Z | Barracudas Hong : 1 190/1 390 adulte +300 parc ; idem. |
| [B3](https://www.thaicharmcookingkrabiaonang.com/) | 2026-09-24T12:14:04.039Z → 2026-09-24T12:14:05.962Z | Thai Charm : 1 400 adulte ; horaires proposés, pas trois cours pour ce prix. |
| [B4](https://www.sankarathailand.com/massage-treatments) | 2026-09-24T12:14:32.219Z → 2026-09-24T12:14:34.346Z | Sankara : 299 Thai /499 autres soins ; durées et traitements à choisir. |
| [C1](https://www.khaolakexplorer.com/snorkeling-daytrips/similan-islands-snorkeling/) | 2026-09-24T12:15:33.254Z → 2026-09-24T12:15:35.940Z | Khao Lak Explorer Similan : standard 4 000 adulte ; park/transfert/repas annoncés inclus. |
| [C2](https://pamsthailand.com/cooking-class/) | 2026-09-24T12:22:13.266Z → 2026-09-24T12:22:15.533Z | Pam : groupe privé de deux =2 000/personne, pas tarif réduit des groupes de 5+ ; limite de zone à vérifier. |
| [C3](https://thaimassagekhaolak.com/prices/) | 2026-09-24T12:16:37.373Z → 2026-09-24T12:16:39.616Z | Bussaba : 300–500 THB/heure selon soin ; prix public sans date d’effet, trajet non compris. |
| [C4](https://www.friendlytaxikhaolak.com/price-list/) | 2026-09-24T12:23:26.078Z → 2026-09-24T12:23:27.957Z | Friendly Taxi : grille publique, date d’effet non affichée ; autre parcours utilisé comme proxy, pas prix confirmé de notre trajet. |
| [C5](https://www.thainationalparks.com/khao-lak-lam-ru-national-park) | 2026-09-24T12:36:47.317Z → 2026-09-24T12:36:48.867Z | GibbonWoot / Thai National Parks, opérateur privé licencié, pas autorité DNP : annonce 100 THB adulte étranger en juin 2026. |
| [C5b](https://www.thailandee.com/a-voir/le-parc-national-de-khao-lak-lam-ru-khao-lak-180) | 2026-09-24T12:22:13.266Z → 2026-09-24T12:22:15.533Z | Thailandee, guide indépendant gratuit : 200 THB adulte. Contradiction avec C5 maintenue, source secondaire de la borne haute. |
| [D1](https://www.belgiantrain.be/-/media/files/pdf/productfiches/tarifs/version-actuelle/fr/tarifs-version-actuelle.ashx) | 2026-09-24T12:16:37.373Z → 2026-09-24T12:16:39.616Z | SNCB grille édition 01/02/2026 et supplément 01/07/2026 ; adulte standard 2e classe, pas tarif Train+. |
| [D2](https://www.belgiantrain.be/fr/tickets-and-railcards/airports/brussels-airport/) | 2026-09-24T12:25:25.650Z → 2026-09-24T12:25:27.638Z | SNCB Brussels Airport : supplément par personne et par trajet, sans abonnement. |
| [D3](https://www.interparking.be/fr/parkings/zaventem/front-park-3/) | 2026-09-24T12:24:57.413Z → 2026-09-24T12:24:59.739Z | Interparking P3 : 21 jours 216 €, tarif normal ; disponibilité décembre non bloquée. |
| [D4](https://economie.fgov.be/sites/default/files/Files/Energy/Comparaison-prix-carburants.pdf) | 2026-09-24T12:27:19.375Z → 2026-09-24T12:27:21.211Z | SPF Économie, affiche T4 2026 ; prix comparatifs d’énergie par 100 km, non tarifs instantanés à la pompe. |
| [R1](https://tdac.immigration.go.th/manual/en/faq.html) | 2026-09-24T12:25:25.650Z → 2026-09-24T12:25:27.638Z | Immigration thaïlandaise : TDAC officiel sans frais ; document administratif non soumis. |
| [R2](https://www.ais.th/en/consumers/package/international/tourist-plan) | 2026-09-24T12:24:57.413Z → 2026-09-24T12:24:59.739Z | AIS tourist 30 jours, 1 199 THB ; disponibilité future non vérifiée. |
| [R2t](https://www.ais.th/en/consumers/package/international/tourist-plan) | 2026-09-24T12:23:45.358Z → 2026-09-24T12:23:47.547Z | Conditions AIS : TVA 7 % exclue ; ajout conservateur au calcul, pas omission. |
| [R3](https://www.kbc.be/particuliers/fr/paiements/cartes-de-paiement/utilisation-des-cartes-de-paiement/payer-retirer-etranger.html) | 2026-09-24T12:21:58.129Z → 2026-09-24T12:22:00.944Z | KBC : exemple tarifaire public, client/carte réels inconnus, pas ouverture de compte. |
| [R4](https://www.krungsri.com/getmedia/546f2617-8522-47b8-9b06-6c2cb49f32d0/fee-withdrawal-via-atm-for-international-card-11032026-en) | 2026-09-24T12:24:57.413Z → 2026-09-24T12:24:59.739Z | Krungsri, grille traduction anglaise effet 11/03/2026, p.8 : 250–350 THB ; réseau réel inconnu. |
| [R5](https://fr.numbeo.com/co%C3%BBt-de-la-vie/ville/Bruxelles) | 2026-09-24T12:27:19.375Z → 2026-09-24T12:27:21.211Z | Numbeo Bruxelles, septembre 2026 ; source contributive, proxy repas de trajet, pas menu d’aéroport. |

Les taux 7 % et 10 % souvent cités pour TVA/service ne sont pas une preuve du solde à payer de ces offres. Une ancienne promotion L’esprit « taxes incluses » de 2022 n’est pas appliquée à un séjour 2026 acheté via un autre vendeur. Les primes « dès » Europe d’Ethias, les promotions expirées, les tarifs groupes non applicables à deux et les lieux hôteliers exclus >10 km ne sont pas utilisés pour minorer le budget.

### Registre des ajouts du prompt v2

| ID / source | Horodatage et paramètres | Portée |
|---|---|---|
| O1 — [lastminute, lien générique](https://www.lastminute.com/) ; [transmission](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) | Orchestrateur : 24/09/2026 **vers 11:55 UTC**, BRU–HKT 29/11→17/12, EUR, 2 adultes | ⚠️ source orchestrateur, capture non versionnée ; soute et appariement des dates absents ; aucune URL d’offre |
| O2 — [Booking, lien générique](https://www.booking.com/) ; [transmission](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) | Même UTC approximatif ; hôtel 30/11→16/12/2026, 16 nuits, EUR, 2 adultes, 1 chambre | ⚠️ source orchestrateur, capture non versionnée ; distinction « officiel »/« estimé », aucune certification indépendante ajoutée |
| O3 — [AllTrails Mai Khao](https://www.alltrails.com/fr/randonnee/thailand/phuket/mai-khao-beach-naiyang-beach) / [East Loop](https://www.alltrails.com/fr/randonnee/thailand/phuket/nai-yang-hills-east-loop) ; [transmission](https://drive.google.com/file/d/1vyUNArdwPB2XummzgHmmXMHUIpbG6poR/view?usp=drivesdk) | Orchestrateur vers 11:55 UTC ; tentative de relecture terminée 2026-09-24T19:31:50.193Z | Distances et notes transmises ; pages inaccessibles, pas de gratuité d’entrée établie ; troisième URL manquante |
| O4 — [DNP, grille d’entrée](https://catalog.dnp.go.th/dataset/e1e0564c-6f4b-4988-979c-eecd4c742ee4/resource/94ee72ad-e637-4d78-9e64-6f3cb2a9b1d9/download/entrancefee020666.pdf) | Document 02/06/2023 ; index public consulté 2026-09-24T19:31:50.193Z (même fenêtre de consultation que O3, lecture via extrait indexé), ligne 57 Sirinat 200 THB étranger ; PDF direct en timeout lors de la tentative suivante | Source primaire officielle trouvée et recoupée, mais consultation limitée à l’extrait indexé ; pas de barème 2026 complet récupéré ; ⚠️ conservé |

### Ce qui manque encore et état budgétaire final

X reste essentiel et non borné : **tous les états formels restent « budget non concluant »**. La recherche web publique a permis de réduire fortement U, pas de certifier le panier de vendeurs absent des traces. Les conditions précises d’assurance, la chambre/étoiles, les bagages, le domicile, la banque, les activités aux dates et les besoins médicaux sont des hypothèses à confirmer. L’ajout Booking résout un recoupement de catégorie pour L’esprit, pas X, ni l’identité de Naiyang Beach Hotel. Les nouvelles données de vols ne sont pas appariées aux mêmes horaires et bagages. Aucune nouvelle requête de vols/hôtels n’est lancée ni nécessaire pour cette mise à jour arithmétique.

Le seuil de X affiché dans chaque tableau indique le montant maximal compatible avec 8 000 € **en conservant toute la réserve et les autres bornes hautes**. Si X est supérieur au seuil, passer à « risque de dépassement » ou « au-dessus du plafond » selon les bornes recalculées. Une option dont le haut dépasse déjà 8 000 € ne devient pas conforme grâce à un X inconnu.

## Écarts du skill

| Exigence / constat | Résultat L3c | Correction proposée, non appliquée au skill |
|---|---|---|
| Sept phases et réemploi des traces | Cadrage et trois options repris ; climat/vols/hôtels conservés ; compléments, budget, tracker et export mis à jour | Replanification sélective respectée ; aucun appel répété |
| Deux à trois grilles d’assureurs belges actuelles | Une grille courante marché belge, une Allianz historique ; Advent est maltais | Distinguer assureur établi en Belgique, marché belge et distributeur ; dater chaque grille et signaler l’écart de fraîcheur |
| Assurance adaptée | Prime bornée sous hypothèses ; franchise médicale et ventes séparées non établies | Utiliser jours porte-à-porte, capital admissible et conditions réelles ; jamais reprendre seulement les nuits |
| Cinq à huit activités | Six séances A, cinq B/C ; certaines répétées, quatre types par option | Expliciter séances versus attractions, éviter une liste fatigante destinée à atteindre un nombre |
| Prix aux dates exactes | Vols/hôtels exacts conservés ; nouveaux tarifs publics non cotés pour décembre | Maintenir ⚠️ et horodater consultation sans inventer disponibilité |
| Triangulation | Sirinat recoupé ; tarifs de prestataires et frais de parc B restent souvent source unique | Le tarif du vendeur ne prouve pas celui de l’autorité ; lire les conditions au choix final |
| Transferts locaux | Accès spas/temple estimés par proxies, particulièrement C | Distinguer transport inclus et trajet spécifique non coté ; déclencher plan B ou recalcul ciblé |
| Clôture du budget | X toujours non borné : état non concluant, malgré tous les autres postes estimés | Ne pas utiliser une provision arbitraire ou la réserve comme preuve d’une borne obligatoire |
| Banque et change | FX BCE inchangé, frais ajoutés séparément | Ne compter que frais, pas capital retiré ; pas de double commission ni extrapolation à toutes les cartes |
| Journées de voyage | Repas supplémentaires et durée d’assurance ajoutés | Compter les transports internationaux, pas seulement les nuits et jours à destination |
| Recoupements v2 | lastminute/Booking/AllTrails transmis sans capture versionnée | Dater approximativement, nommer l’orchestrateur et ne pas fabriquer une URL d’offre |
| Concordance vols | Le retour lastminute 02:40 ne correspond pas au Kiwi Etihad retenu 15:30 ; base Kiwi à 1 018 € = Air China | Ne pas fusionner compagnies, dates de retour local/BRU et franchises de bagages |
| Niveau hôtelier A | Naiyang Beach Hotel non reconnu sous ce nom par Booking ; aucun cumul mécanique de deux signaux | `stars_unverified` conservateur motivé ; variante L’esprit « officiel Booking » à 1 900,41 € sans revendiquer certificat indépendant |
| Plans B gratuits | Sirinat implique une entrée ; autres sentiers/accès non relus | Distinguer zéro guidage, zéro coût additionnel avec ticket déjà prévu, et zéro coût total |
| Limites antérieures | Balayage non exhaustif, poids/protection et climat inchangés | Conserver les écarts de v4 ; nouvelles catégories rapportées attribuées à leur source |
| Tracker et livraison | Sept colonnes explicites, deux fichiers complets de rapport | Aucun fichier générique modifié ; éventuelles évolutions du skill à décider par l’orchestrateur |

## Contrôle avant livraison

- [x] Entrées, hypothèses d’âge/résidence/domicile/carte déclarées ; une seule étape et un hôtel par option.
- [x] Traces restaurées réutilisées ; corrections KBV 1 778,57 € et identité des Dewa conservées.
- [x] Durées assurées BRU↔BRU : 19/20/21 jours ; nuits hôtelières inchangées : 16/18/18.
- [x] Programmes à cinq ou six séances, J1 repos, au plus une séance programmée par jour, jours libres et plans B gratuits.
- [x] Totaux de base, trois conforts, ajustement aérien A et deux combinaisons « hôtel certifié » recalculés en Decimal ; réserve séparée de 1 000 € ; par personne et soldes cohérents.
- [x] Prompt v2 appliqué : recoupements lastminute/Booking/AllTrails intégrés et attribués ; `stars_unverified` sur A ; retour horaire discordant conservé comme écart.
- [x] DNP recherché ; tarif Sirinat recoupé via index officiel, limite PDF déclarée ; aucun plan B de parc déclaré intégralement gratuit.
- [x] TVA de la SIM intégrée ; frais bancaires séparés du capital ; alternatives train/voiture et hôtels non cumulées.
- [x] Tous les nouveaux tarifs sont ⚠️, avec source, URL, UTC, quantité et limites ; dépenses choisies signalées comme hypothèses.
- [x] X demeure manquant ; aucune attestation « tout compris sous plafond » sans borne haute des frais obligatoires.
- [x] Formalités SPF/Wanda datées conservées, TDAC gratuit vérifié ; exemption source unique toujours à confirmer.
- [x] Tracker à sept colonnes ; matrice et écarts mis à jour ; aucun nouvel appel Kiwi/Trivago, achat, compte ou clé.
- [x] Livrables limités aux chemins skills/travel-agent/ ; aucun fichier du skill générique modifié.

**Change :** 1 EUR = 37,987 THB, référence BCE via [Frankfurter](https://api.frankfurter.dev/v1/latest?base=EUR), date effective **23/09/2026**, lecture conservée du 24/09/2026 09:00:33.928–09:00:36.363 UTC. C’est le taux de référence de v4, pas une nouvelle cotation ni un taux de carte. Conversion THB ÷ 37,987 ; frais séparés.

Preuve du prix Snapper (exclu) : `test-output-v3/trivago_khaolak_comparatif_18n.json` [19], 2026-09-24T09:48:18+00:00, [offre](https://www.trivago.be/en-US/lm/hotel-snapper-house-khao-lak?cip=234716015&currencyCode=EUR&search=100-16391190;105-1320;105-1322;200-15941;dr-20261130-20261218;drs-40;rc-1-2&dealId=-4047175022508647946). Même occupation et dates que C ; prix par séjour parsé, pas tarif journalier.


---

# Variante 10 jours, hôtels 5★, départ Tunis

**L3d v3 — 25/09/2026.** État courant fondé sur les traces v7b, run 36077040045 tentative 1, code 0de31ac, dépôt 35a9fdf. Le v5 BRU reste intégralement inchangé. Les tableaux v2 conservés en archive à la fin de cette section sont historiques et ne déterminent plus les budgets courants. Tous les tarifs sont **⚠️ instantanés non réservés**. Aucun nouvel appel commercial.

## Hypothèses

Confirmé par le voyageur le 25/09/2026 selon le prompt de l'orchestrateur : **9 nuits d'hôtel exactement**, **8 000,00 EUR pour deux adultes belges**, réserve **1 000,00 EUR séparée à l'affichage et incluse sous le plafond selon v5**, départ de **TUN entre le 15/11 et le 10/12/2026** ; retour autorisé après le 10/12. Enveloppe hors réserve : **7 000,00 EUR**, paramètre et non tarif.

Préférence Qatar Airways, une soute par adulte. Une chambre double et une base restent hypothèses de travail ; recherche hôtels 2 adultes/1 chambre confirmée dans les paramètres, occupation contractuelle à vérifier. 5★ déclarés, note ≥8,5/10 et au moins 500 avis pour les candidats ; classement officiel, plage directe et chambre vue mer doivent encore être prouvés. Annulation gratuite seulement si sourcée. Domicile, résidence, documents et statut de séjour en Tunisie inconnus. Assurance porte à porte à adapter.

« 10 jours » décrit ici la durée sur place ; neuf nuits n'impliquent pas dix jours domicile–domicile. Compter les nuits depuis l'arrivée locale, non depuis le départ TUN. Une chambre facturée pour une nuit passée en avion ne prouve pas une nuit sur place ; une dernière chambre conservée avant un vol à 00:25 n'est pas une nuit complète de sommeil. Les variantes de dix nuits sur place restent distinctes.

## Synthèse v3 — offres alignées 9 nuits réelles

Vols départ TUN le 29/11/2026, arrivée HKT le 30/11 ; hôtels du 30/11 au 09/12, exactement neuf nuits. Retour HKT le 09/12 et arrivée TUN le **10/12 pour F9 comme F10**. Le prompt indiquait à tort le 09/12 pour la dernière correspondance QR : le fichier brut indique le 10/12.

L’alignement des dates est résolu pour A/C. La conformité complète 5★ certifié, plage directe et chambre vue mer reste non démontrée. Les sous-totaux ci-dessous sont des associations de prix aux mêmes dates, pas des séjours conformes validés. A est ici une **variante de zone à valider**, car le moins cher cité est à Bang Tao, pas à Nai Yang. La recommandation finale A/B/C et L3e restent réservées à l’orchestrateur.

## Vols — complément du tableau F1–F8

F1–F3 et F4–F6 sont conservés sans changement dans l’archive v2 : **aucun n’est aligné sur le couple hôtel 30/11→09/12**. F4/F6 restent des alternatives à d’autres dates, sans nouvel assemblage ici. F7/F8 sont les anciens résultats QR KBV.

| ID | Prix groupe | Départ TUN → arrivée HKT | Départ HKT → arrivée TUN | Durée aller / retour fournisseur | Nuits |
|---|---|---|---|---|---|
| F9 — offres alignées 9 nuits réelles | ⚠️ 1 283,00 EUR | 2026-11-29T16:00:00 → 2026-11-30T18:55:00 | 2026-12-09T08:20:00 → 2026-12-10T13:35:00 | 20 h 55 / 35 h 15 | 30/11→09/12 : 9 ; départ hôtel matinal à vérifier pour F9 |
| F10 — offres alignées 9 nuits réelles | ⚠️ 1 230,09 EUR | 2026-11-29T10:40:00 → 2026-11-30T06:15:00 | 2026-12-09T15:30:00 → 2026-12-10T06:15:00 | 13 h 35 / 20 h 45 | 30/11→09/12 : 9 ; départ hôtel matinal à vérifier pour F9 |

| ID | Sens | Compagnie annoncée / vol | Segment | Départ local | Arrivée locale | Cabine |
|---|---|---|---|---|---|---|
| F9 | aller | QR1400 / Qatar Airways | TUN→DOH | 2026-11-29T16:00:00 | 2026-11-29T23:25:00 | Economy |
| F9 | aller | QR846 / Qatar Airways | DOH→HKT | 2026-11-30T08:15:00 | 2026-11-30T18:55:00 | Economy |
| F9 | retour | QR843 / Qatar Airways | HKT→DOH | 2026-12-09T08:20:00 | 2026-12-09T11:25:00 | Economy |
| F9 | retour | QR1399 / Qatar Airways | DOH→TUN | 2026-12-10T09:10:00 | 2026-12-10T13:35:00 | Economy |
| F10 | aller | EY740 / Etihad Airways | TUN→AUH | 2026-11-29T10:40:00 | 2026-11-29T19:25:00 | Economy |
| F10 | aller | EY410 / Etihad Airways | AUH→HKT | 2026-11-29T21:00:00 | 2026-11-30T06:15:00 | Economy |
| F10 | retour | EY417 / Etihad Airways | HKT→AUH | 2026-12-09T15:30:00 | 2026-12-09T19:35:00 | Economy |
| F10 | retour | EY739 / Etihad Airways | AUH→TUN | 2026-12-10T02:20:00 | 2026-12-10T06:15:00 | Economy |

| ID | Sens | Escale | Durée calculée au même aéroport |
|---|---|---|---|
| F9 | aller | DOH | 8 h 50 |
| F9 | retour | DOH | 21 h 45 |
| F10 | aller | AUH | 1 h 35 |
| F10 | retour | AUH | 6 h 45 |

**F9** : Qatar seule confirmé dans query (« only QR ») et tous les segments QR ; Economy ; personalItem=2, cabinBag=2, checkedBag=2. **F10** : toutes compagnies recherchées, Etihad annoncé sur les quatre segments ; Economy ; personalItem=0, cabinBag=2, checkedBag=2. Les deux échos indiquent « 2 adults », passengers.adults=2, children=0, infants=0 et EUR. Paramètres adults_hold_bags=[1,1], allow_self_transfer=false et ≤2 escales ; un seul arrêt par sens reçu. Poids, attribution effective par voyageur/segment, protection et codeshare restent à confirmer auprès du vendeur : aucun supplément bagage supposé gratuit.

F9 : escale retour DOH **21 h 45**, nuit en transit hors des neuf nuits thaïlandaises. Un hébergement de transit, des repas et l’entrée au Qatar ne sont ni inclus ni supposés gratuits. F10 : arrivée HKT à 06:15, chambre disponible avant l’heure normale non prouvée ; early check-in manquant. Pour F9, départ HKT 08:20 : vérifier transfert et heure de sortie d’hôtel, particulièrement depuis Khao Lak. Neuf nuits calendaires ne garantissent pas une dernière nuit entière de sommeil.

F9-exclu : ⚠️ 1 543,00 EUR ; 8 nuits complètes seulement : retour HKT le 09/12 à 00:25, sortie hôtel le 08/12 au soir ; exclu du budget neuf nuits.

F9-alt : ⚠️ 1 543,00 EUR ; 9 nuits calendaires, retour HKT le 09/12 à 20:30 et TUN le 10/12 à 13:35 ; variante confort non additionnée.

## Hôtels — nouveaux candidats v7b

Tous : arrivée 30/11/2026, départ 09/12/2026, neuf nuits ; demande 2 adultes/1 chambre, BE/EUR. Dates et EUR reçus, occupation à corroborer sur l’offre finale. Les huit candidats demandés par v3 sont documentés (exception explicite à la limite v2 de trois par scénario). Ils satisfont le filtre déclaré 5★, note ≥8,5 et ≥500 avis. Prix total price_per_stay, jamais prix/nuit multiplié.

| ID | Hôtel | Total 9 nuits | Note et avis | Annonceur | Classement / flag heuristique | Plage directe | Chambre vue mer |
|---|---|---|---|---|---|---|---|
| A4 | Kora Beach Resort Phuket | ⚠️ 831,00 EUR | 8.8/10 ; 1,958 avis | Trip.com | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |
| A5 | Cassia Phuket | ⚠️ 946,00 EUR | 9.0/10 ; 8,612 avis | Stayforlong | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |
| A6 | Bella Nara Phuket Naiyang Beach | ⚠️ 1 098,00 EUR | 8.7/10 ; 1,856 avis | Stayforlong | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |
| A7 | Wyndham Garden Naithon Phuket | ⚠️ 1 332,00 EUR | 8.9/10 ; 1,414 avis | trivago DEALS | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |
| C4 | Mai Khaolak Beach Resort & Spa - TUIBLUE Mai Khaolak | ⚠️ 981,00 EUR | 8.5/10 ; 4,304 avis | Stayforlong | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |
| C5 | Pullman Khao Lak Resort | ⚠️ 1 170,00 EUR | 9.0/10 ; 4,875 avis | Stayforlong | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |
| C6 | Kantary Beach Hotel Villas & Suites | ⚠️ 1 234,00 EUR | 8.8/10 ; 4,408 avis | ZenHotels.com | 5★ déclarés ; stars_unverified non déclenché : 1 signal lexical « villas » ; seuil de 2 non atteint | à vérifier | à vérifier |
| C7 | Eden Beach Khao Lak Resort & Spa | ⚠️ 1 413,00 EUR | 8.8/10 ; 4,050 avis | Stayforlong | 5★ déclarés ; stars_unverified non déclenché : 0 signal établi | à vérifier | à vérifier |

| ID | Localité renvoyée | Latitude ; longitude | Distance renvoyée au centre, PAS plage | Distance mesurée à la plage |
|---|---|---|---|---|
| A4 | Bang Tao Beach, Thailand | 8.022939682006836 ; 98.29183959960938 | Bang Tao Beach, 1.9 km to City center | manquant |
| A5 | Bang Tao Beach, Thailand | 8.000229835510254 ; 98.29669952392578 | Bang Tao Beach, 0.8 km to City center | manquant |
| A6 | Nathon, Thailand | 8.070019721984863 ; 98.29638671875 | Nathon, 2.1 km to City center | manquant |
| A7 | Nathon, Thailand | 8.0585298538208 ; 98.27982330322266 | Nathon, 0.5 km to City center | manquant |
| C4 | Phangnga, Thailand | 8.756979942321777 ; 98.2598876953125 | Phangnga, 45.4 km to City center | manquant |
| C5 | Khao Lak, Thailand | 8.853469848632812 ; 98.26728820800781 | Khao Lak, 16.7 km to City center | manquant |
| C6 | Khao Lak, Thailand | 8.734100341796875 ; 98.23980712890625 | Khao Lak, 3.9 km to City center | manquant |
| C7 | Khao Lak, Thailand | 8.609219551086426 ; 98.24028778076172 | Khao Lak, 10.7 km to City center | manquant |

A4/A5 : Bang Tao, hors Nai Yang strict. A6/A7 : libellé « Nathon » renvoyé, identité/localité à recouper ; ne pas assimiler silencieusement Nathon à Nai Yang ou Nai Thon. C4 : Phangnga, 45,4 km au centre ; zone à vérifier. C5 : 16,7 km au centre de Khao Lak ; C7 : 10,7 km ; ce ne sont pas des distances à la plage ni une preuve de changement de station. Aucun déplacement de zone n’est réputé accepté.

Tous les classements officiels restent non vérifiés malgré l’absence de déclenchement heuristique stars_unverified ; aucun hôtel n’est certifié. Prix/9 au-dessus du seuil heuristique 5★ TH, avis nombreux, notes élevées, piscine et restaurant listés ; Kantary a un seul signal lexical. Vue mer, accès direct et distance plage, type de chambre, petit déjeuner, annulation gratuite/date/heure/fuseau, prépaiement et taxes restent à vérifier sur l’offre annonceur et le site officiel de chaque hôtel. Sources officielles précises non consultées dans cette mission.

## B — Ao Nang : aucune solution KBV exacte reçue

F11 : resultsCount=0 et itineraries=[] sans erreur pour TUN→KBV, départ 29/11, retour 09/12, deux adultes, toutes compagnies, deux soutes demandées. Cela décrit uniquement cette recherche, pas l’absence absolue de vols. Seule piste documentée à ces dates : **F9 ou F10 vers HKT + transfert routier HKT↔Ao Nang**, coût et durée manquants ; aucun budget B couplé n’est validé. Une fenêtre KBV plus large nécessite une nouvelle commande de l’orchestrateur. Le lot hôtel Ao Nang v7b (14 résultats) est reçu, sans validation d’une offre vol KBV associée.

## Budgets A/B/C — connus partiels, autres lignes manquantes

Hypothèses de calcul uniquement : A-variante Bang Tao avec A4 Kora, C avec C5 Pullman. Une seule chambre/hôtel par somme ; ni les autres hôtels ni les variantes aériennes ne sont cumulés. Pour A, ce calcul ne vaut pas approbation du changement de station. Pour A/C, il ne chiffre pas encore une chambre vue mer garantie.

| Scénario | Offres | Vol groupe EUR | Hôtel groupe EUR | Connu partiel bas / haut EUR | Connu partiel / personne EUR | État |
|---|---|---|---|---|---|---|
| A-variante de zone | F9 QR + A4 | ⚠️ 1 283,00 | ⚠️ 831,00 | ⚠️ 2 114,00 / 2 114,00 | ⚠️ 1 057,00 | Budget complet non concluant |
| A-variante de zone | F10 Etihad + A4 | ⚠️ 1 230,09 | ⚠️ 831,00 | ⚠️ 2 061,09 / 2 061,09 | ⚠️ 1 030,55 | Budget complet non concluant |
| C | F9 QR + C5 | ⚠️ 1 283,00 | ⚠️ 1 170,00 | ⚠️ 2 453,00 / 2 453,00 | ⚠️ 1 226,50 | Budget complet non concluant |
| C | F10 Etihad + C5 | ⚠️ 1 230,09 | ⚠️ 1 170,00 | ⚠️ 2 400,09 / 2 400,09 | ⚠️ 1 200,05 | Budget complet non concluant |

Le **connu partiel = vol + hôtel uniquement**, sans réserve ni X. Les bornes égales représentent un instantané, pas une garantie de prix futur. Calculs en Decimal à partir des valeurs brutes (F10=1230.083472), ROUND_CEILING au centime seulement à l’affichage ; parts calculées sur la somme exacte/2.

| Poste | Quantité / formule | A bas–haut EUR | B bas–haut EUR | C bas–haut EUR |
|---|---|---|---|---|
| Vol international | 2 adultes AR | F9 ⚠️ 1 283,00 ou F10 ⚠️ 1 230,09 | KBV manquant ; repli HKT non couplé | F9 ⚠️ 1 283,00 ou F10 ⚠️ 1 230,09 |
| Hôtel | 1 chambre × 9 nuits | A4 ⚠️ 831,00, zone/chambre à valider | manquant pour assemblage retenu | C5 ⚠️ 1 170,00, chambre à valider |
| Liaisons internes | Mono-station | sans objet sous hypothèse | transfert HKT ci-dessous | sans objet sous hypothèse |
| Supplément bagages | Si franchise effective insuffisante ; éviter double compte | manquant | manquant | manquant |
| Transferts locaux | AR HKT↔hôtel ; groupe/bagages | manquant | manquant | manquant |
| Repas sur place | 2 adultes, moins repas inclus prouvés | manquant | manquant | manquant |
| Repas internationaux/transit | Durées réelles, DOH/AUH inclus | manquant | manquant | manquant |
| Assurance assistance | 2 adultes, domicile à domicile | manquant | manquant | manquant |
| Assurance annulation | Capital et contrat adaptés | manquant | manquant | manquant |
| Activités | Programme 9 nuits | manquant | manquant | manquant |
| Formalités / TDAC / visa éventuel | Sources officielles datées | manquant | manquant | manquant |
| Taxes et frais obligatoires | Hors inclusions attestées | manquant | manquant | manquant |
| Domicile↔TUN | Domicile encore inconnu | manquant | manquant | manquant |
| SIM/connectivité | Forfait à établir | manquant | manquant | manquant |
| Pourboires volontaires | Choix du voyageur | manquant | manquant | manquant |
| Banque/change/retraits | Frais séparés, offres EUR | manquant | manquant | manquant |
| Early check-in / late check-out | F10 arrivée 06:15 ; aucune gratuité présumée | manquant | manquant | manquant |
| Hébergement éventuel de transit | F9 DOH 21 h 45 ; besoin/coût non établis | manquant | manquant | manquant |
| Repli HKT↔Ao Nang | 2 trajets routiers à chiffrer | sans objet | manquant | sans objet |
| B/H dépenses complètes | Somme des postes hors réserve/X | manquant | manquant | manquant |
| Réserve fixe | Paramètre confirmé, incluse sous plafond | 1 000,00 | 1 000,00 | 1 000,00 |
| X suppléments supplémentaires | Hors dépenses déjà comptées | manquant | manquant | manquant |
| Total complet bas/haut | B+1 000+Xbas / H+1 000+Xhaut | manquant | manquant | manquant |
| Total complet par personne | Total exact/2 | manquant | manquant | manquant |
| Tolérance X / solde complet | 8 000−1 000−H ; puis −Xhaut | manquant | manquant | manquant |
| État | Essentiels sans borne haute | Budget non concluant | Budget non concluant | Budget non concluant |

Poser Ubas/Uhaut = dépenses ordinaires encore manquantes et Xbas/Xhaut = autres suppléments obligatoires non déjà comptés. Le total complet A/C s’écrit ceil(vol brut + hôtel + U + 1 000 + X). U et X ne sont jamais nuls par défaut. La réserve est séparée et reste sous le plafond de 8 000 EUR ; aucun solde disponible ou respect du plafond n’est conclu tant que H manque. Les tarifs Chrome W restent hors sommes, sans requalification deux soutes/même chambre.

## Itinéraire et formalités — état v3

TUN 29/11 → HKT 30/11 ; une base du 30/11 au 09/12, neuf nuits ; retour TUN 10/12. J1 récupération/installation, journées intermédiaires avec au plus deux activités et plan B repos/pluie, dernier jour selon transfert/embarquement réels ; programme détaillé et durées porte à porte manquants. F9 : retour matinal et nuit de transit ; F10 : arrivée matinale et retour HKT l’après-midi. Le comparatif qualitatif 9 nuits contre 16–18 nuits de l’archive reste applicable (temps de transport proportionnellement plus important, moins d’activités, récupération plus courte).

Passeports belges, entrée Thaïlande/TDAC, sortie et réadmission Tunisie, transit DOH/AUH, santé/assurance : **à confirmer, sources officielles datées manquantes**. Aucun texte juridique nouveau ni frais nul affirmé. Le passage CAI de F6 appartient seulement à la variante historique, pas aux F9/F10.

## Tracker

| Tâche | Étape | Responsable | Échéance | Source | Statut |
|---|---|---|---|---|---|
| Contrôler neuf nuits et horaires | A/C | Codex | Livraison v3 | F9/F10 + hôtels v7b | fait ; retour QR corrigé au 10/12 |
| Contrôler absence KBV exact | B | Codex | Livraison v3 | F11 | fait ; couverture limitée |
| Valider zone A et localités C | A/C | Orchestrateur / voyageur | Avant sélection finale | coordonnées et localités v7b | à faire |
| Vérifier chambre/vue mer/plage/classement | A/B/C | Orchestrateur | Avant recommandation | offre vendeur + hôtel + registre à consulter | manquant |
| Vérifier bagages/protection/transit | F9/F10 | Orchestrateur | Avant recommandation | Kiwi puis transporteur | compteurs lus ; conditions manquantes |
| Chiffrer transferts et domicile↔TUN | A/B/C | Orchestrateur / voyageur | Avant budget final | devis datés à obtenir | manquant |
| Formalités, assurance et autres postes | A/B/C | Orchestrateur | Avant budget final | autorités / contrats datés | manquant |
| Relire/intégrer puis décider L3e | Livraison | Claude orchestrateur | Après dépôt | deux fichiers Drive | attente ; STOP Codex |

## Registre de preuves v7b — index base 0

Pour chaque chiffre : fichier figé à 35a9fdf, index original (jamais index après tri), UTC d’appel et URL offre. Les quantités/budgets de voyage sont des paramètres confirmés, pas des cotations.

| ID | Fichier | Index | UTC collecte | URL offre | Paramètres / constat |
|---|---|---|---|---|---|
| F9 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json) | itineraries[0] | 2026-09-25T00:20:33+00:00 | [Kiwi](https://kiwi.com/u/8x8955) | TUN → HKT on 29/11/2026–29/11/2026, returning 09/12/2026–09/12/2026, 2 adults [≤2 stops/sector; only QR; no self-transfer] |
| F10 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_all_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_all_exact_2911_0912.json) | itineraries[0] | 2026-09-25T00:20:45+00:00 | [Kiwi](https://kiwi.com/u/zuskgx) | TUN → HKT on 29/11/2026–29/11/2026, returning 09/12/2026–09/12/2026, 2 adults [≤2 stops/sector; no self-transfer] |
| F9-exclu | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json) | itineraries[2] | 2026-09-25T00:20:33+00:00 | [Kiwi](https://kiwi.com/u/kwyqv8) | 8 nuits complètes seulement : retour HKT le 09/12 à 00:25, sortie hôtel le 08/12 au soir ; exclu du budget neuf nuits |
| F9-alt | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json) | itineraries[3] | 2026-09-25T00:20:33+00:00 | [Kiwi](https://kiwi.com/u/8py43h) | 9 nuits calendaires, retour HKT le 09/12 à 20:30 et TUN le 10/12 à 13:35 ; variante confort non additionnée |
| A4 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json) | accommodations[15] / output[15] | 2026-09-25T00:20:58+00:00 | [Trivago → Trip.com](https://www.trivago.be/en-US/lm/kora-beach-resort-phuket-bang-tao-beach?cip=234716015&currencyCode=EUR&search=100-40863800;105-1322;200-15960;dr-20261130-20261209;drs-40;rc-1-2&dealId=79253178531914661) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| A5 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json) | accommodations[24] / output[24] | 2026-09-25T00:20:58+00:00 | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-cassia-phuket-bang-tao-beach?cip=234716015&currencyCode=EUR&search=100-4799848;105-1322;200-15960;dr-20261130-20261209;drs-40;rc-1-2&dealId=7000248583006938386) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| A6 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json) | accommodations[7] / output[7] | 2026-09-25T00:20:58+00:00 | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-bella-nara-phuket-naiyang-beach-nathon?cip=234716015&currencyCode=EUR&search=100-35753936;105-1322;200-15960;dr-20261130-20261209;drs-40;rc-1-2&dealId=5417391939841472498) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| A7 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json) | accommodations[13] / output[13] | 2026-09-25T00:20:58+00:00 | [Trivago → trivago DEALS](https://www.trivago.be/en-US/lm/hotel-wyndham-garden-naithon-phuket-nathon?cip=234716015&currencyCode=EUR&search=100-36316236;105-1322;200-15960;dr-20261130-20261209;drs-40;rc-1-2&dealId=-1929439623622417452) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| C4 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json) | accommodations[14] / output[14] | 2026-09-25T00:21:17+00:00 | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-mai-khaolak-beach-resort-spa-tuiblue-mai-khaolak-phangnga?cip=234716015&currencyCode=EUR&search=100-2318868;105-1322;200-15941;dr-20261130-20261209;drs-40;rc-1-2&dealId=-9148175811389435837) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| C5 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json) | accommodations[4] / output[4] | 2026-09-25T00:21:17+00:00 | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-pullman-khao-lak-resort?cip=234716015&currencyCode=EUR&search=100-22945772;105-1322;200-15941;dr-20261130-20261209;drs-40;rc-1-2&dealId=8607966930618910143) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| C6 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json) | accommodations[9] / output[9] | 2026-09-25T00:21:17+00:00 | [Trivago → ZenHotels.com](https://www.trivago.be/en-US/lm/resort-kantary-beach-hotel-villas-suites-khao-lak?cip=234716015&currencyCode=EUR&search=100-1711343;105-1322;200-15941;dr-20261130-20261209;drs-40;rc-1-2&dealId=-2738949014471020485) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| C7 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json) | accommodations[0] / output[0] | 2026-09-25T00:21:17+00:00 | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-eden-beach-khao-lak-resort-spa?cip=234716015&currencyCode=EUR&search=100-11340296;105-1322;200-15941;dr-20261130-20261209;drs-40;rc-1-2&dealId=4494840780824978905) | 30/11→09/12 ; 9 nuits ; 2 adultes/1 chambre demandés |
| F11 | [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_kbv_all_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_kbv_all_exact_2911_0912.json) | resultsCount=0 ; index sans objet | 2026-09-25T00:20:49+00:00 | URL offre absente | TUN → KBV on 29/11/2026–29/11/2026, returning 09/12/2026–09/12/2026, 2 adults [≤2 stops/sector; no self-transfer] |

### Inventaire des traces lues

| Fichier | UTC appel | Résultats | Index cités |
|---|---|---|---|
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_qr_exact_2911_0912.json) | 2026-09-25T00:20:33+00:00 | 9 | 0, 2, 3 |
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_all_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_hkt_all_exact_2911_0912.json) | 2026-09-25T00:20:45+00:00 | 15 | 0 |
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_kbv_all_exact_2911_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/kiwi_tun_kbv_all_exact_2911_0912.json) | 2026-09-25T00:20:49+00:00 | 0 | sans objet |
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_naiyang_5s_3011_0912.json) | 2026-09-25T00:20:58+00:00 | 25 | 15, 24, 7, 13 |
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_maikhao_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_maikhao_5s_3011_0912.json) | 2026-09-25T00:21:04+00:00 | 25 |  |
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_khaolak_5s_3011_0912.json) | 2026-09-25T00:21:17+00:00 | 20 | 14, 4, 9, 0 |
| [skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_aonang_5s_3011_0912.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/35a9fdf/skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/trivago_aonang_5s_3011_0912.json) | 2026-09-25T00:21:12+00:00 | 14 |  |

run.json : UTC 2026-09-25T00:21:23+00:00, list_status=calls_status=success, checkout/event SHA 0de31acb9392ef593cadf46e057f1fdf9884dec6 ; manifest.json lu (7 requêtes) ; calls.stderr.log indique « Reprise HTTP 2/2 dans 1.317s », sans échec final. Fichiers métadonnées dans la même racine. Le succès technique ne certifie ni chambre ni exhaustivité.

## Requêtes manquantes

**Résolu** : QR HKT et toutes compagnies aux dates aériennes 29/11→09/12 ; hôtels 30/11→09/12 ; contrôle neuf nuits ; réponse KBV exacte reçue. Les recotations hôtel F4/F6 ne sont plus nécessaires au scénario courant (uniquement si ces alternatives sont rouvertes).

Restent :

- Chambre vue mer exacte, plage directe, distance mesurée jusqu’à la plage de la station, classement officiel ; localités A/B/C à confirmer.
- Occupation contractuelle, taxes, repas, annulation gratuite si offerte, date/heure/fuseau/pénalités et prépaiement.
- Domicile↔TUN ; HKT↔hôtels A/C ; HKT↔Ao Nang pour B ; durées compatibles avec F9 matin, bagages et devis groupe.
- Franchise poids/dimensions/attribution et protection ; transit long DOH, éventuels repas/hébergement/transfert airside/landside.
- Formalités datées Thaïlande/TDAC, Tunisie, DOH/AUH ; santé, assurance, repas, activités et autres frais.
- Fenêtre KBV élargie ou autres dates uniquement sur nouvelle commande ; aucune recherche lancée.

## Écarts du skill

1. Correction du prompt : F9 QR1399 part de DOH le 10/12 09:10 et arrive TUN le 10/12 13:35, pas le 09/12 ; escale retour 21 h 45. Données brutes prioritaires.
2. Les lots Nai Yang et Mai Khao ont chacun 25 résultats mais **pas les mêmes établissements ni les mêmes index** ; Kora/Cassia/Wyndham Garden figurent dans Nai Yang, pas dans le lot Mai Khao. Ne pas fusionner les index.
3. Tri par prix effectué pour le tableau de candidats, pas supposé dans la réponse brute. Filtre 5★ non certifiant ; absence de deux signaux stars_unverified n’est pas une preuve de classement.
4. Huit candidats A/C documentés sur demande explicite v3 ; aucune inclusion silencieuse hors station. A-variante Bang Tao calculée conditionnellement, choix de zone non validé.
5. Dates alignées ne prouvent pas la chambre vue mer ni la faisabilité porte à porte. Aucun total complet, borne haute ou classement final fabriqué.
6. Aucun appel commercial nouveau ; W historique inchangé et hors budgets. Seuls les deux Markdown sont modifiés, UTF-8 sans BOM et LF ; aucun commit/push, changement de skill/scripts/références ou lancement L3e.
7. STOP après dépôt, selon le prompt v3 ; attente de relecture de l’orchestrateur.

## Archive v2 — historique conservé, remplacé par v3 pour les décisions

Les affirmations « actuellement », budgets, requêtes et points d’arrêt ci-dessous décrivent la livraison v2 uniquement. Les chiffres F1–F8, hôtels v7 et preuves W sont conservés pour traçabilité. Pour le travail courant, utiliser les tableaux v3 ci-dessus.

## Archive v2 — Synthèse et recommandation révisée

**Aucun assemblage vol + hôtel des traces n'est actuellement aligné sur neuf nuits et une chambre vue mer prouvée.** Le vol QR à 1 414,00 EUR n'est pas admissible comme neuf nuits. Les hôtels sont tous cotés du 29/11 au 08/12, alors que les vols exacts arrivent le 30/11 ou le 01/12. Ne pas additionner leurs prix comme un séjour conforme.

| Option | Circuit / dates aériennes de travail | Nuits hôtel à recoter | Total groupe bas–haut + réserve + X | Par personne | Écart plafond | Plage/style /5 | Transferts | État |
|---|---|---|---|---|---|---|---|---|
| A | Nai Yang/HKT ; F4 TUN 08/12, arrivée 09/12, retour TUN 19/12 | 09→18/12 : 9 | manquant + 1 000,00 EUR + X manquant | manquant | manquant | non attribuée | 2 aéroport–hôtel ; prix/durée manquants | Budget non concluant |
| B | Ao Nang/KBV ; F6 TUN 10/12, arrivée 11/12, retour TUN 21/12 | 11→20/12 : 9 | manquant + 1 000,00 EUR + X manquant | manquant | manquant | non attribuée | 2 aéroport–hôtel ; prix/durée manquants | Budget non concluant |
| C | Khao Lak/HKT ; même F4 que A | 09→18/12 : 9 | manquant + 1 000,00 EUR + X manquant | manquant | manquant | non attribuée | 2 aéroport–hôtel ; prix/durée manquants | Budget non concluant |

**Ordre de travail proposé : A et C à comparer en priorité, B en repli.** A offre trois candidats dans la localité Nai Yang ; C a des prix hôteliers de référence plus faibles pour certains candidats, sans prouver le coût aux bonnes dates ni les transferts. B exige soit la connexion supplémentaire via CAI de F6, soit QR vers HKT puis transfert routier à chiffrer ; les hôtels B comportent des contraintes de prix ou de zone. Ce n'est pas un classement de voyages validés.

La préférence QR demeure : demander une offre QR compatible avec neuf nuits complètes avant de l'écarter au profit de F4. Aucun seuil de supplément QR n'est inventé. F4 est le moins cher compatible avec neuf nuits dans les résultats HKT toutes compagnies reçus, pas une preuve du minimum du marché. F6 est le moins cher compatible avec neuf nuits dans le lot KBV, sous contrôle de protection et transferts. Les notes /5 sont différées faute de preuve plage.

## Archive v2 — Vols — résultats contrôlés, index base 0

Prix groupe EUR provenant de la valeur brute price, jamais de priceFormatted qui arrondit à l'euro. Les heures sont les chaînes locales renvoyées ; elles n'incluent pas de fuseau explicite. Les durées sont celles du fournisseur ; les escales sont calculées entre horaires au même aéroport. Franchise de poids/dimensions, attribution par adulte et transporteur opérant effectif restent à confirmer : carrier/carrierName donnent la compagnie annoncée, pas une attestation séparée de codeshare.

| Preuve / recherche | Prix groupe EUR | Départ TUN → arrivée destination | Départ destination → retour TUN | Durées aller / retour | Nuits utilisables et décision |
|---|---|---|---|---|---|
| F1 — kiwi_tun_hkt_qr_exact_9n.json [0] | ⚠️ 1 414,00 | 2026-11-29 16:00:00 → 2026-11-30 18:55:00 | 2026-12-08 00:25:00 → 2026-12-08 13:35:00 | 20 h 55 / 19 h 10 | Arrivée 30/11 ; sortie hôtel 07/12 soir : 7 nuits complètes, chambre éventuellement conservée la 8e. Les 9 nuits facturées 29/11→08/12 incluent une nuit avant arrivée. Hors neuf nuits sur place. |
| F2 — kiwi_tun_hkt_qr_fenetre_9_10n.json [0] | ⚠️ 1 826,00 | 2026-12-10 16:00:00 → 2026-12-11 18:55:00 | 2026-12-21 20:30:00 → 2026-12-22 13:35:00 | 20 h 55 / 23 h 05 | 11→21/12 : 10 nuits sur place ; variante distincte. |
| F3 — kiwi_tun_hkt_qr_fenetre_9_10n.json [1] | ⚠️ 1 946,00 | 2026-12-08 16:00:00 → 2026-12-09 18:55:00 | 2026-12-18 00:25:00 → 2026-12-18 13:35:00 | 20 h 55 / 19 h 10 | 09→18/12 : 9 nuits facturables mais départ hôtel 17/12 soir, 8 nuits complètes ; non retenu pour neuf nuits complètes. |
| F4 — kiwi_tun_hkt_all_fenetre_9_10n.json [0] | ⚠️ 1 502,09 | 2026-12-08 10:40:00 → 2026-12-09 12:00:00 | 2026-12-18 15:30:00 → 2026-12-19 06:15:00 | 19 h 20 / 20 h 45 | 09→18/12 : 9 nuits réelles. Le 08→18 est l'écart de dates aériennes, pas 10 nuits d'hôtel. Hôtels à recoter. |
| F5 — kiwi_tun_kbv_all_fenetre_9_10n.json [0] | ⚠️ 1 230,09 | 2026-12-01 10:40:00 → 2026-12-02 18:10:00 | 2026-12-12 20:40:00 → 2026-12-13 06:15:00 | 25 h 30 / 15 h 35 | 02→12/12 : 10 nuits réelles (11 jours entre dates de départ des vols). Variante distincte, pas neuf nuits. |
| F6 — kiwi_tun_kbv_all_fenetre_9_10n.json [3] | ⚠️ 1 923,31 | 2026-12-10 10:40:00 → 2026-12-11 18:10:00 | 2026-12-20 08:40:00 → 2026-12-21 10:20:00 | 25 h 30 / 31 h 40 | 11→20/12 : 9 nuits ; retour matinal et transfert à vérifier. Hôtels à recoter. |

**TUN–KBV QR seule : zéro résultat** dans l'exact et la fenêtre (F7/F8 ci-dessous). Cela décrit ces réponses, pas une impossibilité générale de desserte. Alternative pour B : QR TUN–HKT (F1 à réaligner), puis **HKT↔Ao Nang : manquant**, durée, prix et faisabilité non établis.

### Archive v2 — Segments et correspondances des offres examinées

| Offre | Sens | Vol / compagnie annoncée | Segment | Départ local | Arrivée locale | Cabine |
|---|---|---|---|---|---|---|
| F1 | aller | QR1400 / Qatar Airways | TUN→DOH | 2026-11-29 16:00:00 | 2026-11-29 23:25:00 | Economy |
| F1 | aller | QR846 / Qatar Airways | DOH→HKT | 2026-11-30 08:15:00 | 2026-11-30 18:55:00 | Economy |
| F1 | retour | QR841 / Qatar Airways | HKT→DOH | 2026-12-08 00:25:00 | 2026-12-08 03:25:00 | Economy |
| F1 | retour | QR1399 / Qatar Airways | DOH→TUN | 2026-12-08 09:10:00 | 2026-12-08 13:35:00 | Economy |
| F2 | aller | QR1400 / Qatar Airways | TUN→DOH | 2026-12-10 16:00:00 | 2026-12-10 23:15:00 | Economy |
| F2 | aller | QR846 / Qatar Airways | DOH→HKT | 2026-12-11 08:30:00 | 2026-12-11 18:55:00 | Economy |
| F2 | retour | QR847 / Qatar Airways | HKT→DOH | 2026-12-21 20:30:00 | 2026-12-21 23:35:00 | Economy |
| F2 | retour | QR1399 / Qatar Airways | DOH→TUN | 2026-12-22 09:10:00 | 2026-12-22 13:35:00 | Economy |
| F3 | aller | QR1400 / Qatar Airways | TUN→DOH | 2026-12-08 16:00:00 | 2026-12-08 23:15:00 | Economy |
| F3 | aller | QR846 / Qatar Airways | DOH→HKT | 2026-12-09 08:30:00 | 2026-12-09 18:55:00 | Economy |
| F3 | retour | QR841 / Qatar Airways | HKT→DOH | 2026-12-18 00:25:00 | 2026-12-18 03:25:00 | Economy |
| F3 | retour | QR1399 / Qatar Airways | DOH→TUN | 2026-12-18 09:10:00 | 2026-12-18 13:35:00 | Economy |
| F4 | aller | EY740 / Etihad Airways | TUN→AUH | 2026-12-08 10:40:00 | 2026-12-08 19:25:00 | Economy |
| F4 | aller | EY416 / Etihad Airways | AUH→HKT | 2026-12-09 02:25:00 | 2026-12-09 12:00:00 | Economy |
| F4 | retour | EY417 / Etihad Airways | HKT→AUH | 2026-12-18 15:30:00 | 2026-12-18 19:35:00 | Economy |
| F4 | retour | EY739 / Etihad Airways | AUH→TUN | 2026-12-19 02:20:00 | 2026-12-19 06:15:00 | Economy |
| F5 | aller | EY740 / Etihad Airways | TUN→AUH | 2026-12-01 10:40:00 | 2026-12-01 19:25:00 | Economy |
| F5 | aller | EY424 / Etihad Airways | AUH→KBV | 2026-12-02 08:35:00 | 2026-12-02 18:10:00 | Economy |
| F5 | retour | EY425 / Etihad Airways | KBV→AUH | 2026-12-12 20:40:00 | 2026-12-13 00:50:00 | Economy |
| F5 | retour | EY739 / Etihad Airways | AUH→TUN | 2026-12-13 02:20:00 | 2026-12-13 06:15:00 | Economy |
| F6 | aller | EY740 / Etihad Airways | TUN→AUH | 2026-12-10 10:40:00 | 2026-12-10 19:25:00 | Economy |
| F6 | aller | EY424 / Etihad Airways | AUH→KBV | 2026-12-11 08:35:00 | 2026-12-11 18:10:00 | Economy |
| F6 | retour | EY423 / Etihad Airways | KBV→AUH | 2026-12-20 08:40:00 | 2026-12-20 12:50:00 | Economy |
| F6 | retour | EY715 / Etihad Airways | AUH→CAI | 2026-12-20 14:35:00 | 2026-12-20 16:45:00 | Economy |
| F6 | retour | MS843 / Egyptair | CAI→TUN | 2026-12-21 07:50:00 | 2026-12-21 10:20:00 | Economy |

| Offre | Escales aller / retour | Bagages groupe personalItem / cabinBag / checkedBag | Échos et limites |
|---|---|---|---|
| F1 | DOH 8 h 50 / DOH 5 h 45 | 2 / 2 / 2 | 2 adults confirmé ; only QR et tous carrier=QR ; no self-transfer dans query, protection contractuelle non prouvée |
| F2 | DOH 9 h 15 / DOH 9 h 35 | 2 / 2 / 2 | 2 adults confirmé ; only QR et tous carrier=QR ; no self-transfer dans query, protection contractuelle non prouvée |
| F3 | DOH 9 h 15 / DOH 5 h 45 | 2 / 2 / 2 | 2 adults confirmé ; only QR et tous carrier=QR ; no self-transfer dans query, protection contractuelle non prouvée |
| F4 | AUH 7 h 00 / AUH 6 h 45 | 0 / 2 / 2 | 2 adults confirmé ; sans filtre QR ; no self-transfer dans query, protection contractuelle non prouvée |
| F5 | AUH 13 h 10 / AUH 1 h 30 | 0 / 2 / 2 | 2 adults confirmé ; sans filtre QR ; no self-transfer dans query, protection contractuelle non prouvée |
| F6 | AUH 13 h 10 / AUH 1 h 45, CAI 15 h 05 | 0 / 2 / 2 | 2 adults confirmé ; sans filtre QR ; no self-transfer dans query, protection contractuelle non prouvée |

F1 : DOH 8 h 50 à l'aller et 5 h 45 au retour ; l'escale longue alourdit un séjour court. F6 combine EY et MS avec AUH puis CAI au retour : ne pas assimiler no self-transfer à une protection vérifiée. Formalités de transit AUH/CAI également manquantes. Toutes les cabines des offres détaillées sont Economy. Les requêtes demandent adults_hold_bags=[1,1] et les résultats affichent checkedBag=2, mais aucune franchise en kg n'est fournie.

**Contrôle de l'ensemble des lots :** exact QR HKT 9 offres, toutes arrivent après le 29/11 et ne donnent pas neuf nuits complètes avant le 08/12 ; fenêtre QR HKT 2 offres (F2/F3) ; toutes compagnies HKT 15 offres, minimum neuf nuits F4 index 0 ; toutes compagnies KBV 15 offres, minimum neuf nuits F6 index 3 ; deux lots QR KBV vides. Recherche fenêtre non exhaustive : elle omet l'offre exacte du 29/11. F2 correspond au départ **10/12 à 1 826,00 EUR**, F3 au **08/12 à 1 946,00 EUR**, association contrôlée dans les traces.

## Archive v2 — Hôtels — trois candidats au maximum par scénario

Toutes les offres suivantes : arrival=2026-11-29, departure=2026-12-08, **9 nuits**, EUR ; demandes 2 adultes, 0 enfant, 1 chambre, marché BE. price_per_stay est le total de séjour affiché, sans multiplication par neuf. Les prix ne sont pas ceux des chambres vue mer vérifiées, ni ceux des dates de travail F4/F6. Le type de chambre, l'occupation contractuelle, les repas, les taxes finales, le prépaiement et l'annulation sont absents : **à vérifier**. Aucune annulation gratuite annoncée.

| ID / candidat | Prix séjour 9 nuits EUR | Annonceur | Étoiles déclarées | Note /10 ; avis | Localité renvoyée | stars_unverified / motifs | Plage directe | Chambre vue mer |
|---|---|---|---|---|---|---|---|---|
| A1 — Phuket Marriott Resort and Spa, Nai Yang Beach | ⚠️ 2 175,00 | Stayforlong | 5★, non certifiées | 9.1 ; 6,428 | Nai Yang Beach, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| A2 — The Slate | ⚠️ 2 610,00 | Stayforlong | 5★, non certifiées | 9.3 ; 11,331 | Nai Yang Beach, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| A3 — Dewa Phuket Resort & Villas | ⚠️ 2 304,00 | Stayforlong | 5★, non certifiées | 8.7 ; 8,211 | Nai Yang Beach, Thailand | Non déclenché : 1 signal lexical villas ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| B1 — Rayavadee | ⚠️ 19 242,00 | Stayforlong | 5★, non certifiées | 9.4 ; 7,353 | Ao Nang, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| B2 — Anana Ecological Resort Krabi | ⚠️ 1 926,00 | Stayforlong | 5★, non certifiées | 9.2 ; 5,985 | Krabi, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| B3 — Varana Krabi Hotel | ⚠️ 1 982,00 | Trip.com | 5★, non certifiées | 9.2 ; 3,118 | Klong Muang, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| C1 — Pullman Khao Lak Resort | ⚠️ 1 215,00 | Stayforlong | 5★, non certifiées | 9.0 ; 4,875 | Khao Lak, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| C2 — The Sands Khao Lak by Katathani | ⚠️ 1 512,00 | Stayforlong | 5★, non certifiées | 9.0 ; 12,248 | Khao Lak, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |
| C3 — JW Marriott Khao Lak Resort and Spa | ⚠️ 2 710,00 | Stayforlong | 5★, non certifiées | 9.3 ; 12,883 | Khao Lak, Thailand | Non déclenché : 0 signal établi ; certificat manquant | À vérifier sur site officiel et plan de l'hôtel | À vérifier sur offre vendeur / catégorie de chambre |

Tous ces candidats dépassent 500 avis et la note minimale. Ne pas confondre présélection documentaire et conformité finale :
- A1 prioritaire pour vérification, A2/A3 alternatives ; un seul hôtel dans un budget. Mai Khao a également été lu, mais n'est pas ajouté pour éviter une quatrième candidature ou un élargissement implicite de Nai Yang.
- B1 est renvoyé Ao Nang mais son prix hôtel seul dépasse déjà le plafond aux dates cotées : écarté budgétairement pour cette offre. B2, renvoyé Krabi, exige contrôle de zone et de plage. B3, renvoyé Klong Muang, est une alternative de zone **non adoptée**, qui exige validation et transfert recalculé. Aucun hôtel B n'est validé.
- C1 prix de référence le plus faible de cette présélection ; C2 alternative et C3 confort. La distance au centre de C1 ne constitue ni exclusion automatique de la localité Khao Lak ni preuve de proximité de plage.

| ID | Latitude ; longitude brutes | Champ distance brut | Distance mesurée à la plage de station | URL source de l'offre à vérifier |
|---|---|---|---|---|
| A1 | 8.081290245056152 ; 98.28861999511719 | Nai Yang Beach, 1.4 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/phuket-marriott-resort-and-spa-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-5200830;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=-4470882299114158396) |
| A2 | 8.086389541625977 ; 98.29904174804688 | Nai Yang Beach, 0.5 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/resort-the-slate-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-9398;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=-4170102154282534162) |
| A3 | 8.09259033203125 ; 98.2996826171875 | Nai Yang Beach, 0.3 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/dewa-phuket-resort-villas-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-1083924;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=2440522599714518784) |
| B1 | 8.007670402526855 ; 98.84092712402344 | Ao Nang, 3.3 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/resort-rayavadee-ao-nang?cip=234716015&currencyCode=EUR&search=100-112567;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-2272656597663227210) |
| B2 | 8.035829544067383 ; 98.84169006347656 | Krabi, 9.1 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-anana-ecological-resort-krabi?cip=234716015&currencyCode=EUR&search=100-12103646;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-6765048849868097557) |
| B3 | 8.057169914245605 ; 98.75018310546875 | Klong Muang, 3.2 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Trip.com](https://www.trivago.be/en-US/lm/varana-krabi-hotel-klong-muang?cip=234716015&currencyCode=EUR&search=100-32776746;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-7182434226983489518) |
| C1 | 8.853469848632812 ; 98.26728820800781 | Khao Lak, 16.7 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-pullman-khao-lak-resort?cip=234716015&currencyCode=EUR&search=100-22945772;105-1322;200-15941;dr-20261129-20261208;drs-40;rc-1-2&dealId=2341787025429194630) |
| C2 | 8.6493501663208 ; 98.24952697753906 | Khao Lak, 6.1 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/resort-the-sands-khao-lak-by-katathani?cip=234716015&currencyCode=EUR&search=100-2378712;105-1322;200-15941;dr-20261129-20261208;drs-40;rc-1-2&dealId=8542429402599277393) |
| C3 | 8.701640129089355 ; 98.24053192138672 | Khao Lak, 2.0 km to City center | manquant — point d'accès, mesure et méthode à sourcer | [Trivago → Stayforlong](https://www.trivago.be/en-US/lm/hotel-jw-marriott-khao-lak-resort-and-spa?cip=234716015&currencyCode=EUR&search=100-1116583;105-1322;200-15941;dr-20261129-20261208;drs-40;rc-1-2&dealId=-3353249895648236366) |

Pour prouver plage directe : vérifier l'accès depuis l'établissement, routes/obstacles/navette/bateau éventuels, puis mesurer la distance vers un point identifié de la plage de la station avec méthode (trajet ou ligne droite), coordonnées, date et source. Le champ **City center n'est jamais une distance plage**. Pour vue mer : obtenir l'intitulé de la chambre vendue, distinguer vue partielle, ne rien inférer du nom de l'hôtel. Pour annulation : date/heure/fuseau, pénalité, prépaiement et remboursement. Sources à consulter lors d'une mission autorisée : site officiel de chaque hôtel identifié ci-dessus, offre de l'annonceur et registre officiel de classement ; aucun lien officiel précis n'est inventé ici.

### Archive v2 — Règle stars_unverified et exclusions

Flag à partir de deux signaux établis : prix 5★ TH <80 EUR/nuit/chambre ; <100 avis ; mot inn/lodging/hostel/homestay/guesthouse/apartelle/apartment/villas dans nom ou URL (un seul signal lexical) ; absence confirmée de piscine ET restaurant ; note <7,5 avec ≥300 avis. Une donnée absente n'est pas une absence d'équipement. Contre-vérifier identité, TripAdvisor et classement officiel ; absence de flag ≠ certification. Le plancher est une heuristique du skill, pas une offre.

Exemples rejetés et vérifiés : **Klong Muang Hostel**, lot Ao Nang index 10, 281 EUR/9 nuits, 0 avis, lexical hostel : au moins trois signaux, stars_unverified=true, note absente. **Wyndham Royal Lee Phuket**, Nai Yang index 9, 616 EUR/9 nuits, note 6,7 et 417 avis : prix sous plancher + mauvaise note, true. **Andaman Pool Villas**, Mai Khao index 14, 0 avis + lexical villas : true. Grand Mercure Ao Nang index 0 n'a que 6 avis et ne remplit pas les 500 avis demandés ; un seul signal ne suffit pas à déclencher le flag. Le filtre 5★ n'est donc pas une validation. Ces rejets ne sont pas des candidats supplémentaires.

## Archive v2 — Budgets A/B/C — toutes les lignes

Dates de travail : A/C 09→18/12 sur F4, B 11→20/12 sur F6. Versions QR : vol neuf nuits conforme **manquant**, donc budget QR non calculable. Les hôtels de référence du 29/11→08/12 ne sont pas incorporés aux dates de travail. Aucun assemblage F1+hôtel n'est présenté comme voyage neuf nuits.

Colonnes bas/haut = montants EUR pour le groupe. Un prix ponctuel identique aux deux bornes n'est pas une borne haute de disponibilité future. Tous les montants d'offres sont ⚠️ instantanés non réservés.

| Poste | Quantité / formule | A bas–haut | B bas–haut | C bas–haut | Preuve / limite |
|---|---|---|---|---|---|
| Vols internationaux, alternative toutes compagnies | 2 adultes AR, prix groupe | ⚠️ 1 502,09–1 502,09 | ⚠️ 1 923,31–1 923,31 | ⚠️ 1 502,09–1 502,09 | F4 / F6 / F4, poids et protection à confirmer |
| Supplément bagages | 1 soute par adulte, chaque segment | manquant | manquant | manquant | 2 soutes et 2 cabines affichées ; ne pas les compter deux fois, supplément éventuel dans X une fois identifié |
| Liaisons internes | Mono-station, aucun vol interne dans F4/F6 | sans objet sous hypothèse | sans objet sous hypothèse | sans objet sous hypothèse | Transit aérien déjà dans vol ; toute nouvelle liaison impose recalcul |
| Hôtel 5★ vue mer | 1 chambre ×9 nuits, total séjour | manquant ; référence A1 ⚠️ 2 175,00 exclue des sommes | manquant ; B2 ⚠️ 1 926,00 hors dates et zone à vérifier | manquant ; C1 ⚠️ 1 215,00 exclue des sommes | A1/B2/C1 seulement comparatifs du 29/11→08/12, pas tarifs aux dates F4/F6 |
| Transferts locaux aéroport↔hôtel | 2 trajets groupe | manquant | manquant | manquant | HKT↔Nai Yang ; KBV↔Ao Nang ; HKT↔Khao Lak |
| Repli QR via HKT pour B | 2 transferts routiers HKT↔Ao Nang | sans objet | manquant | sans objet | Variante distincte, ne pas cumuler avec KBV↔hôtel |
| Repas sur place | 2 adultes ×jours réels, moins repas inclus prouvés | manquant | manquant | manquant | Aucun montant journalier v5 adopté sans pertinence et devise contrôlées |
| Repas internationaux/transit | Effectif et horaires réels, moins repas inclus | manquant | manquant | manquant | Ancien forfait BRU non repris |
| Assurance assistance | 2 adultes, tous jours porte à porte | manquant | manquant | manquant | Résidence/éligibilité inconnues ; même la grille journalière v5 ne prouve pas couverture au départ TUN |
| Assurance annulation | Capital et contrat adaptés | manquant | manquant | manquant | Ancienne provision de durée/capital non reportée |
| Activités et accès locaux | Programme propre à 9 nuits | manquant | manquant | manquant | Pas de prorata des anciennes excursions |
| Formalités, TDAC/visa éventuel | 2 adultes, pays et transits réels | manquant | manquant | manquant | Frais officiels datés manquants, aucun zéro présumé |
| Taxes/frais obligatoires | Hors inclusions attestées | manquant | manquant | manquant | Répartir dans ligne porteuse ou X, jamais deux fois |
| Domicile↔TUN | AR, domicile inconnu | manquant | manquant | manquant | Ne pas reporter Domicile↔BRU |
| SIM/connectivité | Quantité et formule adaptées | manquant | manquant | manquant | Aucun forfait ancien repris |
| Pourboires volontaires | Choix voyageur | manquant | manquant | manquant | Ni taxe ni obligation |
| Banque/change/retraits | Paiements réels | manquant | manquant | manquant | Tous prix observés EUR ; frais distincts |
| Early check-in/late check-out | Selon arrivée/transfert/départ | manquant | manquant | manquant | Pas de nuit ou de gratuité implicite |
| B/H dépenses ordinaires hors réserve et X | Somme complète sans doublons | manquant / manquant | manquant / manquant | manquant / manquant | Hôtel aligné et postes essentiels absents |
| Réserve fixe | Groupe, incluse sous plafond | 1 000,00 | 1 000,00 | 1 000,00 | Paramètre confirmé |
| X suppléments obligatoires supplémentaires | Liste à établir, hors lignes déjà comptées | manquant | manquant | manquant | Jamais zéro implicite |
| Total bas/haut + réserve + X | B+1 000+Xbas / H+1 000+Xhaut | manquant | manquant | manquant | Aucun total complet calculable |
| Total par personne | Total exact/2 | manquant | manquant | manquant | Deux adultes |
| Tolérance X / solde complet | 8 000−1 000−H ; puis −Xhaut | manquant | manquant | manquant | H incomplet |
| État | Classement | Budget non concluant | Budget non concluant | Budget non concluant | Pas « dans le budget » |

### Archive v2 — Socle connu : vol et réserve seulement, pas prix du voyage

Poser Ubas/Uhaut = toutes les dépenses ordinaires manquantes, dont **hôtel aux bonnes dates, repas, transferts et Domicile↔TUN** ; X ne contient que d'autres suppléments obligatoires non déjà comptés. U et X ne sont pas estimés à zéro. Cette écriture permet de montrer ce qui est connu sans fabriquer B/H.

| Option | Vol brut exact | Vol + réserve affichés | Total symbolique bas/haut | Socle par personne, hors U et X | Solde après vol/réserve, pour U ET X |
|---|---|---|---|---|---|
| A/C F4 | 1502.083472 EUR | ⚠️ 2 502,09 EUR | ceil(2502.083472 + Ubas + Xbas) / ceil(2502.083472 + Uhaut + Xhaut) | ⚠️ 1 251,05 EUR | ⚠️ 5 497,92 EUR affichés ; exact 5497.916528 |
| B F6 | 1923.308092 EUR | ⚠️ 2 923,31 EUR | ceil(2923.308092 + Ubas + Xbas) / ceil(2923.308092 + Uhaut + Xhaut) | ⚠️ 1 461,66 EUR | ⚠️ 5 076,70 EUR affichés ; exact 5076.691908 |

Le solde affiché, arrondi vers le haut comme demandé, n'est pas une autorisation de dépenser le centime supplémentaire : le contrôle du plafond utilise toujours le montant **exact**. Ce solde n'est pas la tolérance de X seul. Les valeurs brutes servent à la reproductibilité et ne sont pas des montants arrondis à payer. Aucune marge supplémentaire en pourcentage.

Calcul déterministe vérifié en Python Decimal, à partir des chaînes brutes : quantize(Decimal("0.01"), rounding=ROUND_CEILING), arrondi seulement au résultat publié ; ne pas sommer les intermédiaires arrondis. F4 brut 1502.083472 donne **1 502,09**, F5 1230.083472 donne **1 230,09**, F6 1923.308092 donne **1 923,31**. Les valeurs 1 502,08 et 1 230,08 de l'addendum sont donc corrigées. Parts calculées sur les totaux exacts/2 ; un centime d'écart de présentation entre deux parts et le groupe est possible et ne modifie pas la somme exacte.

Aucun prix v5 réutilisé dans ces budgets : le prompt permet une ligne explicitement journalière et pertinente, mais ne l'impose pas. Sans résidence/contrat, programme et taux admissible, conserver manquant plutôt qu'appliquer mécaniquement une ancienne grille. Pour futures devises non EUR : source/date effective et formule du taux, frais séparés. Classement final : borne haute complète sous plafond → dans le budget ; plafond entre bornes → risque de dépassement ; borne basse au-dessus → dépassement ; poste essentiel sans borne haute → non concluant. B1 est écarté pour son offre hôtel seule à 19 242,00 EUR, sans généraliser ce prix à de nouvelles dates.

## Archive v2 — Itinéraire de travail, confort et comparaison des durées

| Option | Arrivée locale / départ local avion | Hôtel à rechercher | Nuits | Hébergement actuel | Transfert / durée porte à porte / coût |
|---|---|---|---|---|---|
| A | HKT 09/12 12:00 / 18/12 15:30 | Nai Yang 09→18/12 | 9 | manquant | HKT↔hôtel, manquant / manquant |
| B | KBV 11/12 18:10 / 20/12 08:40 | Ao Nang 11→20/12 | 9 | manquant | KBV↔hôtel, départ tôt à contrôler ; manquant / manquant |
| C | HKT 09/12 12:00 / 18/12 15:30 | Khao Lak 09→18/12 | 9 | manquant | HKT↔hôtel, manquant / manquant |

Dates conditionnelles, aucun programme réservé. Jours locaux 1 et 10 partiels : installation/repos, journées libres alternées avec quelques excursions à sélectionner ; ne pas transposer tout l'ancien circuit. Deux transferts aéroport–hôtel comptés séparément des escales aériennes et excursions. Vérifier check-in, temps d'enregistrement et transferts avant d'affirmer neuf nuits utilisables. Un séjour F4 s'étend du 08 au 19/12 entre départ et retour TUN, F6 du 10 au 21/12 ; domicile–domicile encore inconnu.

Plan B hôtel : second candidat conforme aux mêmes dates seulement après recotation ; aucun 4★. Variante confort : A2 ou C3 à comparer aux dates alignées, en remplacement d'A1/C1, avec un seul hôtel au budget. B n'a pas encore de solution validée. Changement de zone ou chambre = transfert/prix à recalculer. Météo datée manquante : distinguer normales climatiques, tendance et prévision.

| Dimension | 9 nuits | 16–18 nuits historiques | Décision de méthode |
|---|---|---|---|
| Fatigue | Les longs trajets prennent une part plus grande du séjour | Plus de jours pour récupérer | Prioriser escales et horaires supportables ; F1 et F6 montrent concrètement ce coût en temps |
| Décalage | Adaptation variable, temps disponible plus court | Plus de latitude | Première journée souple ; décalage exact à confirmer par fuseaux datés |
| Activités | Choix plus limité, une base | Plus d'étapes possibles | Ne pas comprimer l'ancien programme |
| Qualité hôtel | Plage et chambre au centre du séjour | Arbitrages possibles entre étapes | Pas de « top » validé sur nom/étoiles seuls |
| Prix | Aucune économie déduite du nombre de nuits | Anciens prix propres à leurs dates | Aucune interpolation ni prorata |
| Aléas | Moins de jours pour reporter une activité | Plus de souplesse | Conserver des jours libres, météo à vérifier |

## Archive v2 — Formalités et santé — sources datées manquantes

Aucun appel de vérification juridique/sanitaire autorisé pour cette mission documentaire. Les mentions du v5 restent historiques et ne certifient pas les règles actuelles. Les autorités ci-dessous sont les sources à consulter, pas des sources prétendument lues aujourd'hui.

| Sujet | Contrôle individuel | Source officielle à recueillir | Date / fichier / index / URL admissible | État |
|---|---|---|---|---|
| Passeports belges | Type, validité, pages et identité billet | Autorités d'entrée + SPF belge | manquant | À confirmer |
| Thaïlande | Visa/exemption, séjour, justificatifs et billet de sortie | Immigration/consulat thaïlandais + SPF belge | manquant | À confirmer |
| TDAC | Applicabilité, délai, canal officiel, frais et justificatif | Immigration thaïlandaise | manquant | À confirmer ; aucune démarche |
| Sortie Tunisie | Séjour régulier, document d'entrée, résidence/double nationalité éventuelle, frais | Autorités tunisiennes + SPF belge | manquant | À confirmer |
| Retour Tunisie | Réadmission selon statut | Autorités tunisiennes | manquant | À confirmer |
| DOH pour QR | Transit airside, soutes, billet protégé ; entrée Qatar si sortie de zone | Autorités qataries, aéroport, QR pour transport | manquant | À confirmer ; aucune exemption présumée |
| AUH pour F4/F5/F6 | Transit et éventuelle entrée, transfert bagages | Autorités émiraties + transporteurs | manquant | À confirmer |
| CAI pour F6 | Transit long, billets/entrée et bagages | Autorités égyptiennes + transporteurs | manquant | À confirmer |
| Assurance/santé | Résidence, durée porte à porte, exclusions, recommandations actuelles | Assureur, SPF belge, médecine des voyages officielle | manquant | À confirmer |

Distinguer publication/mise à jour et consultation UTC. Aucun conseil médical personnalisé ni coût nul de formalité supposé. Aucune réservation, compte ou service payant.

## Archive v2 — Tracker

| Tâche | Option | Responsable | Échéance conseillée | Source officielle | État | Lien/repère |
|---|---|---|---|---|---|---|
| Valider durée/plafond/fenêtre/réserve | Toutes | Voyageur via orchestrateur | 25/09/2026 | Sans objet | Confirmé selon prompt partie 2 | Hypothèses |
| Lire les 10 réponses v7 + métadonnées | Toutes | Codex | Partie 2 | Sans objet | Fait, index base 0 | Registre |
| Vérifier nuits, bagages et segments | Vols | Codex | Partie 2 | Trace fournisseur | Fait avec limites | F1–F8 |
| Recoter QR pour 9 nuits complètes | A/C/B via HKT | Orchestrateur | Prochaine commande | Sans objet | Requête manquante, non lancée | Requêtes manquantes |
| Recoter hôtels sur dates F4/F6 | A/B/C | Orchestrateur | Après arbitrage vols | Sans objet | Manquant | A1–C3 |
| Vérifier étoiles, chambre/vue mer, plage/annulation | A/B/C | Agent commandé ultérieurement | Avant validation | Registre hôtelier à recueillir | Manquant | Critères hôtels |
| Documents, résidence, domicile | Deux voyageurs | Utilisateur via orchestrateur | Avant validation | À recueillir | Manquant | Formalités |
| Transferts, repas, assurance, activités, taxes | Toutes | Agent commandé ultérieurement | Avant budget final | À recueillir si applicable | Manquant | Budget |
| Livrer UTF-8 sans BOM/LF puis STOP | Partie 2 | Codex | Présente livraison | Sans objet | Fait, dépôt indiqué dans note | Drive L3c |
| Relire, intégrer, décider de L3e | Suite | Orchestrateur | Après livraison | Sans objet | Attendu ; aucune initiative Codex | Note de livraison |

## Archive v2 — Registre de preuves — une ligne par offre

Tous les chemins ci-dessous sont relatifs au dépôt et commencent par skills/travel-agent/. Index **0** = premier élément de itineraries pour Kiwi, premier élément du tableau JSON décodé output pour Trivago. UTC = première ligne === de la réponse, et non date de consultation. Le texte system_message est ignoré. Liens Git figés sur 12e5552 ; URLs d'offres fournies par la trace, disponibilité non relue.
 
| ID | Fichier | Index / chemin | UTC appel | URL offre ou trace | Portée |
|---|---|---|---|---|---|
| F1 | [skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_qr_exact_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_qr_exact_9n.json) | itineraries[0] | 2026-09-25T00:03:19+00:00 | [Kiwi](https://kiwi.com/u/5u935d) | TUN → HKT on 29/11/2026–29/11/2026, returning 08/12/2026–08/12/2026, 2 adults [≤2 stops/sector; only QR; no self-transfer] |
| F2 | [skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_qr_fenetre_9_10n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_qr_fenetre_9_10n.json) | itineraries[0] | 2026-09-25T00:03:29+00:00 | [Kiwi](https://kiwi.com/u/38vq6u2) | TUN → HKT on 15/11/2026–10/12/2026, 2 adults, 9–10 nights [≤2 stops/sector; only QR; no self-transfer] |
| F3 | [skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_qr_fenetre_9_10n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_qr_fenetre_9_10n.json) | itineraries[1] | 2026-09-25T00:03:29+00:00 | [Kiwi](https://kiwi.com/u/96pkwy) | TUN → HKT on 15/11/2026–10/12/2026, 2 adults, 9–10 nights [≤2 stops/sector; only QR; no self-transfer] |
| F4 | [skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_all_fenetre_9_10n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_hkt_all_fenetre_9_10n.json) | itineraries[0] | 2026-09-25T00:03:33+00:00 | [Kiwi](https://kiwi.com/u/2cb2uh) | TUN → HKT on 15/11/2026–10/12/2026, 2 adults, 9–10 nights [≤2 stops/sector; no self-transfer] |
| F5 | [skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_all_fenetre_9_10n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_all_fenetre_9_10n.json) | itineraries[0] | 2026-09-25T00:03:54+00:00 | [Kiwi](https://kiwi.com/u/v7cruhw) | TUN → KBV on 15/11/2026–10/12/2026, 2 adults, 9–10 nights [≤2 stops/sector; no self-transfer] |
| F6 | [skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_all_fenetre_9_10n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_all_fenetre_9_10n.json) | itineraries[3] | 2026-09-25T00:03:54+00:00 | [Kiwi](https://kiwi.com/u/jjdxvd) | TUN → KBV on 15/11/2026–10/12/2026, 2 adults, 9–10 nights [≤2 stops/sector; no self-transfer] |
| F7 | skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_qr_exact_9n.json | resultsCount=0 ; index sans objet | 2026-09-25T00:03:43+00:00 | [Trace](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_qr_exact_9n.json) ; URL d'offre absente | TUN → KBV on 29/11/2026–29/11/2026, returning 08/12/2026–08/12/2026, 2 adults [≤2 stops/sector; only QR; no self-transfer] |
| F8 | skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_qr_fenetre_9_10n.json | resultsCount=0 ; index sans objet | 2026-09-25T00:03:50+00:00 | [Trace](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/kiwi_tun_kbv_qr_fenetre_9_10n.json) ; URL d'offre absente | TUN → KBV on 15/11/2026–10/12/2026, 2 adults, 9–10 nights [≤2 stops/sector; only QR; no self-transfer] |
| A1 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json) | output[0] après décodage | 2026-09-25T00:02:23+00:00 | [Trivago](https://www.trivago.be/en-US/lm/phuket-marriott-resort-and-spa-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-5200830;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=-4470882299114158396) | Phuket Marriott Resort and Spa, Nai Yang Beach ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| A2 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json) | output[1] après décodage | 2026-09-25T00:02:23+00:00 | [Trivago](https://www.trivago.be/en-US/lm/resort-the-slate-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-9398;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=-4170102154282534162) | The Slate ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| A3 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json) | output[2] après décodage | 2026-09-25T00:02:23+00:00 | [Trivago](https://www.trivago.be/en-US/lm/dewa-phuket-resort-villas-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-1083924;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=2440522599714518784) | Dewa Phuket Resort & Villas ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| B1 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json) | output[1] après décodage | 2026-09-25T00:02:38+00:00 | [Trivago](https://www.trivago.be/en-US/lm/resort-rayavadee-ao-nang?cip=234716015&currencyCode=EUR&search=100-112567;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-2272656597663227210) | Rayavadee ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| B2 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json) | output[3] après décodage | 2026-09-25T00:02:38+00:00 | [Trivago](https://www.trivago.be/en-US/lm/hotel-anana-ecological-resort-krabi?cip=234716015&currencyCode=EUR&search=100-12103646;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-6765048849868097557) | Anana Ecological Resort Krabi ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| B3 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json) | output[6] après décodage | 2026-09-25T00:02:38+00:00 | [Trivago](https://www.trivago.be/en-US/lm/varana-krabi-hotel-klong-muang?cip=234716015&currencyCode=EUR&search=100-32776746;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-7182434226983489518) | Varana Krabi Hotel ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| C1 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_khaolak_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_khaolak_5s_9n.json) | output[6] après décodage | 2026-09-25T00:02:45+00:00 | [Trivago](https://www.trivago.be/en-US/lm/hotel-pullman-khao-lak-resort?cip=234716015&currencyCode=EUR&search=100-22945772;105-1322;200-15941;dr-20261129-20261208;drs-40;rc-1-2&dealId=2341787025429194630) | Pullman Khao Lak Resort ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| C2 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_khaolak_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_khaolak_5s_9n.json) | output[2] après décodage | 2026-09-25T00:02:45+00:00 | [Trivago](https://www.trivago.be/en-US/lm/resort-the-sands-khao-lak-by-katathani?cip=234716015&currencyCode=EUR&search=100-2378712;105-1322;200-15941;dr-20261129-20261208;drs-40;rc-1-2&dealId=8542429402599277393) | The Sands Khao Lak by Katathani ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| C3 | [skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_khaolak_5s_9n.json](https://github.com/choukrikodi/venom-xbmc-addons/blob/12e5552/skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_khaolak_5s_9n.json) | output[1] après décodage | 2026-09-25T00:02:45+00:00 | [Trivago](https://www.trivago.be/en-US/lm/hotel-jw-marriott-khao-lak-resort-and-spa?cip=234716015&currencyCode=EUR&search=100-1116583;105-1322;200-15941;dr-20261129-20261208;drs-40;rc-1-2&dealId=-3353249895648236366) | JW Marriott Khao Lak Resort and Spa ; 29/11→08/12 ; BE/EUR, 2 adultes/1 chambre demandés |
| E1, rejet | skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json | output[10] | 2026-09-25T00:02:38+00:00 | [Offre](https://www.trivago.be/en-US/lm/klong-muang-hostel-คลองม-วงโฮสเทล?cip=234716015&currencyCode=EUR&search=100-47234290;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=2305690059581118628) | Klong Muang Hostel คลองม่วงโฮสเทล, anomalie décrite plus haut |
| E2, rejet | skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_naiyang_5s_9n.json | output[9] | 2026-09-25T00:02:23+00:00 | [Offre](https://www.trivago.be/en-US/lm/hotel-wyndham-royal-lee-phuket-phuket-town?cip=234716015&currencyCode=EUR&search=100-10691448;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=6973740639954321896) | Wyndham Royal Lee Phuket, anomalie décrite plus haut |
| E3, rejet | skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_maikhao_5s_9n.json | output[14] | 2026-09-25T00:02:30+00:00 | [Offre](https://www.trivago.be/en-US/lm/hotel-andaman-pool-villas-maikhao-mai-khao-beach?cip=234716015&currencyCode=EUR&search=100-47479790;105-1322;200-15961;dr-20261129-20261208;drs-40;rc-1-2&dealId=6208168416988176952) | Andaman Pool Villas, Maikhao, anomalie décrite plus haut |
| E4, rejet | skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/trivago_aonang_5s_9n.json | output[0] | 2026-09-25T00:02:38+00:00 | [Offre](https://www.trivago.be/en-US/lm/hotel-grand-mercure-krabi-aonang-ao-nang?cip=234716015&currencyCode=EUR&search=100-50723138;105-1322;200-16207;dr-20261129-20261208;drs-40;rc-1-2&dealId=-4175545458776111846) | Grand Mercure Krabi Aonang, anomalie décrite plus haut |

Métadonnées : run.json hôtels UTC 2026-09-25T00:02:53+00:00, vols 2026-09-25T00:03:58+00:00, calls_status et list_status success ; les deux indiquent checkout_sha=f9f0140877503d299967620d6b65b79c440509ab. Ce SHA est le code d'exécution, distinct des commits de dépôt des réponses. manifest.json des deux lots lu intégralement. calls.stderr.log hôtel vide ; vol indique une reprise HTTP 2/2, sans erreur finale dans run.json. Ces succès ne prouvent pas l'exhaustivité ni le respect de la durée.

## Archive v2 — Requêtes manquantes

Les v7 ne sont plus absentes : l'état « absent à 8b9ca24, 00:01 UTC » de la partie 1 est remplacé par les réponses reçues et contrôlées. Aucune nouvelle requête n'a été lancée.

| Demande / couverture reçue | Résultats | Reste à obtenir |
|---|---|---|
| QR HKT exact 29/11→08/12 | 9 | Offre QR alignée sur 9 nuits complètes, arrivée/départ hôtel cohérents |
| QR HKT fenêtre 15/11→10/12 | 2 | Balayage mieux couvert ; ne pas conclure optimum QR |
| Toutes compagnies HKT fenêtre | 15 | Hôtels 09→18/12 pour F4 ; validation bagages/protection |
| QR KBV exact et fenêtre | 0 + 0 | Alternative QR via HKT et transfert HKT↔Ao Nang chiffré ; pas « route impossible » |
| Toutes compagnies KBV fenêtre | 15 | Hôtels 11→20/12 pour F6, protection EY/MS et formalités AUH/CAI |
| Hôtels Nai Yang / Mai Khao / Ao Nang / Khao Lak | 25 / 25 / 13 / 18 | Tous reçus pour 29/11→08/12 seulement ; recotations aux dates de vol choisies |
| Vue mer, plage directe, distance mesurée, classement | Absents des traces | Chambre précise, accès, mesure et certificat officiel datés |
| Annulation, repas, taxes/prépaiement | Absents des traces | Conditions exactes, heure/fuseau/pénalité et prix complet |
| Domicile↔TUN / transferts locaux | Non reçus | Domicile, horaires porte à porte, devis groupe/bagages |
| Formalités / santé / assurance / repas / activités / frais | Pas de nouvelle preuve admissible | Sources datées adaptées au nouveau voyage |

## Archive v2 — Écarts du skill et corrections de l'addendum

1. Le mot « 9n » dans un nom de fichier ne valide pas neuf nuits sur place. F1 arrive le 30/11 et repart à 00:25 le 08/12 : 7 nuits complètes, pas neuf. Aucun résultat exact QR ne résout l'alignement hôtel 29/11→08/12.
2. F4 permet **9 nuits 09→18/12**, malgré dix jours entre les dates de départ aériennes. F5 permet **10 nuits 02→12/12**, pas onze nuits sur place. Ces constats corrigent les raccourcis de l'addendum ; F6 offre une piste KBV de neuf nuits plus chère.
3. QR fenêtre : 1 826,00 EUR correspond au 10/12, 1 946,00 au 08/12. F3 permet chambre conservée jusqu'au 18 mais départ la veille au soir : ne pas vendre neuf nuits complètes.
4. Fenêtre non exhaustive, paramètres acceptés sans garantie de durée réelle ; filtre étoiles non fiable. Les 5★ restent déclarés, jamais certifiés ; stars_unverified appliqué aux anomalies.
5. Rounding conforme : 1502.083472→1 502,09 et 1230.083472→1 230,09, non ,08. Les valeurs de prix exactes sont conservées jusqu'à la somme.
6. Les tarifs hôteliers v7 ne sont pas pour les dates F4/F6 et ne prouvent pas vue mer/plage directe. Aucun total complet ni conformité au plafond. Les lignes manquantes ne deviennent pas zéro.
7. Pas de nouveau réseau commercial sur instruction ; formalités, distances plage, recotation, météo datée, contrats et conditions restent à vérifier. Aucune pondération ou note plage fabriquée.
8. Seuls rapport-asie-v6.md et RAPPORT_LIVRAISON_L3d.md sont modifiés pour cette mission ; UTF-8 sans BOM, LF. Pas de changement au skill, références, scripts, configurateur, ni de commit/push. Aucun PDF.
9. **STOP après dépôt partie 2 et complément Chrome demandé par le voyageur ci-dessous. L'orchestrateur relit, intègre et commande la suite séparément. L3e non commencée ; aucune reprise automatique.**

## Archive v2 — Complément demandé par le voyageur — Chrome et concurrence

**Extension de mission reçue pendant la rédaction**, postérieure à l'interdiction de réseau commercial du prompt partie 2 : le voyageur demande de lire les pages Chrome et les concurrents pour améliorer les opportunités, le skill et le rendu. Les observations ci-dessous sont distinctes des traces v7 et ne remplacent pas leurs prix dans les budgets. Aucun compte créé, réservation ou alerte activée. À l'inventaire initial de Chrome, seul l'onglet Claude était accessible ; Trivago et Google Flights ont ensuite été ouverts.

### Archive v2 — Opportunités observées le 25/09/2026, relevé arrêté à 00:16:52 UTC

| Preuve | Source et périmètre | Observation ⚠️ instantanée non réservée | Limite avant comparaison |
|---|---|---|---|
| W1 | Trivago, A1 Marriott Nai Yang, 29/11→08/12, 2 voyageurs/1 chambre, BE/EUR | Expedia affiché à **2 174,00 EUR total**, petit déjeuner, annulation annoncée avant le 26/11 ; Stayforlong affiché 242 EUR/nuit et Trip.com 268 EUR/nuit | Ne pas multiplier les prix/nuit arrondis. Total, chambre vue mer, heure/fuseau/pénalité/taxes à relire chez vendeur ; dates non alignées F4. Ce n'est pas une économie comparable au centime près avec A1 |
| W2 | Google Flights, TUN–HKT 08→18/12, **2 adultes**, économique, retour sélectionné | Etihad aller 08/12 10:40→09/12 12:00, retour 18/12 15:30→19/12 06:15 ; escales AUH 7 h /6 h 45. Mêmes horaires et vols EY740/EY416/EY417/EY739 que F4 | Neuf nuits locales cohérentes ; franchises déterminantes ci-dessous |
| W2-EY | Même récapitulatif, option compagnie | **1 370,00 EUR**, équivalent affiché 4 611 TND | Un bagage à main/passager, **aucun bagage enregistré** dans le récapitulatif ; conversion effective/frais à vérifier |
| W2-Booking | Même récapitulatif | **1 315,00 EUR**, Booking.com | Google indique frais de bagages indisponibles pour cette agence ; soutes non confirmées |
| W2-Mytrip | Même récapitulatif | **1 261,00 EUR**, Mytrip | Soutes non confirmées, vendeur et conditions finales non relus ; pas recommandé sur le seul prix |
| W2-Expedia | Même récapitulatif | **1 364,00 EUR**, Expedia | Soutes non confirmées, conditions finales non relues |
| W2-Trip | Même récapitulatif | **1 346,00 EUR**, Trip.com | Soutes non confirmées, conditions finales non relues |

Les résultats avant sélection du retour affichaient aussi des pistes Qatar depuis TUN le 08/12 : arrivée HKT 09/12 18:55 dès **1 685,00 EUR** (20 h 55, escale DOH 9 h 15), ou arrivée 12:55 dès **1 915,00 EUR** (14 h 55, escale 3 h 15). Retours/franchises non ouverts pour ces pistes : elles ne prouvent pas neuf nuits complètes ni une meilleure offre QR comparable.

**Conclusion de comparaison :** les montants Google inférieurs à F4 ne prouvent aucune économie tant que deux soutes ne sont pas intégrées au tarif final. Ils justifient une contre-vérification compagnie/agences. Le petit déjeuner et l'annulation vus sur Trivago peuvent améliorer la valeur de l'offre, mais uniquement après contrôle de la même chambre et des conditions. Le calendrier Trivago n'a pas fourni de recotation exploitable aux dates 09→18/12 pendant cette lecture ; aucune nouvelle cotation alignée n'est inventée.

### Archive v2 — Améliorations concrètes pour le skill et le rendu

1. **Normaliser avant de classer** : même itinéraire et dates locales, deux adultes, une soute chacun, même cabine et protection ; même hôtel/chambre vue mer, repas, taxes et annulation. Afficher un prix nu séparé du prix conforme, puis « non comparable » si un supplément essentiel manque.
2. **Contrôler la durée réelle** : calculer arrivée locale→départ hôtel, signaler les retours après minuit et les nuits facturées non dormies ; recoter les hôtels seulement après ce contrôle.
3. **Comparer plusieurs sources et vendeurs** : Kiwi puis Google Flights, Skyscanner ou KAYAK pour les dates ; prix final compagnie pour les franchises. Trivago puis Booking/Expedia/Trip.com/Agoda et site hôtel, selon les vendeurs réellement proposés, pour la chambre exacte. Aucun avantage permanent d'un vendeur présumé.
4. **Améliorer la présentation** : trois cartes A/B/C maximum avec dates, nuits utilisables, horaires/escales, hôtel/chambre, prix complet ou postes manquants, annulation, source et heure. Conserver les registres techniques en annexe. Distinguer clairement « prix observé », « critères vérifiés » et « budget complet ».
5. **Éviter les faux rabais** : tarifs membres non accessibles, prix par nuit arrondis, devises de paiement et offres à bagages différents ne doivent pas alimenter une colonne économies. Aucune alerte ou abonnement créé sans instruction.

Les calendriers et graphiques de [Google Flights](https://support.google.com/travel/answer/7664728?hl=en), la recherche mensuelle de [Skyscanner](https://help.skyscanner.net/hc/en-gb/articles/201750142-How-do-I-find-the-cheapest-prices-across-a-month) et le calendrier de [KAYAK](https://www.kayak.com/c/help/pricing/) constituent des moyens de contrôle complémentaires, d'après leur documentation officielle consultée le 25/09/2026. Skyscanner et KAYAK n'ont pas fait l'objet d'une recherche tarifaire effective ici. Ces suggestions sont remises à l'orchestrateur ; **aucun changement de code/skill/configurateur n'est revendiqué dans cette livraison**.

### Archive v2 — Registre complémentaire W

| ID | Fichier/repère de conservation | UTC de relevé | URL | Nature |
|---|---|---|---|---|
| W1 | Présent rapport, tableau complément Chrome, Marriott ; lecture DOM Chrome | 25/09/2026, session terminée 00:16:52 UTC ; seconde exacte de W1 non conservée | [Offre Trivago](https://www.trivago.be/en-US/lm/phuket-marriott-resort-and-spa-nai-yang-beach?cip=234716015&currencyCode=EUR&search=100-5200830;105-1322;200-15960;dr-20261129-20261208;drs-40;rc-1-2&dealId=-4470882299114158396) | Observation de comparateur, pas contrat vendeur |
| W2 et vendeurs | Présent rapport, tableau complément Chrome ; récapitulatif Google Flights | 2026-09-25T00:16:52Z | [Récapitulatif Google Flights](https://www.google.com/travel/flights/booking?tfs=CBwQAhpgEgoyMDI2LTEyLTA4Ih8KA1RVThIKMjAyNi0xMi0wOBoDQVVIKgJFWTIDNzQwIh8KA0FVSBIKMjAyNi0xMi0wORoDSEtUKgJFWTIDNDE2agcIARIDVFVOcgcIARIDSEtUGmASCjIwMjYtMTItMTgiHwoDSEtUEgoyMDI2LTEyLTE4GgNBVUgqAkVZMgM0MTciHwoDQVVIEgoyMDI2LTEyLTE5GgNUVU4qAkVZMgM3MzlqBwgBEgNIS1RyBwgBEgNUVU5AAUABSAFwAYIBCwj___________8BmAEB&tfu=CnRDalJJVm14V01HVjFYekZLVUc5QlFreHFVSGRDUnkwdExTMHRMUzEzWW5VeU1TMXVNa0ZCUVVGQlIzRXhkbFl3UVZvNGJGZEJFZ3RGV1RReE4zeEZXVGN6T1JvTENKQ3VDQkFDR2dORlZWSTRISERTd1FrPRICCAAiAA) | Lecture Chrome de deux adultes et vols sélectionnés ; aucune réservation |
| W3 | Présent rapport, pistes concurrentes et liens officiels | 25/09/2026, avant 00:16:52 UTC | Liens officiels ci-dessus | Capacités documentées, pas offres cotées |

**Livraison documentaire terminée ; attente de relecture et des prochains prompts de l'orchestrateur.**


