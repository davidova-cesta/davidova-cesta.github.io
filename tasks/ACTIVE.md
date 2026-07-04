# ACTIVE.md — Dávidova cesta
_The ONE task this session is doing, plus the ordered next-pick queue. Read on
bootstrap. NOT a history log — shipped cards leave here entirely._

## NOW
**Hand-off vedúcemu — fázy H1–H4 (začať v novej session).**
Zadanie H0 uzavreté (S16): stroj tábora = TENTO MSI notebook (Jankin); návod = tlačiteľná A4
+ súbor v balíku; distribúcia = e-mail/cloud vopred + USB záloha.
- **H1 — balík:** čistý priečinok len s runtime súbormi (`index.html`, `app.js`, `style.css`,
  `app_images/`, `audio/`) bez pracovných dokumentov; z neho ZIP. Kritérium: funguje offline
  z iného miesta na disku.
- **H2 — návod A4 (po slovensky):** spustenie, tabuľka hesiel, ovládanie (klik/Enter/Escape,
  ikonky reset+zvuk), riešenie problémov („zvuk až po prvom kliknutí" nie je chyba). Súčasť:
  prepis rolí na Janku (majiteľka/prevádzkovateľka — rozhodnuté S16; historické záznamy sessions
  sa NEprepisujú, mená Jakub/Janka smú ostať aj verejne — rozhodnuté S16).
- **H3 — generálka odovzdania:** rozbaliť ZIP inde + prejsť D1 len podľa návodu.
- **H4 — odovzdanie + uzávierka** (na mieste tábora ešte: hlasitosti na aparatúre — `HLASITOSTI`).

## NEXT (ordered next-pick queue)
1. Hand-off H1–H4 — viď NOW.
2. **Bezpečnosť účtu:** zapnúť 2FA na GitHub účte `jakubonovo-ai` (manuálny krok, ~5 min,
   github.com/settings/security). Odporučené v S16 security posudku.

## Recently shipped
- **Fáza 8 — testovanie + go-live (S16):** offline audit čistý (0 sieťových odkazov; 12 obrázkov +
  17 mp3 case-match s diskom → Pages-safe), normalizácia hesiel overená (funguje bez diakritiky),
  TEST režim VYPNUTÝ (`TEST_REZIM_BEZ_HESIEL=false`), TS-002 offline test + TS-007 generálka
  s reálnymi heslami prešli (Jakub, vrátane preklepu/Enter/prázdneho poľa/slučky harfy/celého finále).
- Slávnostný zvuk `zaver` na záverečnej obrazovke finále (S15): hrá pri Jeruzaleme v zlate, stopne sa
  pri prekliku na totem/Escape/resete; oprava „Vypnúť zvuk" — stlmenie sa teraz premietne na VŠETKY
  zvuky vrátane znejúcich jednorazových. `zaver.mp3` dodala Janka, otestované (Jakub).
- Dramaturgia večera (S14): poradie symbol→cesta→prebudenie ďalšieho bodu; cesta vedie k blikajúcemu
  bodu (BR-003 reinterpretácia, Jakub OK); finále bez re-kreslenia (nádych→whoosh); zvuky kroky+pergamen;
  pergamen mizne fadeom (obsah zamrznutý, oprava prekliku); TEST režim bez hesiel (⚠ viď checklist v NOW).
- Fáza 7 — polish: `onerror`/`onload` fallback pre `<img>` (`pripravFallbackObrazka`) — nenačítaný obrázok
  (chýbajúci súbor / case-mismatch na Pages) sa skryje na neutrálny podklad, žiadna rozbitá ikona na stene,
  žiadny spoiler (BR-003). Naviazané na všetky `.stage img` + dynamický symbol mapy. Cold review: 0 defektov — S10.
- Fáza 6 — zvuk (13 mp3 napojených): harfa loop + zvuky prostredia D1–D5 v slučke do „Ďalej" (D5 = trh),
  seal_crack+light_reveal pri odomknutí (harfa sa stlmí a vráti), whoosh cez svetelnú vlnu, mystery+tick
  pri šifre, celebration fanfára; menu „Vypnúť zvuk" (uložené); tichý fallback (EC-005) — S8.
- Fáza 5 — D5 finálna sekvencia (finálna mapa so svetelnou vlnou, záverečná, PREKVAPENIE/TOTEM, šifra,
  kód 13177 v šifrovej obrazovke, truhlica; replay klikom na Jeruzalem; `koniecVideny` sa ukladá) — S6.
