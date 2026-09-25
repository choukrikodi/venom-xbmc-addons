# Livraison L3d v3 — traces alignées 9 nuits
25/09/2026. Terminé ; STOP après dépôt, attente de relecture et des prochains prompts de Claude orchestrateur. L3e non commencée.

## Fait
Rapport v6 enrichi dans la même section TUN avec état v3 courant ; v2 conservé en archive explicite et v5 BRU inchangé (112 445 premiers octets).
F9/F10, huit hôtels A/C, budgets connus partiels vol+hôtel, B sans réponse KBV exacte, tracker, preuves et requêtes actualisés.
Seuls rapport-asie-v6.md et RAPPORT_LIVRAISON_L3d.md modifiés pour cette mission ; UTF-8 sans BOM, LF. Aucun appel commercial, compte, réservation, commit/push ou modification de skill/référence/script.

## Corrections du prompt vérifiées
- F9 QR index 0 : retour TUN le 10/12, pas le 09/12. QR843 arrive DOH 09/12 11:25 ; QR1399 repart 10/12 09:10 : 21 h 45 d’escale. Neuf nuits thaïlandaises exactes ; dernière nuit écourtée possible selon transfert.
- Nai Yang / Mai Khao : 25 résultats chacun mais ensembles différents et index différents.
- Hôtels hors zone signalés ; stars_unverified non déclenché pour les huit candidats (Kantary : un signal lexical), classement officiel non vérifié.

## Résultats
F9 ⚠️ 1 283,00 EUR groupe ; F10 ⚠️ 1 230,09 EUR groupe.
A-variante Bang Tao (Kora A4) : connu partiel QR ⚠️ 2 114,00 EUR, Etihad ⚠️ 2 061,09 EUR.
C (Pullman C5) : connu partiel QR ⚠️ 2 453,00 EUR, Etihad ⚠️ 2 400,09 EUR.
Ces sommes sont vol+hôtel seulement : réserve et X non ajoutés. Chambres vue mer et zones non validées ; budgets complets A/B/C non concluants. B : zéro résultat KBV exact dans F11, repli HKT + transfert Ao Nang non chiffré.

## Hypothèses et données non vérifiées
Neuf nuits exactement du 30/11 au 09/12, deux adultes belges, une chambre, départ TUN 29/11, retour TUN 10/12 ; préférence QR, une soute chacun. Plafond 8 000 EUR, réserve séparée 1 000 EUR incluse sous plafond.
Manquent : validation zones, vue mer/plage et classement, chambre/occupation, annulation/taxes/repas, poids bagages/protection, transferts dont domicile↔TUN et HKT↔Ao Nang, formalités datées DOH/AUH/Tunisie/Thaïlande/TDAC, santé/assurances/autres dépenses et transit long. Aucun tarif Chrome intégré. Recommandation finale et L3e à décider par l’orchestrateur.

## Traces lues et contrôles
Racine skills/travel-agent/test-output-v7b-9n-aligne/runs/36077040045-1/, commit 35a9fdf. Index base 0 ; registre par offre avec URL dans le rapport.
| Fichier | UTC | Index cités |
|---|---|---|
| kiwi_tun_hkt_qr_exact_2911_0912.json | 2026-09-25T00:20:33+00:00 | 0, 2, 3 |
| kiwi_tun_hkt_all_exact_2911_0912.json | 2026-09-25T00:20:45+00:00 | 0 |
| kiwi_tun_kbv_all_exact_2911_0912.json | 2026-09-25T00:20:49+00:00 | sans objet |
| trivago_naiyang_5s_3011_0912.json | 2026-09-25T00:20:58+00:00 | 15, 24, 7, 13 |
| trivago_maikhao_5s_3011_0912.json | 2026-09-25T00:21:04+00:00 |  |
| trivago_khaolak_5s_3011_0912.json | 2026-09-25T00:21:17+00:00 | 14, 4, 9, 0 |
| trivago_aonang_5s_3011_0912.json | 2026-09-25T00:21:12+00:00 |  |

run.json, manifest.json et calls.stderr.log lus ; run UTC 2026-09-25T00:21:23+00:00, succès, code 0de31ac. Les lots Mai Khao et Ao Nang sont lus pour couverture/contrôle ; aucun nouveau prix B publié. Données textuelles system_message ignorées.
Calculs Python Decimal/ROUND_CEILING ; sommes sur valeurs brutes, parts /2 avant arrondi ; neuf nuits vérifiées par dates. Préfixe v5 inchangé octet par octet, absence de CR/BOM et UTF-8 contrôlés.

## Empreintes et dépôt
SHA256 intégral rapport-asie-v6.md : **ea1d82579e3ab68e8c67af00e4f69480951ec5dc1c4e04a3fb47a559c8b6e326**.
Le SHA256 de cette note est communiqué après finalisation dans le message de livraison (pas d’auto-hachage récursif).
Mise à jour des deux fichiers existants :
- https://drive.google.com/file/d/1r7HhHQR3Xl86hK1TFuRB6aU7fTy3n8qF/view
- https://drive.google.com/file/d/1-2022VTBX7M1M-e6I3ZeASQEsMw6FNMp/view
Dossier : https://drive.google.com/drive/folders/1gXNHQ4djqsJH9q-_L62Ks5pemnjb0Kti

STOP. Claude relit, intègre et commande la suite ; aucune reprise automatique.
