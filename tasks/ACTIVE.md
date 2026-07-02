# ACTIVE.md — Dávidova cesta
_The ONE task this session is doing, plus the ordered next-pick queue. Read on
bootstrap. NOT a history log — shipped cards leave here entirely._

## NOW
**Fáza 6 — zvuk** (po potvrdení): ambient harfová hudba (nepretržito, mení len intenzitu) + zvukové
efekty (prasknutie pečate, „wow" tón pri odomknutí, ambient prostredia D1–D5, slávnostná hudba +
fanfára pri truhlici). **Tvrdé pravidlá zvuku (BRS sekcia 10):** všetky súbory lokálne (offline);
**chýbajúci mp3 = tichý fallback, žiadny crash** (EC-005); BEZ dramatických zvukov zlyhania pri
nesprávnom hesle; hudba hrá nepretržite, nie stopka+play. **Autoplay policy:** hudba smie štartovať
až pri prvom kliku vedúceho (prehliadače blokujú autoplay pred interakciou). **Assety DODANÉ (S7,
2026-07-02):** všetkých 9 mp3 je v `audio/` so správnymi názvami (viď nižšie) — Fáza 6 už NIE je
blokovaná produkciou, dá sa naplno postaviť aj otestovať. **Otvorený bod:** pri teste v prehliadači
overiť seamless loop `ambient.mp3` (generovaný BEZ zapnutého Loop-u v ElevenLabs) — ak „skáče", pregenerovať.
**Mapovanie zvukov na súbory** (BRS Assets Register; seal_crack = ZMENA na zvuk odomknutia zámku, nie
prasknutia pečate): `ambient.mp3` (harfa, loop) · `seal_crack.mp3` (odomknutie zámku) · `light_reveal.mp3`
(„wow" svetlo) · `birds.mp3` D1 · `wind.mp3` · `water.mp3` D2 · `leaves.mp3` D3 · `cave.mp3` D4 ·
`celebration.mp3` D5 finále (jediná povolená fanfára).

## NEXT (ordered next-pick queue)
1. Fáza 6 — zvuk (mp3 + tichý fallback). **Assety hotové (9 mp3 v `audio/`).**
2. Fáza 7 — polish (edge cases; napr. `onerror` fallback pre `<img>` — cold review S5/S6).
3. Fáza 8 — test: offline verification (TS-002) + generálka (TS-007, prehrá 5 dní naraz).

## Recently shipped
- Fáza 5 — D5 finálna sekvencia (finálna mapa so svetelnou vlnou, záverečná, PREKVAPENIE/TOTEM, šifra,
  kód 13177 v šifrovej obrazovke, truhlica; replay klikom na Jeruzalem; `koniecVideny` sa ukladá);
  TOTEM/SIFRA/TRUHLICA na priehľadné PNG — S6.
- Fáza 4 — odhalenie symbolu po odomknutí (zámok → symbol+názov na pergamene, prerušiteľné) — S5.
- Fáza 3 — pergameny (clue + heslo + nesprávne) + obsah 5 dní; odomknutie cez ODOMKNUTIE.png — S4.
