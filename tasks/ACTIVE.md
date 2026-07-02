# ACTIVE.md — Dávidova cesta
_The ONE task this session is doing, plus the ordered next-pick queue. Read on
bootstrap. NOT a history log — shipped cards leave here entirely._

## NOW
**Fáza 7 — polish (edge cases).** Doladenie hraníc pred generálkou. Hlavný kandidát z 3 cold reviewov:
**`onerror` fallback pre `<img>`** — ak sa obrázok (symbol/pergamen/finále) nenačíta, nemá ostať prázdne
miesto/rozbitá ikona na stene. Ďalšie edge cases z BRS (EC-001…010) podľa potreby. **Rozsah doladiť s Jakubom
pred kódom** — nie všetky EC sú nutné pre offline appku na stene.

## NEXT (ordered next-pick queue)
1. Fáza 7 — polish (edge cases; `onerror` fallback pre `<img>` — cold review S5/S6/S8).
2. Fáza 8 — test: offline verification (TS-002, otvoriť index.html bez internetu) + generálka (TS-007,
   prehrá 5 dní naraz vrátane zvuku).
3. Camp-ready hand-off vedúcemu (súbory na priame otvorenie `index.html` + krátky návod).

## Recently shipped
- Fáza 6 — zvuk (13 mp3 napojených): harfa loop + zvuky prostredia D1–D5 v slučke do „Ďalej" (D5 = trh),
  seal_crack+light_reveal pri odomknutí (harfa sa stlmí a vráti), whoosh cez svetelnú vlnu, mystery+tick
  pri šifre, celebration fanfára; menu „Vypnúť zvuk" (uložené); tichý fallback (EC-005) — S8.
- Fáza 5 — D5 finálna sekvencia (finálna mapa so svetelnou vlnou, záverečná, PREKVAPENIE/TOTEM, šifra,
  kód 13177 v šifrovej obrazovke, truhlica; replay klikom na Jeruzalem; `koniecVideny` sa ukladá) — S6.
- Fáza 4 — odhalenie symbolu po odomknutí (zámok → symbol+názov na pergamene, prerušiteľné) — S5.
