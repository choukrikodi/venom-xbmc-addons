# Développement et vérification de travel-agent

## Organisation

- `SKILL.md`, `agents/` et `references/` : méthode réutilisable et intégration de l'agent.
- `scripts/` : client MCP, runner paramétré, collecte d'images et utilitaires CI.
- `evals/test_*.py` : tests techniques hors réseau ; `evals/evals.json` : scénarios d'évaluation du comportement de l'agent, à exécuter séparément.
- `evals/files/*.json` : entrées des recherches de voyage, pas des valeurs par défaut du skill.
- `test-output*` : réponses brutes historiques. Les nouvelles tentatives vont dans `test-output*/runs/<run_id>-<attempt>/`. Les fichiers historiques restent à leur emplacement pour les rapports qui les citent.
- `evals/files/rapport-*.md` et `evals/files/web/` : exemples de rapports, configurateur, page de visite, données et images. Ils ne sont pas un service déployé par ce workflow.

Les traces MCP et les exemples visuels constituent l'essentiel du volume de la PR. Pour une séparation future sans supprimer les livrables ni réécrire l'historique, préparer des PR distinctes : (1) skill, scripts et CI ; (2) scénarios et preuves datées ; (3) rapports et interfaces. La PR actuelle conserve ces éléments ensemble pour préserver leur provenance.

## Plateformes et tests

Python 3.11+ et Bash sont requis pour les tests CI ; Linux est la plateforme de référence. Sous Windows, utiliser WSL ou GitHub Actions. Le client Kiwi utilise `fcntl` : Python Windows natif ne prend pas en charge cet appel. Linux/macOS disposent de ce verrou, sans constituer une preuve de disponibilité réseau du fournisseur.

Depuis la racine du dépôt, sous Linux/WSL :

```sh
python3 -B -m unittest discover -s skills/travel-agent/evals -p 'test_*.py' -v
```

Les tests utilisent des réponses simulées et des dépôts Git locaux. Ils ne contactent pas les fournisseurs et ne valident aucun prix de voyage.

## Exécution GitHub Actions

Un push touchant le workflow, les scripts, les tests ou les références déclenche les tests hors réseau, même sans changement de manifeste. Les appels MCP automatiques sont réservés aux manifestes JSON directement sous `evals/files/` modifiés dans le push. Le lancement manuel sélectionne le manifeste fourni ; une destination vide est déduite de son nom. Les images ne sont récupérées que sur lancement manuel ou modification de leur manifeste/script.

Le résumé du job `plan` distingue sélection et exécution effective : les tests peuvent encore bloquer les appels. Les jobs suivants rapportent la découverte des outils, les appels et la sauvegarde séparément. Une découverte échouée empêche les appels ; les diagnostics disponibles sont néanmoins conservés. Toute erreur de téléchargement, découverte, appel, commit ou push reste un échec du workflow. L'absence de différences Git est un succès sans nouveau commit ; un dossier absent est une erreur.

Chaque tentative MCP conserve ses réponses, les erreurs stderr, une copie du manifeste et `run.json` (UTC, commit déclencheur, commit réellement exécuté, statuts) dans un nouveau sous-dossier. Réécrire une tentative existante est interdit. Les artefacts Actions constituent un secours si le push échoue ; leur rétention dépend des réglages GitHub, ils ne remplacent pas l'archivage Git.

Les chemins sont validés avant utilisation : manifestes directs, destinations `test-output` ou `test-output-<suffixe>`, sans traversée ni liens symboliques. Seuls les jobs de sauvegarde ont `contents: write`. Les jobs écrivains et les tentatives de la matrice sont sérialisés, ainsi que les runs d'une même branche. GitHub peut remplacer un run en attente par un plus récent : vérifier les runs annulés et relancer explicitement les scénarios manqués si nécessaire.

La sauvegarde refuse un index déjà modifié ou des changements suivis hors de sa cible. Elle commite uniquement la cible, puis récupère la branche et rebase avant un push sans force. Un conflit arrête la sauvegarde ; une course au push est retentée au plus trois fois. Les publications humaines simultanées peuvent donc nécessiter une intervention, sans écrasement silencieux.

Une exécution verte prouve uniquement les contrôles techniques effectivement lancés. Les tarifs, bagages, conditions et disponibilités exigent toujours une vérification métier datée. Aucun achat ni réservation n'est effectué.
