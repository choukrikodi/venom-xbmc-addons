# Plateformes, accès et authentification

> Collecte août 2026, **WebSearch uniquement** — WebFetch/curl 403 sur tous les domaines
> tunisiens. **Aucun document source primaire n'a été lu.**

Légende : **[C]** confirmé · **[P]** probable / source unique · **[?]** introuvable · **[!]** contradiction.

---

## 0. ⚠️ Piège majeur : deux « Jibaya » distincts

**[C]** Deux systèmes homonymes coexistent au Maghreb :

| | **Tunisie** | **Algérie** |
|---|---|---|
| Nom | **e-Jibaya / جباية** | **Jibaya'tic** |
| Portail | `jibaya.tn` | `mfdgi.gov.dz/portailpublic/` |
| Déclaration phare | Déclaration mensuelle (DM), acomptes | **G50** |

**Toute source parlant de « G50 », de « wilayas » ou de `mfdgi.gov.dz` est ALGÉRIENNE et hors
périmètre.** Le guide « GUIDE DES SERVICES EN LIGNE DU PORTAIL "JIBAYA'TIC" » est le guide de
la **DGI algérienne** (`mfdgi.gov.dz/portailpublic/assets/docs/guide_teledeclaration.pdf`).

⚠️ Le PDF `acfacademie.com/wp-content/uploads/2026/03/Guide_des-services-en-ligne_Jibayatic_2025.pdf`
porte **exactement le même titre** → **[P] fortement probable qu'il s'agisse d'une republication
du guide algérien**. **Ne jamais le citer comme source tunisienne.**

**Terminologie tunisienne correcte** : « système de la **télé-déclaration et du télépaiement** »
(e-t@srih) · « **télé-liquidation** » · portail **jibaya.tn** / e-jibaya · plateformes **TEJ** et
**e-Liasse**.

---

## 1. Le portail jibaya.tn

### 1.1 Filiation [C]

`jibaya.tn` **remplace** `impots.finances.gov.tn`. La DGI a annoncé que l'ancien site n'est plus
fonctionnel. Nouveautés : **médiathèque** et **revue de presse**.

⚠️ En pratique, de très nombreuses pages de `impots.finances.gov.tn` **restent indexées et
accessibles**. Traiter l'ancien domaine comme **archive encore consultable**, mais pointer
prioritairement vers `jibaya.tn`.

### 1.2 URLs de rubriques confirmées [C]

| Rubrique | URL |
|---|---|
| Accueil FR / AR | `https://jibaya.tn/` · `https://jibaya.tn/ar/` |
| Agenda (échéances) | `https://jibaya.tn/agenda/` |
| Contact | `https://jibaya.tn/contact/` |
| Services en ligne | `https://jibaya.tn/services-en-ligne/` |
| La DGI | `https://jibaya.tn/dgi/` |
| Formulaires à télécharger | `https://jibaya.tn/formulaires-a-telecharger/` |
| Blog — Télédéclaration | `https://jibaya.tn/blog/la-tele-declaration-fiscale/` |
| Blog — Téléliquidation | `https://jibaya.tn/blog/la-tele-liquidation-fiscale/` |
| Blog — e-Situation fiscale | `https://jibaya.tn/blog/e-situation-fiscale/` |
| Blog — Plateforme TEJ | `https://jibaya.tn/blog/plateforme-de-transfert-et-echange-des-donnees-fiscales-tej/` |
| C.I.F.D | `https://jibaya.tn/centre-dinformation-fiscale-a-distance-c-i-f-d/` |

Le site tourne sous **WordPress** (`/wp-content/uploads/`). [C]

### 1.3 Contenu des rubriques

- **Services en ligne** [C] : télédéclaration, téléliquidation, **TEJ**, **e-Sit~Fisc**, et le
  système national de caisse enregistreuse électronique **NACEF**.
