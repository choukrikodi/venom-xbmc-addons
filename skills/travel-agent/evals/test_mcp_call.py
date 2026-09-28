#!/usr/bin/env python3
"""Tests stdlib hors réseau. Exécuter depuis n'importe quel répertoire."""
import contextlib
import importlib.util
import io
import json
import os
import subprocess
import sys
import tempfile
import time
import unittest
import urllib.error
from datetime import datetime, timedelta, timezone
from email.message import Message
from email.utils import format_datetime
from pathlib import Path
from unittest import mock

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("travel_mcp", ROOT / "scripts/mcp_call.py")
m = importlib.util.module_from_spec(spec)
spec.loader.exec_module(m)


def response(value=None, status=200, mime="application/json", body=None, **headers):
    class Response(io.BytesIO):
        pass
    out = Response(body if body is not None else json.dumps(value).encode())
    out.status = status
    out.headers = Message()
    out.headers["Content-Type"] = mime
    for key, val in headers.items():
        out.headers[key.replace('_', '-')] = val
    return out


def rpc(result=None, request_id=2):
    return {"jsonrpc": "2.0", "id": request_id, "result": {} if result is None else result}


def http_error(code, after=None):
    headers = Message()
    if after is not None:
        headers['Retry-After'] = after
    return urllib.error.HTTPError("https://example.com/mcp", code, "fixture", headers, None)


