#!/usr/bin/env bash
# Sauvegarde bornée au dossier autorisé, sans force-push ni autostash.
# Usage : ci_save.sh CHEMIN MESSAGE
# CI_BRANCH, CI_REMOTE (origin), CI_PUSH_ATTEMPTS (3).
set -euo pipefail
TARGET="${1:-}"
MESSAGE="${2:-}"
if [[ $# != 2 || -z "$TARGET" || -z "$MESSAGE" ]]; then
  printf '%s\n' 'Usage : ci_save.sh CHEMIN MESSAGE' >&2
  exit 2
fi
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
python3 -B "$SCRIPT_DIR/ci_paths.py" save-target "$TARGET"
REMOTE="${CI_REMOTE:-origin}"
BRANCH="${CI_BRANCH:-$(git symbolic-ref --short HEAD)}"
ATTEMPTS="${CI_PUSH_ATTEMPTS:-3}"
if [[ ! "$ATTEMPTS" =~ ^[1-5]$ ]]; then
  echo '::error::CI_PUSH_ATTEMPTS doit être compris entre 1 et 5' >&2
  exit 2
fi
git check-ref-format "refs/heads/$BRANCH"
if ! git diff --cached --quiet; then
  echo '::error::Index déjà modifié : sauvegarde refusée' >&2
  exit 1
fi
git config user.name 'github-actions[bot]'
git config user.email '41898699+github-actions[bot]@users.noreply.github.com'
git add -A -- "$TARGET"
rc=0
git diff --cached --quiet || rc=$?
if [[ "$rc" == 0 ]]; then
  echo "::notice::Rien à commiter pour $TARGET"
  echo 'saved=none'
  exit 0
elif [[ "$rc" != 1 ]]; then
  echo '::error::Lecture de l’index impossible' >&2
  exit "$rc"
fi
# Ne pas embarquer des modifications étrangères via un autostash.
if ! git diff --quiet; then
  echo '::error::Modifications non indexées hors du dossier cible' >&2
  exit 1
fi
git commit -q -m "$MESSAGE"
for ((attempt=1; attempt<=ATTEMPTS; attempt++)); do
  if git fetch -q "$REMOTE" "refs/heads/$BRANCH"; then
    if ! git rebase -q FETCH_HEAD; then
      echo '::error::Rebase échoué ; aucun push effectué' >&2
      git rebase --abort
      exit 1
    fi
    if git push -q "$REMOTE" "HEAD:refs/heads/$BRANCH"; then
      echo 'saved=pushed'
      exit 0
    fi
  fi
  echo "::warning::push tentative $attempt/$ATTEMPTS échouée"
  if (( attempt < ATTEMPTS )); then sleep "$attempt"; fi
done
echo "::error::push impossible après $ATTEMPTS tentatives"
exit 1
