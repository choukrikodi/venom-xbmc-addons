# Déclarations autres que mensuelles

> Année de référence **2026** (exercice déclaré 2025). Collecte août 2026, **WebSearch uniquement**.
> **Les taux et seuils doivent être re-vérifiés sur les notes communes DGI avant usage opérationnel.**

Légende : **[C]** confirmé · **[P]** probable / source unique · **[?]** introuvable · **[!]** contradiction.

---

## 1. Typologie du menu e-t@srih

Le menu mélange **trois natures d'objets** — un skill doit router selon cette typologie :

| # | Entrée | Nature | § |
|---|---|---|---|
| 1 | Mensuelles | déclaration | *voir `declaration-mensuelle.md`* |
| 2 | IS / Avance sociétés de personnes | déclaration | §2, §3 |
| 3 | Acompte provisionnel | déclaration | §4 |
| 4 | IRPP | déclaration | §6 |
| 5 | Bénéfices des entreprises de production des hydrocarbures | déclaration | §7 |
| 6 | Déclaration Annuelle Art 43 LF 2025 | déclaration | §5 |
| 7 | Impôt libératoire | déclaration | §8 |
| 8 | Taxe sur les jeux de pari et de hasard sur Internet | déclaration | §9 |
| 9 | Adhésion au régime de restitution automatique | **adhésion à un régime** | §10 |
| 10 | Gestion des autorisations de prélèvement | **paramétrage** | *voir `plateformes-et-acces.md`* |
| 11 | Gestion du mandatement | **paramétrage** | *idem* |
| 12 | Déclaration pays par pays | déclaration | §12 |
| 13-14 | Modification mot de passe / adresse e-mail | **compte** | *idem* |

**La déclaration de l'employeur ne figure PAS dans ce menu** alors que c'est la principale
déclaration annuelle — voir §11 et la zone d'ombre associée.

---

## 2. Impôt sur les sociétés (IS)

### 2.1 Champ [C]
SA, SARL, SUARL, SCA, établissements publics à caractère non administratif, sociétés entièrement
étatiques, coopératives, EPNA.

### 2.2 Taux — la zone la plus instable du dossier

**a) Barème progressif par chiffre d'affaires (LF 2025, art. 37)** [C sur le principe / [!] sur la date]

| CA HT | Taux IS |
|---|---|
| < 5 MDT | **15 %** |
| ≥ 5 et < 20 MDT | **20 %** |
| ≥ 20 MDT | **25 %** |

- Fondement : **art. 37 de la loi n° 2024-48 du 9 décembre 2024** (LF 2025).
- Commentaire administratif : **Note Commune n° 08/2025** (arabe uniquement).
- **[!] Entrée en vigueur contradictoire** : une source dit « bénéfices réalisés à partir de janvier
  **2024** », une autre « à partir du 1er janvier **2025** ». **Non tranché.**

**b) Taux réduits et majorés** [C sauf mention]

| Taux | Redevables |
|---|---|
| **10 %** | Artisanat, agriculture, pêche, armement de bateaux de pêche ; zones de développement régional après période de déduction |
| **20 %** (5 ans) | Sociétés au taux majoré admettant leurs actions ordinaires à la cote de la **BVMT** |
| **35 %** | Opérateurs télécoms ; pétrole & gaz ; grandes surfaces / hypermarchés ; sociétés d'investissement ; concessionnaires automobiles [P] |
| **40 %** | **Banques**, établissements financiers (**hors institutions de paiement**), **assurance et réassurance**, leasing, factoring — **relevé de 35 % à 40 % par la LF 2025** |

> **[!] Incohérence majeure à ne pas propager** : certains guides 2026 en anglais présentent **20 %**
> comme « standard CIT rate » et **35 %** comme « general higher rate ». C'est **incompatible** avec le
> barème progressif ci-dessus. Il faut établir l'articulation exacte entre (a) le barème par CA et
> (b) les taux sectoriels 10/35/40 % avant de coder quoi que ce soit.