class TransportTests(unittest.TestCase):
    def post(self):
        return m.post("https://example.com/mcp", {"jsonrpc": "2.0", "id": 2})

    def test_success_json(self):
        with mock.patch.object(m.OPENER, 'open', return_value=response(rpc({'ok': True}))):
            self.assertTrue(self.post()[1]['result']['ok'])

    def test_protocol_and_session_headers(self):
        responses = [response(rpc({'protocolVersion': m.PROTOCOL_VERSION}, 1), Mcp_Session_Id='session'),
                     response(status=202, body=b''), response(rpc({'tools': []}))]
        with mock.patch.object(m.OPENER, 'open', side_effect=responses) as request:
            result = m.main(['client', 'https://example.com/mcp', 'list'])
        self.assertEqual(result['result']['tools'], [])
        for call in request.call_args_list[1:]:
            headers = {k.lower(): v for k, v in call.args[0].header_items()}
            self.assertEqual(headers['mcp-protocol-version'], '2025-06-18')
            self.assertEqual(headers['mcp-session-id'], 'session')

    def test_protocol_mismatch_stops(self):
        with mock.patch.object(m.OPENER, 'open', return_value=response(rpc({'protocolVersion': '2099-01-01'}, 1))) as call:
            with self.assertRaises(ValueError):
                m.open_session('https://example.com/mcp')
        self.assertEqual(call.call_count, 1)

    def test_retryable_http_codes(self):
        for code in [429, 500, 502, 503, 504]:
            with self.subTest(code=code), mock.patch.object(m.OPENER, 'open', side_effect=[http_error(code, '0'), response(rpc())]) as call, mock.patch.object(m.time, 'sleep'):
                self.post()
                self.assertEqual(call.call_count, 2)

    def test_two_total_attempts(self):
        with mock.patch.object(m.OPENER, 'open', side_effect=[http_error(503), http_error(503)]) as call, mock.patch.object(m.time, 'sleep'), contextlib.redirect_stderr(io.StringIO()):
            with self.assertRaises(urllib.error.HTTPError):
                self.post()
        self.assertEqual(call.call_count, 2)

    def test_permanent_http_not_retried(self):
        with mock.patch.object(m.OPENER, 'open', side_effect=http_error(400)) as call:
            with self.assertRaises(urllib.error.HTTPError):
                self.post()
        self.assertEqual(call.call_count, 1)

    def test_network_and_truncation_retry(self):
        errors = [urllib.error.URLError('fixture'), TimeoutError(), ConnectionResetError(), m.http.client.IncompleteRead(b'partial')]
        for error in errors:
            with self.subTest(error=type(error).__name__), mock.patch.object(m.OPENER, 'open', side_effect=[error, response(rpc())]) as call, mock.patch.object(m.time, 'sleep'):
                self.post()
                self.assertEqual(call.call_count, 2)

    def test_retry_after_seconds(self):
        self.assertEqual(m.retry_delay('3', 0), 3)

    def test_retry_after_date(self):
        value = format_datetime(datetime.now(timezone.utc) + timedelta(seconds=4), usegmt=True)
        self.assertTrue(2 <= m.retry_delay(value, 0) <= 4)

    def test_retry_after_long_is_deferred(self):
        with mock.patch.object(m.OPENER, 'open', side_effect=http_error(429, '30')) as call, mock.patch.object(m.time, 'sleep') as sleep:
            with self.assertRaises(m.RetryLater):
                self.post()
        self.assertEqual(call.call_count, 1)
        sleep.assert_not_called()

    def test_bad_retry_after_uses_jitter(self):
        with mock.patch.object(m.random, 'uniform', return_value=.25):
            self.assertEqual(m.retry_delay('NaN', 0), 1.25)
            self.assertEqual(m.retry_delay(None, 4), 5)

    def test_sse_returns_before_eof(self):
        class OpenStream:
            def __init__(self):
                self.lines = iter([b':keepalive\n', b'\n', b'data: {"jsonrpc":"2.0","method":"notifications/progress"}\n', b'\n', b'data: {"jsonrpc":"2.0",\n', b'data: "id":2,"result":{"ok":true}}\n', b'\n'])
            def readline(self):
                # Une lecture après la réponse échoue : pas d'attente d'EOF.
                return next(self.lines)
        self.assertTrue(m.read_sse(OpenStream(), 2)['result']['ok'])

    def test_sse_wrong_id_then_expected(self):
        body = 'data: '+json.dumps(rpc({}, 99))+'\n\ndata: '+json.dumps(rpc({'ok': True}))+'\n\n'
        self.assertTrue(m.decode_sse(body, 2)['result']['ok'])

    def test_sse_incomplete_stream(self):
        with self.assertRaises(m.http.client.IncompleteRead):
            m.decode_sse('data: {"jsonrpc":"2.0","method":"notification"}\n\n', 2)

    def test_wrong_response_id(self):
        with mock.patch.object(m.OPENER, 'open', return_value=response(rpc({}, 88))):
            with self.assertRaises(ValueError):
                self.post()

    def test_jsonrpc_error_is_preserved_no_retry(self):
        error = {'jsonrpc': '2.0', 'id': 2, 'error': {'code': -32602, 'message': 'fixture'}}
        with mock.patch.object(m.OPENER, 'open', return_value=response(error)) as call:
            self.assertEqual(self.post()[1], error)
        self.assertEqual(call.call_count, 1)

    def test_flat_arguments_allow_schema_objects(self):
        args = {'query':'fixture','hotel_rating':{'4star':True}}
        with mock.patch.object(m, 'open_session', return_value=None), mock.patch.object(m, 'post', return_value=(None, rpc())) as post:
            m.main(['client','https://example.com/mcp','call','search',json.dumps(args)])
        self.assertEqual(post.call_args.args[1]['params']['arguments'], args)

    def test_bad_arguments_before_network(self):
        for value in ['[]','{"x": NaN}']:
            with mock.patch.object(m.OPENER, 'open') as call:
                with self.assertRaises(ValueError):
                    m.main(['client','https://example.com/mcp','call','search',value])
                call.assert_not_called()

    def test_invalid_endpoint(self):
        for url in ['https://', 'http://example.com', 'https://name:secret@example.com']:
            with self.assertRaises(ValueError):
                m.validate_url(url)

    def test_cli_errors_are_json_and_nonzero(self):
        stream = io.StringIO()
        with contextlib.redirect_stdout(stream):
            code = m.cli(['client','https://example.com','call','tool','[]'])
        self.assertEqual(code, 2)
        self.assertTrue(stream.getvalue().splitlines()[0].startswith('=== '))
        self.assertIn('client_error', json.loads(stream.getvalue().split('\n',1)[1]))

    def test_tool_error_exit_code(self):
        with mock.patch.object(m, 'main', return_value=rpc({'isError': True})), contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(m.cli(['client']), 1)

    def test_kiwi_host_shares_slot_and_waits(self):
        with tempfile.TemporaryDirectory() as directory, mock.patch.dict(os.environ, {'TRAVEL_MCP_RATE_DIR':directory}):
            with m.kiwi_slot('https://mcp.kiwi.com'):
                pass
            first_end = time.monotonic()
            with m.kiwi_slot('https://mcp.kiwi.com/'):
                self.assertGreaterEqual(time.monotonic() - first_end, .49)
            self.assertEqual(len(list(Path(directory).glob('*.clock'))), 1)

    def test_future_clock_does_not_hang(self):
        with tempfile.TemporaryDirectory() as directory, mock.patch.dict(os.environ, {'TRAVEL_MCP_RATE_DIR':directory}):
            with m.kiwi_slot('https://mcp.kiwi.com'):
                pass
            next(Path(directory).glob('*.clock')).write_text(str(time.monotonic()+100000))
            with mock.patch.object(m.time, 'sleep') as sleep:
                with m.kiwi_slot('https://mcp.kiwi.com'):
                    pass
                sleep.assert_not_called()


