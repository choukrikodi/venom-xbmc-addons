# CLAUDE.md

vStream — addon de streaming francophone pour Kodi/XBMC, plus le dépôt (repository) qui le distribue.
Code **Python 2 uniquement**, exécuté par l'interpréteur embarqué de Kodi. Pas de tests, pas de linter, pas de CI.

<!-- Structure : 1. comportement (générique) → 2-6. faits propres au projet → 7. apprentissages. -->

## 1. Comportement

**Réfléchir avant de coder.** Énoncer les hypothèses à voix haute. Si deux interprétations existent, les présenter — ne pas en choisir une silencieusement. Si quelque chose est confus, s'arrêter et nommer ce qui l'est.

**Simplicité d'abord.** Le minimum de code qui résout le problème posé. Aucune fonctionnalité non demandée, aucune abstraction pour du code utilisé une seule fois, aucune gestion d'erreur pour des cas impossibles.

**Modifications chirurgicales.** Chaque ligne changée doit se rattacher directement à la demande. Ne pas « améliorer » le code adjacent, les commentaires, le formatage ou les imports. Nettoyer uniquement les orphelins que *tes* changements ont créés. Si tu repères du code mort préexistant, le signaler, pas le supprimer.

**Exécution pilotée par un objectif.** Transformer la demande en critère vérifiable *avant* d'écrire, puis vérifier réellement. « Ça compile » n'est pas « ça marche ».

Réponses en français, comme le reste du projet.

## 2. Contrainte n°1 : Python 2

Le code utilise `print` en instruction, `exec "..."` en instruction, `except Exception, e`, `urllib`/`urllib2`, `unicode()`, `md5`. C'est **voulu** : Kodi charge cet addon avec `xbmc.python 2.1.0` (voir `plugin.video.vstream/addon.xml`).

- **Ne jamais moderniser vers Python 3** sauf demande explicite. Une « correction » de syntaxe casse l'addon.
- Le conteneur n'a que Python 3.11 : `python3 -m py_compile` **échoue sur tout le projet** — c'est attendu, ce n'est pas un bug à corriger.
- Bibliothèque standard Python 2 + modules `xbmc*` seulement. **Aucune nouvelle dépendance pip.** Les dépendances sont des addons Kodi déclarés dans `addon.xml` (`metahandler`, `simplejson`, `parsedom`, `plugin.video.youtube`…).
- `setup.py` est vestigial (`install_requires=['foo>=3']`). Ne pas l'exécuter, ne pas s'en servir de référence.

## 3. Carte du dépôt

| Chemin | Rôle |
| --- | --- |
| `plugin.video.vstream/default.py` | Point d'entrée : lit `site` + `function` dans l'URL et les appelle par `exec` |
| `plugin.video.vstream/resources/sites/` | Une source = un fichier `.py` (auto-découvert) |
| `plugin.video.vstream/resources/hosters/` | Un hébergeur vidéo = un fichier `.py` implémentant `iHoster` |
| `plugin.video.vstream/resources/lib/` | Cœur : `config`, `db` (SQLite), `parser`, `player`, `download`, `favourite`, `gui/`, `handler/` |
| `plugin.video.vstream/resources/settings.xml` | Réglages Kodi, dont les interrupteurs `plugin_<site>` |
| `plugin.video.vstream/resources/language/{French,English,German}/strings.xml` | Libellés numérotés (`30000`+) |
| `repo/`, `addons.xml`, `addons.xml.md5` | Dépôt de distribution : ZIP des versions publiées |
| `ajouter_une_source.py` | Modèle commenté pour écrire une source (copie divergente dans `plugin.video.vstream/`) |

Les dossiers `sites/trash/` et `hosters/trash/` contiennent des sources désactivées : le chargeur ignore les sous-dossiers. Ne pas les réactiver sans demande.

## 4. Conventions de code

Notation hongroise, systématique — la respecter :

- Préfixes de variables : `s` chaîne, `a` liste, `o` objet, `b` booléen, `i` entier (`sHtmlContent`, `aResult`, `oGui`).
- Classes préfixées `c` (`cGui`, `cParser`, `cRequestHandler`), interfaces `i` (`iHoster`). Membres privés en `__`.
- Constantes de module en majuscules : `SITE_IDENTIFIER`, `SITE_NAME`, `SITE_DESC`, `URL_MAIN`, `MOVIE_*`, `SERIE_*`, `ANIM_*`.
- En-tête de fichier : `#-*- coding: utf-8 -*-` puis `#Venom.`
- **L'indentation est incohérente d'un fichier à l'autre** (tabulations dans `default.py` et `parser.py`, espaces ailleurs, parfois mélangées dans le même fichier). Recopier exactement l'indentation des lignes voisines. **Ne jamais réindenter un fichier entier** : le diff devient illisible et Python 2 lève `TabError`.
- HTTP → toujours `cRequestHandler`. Extraction → toujours `cParser` (regex). Pas de `requests`, pas de `BeautifulSoup`.
- Textes affichés à l'utilisateur : en français.

