/* =========================================================================
   Dávidova cesta — logika (Fáza 2: stavový model + localStorage + odomknutie)
   Dátami riadený návrh: 1 konfigurácia dní + odvodené stavy + 1 automat odomknutia.

   ANTI-SPOILER (BR-003): symbol ANI názov lokácie sa NEVLOŽÍ do DOM, kým deň nie je
   dokončený. Heslá a názvy sú len tu v JS zdroji (jediný domov faktu), nikdy nie na
   obrazovke pred odomknutím. Modál na heslo je neutrálny (neukazuje, ktorá lokácia to je).
   ========================================================================= */

"use strict";

/* --- Vizuálne stavy zastávky (odvodené zo stavu, nie natvrdo) --- */
var STAV = {
  DOKONCENA: "dokoncena",
  AKTIVNA: "aktivna",
  UZAMKNUTA: "uzamknuta"
};

/*
  Konfigurácia 5 dní — JEDINÝ domov hesiel, symbolov a pozícií (single-source).
  x/y = STRED bodu v % šírky/výšky javiska (orientačné, ladíme v prehliadači).
  Heslá sú tu zámerne (bránia odomknutiu); do DOM sa nikdy nedostanú.
*/
var DNI = [
  { id: "D1", nazov: "Pastier",   symbol: "app_images/PASTIER.jfif",  heslo: "Hospodin hľadí na tvoje srdce", x: 11, y: 70 },
  { id: "D2", nazov: "Prak",      symbol: "app_images/PRAK.png",      heslo: "ODVAHA",                       x: 37, y: 54 },
  { id: "D3", nazov: "Jonatán",   symbol: "app_images/JONATAN.jfif",  heslo: "PRIATEĽ MILUJE V KAŽDOM ČASE", x: 52, y: 30 },
  { id: "D4", nazov: "Jaskyňa",   symbol: "app_images/jask.png",      heslo: "JASKYŇA",                      x: 70, y: 60 },
  { id: "D5", nazov: "Jeruzalem", symbol: "app_images/JERUZALEM.jfif", heslo: "BOH MA VIEDOL CELÚ CESTU",    x: 88, y: 22 }
];

/* --- Perzistencia postupu --------------------------------------------- */
var STORAGE_KLUC = "davidovaCesta.v1";
var VYCHODZI_STAV = { verzia: 1, dokonceneDni: 0, koniecVideny: false };

/*
  Záložná kópia stavu v pamäti pre prípad, že localStorage je zablokovaný
  (incognito / prísne nastavenia). Vtedy postup vydrží aspoň počas behu.
*/
var pamatovyStav = null;

/** @returns {Object} plytká kópia stavu (aby sa vonkajší VYCHODZI_STAV nemenil). */
function kopiaStavu(s) {
  return { verzia: 1, dokonceneDni: s.dokonceneDni, koniecVideny: !!s.koniecVideny };
}

/**
 * Načíta postup z localStorage. Guard: dokonceneDni musí byť celé číslo 0..5,
 * inak (poškodený/cudzí zápis) padáme na východzí stav.
 * @returns {Object} stav {verzia, dokonceneDni, koniecVideny}.
 */
function nacitajStav() {
  try {
    var raw = window.localStorage.getItem(STORAGE_KLUC);
    if (!raw) return kopiaStavu(VYCHODZI_STAV);
    var s = JSON.parse(raw);
    if (typeof s.dokonceneDni !== "number" ||
        s.dokonceneDni < 0 || s.dokonceneDni > DNI.length) {
      return kopiaStavu(VYCHODZI_STAV);
    }
    return kopiaStavu(s);
  } catch (e) {
    // localStorage nedostupné alebo poškodený JSON → pamäťový/východzí stav
    return kopiaStavu(pamatovyStav || VYCHODZI_STAV);
  }
}

/**
 * Uloží postup. Vždy najprv do pamäte (fallback), potom skús localStorage.
 * @param {Object} stav - stav na uloženie.
 */
