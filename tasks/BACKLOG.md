# BACKLOG.md — Dávidova cesta
_READY / ⬜ tasks, newest-relevant first._
_Discipline (manual in this lean setup): a shipped card moves out to the archive /
recently-shipped pointer; a parked card moves to tasks/PARKED.md. Don't leave
shipped or parked markers sitting in this file._

<!-- Card format:

### TASK [SCOPE].[N] — [short title]
[COMPLEXITY: low / medium / high]
⬜ TODO

**WHY (business impact):** [one sentence]

**TASK CARD:**
- STATUS: READY (or BLOCKED ON [what])
- READ FIRST: [files]
- CHANGES: [files]

**Done when (FALSIFIER):** [one binary, 30-second-checkable line]
---
-->

### TASK MAPA.1 — spojovacia „cesta" medzi zastávkami na mape
[COMPLEXITY: medium]
⬜ TODO

**WHY (business impact):** Appka je *cesta* Dávida D1→D5, ale 5 kruhov je teraz na mape
rozhádzaných bez viditeľnej línie — oko nevie, v akom poradí ísť. Jemná spojovacia
línia (klasický „treasure map" prvok) posilní príbeh putovania a vizuálne prepojí body.

**TASK CARD:**
- STATUS: READY
- OTVORENÉ DIZAJNOVÉ OTÁZKY (vyriešiť v BEAT 1, nie odhadnúť):
  1. Štýl línie: prerušovaná zlatá čiara (ladí s kruhmi) vs. akvarelová cestička v štýle mapy.
  2. **SPOILER (BR-003) — kritické:** línia sa musí odhaľovať POSTUPNE, len po už-odomknuté
     body. Nakresliť celú cestu D1→D5 vopred by prezradilo polohu budúcich (uzamknutých)
     zastávok = spoiler. Kresliť len segmenty medzi dokončenými dňami (stav DOKONCENA).
  3. Kde sa kreslí: SVG/CSS vrstva nad mapou pod zastávkami; body sú `DNI[].x/y` (% mapy).
- READ FIRST: `app.js` (`DNI[]` x/y, `vykresliZastavky`/`vytvorZastavku`), `style.css` (`.zastavky`, `.zastavka`), BR-003 v CLAUDE.md.
- CHANGES: `app.js` (nová funkcia na kreslenie segmentov), `style.css` (vrstva cesty), možno `index.html` (SVG kontajner).

**Done when (FALSIFIER):** Po odomknutí N dní vidno spojovaciu líniu len medzi tými N
dokončenými zastávkami; žiadna línia nevedie k ešte-uzamknutej zastávke (over v prehliadači).
---
