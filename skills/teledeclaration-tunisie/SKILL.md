---
name: teledeclaration-tunisie
description: >
  Prépare, contrôle et dépose les déclarations fiscales tunisiennes sur le portail
  e-t@srih / Jibaya de la DGI : déclaration mensuelle (TVA, retenue à la source, TFP,
  FOPROLOS, TCL, timbre), acomptes provisionnels, IS, IRPP, déclaration de l'employeur,
  liasse fiscale, pays par pays. Deux modes : PRÉPARATION (calcul, échéance applicable,
  récapitulatif, contrôle avant validation) et PILOTAGE (navigation réelle sur e-t@srih
  via Claude in Chrome).
  Déclencher dès que l'utilisateur mentionne : "déclaration mensuelle", "DMI", "TVA
  Tunisie", "retenue à la source", "e-t@srih", "télédéclaration", "téléliquidation",
  "jibaya", "acompte provisionnel", "déclaration employeur", "liasse fiscale", "TEJ",
  "certificat DIGIGO", "TunTrust", "matricule fiscal", "échéance fiscale Tunisie",
  "pénalité de retard DGI" — ou toute demande de calcul, contrôle ou dépôt d'une
  déclaration fiscale tunisienne, y compris pour un client de cabinet comptable.
---

# Skill : Télédéclaration fiscale tunisienne (e-t@srih / Jibaya)

Ce skill couvre le système de télédéclaration et de télépaiement de la **DGI tunisienne**.
Il sert aussi bien un contribuable qui déclare pour lui-même qu'un cabinet qui déclare pour
ses clients.

---

## ⚠️ Trois pièges à connaître avant tout

**1. « Jibaya'tic » est ALGÉRIEN.** Le portail tunisien est `jibaya.tn` (système **e-t@srih**).
« Jibaya'tic » désigne le portail de la DGI **algérienne** (`mfdgi.gov.dz`, formulaire **G50**,
wilayas). Cette homonymie contamine massivement les résultats de recherche web : des synthèses
mélangent dans un même paragraphe des éléments algériens et tunisiens. **Toute source
mentionnant « G50 », « wilaya », « CDI/CPI » est hors périmètre.**

**2. Télédéclaration ≠ téléliquidation.** Deux systèmes distincts, régulièrement confondus :

| | Télédéclaration + télépaiement | Téléliquidation |
|---|---|---|
| Domaine | `teledeclaration.` / `teledecgo.finances.gov.tn` | `tl.finances.gov.tn` |
| Certificat électronique | **obligatoire** | **non requis** |
| Paiement | en ligne, prélèvement | **le lendemain**, à la Recette des Finances |

Un contribuable non astreint peut liquider en ligne **sans acheter de certificat** et payer au
guichet. Avant de conseiller l'achat d'un DIGIGO à 50 DT, vérifier si la téléliquidation suffit.

**3. Un taux non sourcé ne se devine pas.** La fiscalité tunisienne a beaucoup bougé (LF 2024,
2025, 2026) et les blogs d'éditeurs de logiciels se contredisent sur des points centraux —
notamment la base de la retenue à la source (HT ou TTC), le taux des loyers, celui des marchés.
Les fichiers de `references/` marquent chaque donnée **[C]** confirmé, **[P]** probable,
**[!]** contradiction, **[?]** introuvable. **Une donnée [P], [!] ou [?] ne doit jamais être
présentée comme certaine** — l'annoncer comme telle et proposer de la faire vérifier. Un chiffre
faux dans une déclaration fiscale coûte des pénalités réelles au client.

---

## Choix du mode

```
Demande de calcul, de vérification d'échéance,
de contrôle d'une déclaration, de question fiscale   →  MODE PRÉPARATION  (§A)

Demande explicite de déposer, saisir, valider
sur le portail                                        →  MODE PILOTAGE     (§B)
                                                          (précédé du MODE PRÉPARATION)
```

Le mode PILOTAGE ne s'exécute **jamais seul** : on ne saisit pas des montants qu'on n'a pas
d'abord calculés et fait valider. Enchaîner A puis B.

