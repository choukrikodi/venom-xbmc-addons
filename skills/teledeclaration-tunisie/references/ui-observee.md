# Cartographie de l'interface — observée directement

> Source : captures d'écran fournies par l'utilisateur (août 2026).
> Ce fichier ne contient **que** ce qui a été vu à l'écran. Il fait autorité
> sur toute documentation externe en cas de divergence.

---

## 1. Point d'entrée — portail JIBAYA

**URL** : `jibaya.tn/blog/la-tele-declaration-fiscale/`
**Fil d'Ariane** : `Services En Ligne > Télé-déclaration Fiscale`

### Menu principal — confirmé sur capture (août 2026)

```
🏠 | ADMINISTRATION FISCALE ▾ | DOCUMENTATION ▾ | MEDIATHÈQUE ▾ | AGENDA |
SERVICES EN LIGNE ▾ | APPLICATIONS MOBILES ▾ | CONTACT | 🔍 Recherche | FR ▾
```

Sept entrées, dont **quatre avec sous-menus** (Administration fiscale, Documentation,
Médiathèque, Services en ligne). Un sélecteur de langue **FR** en bout de barre.
La rubrique **APPLICATIONS MOBILES** existe donc bien en tant qu'entrée de menu — ce point était
marqué « non confirmé » dans `plateformes-et-acces.md` §1.3.

### Rubrique DOCUMENTATION — « TYPES DE DOCUMENTS »

Page `jibaya.tn/documentation/`, présentée en tuiles sous le titre
« **Consultez notre bibliothèque de documents fiscaux** » :

| Tuile | Contenu |
|---|---|
| **Lois Des Finances** | textes des LF successives |
| **Notes Communes** | commentaires administratifs de la DGI |
| **Conventions de non double imposition** | ⭐ conventions fiscales internationales |
| **Recueils de textes fiscaux** | les 8 codes (voir `pdf-officiels-niveau-de-preuve.md`) |
| **Autre Documentation Utile** | — |

> ⭐ La tuile **« Conventions de non double imposition »** n'avait été identifiée par aucune
> recherche. Elle est directement utile : la retenue à la source de **15 % sur les non-résidents**
> (art. 52-I-b) s'applique **sous réserve des conventions de non double imposition**, qui peuvent
> prévoir un taux plus favorable. Sans ces conventions, impossible de chiffrer correctement une
> retenue sur un fournisseur étranger.

Pied de page : logos **CIMF** (Centre Informatique du Ministère des Finances), **Ministère des
Finances**, **GBO**, **Douane**.

La page « La télé-déclaration Fiscale » présente **deux boutons d'accès** :

| Bouton | Mode d'authentification |
|---|---|
| `Accéder au service avec mon certificat DIGIGO` | Certificat de signature à distance |
| `Accéder au service avec mon certificat sur clé USB` | Token cryptographique physique |

Plus bas sur la page : `Étape 1 : Adhésion au système de la télédéclaration`
— le contribuable est invité à remplir un formulaire et à le déposer à la
structure de contrôle des impôts / bureau de contrôle des impôts.
Un encart latéral propose : **« Consulter le guide d'adhésion en ligne »**.

---

## 2. Sélection du certificat (boîte de dialogue navigateur)

Au clic sur un bouton d'accès, Chrome ouvre la boîte native :

> **Sélectionner un certificat**
> Sélectionnez un certificat pour vous authentifier sur
> **`teledeclaration.finances.gov.tn:443`**

Colonnes : `Objet` | `Émetteur` | `Série`

Émetteurs observés dans le magasin de certificats :

| Objet (exemple) | Émetteur | Type |
|---|---|---|
| `... (Authentificat...)` | `Citizen CA` | Authentification |
| `<NOM PRÉNOM>` | `TnTrust CA - QSign1` | Signature qualifiée |

Boutons : `Informations relatives au certificat` · `OK` · `Annuler`

**Implication opérationnelle** : plusieurs certificats peuvent coexister sur le
poste (plusieurs personnes, plusieurs cabinets). Le choix du certificat
détermine l'identité sous laquelle la session s'ouvre — **toujours faire
confirmer lequel sélectionner** plutôt que de prendre le premier de la liste.

---

## 3. Écran d'identification — e-t@srih

