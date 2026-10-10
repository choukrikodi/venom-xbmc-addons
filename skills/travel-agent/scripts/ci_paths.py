#!/usr/bin/env python3
"""Validation des chemins et sélection des manifestes pour le workflow CI.

Stdlib seule, aucun réseau. Les valeurs de voyage ne sont jamais lues ici :
seuls des chemins de dépôt sont manipulés.

Sous-commandes :
  plan                  lit GITHUB_EVENT_NAME, BEFORE, GITHUB_SHA, IN_CASE,
                        IN_OUT ; écrit matrix=/empty= sur stdout (GITHUB_OUTPUT)
                        et un résumé Markdown dans GITHUB_STEP_SUMMARY.
  check CASE OUT        valide les deux chemins ; code 2 si refus.
  snapshot CASE OUT     copie out/ dans OUT/runs/<run_id>-<attempt>/,
                        sans remplacer de traces antérieures.
  save-target OUT       valide un dossier de résultats ou le dossier assets.
"""
import json
import os
import re
import subprocess
import sys
import shutil
from datetime import datetime, timezone
from pathlib import Path

FILES_DIR = "skills/travel-agent/evals/files"
OUTPUT_BASE = "skills/travel-agent/test-output"
OUTPUT_RE = re.compile(r"^skills/travel-agent/test-output(?:-(?P<suffix>[A-Za-z0-9-]+))?$")
RESERVED_SUFFIXES = {"archive"}
ASSETS_DIR = FILES_DIR + "/web/assets"


def safe_path(path):
    """Vérifie aussi le système de fichiers, y compris les parents symlinkés."""
    root = Path.cwd().resolve()
    candidate = root / path
    for part in [candidate, *candidate.parents]:
        if part == root:
            break
        if part.is_symlink():
            raise ValueError(f"Lien symbolique refusé : {part}")
    if not candidate.resolve().is_relative_to(root):
        raise ValueError("Chemin hors du dépôt")
    return candidate


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
    safe_path(path)
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
    safe_path(path)
    return path


def validate_save_target(path):
    if path != ASSETS_DIR:
        validate_output_dir(path)
    target = safe_path(path)
    if not target.is_dir():
        raise ValueError(f"Dossier à sauvegarder absent : {path}")
    for entry in target.rglob("*"):
        if entry.is_symlink():
            raise ValueError(f"Lien symbolique refusé : {entry}")
    return target


def validate_manifest(case):
    path = safe_path(validate_case_file(case))
    with path.open(encoding="utf-8") as handle:
        data = json.load(handle)
    requests = data.get("requests") if isinstance(data, dict) else None
    if not isinstance(requests, list) or not requests:
        raise ValueError(f"Manifeste sans requêtes : {case}")
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
    destinations = [item["out"] for item in selected]
    if len(destinations) != len(set(destinations)):
        raise ValueError("Plusieurs manifestes ciblent le même dossier de résultats")
    return selected, ignored


def changed_files(before, sha):
    """Fichiers modifiés entre before et sha ; repli sur le seul commit sha."""
    usable = bool(before) and not before.startswith("0000000") and \
        subprocess.run(["git", "cat-file", "-e", before], capture_output=True).returncode == 0
    cmd = ["git", "diff", "--name-only", "-z", before, sha, "--"] if usable else ["git", "show", "--name-only", "-z", "--format=", sha, "--"]
    return [p for p in subprocess.run(cmd, capture_output=True, text=True, check=True).stdout.split("\0") if p]


def summary_markdown(event, selected, ignored, note=None):
    lines = ["## Scénarios MCP", "", f"Événement : `{event}`", ""]
    if note:
        lines += [note, ""]
    lines.append("### Sélectionnés (exécution sous réserve des tests)" if selected else "### Sélectionnés : aucun")
    for item in selected:
        lines.append(f"- `{item['case']}` → `{item['out']}`")
    lines += ["", "### Ignorés" if ignored else "### Ignorés : aucun"]
    for path, reason in ignored:
        lines.append(f"- `{path}` : {reason}")
    return "\n".join(lines) + "\n"


