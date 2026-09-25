# Livraison L3d v2 — partie 2 et complément Chrome

25/09/2026. **Terminé, STOP ; attente de relecture et de nouveaux prompts d'orchestrateur. L3e non commencée.**

## Fait et périmètre

- rapport-asie-v6.md : v5 intégral normalisé LF (112 445 octets inchangés), suivi de la section TUN complétée à partir des dix réponses v7.
- Vols, segments, bagages, nuits réelles ; neuf candidats maximum (trois par scénario), conditions non vérifiées explicites ; budgets sans tarifs incompatibles, réserves/socles connus et manquants ; tracker et registre par offre.
- Les deux seuls fichiers modifiés pour cette mission sont sous skills/travel-agent/evals/files/ : rapport-asie-v6.md et RAPPORT_LIVRAISON_L3d.md. UTF-8 sans BOM, LF ; aucun commit/push, changement de skill, scripts, références ou configurateur.
- Extension explicite du voyageur pendant le travail : lire Chrome et les concurrents pour améliorer opportunités/skill/rendu. Cela autorise les consultations commerciales du complément W, malgré l'interdiction initiale du prompt. Trivago et Google Flights lus en Chrome, Skyscanner/KAYAK documentés par sources officielles. Aucun compte, achat, réservation, notification ou abonnement créé.
- Les améliorations pour le skill sont documentées dans le rapport et remises à l'orchestrateur ; aucun changement de code du skill n'est annoncé.

## Résultats et corrections majeures

F1 Qatar 1 414,00 EUR : arrivée 30/11, sortie hôtel 07/12 soir avant le vol 08/12 00:25, donc sept nuits complètes ; incompatible neuf nuits. F4 Etihad 1 502,09 EUR : arrivée 09/12 et retour HKT 18/12, soit neuf nuits, pas dix. F5 KBV 1 230,09 EUR : dix nuits locales 02→12/12, pas onze ; variante distincte. F6 KBV index 3 à 1 923,31 EUR offre neuf nuits 11→20/12 avec retour via AUH/CAI, protection à vérifier. Les hôtels 29/11→08/12 ne sont alignés sur aucun de ces couples retenus ; aucun total complet valide inventé.

Les arrondis 1502.083472 et 1230.083472 donnent ,09 avec Decimal/ROUND_CEILING. La fenêtre QR n'est pas exhaustive : 1 826 EUR part le 10/12, 1 946 EUR part le 08/12.

Chrome : Google propose le même itinéraire F4 dès 1 261 EUR chez Mytrip, 1 315 EUR Booking, 1 346 EUR Trip.com, 1 364 EUR Expedia, 1 370 EUR Etihad ; bagages en soute absents ou non documentés, donc pas d'économie comparable validée. Trivago présente Marriott Nai Yang via Expedia à 2 174 EUR, petit déjeuner et annulation annoncée, mais chambre vue mer/conditions complètes non prouvées et dates anciennes. Tout reste instantané non réservé.

## Hypothèses confirmées et limites

Neuf nuits exactement, plafond 8 000 EUR conservé, réserve 1 000 EUR séparée selon v5 sous plafond ; fenêtre 15/11→10/12 pour départ TUN, retour après 10/12 autorisé. Deux adultes belges, QR préféré, 5★, plage directe/vue mer, une soute chacun. Une chambre et une base ; domicile/résidence/documentation individuelle inconnus.

Manquants : hôtel aux bonnes dates et chambre conforme, preuve plage directe et distance mesurée, classement officiel, annulation détaillée, tarifs bagages complets des pistes Chrome, protection des connexions, transferts dont Domicile↔TUN, formalités datées DOH/AUH/CAI/Tunisie/Thaïlande/TDAC, assurance, repas/activités et frais. Budgets A/B/C non concluants.

## Traces lues et index

Racines : skills/travel-agent/test-output-v7-10j-vols/runs/36075603038-1/ et skills/travel-agent/test-output-v7-10j-hotels/runs/36075603038-1/. Sources figées au commit 12e5552 ; hôtels déposés par 757e4d1. manifest.json, run.json et calls.stderr.log des deux lots lus. Dix réponses décodées ; system_message ignoré. Index base 0.

