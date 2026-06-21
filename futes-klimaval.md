---
import { business } from '../data/site.js';
---
<footer>
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <div class="foot-brand"><span class="mark"><svg viewBox="0 0 64 64" aria-hidden="true"><defs><clipPath id="fm"><circle cx="32" cy="32" r="27"/></clipPath></defs><g clip-path="url(#fm)"><rect width="32" height="64" fill="#F2784B"/><rect x="32" width="32" height="64" fill="#23C3D4"/></g><line x1="32" y1="4" x2="32" y2="60" stroke="#fff" stroke-width="2.2" stroke-linecap="round"/><circle cx="20" cy="32" r="4.6" fill="#fff"/><g stroke="#fff" stroke-width="2.1" stroke-linecap="round"><line x1="20" y1="22.4" x2="20" y2="18.8"/><line x1="20" y1="45.2" x2="20" y2="41.6"/><line x1="10.8" y1="32" x2="14.4" y2="32"/><line x1="13.6" y1="25.6" x2="16.1" y2="28.1"/><line x1="13.6" y1="38.4" x2="16.1" y2="35.9"/></g><g stroke="#073e4a" stroke-width="2.1" stroke-linecap="round"><line x1="44" y1="21.5" x2="44" y2="42.5"/><line x1="34.9" y1="26.75" x2="53.1" y2="37.25"/><line x1="53.1" y1="26.75" x2="34.9" y2="37.25"/></g></svg></span>{business.name}</div>
        <p>Szakszerű klímatelepítés Budapesten és Pest megyében. Hűtés és fűtés, felméréstől üzembe helyezésig, garanciával.</p>
      </div>
      <div class="foot-col">
        <h4>Impresszum</h4>
        <div class="impressum"><b>{business.owner} {business.legalForm}</b><br>{business.name}<br>Székhely: {business.address}<br>Nyilvántartási szám: {business.registrationNumber}<br>Adószám: {business.taxNumber}<br>{business.phone} · {business.email}</div>
      </div>
      <div class="foot-col">
        <h4>Hasznos</h4>
        <ul>
          <li><a href="/adatkezeles">Adatkezelési tájékoztató</a></li>
          <li><a href="/futes-klimaval">Fűtés klímával — mennyit spórol?</a></li>
          <li><a href="/#about">Bemutatkozás</a></li>
          <li><a href="/#calc">Árkalkulátor</a></li>
          <li><a href="/#arak">Árak</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 {business.name} — minden jog fenntartva.</span>
      <span class="cookieless"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M9 12h6"/></svg>Süti nélküli statisztika — nincs cookie-banner</span>
    </div>
  </div>
</footer>
