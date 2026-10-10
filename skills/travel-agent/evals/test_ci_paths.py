#!/usr/bin/env python3
"""Tests stdlib hors réseau des scripts CI (ci_paths.py, ci_save.sh)."""
import importlib.util
import contextlib
import json
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
        for needle in ["### Sélectionnés", "`c.json` → `o`", "### Ignorés", "`x.md` : why", "note"]:
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

    def test_script_only_push_does_not_replay_network(self):
        with mock.patch.object(ci, "changed_files", return_value=["skills/travel-agent/scripts/mcp_call.py"]):
            result = ci.plan({"GITHUB_EVENT_NAME": "push", "GITHUB_SHA": "fixture"})
        self.assertTrue(result["empty"])
        self.assertFalse(result["assets"])
        self.assertIn("inchangé", result["summary"])

    def test_git_diff_error_is_not_an_empty_plan(self):
        with mock.patch.object(ci, "changed_files", side_effect=subprocess.CalledProcessError(128, "git diff")):
            with self.assertRaises(subprocess.CalledProcessError):
                ci.plan({"GITHUB_EVENT_NAME": "push", "GITHUB_SHA": "fixture"})

    def test_destination_collision_is_rejected(self):
        with self.assertRaises(ValueError):
            ci.select_changed_manifests([f"{FILES}/a_b.json", f"{FILES}/a-b.json"], exists=lambda _: True)

    def test_check_cli_exit_codes(self):
        script = str(ROOT / "scripts/ci_paths.py")
        ok = subprocess.run([sys.executable, "-B", script, "check", f"{FILES}/asie_v2.json", "skills/travel-agent/test-output"], capture_output=True)
        self.assertEqual(ok.returncode, 0)
        bad = subprocess.run([sys.executable, "-B", script, "check", f"{FILES}/asie_v2.json", "skills/travel-agent/test-output/../x"], capture_output=True, text=True)
        self.assertEqual(bad.returncode, 2)
        self.assertIn("::error::", bad.stderr)


