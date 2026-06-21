# Four Seasons Klíma — weboldal (Astro)

Statikus weboldal Polyák Gergely egyéni vállalkozó klímatelepítő vállalkozásához.
Astro + Cloudflare Pages (ingyenes) + Web3Forms (űrlap e-mail) + Cloudflare Web Analytics (süti nélkül).

## Mi van kész
- **Főoldal** (`src/pages/index.astro`): bemutatkozás, klímák (13 készülék), **árkalkulátor** (készülék + helyiség → pontos előzetes ár; beton, extra cső és **külön hosszúságú dekorcsatorna** opcióval), Árak (szolgáltatások), kapcsolati űrlap.
- **Adatkezelési tájékoztató** (`/adatkezeles`).
- **Fűtés klímával** SEO-cikk (`/futes-klimaval`) — *vázlat, közzététel előtt ellenőrizendő.*
- Fejléc/lábléc adatvezérelt komponensek (`src/components/`), az üzleti adatok egy helyen: `src/data/site.js`.
- SEO: meta + Open Graph, LocalBusiness strukturált adat, `sitemap`, `robots.txt`, magyar nyelv.
- Logó + favicon (`public/brand/`, `public/favicon.svg`).

## Indítás a saját gépeden
Node.js 18+ szükséges (https://nodejs.org), majd a projekt mappájában:
```
npm install
npm run dev        # http://localhost:4321 — itt nézheted meg élőben
npm run build      # éles build a /dist mappába
```
(Ezt a saját gépeden kell futtatni, internetkapcsolattal — a csomagokat onnan tölti le.)

## ⚠️ Élesítés előtt 2 értéket be kell írni
1. **Web3Forms kulcs** — regisztrálj a https://web3forms.com oldalon a `fourseasons.gergely@gmail.com` címmel, másold ki az "Access Key"-t,
   és írd be a `src/pages/index.astro` fájlban a `YOUR_WEB3FORMS_ACCESS_KEY` helyére. Ezután az űrlap valódi e-mailt küld Neked.
2. **Cloudflare Analytics token** — a Cloudflare → Web Analytics oldalon add hozzá a domaint, és a kapott token kerüljön a
   `src/layouts/Layout.astro` fájlban a `YOUR_CLOUDFLARE_ANALYTICS_TOKEN` helyére (e nélkül is működik az oldal, csak statisztika nem lesz).

Az adatkezelési tájékoztatóban (`src/md/adatkezeles.md`) töltsd ki a `[hónap]/[nap]` és a megőrzési idő helyőrzőket.

## Élesítés (kb. 10–15 perc, együtt csináljuk)
1. **GitHub:** hozz létre egy repót, és húzd be ide az egész `fourseasons-site` mappát (a github.com böngészőből, terminál nélkül).
2. **Cloudflare Pages:** "Connect to Git" → válaszd a repót → keretrendszer: **Astro**, build parancs: `npm run build`, kimeneti mappa: `dist`.
3. **Domain:** add hozzá a `fourseasonsklima.hu` egyéni domaint; a Forpsi DNS-be a pontos rekordokat megadom.
4. **Analytics:** kapcsold be a Web Analyticsöt, a tokent írd be (lásd fent).

## Hátralévő (élesítés után)
- **Decap CMS** (önálló tartalomszerkesztés admin felületről) — ehhez egy GitHub OAuth-app + egy kis Cloudflare Worker kell; ez a következő lépés.
- A kalkulátor készülék-listáját jelenleg a `src/pages/index.astro` script tartalmazza; CMS-szerkesztéshez érdemes a `src/data/site.js`-ből (units) betölteni.
- A `Fűtés klímával` cikk állításainak átnézése; saját referenciafotók cseréje, ha lesznek.