**c) Minimum d'impôt** [C]

| Base | Taux | Plancher |
|---|---|---|
| CA local | **0,2 %** | **500 DT TTC** |
| CA des sociétés à l'IS de 10 % et des sociétés à prix homologués à marge brute ≤ 6 % | **0,1 %** | **300 DT** [P] |

Dû **même en situation déficitaire**.
**[!]** Une source évoque un « minimum d'imposition de 10 % » pour les sociétés à 15 %/20 % — sens
obscur, probablement le minimum d'impôt des **bénéficiaires d'avantages fiscaux**, dispositif
distinct. À élucider.

**d) Contribution Sociale de Solidarité (CSS) — personnes morales 2026** [C]

| IS applicable | CSS | Minimum |
|---|---|---|
| 40 % ou 35 % | **4 %** | 500 DT |
| 20 % | **3 %** | 400 DT |
| 10 % | **3 %** | 200 DT |

Régime exceptionnel (3 %/4 % au lieu de 1 %) **prolongé jusqu'à fin 2026** par la LF 2026.
S'applique aussi aux sociétés cotées bénéficiant du taux réduit de 20 %.
**CSS des personnes physiques : 0,5 %** du revenu imposable (exercices 2023 à 2026). [C]

**e) Contributions conjoncturelles** [C]
- **LF 2025 art. 38** : contribution conjoncturelle de **2 % du résultat imposable** due par les
  sociétés au taux de 15 % réalisant un **CA HT ≥ 20 MDT** au titre de 2023 → **Note Commune n° 05/2025**.
- **LF 2026** : la contribution de **4 %** sur les bénéfices des banques, établissements financiers,
  assurances, opérateurs télécoms et concessionnaires automobiles devient **PERMANENTE**.

### 2.3 Délais [C]

| Cas | Délai |
|---|---|
| Règle générale | **25e jour du 3e mois** suivant la clôture |
| Exercice clos au 31/12 | **25 mars** N+1 |
| Sociétés soumises au **commissariat aux comptes** | Dépôt du 25 mars = **provisoire** ; déclaration **définitive** dans les **15 jours suivant l'approbation des comptes par l'AGO**, **au plus tard le 25 juin** |
| États financiers au **RNE** | **31 juillet 2026** pour l'exercice 2025 |
| Cessation d'activité | **15 jours** |

**[!]** Formulations contradictoires : « **avant** l'AG d'approbation » vs « dans les **15 jours
suivant** l'approbation ». Non tranché.

Formulaire : `https://www.finances.gov.tn/sites/default/files/2019-08/imp.dec_.is_version_franaise_2017.pdf`

---

## 3. Avance due par les sociétés de personnes et assimilées

Regroupée avec l'IS dans la même entrée de menu. [C]

| Élément | Contenu |
|---|---|
| Redevables | Sociétés fiscalement transparentes : SNC, SCS, sociétés civiles, sociétés en participation, GIE (**art. 51 bis** du code IRPP/IS) |
| **Taux** | **25 %** de la quote-part des bénéfices |
| Nature | Avance, **non libératoire** |
| Imputation | Déductible par les associés de leurs **acomptes provisionnels** et de leur **impôt définitif** |
| Délai | **25 mars** (exercice civil) |
| Contenu | Résultat annuel intégrant **tous les bénéfices quel que soit leur régime fiscal** |

---

## 4. Acomptes provisionnels

### 4.1 Mécanisme [C]

**3 acomptes de 30 %** de l'impôt de l'année précédente (**90 %** au total), au cours des
**6e, 9e et 12e mois** suivant la clôture.

| Acompte | Personnes physiques | Personnes morales |
|---|---|---|
| 1er (6e mois) | **25 juin** | **28 juin** |
| 2e (9e mois) | **25 septembre** | **28 septembre** |
| 3e (12e mois) | **25 décembre** | **28 décembre** |