- **Agenda** [C] : calendrier des délais de dépôt.
- **Contact** [C] : coordonnées des structures DGI.
- **Médiathèque + revue de presse** [C] : nouveautés vs. ancien site.
- **Documentation fiscale** [P] — site dédié : `https://doc-fiscale.finances.gov.tn/`

**[?] L'arborescence exacte du menu principal (libellés, ordre, sous-menus) n'a pas pu être
vérifiée** (403). Ne pas figer dans le skill des libellés de menu non observés.
→ Se référer à `ui-observee.md`, seul relevé visuel fiable.

### 1.4 Applications mobiles

- **TUNIMPOT** [C] : simulateur de calcul des droits, impôts et taxes. Gratuit, Google Play +
  App Store, **utilisable hors connexion**. Développé par des cadres de la DGI et de la DG de la
  Comptabilité Publique.
- Application **« Jibaya »** (juillet 2025) [C] : dédiée à la **déclaration et au transfert au
  profit de l'État des avoirs non réclamés**. **À ne pas confondre avec le portail.**
- ⚠️ Un produit logiciel privé homonyme **« JIBAYA » d'Arabsoft** existe (`arabsoft.com.tn/jibaya`).
- [P] L'existence d'une app mobile officielle DGI de télédéclaration n'est **pas** établie —
  aucune fiche Google Play / App Store vue. **Ne rien affirmer.**

---

## 2. Le système e-t@srih / `webdeclar`

### 2.1 Périmètre déclaratif [C]

- **DM** — déclaration mensuelle (**11 impôts** : RS, TFP, FOPROLOS, DC, TVA, autres taxes sur le
  CA, taxe sur les assurances, droit de timbre, TCL, TH, droit de licence)
- **AP** — acomptes provisionnels
- **IS** — impôt sur les sociétés · **IRPP** · avances des sociétés de personnes
- déclaration de la taxe pétrolière · déclaration des comptes inactifs

### 2.2 Cartographie des domaines [C]

Confirmée par relevé DNS public (dépôt GitHub `OpLumina/government-domains.txt`, `tn-part-1.csv`) :

| Domaine | IP | Rôle |
|---|---|---|
| `teledeclaration.finances.gov.tn` | 193.95.99.145 | Télédéclaration (accès historique / token) |
| `www.liasse-fiscale.finances.gov.tn` | 193.95.99.145 | Liasse fiscale |
| `teledecgo.finances.gov.tn` | 193.95.99.146 | **Télédéclaration via DIGIGO** |
| `tl.finances.gov.tn` | 193.95.99.146 | **Télé-liquidation** (sans certificat) |
| `authgo.finances.gov.tn` | 193.95.99.146 | [P] brique d'auth DIGIGO — **rôle non confirmé** |
| `tej.finances.gov.tn` | 41.225.7.188 | Plateforme TEJ |

Autre URL e-Liasse relevée : `https://liasse.finances.gov.tn/LiasseFiscale/index` [C]

### 2.3 Pages `webdeclar` observées [C]

```
https://teledecgo.finances.gov.tn/pls/webdeclar/identification
https://teledecgo.finances.gov.tn/pls/webdeclar/DIVERS_PROC.identification1
https://tl.finances.gov.tn/pls/webdeclar/identification
https://tl.finances.gov.tn/pls/webdeclar/DIVERS_PROC.identification1?lang=ar&app=&fin=
```

- Titre page d'entrée : « **Bienvenue au système de la télédéclaration d'impôts** » [C]
- Titre `DIVERS_PROC.identification1` : « **Identification du contribuable** » [C]
- Paramètres observés : `lang` (`ar`/`fr`), `app`, `fin` [C]
- [P] Le segment `/pls/` indique une application **Oracle PL/SQL Web Toolkit (mod_plsql)** :
  `webdeclar` = le DAD, `DIVERS_PROC` = le package, `identification1` / `CHOIXMENU` = les
  procédures. Inférence technique standard, non documentée par une source.
- **[?] `DIVERS_PROC.CHOIXMENU`** : **aucune source ne l'a confirmée** — mais elle est
  **directement observée sur la capture d'écran de l'utilisateur** (voir `ui-observee.md`),
  ce qui la valide en pratique.