**URL** : `teledeclaration.finances.gov.tn/pls/webdeclar/DIVERS_PROC.identification1?lang=fr&app=&fin=#`

En-tête : logo **e-t@srih** — « le site de la télédéclaration » /
`République Tunisienne — Ministère des Finances` / `الجباية الإلكترونية`

### Bloc « Identification de l'adhérent » — `التعريف بالمنخرط`

| Champ | Libellé arabe | Format observé |
|---|---|---|
| `Identifiant :` | `المعرّف` | 7 chiffres + lettre clé — ex. `1217900L`, `1029364K` |
| `Mot de passe :` | `كلمة العبور` | masqué |

### Choix du mode de déclaration (boutons radio)

| Option | Libellé arabe | Sélection par défaut |
|---|---|---|
| `Ma propre déclaration` | `تصريح لحسابي الخاص` | ✅ coché |
| `Déclaration pour une tierce personne` | `تصريح لحساب الغير` | ⬜ |

> Le second mode est celui du professionnel (expert-comptable, conseiller
> fiscal, bureau d'encadrement) qui déclare **pour le compte d'un client**.
> Vérifier systématiquement quel mode est attendu avant de valider.

### Bloc « Adhésion en ligne » — `الانخراط عن بعد`

Lien : `Inscription` / `التسجيل`

Boutons de navigation bas de page : `Suivant` / `موالي` · `Fin` / `إنهاء`

---

## 4. Menu principal après connexion

**URL** : `teledeclaration.finances.gov.tn/pls/webdeclar/DIVERS_PROC.CHOIXMENU`

Titre : **FONCTIONNALITES DE LA TELE DECLARATION** — `وظائف التصريح عن بعد`

Arborescence exacte relevée à l'écran :

```
• Modification du mot de passe
• Modification de l'adresse électronique de l'entreprise

La déclaration d'impôts
  • Mensuelles
  • Impôt sur les sociétés / Avance due par les sociétés de personnes et assimilées
  • Acompte provisionnel
  • Impôts sur le revenu des personnes physiques
  • Impôt sur les Bénéfices des Entreprises de Production des Hydrocarbures
  • Déclaration Annuelle Art 43 LF 2025
  • Impôt libératoire
  • Taxe sur les jeux de pari et de hasard sur Internet

• Adhésion au régime de restitution automatique et instantanée
• Gestion des autorisations de prélèvement
• Gestion du mandatement
• Déclaration pays par pays
```

Boutons de navigation bas de page : `Fin` / `إنهاء` · `Precedent` / `سابق`

> Un pavé de texte en arabe figure en haut à droite de cet écran et mentionne
> l'année **2025** et l'article **43** — il s'agit de l'avis relatif à la
> déclaration annuelle Art. 43 LF 2025. Contenu non lisible sur la capture.

---

## 5. Caractéristiques techniques de l'application

Constats utiles pour l'automatisation :

- Application **Oracle PL/SQL Web Toolkit** — chemins en `/pls/webdeclar/<PACKAGE>.<PROCEDURE>`.
  Les écrans sont des pages HTML server-side, pas une SPA.
- **Bilingue FR/AR** sur la même page ; le paramètre d'URL `lang=fr` force le français.
- Navigation par boutons `Suivant` / `Precedent` / `Fin` — c'est un **assistant
  séquentiel à étapes**, pas un formulaire unique. Ne jamais supposer qu'on peut
  sauter directement à un écran par son URL.
- L'authentification est un **TLS client-certificate** : elle se joue dans la
  boîte de dialogue native du navigateur, hors du DOM. Aucune automatisation
  purement DOM ne peut la franchir — une intervention humaine est requise à
  cette étape.

---

## 6. Zones non observées

Ces éléments n'apparaissent sur aucune capture et **ne doivent pas être
supposés** — les faire décrire ou capturer par l'utilisateur avant d'agir :

- Le formulaire de saisie de la déclaration mensuelle lui-même (rubriques, cases, ordre).
- Les écrans de télépaiement et la quittance / récépissé.
- Les écrans de « Gestion du mandatement » et « autorisations de prélèvement ».
- Le contenu de la « Déclaration Annuelle Art 43 LF 2025 ».
- Les messages d'erreur de l'application.
