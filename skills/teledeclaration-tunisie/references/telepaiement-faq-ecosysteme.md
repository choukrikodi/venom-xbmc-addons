# Télépaiement, attestations, FAQ et écosystème professionnel

> Collecte août 2026, **WebSearch uniquement**. Légende : **[C]** confirmé · **[P]** probable ·
> **[?]** introuvable · **[!]** contradiction.

---

## 1. Le télépaiement

### 1.1 Moyens de paiement

| Moyen | Statut | Détail |
|---|---|---|
| **Prélèvement sur compte courant bancaire** | [C] | Voie nominale. Nécessite une autorisation de prélèvement. |
| **Prélèvement sur CCP** | [C] | Même formalisme, visa du **bureau postal**. |
| Espèces / chèque / carte au guichet | [C] | Uniquement en **télé-liquidation** : paiement à la recette des finances **à partir du lendemain**. |
| Carte bancaire en ligne | [P] | Cité par les blogs, **non retrouvé sur une page DGI**. |
| e-Dinar / e-DinarPost | [P] | Le e-Dinar permet officiellement « le paiement des achats **et des taxes** » — rattachement explicite à e-t@srih **non confirmé**. |
| Virement bancaire/postal | [P] | ⚠️ Le libellé trouvé mêle DGI et **CNSS** — à vérifier avant usage. |
| **Plafond de paiement** | **[?]** | **Aucune information. Ne rien affirmer.** |

### 1.2 Chaîne technique [C]

1. Saisie et **validation** de la déclaration en ligne.
2. Génération d'un **ordre de paiement** sur le compte objet de l'autorisation de prélèvement.
3. Envoi vers la **Banque Centrale de Tunisie / système de télécompensation**, en **temps réel ou
   en mode batch**.
4. **Retour de réponse** (acceptation ou rejet) → **mise à jour automatique du statut** de la
   déclaration (« payée » / « rejetée »).
5. ⚠️ **Déclaration rejetée ⇒ elle doit être liquidée de nouveau et supporte les pénalités de
   retard.**

> Le point 5 est le piège opérationnel majeur du télépaiement : un rejet bancaire silencieux
> transforme une déclaration déposée à temps en déclaration en retard. **Toujours vérifier le
> statut après paiement**, ne jamais considérer la validation comme la fin de l'opération.

### 1.3 Quittance, consultation, annulation [C]

- Le système permet de **consulter toutes les déclarations antérieures**, suivre leur situation, et
  **annuler les ordres de paiement**.
- Fonction en arabe : « **الاطلاع و طباعة التصاريح التي تم خلاصها** » = **consulter et imprimer les
  déclarations payées** → c'est le mécanisme d'obtention du justificatif / quittance.
- En cas de rejet bancaire, le détail du paiement reste consultable et une autre déclaration peut
  être déposée.
- Fonctions annexes : « **mettre à jour, ajouter ou annuler** les impôts et taxes déclarés ».
- **[?] Délai d'imputation exact sur le compte** : non documenté. Seule certitude : **J+1** pour le
  paiement au guichet en télé-liquidation.

### 1.4 Autorisation de prélèvement

**Formulaire officiel** [C] : « Autorisation de prélèvement d'un compte courant »
→ `https://www.finances.gov.tn/fr/document/autorisation-de-prelevement-dun-compte-courant`

**Circuit** [C] :
1. Dépôt auprès de la **structure de contrôle des impôts compétente** (DGE ou bureau territorial) :
   **demande d'adhésion** + **une ou plusieurs autorisations de prélèvement** (comptes bancaires
   ou postaux, plusieurs possibles).
2. L'autorisation doit être **remplie, signée par le contribuable et VISÉE par l'établissement
   bancaire ou postal**.
3. Dépôt de l'original visé au bureau de contrôle.

**[?] Délai de mise en service après dépôt : non trouvé.**

**Mots de passe** [C] : la structure remet **un ou deux mots de passe au choix** (schéma à deux
mots de passe = séparation saisie / validation), **modifiables après la première connexion**.

---

## 2. TEJ — certificats de retenue à la source [C]

**TEJ = plateforme de Transfert et Échange des données fiscales** — `tej.finances.gov.tn`