### 2.4 ⚠️ Distinction capitale : télédéclaration ≠ téléliquidation [C]

| | **Télédéclaration + télépaiement** | **Téléliquidation** |
|---|---|---|
| Domaine | `teledeclaration.` / `teledecgo.finances.gov.tn` | `tl.finances.gov.tn` |
| Certificat électronique | **Obligatoire** | **NON requis** (code + mot de passe) |
| Paiement | **En ligne**, prélèvement sur compte | **Le lendemain**, à n'importe quelle **Recette des Finances** (espèces, chèque, carte) |
| Public | Adhérents obligatoires ou volontaires | Contribuables **non soumis obligatoirement** |

C'est la confusion la plus fréquente. Un contribuable non astreint peut parfaitement liquider en
ligne **sans acheter de certificat** et payer au guichet.

---

## 3. Les deux modes d'authentification

### 3.1 Principe [C]

L'accès est **subordonné à l'acquisition d'un certificat électronique client** auprès de
l'**ANCE / TunTrust**. Deux types acceptés :
1. un certificat **virtuel DIGIGO** (signature à distance) ;
2. un **token physique sur clé USB** (gamme **ID-Trust**).

### 3.2 DIGIGO — signature à distance [C]

- Identité électronique permettant de **s'authentifier et signer via son mobile**.
- La **clé privée est hébergée dans un HSM chez l'ANCE** ; le téléphone est le **second facteur**
  (**OTP par SMS ou e-mail**) à chaque authentification et à chaque signature.
- Lancé au **3e Tunisia Digital Summit, le 2 avril 2019**.
- Usages : télédéclaration, **déclaration CNSS**, marchés publics **TUNEPS**, téléliquidation.

**Portails :**

| Usage | URL |
|---|---|
| Portail DIGIGO / recharge | `https://digigo.tuntrust.tn` |
| Inscription Digigo Avancé | `https://digigo.tuntrust.tn/pub/registerAdvance` |
| Documentation ANCE | `https://digigo.tuntrust.tn/pub/documentation` |
| Inscription Digigo-Poste | `https://digigo.tuntrust.tn/pub/poste/registerPoste` |
| **Portail dédié impôts** | `https://impots.tuntrust.tn` (`/loginOtp`) |
| Tokens USB | `https://ecert.tuntrust.tn` [P] |

**Tarifs et validité :**

| Produit | Validité | Prix | Statut |
|---|---|---|---|
| Digigo Avancé (via `impots.tuntrust.tn`) | 1 mois | Gratuit | ⚠️ **remplacé par Digigo-poste au 01/01/2024** |
| Digigo Qualifié | 2 ans | — | Actif |
| DIGIGO mobile (avant 2024) | 1 an | 10 DT HT | Obsolète |
| DIGIGO mobile (depuis 01/01/2024) | **2 ans** | **50 DT HT** | Actif |
| Digigo-poste | **2 ans** | **50 DT HT** | Actif depuis 01/01/2024 |

> **[!] À vérifier** : l'offre « Digigo Avancé gratuit 1 mois » est très largement citée, mais une
> source TunTrust la dit **remplacée par Digigo-poste au 01/01/2024**. **Ne pas affirmer qu'elle
> est toujours disponible** sans revérification sur `tuntrust.tn`.

### 3.3 Token USB — ID-Trust [C]

- « Carte d'identité numérique sur Internet » : certificat d'**authentification et de signature**
  sur token physique.
- **Validité 2 ans · Prix 350 DT HT** (180 € clients étrangers).
- **Procédure d'utilisation** (guide TunTrust) : insérer le token → fenêtre d'exécution
  automatique → terminer l'installation → ouvrir le **gestionnaire de token TunTrust** →
  « connexion » → saisir le **code PIN** → aller sur le site des impôts, « services en ligne » →
  « télé-déclaration fiscale » → **sélectionner son certificat** → OK → écran d'identification.