function ulozStav(stav) {
  pamatovyStav = kopiaStavu(stav);
  try {
    window.localStorage.setItem(STORAGE_KLUC, JSON.stringify(pamatovyStav));
  } catch (e) {
    // úložisko blokované → beží sa aspoň z pamäťového stavu, appka nespadne
  }
}

/* --- Odvodenie vizuálneho stavu zastávky zo stavu postupu -------------- */
/**
 * @param {number} index - poradie dňa (0..4).
 * @param {Object} stav - stav postupu.
 * @returns {string} STAV.DOKONCENA | STAV.AKTIVNA | STAV.UZAMKNUTA.
 */
function stavZastavky(index, stav) {
  if (index < stav.dokonceneDni) return STAV.DOKONCENA;
  if (index === stav.dokonceneDni && index < DNI.length) return STAV.AKTIVNA;
  return STAV.UZAMKNUTA;
}

/* --- Normalizácia hesla ------------------------------------------------ */
/**
 * Zjednotí heslo na porovnanie: bez diakritiky, malé písmená, bez nadbytočných
 * a okrajových medzier. Aplikuje sa na zadané aj na uložené heslo rovnako.
 * @param {string} text - vstupný text.
 * @returns {string} normalizovaný tvar.
 */
function normalizujHeslo(text) {
  return String(text)
    .normalize("NFD")
    .replace(/\p{M}/gu, "")             // odstráni diakritické znamienka (Unicode kategória Mark)
    .toLowerCase()
    .replace(/\s+/g, " ")               // zlúči viacnásobné medzery
    .trim();
}

/* =========================================================================
   Vykreslenie mapy
   ========================================================================= */

/** Vytvorí neutrálnu ikonu zámku (inline SVG — deterministická, offline). */
function vytvorZamok() {
  var obal = document.createElement("span");
  obal.className = "zamok";
  obal.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true">' +
    '<rect x="5" y="10" width="14" height="10" rx="2" fill="currentColor"></rect>' +
    '<path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2"></path>' +
    "</svg>";
  return obal;
}

/** Vytvorí pulzujúci bod pre aktívnu zastávku (bez symbolu — žiadny spoiler). */
function vytvorMarker() {
  var bod = document.createElement("span");
  bod.className = "marker";
  return bod;
}

/**
 * Vykreslí jednu zastávku podľa jej stavu.
 * Symbol/názov sa vloží IBA pri DOKONCENA (BR-003). Aktívna je klikateľná.
 * @param {Object} den - konfigurácia dňa.
 * @param {string} stav - vizuálny stav.
 * @param {number} index - poradie dňa (pre obsluhu kliku).
 * @returns {HTMLElement} element zastávky.
 */
function vytvorZastavku(den, stav, index) {
  var el = document.createElement("div");
  el.className = "zastavka stav-" + stav;
  el.style.left = den.x + "%";
  el.style.top = den.y + "%";

  if (stav === STAV.DOKONCENA) {
    var img = document.createElement("img");
    img.className = "symbol";
    img.src = den.symbol;
    img.alt = den.nazov;                 // názov smie byť v DOM len po dokončení
    el.appendChild(img);
  } else if (stav === STAV.AKTIVNA) {
    el.classList.add("klikatelna");
    el.appendChild(vytvorMarker());
    el.addEventListener("click", function () { otvorHeslo(index); });
  } else {
    el.appendChild(vytvorZamok());       // uzamknutá: hmla + zámok, nič viac
  }
  return el;
}

/** Prekreslí všetkých 5 zastávok podľa aktuálneho stavu. */
function vykresliZastavky(stav) {
  var box = document.getElementById("zastavky");
  box.innerHTML = "";
  for (var i = 0; i < DNI.length; i++) {
    box.appendChild(vytvorZastavku(DNI[i], stavZastavky(i, stav), i));
  }
}

/* =========================================================================
   Obrazovky + modál na heslo
   ========================================================================= */

/**
 * Prepne viditeľnú obrazovku (INTRO ↔ MAPA).
 * @param {string} idObrazovky - id sekcie, ktorá má byť viditeľná.
 */
