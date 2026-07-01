# ACTIVE.md — Dávidova cesta
_The ONE task this session is doing, plus the ordered next-pick queue. Read on
bootstrap. NOT a history log — shipped cards leave here entirely._

## NOW
**Fáza 5 — D5 špeciál** (po potvrdení): obr.10–15 finálna sekvencia pre Jeruzalem — finálna mapa,
záverečná obrazovka, TOTEM „?" (obr.12), SIFRA symboly+číslice (obr.13), kód **13177** (obr.14),
TRUHLICA (obr.15). **Stavia na Fáze 4:** D5 má vlastný tok (nie štandardné odhalenie symbolu ako
D1–D4). `koniecVideny` v stave (`davidovaCesta.v1`) je pripravený, zatiaľ nevyužitý. Kód truhlice
13177 = D1→D5 (ovca 1, prak 3, luk 1, jaskyňa 7, koruna 7) — single-source v `project_build_plan.md`.
**Pozn.:** BRS obr.8/9 (návrat na mapu / „pokračovanie zajtra") sme vo Fáze 4 NEurobili ako
samostatné obrazovky — tok sa po symbole rovno vráti na mapu; ak Janka chce explicitnú hlášku
„pokračujeme zajtra", je to malý dodatok (parkované).

## NEXT (ordered next-pick queue)
1. Fáza 5 — D5 špeciál (finálna mapa, TOTEM, SIFRA, 13177, truhlica).
2. Fáza 6 — zvuk (mp3 + tichý fallback).
3. Fáza 7 — polish (edge cases; napr. `onerror` fallback pre `<img>` symboly — cold review S5).

## Recently shipped
- Fáza 4 — odhalenie symbolu po odomknutí (zámok → symbol+názov na pergamene, prerušiteľné); symboly
  D1/D3/D5 na priehľadné PNG — S5.
- Fáza 3 — pergameny (clue + heslo + nesprávne) + obsah 5 dní; odomknutie cez ODOMKNUTIE.png — S4.
- Fáza 1 (kostra INTRO+MAPA) + Fáza 2 (stav + localStorage + odomknutie + reset) — S3.