- ⚠️ **3 saisies erronées du code PIN ⇒ certificat bloqué.** [C]

**Ressources :**
- Guide token + accès télédéclaration :
  `https://www.tuntrust.tn/sites/default/files/Guides/UtilisationDuTokenTuntrustetaccesauSiteDelaTeledeclarationFiscale.pdf`
- Pilotes et guides d'installation : `https://www.tuntrust.tn/fr/taxonomy/term/58`
- Pilote Token sur Windows : `https://crl.tuntrust.tn/fr/node/353`
- CGU ID-Trust & DigiGO : `https://www.tuntrust.tn/sites/default/files/DOCUMENTS/cgu/ConditionsGeneralesdUtilisation.pdf`
- FAQ TunTrust : `https://www.tuntrust.tn/index.php/fr/faq`

### 3.4 Où obtenir un certificat [C]

- Page officielle : `https://www.tuntrust.tn/fr/content/ou-obtenir-mon-certificat`
- **Autorités d'Enregistrement Déléguées (AED)** : `https://www.tuntrust.tn/fr/content/autorites-denregistrement-deleguees`
- **Vidéo-identification** disponible → **plus besoin de se déplacer**.
- **Vneuron / kyc.tn** est un opérateur DigiGO reconnu par l'ANCE (`https://kyc.tn/`).
- Contact : **tuntrust@tuntrust.tn**
- En cas de **révocation**, il faut soumettre une **nouvelle demande** ; procédure de
  renouvellement avant expiration **[?] non documentée**.

### 3.5 [?] Libellés des autorités de certification

Les chaînes **« Citizen CA »** et **« TnTrust CA - QSign1 »** observées dans le sélecteur de
certificat (voir `ui-observee.md`) **n'ont été confirmées par aucune source web**. Elles sont
plausibles (CN des AC intermédiaires) et **directement observées sur capture**, mais leur
orthographe exacte reste à confirmer. Pistes : `crl.tuntrust.tn`, `crl.certification.tn`.

---

## 4. Procédure d'adhésion

### 4.1 Voie guichet [C]

Le contribuable dépose un **« formulaire d'adhésion »** auprès de la structure de contrôle des
impôts compétente : **Direction des Grandes Entreprises (DGE)** ou **bureau de contrôle des impôts
territorialement compétent**.

**Composition du dossier :**
1. le **formulaire / demande d'adhésion** ;
2. **une ou plusieurs autorisations de prélèvement** sur comptes bancaires et/ou postaux, remplies,
   **signées par le contribuable et visées par la banque ou l'établissement postal**.

**Suite :** la structure attribue **un ou deux mots de passe selon le choix du contribuable**
(schéma à deux mots de passe = séparation saisie / validation). **Dès le premier accès, l'adhérent
est invité à modifier le mot de passe initial.**

**Formulaires :**

| Document | URL |
|---|---|
| Demande d'adhésion (FR) | `https://www.finances.gov.tn/fr/document/demande-dadhesion-la-tele-declaration` |
| Demande d'adhésion (AR) | `https://www.finances.gov.tn/ar/document/mtlb-alankhrat-fy-mnzwmt-altsryh-wdf-alada-n-bd` |
| Autorisation de prélèvement | `https://www.finances.gov.tn/fr/document/autorisation-de-prelevement-dun-compte-courant` |
| **Mise à jour de l'adhésion** | `https://www.finances.gov.tn/fr/document/demande-de-mise-jour-de-ladhesion-la-teledeclaration` |
| Fiche procédure Idaraty | `https://idaraty.tn/fr/procedures/tele-declaration-fiscale` |

### 4.2 Voie en ligne [C]

