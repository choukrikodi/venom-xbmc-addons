# Guide officiel de la télé-déclaration fiscale — DGI

> **STATUT : SOURCE PRIMAIRE LUE INTÉGRALEMENT.** 52 pages.
> Éditeur : Centre Informatique du Ministère des Finances, avec la Direction Générale des Impôts
> et la Direction Générale de la Comptabilité Publique et du Recouvrement.
> PDF et texte intégral archivés dans `references/sources-primaires/`.
>
> **Ce fichier prime sur toute autre référence en cas de divergence**, à l'exception de
> `ui-observee.md` pour les écrans postérieurs au guide (le guide est antérieur à 2020 : il
> mentionne le seuil de 750 000 DT de 2018, pas celui de 100 000 DT de l'arrêté du 22 mai 2020,
> et ne connaît ni l'Art. 43 LF 2025, ni la taxe sur les jeux, ni le CbCR).

Le guide nomme le portail **« E-JEBEYA »**.

---

## 1. Cadre juridique — désormais confirmé en source primaire

| Élément | Texte |
|---|---|
| **Instauration du système** | **Article 57 de la loi de finances 2001** |
| Mise en service — télédéclaration + télépaiement | **avril 2002** |
| Mise en service — téléliquidation | **mars 2008** |
| **Obligation** | **Article 70 de la LF 2005**, décret d'application **n° 2494 du 12 septembre 2005** |
| Extension par activité | **Article 72 de la LF 2013** — étend l'obligation à certaines activités **nonobstant le chiffre d'affaires réalisé** |
| Option volontaire | Ouverte aux contribuables au **régime réel** non soumis obligatoirement |

**Application progressive du seuil de chiffre d'affaires :**
de **15 millions de dinars** en 2005 jusqu'à **750 000 dinars** en 2018.
*(Le guide s'arrête là ; l'arrêté du 22 mai 2020 a ensuite abaissé le seuil à 100 000 DT —
voir `plateformes-et-acces.md` §4.5.)*

### ⭐ Amende du non-respect de l'obligation — lacune résolue

**Article 81 bis du Code des Droits et Procédures Fiscaux** : amende due **au titre de chaque
déclaration fiscale déposée sans respecter l'obligation** de souscription et de dépôt par moyens
électroniques fiables à distance :

> **0,1 % du montant du principal de l'impôt exigible, minimum 200 dinars, maximum 2 000 dinars.**

*(Cette sanction était marquée « lacune documentaire, aucune source » dans
`calendrier-et-penalites.md` §5.4. Elle est désormais établie.)*

---

## 2. Adhésion

### 2.1 Dépôt du dossier

Auprès de la structure de contrôle des impôts dont relève l'entreprise :
**Direction des Grandes Entreprises**, **Direction des Moyennes Entreprises**, ou
**Bureau de Contrôle des Impôts territorialement compétent**.

1. **Demande d'adhésion** selon un modèle préétabli
2. **Une ou plusieurs autorisations de prélèvement** d'un compte courant bancaire ou postal,
   **visées par l'établissement détenteur du compte**

En retour : **récépissé d'adhésion comportant un ou plusieurs mots de passe**.

Puis : dépôt d'un dossier auprès de l'**Agence Nationale de Certification Électronique** **ou
auprès des bureaux régionaux de poste** pour obtenir le certificat électronique.

### 2.2 ⭐ Délai d'activation — lacune résolue

> **« Les mots de passe ne permettent l'accès au système que le jour suivant de leur
> attribution. »**

*(Marqué « aucune source, ne rien inventer » dans `plateformes-et-acces.md` §4.4.)*

### 2.3 Modification de l'adhésion

Par dépôt d'une **demande de mise à jour de l'adhésion** : mandatement d'un professionnel,
annulation du mandatement, **changement du nombre de mots de passe**, **octroi de nouveaux mots
de passe en cas de perte**.

---

## 3. Accès et identification

### 3.1 Parcours

```
Services en ligne → « Télé-déclaration Fiscale » → bouton « Accéder au service »
→ code PIN du certificat électronique déjà installé
→ login (matricule fiscal) + mot de passe
```

> **3 codes PIN erronés ⇒ certificat bloqué.** (confirmé en source primaire)

### 3.2 ⭐ Format du matricule — contradiction résolue

> **« Votre matricule fiscal est composé de 8 caractères (7 numériques + une clé alphabétique
> en majuscule) à compléter par des zéro à gauche le cas échéant. »**

C'est l'explication de la contradiction relevée dans `plateformes-et-acces.md` §5.2 : le format
est bien **7 chiffres + 1 lettre**, mais **complété par des zéros à gauche** pour atteindre
8 caractères. Une source qui écrit « 8 chiffres et une lettre » décrit maladroitement le
zéro-padding.

Sur l'écran de liquidation, matricule et clé sont **deux champs distincts** :
partie numérique (7 chiffres) et clé (1 lettre majuscule).

### 3.3 Mot de passe

| Élément | Valeur |
|---|---|
| Mot de passe attribué par l'administration | **15 chiffres** |
| À modifier | **dès le premier accès**, avant toute autre opération |
| Nouveau mot de passe | **6 à 15 caractères** |
| Caractères interdits | caractères spéciaux : `, ; / ? + « ° [` |

### 3.4 ⭐ Mot de passe oublié — lacune résolue

> **« Si vous avez oublié votre mot de passe, téléchargez le formulaire de mise à jour de
> l'adhésion et déposez-le auprès de la structure de contrôle des impôts dont vous relevez,
> qui va vous attribuer de nouveaux mots de passe. »**

Il n'existe donc **aucun libre-service** : la procédure est un dépôt de formulaire au guichet,
et les nouveaux mots de passe ne fonctionnent qu'**à J+1**.

### 3.5 ⭐⭐ Fenêtre d'indisponibilité du serveur — fait opérationnel majeur

> **« Le serveur n'est pas accessible entre 17H et 19H. Après 19H, on passe à la journée J+1. »**
>
> **« À l'échéance et après 17H, des pénalités de retard seront encourues lors de la liquidation
> de la dernière déclaration mensuelle, annuelle ou d'acompte provisionnel échue. »**

**Conséquence pratique décisive : la date limite est en réalité 17H00 le jour de l'échéance,
pas minuit.** Une déclaration liquidée après 17H le jour J est traitée comme déposée à J+1 et
génère des pénalités de retard.

Ce fait n'apparaît dans **aucune** des sources web consultées. Il doit être rappelé
systématiquement à l'approche d'une échéance.

### 3.6 Type d'accès

| Option | Signification exacte (texte du guide) |
|---|---|
| **Ma propre déclaration** | « Pour télé-déclarer vos propres déclarations » |
| **Déclaration pour une tierce personne** | « Pour télé-déclarer au lieu et place des clients qui vous ont mandaté (cas d'un comptable, expert-comptable, conseiller fiscal…) » |

Si l'utilisateur coche « Déclaration pour tierce personne » **sans être mandaté**, un écran
d'erreur s'affiche.

---

## 4. Un ou deux mots de passe

| Configuration | Effet |
|---|---|
| **Un seul mot de passe** | Liquidation **et** paiement des déclarations |
| **Deux mots de passe** | **Séparation des fonctions** : un mot de passe de **liquidation** (le comptable) et un mot de passe de **paiement** (le service financier) |

### Cas du mandatement

- **Le professionnel mandaté utilise le même mot de passe** pour ses propres déclarations **et
  celles de ses clients**.
- **Si vous avez mandaté un professionnel**, votre propre mot de passe ne sert plus qu'à :
  **télé-payer**, consulter, imprimer, changer le mot de passe, changer l'adresse e-mail.
- ⚠️ **Le paiement reste à la charge du contribuable lui-même, même s'il a mandaté un
  professionnel pour télé-déclarer.** Un cabinet ne peut pas payer à la place de son client sauf
  mandat explicite « liquidation et paiement ».

### Espace des professionnels mandatés

La **liste des clients** s'affiche au niveau du champ matricule fiscal. Choisir le client, puis
saisir la période (année et mois, année et échéance…).

---

## 5. Déclarations couvertes par le système (état du guide)

- **Déclarations mensuelles** — **11 impôts et taxes**, liste exacte :
  **RS · TFP · FOPROLOS · DC · TVA · Autres taxes sur le CA · Taxe sur les assurances ·
  Droit de timbre · TCL · TH · Droit de licence**
- Déclarations d'**acompte provisionnel**
- Déclarations d'**Impôt sur les Sociétés**
- Déclarations de l'**avance due par les sociétés de personnes et assimilées**
- Déclarations d'**IRPP**
- Déclarations d'**Impôt sur les Bénéfices des Entreprises de Production des Hydrocarbures**

*(Le menu observé sur capture en 2026 comporte en plus : Art. 43 LF 2025, impôt libératoire,
taxe sur les jeux de pari et de hasard sur Internet, restitution automatique, déclaration pays
par pays — tous postérieurs à ce guide.)*

---

## 6. Fonctionnalités de base

1. Modification du mot de passe
2. Modification de l'adresse électronique de l'entreprise
3. **Résiliation d'une autorisation de prélèvement d'un compte courant**
4. **Résiliation de l'adhésion — pour les adhérents volontaires uniquement**
5. La déclaration d'impôt (liquidation et paiement)

### Adresse e-mail — pourquoi elle compte

L'administration l'utilise pour informer du **sort des déclarations et des ordres de
prélèvement** : déclaration suspendue, rejet de l'ordre de prélèvement. Une adresse périmée
signifie ne pas être averti d'un rejet — donc découvrir le retard trop tard.

### ⭐ Résiliation d'une autorisation de prélèvement — conditions

Deux conditions cumulatives :
- avoir **au moins 2 comptes** courants bancaires ou postaux ;
- **n'avoir aucune déclaration** à l'état « Paiement confirmé » ou « Envoyée pour paiement ».

---

## 7. Liquidation de la déclaration mensuelle

### 7.1 Écran de départ

| Champ | Contenu |
|---|---|
| **Matricule fiscal** | partie numérique, 7 chiffres |
| **Clé** | une seule lettre majuscule |
| **Année et mois** | l'année et le **dernier mois échu** sont affichés par défaut, modifiables |
| **Code acte** | **Initiale** pour la première déclaration · **Rectificative** pour les suivantes au titre du même mois et des mêmes impôts |
| **Impôts à déclarer** | **cocher** les impôts concernés, puis « Suivant » |

Après saisie de la période, le système affiche les informations de l'entreprise (raison sociale,
adresse, catégorie…).

Chaque impôt liquidé est **grisé** dans la ligne du haut et apparaît dans le **tableau
récapitulatif** des impôts et taxes à payer.

### 7.2 TVA et droit de consommation

- Le montant de la **TVA restituée** ne peut être saisi que dans une **déclaration rectificative
  dégageant un crédit de TVA**.
- Les **crédits de TVA et de DC du mois précédent sont générés automatiquement par le système**
  et peuvent être modifiés.

### 7.3 TCL — répartition entre collectivités locales

À la **première liquidation de TCL**, saisir les informations de répartition :

| Champ | Définition |
|---|---|
| **Nombre de collectivités locales** | collectivités où l'entreprise est établie |
| **Superficie totale** | somme des superficies de tous les établissements, **y compris les établissements secondaires** |
| **Minimum de la TCL** | somme des montants de la **taxe sur les immeubles bâtis (T.I.B.)** communiqués par les collectivités locales. **Saisie non obligatoire.** |

Il faut ensuite choisir la ou les collectivités où se trouvent les établissements (**y compris le
siège**) et saisir la superficie de chacun. La fonctionnalité permet d'ajouter, supprimer des
collectivités et de modifier la superficie totale à chaque changement.

⭐ **Règle de calcul particulière** : si la **marge bénéficiaire brute ne dépasse pas 6 %** ou si
l'entreprise est **déficitaire**, la **TCL est calculée sur la base de l'IS ou de l'IRPP dû au
titre de l'exercice N-1**.

### 7.4 Taxe hôtelière (TH)

Même mécanisme de répartition que la TCL, à saisir à la première déclaration.

### 7.5 ⭐ TFP — le système de l'avance

Conditions pour en bénéficier :
- l'entreprise doit être **soumise à la TFP** ;
- la **TFP due au titre de l'année précédente ≥ 1 000 dinars** ;
- l'entreprise doit déposer sa **déclaration mensuelle de janvier à l'échéance** et y saisir le
  montant de l'avance à déduire.

Règles :
- la déduction s'opère dans les limites choisies par l'entreprise, **sans excéder 60 %** ;
- ce choix vaut **renonciation définitive et irrévocable** au reliquat ;
- le montant de l'avance doit être saisi **tant qu'elle n'a pas été consommée en totalité** ;
- **un montant d'avance nul vaut renonciation définitive** au bénéfice de l'avance ;
- pour les rectificatives suite à la décision d'approbation des montants définitifs, saisir le
  montant rectifié **et la date de réception de la décision**.

---

## 8. ⭐ Rectification et modification — lacune résolue

| Situation | Ce qui est possible |
|---|---|
| Déclaration à l'état **« liquidée »** | **Modification** possible. Ajout/suppression d'un impôt possible. Suppression possible. |
| Déclaration à l'état **« paiement confirmé »** | Il faut **d'abord annuler la validation du paiement**, puis modifier. |
| Déclaration **initiale non encore payée** | **Impossible de déposer une rectificative.** Passer par la procédure de **modification**. |
| Déclaration **payée** | La **rectificative** devient possible. |

> « Vous ne pouvez pas déposer une déclaration rectificative tant que la déclaration initiale
> n'est pas encore payée. »

**Ce qui n'est jamais modifiable** : la **période** de la déclaration et le **matricule fiscal**.
En cas d'erreur de période, il faut **supprimer** la déclaration (possible tant qu'elle est à
l'état « liquidée »).

**Tableau récapitulatif « RECAP »** : si l'on clique sur « Valider » sans avoir liquidé tous les
impôts cochés, un écran d'avertissement s'affiche — **il n'est pas bloquant**. Ne valider
qu'après avoir liquidé tous les impôts et taxes exigibles.

---

## 9. Paiement

1. Cliquer sur **« Paiement »**, puis sur **« Par ordre de prélèvement »**
2. Choisir le ou les comptes bancaires/postaux et **répartir le montant** entre eux
3. **« La date de l'échéance légale » est cochée par défaut.** Si la déclaration n'est pas encore
   échue, on peut choisir une autre date via « La date que je choisie »

⚠️ **Confirmer le paiement même si la déclaration est nulle ou dégage un report d'impôt.**
Une déclaration liquidée mais non confirmée est **suspendue** — donc non déposée.

Si deux mots de passe sont configurés, saisir le **mot de passe de paiement**.

---

## 10. ⭐⭐ États d'une déclaration — table complète

| État | Signification |
|---|---|
| **Liquidée** | Liquidation effectuée, **validation du paiement pas encore faite** |
| **Paiement confirmé** | Liquidée et validée pour être envoyée au paiement |
| **Envoyée pour paiement** | Ordres de prélèvement transmis au système de **télécompensation** |
| **Payée** | Déclaration acceptée, paiement effectué |
| **Suspendue** | Liquidée mais **non validée pour paiement à temps** → **déposer une autre déclaration** |
| **Rejeté** | Ordre de prélèvement **rejeté par la banque**. Motifs via « Détail du paiement ». **Situation non en règle.** Reste dans l'historique, **non supprimable** |
| **Partiellement rejeté** | Paiement réparti sur plusieurs comptes, un ordre rejeté. Régulariser par une autre déclaration. **Les montants débités sont consignés** auprès de la recette des finances du Pôle de recouvrement de la DME ou de la DGE |

### Règles de bascule à connaître

- **À l'échéance légale, une déclaration liquidée mais non confirmée pour paiement devient
  « suspendue ».**
- **Une déclaration liquidée après l'échéance sans paiement confirmé et validé le même jour est
  suspendue à la fin de la journée.**
- **Les déclarations rejetées ou suspendues doivent être liquidées de nouveau et confirmées pour
  paiement. Elles ne peuvent être ni supprimées ni modifiées.**
- **Un e-mail informe du sort de l'ordre de prélèvement** — d'où l'importance de l'adresse
  e-mail à jour.
- Les **quittances peuvent être retirées auprès de n'importe quelle Recette des Finances**.

---

## 11. Édition des déclarations

- L'édition de la déclaration mensuelle se fait **en plusieurs parties** si elle concerne
  plusieurs impôts et taxes.
- Une déclaration à l'état **« payée »** porte :
  - la **référence de la quittance — un numéro commençant par la lettre `E`** ;
  - la **date de la quittance**, c'est-à-dire la date de paiement.

---

## 12. Acompte provisionnel — écran

| Champ | Contenu |
|---|---|
| Code acte | Initiale ou rectificative |
| Année | — |
| **Terme** | **1er, 2ème ou 3ème** |

⭐ **L'impôt théorique servant de base de calcul est affiché automatiquement** par le système, en
se référant à la **dernière déclaration d'IS ou d'IRPP déposée**. Ce montant **peut être
modifié**, mais **ne peut pas être inférieur au minimum sur le chiffre d'affaires dû au titre de
l'exercice précédent**.

---

## 13. IS et avance des sociétés de personnes — écran

### 13.1 Type de déclaration

| Type | Manipulation |
|---|---|
| **Provisoire** | Code acte « Initiale » + cocher « Provisoire ». Autant de rectificatives provisoires que nécessaire. |
| **Définitive** | Si une provisoire a été déposée : code acte « **Rectificative** » + cocher « Définitive ». Autant de définitives rectificatives que nécessaire. |

⚠️ **Une fois une déclaration définitive déposée, plus aucune déclaration provisoire ne peut
l'être.**

### 13.2 Cadres légaux — liste exacte (10)

Exportation Totale · Développement régional · Développement agricole · Parc d'activité
économique · Exportation · Encouragement des Petites et Moyennes Entreprises · Établissement de
santé au profit des non-résidents · Entreprises nouvellement créées · Projets d'intérêt national ·
Activité de soutien et de lutte contre la pollution

Les avantages fiscaux sont **liés ou non liés à un cadre légal**, et **le système effectue des
contrôles de cohérence** entre les avantages déduits et le cadre légal choisi.

### 13.3 ⭐ Calcul de l'impôt — éclaire la question des taux d'IS

> **« Répartissez le bénéfice et le chiffre d'affaires selon le taux de l'IS auquel l'entreprise
> est soumise. »**

Le système demande donc une **ventilation de la base par taux d'IS applicable**. Cela confirme
que plusieurs taux coexistent structurellement pour une même entreprise, et que le portail ne
présume pas d'un taux unique. *(Cela n'arbitre pas pour autant la contradiction sur le barème
progressif — voir `declarations-annuelles.md` §2.2.)*