---

## Étape 0 — Cadrer le dossier (commune aux deux modes)

Cinq informations conditionnent tout le reste. Les demander si elles ne sont pas déjà connues :

| Information | Pourquoi elle change le résultat |
|---|---|
| **Personne physique ou morale ?** | Détermine l'échéance (15 vs 20/28) et le régime d'imposition |
| **Adhérent au système de télédéclaration ?** | Une PM adhérente déclare au **20**, non adhérente au **28** |
| **Régime réel ou forfaitaire ?** | Le forfait a ses propres obligations et son propre calendrier |
| **Déclaration pour soi ou pour un client ?** | Détermine le choix « Ma propre déclaration » vs « Déclaration pour une tierce personne » à l'écran d'identification |
| **Quelle déclaration, quelle période ?** | Mensuelle de quel mois, acompte de quel rang, exercice de quelle année |

**Adhésion obligatoire** : CA annuel brut **≥ 100 000 DT** au régime réel, depuis le
1er juillet 2020 (arrêté du 22 mai 2020). Une généralisation à tous les contribuables en
2025-2026 est rapportée par la presse professionnelle mais **le texte n'a pas été identifié** —
ne pas l'affirmer, le signaler comme à vérifier.

---

## §A — MODE PRÉPARATION

### A1. Déterminer l'échéance applicable

C'est le premier livrable utile, et la source d'erreur la plus coûteuse.

| Contribuable | Échéance |
|---|---|
| Personne physique | **15** du mois suivant |
| Personne morale **adhérente** | **20** du mois suivant |
| Personne morale **non adhérente** | **28** du mois suivant |

**Cas non tranché** : une **personne physique adhérente** bénéficie-t-elle du 20 ? Les
communiqués DGI 2026 continuent d'annoncer le 15 pour les PP sans distinguer, mais le texte
(art. 69 LF 2024) vise « les adhérents obligatoires ou optionnels ». **Retenir la date la plus
prudente (le 15)** et signaler l'incertitude plutôt que de faire prendre un risque de pénalité.

**Règle de report** : toute échéance tombant un **samedi, un dimanche ou un jour férié** est
reportée au premier jour ouvrable suivant. La formulation officielle ne mentionne que
dimanche/férié, mais la pratique DGI 2026 reporte aussi systématiquement les samedis (9 cas
observés). Vérifier le jour de la semaine avant d'annoncer une date.

### ⭐ La date limite est 17H00, pas minuit

Le guide officiel de la DGI est formel : **le serveur n'est pas accessible entre 17H et 19H, et
après 19H on passe à la journée J+1.** Surtout :

> « À l'échéance et après 17H, des pénalités de retard seront encourues lors de la liquidation de
> la dernière déclaration mensuelle, annuelle ou d'acompte provisionnel échue. »

**Une déclaration liquidée après 17H le jour de l'échéance est pénalisée.** Ce fait n'apparaît
dans aucune source web — il vient de la source primaire. Le rappeler systématiquement quand une
échéance approche, et ne jamais annoncer « tu as jusqu'au 20 » sans préciser « avant 17H ».

⚠️ **Les acomptes provisionnels ne bénéficient pas du raccourcissement à 20 jours** : ils restent
au 25 (PP) / 28 (PM).

Calendrier annuel complet, calendrier 2026 réel mois par mois, et tableau des pénalités :
→ `references/calendrier-et-penalites.md`

### A2. Calculer les montants

Pour la **déclaration mensuelle** (TVA, retenue à la source et son tableau de taux, TFP,
FOPROLOS, TCL, droit de timbre, droit de consommation, taxe sur les assurances, crédit de TVA) :
→ `references/declaration-mensuelle.md`

Pour l'**IS, l'IRPP, les acomptes provisionnels, la déclaration de l'employeur et ses 7 annexes,
l'Art. 43 LF 2025, la déclaration pays par pays, l'impôt libératoire** :
→ `references/declarations-annuelles.md`

**Points de vigilance sur le calcul :**