**[!]** La distinction 25 (PP) / 28 (PM) provient d'une source unique ; une source presse 2026 ne
mentionne que le 25 juin. Cohérent avec la logique des délais mensuels, mais à vérifier.

⚠️ **Les acomptes ne bénéficient PAS du raccourcissement à 20 jours** des adhérents.

### 4.2 Imputation [C]
- Les **retenues à la source subies** et l'**avance de 25 %** s'imputent sur les acomptes.
- L'excédent est un **crédit d'impôt reportable ou restituable**.
- Les acomptes s'imputent ensuite sur l'impôt annuel définitif.
- Retenue à la source de 1,5 % (1 % après LF 2021) déductible → **Note Commune n° 13/2015**.

### 4.3 Dispenses [C]
- **Entreprises nouvellement créées** : dispensées la **1re année**.
- **Exploitants agricoles et de pêche** : non soumis.
- Une procédure de **demande de dispense** existe (suspension quand les acomptes versés excèdent
  l'impôt final estimé) — documentée en 2009, **à re-vérifier**.

---

## 5. ⭐ Déclaration Annuelle Art. 43 LF 2025

**Contrairement à ce que le libellé laisse penser, ce n'est PAS une déclaration de revenus.**

### 5.1 Objet [C]

> **Déclaration et transfert au profit de l'État des montants, dépôts, comptes de valeurs
> mobilières et avoirs NON RÉCLAMÉS.**

- Fondement : **articles 43 à 48 de la loi n° 2024-48 du 9 décembre 2024** (LF 2025).
- Transfert au **compte courant du Trésor**.

### 5.2 Qui est concerné [C]
Banques · établissements financiers · intermédiaires en bourse · sociétés émettrices de valeurs
mobilières · intermédiaires agréés mandataires · **compagnies d'assurance**.

### 5.3 Avoirs visés [C]
Montants, soldes créditeurs de comptes clôturés, titres, avoirs exigibles au titre de contrats
**d'assurance-vie et de capitalisation**, sans **aucune opération, réclamation ni contestation**
pendant **15 ans** ou **5 ans** selon le cas, arrêtée au **31 décembre 2024** pour le stock initial.

### 5.4 Échéances [C]

| Période | Délai |
|---|---|
| Stock initial (au 31/12/2024) | **15 juillet 2025** |
| Régime de croisière, à partir de 2026 | **15 février** de chaque année |

### 5.5 Canal [C]
Application **« Jibaya »**, opérationnelle depuis le **2 juillet 2025**, selon un **cahier des
charges techniques (DCD)** publié en ligne.

**[?] Point de vigilance** : l'entrée de menu e-t@srih s'appelle « Déclaration Annuelle Art 43 LF
2025 », mais le canal opérationnel décrit par la presse est l'**application Jibaya**. Les deux sont
probablement le même point d'accès, **mais le lien n'a pas pu être confirmé.**

---

## 6. IRPP

### 6.1 Barème progressif 2026 — [C] sur les taux, [P] sur les bornes

| Revenu net imposable (DT) | Taux |
|---|---|
| 0 – 5 000 | **0 %** [C] |
| 5 000 – 10 000 | 15 % [P] |
| 10 000 – 20 000 | 25 % [P] |
| 20 000 – 30 000 | 30 % [P] |
| 30 000 – 40 000 | 33 % [P] |
| 40 000 – 50 000 | 36 % [P] |
| 50 000 – 70 000 | 38 % [P] |
| > 70 000 | **40 %** [C] |

- **Confirmé** : barème à **8 tranches**, taux 0/15/25/30/33/36/38/40 %, exonération jusqu'à
  5 000 DT, taux marginal 40 % au-delà de 70 000 DT. Issu de la **LF 2025**, reconduit en 2026.
- **⚠️ Non confirmé** : les **bornes intermédiaires** (10k/20k/30k/40k/50k). Cohérentes avec le
  barème LF 2025 largement diffusé mais **jamais restituées explicitement par une source**.
  **Ne pas coder ces bornes sans vérification** (Code IRPP/IS art. 44).
- Progressivité par tranche. Base = revenu net imposable après cotisations sociales, frais
  professionnels et déductions pour situation et charges de famille. **+ CSS 0,5 %.**

### 6.2 Délais par catégorie [C]

| Catégorie | Délai nominal | Date effective 2026 |
|---|---|---|
| **Commerçants** (BIC), y c. forfaitaires | 25 avril | **27 avril** |
| **Industriels**, **BNC**, **prestataires de services**, revenus **multi-catégoriels** | 25 mai | — |
| **Activités artisanales** (forfait et réel) | 25 juillet | **27 juillet** |
| **Exploitations agricoles et pêche maritime** | 25 août | 25 août |
| **Salariés, pensions et rentes viagères** | **5 décembre** | 5 décembre |

Report au jour ouvrable suivant si l'échéance tombe un dimanche ou un jour férié. [C]

**[?]** Aucune source ne confirme l'échéance du **25 février** (revenus de capitaux mobiliers /
de source étrangère) qui figure dans certains calendriers historiques — **possiblement abrogée**.