**Sociétés exonérées** : cocher « oui » si l'entreprise est exonérée en vertu de l'**article 46
du code de l'IRPP et de l'IS** ou d'une convention. Case distincte pour les **bénéfices non
soumis à l'impôt**.

### 13.4 CSS

> **La Contribution Sociale de Solidarité est calculée automatiquement par le système** lors de la
> liquidation des déclarations d'IS et d'IRPP, en application de l'**article 53 de la loi de
> finances 2018**.

---

## 14. IRPP — écran

### 14.1 Catégories de revenus à cocher (9)

Bénéfices industriels et commerciaux (BIC) · Bénéfices des professions non commerciales (BNC) ·
Bénéfices des activités agricoles et de pêche · Revenus fonciers · Salaires et pensions de source
tunisienne · Revenus des valeurs et capitaux mobiliers · Revenus exonérés · Revenus non
imposables · Autres revenus

Pour le **BIC au régime réel**, préciser la sous-catégorie : commerciaux, industriels, de
prestation de services…

### 14.2 Enchaînement

Après saisie du vecteur de catégories, chaque catégorie se saisit une par une ; il reste possible
de revenir sur n'importe quelle catégorie pour corriger avant de valider.

### 14.3 Déductions

Saisir : **déficits des années antérieures non imputés** (décocher « oui » si nul) et
**déductions communes** — revenus et bénéfices provenant de l'activité, revenus réinvestis, chef
de famille, enfants à charge, parents à charge, intérêts des comptes.

