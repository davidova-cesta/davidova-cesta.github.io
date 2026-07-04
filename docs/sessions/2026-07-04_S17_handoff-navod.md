# S17 (2026-07-04) — Hand-off H2 (časť): tlačiteľný návod pre vedúceho

## Scope
Vytvoriť tlačiteľný návod A4 (po slovensky) pre vedúceho tábora na obsluhu offline
appky — časť fázy H2 z hand-off plánu. Popri tom oprava rozbitého GitHub Pages
deployu (thumbnail vracal 404).

## Files touched
- `navod.html` — **NOVÝ**, git-ignored (obsahuje 5 hesiel = spoiler, NESMIE na public GitHub).
  Jedna A4, tlač cez prehliadač (Ctrl+P). Sekcie: spustenie / ako funguje večer /
  tabuľka hesiel+indícií / ovládanie / riešenie problémov / varovanie pred resetom.
- `.gitignore` — pridané pravidlo `navod.html` (spoiler-poistka).
- `memory/MEMORY.md`, `memory/STATUS.md`, `tasks/ACTIVE.md` — session docs.
- (Pages deploy: oprava cez GitHub API `POST .../pages/builds`, žiadny súbor v repe.)

## Tests
- `git check-ignore navod.html` → potvrdené ignored (nepushne sa).
- Cold subagent review návodu proti `app.js`/`index.html` (10 bodov: heslá, clue,
  Enter/Escape, ikonky, reset, autoplay zvuk, kód 13177, localStorage, offline) →
  **0 defektov**, každý bod s file:line artefaktom.
- Kód appky nespustený (nezmenený). Vizuálnu kontrolu návodu robí Jakub v prehliadači.

## Falsifier
Návod by bol chybný, keby: heslo/indícia v tabuľke nesedí s `DNI[]` v app.js; návod
by tvrdil ovládanie, ktoré appka nemá; alebo by sa `navod.html` (s heslami) dostal
na public GitHub. Všetky tri vyvrátené (cold review + git check-ignore).

## Note to future-self
- Návod čaká na Jakubovo schválenie v prehliadači — až potom prepis rolí na Janku
  (STATUS/ACTIVE) + zvyšné hand-off fázy H1 (ZIP balík), H3 (generálka), H4 (odovzdanie).
- **Prevádzkový nález:** GitHub Pages sa po presune repa do organizácie neopravil sám
  (3 buildy errored/cancelled, nasadený ostal starý commit bez obrázka). Pri budúcom
  zaseknutom deployi reštartnúť build cez API `POST /repos/.../pages/builds`.
