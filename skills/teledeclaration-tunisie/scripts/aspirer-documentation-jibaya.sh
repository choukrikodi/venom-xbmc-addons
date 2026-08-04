#!/usr/bin/env bash
# Aspiration de la documentation fiscale de jibaya.tn
#
# À EXÉCUTER SUR UNE MACHINE QUI ATTEINT jibaya.tn (Tunisie, poste du cabinet).
# L'environnement d'exécution de Claude Code sur le web ne peut PAS joindre ce
# domaine : la politique de sortie réseau le refuse (connect_rejected). Ce script
# est fait pour tourner chez vous, pas côté agent.
#
# Usage :
#   bash aspirer-documentation-jibaya.sh [dossier_de_sortie]
#
# Puis déposer le dossier obtenu dans Google Drive (ou le commiter dans un dépôt
# Git accessible à la session) pour que le skill puisse lire les fichiers.

set -uo pipefail

OUT="${1:-jibaya-documentation}"
mkdir -p "$OUT"
cd "$OUT" || exit 1

UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"

echo "→ Dossier de sortie : $(pwd)"
echo

# ---------------------------------------------------------------------------
# 1. Miroir ciblé des PDF hébergés sur le site
#    jibaya.tn tourne sous WordPress : tous les documents sont sous
#    /wp-content/uploads/<année>/<mois>/
# ---------------------------------------------------------------------------
if command -v wget >/dev/null 2>&1; then
  echo "→ Aspiration des PDF via wget (récursif, PDF uniquement)"
  wget --recursive --level=4 --no-parent \
       --accept pdf,PDF \
       --no-directories --directory-prefix=pdf \
       --user-agent="$UA" \
       --wait=1 --random-wait \
       --tries=3 --timeout=30 \
       --reject-regex '.*(\?|#).*' \
       https://jibaya.tn/documentation/ \
       https://jibaya.tn/formulaires-a-telecharger/ \
       https://jibaya.tn/wp-content/uploads/ 2>&1 | tail -5
else
  echo "⚠ wget absent — passer à la section 2 (téléchargement ciblé par curl)"
fi

echo

# ---------------------------------------------------------------------------
# 2. Téléchargement ciblé des documents connus et prioritaires
#    Ces URL ont été relevées en recherche ; certaines peuvent avoir bougé.
#    Un 404 n'est pas bloquant : passer au suivant et récupérer le document
#    manquant à la main depuis jibaya.tn → DOCUMENTATION.
# ---------------------------------------------------------------------------
mkdir -p pdf
echo "→ Téléchargement ciblé des documents prioritaires"

URLS=(
  # Guides de la télédéclaration
  "https://jibaya.tn/wp-content/uploads/2023/08/sodapdf-compressed-1-1-1.pdf"
  "https://jibaya.tn/wp-content/uploads/2023/08/guide-adhesion-en-ligne-min.pdf"
  # Déclaration employeur / cahiers des charges techniques
  "https://jibaya.tn/wp-content/uploads/2026/01/EMPCCA_25V2.pdf"
  "https://jibaya.tn/wp-content/uploads/2024/02/EMPCCA_23_V_Finale.pdf"
  "https://jibaya.tn/wp-content/uploads/2024/05/TEJ-CCT-RS-V2.pdf"
  "https://jibaya.tn/wp-content/uploads/2025/11/TEJ-CCT-PS%20(1).pdf"
  "https://jibaya.tn/wp-content/uploads/2025/08/Cahier%20des%20Charges%20Techniques%20DCD_updated.pdf"
  # Déclaration pays par pays
  "https://jibaya.tn/wp-content/uploads/2023/12/Guide-dinscription-la-dclaration-pays-par-pays.pdf"
  # Notes communes citées
  "https://jibaya.tn/wp-content/uploads/2024/02/Note-Commune-N%C2%B001-4.pdf"
  "https://jibaya.tn/wp-content/uploads/2025/01/Note-Commune-N%C2%B002-2.pdf"
  "https://jibaya.tn/wp-content/uploads/2025/06/Note-Commune-N%C2%B009.pdf"
  "https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-25-3.pdf"
  "https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-09-6.pdf"
  "https://jibaya.tn/wp-content/uploads/2024/02/Note-commune-n-13-1.pdf"
)

ok=0; ko=0
for u in "${URLS[@]}"; do
  f="pdf/$(basename "${u%%\?*}" | sed 's/%20/_/g')"
  code=$(curl -sS -L --max-time 60 -A "$UA" -o "$f" -w "%{http_code}" "$u" 2>/dev/null)
  if [ "$code" = "200" ] && [ -s "$f" ]; then
    echo "  ✓ $code  $(basename "$f")"; ok=$((ok+1))
  else
    echo "  ✗ $code  $u"; rm -f "$f"; ko=$((ko+1))
  fi
  sleep 1
done

echo
echo "→ Terminé : $ok récupéré(s), $ko échec(s)"
echo "→ Fichiers dans : $(pwd)/pdf"
echo

# ---------------------------------------------------------------------------
# 3. À FAIRE À LA MAIN — documents qui ne sont pas de simples liens PDF
# ---------------------------------------------------------------------------
cat <<'RESTE'
Documents à récupérer manuellement depuis jibaya.tn → DOCUMENTATION →
« Recueils des textes fiscaux » (pages HTML avec PDF derrière) :

  [ ] Code de l'impôt sur le Revenu des Personnes Physiques et de l'IS
  [ ] Code des droits d'enregistrement et des droits de timbre   ← droit de timbre
  [ ] Code de la taxe sur la valeur ajoutée
  [ ] Code de la fiscalité locale
  [ ] Code des droits et procédures fiscaux
  [ ] Recueil des textes relatifs aux droits et taxes non incorporés dans les codes
  [ ] Incitations aux investissements
  [ ] Notes Communes (rubrique dédiée)
  [ ] Lois des Finances (rubrique dédiée)

Et, hors jibaya.tn :
  [ ] Décret fixant le tarif du droit de licence (débits de boissons)
  [ ] Imprimé officiel de la déclaration mensuelle
      → jibaya.tn/formulaires-a-telecharger/ , section « Chiffre d'affaires (CA) »

Ensuite : déposer le dossier dans Google Drive, puis demander la lecture.
Les PDF volumineux doivent être lus par la méthode binaire (download_file_content
puis décodage local), et non par le lecteur de texte, qui tronque au-delà
d'environ 190 000 caractères.
RESTE