L'adhésion peut se faire **entièrement en ligne**, moyennant un certificat **DIGIGO** obtenu à
distance. Séquence documentée (guide d'adhésion, oct. 2020) :
1. **Acquérir en ligne** un certificat DIGIGO sur `https://impots.tuntrust.tn/`
2. **Accomplir les formalités d'adhésion** en ligne
3. **Déposer les déclarations** : liquidation et paiement en ligne

Guide : `https://jibaya.tn/wp-content/uploads/2023/08/guide-adhesion-en-ligne-min.pdf`

### 4.3 Fonctionnalités de l'espace adhérent [C]

- **Modification du mot de passe** (imposée à la première connexion)
- **Modification de l'adresse e-mail**
- **Annulation de l'autorisation de prélèvement**
- **Résiliation de l'adhésion** — ⚠️ **réservée aux adhérents volontaires** (pas aux assujettis
  obligatoires)
- **Télédéclaration** : liquidation et paiement

### 4.4 [?] Délai d'activation

**Aucune source ne donne de délai** entre dépôt du dossier et disponibilité du compte, ni de
mécanisme de notification. **Ne rien inventer.**

### 4.5 Base légale de l'obligation [C]

- **Arrêté du ministre des Finances du 22 mai 2020**, JORT du 29 mai 2020.
- Seuil : **CA annuel brut ≥ 100 000 DT**, régime réel.
- Applicable aux déclarations déposées **à compter du 1er juillet 2020** (contre 500 000 DT avant).
- [P] Une révision ultérieure du seuil est évoquée (Deloitte/Tustex) — **non vérifiée**.

---

## 5. L'identifiant fiscal (matricule fiscal)

### 5.1 Structure [C]

Format complet : **`NNNNNNN / C / T / V / EEE`** — **13 caractères**, 5 segments.

| Segment | Long. | Contenu |
|---|---|---|
| Identifiant | 7 chiffres | Numéro unique attribué par l'administration |
| **Clé de contrôle** | 1 lettre | Calculée depuis l'identifiant. **Toutes les lettres sauf I, O et U** |
| Code TVA | 1 lettre | `A` assujetti obligatoire · `B` optionnel · `P` partiel · `F` forfaitaire · `N` non assujetti |
| Code catégorie | 1 lettre | `M` personne morale · `C` PP commerçant/industriel · `P` PP profession libérale · `N` employeur non soumis |
| N° établissement | 3 chiffres | `000` = siège |

Le « **7 chiffres + lettre clé** » (ex. `1217900L`, `1029364K`) est l'**identifiant court**, celui
qui sert de login sur le portail.

Vérificateur en ligne : `https://finco.tn/en/outils/verificateur-matricule-fiscal`

### 5.2 [!] Contradiction sur le format

Le blog DigiGO/Vneuron indique que le matricule à ajouter dans l'espace DigiGO doit comporter
**« 8 chiffres et une lettre »** — ce qui **contredit** le format 7 + clé documenté partout
ailleurs. Deux hypothèses : (a) erreur du blog ; (b) le champ DigiGO attend un format zéro-préfixé
à 8 positions. **À vérifier avant d'implémenter toute validation de format.**

---

## 6. « Ma propre déclaration » vs « Déclaration pour une tierce personne »

**[P]** D'après le guide d'adhésion en ligne (formulation indirecte, PDF non lu) :

| Option | Périmètre |
|---|---|
| **Ma propre déclaration** | Déclarations de **la société rattachée à votre certificat en tant que collaborateur** |
| **Déclaration pour une tierce personne** | Déclarations des **sociétés clientes ajoutées à votre certificat** |

**Mécanique côté DIGIGO [C]** (cabinet / gérant de plusieurs sociétés) :
- On peut associer **autant de matricules fiscaux que souhaité** à un même certificat DigiGO
  professionnel.
- On peut **déléguer** à un collaborateur disposant de son propre DigiGO le droit de déclarer pour
  une organisation donnée.
- Chemin : espace DigiGO → **« Gestion d'entreprise »** → formulaire d'ajout du matricule.
- **Rôle du représentant** dans une liste déroulante : **Représentant légal / Collaborateur /
  Administrateur**.

Les **professionnels** — comptables, conseillers fiscaux, bureaux d'encadrement et d'assistance
fiscale — peuvent utiliser ces services **pour le compte de leurs clients**. [C]

