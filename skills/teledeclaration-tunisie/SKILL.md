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

- **Base de la retenue à la source** : les sources divergent entre **HT** et **TTC**. La source
  doctrinale la plus fiable (profiscal) retient le **montant TTC, TVA comprise**. Les blogs
  d'éditeurs qui annoncent « HT » sont probablement dans l'erreur. Signaler cette divergence
  quand elle a un impact chiffré.
- **Taux d'IS** : le barème progressif par chiffre d'affaires (15 / 20 / 25 %) coexiste avec des
  taux sectoriels (10 / 35 / 40 %), et des guides présentent encore 20 % comme « taux standard ».
  L'articulation exacte n'est pas établie et la date d'entrée en vigueur du barème est
  contradictoire (2024 ou 2025). **Faire confirmer avant de chiffrer un IS.**
- **Barème IRPP** : les taux (0/15/25/30/33/36/38/40 %) et les bornes extrêmes (5 000 et
  70 000 DT) sont confirmés, mais **les bornes intermédiaires ne le sont pas**. Ne pas les
  appliquer sans vérification.
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

Le télépaiement génère un **ordre de prélèvement** envoyé à la Banque Centrale / au système de
télécompensation. La réponse (acceptation ou **rejet**) met à jour le statut de la déclaration.

**Une déclaration rejetée doit être liquidée de nouveau et supporte les pénalités de retard.**

Autrement dit : un rejet bancaire silencieux transforme une déclaration déposée dans les temps en
déclaration en retard. **La validation n'est pas la fin de l'opération.** Toujours revenir
vérifier le statut, et le dire à l'utilisateur s'il s'apprête à fermer le navigateur.

Fonctions disponibles : consulter les déclarations antérieures et leur situation · annuler un
ordre de paiement · consulter le détail d'un paiement rejeté · imprimer les déclarations payées.

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

**Mot de passe oublié : pas de libre-service.** Le mot de passe est attribué par le bureau de
contrôle des impôts ou la DGE de rattachement, et c'est là qu'il faut s'adresser. Aucune
procédure de réinitialisation en ligne n'est documentée.

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
| `references/ui-observee.md` | Écrans, URLs et libellés **observés directement**. Fait autorité sur toute doc externe. | Avant tout pilotage Chrome |
| `references/declaration-mensuelle.md` | DMI : rubriques, taux de retenue à la source, TVA, TFP, FOPROLOS, TCL, timbre, crédit de TVA, workflow de saisie | Calcul ou contrôle d'une mensuelle |
| `references/declarations-annuelles.md` | IS, IRPP, acomptes, employeur (7 annexes), Art. 43 LF 2025, CbCR, impôt libératoire, e-Liasse, calendrier annuel | Toute déclaration non mensuelle |
| `references/calendrier-et-penalites.md` | Délais par catégorie, règle de report, calendrier 2026 réel, pénalités, amnistie 2026 | Question d'échéance ou de retard |
| `references/plateformes-et-acces.md` | Portail, domaines, DIGIGO vs clé USB, adhésion, matricule fiscal, mandatement, dépannage | Question d'accès ou d'authentification |
| `references/telepaiement-faq-ecosysteme.md` | Moyens de paiement, TEJ, attestations, FAQ, éditeurs et sources pro | Paiement, attestation, choix d'outil |
| `references/pdf-officiels-niveau-de-preuve.md` | Ce qui a été lu vs seulement résumé ; piège Jibaya'tic ; format EMPCCA reconstruit | Avant de citer un document comme officiel |
| `references/empcca/` | Directives officielles lues + reconstruction recoupée du format de fichier employeur | Génération d'un fichier de déclaration employeur |

**Hiérarchie de fiabilité des sources** : textes officiels et notes communes DGI >
`profiscal.com` / `jurisitetunisie.com` > cabinets d'expertise comptable > blogs d'éditeurs de
logiciels. Ces derniers sont utiles pour la pratique mais se contredisent sur les taux.