### 14.4 Minimum d'impôt

L'impôt dû est **calculé et affiché automatiquement selon le barème**. Sont ensuite affichés :
chiffre d'affaires local TTC · minimum d'impôt liquidé sur la base du chiffre d'affaires ·
**minimum d'impôt au taux de 30 % ou 60 %**.

À saisir dans certains cas : CA local TTC soumis au minimum pour une entreprise bénéficiant d'une
déduction totale au titre du développement régional ou agricole dont une partie du CA est soumise ·
CA homologué ou au titre de l'activité de soutien / lutte contre la pollution · CA total à
l'exportation soumis au minimum en cas de déduction totale · part de l'associé dans une société de
personnes.

### 14.5 Avances à imputer

Troisième partie de la grille : **retenues à la source, acomptes provisionnels déjà payés**…
L'**excédent d'impôt de la déclaration de l'année précédente est affiché automatiquement** si
cette déclaration a été déposée, et reste modifiable.

### 14.6 CSS dans l'IRPP

- Grille CSS affichée **à partir de l'exercice 2018**.
- **À partir de l'exercice 2019**, l'excédent de l'année antérieure au titre de la contribution
  est **généré automatiquement** depuis la déclaration IRPP de l'année précédente ; modifiable.
- La **retenue à la source au titre de la contribution ne peut être saisie que si** le contribuable
  a déclaré la catégorie **traitements et salaires** ou **pensions et rentes viagères de source
  tunisienne**.