### 6.3 Particularités [C]
- Les salariés déclarent sur la base du **certificat de retenue à la source** de l'employeur.
- Les revenus soumis à **retenue libératoire** doivent néanmoins être **mentionnés** dans la
  déclaration annuelle (rubrique revenus exonérés).

---

## 7. Bénéfices des entreprises de production d'hydrocarbures

**Section la plus fragile du dossier.**

| Élément | Contenu | Statut |
|---|---|---|
| Redevables | Entreprises de **production et transport d'hydrocarbures** | [C] |
| Régime | **Conventionnel** — conventions particulières avec l'État, hors droit commun de l'IS | [C] |
| Cadre | **Code des hydrocarbures — loi n° 99-93** | [P] |
| Taux | **50 % à 75 %** selon la convention ; réduction de 75 % à 50 % si l'**ETAP prend 40 %** de participation dans la concession | [P] |
| Délai | Aligné sur l'IS (25 mars) | [P] |
| Articulation avec l'IS de droit commun | — | [?] |

> ⚠️ **Ne produire aucun taux dans le skill sans consultation du Code des hydrocarbures et des
> conventions types.**

---

## 8. Impôt libératoire — trois dispositifs candidats

**Le libellé recouvre plusieurs dispositifs distincts. L'entrée de menu n'a pu être rattachée avec
certitude à aucun.**

**Notion générale [C]** : un prélèvement est **libératoire** lorsqu'il libère le bénéficiaire de
toute déclaration ou régularisation au titre du revenu concerné (typiquement : non-résidents,
intérêts versés à des personnes morales exonérées).

**Candidat A — Impôt forfaitaire des BIC (régime historique)** [C]
CA ≤ **10 000 DT** · **100 DT/an** hors zones communales, **200 DT/an** ailleurs · libératoire de
l'IRPP/BIC et de la TVA au réel, **inclut la TCL** · exclusions : produits à base d'alcool,
commerce de gros, plus d'un véhicule de transport public ou véhicule de fret > 3,5 t, assujettis
TVA ou IRPP au réel · obligations annexes maintenues (déclaration mensuelle si employeur,
3 acomptes, déclaration annuelle IRPP).

**Candidat B — Régime forfaitaire OPTIONNEL LF 2026 (nouveauté)** [P]
Plafond de CA **100 000 DT** · impôt **4 000 à 5 000 DT/an** selon activité et CA · **–50 % en
zones rurales** · marge nette réputée de **25 % du CA** · **2 versements égaux avant le 25 avril et
le 25 octobre** · **exonération de contrôle fiscal pendant 6 ans**.