def plan(env):
    event = env.get("GITHUB_EVENT_NAME", "")
    note = None
    assets = False
    if event == "workflow_dispatch":
        case = validate_case_file(env.get("IN_CASE", ""))
        out = validate_output_dir(env["IN_OUT"]) if env.get("IN_OUT") else dest_for(case)
        selected, ignored = [{"case": case, "out": out}], []
        assets = True
    elif event == "push":
        before, sha = env.get("BEFORE", ""), env["GITHUB_SHA"]
        files = changed_files(before, sha)
        selected, ignored = select_changed_manifests(files)
        assets = any(p in {FILES_DIR + "/web/assets.json", "skills/travel-agent/scripts/fetch_assets.py"} for p in files)
        if not selected:
            note = "Aucun manifeste JSON modifié : les manifestes inchangés ne sont jamais rejoués."
        for path in sorted(Path(FILES_DIR).glob("*.json")):
            if path.as_posix() not in files:
                ignored.append((path.as_posix(), "inchangé, pas de nouvel appel réseau"))
    else:
        raise ValueError(f"Événement non pris en charge : {event}")
    for item in selected:
        validate_manifest(item["case"])
    note = (note or "") + ("\nAssets sélectionnés." if assets else "\nAssets ignorés : manifeste et script inchangés.")
    return {"matrix": {"include": selected}, "empty": not selected,
            "assets": assets,
            "summary": summary_markdown(event, selected, ignored, note)}


def snapshot(case, dest, env):
    manifest = validate_manifest(case)
    validate_output_dir(dest)
    run_id, attempt = env.get("GITHUB_RUN_ID", ""), env.get("GITHUB_RUN_ATTEMPT", "")
    if not re.fullmatch(r"[0-9]+", run_id) or not re.fullmatch(r"[0-9]+", attempt):
        raise ValueError("run_id et attempt numériques requis")
    source = safe_path("out")
    if not source.is_dir() or not any(source.iterdir()):
        raise ValueError("Aucune trace à sauvegarder")
    for entry in source.rglob("*"):
        if entry.is_symlink():
            raise ValueError("Lien symbolique dans les traces")
    target = safe_path(f"{dest}/runs/{run_id}-{attempt}")
    if target.exists():
        raise ValueError("Cette tentative existe déjà ; remplacement refusé")
    metadata = {"case_file": case, "run_id": run_id, "attempt": attempt,
                "event_sha": env.get("GITHUB_SHA"),
                "checkout_sha": subprocess.run(["git", "rev-parse", "HEAD"], capture_output=True, text=True, check=True).stdout.strip(),
                "utc": datetime.now(timezone.utc).isoformat(timespec="seconds"),
                "list_status": env.get("LIST_STATUS"), "calls_status": env.get("CALLS_STATUS")}
    (source / "run.json").write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    shutil.copyfile(manifest, source / "manifest.json")
    shutil.copytree(source, target)
    print(f"Traces conservées : {target.relative_to(Path.cwd())}")


def main(argv):
    if not argv:
        print(__doc__)
        return 2
    if argv[0] == "plan":
        result = plan(os.environ)
        print("matrix=" + json.dumps(result["matrix"]))
        print("empty=" + ("true" if result["empty"] else "false"))
        print("assets=" + ("true" if result["assets"] else "false"))
        summary_path = os.environ.get("GITHUB_STEP_SUMMARY")
        if summary_path:
            with open(summary_path, "a", encoding="utf-8") as handle:
                handle.write(result["summary"])
        else:
            print(result["summary"], file=sys.stderr)
        return 0
    if argv[0] == "check" and len(argv) == 3:
        validate_manifest(argv[1])
        validate_output_dir(argv[2])
        return 0
    if argv[0] == "save-target" and len(argv) == 2:
        validate_save_target(argv[1])
        return 0
    if argv[0] == "snapshot" and len(argv) == 3:
        snapshot(argv[1], argv[2], os.environ)
        return 0
    print(__doc__)
    return 2


if __name__ == "__main__":
    try:
        sys.exit(main(sys.argv[1:]))
    except (ValueError, OSError, subprocess.CalledProcessError) as exc:
        print(f"::error::{exc}", file=sys.stderr)
        sys.exit(2)