function ukazObrazovku(idObrazovky) {
  var obrazovky = document.querySelectorAll(".obrazovka");
  for (var i = 0; i < obrazovky.length; i++) {
    obrazovky[i].classList.toggle("skryta", obrazovky[i].id !== idObrazovky);
  }
}

/* Ktorý deň sa práve zadáva (index do DNI); null = modál je zavretý. */
var aktivnyIndex = null;

/** @param {boolean} zobraz - true = ukáž modál, false = skry. */
function ukazModal(zobraz) {
  document.getElementById("modal-heslo").classList.toggle("skryta", !zobraz);
}

/** @param {string} text - správa pod poľom hesla (prázdny = nič). */
function nastavSpravu(text) {
  document.getElementById("sprava-heslo").textContent = text;
}

/** Otvorí modál na heslo pre daný deň (neutrálne — bez názvu lokácie). */
function otvorHeslo(index) {
  aktivnyIndex = index;
  var pole = document.getElementById("pole-heslo");
  pole.value = "";
  nastavSpravu("");
  ukazModal(true);
  pole.focus();
}

/** Zavrie modál bez odomknutia. */
function zavriHeslo() {
  aktivnyIndex = null;
  ukazModal(false);
}

/**
 * Overí zadané heslo. Pri zhode uloží postup PRED akýmkoľvek odhalením (EC-003),
 * potom prekreslí mapu. Prázdne pole nič nerobí; po úspechu sa aktivnyIndex vynuluje,
 * takže druhý klik/Enter už neodomkne znova.
 */
function skusOdomknut() {
  if (aktivnyIndex === null) return;
  var zadane = normalizujHeslo(document.getElementById("pole-heslo").value);
  if (zadane === "") return;

  if (zadane === normalizujHeslo(DNI[aktivnyIndex].heslo)) {
    var stav = nacitajStav();
    stav.dokonceneDni = aktivnyIndex + 1;   // ulož najprv, potom odhaľ
    ulozStav(stav);
    zavriHeslo();
    vykresliZastavky(stav);
  } else {
    nastavSpravu("Nesprávne heslo. Skúste znova.");
  }
}

/* =========================================================================
   Menu operátora + reset
   ========================================================================= */

/** Otvorí/zavrie burger menu. */
function prepniMenu() {
  var obsah = document.getElementById("menu-obsah");
  var jeSkryte = obsah.classList.toggle("skryta");
  document.getElementById("menu-tlacidlo")
    .setAttribute("aria-expanded", String(!jeSkryte));
}

/** Zavrie menu (po akcii). */
function zavriMenu() {
  document.getElementById("menu-obsah").classList.add("skryta");
  document.getElementById("menu-tlacidlo").setAttribute("aria-expanded", "false");
}

/** Vynuluje postup (za potvrdením) a vráti appku na INTRO — čistý štart. */
function vynulujPostup() {
  zavriMenu();
  if (!window.confirm("Naozaj vynulovať celý postup? Appka sa vráti na začiatok.")) return;
  var stav = kopiaStavu(VYCHODZI_STAV);
  ulozStav(stav);
  vykresliZastavky(stav);
  ukazObrazovku("obrazovka-intro");
}

/* =========================================================================
   Štart
   ========================================================================= */

/** Naviazanie udalostí a prvé vykreslenie zo stavu. */
function start() {
  document.getElementById("tlacidlo-zacat")
    .addEventListener("click", function () { ukazObrazovku("obrazovka-mapa"); });

  document.getElementById("menu-tlacidlo").addEventListener("click", prepniMenu);
  document.getElementById("tlacidlo-reset").addEventListener("click", vynulujPostup);

  document.getElementById("tlacidlo-odomknut").addEventListener("click", skusOdomknut);
  document.getElementById("tlacidlo-zrusit").addEventListener("click", zavriHeslo);

  var pole = document.getElementById("pole-heslo");
  pole.addEventListener("keydown", function (e) {
    if (e.key === "Enter") skusOdomknut();
    else if (e.key === "Escape") zavriHeslo();
  });

  vykresliZastavky(nacitajStav());
}

document.addEventListener("DOMContentLoaded", start);
