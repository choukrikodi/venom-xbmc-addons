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

# --- Balayage des marchés Trivago (même hôtel, prix selon le pays du marché) ---
for c in BE DE FR TH MY PH US; do
  python3 $C https://mcp.trivago.com/mcp call trivago-accommodation-search \
    "{\"query\":\"El Nido, Philippines\",\"arrival\":\"2026-11-30\",\"departure\":\"2026-12-05\",\"adults\":2,\"rooms\":1,\"country\":\"$c\",\"currency\":\"EUR\",\"hotel_rating\":{\"4star\":true,\"5star\":true}}" \
    > out/market_elnido_$c.json || true
done

# --- Vols avec bagages en soute (2 adultes, 1 bagage chacun) + hôtels 4-5★ par étape de circuit ---
B='"adults":2,"adults_hold_bags":[1,1],"currency":"EUR","locale":"fr","sort":"price"'
WB='"departureDate":"26/11/2026","departureDateTo":"04/12/2026"'
# Aller-retour par destination, 16–18 nuits
for d in HKT KBV MNL; do
  f=$(echo "$d" | tr 'A-Z' 'a-z')
  python3 $C https://mcp.kiwi.com call search-flight \
    "{\"flyFrom\":\"BRU\",\"flyTo\":\"$d\",$WB,\"nights_in_dst_from\":16,\"nights_in_dst_to\":18,$B}" \
    > out/kiwi_bags_rt_$f.json || true
done
# Open-jaw : aller simple BRU→HKT/KBV/MNL, retour simple depuis LGK/KUL/HKT/MPH/MNL
python3 $C https://mcp.kiwi.com call search-flight \
  "{\"flyFrom\":\"BRU\",\"flyTo\":\"HKT,KBV,MNL\",$WB,\"one_for_city\":true,$B}" \
  > out/kiwi_bags_ow_out.json || true
python3 $C https://mcp.kiwi.com call search-flight \
  "{\"flyFrom\":\"LGK,KUL,HKT,MPH,MNL\",\"flyTo\":\"BRU\",\"departureDate\":\"12/12/2026\",\"departureDateTo\":\"20/12/2026\",\"one_for_city\":true,$B}" \
  > out/kiwi_bags_ow_back.json || true
# Hôtels 4-5★ par étape (circuit A : Krabi/Lanta/Lipe/Langkawi ; B : Palawan/Boracay ; C : Khao Lak/Yao Yai/Phuket)
while IFS='|' read -r id q a d; do
  python3 $C https://mcp.trivago.com/mcp call trivago-accommodation-search \
    "{\"query\":\"$q\",\"arrival\":\"$a\",\"departure\":\"$d\",\"adults\":2,\"rooms\":1,\"country\":\"BE\",\"currency\":\"EUR\",\"hotel_rating\":{\"4star\":true,\"5star\":true}}" \
    > out/trivago_$id.json || true
done <<'STAGES'
A1_aonang|Ao Nang, Krabi|2026-12-03|2026-12-07
A2_kohlanta|Koh Lanta|2026-12-07|2026-12-11
A3_kohlipe|Koh Lipe|2026-12-11|2026-12-15
A4_langkawi|Langkawi|2026-12-15|2026-12-19
B1_coron|Coron, Palawan|2026-11-30|2026-12-04
B2_elnido|El Nido|2026-12-04|2026-12-10
B3_boracay|Boracay|2026-12-10|2026-12-16
C1_khaolak|Khao Lak|2026-11-30|2026-12-05
C2_kohyaoyai|Koh Yao Yai|2026-12-05|2026-12-10
C3_naiyang|Nai Yang, Phuket|2026-12-10|2026-12-16
STAGES
