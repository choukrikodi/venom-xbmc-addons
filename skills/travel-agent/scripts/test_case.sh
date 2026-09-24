#!/usr/bin/env bash
# Runner générique. Toutes les valeurs de voyage proviennent du manifeste JSON.
set -euo pipefail
SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
CASE_FILE="${TRAVEL_CASE_FILE:-${1:-}}"
OUTPUT_DIR="${TRAVEL_OUTPUT_DIR:-out}"
CLIENT="${TRAVEL_MCP_CLIENT:-$SCRIPT_DIR/mcp_call.py}"
PYTHON_BIN="${TRAVEL_PYTHON:-python3}"
KIWI_URL="${KIWI_MCP_URL:-https://mcp.kiwi.com}"
TRIVAGO_URL="${TRIVAGO_MCP_URL:-https://mcp.trivago.com/mcp}"
DRY_RUN="${TRAVEL_DRY_RUN:-0}"
if [[ -z "$CASE_FILE" ]]; then
  printf '%s\n' 'Usage : TRAVEL_CASE_FILE=manifeste.json [TRAVEL_DRY_RUN=1] bash scripts/test_case.sh' >&2
  exit 2
fi
"$PYTHON_BIN" - "$CASE_FILE" "$OUTPUT_DIR" "$CLIENT" "$KIWI_URL" "$TRIVAGO_URL" "$DRY_RUN" <<'PY'
import json,re,subprocess,sys
from pathlib import Path
case_file,out_dir,client,kiwi_url,trivago_url,dry_run=sys.argv[1:]
if dry_run not in {'0','1'}:
    raise SystemExit('TRAVEL_DRY_RUN doit valoir 0 ou 1')
manifest=json.loads(Path(case_file).read_text())
requests=manifest.get('requests',[])
endpoints={'kiwi':kiwi_url,'trivago':trivago_url}
seen=set()
if not requests:
    raise SystemExit('Manifeste sans requête')
for request in requests:
    name=request.get('name','')
    if not re.fullmatch(r'[A-Za-z0-9_-]+',name) or name in seen:
        raise SystemExit('Nom de sortie invalide ou dupliqué')
    seen.add(name)
    if request.get('server') not in endpoints or not request.get('tool') or not isinstance(request.get('arguments'),dict):
        raise SystemExit('Requête invalide')
if dry_run=='1':
    print(json.dumps({'dry_run':True,'requests':requests},ensure_ascii=False,indent=2))
    raise SystemExit(0)
output=Path(out_dir)
output.mkdir(parents=True,exist_ok=True)
failed=[]
for request in requests:
    target=output/(request['name']+'.json')
    with target.open('w') as stream:
        result=subprocess.run([sys.executable,client,endpoints[request['server']],'call',request['tool'],
                               json.dumps(request['arguments'],ensure_ascii=False)],stdout=stream,check=False)
    if result.returncode:
        failed.append(request['name'])
if failed:
    print('Appels en échec : '+', '.join(failed),file=sys.stderr)
    raise SystemExit(1)
PY
