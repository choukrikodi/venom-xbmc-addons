#!/usr/bin/env python3
"""Minimal MCP Streamable-HTTP client (stdlib only, no API key).

Usage:
  mcp_call.py URL list
  mcp_call.py URL call TOOL '{"arg": "value"}'

Prints raw JSON-RPC responses, prefixed with a UTC timestamp.
"""
import json
import sys
import urllib.request
from datetime import datetime, timezone

HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json, text/event-stream",
    "User-Agent": "travel-agent-skill/1.0",
}


def ts():
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def post(url, payload, session=None):
    headers = dict(HEADERS)
    if session:
        headers["Mcp-Session-Id"] = session
    req = urllib.request.Request(url, json.dumps(payload).encode(), headers)
    with urllib.request.urlopen(req, timeout=90) as r:
        sid = r.headers.get("Mcp-Session-Id") or session
        body = r.read().decode("utf-8", "replace")
        ctype = r.headers.get("Content-Type", "")
    if "text/event-stream" in ctype:
        msgs = [json.loads(l[5:]) for l in body.splitlines()
                if l.startswith("data:") and l[5:].strip()]
        body = msgs[-1] if msgs else None
    else:
        body = json.loads(body) if body.strip() else None
    return sid, body


def open_session(url):
    sid, _ = post(url, {
        "jsonrpc": "2.0", "id": 1, "method": "initialize",
        "params": {"protocolVersion": "2025-03-26", "capabilities": {},
                   "clientInfo": {"name": "travel-agent", "version": "1.0"}}})
    post(url, {"jsonrpc": "2.0", "method": "notifications/initialized"}, sid)
    return sid


def main():
    url, action = sys.argv[1], sys.argv[2]
    sid = open_session(url)
    if action == "list":
        _, res = post(url, {"jsonrpc": "2.0", "id": 2, "method": "tools/list"}, sid)
    else:
        tool, args = sys.argv[3], json.loads(sys.argv[4])
        _, res = post(url, {"jsonrpc": "2.0", "id": 2, "method": "tools/call",
                            "params": {"name": tool, "arguments": args}}, sid)
    print(f"=== {ts()} {url} {action} {' '.join(sys.argv[3:])}")
    print(json.dumps(res, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
