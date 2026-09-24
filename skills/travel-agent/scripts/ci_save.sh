#!/usr/bin/env bash
# Sauvegarde CI : ajoute un chemin, commite, pousse avec reprise (pull --rebase).
# Usage : ci_save.sh CHEMIN MESSAGE
# Variables : CI_BRANCH (branche cible, défaut : branche courante),
#             CI_REMOTE (défaut origin), CI_PUSH_ATTEMPTS (défaut 3).
# Codes : 0 = poussé ou rien à commiter ; 1 = échec de commit ou de push.
set -uo pipefail
TARGET="${1:-}"
MESSAGE="${2:-}"
if [[ -z "$TARGET" || -z "$MESSAGE" ]]; then
  printf '%s\n' 'Usage : ci_save.sh CHEMIN MESSAGE' >&2
  exit 2
fi
REMOTE="${CI_REMOTE:-origin}"
BRANCH="${CI_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}"
ATTEMPTS="${CI_PUSH_ATTEMPTS:-3}"

git config user.name "github-actions[bot]"
git config user.email "41898699+github-actions[bot]@users.noreply.github.com"

if [[ -e "$TARGET" ]] || git ls-files --error-unmatch -- "$TARGET" >/dev/null 2>&1; then
  git add -A -- "$TARGET" || { echo "::error::git add a échoué pour $TARGET"; exit 1; }
fi
if git diff --cached --quiet; then
  echo "::notice::Rien à commiter pour $TARGET"
  echo "saved=none"
  exit 0
fi
git commit -q -m "$MESSAGE" || { echo "::error::git commit a échoué"; exit 1; }

for attempt in $(seq 1 "$ATTEMPTS"); do
  if git pull -q --rebase --autostash "$REMOTE" "$BRANCH" && git push -q "$REMOTE" "HEAD:$BRANCH"; then
    echo "saved=pushed"
    exit 0
  fi
  echo "::warning::push tentative $attempt/$ATTEMPTS échouée"
  git rebase --abort 2>/dev/null || true
  sleep "$attempt"
done
echo "::error::push impossible après $ATTEMPTS tentatives"
exit 1