- **Retenue à la source** : les taux viennent maintenant du texte de l'**article 52** du code —
  `retenue-a-la-source.md`, qui fait foi. La grille la plus fréquente est **1,5 % / 1 % / 0,5 %**
  sur les achats **≥ 1 000 D TVA COMPRISE** : le taux dépend du **régime d'imposition du
  fournisseur**, pas de la nature de l'achat. Honoraires **10 %**, ramenés à **3 %** si le
  bénéficiaire est au réel — mais pour une personne physique, **seulement sur présentation de sa
  carte d'identification fiscale**. Loyers **10 %**, loyers d'hôtels **5 %**, non-résidents **15 %**,
  dividendes **10 %**, capitaux mobiliers **20 %**.
- **Taux d'IS** : **20 % de droit commun** depuis le 01/01/2024, plus trois taux sectoriels
  (10 / 35 / 40 %). **Il n'existe pas de barème progressif par chiffre d'affaires** — c'est une
  erreur répandue dans les sources secondaires. Attention : les **établissements de paiement** sont
  à **35 %**, pas à 40 % comme les banques. Détail et liste des redevables : `code-irpp-is.md` §1.
- **Barème IRPP** : intégralement confirmé sur le texte de l'article 44-I — utilisable tel quel,
  bornes comprises. `code-irpp-is.md` §2.
- **Minimum d'impôt** : ne pas confondre IS (0,2 % / **500 D** · 0,1 % / **300 D**) et IRPP
  (0,2 % / **300 D** · 0,1 % / **200 D**). Majoré de 50 % si paiement > 1 mois après les délais.
- **Déclaration « néant »** : elle reste **obligatoire** en l'absence d'activité. Ne jamais
  conseiller de ne rien déposer.

### A3. Produire le récapitulatif

Structure du livrable, à adapter selon la déclaration :

```
DÉCLARATION — [type] — [période]
Contribuable : [raison sociale] — Matricule : [7 chiffres + lettre clé]
Régime : [réel / forfaitaire] — [PP / PM] — [adhérent / non adhérent]

ÉCHÉANCE : [date] ([jour de la semaine], reportée depuis le [date] si applicable)

MONTANTS À SAISIR
| Rubrique | Base | Taux | Montant | Fiabilité |
|----------|------|------|---------|-----------|
| ...      | ...  | ...  | ...     | [C]/[P]   |

TOTAL À PAYER : ... DT

⚠️ POINTS À VÉRIFIER AVANT VALIDATION
- [toute donnée marquée [P], [!] ou [?] utilisée dans le calcul]
```

Faire figurer la colonne de fiabilité : elle permet à l'utilisateur de voir d'un coup d'œil
ce qui est solide et ce qui mérite un appel au bureau de contrôle.

### A4. Contrôler une déclaration déjà saisie

Vérifier dans cet ordre : le **mois et l'année** sélectionnés · la **cohérence base × taux** de
chaque rubrique · le **report du crédit de TVA** du mois précédent · les rubriques **omises**
(une case non cochée est une omission silencieuse) · la **déclaration néant** si aucune activité.

---

## §B — MODE PILOTAGE (Claude in Chrome)

### B0. Ce que ce mode ne peut pas faire

**L'authentification par certificat client TLS se joue dans une boîte de dialogue native du
navigateur, hors du DOM.** Aucune automatisation ne peut la franchir. La séquence comporte donc
une **interruption humaine obligatoire**, à annoncer d'emblée pour que l'utilisateur reste
disponible — et non une tentative de contournement.

C'est aussi une bonne chose : le choix du certificat détermine **sous quelle identité** la
session s'ouvre. Sur un poste de cabinet, plusieurs certificats coexistent (plusieurs personnes,
plusieurs sociétés). Faire confirmer lequel sélectionner plutôt que de laisser prendre le premier
de la liste.

### B1. Nature de l'application

e-t@srih est une application **Oracle PL/SQL Web Toolkit** : chemins en
`/pls/webdeclar/<PACKAGE>.<PROCEDURE>`, pages HTML rendues côté serveur, **assistant séquentiel**
avec des boutons `Suivant` / `Precedent` / `Fin`.

