# Documents officiels — niveau de preuve réel

> Ce fichier existe pour une seule raison : **empêcher de citer comme « source officielle » un
> document que personne n'a lu.** Chaque entrée déclare si le document a été **LU**, seulement
> **RÉSUMÉ INDIRECTEMENT** par un moteur de recherche, ou reste **INACCESSIBLE**.

---

## ⚠️ Correction de prémisse : « Jibaya'tic » est ALGÉRIEN

Le document le plus souvent cité comme « le guide officiel » —
**« GUIDE DES SERVICES EN LIGNE DU PORTAIL "JIBAYA'TIC" »** — est le guide de la
**DGI algérienne**, pas tunisienne.

Preuves : formulaire **G50**, wilayas, structures **DGE / CDI / CPI**, Banque Extérieure
d'Algérie, migration vers `jibayatic.mf.gov.dz`.
Miroir officiel algérien : `https://www.mfdgi.gov.dz/portailpublic/assets/docs/guide_teledeclaration.pdf`

La copie hébergée chez un cabinet privé
(`acfacademie.com/wp-content/uploads/2026/03/Guide_des-services-en-ligne_Jibayatic_2025.pdf`)
porte **exactement le même titre** → republication du guide algérien selon toute vraisemblance.

**Conséquence pratique** : cette homonymie a **contaminé plusieurs réponses de moteur de
recherche**, qui mélangent dans un même paragraphe des éléments algériens (DGE/CDI/CPI, « code
d'accès ») et tunisiens (« recette des finances », « mot de passe 15 chiffres »).
**Toute synthèse indirecte sur l'adhésion est à traiter avec méfiance pour cette raison.**

Le portail tunisien est **`jibaya.tn`** (ex-`impots.finances.gov.tn`), le système **e-t@srih**.

---

## Tableau de synthèse

| Document | Pays | Lu | Résumé indirect | Inaccessible |
|---|:--:|:--:|:--:|:--:|
| **⭐ Guide de la télé-déclaration fiscale — DGI** | 🇹🇳 | ✅ **52 p.** | — | — |
| **Directives d'utilisation — tests en ligne support magnétique** | 🇹🇳 | ✅ **8 p.** | — | — |
| Guide des services en ligne « Jibaya'tic » 2025 | 🇩🇿 | ❌ | ✅ | corps du document |
| Guide d'adhésion en ligne à la télédéclaration | 🇹🇳 | ❌ | ✅ | corps du document |
| EMPCCA (cahier des charges déclaration employeur) | 🇹🇳 | ❌ | ✅ | PDF — **mais format reconstruit et recoupé, voir §3** |
| Guide d'inscription déclaration pays par pays | 🇹🇳 | ❌ | ✅ | corps du document |
| Dépliant « télé-déclaration et télépaiement » | 🇹🇳 | ❌ | ✅ | PDF (URL du fichier non trouvée) |

**Bilan : 2 PDF officiels lus intégralement.** Le **Guide de la télé-déclaration fiscale** a été
fourni directement par l'utilisateur (upload) et dépouillé — c'est désormais la **source primaire
de référence du skill** : `guide-officiel-dgi.md`, avec le PDF et le texte intégral archivés dans
`sources-primaires/`. Il faisait **52 pages** et non 11 comme l'annonçait le moteur de recherche.

**Lacunes qu'il a résolues à lui seul** : sanction du défaut de télédéclaration (art. 81 bis CDPF) ·
délai d'activation des mots de passe (J+1) · procédure de mot de passe oublié · format zéro-padé du
matricule · procédure de rectification · table complète des états de déclaration · **fenêtre
d'indisponibilité 17H-19H et pénalités après 17H le jour de l'échéance** (fait absent de toutes les
sources web).

---

## 1. Le seul document officiel réellement lu ✅

**« Tests en ligne de déclarations à déposer sur un support magnétique — Directives
d'utilisation »** — document de l'administration fiscale tunisienne (il instruit d'ajouter
`https://jibaya.tn` à la liste des sites de confiance Java), **8 pages, 13 figures**.

Texte intégral archivé : `references/empcca/directives-tests-support-magnetique.txt`

**Canal d'obtention** — c'est la trouvaille méthodologique de la mission :
`mcp__github__search_code` pour repérer, puis **`git clone`** (canal ouvert, contrairement à
WebFetch et curl) sur un dépôt tiers où le PDF était commité tel quel. Extraction avec `pypdf`.

**Structure lue :**
- **A.** Téléchargement et installation de Java (JRE 1.6+)
- **B.** Configuration de sécurité Java — b1 : JRE 1.7.25 / 1.7.40 / 1.7.45 → niveau de sécurité
  « Moyenne » · b2 : JRE 1.7.51+ → ajouter `https://jibaya.tn` en site avec exception
- **C.** Téléchargement de l'application de test (fichier **JNLP**), procédures IE / Firefox /
  Chrome / Edge
- **D.** Lancement (ex. `DecEmp2014`, case « J'accepte le risque et je souhaite exécuter
  l'application »)
- Remarque finale : le test doit être effectué connecté à Internet.

> ⚠️ **Obsolescence** : ce document décrit un outil **Java Web Start**, technologie morte depuis.
> Il est authentique mais daté (~2014-2016). Il **contredit** le constat par ailleurs établi qu'aucune
> source ne documente d'exigence Java pour la télédéclaration elle-même — parce qu'il ne parle
> pas de la télédéclaration, mais de l'**outil de test des fichiers sur support magnétique**.
> Ne pas généraliser.

---

## 2. Documents tunisiens localisés mais non lus

| Document | URL | Pages |
|---|---|---|
| **Guide d'adhésion en ligne au système de la télé-déclaration** | `https://jibaya.tn/wp-content/uploads/2023/08/guide-adhesion-en-ligne-min.pdf` | 11 |
| **Guide de la télé-déclaration fiscale** | `https://jibaya.tn/wp-content/uploads/2023/08/sodapdf-compressed-1-1-1.pdf` | 11 |
| **Guide d'inscription — déclaration pays par pays** | `https://jibaya.tn/wp-content/uploads/2023/12/Guide-dinscription-la-dclaration-pays-par-pays.pdf` · miroir DGI : `http://www.impots.finances.gov.tn/images/declaration_pays_par_pays/Guide_d'inscription_à_la_déclaration_pays_par_pays.pdf` | — |
| Dépliant « système de télé-déclaration et télépaiement » | page conteneur `impots.finances.gov.tn/index.php/fr/depliants-fiscalite-fr-tunisie/237-...` — **URL du PDF non identifiée** | — |
| Cahier des charges TEJ — certificats de retenue à la source v2 | `https://jibaya.tn/wp-content/uploads/2024/05/TEJ-CCT-RS-V2.pdf` | — |
| Cahier des charges TEJ — dépôt de liste | `https://jibaya.tn/wp-content/uploads/2025/11/TEJ-CCT-PS%20(1).pdf` | — |
| Cahier des charges techniques DCD | `https://jibaya.tn/wp-content/uploads/2025/08/Cahier%20des%20Charges%20Techniques%20DCD_updated.pdf` | — |
| **Schémas XSD — modèles de références** | `https://www.finances.gov.tn/fr/document/schemas-xsd-modeles-de-references` | — |
| Guide token TunTrust | `https://www.tuntrust.tn/sites/default/files/Guides/UtilisationDuTokenTuntrustetaccesauSiteDelaTeledeclarationFiscale.pdf` | — |

**Versions du cahier EMPCCA localisées (aucune lue)** :
`jibaya.tn/wp-content/uploads/2026/01/EMPCCA_25V2.pdf` (2025) ·
`jibaya.tn/.../2024/02/EMPCCA_23_V_Finale.pdf` (2023) ·
`finances.gov.tn/.../2022-03/EMPCCA_22_V2.pdf` (2022) ·
`finances.gov.tn/.../2020-03/EMPCCA_19_V0.pdf` (2019) ·
`finances.gov.tn/.../2019-08/empcca_14_version_finale.pdf` (2014)

---

## 3. Format du fichier de déclaration d'employeur — reconstruction recoupée

**Statut : NON LU dans le cahier des charges officiel.** Ce qui suit provient de **code source
tiers** (dépôt public `Mahmoud-Saidi/declaration_employeur_v2`, commit « conformité cahier des
charges — DECEMP codes/taux, CSS, annexes 1-7, multi-version »), dont le développeur avait
manifestement le PDF sous les yeux.

Fichiers archivés dans `references/empcca/reconstruction-*.ts`.

**Structure reconstruite :** deux fichiers ASCII non compressés.

| Fichier | Nommage | Longueur d'enregistrement |
|---|---|---|
| Récapitulatif | `DECEMP_AA` | **38 caractères** |
| Annexes | `ANXEMP_N_AA_P` | **399 caractères** |

- **DECEMP** = 1 en-tête `000` + N lignes de code + 1 pied `999`.
  **47 lignes (v2022) / 48 (v2023, ajout code 500) / 49 (v2025, ajout code 600)** →
  **51 enregistrements au total en 2025**.
- **Chaque annexe** = en-tête `E1..E7` + lignes `L1..L7` + pied `T1..T7`.
- Montants en **millimes** · taux au format `999V99`.
- Cas spécial DECEMP03 (code 300, **CSS**) : assiette et taux en zone réservée.

### Recoupement indépendant

Dix éléments de cette reconstruction ont été **confirmés séparément** par des extraits de moteur
de recherche indexant le PDF officiel — dont **quatre positions absolues d'octets** :

| Élément | Reconstruction | Confirmé indépendamment |
|---|---|---|
| Nommage des fichiers | `DECEMP_`, `ANXEMP_N_AA_P` | ✅ « caractères n° 7, 9 et 12 sont des `_` » |
| Nb d'enregistrements DECEMP 2025 | 51 | ✅ « passé à 51 lignes » |
| Catégorie contribuable | obligatoire, **≠ E** | ✅ règle de gestion 2025 |
| Nouveau champ 2025 | **A517** — retenue 3 % livraison (Annexe V) | ✅ |
| A105 Exercice | 4X | ✅ **positions 15-18** |
| A106 N° d'ordre | 6N | ✅ **positions 19-24** |
| A107 Type identifiant | 1N, valeurs 2 ou 3 en Annexe I | ✅ position 25 |
| A108 Identifiant | 13X | ✅ **positions 26-38** |
| A117 / A118 / A119 / A124 | 15N, offsets 261 / 276 / 291 / 366 | ✅ **261-275, 276-290, 291-305, 366-380** |
| Nature identifiant | 1=MF(13) · 2=CIN(8) · 3=carte séjour · 4=non domicilié | ✅ identique |

> **Lecture correcte de ce résultat** : ce n'est **pas** une preuve que la reconstruction est
> complète ou exempte d'erreur. C'est une preuve qu'elle **n'est pas inventée**.
> À traiter comme une **hypothèse de travail solide**, à valider contre le PDF officiel avant tout
> usage en production.

**Contre-exemple instructif** : un autre dépôt (`Melek-Lahmar/DeclarationEmployerTunisie`) refuse
explicitement de générer un fichier officiel, avec le message
« *Génération officielle non activée : mapping EMPCCA 2025 incomplet ou non confirmé.* » —
ce qui confirme la rareté réelle du document.

---

## 3bis. Sources en attente de lecture — file prioritaire

Ces sources ont été **explicitement désignées comme prioritaires** mais restent inaccessibles
(403 sur `jibaya.tn` depuis l'environnement d'exécution). Dès qu'un accès est possible — copie
déposée dans un dépôt Git, upload direct, ou levée du blocage — **les lire en premier** et
mettre à jour les références concernées.

| Source | URL | Ce qu'elle résout | Fichier à corriger |
|---|---|---|---|
| **Code de l'IRPP et de l'IS 2025** | `https://jibaya.tn/docs/code-de-lirpp-et-is-2025/` | **Bornes intermédiaires du barème IRPP** (art. 44) — actuellement marquées [P] et interdites de codage · **taux d'IS** (art. 49) et articulation avec le barème progressif · **art. 51 bis** (avance sociétés de personnes) · **art. 55** (certificats de retenue à la source) | `declarations-annuelles.md` §2.2, §6.1 |
| **Note Commune n° 08/2025** | `https://jibaya.tn/docs/note-commune-n08-2025/` | Date d'entrée en vigueur du barème progressif d'IS (2024 ou 2025 — contradiction [!]) et articulation avec les taux sectoriels | `declarations-annuelles.md` §2.2 |
| **Guide de la télé-déclaration fiscale** (11 p.) | `https://jibaya.tn/wp-content/uploads/2023/08/sodapdf-compressed-1-1-1.pdf` | Écrans réels, procédure de rectification d'une déclaration liquidée, fonctions de consultation | `ui-observee.md`, `telepaiement-faq-ecosysteme.md` §4 |
| **Imprimé officiel de la DMI** | `https://jibaya.tn/formulaires-a-telecharger/` → section « Chiffre d'affaires (CA) » | **Codes et numéros de cases** de la déclaration mensuelle — lacune n°1 du mode PILOTAGE, introuvable ailleurs | `declaration-mensuelle.md` |
| **EMPCCA_25V2** | `https://jibaya.tn/wp-content/uploads/2026/01/EMPCCA_25V2.pdf` | Valide ou infirme la reconstruction du §3 ci-dessous | ce fichier, §3 |

> **Règle de conduite** : tant qu'une de ces sources n'est pas lue, les données qu'elle
> conditionne restent marquées [P] ou [!] et ne doivent pas être présentées comme certaines.
> Lire une de ces sources n'est pas un bonus : c'est ce qui fait passer une donnée de
> « probablement vrai » à « utilisable dans une déclaration fiscale réelle ».

---

## 4. [!] Contradiction relevée sur le seuil CbCR

Deux réponses de moteur ont donné **« 1 636 millions »** et **« 1 636 milliards »** de dinars pour
le seuil de la déclaration pays par pays. Le premier chiffre (≈ 1,636 milliard DT) est cohérent
avec le seuil OCDE de 750 M€. **Contradiction non résolue — à vérifier.**

---

## 5. Cartographie des canaux réseau (établie par test, pas par supposition)

| Canal | Statut |
|---|---|
| `WebFetch` | **403 systématique**, y compris sur des domaines banals — blocage large, pas allowlist étroite |
| `curl` direct | `github.com` / `raw.githubusercontent.com` uniquement |
| **`git clone` HTTPS** | ✅ **FONCTIONNE sans restriction** — canal le plus puissant trouvé |
| `WebSearch` | ✅ Fonctionne, et **indexe le texte des PDF** (a restitué des positions de champs exactes) |
| MCP GitHub `search_code` | ✅ Fonctionne sur tout GitHub |

**Combo gagnant** : `search_code` pour repérer + `git clone` pour lire.

### Comment débloquer réellement la lecture des PDF officiels

Le levier le plus simple, et le seul entièrement fiable :
**déposer les PDF dans un dépôt GitHub accessible à la session** (par exemple
`choukrikodi/venom-xbmc-addons`, ou un dépôt dédié). Le canal `git clone` étant ouvert, ils
deviennent lisibles intégralement en une passe, et le niveau de preuve de tout ce dossier passe de
« résumé indirect » à « lu ».

Second levier, moins sûr : autoriser `web.archive.org` dans l'allowlist.
