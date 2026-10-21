# AGENTS.md

## Skill de référence

Pour toute tâche de planification de voyage, charge `$travel-agent`
(`skills/travel-agent/SKILL.md`, exposé aussi via `.agents/skills/` et
`.claude/skills/`). Lis les `references/` uniquement quand SKILL.md
l'indique. Les règles propres au dossier sont dans
`skills/travel-agent/AGENTS.md`.

## Protocole orchestrateur / ouvrier

- Rôle : tu es l'**ouvrier**. L'orchestrateur (Claude Code) relit chaque
  livrable et décide du périmètre.
- **Un livrable à la fois** : après chaque livrable (fichier, section,
  script), STOP et rends la main avec : chemin du fichier, ce qui a été
  fait, ce qui reste, la liste des hypothèses et la liste des données non
  vérifiées. Ne commence pas le suivant sans validation.
- **Hypothèses explicites** : toute donnée manquante (dates, budget,
  nombre de voyageurs, point de départ, nationalité) est déclarée dans une
  section `## Hypothèses` du livrable, jamais devinée en silence.
- **Aucune entrée en dur** : destinations, dates, budgets, voyageurs,
  chemins et clés viennent des arguments, de `evals/` ou de variables
  d'environnement ; pas de valeurs codées dans SKILL.md, `references/`
  ni `scripts/`.
- Ne modifie pas de fichiers hors `skills/travel-agent/` sans demande
  explicite.
- 100 % gratuit : aucune clé payante, aucun compte créé, aucune réservation.