Conséquence : **ne jamais tenter de sauter directement à un écran par son URL.** L'état de la
session vit côté serveur ; un accès direct casse le parcours et fait perdre la saisie. Naviguer
écran par écran, comme un humain.

Le paramètre d'URL `lang=fr` force l'affichage français sur une interface bilingue FR/AR.

### B2. Séquence de navigation

```
1. OUVRIR       jibaya.tn → Services en ligne → Télé-déclaration Fiscale
                (ou directement teledeclaration.finances.gov.tn / teledecgo pour DIGIGO)
2. CHOISIR      « certificat DIGIGO » ou « certificat sur clé USB »
3. ⏸ HUMAIN     Sélection du certificat dans la boîte native → faire confirmer lequel
4. IDENTIFIER   Identifiant (7 chiffres + lettre clé) + mot de passe
5. ⚠️ MODE      « Ma propre déclaration » OU « Déclaration pour une tierce personne »
6. MENU         FONCTIONNALITES DE LA TELE DECLARATION → choisir la déclaration
7. PÉRIODE      Mois / année — vérifier deux fois, une erreur ici invalide tout
8. SAISIR       Rubrique par rubrique, depuis le récapitulatif validé en mode PRÉPARATION
9. RELIRE       Comparer l'écran au récapitulatif avant de valider
10. VALIDER     → liquidation
11. PAYER       → ordre de prélèvement
12. VÉRIFIER    Le statut de la déclaration (voir B4) puis éditer le récépissé
```