class FilesystemTests(unittest.TestCase):
    def test_symlinked_parent_and_destination_are_rejected(self):
        with tempfile.TemporaryDirectory() as d, contextlib.chdir(d):
            Path("outside").mkdir()
            Path("skills").symlink_to(Path("outside").resolve(), target_is_directory=True)
            with self.assertRaises(ValueError):
                ci.validate_output_dir("skills/travel-agent/test-output")
            with self.assertRaises(ValueError):
                ci.validate_case_file(f"{FILES}/fixture.json")

    def test_snapshot_preserves_old_prices_and_rejects_overwrite(self):
        with tempfile.TemporaryDirectory() as d, contextlib.chdir(d):
            case = Path(FILES) / "fixture.json"
            case.parent.mkdir(parents=True)
            case.write_text('{"requests":[{"name":"fixture"}]}')
            dest = Path("skills/travel-agent/test-output")
            dest.mkdir()
            (dest / "price.json").write_text('old price')
            Path("out").mkdir()
            Path("out/error.json").write_text('{"client_error":"fixture"}')
            env = {"GITHUB_RUN_ID": "42", "GITHUB_RUN_ATTEMPT": "1", "GITHUB_SHA": "event", "LIST_STATUS": "failure", "CALLS_STATUS": "skipped"}
            with mock.patch.object(ci.subprocess, "run", return_value=subprocess.CompletedProcess([], 0, "checkout\n")):
                ci.snapshot(case.as_posix(), dest.as_posix(), env)
                with self.assertRaises(ValueError):
                    ci.snapshot(case.as_posix(), dest.as_posix(), env)
                env["GITHUB_RUN_ATTEMPT"] = "2"
                ci.snapshot(case.as_posix(), dest.as_posix(), env)
            self.assertEqual((dest / "price.json").read_text(), 'old price')
            first = dest / "runs/42-1"
            self.assertTrue((first / "error.json").exists())
            self.assertEqual((first / "manifest.json").read_text(), case.read_text())
            self.assertEqual(json.loads((first / "run.json").read_text())["calls_status"], "skipped")
            self.assertTrue((dest / "runs/42-2").is_dir())


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
        self.target = "skills/travel-agent/test-output"
        (self.work / self.target).mkdir(parents=True)
        (self.work / self.target / "seed.json").write_text("{}")
        git("add", "seed", cwd=self.work, check=True)
        git("add", self.target, cwd=self.work, check=True)
        git("commit", "-q", "-m", "seed", cwd=self.work, check=True)
        git("push", "-q", "-u", "origin", "main", cwd=self.work, check=True)
        self.env = {k: v for k, v in os.environ.items() if not k.startswith("CI_")}
        self.env.update(CI_BRANCH="main", CI_PUSH_ATTEMPTS="2", GIT_TERMINAL_PROMPT="0")

    def tearDown(self):
        self.tmp.cleanup()

    def save(self, target=None, message="msg"):
        target = self.target if target is None else target
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
        (self.work / self.target / "a.json").write_text("{}")
        result = self.save()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("saved=pushed", result.stdout)
        log = git("log", "--format=%s", "main", cwd=self.bare).stdout.split()
        self.assertEqual(log[:2], ["msg", "other"])

    def test_push_failure_is_failure(self):
        git("remote", "set-url", "origin", str(Path(self.tmp.name) / "missing.git"), cwd=self.work, check=True)
        (self.work / self.target / "a.json").write_text("{}")
        result = self.save()
        self.assertEqual(result.returncode, 1)
        self.assertIn("push impossible", result.stdout)
        self.assertEqual(git("log", "--format=%s", cwd=self.work).stdout.split()[0], "msg")

    def test_conflict_aborts_without_overwriting_remote(self):
        other = Path(self.tmp.name) / "other"
        git("clone", "-q", str(self.bare), str(other), cwd=self.tmp.name, check=True)
        git("config", "user.email", "o@example.invalid", cwd=other, check=True)
        git("config", "user.name", "o", cwd=other, check=True)
        (other / self.target / "seed.json").write_text('remote change')
        git("add", self.target, cwd=other, check=True)
        git("commit", "-q", "-m", "remote", cwd=other, check=True)
        git("push", "-q", "origin", "main", cwd=other, check=True)
        (self.work / self.target / "seed.json").write_text('local change')
        result = self.save()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("Rebase échoué", result.stderr)
        self.assertEqual(git("show", "main:" + self.target + "/seed.json", cwd=self.bare).stdout, 'remote change')
        self.assertFalse((self.work / ".git/rebase-merge").exists())

    def test_detached_checkout_can_save_to_named_branch(self):
        git("checkout", "--detach", cwd=self.work, check=True)
        (self.work / self.target / "new.json").write_text("{}")
        result = self.save()
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("saved=pushed", result.stdout)

    def test_new_destination_is_saved(self):
        target = "skills/travel-agent/test-output-new"
        (self.work / target).mkdir()
        (self.work / target / "result.json").write_text("{}")
        result = self.save(target)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("saved=pushed", result.stdout)

    def test_missing_destination_is_failure(self):
        self.assertNotEqual(self.save("skills/travel-agent/test-output-missing").returncode, 0)

    def test_arbitrary_path_is_refused(self):
        result = self.save("seed")
        self.assertEqual(result.returncode, 2, result.stderr)

    def test_unrelated_staged_changes_are_not_committed(self):
        (self.work / "seed").write_text("unrelated")
        git("add", "seed", cwd=self.work, check=True)
        result = self.save()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(git("log", "-1", "--format=%s", cwd=self.work).stdout.strip(), "seed")

    def test_commit_failure_does_not_push(self):
        hook = self.work / ".git/hooks/pre-commit"
        hook.write_text("#!/bin/sh\nexit 1\n")
        hook.chmod(0o755)
        (self.work / self.target / "a.json").write_text("{}")
        result = self.save()
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(git("log", "-1", "--format=%s", cwd=self.bare).stdout.strip(), "seed")

    def test_server_rejects_push(self):
        hook = self.bare / "hooks/pre-receive"
        hook.write_text("#!/bin/sh\nexit 1\n")
        hook.chmod(0o755)
        (self.work / self.target / "a.json").write_text("{}")
        result = self.save()
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("push impossible", result.stdout)
        self.assertEqual(git("log", "-1", "--format=%s", cwd=self.bare).stdout.strip(), "seed")

    def test_usage(self):
        result = subprocess.run(["bash", str(ROOT / "scripts/ci_save.sh")], cwd=self.work, env=self.env, capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)


if __name__ == "__main__":
    unittest.main(verbosity=2)