### 14.7 Tableau récapitulatif

Affiche les impôts et taxes déclarés (IRPP, taxe de visite, droit d'intéressement, CSS…), les
montants dus en principal, les montants déjà payés en cas de rectificative, et **les pénalités de
retard calculées — y compris au titre des bénéfices et revenus exonérés, déduits ou non soumis,
déclarés après l'échéance légale**.

---

## 15. Hydrocarbures — écran

- **Choisir la concession.**
- Si la concession est régie par le **Décret-loi n° 9 de 1985** ou par le **code des
  hydrocarbures**, choisir le **trimestre** en plus de l'année.
- Pour une déclaration trimestrielle, le type des déclarations des **trois premiers trimestres
  doit obligatoirement être « D »**.
- Pour une concession en **régime conventionnel**, cocher sur la première page de liquidation
  soit **« Impôt sur les sociétés »**, soit **« Impôt complémentaire »**.

Fonctions disponibles : liquidation, consultation, impression, suppression de la déclaration,
ordre de paiement et annulation de l'ordre de paiement.

---

## 16. Pièces annexes à la déclaration

Deux voies, au choix :

1. **En ligne** — les adhérents (obligatoires ou volontaires) déposent les pièces annexes à leur
   déclaration d'IS ou d'IRPP (**bilan, états financiers, liste des attestations des retenues à
   la source**…) à l'occasion du dépôt de la **liasse fiscale à distance**, via le service
   **« Liasse fiscale »**.
2. **Papier** — dépôt auprès de la structure de contrôle de rattachement, **accompagné d'un accusé
   de réception à télécharger depuis le site**, dans les délais légaux.

---

## 17. Système de la télé-liquidation avec paiement à la Recette des Finances

| Élément | Contenu |
|---|---|
| **Adhésion** | Auprès de la **Recette des Finances territorialement compétente**, par une demande d'adhésion **selon le profil (professionnel ou autre)** disponible sur le site |
| **Principe** | Liquider les impôts via Internet **sans certificat électronique**, puis payer **à partir du jour suivant** à **n'importe quelle Recette des Finances** |
| **Dépôt** | Identique au système de télédéclaration |
| **Périmètre** | Les **mêmes déclarations** que la télédéclaration, **mais limité aux déclarations initiales — les rectificatives ne sont PAS couvertes** |
| **Professionnels** | Peuvent télé-liquider pour leurs clients **mentionnés au niveau du formulaire d'adhésion** |
| ⚠️ **Exclusion** | **Les contribuables soumis obligatoirement à la télédéclaration ne peuvent pas adhérer à ce système** |

### États spécifiques

| État | Signification |
|---|---|
| **Liquidée** | Liquidation effectuée, validation non encore faite |
| **Liquidation validée** | Liquidée et validée pour être envoyée à la recette |
| **Envoyée à la recette** | Transmise au système informatique des Recettes des Finances, **« RAFIC »** |

**Manipulation** : pour qu'une déclaration télé-liquidée parte à la recette, passer par la fonction
« Validation de la liquidation, annulation de la validation de la liquidation, consultation,
impression et suppression des déclarations », saisir la période, puis cliquer sur
**« Validation de la liquidation »**.

---

## 18. Assistance et coordonnées (page 50 et 52 du guide)

| Canal | Coordonnée |
|---|---|
| **Centre d'Information Fiscale à Distance** | **81 100 400** |
| Adresse | **93 Rue Hédi Chaker — 1002 — Tunis Belvédère** |
| Téléphone | **+216 71 780 940** |
| Fax | +216 71 799 010 |
| E-mail | **impots@finances.gov.tn** |

*(Ceci lève partiellement l'ambiguïté d'adresse signalée dans `plateformes-et-acces.md` §8.5 :
le 93 rue Hédi Chaker est l'adresse portée par le guide officiel de la DGI. L'adresse
25 av. Kheireddine Pacha figure sur la page contact de jibaya.tn — les deux peuvent coexister,
structures ou époques différentes.)*

---

## 19. Formulaires

Tous les imprimés relatifs au système sont téléchargeables :

```
www.impots.finances.gov.tn (aujourd'hui jibaya.tn)
→ onglet « Ressources documentaires »
→ onglet « Téléchargement des formulaires »
→ lien « Télé-déclaration »
```

---

## 20. Ce que ce guide ne couvre PAS

Le guide est antérieur à 2020. Il ne traite pas :

- le seuil d'obligation de **100 000 DT** (arrêté du 22 mai 2020) — il s'arrête à 750 000 DT (2018) ;
- la **plateforme TEJ** et les certificats de retenue à la source numériques ;
- la **Déclaration Annuelle Art. 43 LF 2025** (avoirs non réclamés) ;
- l'**impôt libératoire**, la **taxe sur les jeux de pari et de hasard sur Internet**, la
  **déclaration pays par pays**, l'**adhésion au régime de restitution automatique** ;
- le certificat **DIGIGO** en tant que tel (il parle de « certificat électronique » de l'ANCE ou
  des bureaux de poste) ;
- les **taux** d'imposition (c'est un guide d'utilisation, pas un guide fiscal) ;
- les **codes et numéros de cases** de l'imprimé de la déclaration mensuelle.

Pour ces sujets, se reporter aux autres fichiers de `references/`, en respectant leur marquage de
fiabilité.