L'étape **5** est celle qu'on oublie. Un cabinet qui déclare pour un client et laisse le choix
par défaut (« Ma propre déclaration », coché d'origine) dépose la déclaration sous la mauvaise
identité. **Toujours faire confirmer explicitement.**

Cartographie détaillée des écrans, URLs et libellés relevés :
→ `references/ui-observee.md`

### B3. Menu principal

Les 14 entrées relevées à l'écran, leur nature (déclaration / adhésion / paramétrage / compte) et
le détail de chacune :
→ `references/declarations-annuelles.md` §1

### B4. ⚠️ Après le paiement — l'étape que tout le monde saute

Une déclaration **liquidée** n'est **pas** une déclaration déposée. Tant que le paiement n'est pas
confirmé, elle bascule en **« suspendue »** à l'échéance — c'est-à-dire qu'elle n'existe pas.
Confirmer le paiement **même si la déclaration est nulle ou dégage un report d'impôt**.

**Table des états** (source primaire) :

| État | Ce que ça veut dire |
|---|---|
| **Liquidée** | Calculée, mais **paiement pas validé** — ne compte pas encore |
| **Paiement confirmé** | Validée pour envoi au paiement |
| **Envoyée pour paiement** | Ordre transmis à la télécompensation |
| **Payée** | Acceptée et payée — **seul état sûr** |
| **Suspendue** | Liquidée mais non validée à temps → **déposer une autre déclaration** |
| **Rejeté** | Ordre refusé par la banque → **situation non en règle**, non supprimable |
| **Partiellement rejeté** | Paiement réparti sur plusieurs comptes, un ordre rejeté → régulariser ; les montants débités sont consignés à la recette du Pôle de recouvrement |

**Les déclarations rejetées ou suspendues doivent être liquidées de nouveau. Elles ne peuvent être
ni supprimées ni modifiées.** Un e-mail informe du sort de l'ordre de prélèvement — d'où
l'importance d'une adresse à jour dans l'espace adhérent.

Une déclaration payée porte une **référence de quittance commençant par la lettre `E`** et la date
de paiement. Les quittances se retirent auprès de **n'importe quelle Recette des Finances**.

### B5. Rectifier une déclaration

L'ordre des opérations est contre-intuitif et se trompe facilement :

| Situation | Ce qu'il faut faire |
|---|---|
| État **« liquidée »** | **Modifier** directement. Ajout/suppression d'un impôt possible. Suppression possible. |
| État **« paiement confirmé »** | **Annuler d'abord la validation du paiement**, puis modifier. |
| Initiale **non encore payée** | **Une rectificative est impossible** — passer par la modification. |
| Initiale **payée** | La **rectificative** devient possible. |

**Jamais modifiables** : la **période** et le **matricule fiscal**. En cas d'erreur de période, il
faut **supprimer** la déclaration tant qu'elle est à l'état « liquidée ».

---

## Garde-fous transversaux

**Ne jamais inventer un taux, un seuil ou une date.** Si l'information n'est pas dans
`references/` avec la marque **[C]**, le dire. Les zones d'ombre connues sont listées en fin de
chaque fichier de référence — les consulter avant d'affirmer.

**Ne pas confondre les plateformes.** e-t@srih porte la **déclaration et le paiement**.
**TEJ** (`tej.finances.gov.tn`) porte les **certificats de retenue à la source** et les échanges
de données. **e-Liasse** porte la **liasse fiscale**. Des blogs présentent e-Liasse comme la
plateforme unique de toutes les déclarations : c'est faux.

**« Extrait de rôle » n'existe pas en Tunisie.** Le terme est marocain / algérien / français.
L'équivalent est l'**attestation de régularisation de la situation fiscale** (art. 112 CDPF) ou
la consultation **e-Situation Fiscale**.

**Certificat bloqué après 3 codes PIN erronés.** Prévenir avant la troisième tentative.

**Mot de passe oublié : pas de libre-service, et compter 24h.** Il faut télécharger le
**formulaire de mise à jour de l'adhésion** et le déposer auprès de la structure de contrôle
(DGE, Direction des Moyennes Entreprises ou bureau territorial), qui attribue de nouveaux mots de
passe. Et **les mots de passe ne fonctionnent que le jour suivant leur attribution** — un client
bloqué la veille d'une échéance ne pourra pas déposer à temps. Le dire tout de suite.

**Le matricule se saisit zéro-padé.** Format : **8 caractères = 7 chiffres + 1 clé alphabétique
majuscule**, « à compléter par des zéros à gauche le cas échéant ». Sur l'écran de liquidation,
partie numérique et clé sont deux champs distincts.

**Le paiement reste à la charge du contribuable**, même s'il a mandaté un professionnel pour
télé-déclarer. Un cabinet ne paie pour son client que si le mandat couvre explicitement
« liquidation **et** paiement ».

**Pénalités de retard** (CDPF, lu en source primaire) : **1,25 %/mois** si paiement spontané
(art. 81) · **+ 3 % fixe** si le retard dépasse **60 jours** · **2,25 %/mois** si le retard est
constaté après contrôle fiscal (art. 82) · **1 %** des revenus exonérés ou à retenue libératoire
non déclarés (art. 85) · **minimum 10 dinars**, dû même sans impôt exigible (art. 86).
Le « 3 % » est une pénalité **fixe**, pas un taux mensuel — c'est l'erreur la plus répandue.

**Sanction du dépôt hors télédéclaration** (art. 81 bis CDPF) : **0,1 % du principal de l'impôt
exigible, minimum 200 DT, maximum 2 000 DT**, par déclaration. Elle **s'ajoute** aux pénalités de
retard, elle ne s'y substitue pas.

**TVA** : **19 %** de droit commun · **13 %** · **7 %** (tableau B). Retenue à la source de TVA de
**25 %** opérée par l'État et le secteur public sur les achats **≥ 1 000 D TTC** (art. 19 bis du
code TVA) — à ne pas confondre avec la retenue d'IRPP/IS.

**Anticiper les échéances.** La DGI rappelle dans chaque communiqué que la date annoncée est le
**dernier jour du délai légal, pas le seul jour de dépôt** — la saturation du système les jours
d'échéance est réelle et documentée.

---

## Assistance

| Canal | Coordonnée |
|---|---|
| **C.I.F.D** — Centre d'Information Fiscale à Distance | **81 100 400** |
| E-mail DGI | `contact.dgi@finances.gov.tn` |
| Téléphone DGI | **71 908 032** |
| Support TunTrust (certificats) | `tuntrust@tuntrust.tn` |