| Élément | Contenu |
|---|---|
| Institution | **Arrêté du ministre des Finances publié au JORT le 10 mai 2024** |
| Obligatoire depuis le **1er juin 2024** | Grandes et moyennes entreprises + professionnels comptables et fiscaux |
| Obligatoire depuis le **1er janvier 2025** | Tous les contribuables tenus de déclarer par moyens électroniques fiables |
| Depuis le **1er janvier 2026** [P] | Émission des certificats de RS **obligatoirement numérique** (salaires, RCM, loyers, honoraires…) |
| **Deux modes de production** | Saisie directe **ou** dépôt d'un **fichier XML** conforme au cahier des charges |
| **Sanction** | **30 % du montant de la retenue**, **minimum 50 DT par certificat** |
| Délai d'émission [P] | Au plus tard **à la fin du mois suivant** celui du paiement |
| Inscription | Préalable et unique. **Matricule fiscal** (7 chiffres + lettre clé) + **code établissement** (`000` = siège). **Code OTP** envoyé par SMS ou e-mail au **responsable légal** [P] |
| Évolution 2026 [P] | Les **déclarations annuelles** et la **déclaration sur les prix de transfert** passeraient **exclusivement** par TEJ |

Cahier des charges : `https://jibaya.tn/wp-content/uploads/2024/05/TEJ-CCT-RS-V2.pdf`
Nommage des fichiers : `matricule-exercice-mois-codeacte` (**0** = initiale, **1** = rectificative),
extension `.xml` obligatoire. [C]

Modèles de certificats :
- `https://www.finances.gov.tn/fr/document/certificat-de-retenue-dimpot-sur-le-revenu-ou-dimpot-sur-les-societes`
- `https://www.finances.gov.tn/fr/document/certificat-de-retenue-la-source-au-titre-de-la-tva-de-lir-et-de-lis-sur-les-marches`

---

## 3. Attestations et services connexes

### 3.1 e-Situation Fiscale / e-Sit~Fisc [C]
Permet aux **établissements publics à caractère administratif et entreprises publiques** de
**consulter et éditer en ligne la situation fiscale de leurs fournisseurs** (marchandises, services,
travaux, biens) — application de l'**article 62 de la loi de finances 2014**.
Objectif : dématérialiser les attestations de situation fiscale et accélérer le paiement des
fournisseurs.

### 3.2 Attestation de régularisation / d'exonération [C]
- Base : **article 112 du CDPF**.
- Demande selon **modèle établi par l'administration**, déposée au **service de contrôle des impôts
  compétent**. La situation fiscale doit être régularisée.
- Doctrine : **Note commune n° 14/2013** ; instruction DGI plus récente du **2 août 2024** [P].
- **Délai : 5 jours** à compter du dépôt du dossier complet [P].
- Pages : `https://www.finances.gov.tn/fr/certificats-et-attestations`

### 3.3 Quitus fiscal [C]
`https://www.finances.gov.tn/fr/document/demande-pour-lobtention-dun-quitus-fiscal`
Destiné notamment aux **étrangers résidents ou exerçant en Tunisie** : changement de résidence,
rapatriement d'effets/matériel, transfert de revenus ou bénéfices.

### 3.4 Attestation d'exonération de TVA [C]
Formulaire disponible ; **aucun circuit 100 % en ligne identifié**.

### 3.5 Changement de bureau de contrôle [C/P]
Fiche officielle : `http://www.registre.finances.gov.tn/detail.php?code=354`
Procédure [P] : si le nouveau siège relève d'un autre bureau (même tribunal), s'adresser à la
**recette des finances** pour demander le transfert du dossier fiscal, puis obtenir une **nouvelle
carte d'identification fiscale**.
Contexte : **16 centres régionaux de catégorie « A »** (Tunis 1/2/3, Ariana, Ben Arous, Manouba,
Bizerte, Nabeul, Sousse, Monastir, Sfax 1/2, Kairouan, Médenine, Mahdia, Gabès) + catégorie « B ».

