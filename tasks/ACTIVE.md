# ACTIVE.md — Dávidova cesta
_The ONE task this session is doing, plus the ordered next-pick queue. Read on
bootstrap. NOT a history log — shipped cards leave here entirely._

## NOW
**Hand-off HOTOVÝ (S17) — appka odovzdaná. Ostáva už len tábor samotný.**
Balík `Davidova-cesta.zip` (23,4 MB: index.html + app.js + style.css + navod.html + 13 obrázkov + 17 mp3)
otestovaný z inej lokácie a **skopírovaný na USB** (Janka). Na mieste tábora (13.–17. júl 2026) ostáva
už len doladiť **hlasitosti na aparatúre** (`HLASITOSTI` v `app.js`) — to nie je vývojová úloha.

**Žiadna otvorená úloha.** 2FA na GitHub účte zapnuté (S17). Projekt je go-live pripravený a odovzdaný.

## NEXT (ordered next-pick queue)
_(prázdne — projekt dokončený a odovzdaný; ďalšia práca len ak príde nová požiadavka od Janky
alebo poznatky z tábora 13.–17. júl 2026)_

## Recently shipped
- **Hand-off vedúcemu H1–H4 (S17): HOTOVÝ.** H1 balík = čistý priečinok `Davidova-cesta` (4 runtime súbory +
  navod.html + presne 13 reálne používaných obrázkov + 17 mp3; audit všetkých `app_images/` referencií v
  `index.html`+`app.js`+`style.css` → žiadny nepoužitý/pracovný súbor). H3 generálka: strojová kontrola 30/30
  lokálnych referencií má súbor v balíku (žiadny čierny podklad), offline audit balíka čistý (jediné http =
  og:image na Pages, offline neškodné), ZIP rozbalený v inej lokácii = kompletný; **vizuálna generálka D1
  prešla (Janka)**. H4: `Davidova-cesta.zip` (23,4 MB) **skopírovaný na USB**. Balík zámerne NIE v repe
  (distribučný artefakt, žije v scratchpade). Na mieste tábora ostáva len doladenie hlasitostí.
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
