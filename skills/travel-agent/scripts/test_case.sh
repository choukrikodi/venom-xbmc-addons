#!/usr/bin/env bash
# Cas de test : 2 adultes, BRU→MNL, 28/11→09/12/2026 ; Palawan 5 nuits.
C=skills/travel-agent/scripts/mcp_call.py
mkdir -p out
python3 $C https://mcp.kiwi.com call search-flight \
  '{"flyFrom":"BRU","flyTo":"MNL","departureDate":"28/11/2026","returnDate":"09/12/2026","passengers":{"adults":2},"curr":"EUR","locale":"fr"}' \
  | tee out/kiwi.json || true
python3 $C https://mcp.trivago.com/mcp call trivago-search-suggestions \
  '{"query":"Palawan"}' | tee out/trivago_suggest.json || true