### 3.6 ⚠️ « Extrait de rôle » — n'existe pas en Tunisie
**[?] Aucune occurrence tunisienne.** Ce terme est marocain / algérien / français. L'équivalent
fonctionnel tunisien est l'**attestation de régularisation de la situation fiscale** ou la
consultation **e-Situation Fiscale**. **Ne pas l'inventer dans le skill.**

---

## 4. FAQ et problèmes fréquents

| Problème | Résolution | Statut |
|---|---|---|
| Avertissement de certificat du site | IE : « Poursuivre avec ce site Web » · Chrome : « Paramètres avancés » → « Continuer vers le site » | [C] — **procédure officielle mais datée** |
| **3 codes PIN erronés** | **Certificat bloqué** | [C] |
| Certificat révoqué | **Nouvelle demande de certificat obligatoire** ; renouvellement avant expiration **[?] non documenté** | [C]/[?] |
| Déclaration rejetée (rejet bancaire) | Statut « rejetée » → **re-liquidation obligatoire** → **pénalités applicables** | [C] |
| Annulation d'un ordre de paiement | Possible depuis la consultation des déclarations | [C] |
| Modification d'une déclaration liquidée | Le guide DGI mentionne cette possibilité | [C] |
| **Rectificative après paiement effectif** | **[?] procédure non documentée** (pour TEJ : code acte `1` du nom de fichier = rectificative) | [?] |
| Changement d'adresse e-mail de l'entreprise | **[?] aucune source** | [?] |

### Problèmes systémiques documentés [C]
Communiqué de l'**ATGF (Association Tunisienne pour la Gouvernance Fiscale)** :
- supports électroniques non fournis par le Ministère → coût supporté par les contribuables ;
- **indisponibilité des certificats de l'ANCE** (communiqué du 7 août 2020) empêchant le respect
  des obligations ;
- demande de ne pas pénaliser à tort les contribuables **non soumis au régime réel** et de
  **rembourser les pénalités indûment payées**.

---

## 5. Médiathèque et tutoriels vidéo

### Officiel
- **Vidéothèque DGI** [C] — existe en FR et AR :
  `http://www.impots.finances.gov.tn/index.php/fr/videotheque`
  `http://www.impots.finances.gov.tn/index.php/ar/videotheque`
  ⚠️ **Titres et contenus non récupérables** (403, non indexés). À explorer manuellement.
- **Page Facebook officielle** [C] — publie des vidéos.
  Vidéo identifiée : « **Visitez notre site jibaya.tn** ».
- **Compte X officiel `@DGI_Tunisie`** [C] — annonce les mises en service et diffuse les cahiers
  des charges.

### Chaîne YouTube
**[?] Aucune chaîne YouTube officielle de la DGI tunisienne ou du Ministère des Finances tunisien
n'a pu être identifiée.** Les résultats renvoyaient vers la **DGI du Bénin** — homonymie à éviter.
**Ne pas affirmer qu'une chaîne existe.**

### Tutoriels non officiels
**[?]** Aucun tutoriel vidéo (expert-comptable / éditeur) sur la saisie d'une déclaration mensuelle
sur e-t@srih n'a été identifié. Les contenus pédagogiques trouvés sont **écrits**.

---

## 6. Écosystème professionnel

### 6.1 Éditeurs de logiciels tunisiens