---

## Fichiers de référence

| Fichier | Contenu | Quand le lire |
|---|---|---|
| **`references/guide-officiel-dgi.md`** | **SOURCE PRIMAIRE LUE** — guide officiel DGI, 52 p. Cadre juridique, adhésion, écrans de liquidation de chaque déclaration, TCL/TH/TFP, états, rectification, téléliquidation. **Prime sur toutes les autres références.** | **En premier**, pour toute question de procédure |
| **`references/code-irpp-is.md`** | **SOURCE PRIMAIRE LUE** — Code IRPP/IS, édition intégrant la LF 2026. Articles **44** (barème IRPP, minimum d'impôt, plus-values), **44 bis-quinquies** (forfait et forfait optionnel), **49** (taux d'IS, minimum), **51** (acomptes). **Fait foi sur les taux.** | **Avant tout chiffrage** d'IS, d'IRPP, de forfait ou d'acompte |
| **`references/code-tva-et-cdpf.md`** | **SOURCES PRIMAIRES LUES** — Code TVA 2026 (taux 19/13/7, retenue de TVA de 25 %, régime suspensif, restitution) et CDPF 2026 (**pénalités art. 81, 81 bis, 82, 85, 86**). **Fait foi sur les pénalités et les taux de TVA.** | Avant d'annoncer une **pénalité** ou un **taux de TVA** |
| **`references/fiscalite-locale-et-lois-de-finances.md`** | **SOURCES PRIMAIRES LUES** — Code de la fiscalité locale (**TCL** art. 37-38 : assiette, taux, option 25 %, minimum TIB ; **droit de licence** art. 61-63) et LF 2025 (art. 36-37). | Avant de chiffrer la **TCL** ou le **droit de licence** |
| `references/ui-observee.md` | Écrans, URLs et libellés **observés directement** sur captures 2026. Complète le guide pour les écrans postérieurs à 2020. | Avant tout pilotage Chrome |
| **`references/retenue-a-la-source.md`** | **SOURCE PRIMAIRE LUE** — article 52 du code IRPP/IS : tous les taux de RS, la grille 1,5/1/0,5 %, le seuil de 1 000 D **TVA comprise**, les conditions de forme. **Fait foi sur la retenue à la source.** | Dès qu'une **retenue à la source** est en jeu |
| `references/declaration-mensuelle.md` | DMI : rubriques, TVA, TFP, FOPROLOS, TCL, timbre, crédit de TVA, workflow de saisie. ⚠️ Ses **taux de RS sont obsolètes** — voir la ligne ci-dessus | Calcul ou contrôle d'une mensuelle |
| `references/declarations-annuelles.md` | IS, IRPP, acomptes, employeur (7 annexes), Art. 43 LF 2025, CbCR, impôt libératoire, e-Liasse, calendrier annuel | Toute déclaration non mensuelle |
| `references/calendrier-et-penalites.md` | Délais par catégorie, règle de report, calendrier 2026 réel, pénalités, amnistie 2026 | Question d'échéance ou de retard |
| `references/plateformes-et-acces.md` | Portail, domaines, DIGIGO vs clé USB, adhésion, matricule fiscal, mandatement, dépannage | Question d'accès ou d'authentification |
| `references/telepaiement-faq-ecosysteme.md` | Moyens de paiement, TEJ, attestations, FAQ, éditeurs et sources pro | Paiement, attestation, choix d'outil |
| `references/pdf-officiels-niveau-de-preuve.md` | Ce qui a été lu vs seulement résumé ; piège Jibaya'tic ; format EMPCCA reconstruit | Avant de citer un document comme officiel |
| `references/empcca/` | Directives officielles lues + reconstruction recoupée du format de fichier employeur | Génération d'un fichier de déclaration employeur |

**Hiérarchie de fiabilité des sources** : textes officiels et notes communes DGI >
`profiscal.com` / `jurisitetunisie.com` > cabinets d'expertise comptable > blogs d'éditeurs de
logiciels. Ces derniers sont utiles pour la pratique mais se contredisent sur les taux.
