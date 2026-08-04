# Code de la fiscalité locale et lois de finances — extraits lus

> **STATUT : SOURCES PRIMAIRES.**
> - **Code de la fiscalité locale 2026** (DGELF, Ministère des Finances) — **en français**
> - **Loi n° 2024-48 du 9 décembre 2024, LF 2025** — **en français**
> - **Loi n° 2025-17 du 12 décembre 2025, LF 2026** — reçue, **non encore dépouillée**
>
> **Portée de ma lecture** : je n'ai lu **aucun de ces textes intégralement**. J'ai lu les
> articles **37, 38 et 61 à 63** du code de la fiscalité locale, et les articles **36 et 37** de
> la LF 2025. Le reste n'est pas lu.

---

## 1. ⭐⭐ Origine de l'erreur sur les taux d'IS — élucidée

C'est la pièce qui manquait pour comprendre comment une information fausse s'est propagée dans
toutes les sources secondaires.

**L'article 37 de la LF 2025 est intitulé :**

> **« Appui à l'équité fiscale par l'adoption de taux progressifs de l'impôt sur les sociétés »**

**Mais son contenu dispose :**

> « Le taux de l'impôt sur les sociétés, appliqué au bénéfice imposable arrondi au dinar
> inférieur, est fixé à **20 %**. »

suivi des taux sectoriels **10 %**, **35 %** et — paragraphe 4 ajouté par ce même article —
**40 %** pour les banques, établissements financiers (y compris non-résidents, **à l'exception des
établissements de paiement**) et les entreprises d'assurance et de réassurance, y compris
mutuelles, takaful et fonds des adhérents.

Le même article **3)** déplace les **établissements de paiement** vers le taux de **35 %**, et
**4)** abroge deux tirets de l'ancienne liste.

**La « progressivité » du titre désigne l'échelonnement des taux par secteur et par activité —
pas un barème par chiffre d'affaires.** Les sources secondaires ont lu le titre et inventé un
barème 15 / 20 / 25 % par tranches de CA qui n'a jamais existé.

→ La correction portée dans `code-irpp-is.md` §1.1 est donc **doublement vérifiée** : par le code
consolidé **et** par le texte de la loi de finances elle-même.

## 2. Article 36 de la LF 2025 — barème IRPP

Le barème de l'article 44-I du code IRPP/IS est reproduit à l'identique de ce que donne
`code-irpp-is.md` §2, avec la colonne des taux effectifs à la limite supérieure.

> **« Les dispositions du présent article s'appliquent aux revenus réalisés à partir du
> 1er janvier 2025. »**

Précision utile : le barème actuel s'applique donc aux **revenus 2025 et suivants**, déclarés
en 2026.

---

## 3. ⭐ TCL — taxe sur les établissements à caractère industriel, commercial ou professionnel

Nom exact dans le code : **taxe sur les établissements à caractère industriel, commercial ou
professionnel**. C'est ce que la pratique appelle « TCL ».

### 3.1 Assiette (art. 37)

- **Principe** : le **chiffre d'affaires brut** réalisé par les établissements soumis.
- **Exception** : la taxe est calculée sur la base de **l'IR ou de l'IS** pour :
  - les personnes physiques visées à l'**article 44 bis** du code IRPP/IS (**forfaitaires**) ;
  - les établissements qui **enregistrent une perte justifiée par une comptabilité conforme** à la
    législation comptable des entreprises.

*(Modifié art. 23 LF 2012-27 portant LF 2013.)*

> Ceci **précise** ce que le guide DGI énonçait en pratique (« si la marge bénéficiaire brute ne
> dépasse pas 6 % ou si l'entreprise est déficitaire, la TCL est calculée sur la base de l'IS ou
> de l'IRPP de l'exercice N-1 »).

### 3.2 Taux (art. 38-I)