| Éditeur | Ce qu'il automatise | Statut |
|---|---|---|
| **Hesabi** (`hesabi.tn`) | Facturation TTN El Fatoora · **déclarations TEJ retenue à la source** (calcul auto, XML conforme DGI, exonérations, timbre) · comptabilité PCG-TN · **FEC (Fichier des Écritures Comptables) exigé en contrôle fiscal** · paie CNSS/IRPP. **Module Cabinet** : portefeuille clients, **calendrier fiscal auto-généré (JIBAYA/TEJ/CNSS/IS/DAS)**, **export TEJ XML bulk multi-clients**. Starter 390 / Pro 790 / Cabinet 2 490 TND/an | [C] |
| **TSI** (`tsi.com.tn`) | Module « TSI FICHIER DES CERTIFICATS RS » : **génération du XML** conforme au cahier TEJ. Aussi **Déclaration Employeur** et **Liasse Fiscale** | [C] |
| **Swiver** (`swiver.io`) | ERP cloud : facturation, stock, paiements, paie. **Facture électronique TTN / El Fatoora** : signature, transmission TTN, **QR code légal**. Blog très fourni sur la télédéclaration | [C] |
| **SAFI** (`safisoft.tn`) | Logiciel comptable **multi-dossiers, multi-exercices, multi-sociétés**, avec module de création et déclaration des déclarations fiscales | [C] |
| **IntegraSys ERP** | Publie un « Guide complet — Fiscalité d'entreprise en Tunisie 2026 » avec **toutes les échéances en PDF + Excel** | [C] |
| **liasse-fiscale-tunisie.com** | Génération de la **liasse fiscale XML** depuis une balance ou des états financiers Excel | [C] |
| **iSolutions** | Logiciel dédié « Déclaration Mensuelle » | [P] |
| **eFactureTN** | **10 simulateurs fiscaux gratuits** (2026) | [P] |
| ⚠️ **Arabsoft — produit « JIBAYA »** | **Homonymie avec le portail DGI — ne pas confondre** | [P] |
| ⚠️ **Diwan** (`diwan.tn`) | **Ce n'est PAS un logiciel comptable** : base de documents et formulaires administratifs/juridiques FR/AR. Utile comme source de formulaires | [C] |
| **Docile** | **[?] non trouvé** — requête non exécutée (budget épuisé) | [?] |

### 6.2 Sources doctrinales et blogs de référence

| Source | Utilité |
|---|---|
| **Profiscal** (`profiscal.com`) | **Référence doctrinale** — notes communes DGI archivées en PDF, cours sur les retenues à la source. La source la plus fiable de l'écosystème non officiel. |
| **Jurisite Tunisie** (`jurisitetunisie.com`) | Codes consolidés (IRPP/IS, TVA, CDPF, lois de finances) |
| **CHA Expert** (`chaexpert.com`) | Expert-comptable — analyses TEJ, retenue à la source, lois de finances, tarifs des pénalités |
| **InFirst Auditors** | Commentaires détaillés des lois de finances (PDF) |
| **CKT Audit**, **Exacom**, **MGI BFC**, **Synergie A&C** | Cabinets — synthèses réglementaires |
| **Deloitte / Mayer Brown** | Analyses des lois de finances |
| **OECT** (`oect.org.tn`) | Ordre des Experts-Comptables — commissariat aux comptes |
| **Idaraty** (`idaraty.tn`) | **Meilleure base tierce de fiches-procédures** avec pièces à fournir, FR + AR |
| **Swiver / Gastevo / web6 / Finco / Qwerty / SmartPaie** | Vulgarisation — ⚠️ **peu fiables sur les taux**, se contredisent entre eux |

> **Hiérarchie de fiabilité à respecter** : textes officiels et notes communes DGI > profiscal /
> jurisitetunisie > cabinets d'expertise comptable > blogs d'éditeurs de logiciels.
> Les blogs d'éditeurs se contredisent sur des points centraux (base HT/TTC de la retenue à la
> source, taux honoraires, taux loyers).

### 6.3 Portails gouvernementaux agrégateurs
`fr.tunisie.gov.tn` (services en ligne Finances) · `khadamet.gov.tn` (portail national des services
administratifs) · `sicad.gov.tn` (fiches de prestations et imprimés) ·
`registre.finances.gov.tn` (registre électronique des formalités fiscales et douanières)

---

## 7. Trous documentaires

| Sujet | Statut |
|---|---|
| Délai d'imputation du prélèvement sur le compte | [?] |
| Plafonds de paiement (carte, prélèvement) | [?] |
| Délai de mise en service de l'autorisation de prélèvement | [?] |
| Procédure de déclaration rectificative après paiement | [?] |
| Changement d'adresse e-mail de l'entreprise | [?] |
| Renouvellement du certificat avant expiration | [?] |
| Titres et contenus des vidéos de la vidéothèque DGI | [?] — 403 |
| Chaîne YouTube officielle DGI Tunisie | [?] — probablement inexistante |
| App mobile officielle « Jibaya » sur les stores | [P] à vérifier |
| Confirmation du virement et du e-Dinar comme moyens de télépaiement e-t@srih | [P] |
