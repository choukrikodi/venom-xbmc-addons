#!/usr/bin/env python3
"""Validation des chemins et sélection des manifestes pour le workflow CI.

Stdlib seule, aucun réseau. Les valeurs de voyage ne sont jamais lues ici :
seuls des chemins de dépôt sont manipulés.

Sous-commandes :
  plan                  lit GITHUB_EVENT_NAME, BEFORE, GITHUB_SHA, IN_CASE,
                        IN_OUT ; écrit matrix=/empty= sur stdout (GITHUB_OUTPUT)
                        et un résumé Markdown dans GITHUB_STEP_SUMMARY.
  check CASE OUT        valide les deux chemins ; code 2 si refus.
  previous DEST RUN_ID  imprime le contenu de PREVIOUS.md (référence du
                        dernier commit ayant touché DEST) si DEST est suivi
                        par git ; rien sinon.
"""
import json
import os
import re
import subprocess
import sys

FILES_DIR = "skills/travel-agent/evals/files"
OUTPUT_BASE = "skills/travel-agent/test-output"
OUTPUT_RE = re.compile(r"^skills/travel-agent/test-output(?:-(?P<suffix>[A-Za-z0-9-]+))?$")
RESERVED_SUFFIXES = {"archive"}


def _plain(path, label):
    if not isinstance(path, str) or not path:
        raise ValueError(f"{label} : chemin vide")
    if path.startswith("/") or "\\" in path or "\0" in path:
        raise ValueError(f"{label} : chemin absolu ou caractère interdit")
    if ".." in path.split("/"):
        raise ValueError(f"{label} : traversée '..' refusée")
    if "//" in path or path.endswith("/"):
        raise ValueError(f"{label} : slash superflu")
    return path


def validate_case_file(path):
    """Manifeste JSON directement sous evals/files (pas de sous-dossier)."""
    path = _plain(path, "case_file")
    head, _, name = path.rpartition("/")
    if head != FILES_DIR:
        raise ValueError(f"case_file : doit être directement sous {FILES_DIR}/")
    if not name.endswith(".json") or name == ".json":
        raise ValueError("case_file : extension .json requise")
    if not re.fullmatch(r"[A-Za-z0-9_-]+\.json", name):
        raise ValueError("case_file : nom limité à [A-Za-z0-9_-]")
    return path


def validate_output_dir(path):
    """test-output ou test-output-<suffixe alphanumérique/tirets>."""
    path = _plain(path, "output_dir")
    match = OUTPUT_RE.fullmatch(path)
    if not match:
        raise ValueError(f"output_dir : doit être {OUTPUT_BASE} ou {OUTPUT_BASE}-<suffixe>")
    suffix = match.group("suffix")
    if suffix is not None and (suffix in RESERVED_SUFFIXES or suffix.startswith("-") or suffix.endswith("-")):
        raise ValueError("output_dir : suffixe réservé ou mal formé")
    return path


def dest_for(case_file):
    """asie_v2 → test-output ; asie_v3 → test-output-v3 ; asie_v4_tun_b → test-output-v4-tun-b."""
    case_file = validate_case_file(case_file)
    base = case_file.rsplit("/", 1)[1][:-5]
    if base == "asie_v2":
        return OUTPUT_BASE
    suffix = base.replace("asie_", "", 1).replace("_", "-")
    return validate_output_dir(f"{OUTPUT_BASE}-{suffix}")


def select_changed_manifests(changed_files, exists=os.path.exists):
    """Retourne (retenus, ignorés). Retenus : [{case, out}] ; ignorés : [(chemin, raison)]."""
    selected, ignored = [], []
    for path in sorted(set(changed_files)):
        if not path.startswith("skills/travel-agent/"):
            continue
        try:
            case = validate_case_file(path)
        except ValueError as exc:
            if path.startswith(FILES_DIR + "/"):
                ignored.append((path, str(exc)))
            continue
        if not exists(case):
            ignored.append((path, "supprimé par ce push"))
            continue
        selected.append({"case": case, "out": dest_for(case)})
    return selected, ignored


