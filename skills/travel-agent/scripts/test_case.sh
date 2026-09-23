#!/usr/bin/env bash
# Cas de test : 2 adultes, BRU→MNL, 28/11→09/12/2026 ; Palawan 5 nuits.
C=skills/travel-agent/scripts/mcp_call.py
mkdir -p out
python3 $C https://mcp.kiwi.com call search-flight \
  '{"flyFrom":"BRU","flyTo":"MNL","departureDate":"28/11/2026","returnDate":"09/12/2026","adults":2,"currency":"EUR","locale":"fr"}' \
  | tee out/kiwi.json || true
python3 $C https://mcp.trivago.com/mcp call trivago-accommodation-search \
  '{"query":"Palawan, Philippines","arrival":"2026-11-30","departure":"2026-12-05","adults":2,"rooms":1,"country":"BE","currency":"EUR","hotel_rating":{"3star":true,"4star":true,"5star":true}}' \
  | tee out/trivago_palawan.json || true
