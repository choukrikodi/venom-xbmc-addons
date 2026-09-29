# Migration vers un dépôt privé dédié — audit et transfert préparé

## Constat (29/09/2026)

`choukrikodi/venom-xbmc-addons` reste **public** ; ce n'est pas l'icône de session Claude
qui décide de ça, c'est un fait de configuration du dépôt hôte GitHub, vérifié via l'API
(`visibility: public`, cf. audit initial de ce dossier). La préférence exprimée est un
dépôt **privé** dédié au projet Saint-Martin, partageable entre IA (Claude, Codex).

## Blocage constaté : création de dépôt impossible depuis cette session

Tenté ce jour : `POST /user/repos` (création d'un dépôt privé `saint-martin-2026-voyage`
sous le compte `choukrikodi`) →

```
403 Resource not accessible by integration
```

**Cause précise** : l'installation de l'app GitHub Claude sur ce compte n'a pas la
permission « Administration » au niveau du compte, seule permission qui autoriserait la
création de nouveaux dépôts via l'API par cette intégration. Ce n'est pas une limite de
cette conversation ni un refus de ma part : l'API GitHub elle-même refuse la requête
avant que je puisse agir dessus. Aucune session Claude Code, quelle qu'elle soit, ne peut
créer de dépôt tant que cette permission n'est pas accordée à l'installation.

**Remède (à faire par le voyageur, propriétaire du compte)** :
1. Créer le dépôt manuellement sur GitHub (2 minutes) : github.com/new, nom suggéré
   `saint-martin-2026-voyage` (ou autre), **Private**, sans README (l'historique migré en
   apportera un).
2. Installer/étendre l'app GitHub Claude sur ce nouveau dépôt :
   https://github.com/apps/claude/installations/select_target
3. Dans une session Claude Code future, appeler `add_repo` pour l'attacher à la session
   (visible par le raisonnement, pas une action que le voyageur doit taper lui-même —
   il suffit de demander la migration dans cette nouvelle session).

## Transfert préparé et vérifié (prêt à l'emploi, aucune donnée dupliquée ici)

L'historique Git de ce dossier a été isolé et testé **localement, sans rien pousser nulle
part** (donc rien d'exposé publiquement au-delà de ce qui l'est déjà dans ce PR) :

```sh
git subtree split --prefix=voyages/saint-martin-2026 -b saint-martin-export
```

Résultat vérifié ce jour sur la branche `claude/lucid-ride-qlbgqb` : **4 commits**,
historique propre et traçable (un commit par étape de ce dossier, messages inchangés,
horodatages Git préservés), racine du nouvel historique = ce dossier lui-même (donc il
deviendra la racine du nouveau dépôt, pas un sous-dossier).

**Une fois le dépôt privé créé et attaché** (étapes ci-dessus), la migration complète
tient en trois commandes, à exécuter par une session Claude Code qui a accès aux deux
dépôts :

```sh
git subtree split --prefix=voyages/saint-martin-2026 -b saint-martin-export
git push <url-du-nouveau-depot-prive> saint-martin-export:main
```

Puis, dans `venom-xbmc-addons`, remplacer le dossier par un pointeur (`README.md` d'une
ligne indiquant le nouveau dépôt) plutôt que de le supprimer brutalement — ne fusionne et
ne supprime rien tant que le voyageur n'a pas confirmé que le nouveau dépôt privé
contient bien tout l'historique attendu.

## Ce qui NE change pas en attendant

- La PR #5 reste la source de vérité active ; les commits y restent traçables, rien n'est
  réécrit ni fusionné.
- Aucune recherche n'est interrompue par cet audit : la priorité reste villas des îles
  voisines → vols alignés → budget (voir `README.md` et `codex-missions.md`).
- Aucune donnée personnelle ni sensible n'a été ajoutée nulle part à l'occasion de cet
  audit — ce fichier ne contient que des commandes Git et l'état d'une tentative d'appel
  API, rien de spécifique au voyage.