def changed_files(before, sha):
    """Fichiers modifiés entre before et sha ; repli sur le seul commit sha."""
    usable = bool(before) and not before.startswith("0000000") and \
        subprocess.run(["git", "cat-file", "-e", before], capture_output=True).returncode == 0
    cmd = ["git", "diff", "--name-only", before, sha] if usable else ["git", "show", "--name-only", "--format=", sha]
    return subprocess.run(cmd, capture_output=True, text=True, check=True).stdout.split()


def summary_markdown(event, selected, ignored, note=None):
    lines = ["## Scénarios MCP", "", f"Événement : `{event}`", ""]
    if note:
        lines += [note, ""]
    lines.append("### Exécutés" if selected else "### Exécutés : aucun")
    for item in selected:
        lines.append(f"- `{item['case']}` → `{item['out']}`")
    lines += ["", "### Ignorés" if ignored else "### Ignorés : aucun"]
    for path, reason in ignored:
        lines.append(f"- `{path}` : {reason}")
    return "\n".join(lines) + "\n"


def plan(env):
    event = env.get("GITHUB_EVENT_NAME", "")
    note = None
    if event == "workflow_dispatch":
        case = validate_case_file(env.get("IN_CASE", ""))
        out = validate_output_dir(env["IN_OUT"]) if env.get("IN_OUT") else dest_for(case)
        selected, ignored = [{"case": case, "out": out}], []
        if not os.path.exists(case):
            raise ValueError(f"case_file introuvable : {case}")
    else:
        before, sha = env.get("BEFORE", ""), env["GITHUB_SHA"]
        files = changed_files(before, sha)
        selected, ignored = select_changed_manifests(files)
        if not selected:
            note = "Aucun manifeste JSON modifié : les manifestes inchangés ne sont jamais rejoués."
    return {"matrix": {"include": selected}, "empty": not selected,
            "summary": summary_markdown(event, selected, ignored, note)}


def previous_note(dest, commit_line, run_id):
    """Texte PREVIOUS.md : référence du dernier commit ayant touché dest."""
    commit_line = (commit_line or "").strip()
    if not commit_line:
        return None
    sha, _, rest = commit_line.partition(" ")
    return ("# Traces précédentes\n\n"
            f"Ce dossier `{dest}` a été réécrit par le run {run_id}. "
            f"Les traces antérieures restent lisibles dans l'historique git :\n\n"
            f"- commit `{sha}` ({rest})\n"
            f"- `git show {sha}:{dest}/<fichier>.json`\n")


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    if argv[0] == "plan":
        result = plan(os.environ)
        print("matrix=" + json.dumps(result["matrix"]))
        print("empty=" + ("true" if result["empty"] else "false"))
        summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
        if summary_path:
            with open(summary_path, "a", encoding="utf-8") as handle:
                handle.write(result["summary"])
        else:
            print(result["summary"], file=sys.stderr)
        return 0
    if argv[0] == "check" and len(argv) == 3:
        validate_case_file(argv[1])
        validate_output_dir(argv[2])
        return 0
    if argv[0] == "previous" and len(argv) == 3:
        dest = validate_output_dir(argv[1])
        tracked = subprocess.run(["git", "ls-files", "--error-unmatch", dest], capture_output=True).returncode == 0
        if not tracked:
            print(f"{dest} : nouveau dossier, pas de PREVIOUS.md", file=sys.stderr)
            return 0
        line = subprocess.run(["git", "log", "-1", "--format=%H %cI %s", "--", dest],
                              capture_output=True, text=True, check=True).stdout
        note = previous_note(dest, line, argv[2])
        if note:
            sys.stdout.write(note)
        return 0
    print(__doc__)
    return 2


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except ValueError as exc:
        print(f"::error::{exc}", file=sys.stderr)
        sys.exit(2)
