#!/usr/bin/env python3
"""Tests stdlib hors réseau des scripts CI (ci_paths.py, ci_save.sh)."""
import importlib.util
import io
import os
import subprocess
import sys
import tempfile
import unittest
from contextlib import redirect_stdout
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("ci_paths", ROOT / "scripts/ci_paths.py")
ci = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ci)
FILES = ci.FILES_DIR


class CaseFileTests(unittest.TestCase):
    def test_valid(self):
        self.assertEqual(ci.validate_case_file(f"{FILES}/asie_v2.json"), f"{FILES}/asie_v2.json")

    def test_rejected(self):
        for bad in [f"{FILES}/../secrets.json", f"{FILES}/web/assets.json", "skills/travel-agent/scripts/x.json",
                    f"{FILES}/rapport-asie-v3.md", f"{FILES}/.json", f"{FILES}/a b.json", f"/{FILES}/asie_v2.json",
                    f"{FILES}//asie_v2.json", "", "..", f"{FILES}/asie_v2.json/"]:
            with self.subTest(bad=bad), self.assertRaises(ValueError):
                ci.validate_case_file(bad)


class OutputDirTests(unittest.TestCase):
    def test_valid(self):
        for good in ["skills/travel-agent/test-output", "skills/travel-agent/test-output-v3",
                     "skills/travel-agent/test-output-v4-tun-b"]:
            self.assertEqual(ci.validate_output_dir(good), good)

    def test_rejected(self):
        for bad in ["skills/travel-agent/test-output/", "skills/travel-agent/test-output-", "skills/travel-agent/test-output-v3/..",
                    "skills/travel-agent/../test-output", "skills/travel-agent/test-output-v3/sub", "skills/travel-agent/test-output-archive",
                    "skills/travel-agent/test-output-a_b", "skills/travel-agent/test-outputs", "skills/travel-agent", "/tmp", ""]:
            with self.subTest(bad=bad), self.assertRaises(ValueError):
                ci.validate_output_dir(bad)


class DestForTests(unittest.TestCase):
    def test_mapping(self):
        for case, out in [("asie_v2", "test-output"), ("asie_v3", "test-output-v3"), ("asie_v4_tun_b", "test-output-v4-tun-b")]:
            self.assertEqual(ci.dest_for(f"{FILES}/{case}.json"), f"skills/travel-agent/{out}")

    def test_dest_requires_valid_case(self):
        with self.assertRaises(ValueError):
            ci.dest_for(f"{FILES}/web/assets.json")


class SelectTests(unittest.TestCase):
    def test_only_direct_json_manifests(self):
        changed = [f"{FILES}/web/assets.json", f"{FILES}/asie_v3.json", f"{FILES}/rapport-asie-v3.md",
                   "skills/travel-agent/scripts/mcp_call.py", f"{FILES}/asie_v2.json", f"{FILES}/gone.json", "README.md"]
        selected, ignored = ci.select_changed_manifests(changed, exists=lambda p: not p.endswith("gone.json"))
        self.assertEqual(selected, [{"case": f"{FILES}/asie_v2.json", "out": "skills/travel-agent/test-output"},
                                    {"case": f"{FILES}/asie_v3.json", "out": "skills/travel-agent/test-output-v3"}])
        self.assertEqual([p for p, _ in ignored], [f"{FILES}/gone.json", f"{FILES}/rapport-asie-v3.md", f"{FILES}/web/assets.json"])
        self.assertIn("supprimé", ignored[0][1])

    def test_summary_lists_both(self):
        text = ci.summary_markdown("push", [{"case": "c.json", "out": "o"}], [("x.md", "why")], "note")
        for needle in ["### Exécutés", "`c.json` → `o`", "### Ignorés", "`x.md` : why", "note"]:
            self.assertIn(needle, text)

    def test_plan_dispatch_uses_inputs_and_writes_summary(self):
        with tempfile.TemporaryDirectory() as d, mock.patch.object(ci.os.path, "exists", return_value=True):
            summary = Path(d) / "summary.md"
            env = {"GITHUB_EVENT_NAME": "workflow_dispatch", "IN_CASE": f"{FILES}/asie_v3.json", "IN_OUT": "",
                   "GITHUB_STEP_SUMMARY": str(summary)}
            out = io.StringIO()
            with mock.patch.dict(os.environ, env, clear=False), redirect_stdout(out):
                self.assertEqual(ci.main(["plan"]), 0)
            self.assertIn('matrix={"include": [{"case": "' + FILES + '/asie_v3.json", "out": "skills/travel-agent/test-output-v3"}]}', out.getvalue())
            self.assertIn("empty=false", out.getvalue())
            self.assertIn("asie_v3.json", summary.read_text())

    def test_plan_dispatch_rejects_bad_output(self):
        env = {"GITHUB_EVENT_NAME": "workflow_dispatch", "IN_CASE": f"{FILES}/asie_v3.json", "IN_OUT": "/tmp/x"}
        with mock.patch.dict(os.environ, env, clear=False), self.assertRaises(ValueError):
            ci.main(["plan"])

    def test_check_cli_exit_codes(self):
        script = str(ROOT / "scripts/ci_paths.py")
        ok = subprocess.run([sys.executable, "-B", script, "check", f"{FILES}/asie_v2.json", "skills/travel-agent/test-output"], capture_output=True)
        self.assertEqual(ok.returncode, 0)
        bad = subprocess.run([sys.executable, "-B", script, "check", f"{FILES}/asie_v2.json", "skills/travel-agent/test-output/../x"], capture_output=True, text=True)
        self.assertEqual(bad.returncode, 2)
        self.assertIn("::error::", bad.stderr)


