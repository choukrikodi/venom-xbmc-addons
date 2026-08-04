# Dossier de recherche — Déclaration Mensuelle des Impôts (DMI) en Tunisie

> ⚠️ **AVERTISSEMENT — LES TAUX DE RETENUE À LA SOURCE DE CE FICHIER SONT OBSOLÈTES.**
> Ils provenaient de blogs d'éditeurs de logiciels contradictoires. Ils sont désormais
> remplacés par la lecture du texte : **→ `retenue-a-la-source.md`** (article 52 du code
> IRPP/IS, source primaire), qui fait foi. Le reste de ce fichier (TVA, TFP, FOPROLOS, TCL,
> workflow de saisie) reste utile avec son marquage de fiabilité d'origine.

**Objet** : matière première pour un skill Claude sur la télédéclaration fiscale tunisienne (portail DGI / e-t@srih).
**Date de collecte** : août 2026.
**Méthode** : WebSearch uniquement (WebFetch et curl bloqués en 403 sur l'intégralité des domaines tunisiens testés : `finances.gov.tn`, `jibaya.tn`, `hesabi.tn`, `finco.tn`). Aucun PDF officiel n'a pu être lu directement — **tout le contenu ci-dessous provient de synthèses de moteur de recherche**, jamais de la lecture du texte source.

## Convention de fiabilité

| Marque | Sens |
|---|---|
| **[C]** CONFIRMÉ | Concordant sur ≥2 sources indépendantes, ou issu d'une source de référence (code, note commune, profiscal, ministère) |
| **[P]** PROBABLE | Une seule source, plausible, non recoupée → à vérifier avant usage |
| **[!]** CONFLIT | Sources en désaccord — ne pas trancher sans le texte officiel |
| **[?]** ZONE D'OMBRE | Non trouvé |

> **Avertissement méthodologique majeur** : une part importante des sources exploitables sont des blogs d'éditeurs de logiciels tunisiens (hesabi.tn, finco.tn, swiver.io, gastevo.com, efacturetn.com). Ils sont utiles pour la pratique mais **peu fiables sur les taux** — ils se contredisent entre eux sur plusieurs points centraux (base HT/TTC, taux honoraires, taux loyers). Les sources à privilégier pour un skill sont : `profiscal.com`, `jurisitetunisie.com` (codes), les **notes communes DGI** hébergées sur jibaya.tn, et `finances.gov.tn`.

---

# 1. Cadre général de la DMI

## 1.1 Qui dépose

Les personnes soumises au **régime réel ou réel simplifié** déposent une déclaration mensuelle portant sur : TVA, droit de consommation, retenue à la source, TFP, contribution FOPROLOS, taxes au profit des collectivités locales, taxes au profit des fonds de développement de la compétitivité, droits de timbre et taxe sur les assurances. **[C]**
— https://www.finances.gov.tn/fr/apercu-general-sur-la-fiscalite

Les personnes au **régime forfaitaire** déposent une déclaration mensuelle limitée à la retenue à la source et à la contribution FOPROLOS **si elles sont employeur**. **[P]**
— https://www.finances.gov.tn/fr/node/955

## 1.2 Délais de dépôt

| Redevable | Délai | Fiabilité |
|---|---|---|
| Personnes physiques | 15 premiers jours du mois suivant | **[C]** |
| Personnes morales **non** adhérentes à la télédéclaration | 28 premiers jours du mois suivant | **[C]** |
| Personnes morales **adhérentes** télédéclaration/télépaiement | **le 20** du mois suivant (LF 2024, au lieu du 28) | **[C]** |

- La LF 2024 a ramené le délai des télédéclarants de 28 → 20. **[C]** — https://chaexpert.com/tunisie-lf-2024-delai-depot-dec-fisc/
- Confirmé en pratique par la DGI en 2026 : « le 20 juillet 2026, dernier délai pour la déclaration mensuelle des personnes morales adhérentes au système de télédéclaration ». **[C]** — https://news.gnet.tn/fiscalite-le-20-juillet-dernier-delai-pour-la-declaration-mensuelle-des-personnes-morales/ ; https://managers.tn/2026/07/20/seance-unique-les-entreprises-face-a-lecheance-du-20-juillet-pour-les-declarations-mensuelles/
- Et « 29 mai 2026, dernier délai pour les personnes morales **non** assujetties au système de télédéclaration ». **[C]** — https://www.webmanagercenter.com/2026/05/29/567460/declaration-fiscale-en-tunisie-dernier-delai-fixe-au-29-mai-2026-pour-les-personnes-morales/
- **Règle de report** : si le dernier délai tombe un dimanche ou un jour férié, le dépôt peut être fait le **premier jour ouvrable suivant**, sans pénalité de retard. **[C]** — https://www.diwan.tn/fr/article/calendrier-fiscal
- **[?]** Le délai exact des **personnes physiques adhérentes** à la télédéclaration (15 ou 16 ?) n'a pas été trouvé.

## 1.3 Obligation de télédéclarer

Les contribuables réalisant un **chiffre d'affaires brut annuel ≥ 100 000 dinars** sont tenus de déposer leurs déclarations via le système de télédéclaration et télépaiement. **[C]**
— https://chaexpert.com/teledeclaration-nouveau-ca/ ; https://lucapacioli.com.tn/blog/tunisia-e-tax-filing-investor-guide

---

# 2. Structure du formulaire

## 2.1 En-tête (imprimé arabe officiel)

L'imprimé officiel s'intitule **التصريح الشهري بالأداءات** (« Déclaration mensuelle des impôts »). Les premiers champs, dans l'ordre, sont : **[C]**

1. `رمز التصريح` — **code de la déclaration** (renvoi de note n°1)
2. `الشهر` — **mois**
3. `السنة` — **année**
4. `الاسم واللقب أو ...` — **nom et prénom ou raison sociale**

— https://www.diwan.tn/document/2b1d512d-9d57-44bb-8250-7864fc7a9ee5 (titre du document reprend littéralement la première ligne de l'imprimé)

L'imprimé 2025/2026 fait **12 pages** en version arabe. **[P]** — https://www.diwan.tn/fr/document/card/f064b9d2-66c1-4e62-88be-bae798600c05

## 2.2 Grille de sélection de la nature de l'impôt

Le formulaire comporte une grille où l'on **coche (X) la case correspondant à la nature de l'impôt ou taxe payé**. Les cases identifiées sont : **[P]**

- T.F.P.
- FOPROLOS
- D.C. (droit de consommation)
- T.V.A.
- Droit de timbre
- Taxe sur les assurances
- T.C.L.
- Taxe hôtelière
- Licence (débits de boissons)
- Retenue à la source

— https://sites.google.com/site/cartesdeveuxgratuite/imprim%C3%A9-d%C3%A9claration-mensuelle-des-imp%C3%B4ts-tunisie ; https://fr.scribd.com/document/476661044/declaration-mensuelle-impots-tunisie-pdf

> Noter la présence de **« Licence »** et **« Taxe hôtelière »**, souvent oubliées dans les présentations vulgarisées.

## 2.3 Sous-découpage de la rubrique Retenue à la source

Le formulaire sépare au minimum deux blocs de RS : **[P]**

1. **Traitements, salaires, pensions et rentes viagères**
2. **Honoraires, commissions, courtages, loyers et rémunérations des activités non commerciales**

— mêmes sources que 2.2

## 2.4 Contenu de la rubrique TVA

La déclaration TVA doit faire apparaître : **[C]**

- la **TVA collectée**
- les **bases imposables** (par taux)
- le **report créditeur du mois précédent**
- la **TVA déductible / imputée**
- le **montant des achats**

— https://www.profiscal.com/etudiants/TCA/tca_ch7_06.htm

Les tableaux récapitulatifs comportent des colonnes **base imposable / taux / montant de l'impôt liquidé**. **[P]**

## 2.5 Ce qui n'a PAS pu être établi — **[?]**

- **La numérotation exacte des cases / codes de rubrique** (ex. « case 5 », « ligne 12 »). Aucune source accessible ne les reproduit. **C'est la lacune la plus importante de ce dossier.**
- L'ordre exact et le libellé exact des cadres (Cadre I / II / III…).
- La signification et la table des valeurs du champ `رمز التصريح` (code de déclaration) : il s'agit vraisemblablement d'un code identifiant le type/périodicité de déclaration, mais **la table n'a pas été trouvée**.
- La ventilation exacte des lignes de TVA déductible (biens et services / immobilisations / autres valeurs), et le traitement de la **TVA sur immobilisations** dans le formulaire.

**Recommandation** : pour combler cette lacune, récupérer manuellement l'imprimé PDF officiel :
- https://www.finances.gov.tn/fr/document/imprime-de-la-declaration-mensuelle-des-impots-2023
- https://jibaya.tn/blog/formulaire-a-telecha/declaration-mensuelle-des-impots-2026
- https://www.diwan.tn/fr/document/card/f064b9d2-66c1-4e62-88be-bae798600c05
- https://www.finances.gov.tn/sites/default/files/2019-08/declaration_mensuelle_lfc_2014-ar.pdf (version LFC 2014, en arabe)

---

# 3. TVA

## 3.1 Taux

| Taux | Champ d'application (indicatif) | Fiabilité |
|---|---|---|
| **19 %** | Taux normal — par défaut lorsqu'aucun autre taux n'est prévu | **[C]** |
| **13 %** | Taux réduit — certains services | **[!]** voir ci-dessous |
| **7 %** | Taux réduit — produits/services de première nécessité | **[C]** sur l'existence du taux |
| **0 % / exonération** | Export, suspension, opérations exonérées | **[P]** |

— https://efacturetn.com/fr/blog/taux-tva-tunisie-2026-guide-complet ; https://tvacalcul.com/tunisie

**[!] CONFLIT à ne pas reproduire tel quel** : une synthèse attribue au taux de **13 %** « les services hôteliers, certains services de restauration, le transport de passagers et services liés au tourisme ». Cette affectation est **douteuse** (le secteur hôtelier a historiquement relevé du taux réduit bas). **Ne pas énoncer la répartition 13 %/7 % par secteur sans vérification sur le Code de la TVA.** Seuls les **trois taux 19 / 13 / 7** sont sûrs.

## 3.2 Points particuliers 2023-2026

- Les **professions non commerciales** (BNC) sont soumises à la TVA au taux de **19 %** à partir de 2023. **[P]** — https://www.ilboursa.com/marches/liste-des-professions-non-commerciales-soumises-a-la-tva-de-19-a-partir-de-2023_37820
- **Immobilier d'habitation construit par les promoteurs immobiliers** : application de la TVA à **19 %** reportée au **1er janvier 2026** (au lieu du 1er janvier 2025) ; les biens dont la valeur **n'excède pas 400 000 dinars** sont soumis à **7 %**. **[C]** — https://www.webmanagercenter.com/2024/11/28/535478/plf-2025-tva-a-7-pour-les-biens-immobiliers-de-moins-de-400-000-dinars/ ; https://www.tustex.com/economie-actualites-economiques/immobilier-les-implications-de-la-hausse-de-la-tva-a-19-sur-les-acquisitions-de-logements-par

## 3.3 Crédit de TVA — report et restitution

**Mécanisme du report** : lorsque la TVA récupérable, **y compris le report créditeur du mois précédent**, dépasse la TVA collectée, la déclaration dégage un crédit. Le reliquat non imputé est **reporté sur le mois suivant**, et ainsi de suite de mois en mois. **[C]**
— https://www.profiscal.com/etudiants/TCA/tca_ch7_06.htm

**Conditions de restitution** : **[C]**

| Origine du crédit | Condition | Restitution |
|---|---|---|
| Investissements art. 5 code d'incitation aux investissements + investissements de mise à niveau | crédit dégagé par les déclarations mensuelles de **3 mois consécutifs** | intégrale |
| Autres cas | crédit dégagé par les déclarations mensuelles de **6 mois consécutifs** | — |
| Crédit en cours d'activité, **autre que** export / ventes en suspension / retenue à la source | **6 mois consécutifs** | **50 %** du montant |

- **Avance de 15 %** du montant global du crédit payée **sans contrôle préalable**. **[C]**
- La demande de restitution doit être déposée dans un **délai n'excédant pas 3 ans** à compter de la date à laquelle le crédit est devenu restituable. **[C]**

— https://www.profiscal.com/etudiants/TCA/tca_ch8_06.htm ; https://www.jurisitetunisie.com/tunisie/codes/tva/tva1050.htm ; http://www.cfac.com.tn/fr/faq/...

**[?]** Le traitement spécifique de la **TVA sur immobilisations** (ligne dédiée dans le formulaire, règles de régularisation en cas de cession dans le délai de 5/10 ans) n'a pas pu être documenté.

**[?]** Il existe un régime de **TVA retenue à la source** (déduction de la TVA retenue à la source — cf. https://www.profiscal.com/etudiants/TCA/tca_ch6_06.htm), distinct de la RS sur revenus. Non documenté faute d'accès. **À creuser en priorité** : c'est un piège classique.

---

# 4. Retenue à la source (RS)

## 4.1 Assiette : HT ou TTC ? — **point critique**

**Position retenue [C]** : l'assiette de la retenue à la source est constituée par le **montant payé TOUTES TAXES COMPRISES (TVA comprise)**.

> « L'assiette des retenues à la source est constituée par le montant payé toutes taxes comprises. »
> — https://www.profiscal.com/etudiants/ras/ras_ch12_5.htm

Corroboré par les règles spécifiques non-résidents : la RS de 15 % sur les honoraires et redevances versés à des personnes morales non établies en Tunisie est calculée « sur le montant **TVA comprise** ». **[C]**

**[!] CONFLIT** : plusieurs blogs d'éditeurs (efacturetn, hesabi, gastevo) affirment au contraire que la RS s'applique sur le **montant HT**, « avant TVA et avant droit de timbre ». **Cette affirmation contredit la doctrine de référence.** Elle est probablement une erreur de vulgarisation — mais elle est très répandue, ce qui en fait précisément **un piège à documenter dans le skill**.

**[?] Position du droit de timbre dans l'assiette** : non tranché. Le seuil de 1 000 D est explicitement « **y compris la TVA** » (cf. 4.3), mais aucune source consultable ne précise si le **droit de timbre** entre ou non dans l'assiette de la RS. **À vérifier impérativement.**

**[?] Arrondis** : aucune règle d'arrondi (au millime supérieur / inférieur) n'a été trouvée dans les sources accessibles. **Ne rien affirmer.**

**[?] Minimum de perception de la RS** : non trouvé.

## 4.2 Tableau des taux — revenus courants

> Année de référence : **2026**, sauf mention contraire.

| Nature du revenu / opération | Taux | Fiabilité |
|---|---|---|
| **Honoraires** versés aux **personnes morales** et aux **personnes physiques soumises au régime réel** | **3 %** | **[C]** (taux ramené de 5 % à 3 % — LF 2021, loi n°2020-46 du 23/12/2020, art. 14) |
| **Honoraires** versés aux BNC soumis au **régime du forfait d'assiette** | **10 %** | **[C]** |
| **Commissions, courtages**, rémunérations des activités non commerciales (cas général) | **10 %** | **[C]** |
| **Loyers** | **10 %** ou **15 %** | **[!] CONFLIT — voir ci-dessous** |
| **Traitements, salaires, pensions, rentes viagères** | impôt annuel selon le **barème IRPP ÷ nombre de paies** | **[C]** |

Sources : https://finco.tn/blog/retenue-a-la-source-tunisie-2026 ; https://swiver.io/blog/retenues-a-la-source/ ; https://cktaudit.com/les-taux-des-retenues-a-la-source/ ; https://9anoun.tn/fr/kb/codes/.../article-52 ; https://www.profiscal.com/etudiants/ras/ras_ch12_5.pdf

**[!] CONFLIT sur les loyers** :
- hesabi.tn et finco.tn annoncent **15 %** pour les loyers (2026).
- une autre synthèse mentionne **10 % pour la location d'immeubles et la location commerciale**, cohérent avec le taux historique de l'art. 52 du code IRPP/IS.
→ **Ne pas trancher.** Vérifier l'art. 52 dans sa version en vigueur 2026 : https://9anoun.tn/fr/kb/codes/code-impot-sur-revenu-personnes-physiques-impot-sur-les-societes/code-impot-sur-revenu-personnes-physiques-impot-sur-les-societes-article-52

**[!] CONFLIT sur les honoraires** : une synthèse de hesabi.tn indique « 10 % sur les honoraires et BNC en régime réel », ce qui **inverse** la règle 3 %/10 %. La version correcte est celle du tableau ci-dessus (3 % = régime réel et personnes morales ; 10 % = forfait d'assiette), confirmée par plusieurs sources et par l'historique législatif (5 % → 3 %).

## 4.3 RS sur acquisitions et marchés (seuil de 1 000 D)

**Règle de base [C]** : les montants payés au titre de **l'acquisition de marchandises, matériel, équipements et de services**, **égaux ou supérieurs à 1 000 dinars y compris la TVA**, sont soumis à retenue à la source au taux de **1,5 %, 1 % ou 0,5 %**, *compte tenu du régime fiscal de la personne bénéficiaire*.

— https://swiver.io/blog/retenues-a-la-source/ ; https://www.profiscal.com/etudiants/ras/ras_ch12_5.pdf ; https://emperiasuite.com/centre-de-ressources/blog/retenue-a-la-source-tunisie-taux-conformite-erp

| Taux | Cas | Fiabilité |
|---|---|---|
| **1,5 %** | taux de droit commun de la catégorie ; également cité pour les **marchés** | **[C]** sur l'existence, **[P]** sur le périmètre exact |
| **1 %** | acquisition de biens/équipements et services auprès d'entreprises **soumises à l'IS** | **[P]** |
| **0,5 %** | certaines acquisitions (bénéficiaires à taux d'IS réduit / industriels) | **[P]** |

**Le critère de modulation** est le **régime fiscal / taux d'IS du bénéficiaire**. **[C]** — une source formule cela ainsi : « le taux varie entre 0,5 % et 1,5 % selon le taux d'IS de l'entreprise ».

**[!] CONFLIT sur les marchés publics** : finco.tn annonce **3 % pour les marchés publics**, alors que la doctrine classique retient **1,5 % pour les marchés**. Non tranché.

**Notion de « marché »** : la doctrine administrative a défini la notion de marché et **exclu certains montants** du champ de la RS de 1,5 %. **[C]** sur l'existence de cette doctrine, **[?]** sur son contenu.
— Notes communes à consulter : https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-19-11.pdf ; https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-12-1.pdf

## 4.4 Tableau des taux — capitaux mobiliers et distributions

| Nature | Taux | Fiabilité |
|---|---|---|
| **Revenus de capitaux mobiliers** (hors dépôts en devises et emprunt obligataire de solidarité) | **20 %** | **[P]** |
| **Jetons de présence** et rémunérations des membres des conseils | **20 %** | **[P]** |
| **Dividendes** distribués aux **personnes physiques** | **10 % libératoire** | **[P]** |

— https://finco.tn/blog/loi-de-finance-2026 ; https://blog.avocats.deloitte.fr/tunisie-les-principales-mesures-de-la-loi-de-finances-pour-2026/

## 4.5 Tableau des taux — non-résidents

| Nature | Taux normal | Taux si RS **prise en charge par le débiteur** | Fiabilité |
|---|---|---|---|
| **Redevances**, rémunérations, revenus et contreparties de services | **15 %** | **17,64 %** | **[C]** |
| Idem, bénéficiaire résident d'un **régime fiscal privilégié** | **25 %** | **33,33 %** | **[P]** |
| **Honoraires** versés à personnes morales non établies ni domiciliées | **15 % libératoire (IS)**, sur montant **TVA comprise** | — | **[C]** |
| **Dividendes** versés à associés non-résidents | **10 %** | **11,11 %** | **[P]** |
| **Intérêts de prêts** payés à des **établissements bancaires non établis** en Tunisie | **10 %** | **11,11 %** | **[P]** |
| **Salaires** de salariés non-résidents travaillant en Tunisie pour une ou plusieurs périodes **n'excédant pas 6 mois** | **20 % libératoire** | **25 %** | **[C]** |

**Règle transversale [C]** : tous ces taux s'appliquent **« sauf convention de non-double imposition (CNDI) plus favorable »**. La RS est **libératoire** pour les non-résidents non établis.
— https://finco.tn/blog/retenue-a-la-source-tunisie-2026 ; https://www.profiscal.com/etudiants/ras/ras_ch12_5.pdf
— Note commune n°41 (dividendes/intérêts/redevances sous CNDI) : https://jibaya.tn/docs/note-commune-numero-41-.../

> Les taux « majorés » (17,64 %, 11,11 %, 25 %, 33,33 %) correspondent au **calcul en dedans** lorsque le débiteur prend la RS à sa charge — c'est un mécanisme de brut-isation, pas un taux distinct. Point de vigilance pour le skill.

## 4.6 Autres RS

| Nature | Taux | Fiabilité |
|---|---|---|
| **Gains des jeux** de pari, de hasard et de loterie | **25 % libératoire** / **33,33 %** si pris en charge | **[P]** |
| **Plus-value immobilière** | **10 %** si détention < 10 ans / **5 %** si ≥ 10 ans | **[P]** — le sens de la corrélation est à revérifier |
| **Ventes en ligne** : RS opérée par les **prestataires de services de livraison** sur les montants payés aux personnes vendant via internet ou moyens de diffusion audiovisuelle, **lorsque le bénéficiaire ne présente pas de carte d'identification fiscale** | **3 %** | **[C]** — LF 2025 art. 68 + **Note commune n°6/2025** |

— https://jibaya.tn/wp-content/uploads/2025/03/Note-Commune-N%C2%B006.pdf

## 4.7 Obligations annexes

- Le débiteur (donneur d'ordre) est tenu de **délivrer un certificat de retenue à la source** au bénéficiaire ; celui-ci lui permet d'imputer la retenue sur son impôt annuel. **[C]**
- Conservation des certificats recommandée **10 ans**. **[P]**

---

# 5. Plateforme TEJ — RS dématérialisée

**Attention : évolution structurante 2026.**

- Depuis le **1er janvier 2026**, **toutes** les entreprises tunisiennes doivent déclarer la retenue à la source via la plateforme **TEJ** (`tej.finances.gov.tn`), **quelle que soit leur taille ou leur chiffre d'affaires**. **[P]**
- Format : fichier **XML `DeclarationRetenue`**. **[P]**
- Base légale citée : **article 41 de la loi de finances 2022**. **[P]**
- Échéance citée : **avant le 28 du mois suivant** l'opération. **[!]** — incohérent avec le délai du 20 pour les télédéclarants (cf. §1.2). Non tranché.
- La plateforme permet de **corriger les erreurs**, ce qui peut entraîner la **modification ou l'annulation de certificats de retenue à la source**. **[P]**

— https://hesabi.tn/tej-retenue-source-tunisie ; https://finco.tn/blog/retenue-a-la-source-tunisie-2026 ; https://chaexpert.com/plateforme-retenue-source-tej/ ; https://chaexpert.com/tunisie-retenue-source-plateforme/

**[?] Question ouverte majeure** : l'articulation exacte entre **TEJ** et la **rubrique RS de la DMI** n'a pas pu être établie. Faut-il encore reporter les montants de RS dans la déclaration mensuelle, ou TEJ s'y substitue-t-il ? **À élucider avant de rédiger le skill** — c'est la question la plus opérationnelle du dossier. Recherche interrompue par épuisement du budget de recherche.

---

# 6. Taxes assises sur la masse salariale

## 6.1 TFP — Taxe de Formation Professionnelle

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux — **industries manufacturières** | **1 %** | **[C]** |
| Taux — **autres secteurs** | **2 %** | **[C]** |
| Base | **traitements, salaires et toutes autres rétributions**, **avant déduction** au titre des cotisations sociales | **[C]** |
| Exonérations | entreprises **agricoles**, entreprises **exportatrices**, entreprises assujetties à l'**impôt forfaitaire sur la patente** | **[C]** |

— http://www.profiscal.com/Impot_en_Tunisie/Digest5.htm ; https://swiver.io/blog/tfp-tunisie/ ; https://forevermo.tn/pages/tfp-tunisie.php

> Il existe un mécanisme de **ristourne / subvention TFP** (droit de tirage sur la taxe pour financer la formation). Hors périmètre DMI mais à mentionner. **[P]**

**Déclaration rectificative TFP** : un imprimé spécifique existe. **[C]**
— https://www.finances.gov.tn/fr/document/declaration-rectificative-en-matiere-de-tfp ; https://idaraty.tn/fr/forms/declaration-rectificative-en-matiere-de-tfup

## 6.2 FOPROLOS — Fonds de Promotion du Logement pour les Salariés

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux | **1 %** | **[C]** |
| Base | masse salariale | **[C]** |

— https://smartpaie.tn/guides/paie-tunisie-2026 ; http://farouk-comptable.blogspot.com/p/tfp-et-foprolos.html

**[?]** Le détail des exonérations FOPROLOS et l'assiette précise (identique ou non à celle de la TFP) n'ont pas été confirmés.

---

# 7. Taxes assises sur le chiffre d'affaires

## 7.1 TCL — Taxe sur les établissements à caractère industriel, commercial ou professionnel

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux — CA **brut local** | **0,2 %** | **[C]** |
| Taux — CA **provenant de l'export** | **0,1 %** | **[C]** |
| **Minimum** | ne peut être **inférieur à la taxe sur les immeubles bâtis** due au titre des immeubles affectés à l'exercice de l'activité | **[C]** |
| **Plafond** | **100 000 dinars** | **[P]** — année de référence non déterminée |

— https://www.finances.gov.tn/fr/apercu-general-sur-la-fiscalite ; http://www.profiscal.com/Etudiants/TCA/tca_ch15_06.htm ; https://www.jurisitetunisie.com/tunisie/codes/flocal/fisc-local1070.htm

**Calcul du minimum** : le minimum est égal à la taxe sur les immeubles bâtis, calculée sur la base de la **taxe de référence par mètre carré construit** et de la **superficie des immeubles** affectés à l'activité. **[C]**

**[!]** Une synthèse ajoute : « dans le cas où le minimum calculé en fonction de la superficie couverte et du nombre de services fournis par la collectivité locale **excède le maximum** de la taxe, c'est **ce minimum qui est dû** ». Formulation ambiguë, à vérifier sur le Code de la fiscalité locale.

**[?]** Les modalités de **paiement mensuel de la TCL** (acompte mensuel de 0,2 % du CA du mois vs régularisation annuelle sur le minimum) ne sont pas documentées. Point pratique important — à creuser.

## 7.2 Taxe hôtelière

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux | **2 %** du **chiffre d'affaires brut global** | **[C]** |

— https://www.jurisitetunisie.com/tunisie/codes/flocal/fisc-local1080.htm ; http://www.profiscal.com/Impot_en_Tunisie/Digest5.htm

## 7.3 FODEC — Fonds de Développement de la Compétitivité

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux | **1 %** | **[C]** |
| Base | **chiffre d'affaires hors TVA** | **[C]** |
| Recouvrement | perçu localement **sur la base d'une déclaration mensuelle** | **[C]** |

— https://swiver.io/blog/fodec/ ; https://finco.tn/blog/fodec-tunisie-guide-complet ; https://facture-tunisie.com/docs/relatedInfo/taxe-73.pdf

**Piège de calcul [C]** : le FODEC s'applique sur le **montant HORS TAXE** et **s'ajoute AVANT le calcul de la TVA** — la TVA se calcule donc sur (HT + FODEC). Source de nombreuses erreurs en calcul manuel.
— https://www.tassaruf.com/blog/fodec-tva-conformite-fiscale-logiciel-tunisie.html

> Existe également une **taxe au profit du Fonds National de Maîtrise de l'Énergie**, dont l'assiette est traitée avec celle de la TVA et du droit de consommation dans la **Note commune n°29**. **[P]**
> — https://jibaya.tn/docs/note-commune-numero-29-.../

## 7.4 Taxe sur les assurances

| Contrats | Taux sur les primes émises | Fiabilité |
|---|---|---|
| Risques de la **navigation maritime et aérienne** | **5 %** | **[C]** |
| **Autres risques** | **10 %** | **[C]** |

— http://www.profiscal.com/Impot_en_Tunisie/Digest5.htm ; https://www.finances.gov.tn/fr/apercu-general-sur-la-fiscalite

---

# 8. Droit de consommation (DC)

| Élément | Règle | Fiabilité |
|---|---|---|
| Assiette — **régime intérieur** | prix **hors TVA et hors droit de consommation** | **[C]** |
| Assiette — **importation** | **valeur en douane** (valeur déclarée hors droit de douane, hors DC, hors taxe professionnelle et hors TVA) | **[C]** |
| Modalité de taux | **ad valorem** (taux %) ou spécifique | **[P]** |
| Liste des produits | révisée par la **LF 2018** : parfums, produits cosmétiques, chocolat, biscuits, sauces préparées, etc. | **[P]** |

— https://profiscal.com/etudiants/TCA/tca_ch10_06.htm ; https://jibaya.tn/docs/note-commune-numero-29-.../ ; https://jibaya.tn/wp-content/uploads/2024/02/Note-Commune-n%C2%B017-5.pdf

**[?]** Le **barème des taux de DC par produit** n'a pas été collecté (il est très étendu et figure en annexe du code). Ne pas tenter de le reconstituer.

---

# 9. Droit de timbre

| Cas | Montant | Fiabilité |
|---|---|---|
| Facture — régime général (**avant 2026**) | **1 dinar** par facture, quelle que soit sa valeur | **[C]** |
| Facture de **grande surface**, < 50 D (**depuis 01/01/2026**) | **1,000 D** (inchangé) | **[P]** |
| Facture de **grande surface**, de 50 à 100 D (**depuis 01/01/2026**) | **1,500 D** | **[P]** |
| Facture de **grande surface**, > 100 D (**depuis 01/01/2026**) | **2,000 D** | **[P]** |
| **Cahiers des charges** non soumis à un timbre spécifique (LF 2026) | **20 dinars** | **[P]** |

— https://qwerty.tn/blog/timbre-fiscal-electronique-tunisie-2026 ; https://www.lapresse.tn/2025/10/19/tunisie-toutes-les-nouvelles-taxes-prevues-par-le-projet-de-loi-de-finances-pour-2026/ ; https://www.tunisienumerique.com/loi-de-finances-2026-nouvelles-mesures-fiscales-et-ajustements-pour-renforcer-les-recettes-de-letat/

**Point de vigilance [P]** : le barème progressif 1 / 1,5 / 2 D est présenté comme **réservé aux factures émises par les grandes surfaces**. Il ne semble **pas** généralisé à toutes les factures. Ne pas l'appliquer indistinctement. **À confirmer sur le texte de la LF 2026.**

Le timbre est **payé par le client** lors de la réception de la facture ; c'est le vendeur qui le **collecte et le reverse au Trésor** — via la DMI. **[P]**

Code de référence 2026 : https://jibaya.tn/docs/code-des-droits-denregistrement-et-de-timbre-2026/

---

# 10. Contribution Sociale de Solidarité (CSS)

## 10.1 Personnes physiques

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux de droit commun | **1 %** | **[C]** |
| Taux **réduit temporaire** (LF 2023 → prorogé) | **0,5 %** | **[C]** |
| Période du taux réduit | exercices **2023 à 2026** ; pour les **salaires et pensions**, versés du **1/1/2026 au 31/12/2026** | **[C]** |
| Base | **revenu imposable annuel**, après déduction des frais professionnels | **[P]** |
| Seuil de déclenchement | revenu imposable **> 5 000 D / an** | **[P]** |
| Retour à **1 %** | à compter du **1er janvier 2027** | **[C]** |

— https://www.webmanagercenter.com/2026/01/15/559805/tunisie-le-regime-exceptionnel-de-la-contribution-sociale-de-solidarite-prolonge-jusqua-fin-2026/ ; https://www.lapresse.tn/2026/01/14/contribution-sociale-de-solidarite-nouvelles-modalites-confirmees-pour-lannee-2026/ ; https://www.ilboursa.com/marches/le-taux-de-la-contribution-sociale-de-solidarite-applique-sur-les-salaries-repasse-a-1_50366 ; https://businessnews.com.tn/2025/12/24/contribution-sociale-solidaire-qui-paie-combien-et-jusqua-quand/1379974/

## 10.2 Personnes morales

| Élément | Valeur | Fiabilité |
|---|---|---|
| Taux | **3 %** ou **4 %** des bénéfices imposables, **selon le taux d'IS** de la société (40 %, 35 %, 20 % ou 10 %) — au lieu de 1 % | **[C]** |
| Exercices concernés | **2025 et 2026** | **[C]** |

— https://blog.avocats.deloitte.fr/tunisie-les-principales-mesures-de-la-loi-de-finances-pour-2026/ ; https://finco.tn/blog/loi-de-finance-2026

**[?]** La correspondance exacte « taux d'IS → 3 % ou 4 % » n'a pas été précisée par les sources. **Ne pas l'inventer.**

> **Nota** : la CSS des personnes morales est assise sur le **bénéfice annuel** — elle relève de la déclaration annuelle et des **acomptes provisionnels**, pas de la DMI. Seule la **CSS retenue sur salaires** transite par la déclaration mensuelle (au sein de la RS sur traitements et salaires). **[P]**

---

# 11. Déroulement concret de la télédéclaration

## 11.1 Nomenclature des portails — attention aux confusions

- **`impots.finances.gov.tn`** — site officiel de la DGI, point d'entrée « Services en ligne » → « Télé-déclaration fiscale ». **[C]**
- **`e-t@srih`** — nom historique du système de télédéclaration/télépaiement de la DGI. **[P]**
- **`tej.finances.gov.tn`** — plateforme dédiée aux **retenues à la source** (depuis 2022, généralisée en 2026). **[P]**
- **`jibaya.tn`** — **[!]** Ce site est présenté par certaines sources comme « le portail des impôts (e-jibaya) », mais dans les résultats collectés il se comporte comme un **portail documentaire privé/professionnel** hébergeant les notes communes, codes et formulaires. **Ne pas le présenter comme le portail officiel de dépôt sans vérification.**
- **`e-Liasse`** — désigne le dépôt de la **liasse fiscale annuelle**, à ne pas confondre avec la DMI. **[P]**

## 11.2 Prérequis — adhésion

1. Remplir un **formulaire d'adhésion** et le déposer au **bureau/structure de contrôle des impôts compétent**, **ou** procéder à une **adhésion en ligne**. **[C]**
2. La structure de contrôle attribue **un ou deux mots de passe** permettant d'accéder au système. **[C]**
3. Acquisition d'un **certificat électronique** auprès de l'**ANCE** (Agence Nationale de Certification Électronique) / **TunTrust**, matérialisé par un **token**. **[C]**

— https://jibaya.tn/blog/la-tele-declaration-fiscale/ ; https://jibaya.tn/wp-content/uploads/2023/08/guide-adhesion-en-ligne-min.pdf ; https://www.tuntrust.tn/sites/default/files/Guides/UtilisationDuTokenTuntrustetaccesauSiteDelaTeledeclarationFiscale.pdf

## 11.3 Enchaînement des écrans

Séquence reconstituée à partir du **Guide de la télédéclaration fiscale** de la DGI et du guide TunTrust : **[C]** sur la trame, **[P]** sur le détail

1. Accès à `impots.finances.gov.tn` → **« Services en ligne »** → **« Télé-déclaration fiscale »**
2. **Sélection du certificat** électronique → **OK**
3. Saisie du **code PIN du token**
4. Affichage de la **zone d'identification de l'abonné**
5. Saisie de l'**identifiant = matricule fiscal** (7 chiffres + 1 lettre, ex. `1234567/W`) et du **mot de passe** (attribué lors de l'adhésion, **15 chiffres**)
6. Choix du **type de déclaration** : mensuelle / annuelle / acomptes provisionnels
7. Choix du **mois** et de l'**année**
8. **Saisie des montants dans les cases correspondantes**, rubrique par rubrique
9. **Validation** de la déclaration
10. **Télé-liquidation** : paiement en ligne par **carte bancaire** ou par **prélèvement sur un compte associé**
11. **Édition et archivage du récépissé de dépôt**

— https://chaexpert.com/guide-teledeclaration-tunisie/ ; https://jibaya.tn/wp-content/uploads/2023/08/sodapdf-compressed-1-1-1.pdf ; https://www.gastevo.com/blog/teledeclaration-fiscale-tunisie-guide-2026 ; https://swiver.io/blog/tele-declaration/ ; http://www.impots.finances.gov.tn/index.php/fr/services-en-ligne/tele-declaration-fiscale

## 11.4 Fonctions offertes au contribuable abonné

Le système permet à tout contribuable abonné de : **[C]**

- **liquider et payer** ses déclarations **mensuelles**, **annuelles** et d'**acomptes provisionnels**
- **modifier des déclarations déjà liquidées**
- **consulter** lesdites déclarations

— https://chaexpert.com/guide-teledeclaration-tunisie/

## 11.5 **[?]** Non documenté

- **Contrôles de cohérence** appliqués par la plateforme à la saisie (blocages, alertes, contrôles arithmétiques inter-rubriques) : **aucune source**. Ne rien affirmer.
- **Numéro d'enregistrement** de la déclaration : format, emplacement, mode de génération — **non trouvé**. Les sources parlent de « récépissé de dépôt » et de « quittance » sans en décrire la structure.
- Distinction entre **récépissé de dépôt** (preuve du dépôt) et **quittance de paiement** (preuve du règlement) : plausible mais **non confirmée**.
- Comportement de la saisie en cas de **déclaration Néant** en ligne.

---

# 12. Déclaration « Néant » / sans activité

**Règle [C]** : les assujettis à la TVA autres que les forfaitaires **doivent déposer une déclaration mensuelle** auprès du bureau de contrôle des impôts, **et même lorsque la déclaration mensuelle ne comporte aucun impôt ni droit à liquider, la mention « Néant » doit être portée dans la case appropriée.**

— https://www.profiscal.com/etudiants/TCA/tca_ch7_06.htm

**Conséquence pratique** : l'absence d'activité **n'exonère pas** du dépôt. Le défaut de dépôt expose aux pénalités de retard (§13), y compris pour une déclaration à zéro.

**[?]** Les modalités concrètes de dépôt d'une déclaration Néant **en ligne** (case dédiée, validation à zéro) ne sont pas documentées.

---

# 13. Déclaration rectificative

**Ce qui est établi [C]** :
- Le système de télédéclaration permet de **« modifier les déclarations déjà liquidées »**. — https://chaexpert.com/guide-teledeclaration-tunisie/
- Il existe des **imprimés de déclaration rectificative** dédiés, au moins **en matière de TFP**. — https://www.finances.gov.tn/fr/document/declaration-rectificative-en-matiere-de-tfp
- Sur la plateforme **TEJ**, la correction d'erreurs peut entraîner la **modification ou l'annulation de certificats de retenue à la source**. **[P]** — https://chaexpert.com/tunisie-retenue-source-plateforme/

**[?] Non documenté** :
- Existe-t-il un **imprimé rectificatif générique** pour la DMI (au-delà de la TFP) ?
- Délai pour rectifier ; effet sur les pénalités ; distinction entre rectification spontanée et rectification après contrôle.
- Procédure d'écran exacte de la rectification en ligne.

---

# 14. Pénalités

**[!] Sources divergentes / millésimes différents — à recouper impérativement.**

| Règle citée | Source | Fiabilité |
|---|---|---|
| Pénalité de retard de paiement de **0,75 % par mois**, portée à **1 %** si le paiement intervient au-delà de 30 jours à compter de la date de constatation | https://swiver.io/blog/declaration-mensuelle/ | **[P]** — probablement un état antérieur du droit |
| Pénalité mensuelle de retard **portée de 0,75 % à 1,25 %** du montant déclaré, avant intervention du contrôle fiscal | https://www.businessnews.com.tn/Hausse+des+p%E9nalit%E9s+de+retard+de+d%E9p%F4t+des+d%E9clarations,544,125475,3 | **[P]** |

**Ne pas énoncer de taux de pénalité dans le skill sans vérification sur le Code des Droits et Procédures Fiscaux (CDPF) en vigueur.**

Note commune de référence potentielle : https://www.exacomaudit.com/docs/notes-communes-tunisie/2019/Note-Commune-N-13-2019.pdf

---

# 15. Erreurs fréquentes et pièges signalés par les praticiens

Recensés par des éditeurs et cabinets tunisiens (2026) : **[P]** sauf mention

## 15.1 Sur la retenue à la source

1. **Application du mauvais taux** — confusion entre **3 %** (BNC régime réel / personnes morales) et **10 %** (BNC forfait d'assiette). Erreur n°1 citée. **[C]**
2. **Omission de la retenue sur un achat ≥ 1 000 TND** — le seuil est apprécié **TVA comprise**, ce qui est régulièrement oublié. **[C]**
3. **Confusion HT / TTC dans l'assiette** — cf. §4.1 : la doctrine retient le **TTC**, mais de nombreux blogs diffusent le HT. **[!] Piège majeur.**
4. **Confusion entre retenue à la source et TVA** (notamment avec la TVA retenue à la source, mécanisme distinct).
5. **Déclaration TEJ incomplète** — fournisseurs oubliés dans le fichier XML.
6. Non-délivrance ou perte des **certificats de retenue à la source**.

— https://gastevo.com/blog/retenue-a-la-source-tunisie-guide-facturation ; https://hesabi.tn/actualites/taux-retenue-source-tunisie-2026 ; https://efacturetn.com/fr/blog/certificat-retenue-source-tunisie

## 15.2 Sur les taxes sur le chiffre d'affaires

7. **FODEC mal séquencé** : le FODEC se calcule sur le **HT** et **s'ajoute avant** le calcul de la TVA. Erreur classique en calcul manuel. **[C]**
   — https://www.tassaruf.com/blog/fodec-tva-conformite-fiscale-logiciel-tunisie.html
8. Oubli de la **TCL sur le CA export à 0,1 %** (taux distinct du local).
9. Oubli du **minimum de TCL** égal à la taxe sur les immeubles bâtis.

## 15.3 Sur le processus déclaratif

10. **Omission de la déclaration « Néant »** en période sans activité. **[C]**
11. Confusion des **échéances** : 15 (personnes physiques) / **20** (personnes morales télédéclarantes) / 28 (personnes morales non télédéclarantes). Le passage de 28 à 20 par la LF 2024 est une source récurrente de retards. **[C]**
12. Croire que le **20 est le seul jour** de dépôt, alors que c'est le **dernier jour du délai légal**. **[C]** — https://managers.tn/2026/07/20/...
13. Défaut de **rapprochement mensuel** entre les retenues comptabilisées et la déclaration TEJ.
14. Absence de vérification de cohérence entre la **TVA déclarée** et les **factures électroniques TEIF** de la période. **[P]**
    — https://www.gastevo.com/blog/teledeclaration-fiscale-tunisie-guide-2026

## 15.4 Bonnes pratiques recommandées

- Paramétrer un **taux de RS par défaut sur chaque fiche fournisseur**.
- Activer le **calcul automatique** de la RS sur les factures d'achat.
- **Rapprochement mensuel** retenues comptabilisées ↔ déclaration TEJ.
- **Conserver les certificats de retenue 10 ans**.
- Archiver systématiquement le **récépissé de dépôt**.

Une entreprise tunisienne au régime réel a typiquement **entre 8 et 15 échéances déclaratives par an**. **[P]**

---

# 16. Zones d'ombre — à traiter en priorité avant rédaction du skill

Classées par criticité pour un skill opérationnel.

| # | Sujet | Pourquoi c'est bloquant |
|---|---|---|
| 1 | **Codes et numéros de cases** de l'imprimé DMI | Le skill ne peut pas guider une saisie rubrique par rubrique sans eux. **Lacune n°1.** |
| 2 | **Articulation TEJ ↔ rubrique RS de la DMI** | Détermine si la RS se saisit encore dans la DMI en 2026. |
| 3 | **Assiette de la RS : place du droit de timbre** | Le TTC est établi ; l'inclusion du timbre ne l'est pas. |
| 4 | **Taux RS sur les loyers : 10 % ou 15 %** | Conflit direct entre sources. |
| 5 | **Taux RS sur marchés publics : 1,5 % ou 3 %** | Conflit direct entre sources. |
| 6 | **Règles d'arrondi** et **minimum de perception** de la RS | Demandés explicitement, **aucune source trouvée**. |
| 7 | **Taux de pénalité de retard en vigueur** | Sources contradictoires (0,75 / 1 / 1,25 %). |
| 8 | **Répartition sectorielle des taux TVA 13 % vs 7 %** | Synthèse trouvée jugée douteuse. |
| 9 | **Modalités mensuelles de la TCL** (acompte vs régularisation) | Impacte directement la saisie mensuelle. |
| 10 | **Contrôles de cohérence** de la plateforme, format du **numéro d'enregistrement** | Demandés explicitement, non documentés. |
| 11 | **TVA sur immobilisations** : ligne dédiée et régularisations | Non documenté. |
| 12 | **TVA retenue à la source** (mécanisme distinct) | Piège classique, non documenté. |
| 13 | **Correspondance taux d'IS → CSS 3 % ou 4 %** | Non précisée. |
| 14 | **Généralisation ou non du barème progressif de timbre** hors grandes surfaces | Risque d'application erronée. |
| 15 | **Délai des personnes physiques télédéclarantes** | Non trouvé. |
| 16 | Exonérations et assiette exacte du **FOPROLOS** | Non confirmées. |
| 17 | Barème des taux de **droit de consommation** par produit | Non collecté (volumineux). |
| 18 | Table des valeurs du champ **`رمز التصريح`** (code de déclaration) | Non trouvée. |

---

# 17. Sources de référence à exploiter en priorité (accès direct requis)

**Documents officiels / doctrine** — non lisibles depuis cet environnement (403), à récupérer manuellement :

- Imprimé DMI 2026 (arabe) — https://www.diwan.tn/fr/document/card/f064b9d2-66c1-4e62-88be-bae798600c05
- Imprimé DMI 2026 — https://jibaya.tn/blog/formulaire-a-telecha/declaration-mensuelle-des-impots-2026
- Imprimé DMI 2023 — https://www.finances.gov.tn/fr/document/imprime-de-la-declaration-mensuelle-des-impots-2023
- Imprimé DMI version LFC 2014 (arabe, PDF direct) — https://www.finances.gov.tn/sites/default/files/2019-08/declaration_mensuelle_lfc_2014-ar.pdf
- **Guide de la télédéclaration fiscale (DGI)** — https://jibaya.tn/wp-content/uploads/2023/08/sodapdf-compressed-1-1-1.pdf
- **Guide d'adhésion en ligne au système de télédéclaration** — https://jibaya.tn/wp-content/uploads/2023/08/guide-adhesion-en-ligne-min.pdf
- Guide token TunTrust + accès télédéclaration — https://www.tuntrust.tn/sites/default/files/Guides/UtilisationDuTokenTuntrustetaccesauSiteDelaTeledeclarationFiscale.pdf
- **Note commune n°6/2025** (RS 3 % ventes en ligne) — https://jibaya.tn/wp-content/uploads/2025/03/Note-Commune-N%C2%B006.pdf
- **Note commune n°29** (assiette TVA / DC ad valorem / FODEC / FNME) — https://jibaya.tn/docs/note-commune-numero-29-.../
- **Note commune n°41** (dividendes, intérêts, redevances sous CNDI) — https://jibaya.tn/docs/note-commune-numero-41-.../
- Notes communes sur la notion de marché — https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-19-11.pdf ; https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-12-1.pdf
- Code IRPP/IS art. 52 — https://9anoun.tn/fr/kb/codes/code-impot-sur-revenu-personnes-physiques-impot-sur-les-societes/code-impot-sur-revenu-personnes-physiques-impot-sur-les-societes-article-52
- Code IRPP/IS 2022 (PDF) — http://chaexpert.com/documents/Code%20de%20l%E2%80%99imp%C3%B4t%20sur%20le%20Revenu%20des%20Personnes%20Physiques%20et%20de%20l'imp%C3%B4t%20sur%20les%20Soci%C3%A9t%C3%A9s%202022.pdf
- Code TVA 2016 (PDF) — http://chaexpert.com/documents/2016%20-%20CODE%20TVA%202016.pdf
- Code de la fiscalité locale — TCL — https://www.jurisitetunisie.com/tunisie/codes/flocal/fisc-local1070.htm
- Code de la fiscalité locale — Taxe hôtelière — https://www.jurisitetunisie.com/tunisie/codes/flocal/fisc-local1080.htm
- Code TVA — Restitution — https://www.jurisitetunisie.com/tunisie/codes/tva/tva1050.htm
- Loi de finances 2026 (arabe) — https://jibaya.tn/docs/loi-des-finances-2026-disponible-en-langue-arabe-uniquement/
- Code des droits d'enregistrement et de timbre 2026 — https://jibaya.tn/docs/code-des-droits-denregistrement-et-de-timbre-2026/

**Doctrine pédagogique (profiscal.com)** — la source la plus dense rencontrée :

- Retenues à la source — https://www.profiscal.com/etudiants/ras/ras_ch12_5.htm et .../ras_ch12_5.pdf
- Liquidation TVA / déclaration mensuelle — https://www.profiscal.com/etudiants/TCA/tca_ch7_06.htm
- Restitution des crédits de TVA — https://www.profiscal.com/etudiants/TCA/tca_ch8_06.htm
- Déduction de la TVA retenue à la source — https://www.profiscal.com/etudiants/TCA/tca_ch6_06.htm
- Droit de consommation — https://profiscal.com/etudiants/TCA/tca_ch10_06.htm
- Fiscalité locale / TCL — http://www.profiscal.com/Etudiants/TCA/tca_ch15_06.htm
- Digest section 5 (TFP, FOPROLOS, taxes diverses) — http://www.profiscal.com/Impot_en_Tunisie/Digest5.htm

**Cours universitaire** (contient un chapitre « liquidation TVA / déclaration mensuelle ») :
- http://www.isat-tunis.tn/wp-content/uploads/2020/11/chapitre-2-liquidation-TVA-assj-obli-S2-s3.pdf
