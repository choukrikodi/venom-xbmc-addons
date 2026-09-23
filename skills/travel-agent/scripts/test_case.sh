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

# --- Dates flexibles : départ 15/11→10/12/2026, 16–18 nuits, 2 adultes ---
K='"adults":2,"currency":"EUR","locale":"fr","sort":"price"'
W='"departureDate":"15/11/2026","departureDateTo":"10/12/2026"'
# Aller-retour, meilleure offre par passerelle (PH / MY / TH sud)
python3 $C https://mcp.kiwi.com call search-flight \
  "{\"flyFrom\":\"BRU\",\"flyTo\":\"MNL,CEB,PPS,KUL,PEN,LGK,HKT,KBV\",$W,\"nights_in_dst_from\":16,\"nights_in_dst_to\":18,\"one_for_city\":true,$K}" \
  | tee out/kiwi_flex_rt.json || true
# Open-jaw : aller simple vers les Philippines, retour simple depuis MY/TH
python3 $C https://mcp.kiwi.com call search-flight \
  "{\"flyFrom\":\"BRU\",\"flyTo\":\"MNL,CEB,PPS\",$W,\"one_for_city\":true,$K}" \
  | tee out/kiwi_flex_ow_out.json || true
python3 $C https://mcp.kiwi.com call search-flight \
  "{\"flyFrom\":\"KUL,PEN,LGK,HKT,KBV\",\"flyTo\":\"BRU\",\"departureDate\":\"01/12/2026\",\"departureDateTo\":\"28/12/2026\",\"one_for_city\":true,$K}" \
  | tee out/kiwi_flex_ow_back.json || true
# Tendances prix hôtels 3–5★ par destination, nov→déc
for q in "El Nido" "Coron" "Boracay" "Langkawi" "Penang" "Krabi" "Koh Lanta" "Phuket"; do
  f=$(echo "$q" | tr ' A-Z' '_a-z')
  python3 $C https://mcp.trivago.com/mcp call trivago-destination-price-trends \
    "{\"query\":\"$q\",\"start_month\":\"2026-11\",\"end_month\":\"2026-12\",\"country\":\"BE\",\"currency\":\"EUR\",\"hotel_rating\":{\"3star\":true,\"4star\":true,\"5star\":true}}" \
    > out/trends_$f.json || true
done