| Fichier | UTC appel | Effectif résultats | Index détaillés dans rapport |
|---|---|---|---|
| trivago_aonang_5s_9n.json | 2026-09-25T00:02:38+00:00 | 13 | 1 (B1), 3 (B2), 6 (B3) |
| trivago_khaolak_5s_9n.json | 2026-09-25T00:02:45+00:00 | 18 | 6 (C1), 2 (C2), 1 (C3) |
| trivago_maikhao_5s_9n.json | 2026-09-25T00:02:30+00:00 | 25 | lot vide ou contrôle transversal ; voir exclusions et registre W |
| trivago_naiyang_5s_9n.json | 2026-09-25T00:02:23+00:00 | 25 | 0 (A1), 1 (A2), 2 (A3) |
| kiwi_tun_hkt_all_fenetre_9_10n.json | 2026-09-25T00:03:33+00:00 | 15 | 0 (F4) |
| kiwi_tun_hkt_qr_exact_9n.json | 2026-09-25T00:03:19+00:00 | 9 | 0 (F1) |
| kiwi_tun_hkt_qr_fenetre_9_10n.json | 2026-09-25T00:03:29+00:00 | 2 | 0 (F2), 1 (F3) |
| kiwi_tun_kbv_all_fenetre_9_10n.json | 2026-09-25T00:03:54+00:00 | 15 | 0 (F5), 3 (F6) |
| kiwi_tun_kbv_qr_exact_9n.json | 2026-09-25T00:03:43+00:00 | 0 | lot vide ou contrôle transversal ; voir exclusions et registre W |
| kiwi_tun_kbv_qr_fenetre_9_10n.json | 2026-09-25T00:03:50+00:00 | 0 | lot vide ou contrôle transversal ; voir exclusions et registre W |

Exclusions détaillées additionnelles : Ao Nang[10] hostel et [0] avis insuffisants ; Nai Yang[9] prix/note ; Mai Khao[14] villas/avis. UTC des lots dans le tableau. Chaque offre citée possède sa propre ligne avec URL dans le registre du rapport. W1/W2 : observations Chrome consignées dans le rapport, relevé terminé à 2026-09-25T00:16:52Z ; seconde exacte du relevé hôtel antérieur non conservée.

## Contrôles et empreintes

Préfixe v5 normalisé LF identique octet par octet, taille 112 445 ; décodage UTF-8 et absence de BOM/CR vérifiés. Montants contrôlés par Python Decimal avec ROUND_CEILING. Aucun prix de chambre 29/11→08/12 additionné au vol 09→18/12 ou 11→20/12.

- SHA256 intégral rapport-asie-v6.md : **48859ee32c2e76ac329c0fd4ae3f655b4c39ebd1faf178996c777f46d81043bb**.
- SHA256 intégral de cette note : communiqué dans le message de livraison à Claude après finalisation ; il ne peut être inséré dans le fichier qu'il hache sans changer ce hash. Les empreintes des deux fichiers sont ainsi livrées ensemble dans le message.

## Dépôt et point d'arrêt

Mise à jour des fichiers existants dans [Drive travel-agent — livrables L3c](https://drive.google.com/drive/folders/1gXNHQ4djqsJH9q-_L62Ks5pemnjb0Kti), sans doublons :
- [rapport-asie-v6.md](https://drive.google.com/file/d/1r7HhHQR3Xl86hK1TFuRB6aU7fTy3n8qF/view)
- [RAPPORT_LIVRAISON_L3d.md](https://drive.google.com/file/d/1-2022VTBX7M1M-e6I3ZeASQEsMw6FNMp/view)

L'orchestrateur relit, intègre et commande la suite. Requêtes à envisager : QR donnant neuf nuits complètes ; hôtels aux dates effectivement choisies ; vérification des vendeurs à deux soutes et de la chambre vue mer. Aucune relance lancée de manière autonome après cette livraison.

