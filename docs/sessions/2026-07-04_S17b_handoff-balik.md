# S17 (2026-07-04, časť B) — Hand-off H1/H3/H4: balík + generálka + odovzdanie

## Scope
Dokončiť hand-off vedúcemu: zostaviť distribučný balík (H1), spraviť generálku
odovzdania (H3), odovzdať na USB (H4). Nadväzuje na H2 (návod) z časti A.

## Files touched
- **Žiadna zmena v git repe okrem docs** — balík je distribučný artefakt, žije v
  scratchpade (`.../scratchpad/Davidova-cesta` + `Davidova-cesta.zip`), zámerne NIE v repe.
- `memory/MEMORY.md`, `memory/STATUS.md` (fázový grid + S17 dodatok), `tasks/ACTIVE.md`
  (hand-off karta → Recently shipped, resume thread odstránený).

## Balík (H1) — presné zloženie
- Runtime: `index.html`, `app.js`, `style.css`, `navod.html`.
- `app_images/` = **presne 13 reálne používaných** (audit všetkých referencií v
  index.html+app.js+style.css; CSS nemá url(), audio len cez `<audio src>`):
  INTRO, MAPA.jfif, pregamen, ODOMKNUTIE, TOTEM, SIFRA, TRUHLICA + 5 symbolov
  (PASTIER_chlapec, PRAK_blizko, JONATAN_sat, jask_sat, JERUZALEM_sat) + og-nahlad.jpg.
  Vynechané: nepoužité originály, staré .jfif, LOCK_*, ChatGPT rezervy.
- `audio/` = všetkých 17 mp3 (všetky referované z index.html).
- ZIP: 23,4 MB.

## Tests (H3 generálka)
- Strojová kontrola: 30/30 lokálnych referencií (13 img + 17 mp3) má súbor v balíku
  → žiadny čierny podklad (BR-003 fallback sa neaktivuje).
- Offline audit balíka: jediné http = og:image/og:url na Pages (offline neškodné);
  app.js len SVG namespace w3.org; style.css bez odkazov.
- ZIP rozbalený v INEJ lokácii (`GENERALKA-ina-lokacia`) = kompletný (4+13+17).
- Vizuálna generálka D1 v prehliadači: **prešla (Janka)**.

## Falsifier
Balík by bol chybný, keby: nejaká `src`/`href` referencia nemá súbor v ZIP-e
(→ čierny podklad na stene); alebo by ZIP obsahoval pracovný/spoiler súbor. Oboje
vyvrátené (30/30 audit + manuálny zoznam obsahu).

## Note to future-self
- **Appka je odovzdaná.** Žiadna otvorená vývojová úloha. Na mieste tábora
  (13.–17. júl 2026) ostáva len doladiť hlasitosti (`HLASITOSTI` v app.js).
- Balík nie je v repe — ak ho treba znova, zostav z aktuálneho `index.html`/`app.js`/
  `style.css` + 13 obrázkov (viď zoznam vyššie) + celý `audio/` + `navod.html`.
- Voliteľný ďalší pick: 2FA na GitHub účte (nie je blokujúce pre tábor).