**[?]** Les **conditions juridiques du mandat côté DGI** (pièce à produire, forme, opposabilité,
durée) ne sont **pas documentées**.

---

## 7. Mandatement et autorisations de prélèvement

### 7.1 Gestion du mandatement [C]

Le contribuable choisit entre :
1. mandater un professionnel **pour la LIQUIDATION seule** ;
2. mandater un professionnel **pour la LIQUIDATION ET LE PAIEMENT**.

**Professionnels éligibles** : comptable, **expert-comptable**, **conseiller fiscal**,
**commissaire aux comptes**, **bureau d'encadrement et d'assistance fiscale**.

**La saisie de l'adresse e-mail du mandataire est obligatoire**, pour le notifier de :
l'opération de mandatement · la **résiliation** · l'**ajout d'un nouveau mandataire** ·
l'**ajout ou la suppression d'un service**.

→ Pour un cabinet : le mandatement est **granulaire par service** et **révocable**, et chaque
mouvement déclenche une notification e-mail.

**Mécanisme technique [C]** : envoi d'**ordres de paiement** à la **Banque Centrale** / au système
de compensation ; la **réponse (acceptation/rejet) met à jour le statut de la déclaration**.

### 7.2 Autorisations de prélèvement [C]

- **Objet** : permettre le télépaiement par prélèvement sur comptes bancaires et postaux.
- **Constitution** : autorisation **signée par le contribuable** et **visée par la banque ou
  l'établissement postal**, déposée au bureau de contrôle. **Plusieurs comptes possibles.**
- **Gestion en ligne** : l'**annulation** se fait en **sélectionnant le RIB puis « supprimer »**.

**[?]** Non documenté : délai de prise en compte d'un nouveau RIB, plafonds, comportement en cas de
provision insuffisante, **possibilité d'ajouter un RIB en ligne** (seule la suppression est décrite).

---

## 8. Dépannage et assistance

### 8.1 Avertissement de sécurité du navigateur [C]

Recommandation officielle DGI (page « Recommandation pour accéder au site ») :
- **Internet Explorer** : « Le certificat de sécurité de ce site Web présente un problème » →
  cliquer **« Poursuivre avec ce site Web »**.
- **Google Chrome** : « Votre connexion n'est pas privée » → **« Paramètres avancés »** puis
  **« Continuer vers le site »**.

> ⚠️ Recommandation datant de l'ère Internet Explorer. La citer comme **procédure officielle
> historique**, jamais comme bonne pratique de sécurité actuelle.

### 8.2 Erreur « contribuable non adhérent » [C]

Cause : matricule non enregistré comme adhérent. Résolution : déposer le formulaire d'adhésion à la
DGE ou au bureau de contrôle, ou adhérer en ligne.

### 8.3 Mot de passe oublié / compte bloqué

[C] Le mot de passe est **attribué par la structure de contrôle** et modifiable après la première
connexion. [P] Par conséquent le point de contact pour une réinitialisation est le **bureau de
contrôle des impôts / la DGE de rattachement**. **[?] Aucune source ne décrit une procédure
formelle de réinitialisation ni de canal libre-service « mot de passe oublié ».**

### 8.4 [?] Erreurs Java / applet

**Aucune source** ne documente d'erreur Java/JRE/applet. Le seul volet « environnement navigateur »
documenté est l'avertissement TLS (§8.1) et le pilote de token (§3.3). **Ne pas affirmer que Java
est requis.**

### 8.5 Contacts

| Canal | Coordonnée | Statut |
|---|---|---|
| **C.I.F.D — Centre d'Information Fiscale à Distance** | **81 100 400** | [C] |
| E-mail DGI | `contact.dgi@finances.gov.tn` | [C] |
| Téléphone DGI | **71 908 032** | [C] |
| Adresse DGI | 25 Avenue Kheireddine Pacha, 1037 Montplaisir, Tunis | [C] |
| Numéro vert | 80 104 848 | [P] |
| Support TunTrust | `tuntrust@tuntrust.tn` | [C] |