class ArtifactTests(unittest.TestCase):
    def test_three_references_and_valid_links(self):
        references = sorted((ROOT/'references').glob('*.md'))
        self.assertEqual(len(references),3)
        skill = (ROOT/'SKILL.md').read_text()
        self.assertTrue(skill.startswith('---\nname: travel-agent\n'))
        self.assertLessEqual(len(skill.splitlines()),300)
        self.assertEqual(skill.count('## Phase '),7)
        self.assertIn('## Pièges vérifiés',skill)
        self.assertIn('short-description: Planifier un voyage',skill)
        for ref in references:
            self.assertIn('references/'+ref.name, skill)

    def test_evals_have_assertions_and_unique_ids(self):
        data = json.loads((ROOT/'evals/evals.json').read_text())
        cases = data['evals']
        self.assertEqual(len(cases),4)
        self.assertEqual(len({c['id'] for c in cases}),len(cases))
        self.assertTrue(all(isinstance(c['id'],int) and c['prompt'] and c['expected_output'] and isinstance(c['files'],list) and c['expectations'] for c in cases))
        self.assertEqual(sum(len(c['expectations']) for c in cases),39)

    def test_no_test_trip_defaults_in_skill(self):
        skill = (ROOT/'SKILL.md').read_text()
        for value in ['8000', '2026-11-15', '2026-12-10', '28/11', 'Koh Lipe', 'adults=2']:
            self.assertNotIn(value,skill)


class RunnerTests(unittest.TestCase):
    def run_case(self, directory, requests, dry_run='0'):
        folder = Path(directory)
        manifest = folder/'manifest.json'
        manifest.write_text(json.dumps({'requests': requests}))
        client = folder/'fake_client.py'
        client.write_text("import json,sys\nprint(json.dumps({'fixture':sys.argv[3]}))\nsys.exit(1 if sys.argv[3]=='fail' else 0)\n")
        env = {k:v for k,v in os.environ.items() if not k.startswith('TRAVEL_')}
        env.update(TRAVEL_CASE_FILE=str(manifest), TRAVEL_OUTPUT_DIR=str(folder/'out'),
                   TRAVEL_MCP_CLIENT=str(client), TRAVEL_PYTHON=sys.executable,
                   TRAVEL_DRY_RUN=dry_run)
        result = subprocess.run(['bash', str(ROOT/'scripts/test_case.sh')], env=env,
                                text=True, capture_output=True, check=False)
        return result, folder/'out'

    def test_missing_manifest_fails_without_network(self):
        env = {k:v for k,v in os.environ.items() if not k.startswith('TRAVEL_')}
        result = subprocess.run(['bash', str(ROOT/'scripts/test_case.sh')], env=env,
                                text=True, capture_output=True, check=False)
        self.assertEqual(result.returncode, 2)
        self.assertIn('Usage', result.stderr)

    def test_dry_run_does_not_invoke_client_or_create_outputs(self):
        requests = [{'name':'one','server':'kiwi','tool':'fail','arguments':{}}]
        with tempfile.TemporaryDirectory() as directory:
            result, output = self.run_case(directory, requests, '1')
            self.assertEqual(result.returncode, 0)
            self.assertTrue(json.loads(result.stdout)['dry_run'])
            self.assertFalse(output.exists())

    def test_failure_propagates_and_later_requests_are_collected(self):
        requests = [{'name':name,'server':'kiwi','tool':tool,'arguments':{}}
                    for name,tool in [('one','fail'),('two','success')]]
        with tempfile.TemporaryDirectory() as directory:
            result, output = self.run_case(directory, requests)
            self.assertEqual(result.returncode, 1)
            self.assertIn('one', result.stderr)
            self.assertEqual(json.loads((output/'two.json').read_text())['fixture'], 'success')

    def test_invalid_output_name_is_rejected_before_execution(self):
        requests = [{'name':'valid','server':'kiwi','tool':'success','arguments':{}},
                    {'name':'../invalid','server':'kiwi','tool':'success','arguments':{}}]
        with tempfile.TemporaryDirectory() as directory:
            result, output = self.run_case(directory, requests)
            self.assertNotEqual(result.returncode, 0)
            self.assertFalse(output.exists())


if __name__ == '__main__':
    unittest.main(verbosity=2)