| Situation | Taux |
|---|---|
| **Cas général** | **0,2 %** du chiffre d'affaires brut |
| Personnes dont la base est l'**IR/IS** (forfaitaires, établissements en perte justifiée) | **25 %** de l'impôt |
| Établissements commercialisant **exclusivement** des produits à **prix homologués** dont la marge brute n'excède pas **6 %** (et cas mixtes, sous condition de justification l'année précédente) | **0,1 %** |
| **Chiffre d'affaires à l'exportation** | **0,1 %** |
| Établissements de **santé** servant la totalité de leurs services à des **non-résidents** | **0,1 %** |
| Prestataires de **services financiers non-résidents**, pour leurs prestations avec non-résidents | **0,1 %** |
| **SICAV à règles d'investissement allégées**, pour l'utilisation de leurs actifs avec non-résidents | **0,1 %** |

**Option** : les établissements à prix homologués peuvent **opter pour le paiement sur la base de
25 % de l'IR ou de l'IS**. ⚠️ **L'option s'exerce lors du dépôt de la déclaration mensuelle du
mois de janvier de chaque année** — c'est une échéance à ne pas manquer.

*(Ajouté art. 24 LF 2013 ; taux de 0,1 % étendu par l'art. 49 de la LF 2014.)*

### 3.3 Minimum (art. 38-II)

> La taxe **ne peut être inférieure** à la **taxe sur les immeubles bâtis (TIB)** due au titre des
> immeubles exploités dans le cadre de l'activité, **calculée sur la base de 5 % du prix de
> référence par mètre carré construit** pour chaque catégorie d'immeubles, **multiplié par la
> superficie couverte**.

**Le minimum s'applique aux établissements qui ne réalisent pas de chiffre d'affaires.**

**Catégories d'immeubles :**
1. immeuble à usage **administratif** ou d'activité **commerciale ou non commerciale** ;
2. immeuble en **construction légère** à usage **industriel** ;
3. immeuble en **béton** à usage **industriel**.

> Ceci donne la formule derrière le champ « **Minimum de la TCL** » de l'écran de liquidation
> décrit dans `guide-officiel-dgi.md` §7.3, où le guide indiquait seulement « somme des montants
> de la TIB communiqués par les collectivités locales ».

---

## 4. ⭐ Droit de licence — lacune comblée

`calendrier-et-penalites.md` signalait : « droit de licence — cité comme composante de la
déclaration mensuelle, mais **aucun taux ni échéance trouvé** ».

### 4.1 Redevables (art. 61)

> « Le droit de licence est dû par les exploitants de **café, bar, salon de thé** et d'une façon
> générale de **tous les établissements vendant des boissons à consommer sur place**. »

Le droit est fixé **selon un tarif qui tient compte des catégories d'établissements**.

⚠️ **« Le tarif des droits est fixé par décret »** — les montants ne figurent donc **pas** dans le
code. Ils restent à récupérer dans le décret d'application. **Ne pas avancer de montant.**

### 4.2 Modalités et échéance (art. 62)

- Perçu **au vu d'une déclaration fournie par l'administration**, à déposer **à la recette des
  finances**.
- **Retenue de 10 % au profit du budget de l'État.**
- **Échéance** :
  - **pendant le mois de janvier** de chaque année pour les établissements soumis à la **TCL** ou
    à la **taxe hôtelière** ;
  - **à l'occasion de la déclaration de l'impôt sur le revenu** pour les redevables au **régime
    forfaitaire**.
- **Dû pour l'année entière**, quelle que soit la date de commencement ou de cessation d'activité.

*(Art. 63 : recouvrement, contrôle, contentieux, sanctions et prescription suivent le régime du
paragraphe premier de l'article 40 du code.)*

> ⚠️ Nuance importante pour le skill : bien que le **droit de licence** figure parmi les 11 impôts
> cochables de la déclaration mensuelle sur e-t@srih, le code en fait une obligation **annuelle**,
> exigible **en janvier**. Ce n'est pas une taxe mensuelle.

---

## 5. Reste à dépouiller

- **LF 2026 (loi 2025-17 du 12/12/2025)** — reçue, non lue. À dépouiller pour les mesures
  nouvelles de l'exercice.
- **Décret fixant le tarif du droit de licence** — non détenu.
- Le reste du code de la fiscalité locale : **taxe hôtelière**, **TIB**, taxe sur les terrains non
  bâtis, contribution des riverains.
- **Code IRPP/IS articles 52-53** — taux de retenue à la source. **Toujours la lacune n° 1.**