**Candidat C — Contribution unique de l'auto-entrepreneur** [C]
**Décret-loi n° 2020-33 du 10 juin 2020** · CA < **75 000 DT** · **200 DT** en zones communales,
**100 DT** ailleurs · libératoire de l'**IRPP**, de la **TVA** **et des cotisations de sécurité
sociale** · **1re année non due** (prise en charge par le Fonds National de l'Emploi) · carte
délivrée sous **15 jours**.

→ **Hypothèse de travail** : l'entrée de menu correspond le plus vraisemblablement au
**Candidat A/B**. **Non confirmé.**

---

## 9. Taxe sur les jeux de pari et de hasard sur Internet [C]

| Élément | Contenu |
|---|---|
| Institution | **Loi de finances 2021** |
| Redevables | Organisateurs de jeux de pari et de hasard, **jeux à gratter**, **jeux numériques**, **loto** sur Internet |
| **Assiette** | **Excédent Brut d'Exploitation (EBE)** |
| **Taux** | **15 %** de l'EBE |
| Périodicité | **Mensuelle** (bien que l'entrée figure à part dans le menu) |
| Modalité | Modèle fourni par l'administration, **mêmes délais que les déclarations mensuelles** |
| Portée | **Libératoire de tous impôts et taxes assis sur le CA**, **sauf la TCL** |

---

## 10. Adhésion au régime de restitution automatique — ⚠️ section incomplète

**Aucune source n'a permis d'identifier ce régime sous cette dénomination exacte.** Deux lectures :

**Lecture A — Restitution du crédit de TVA (la plus probable)** [C sur le fond]

| Régime | Modalités |
|---|---|
| Restitution 100 % sans condition de continuité | **7 jours** à compter du dépôt |
| Crédits d'**exportation**, ventes en **suspension**, **RS de TVA**, mise à niveau / investissements | Procédure rapide, restitution après **visa** dans le mois |
| Restitution 50 % | Régime intermédiaire |
| Sans durée préalable de crédit | Contrôle **a posteriori** |
| Après **6 mois de crédit consécutif** | **Avance de 15 % ou 35 %**, contrôle **a priori** |

**Lecture B** — restitution automatique de l'excédent de retenues à la source / d'avances non
imputé, sur adhésion préalable. **Hypothèse non sourcée.**

> **Cette section doit être refaite entièrement avant intégration opérationnelle.**

---

## 11. ⭐ Déclaration de l'employeur

**Ne figure pas dans le menu relevé** alors que c'est la principale déclaration annuelle.
**[?] Point d'entrée réel non déterminé** — probablement **TEJ**, ou un sous-menu de « Mensuelles ».

### 11.1 Cadre [C]

| Élément | Valeur |
|---|---|
| Objet | Déclaration annuelle récapitulative des **retenues à la source** de l'année N-1 |
| Redevables | Toute personne débitrice de sommes soumises à retenue à la source |
| **Échéance** | **30 avril** — délai porté du 28 février au 30 avril par l'**art. 76 LF 2017** |
| Structure | **1 tableau récapitulatif + 7 annexes** |

### 11.2 Les 7 annexes [C]

| Annexe | Contenu |
|---|---|
| **1** | Traitements, salaires, pensions et rentes viagères |
| **2** | Sommes payées à des **résidents** : honoraires, commissions, courtages, rémunérations de salariés, rémunérations occasionnelles, loyers |
| **3** | Revenus de capitaux mobiliers, intérêts de prêts, intérêts des comptes spéciaux d'épargne |
| **4** | Sommes payées à des **non-résidents ou non établis** : honoraires, commissions, rémunérations liées à la performance |
| **5** | Autres sommes soumises à retenue à la source |
| **6** | Ristournes commerciales et non commerciales + revenus des jeux de hasard et de loterie |
| **7** | Sommes payées **pour le compte de tiers** |

Chaque contribuable présente **obligatoirement le tableau récapitulatif** et **uniquement les
annexes comportant des montants retenus**. Chaque partie forme un **fichier indépendant**. [C]

### 11.3 Format technique [C]
Format **XML** selon les spécifications de l'administration · nommage **`DECEMP_<année>`**
(récapitulatif) et **`ANXEMP…`** (annexes) · dépôt sur **support magnétique** ou **en ligne via TEJ**
· certificat **DigiGO** · fichier **contrôlé/validé avant dépôt** · référence doctrinale
**Note Commune n° 18/2022** [P].

→ **Structure détaillée des enregistrements** : voir `pdf-officiels-niveau-de-preuve.md` §3
(reconstruction recoupée, non lue dans le cahier des charges officiel).

**Base légale de l'obligation de certificat** : **art. 55 du code IRPP/IS** — les débiteurs de
sommes soumises à retenue à la source doivent délivrer un certificat de retenue au bénéficiaire
**à chaque paiement**. [C]

---

## 12. Déclaration pays par pays (CbCR) [C]

| Élément | Contenu |
|---|---|
| Cadre | **Art. 32 de la loi n° 2018-56 du 27 décembre 2018** ; **art. 17 ter du CDPF** |
| Référentiel | **Action 13 BEPS** de l'OCDE |
| Redevable principal | Entreprise établie en Tunisie, **entité mère ultime** d'un groupe multinational, tenue d'états financiers consolidés |
| **Seuil** | CA annuel consolidé HT **≥ 1 636 millions de dinars** l'exercice précédent — **[!] une source dit « milliards », voir zone d'ombre** |
| Redevable secondaire | Entité constitutive établie en Tunisie autre que la mère ultime, sous conditions (*secondary filing*) |
| **Délai** | **12 mois** suivant la clôture de l'exercice déclarable |
| Modalité | **XML** conforme au guide technique OCDE, certificat **DigiGO**, service dédié sur le portail |
| Notification | Si plusieurs entités du groupe sont résidentes, **une seule est désignée** pour déposer ; **les autres doivent notifier** cette désignation via la plateforme |
| **Sanctions** | **[?] non documentées** |

Guide d'inscription : `https://jibaya.tn/wp-content/uploads/2023/12/Guide-dinscription-la-dclaration-pays-par-pays.pdf`

---

## 13. e-Liasse / liasse fiscale [C]

| Élément | Contenu |
|---|---|
| Base légale | **Art. 41 LF 2017** + **arrêté du 25 avril 2017** |
| Qui | Contribuables **adhérents** au système de télédéclaration |
| Accès | `https://liasse.finances.gov.tn/LiasseFiscale/index` |
| Identifiants | **Les mots de passe de la télédéclaration sont valides** |
| Format | **XML** selon les spécifications de l'administration |
| Authentification | Certificat **DigiGO** |
| Objectif | Base de données comptable et fiscale fiable, standardisation XML, archivage |

**[!] Réserve importante** : plusieurs blogs présentent « e-Liasse » comme la plateforme unique
permettant de déposer **toutes** les déclarations (IRPP, IS, TVA, retenues) et de payer en ligne,
avec un parcours « Espace contribuable → matricule + mot de passe → activation par lien e-mail/SMS
→ double authentification ». **Cette description contredit les sources officielles** : e-Liasse =
dépôt de la liasse fiscale uniquement ; les déclarations périodiques passent par e-t@srih.
**Classer comme contenu SEO douteux.**

**[?] Articulation e-t@srih ↔ e-Liasse ↔ TEJ** : dépôt unique ou dépôts distincts ? Non confirmé.
Hypothèse : e-t@srih porte **déclaration + paiement**, e-Liasse/TEJ portent les **annexes
comptables**. Les deux seraient requis pour une déclaration IS complète.

---

## 14. Calendrier annuel consolidé (exercice clos au 31/12)

| Date | Obligation | Concernés |
|---|---|---|
| **15 février** | Déclaration Art. 43 LF 2025 — avoirs non réclamés | Banques, ét. financiers, intermédiaires, assurances |
| **25 mars** | Déclaration IS (provisoire si CAC) + **avance sociétés de personnes** | PM, sociétés transparentes |
| **25 avril** *(27 en 2026)* | IRPP annuel — **commerçants** | PP |
| **25 avril** | 1er versement du forfait optionnel LF 2026 [P] | Forfaitaires optionnels |
| **30 avril** | **Déclaration de l'employeur** | Tous débiteurs de RS |
| **25 mai** | IRPP annuel — industriels, BNC, prestataires, multi-catégoriels | PP |
| **25 / 28 juin** | **1er acompte provisionnel** | IS + IRPP réel |
| **25 juin** | **Déclaration IS DÉFINITIVE** (sociétés soumises au CAC) | PM |
| **25 juillet** *(27 en 2026)* | IRPP annuel — **artisanat** | PP |
| **31 juillet** | États financiers au **RNE** | PM + PP tenant comptabilité |
| **25 août** | IRPP annuel — **agriculture et pêche** | PP |
| **25 / 28 septembre** | **2e acompte provisionnel** | IS + IRPP réel |
| **25 octobre** | 2e versement du forfait optionnel LF 2026 [P] | Forfaitaires optionnels |
| **5 décembre** | IRPP annuel — **salariés, pensions, rentes viagères** | PP |
| **25 / 28 décembre** | **3e acompte provisionnel** | IS + IRPP réel |
| **Clôture + 12 mois** | **Déclaration pays par pays** | Groupes ≥ 1 636 MDT |
| **Cessation + 15 j** | Déclaration de cessation d'activité | Tous |

---

## 15. Zones d'ombre — bloquantes

1. **IS — date d'entrée en vigueur** du barème progressif LF 2025 art. 37 : 2024 ou 2025 ?
   → **Note Commune n° 08/2025**.
2. **IS — cohérence du système de taux** : articulation entre barème progressif par CA (15/20/25 %)
   et taux sectoriels (10/35/40 %). Des guides présentent 20 % comme « taux standard ».
3. **Bornes intermédiaires du barème IRPP** — non sourcées explicitement. **Ne pas coder.**
4. **« Adhésion au régime de restitution automatique »** — dispositif non identifié. Section à refaire.
5. **« Impôt libératoire »** — trois candidats, aucun rattachement confirmé.
6. **Hydrocarbures** — taux issus d'une source unique et ancienne.

### Importantes
7. Acomptes : distinction 25 (PP) / 28 (PM) — source unique.
8. IS définitive : « avant » vs « dans les 15 jours suivant » l'AG.
9. Minimum d'impôt : sens du « minimum de 10 % ».
10. Articulation e-t@srih ↔ e-Liasse ↔ TEJ.
11. Entrée « Art 43 LF 2025 » ↔ application « Jibaya ».
12. **Point d'entrée réel de la déclaration de l'employeur.**
13. Échéance IRPP du 25 février — possiblement abrogée.
14. Sanctions CbCR — non documentées.
15. Seuil CbCR : 1 636 **millions** ou **milliards** de dinars.

---

## 16. Notes communes et textes à récupérer en priorité

- **Note Commune n° 08/2025** — taux progressifs IS (lève les zones 1 et 2)
- **Code IRPP/IS 2025, art. 44 et 49** — barème IRPP (lève la zone 3)
- Note Commune n° 05/2025 — contribution conjoncturelle
- Note commune n° 9/2007 — acomptes provisionnels
- Note commune n° 13/2015 — retenues à la source
- Note Commune n° 18/2022 — déclaration de l'employeur [P]
- Cahier des charges techniques DCD — art. 43 LF 2025