class PreviousNoteTests(unittest.TestCase):
    def test_note_and_empty(self):
        note = ci.previous_note("skills/travel-agent/test-output-v3", "abc123 2026-09-24T11:48:25+00:00 Restore\n", "42")
        self.assertIn("`abc123`", note)
        self.assertIn("run 42", note)
        self.assertIn("git show abc123:skills/travel-agent/test-output-v3/", note)
        self.assertIsNone(ci.previous_note("x", "", "42"))


def git(*args, cwd, **kw):
    return subprocess.run(["git", *args], cwd=cwd, capture_output=True, text=True, **kw)


class SaveScriptTests(unittest.TestCase):
    """ci_save.sh contre un dépôt bare local : aucun réseau."""

    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        base = Path(self.tmp.name)
        self.bare = base / "origin.git"
        self.work = base / "work"
        git("init", "-q", "--bare", "-b", "main", str(self.bare), cwd=base, check=True)
        git("clone", "-q", str(self.bare), str(self.work), cwd=base, check=True)
        git("config", "user.email", "t@example.invalid", cwd=self.work, check=True)
        git("config", "user.name", "t", cwd=self.work, check=True)
        git("checkout", "-q", "-b", "main", cwd=self.work, check=True)
        (self.work / "seed").write_text("seed")
        git("add", "seed", cwd=self.work, check=True)
        git("commit", "-q", "-m", "seed", cwd=self.work, check=True)
        git("push", "-q", "-u", "origin", "main", cwd=self.work, check=True)
        self.env = {k: v for k, v in os.environ.items() if not k.startswith("CI_")}
        self.env.update(CI_BRANCH="main", CI_PUSH_ATTEMPTS="2", GIT_TERMINAL_PROMPT="0")

    def tearDown(self):
        self.tmp.cleanup()

    def save(self, target="out", message="msg"):
        return subprocess.run(["bash", str(ROOT / "scripts/ci_save.sh"), target, message], cwd=self.work,
                              env=self.env, capture_output=True, text=True)

    def test_nothing_to_commit_is_success(self):
        result = self.save()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("Rien à commiter", result.stdout)
        self.assertIn("saved=none", result.stdout)

    def test_push_after_upstream_change(self):
        # Un autre commit arrive sur origin entre-temps : pull --rebase doit passer.
        other = Path(self.tmp.name) / "other"
        git("clone", "-q", str(self.bare), str(other), cwd=self.tmp.name, check=True)
        git("config", "user.email", "o@example.invalid", cwd=other, check=True)
        git("config", "user.name", "o", cwd=other, check=True)
        (other / "elsewhere").write_text("x")
        git("add", "elsewhere", cwd=other, check=True)
        git("commit", "-q", "-m", "other", cwd=other, check=True)
        git("push", "-q", "origin", "main", cwd=other, check=True)
        (self.work / "out").mkdir()
        (self.work / "out" / "a.json").write_text("{}")
        result = self.save()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("saved=pushed", result.stdout)
        log = git("log", "--format=%s", "main", cwd=self.bare).stdout.split()
        self.assertEqual(log[:2], ["msg", "other"])

    def test_push_failure_is_failure(self):
        git("remote", "set-url", "origin", str(Path(self.tmp.name) / "missing.git"), cwd=self.work, check=True)
        (self.work / "out").mkdir()
        (self.work / "out" / "a.json").write_text("{}")
        result = self.save()
        self.assertEqual(result.returncode, 1)
        self.assertIn("push impossible", result.stdout)
        self.assertEqual(git("log", "--format=%s", cwd=self.work).stdout.split()[0], "msg")

    def test_usage(self):
        result = subprocess.run(["bash", str(ROOT / "scripts/ci_save.sh")], cwd=self.work, env=self.env, capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)


if __name__ == "__main__":
    unittest.main(verbosity=2)