## 5. Ajouter une source

1. Créer `plugin.video.vstream/resources/sites/<identifiant>.py`. Partir de `ajouter_une_source.py`.
2. `SITE_IDENTIFIER` **doit être identique au nom du fichier sans `.py`** (minuscules, `_` à la place des `.` et espaces) — `cPluginHandler` importe par nom de fichier et lit ces constantes.
3. Définir `SITE_NAME`, `SITE_DESC` et une fonction `load()` : sans ces trois éléments, l'import échoue silencieusement et la source disparaît du menu.
4. Chaque nom passé à `oGui.addDir(SITE_IDENTIFIER, '<fonction>', ...)` doit exister comme fonction du module, appelable **sans argument obligatoire** — `default.py` l'appelle via `exec "plugin.<fonction>()"`. Une faute de frappe ne produit aucune erreur visible, juste un dossier vide.
5. Ajouter `<setting id="plugin_<SITE_IDENTIFIER>" type="bool" label="…" default="true"/>` dans `resources/settings.xml`, catégorie « Plugins on/off ». Sans réglage, la source est visible mais non désactivable.

## 6. Ajouter un hébergeur

Créer `resources/hosters/<nom>.py` avec une classe `cHoster(iHoster)`. Méthodes attendues (voir `hosters/vidzi.py`) : `getDisplayName`, `setDisplayName`, `getFileName`/`setFileName`, `getPluginIdentifier`, `isDownloadable`, `isJDownloaderable`, `getPattern`, `setUrl`/`getUrl`, `checkUrl`, `getMediaLink`.

`getMediaLink()` retourne un tuple `(bSucces, sUrl)` et retourne `(False, False)` en cas d'échec, après un `cGui().showInfo(...)`.

## 7. Vérifier son travail

Il n'existe **ni suite de tests, ni linter, ni CI**. Ne jamais annoncer « c'est fait » sur la seule foi d'un diff plausible. Vérifications réellement disponibles :

- Cohérence structurelle : `SITE_IDENTIFIER` == nom de fichier ; chaque fonction citée dans un `addDir` existe ; l'entrée `plugin_*` de `settings.xml` correspond.
- Relire les regex à la main sur un extrait HTML réel : `cParser.parse()` renvoie `(False, [])` sans lever d'exception, donc une regex fausse se traduit par une liste vide, pas par une erreur.
- Si un doute subsiste sur le comportement à l'exécution, le dire. Kodi + Python 2 ne sont pas installés ici : le test final se fait chez l'utilisateur.

## 8. Publier une version

Dans cet ordre :

1. Incrémenter `version` dans `plugin.video.vstream/addon.xml` **et** dans le bloc correspondant de `addons.xml` (les deux doivent concorder, sinon Kodi ne propose pas la mise à jour).
2. Compléter `plugin.video.vstream/changelog.txt`.
3. Régénérer `addons.xml` et `addons.xml.md5` : `python2 addons_xml_generator.py` **à la racine** (script Python 2 ; à défaut, éditer les deux fichiers à la main de façon cohérente).
4. Déposer le ZIP dans `repo/plugin.video.vstream/` en respectant le nommage `plugin.video.vstream-X.Y.Z.zip`.

Les URL de `addons.xml` pointent vers `LordVenom/venom-xbmc-addons` (dépôt amont). C'est un fork : **ne pas réécrire ces URL** sans demande explicite, cela redirigerait les mises à jour de tous les utilisateurs.

## 9. Interdits

- Moderniser la syntaxe Python 2, reformater, réindenter, renommer des variables « pour la lisibilité ».
- Ajouter une dépendance externe ou un gestionnaire de paquets.
- Toucher aux ZIP de `repo/` autrement que pour ajouter une nouvelle version.
- Modifier les URL de distribution, la clé PayPal du README, ou l'`id` de l'addon.
- Committer des `Thumbs.db`, `.pyo`, `.db` (déjà couverts par `.gitignore`).

## 10. Apprentissages

<!-- À compléter au fil des corrections de l'utilisateur : une ligne concrète par leçon
     (« Toujours X pour Y »), jamais d'abstraction (« attention à Y »). Élaguer ce qui devient obsolète. -->

- (vide)