**[!]** Deux adresses circulent — **93 av. Hédi Chaker, Tunis 1002** et **25 av. Kheireddine
Pacha, Montplaisir 1073** — sans que les sources précisent clairement laquelle est la **DGI** et
laquelle la **DGE**.

**Activité du C.I.F.D (2026)** [C] : +21,72 % d'appels depuis début 2026, taux de réponse 99,9 %.
Janvier→février 2026 : **5 911 appels**, **7 432 questions**. Sujets dominants : **TEJ (24,30 %)**,
**facturation électronique (11,23 %)**, **impôt sur le revenu (11,03 %)**.

### 8.6 Problèmes systémiques documentés [C]

Communiqué de l'**ATGF (Association Tunisienne pour la Gouvernance Fiscale)** :
- supports électroniques non fournis par le Ministère → coût supporté par les contribuables ;
- **indisponibilité des certificats de l'ANCE** (communiqué du 7 août 2020) empêchant le respect
  des obligations ;
- demande de ne pas pénaliser à tort les contribuables **non soumis au régime réel** et de
  **rembourser les pénalités indûment payées**.

Saturation réelle observée les jours d'échéance.

---

## 9. Services connexes de l'écosystème [C]

- **TEJ** (`tej.finances.gov.tn`) — Transfert et Échange de données fiscales : certificats de
  retenue à la source, liasse fiscale, dossier fiscal, prix de transfert.
  **Obligatoire pour toutes les entreprises au 1er janvier 2026.** Sanction : **amende de 30 % du
  montant de la retenue, minimum 50 DT par certificat**.
- **e-Sit~Fisc** — consultation de la situation fiscale des fournisseurs par les établissements et
  entreprises publics (art. 62 LF 2014).
- **NACEF** — système national de caisse enregistreuse électronique.
- **Liasse fiscale** — `liasse.finances.gov.tn` / `www.liasse-fiscale.finances.gov.tn`
- **Documentation fiscale** — `https://doc-fiscale.finances.gov.tn/`
- **CNSS** (autre administration, même certificat) — `https://services.cnss.tn/dspc/`

---

## 10. Zones d'ombre

1. **`DIVERS_PROC.CHOIXMENU`** — non confirmée par le web (mais **observée sur capture**).
2. **`authgo.finances.gov.tn`** — domaine réel, **rôle non documenté**.
3. **Libellés des AC** (« Citizen CA », « TnTrust CA - QSign1 ») — aucune source web.
4. **Digigo Avancé gratuit 1 mois** — statut actuel indéterminé.
5. **Format du matricule dans DigiGO** — 8 chiffres vs 7 + clé. Contradiction non tranchée.
6. **Délai d'activation d'une adhésion** — aucun chiffre.
7. **Réinitialisation de mot de passe / déblocage** — procédure non documentée.
8. **Arborescence des menus de jibaya.tn** — non observée (403).
9. **Cadre juridique du mandat DGI** — non documenté.
10. **Ajout d'un RIB en ligne** — non documenté (seule la suppression l'est).
11. **Révision post-2020 du seuil de 100 000 DT** — évoquée, non vérifiée.

---

## 11. Documents prioritaires à récupérer hors sandbox

Ces trois documents lèveraient l'essentiel des zones d'ombre 1, 6, 7, 9, 10 :

1. `https://jibaya.tn/wp-content/uploads/2023/08/guide-adhesion-en-ligne-min.pdf`
   — **Guide d'adhésion en ligne**
2. `https://jibaya.tn/wp-content/uploads/2023/08/sodapdf-compressed-1-1-1.pdf`
   — **Guide de la télé-déclaration fiscale** (le vrai guide tunisien)
3. `https://www.tuntrust.tn/sites/default/files/Guides/UtilisationDuTokenTuntrustetaccesauSiteDelaTeledeclarationFiscale.pdf`
   — **Guide token TunTrust**
