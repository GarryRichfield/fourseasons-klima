// =============================================================
// Four Seasons Klíma — központi adatfájl
// Itt lehet módosítani az árakat, gépeket és az alapadatokat.
// A mezőnevek megegyeznek azzal, amit az árkalkulátor vár.
// =============================================================

// --- Vállalkozás / impresszum ---
export const business = {
  name: 'Four Seasons Klíma',
  owner: 'Polyák Gergely',
  legalForm: 'egyéni vállalkozó',
  phone: '+36 20 504 4161',
  phoneHref: '+36205044161',
  email: 'fourseasons.gergely@gmail.com',
  address: '1119 Budapest, Andor utca 21/c',
  taxNumber: '46338352-1-51',
  registrationNumber: '46338352',
  serviceArea: 'Budapest és Pest megye',
  url: 'https://fourseasonsklima.hu',
};

// --- Telepítési díjszabás (a kalkulátor ezzel számol) ---
export const pricing = {
  install: 110000,        // alapdíj: teljes szerelés + 3 m csővezeték, mindent tartalmaz
  includedPipe: 3,        // benne lévő csőhossz (m)
  concrete: 10000,        // betonszerkezet pótdíj
  extraPipePerM: 10000,   // 10 000 Ft / további méter 3 m felett
  dekorPerM: 1400,        // dekorcsatorna (csőtakaró) — 1 400 Ft / méter, a csőtávolság hosszában
};

// --- A főoldali hero kiemelt gépe (ezt az id-t átírva cserélhető) ---
export const FEATURED_UNIT_ID = 'gree-cp35';

// --- Klímák katalógusa (saját bruttó eladási árak) ---
const IMG = 'https://www.ceklima.hu/';
export const units = [
  {id:'gree-cp35',     name:'Gree Comfort Pro 3,5 kW',   brand:'Gree',     cool:3.5, heatKw:3.8, en:'A++ / A+',    price:262900, real:true,  img:IMG+'GREE_COMFORT_PRO_GWH12ACCXD-K6DNA1DI_GWH12AWCXD-K6DNA1DO_KLIMA_MONO_OLDALFALI_SZETT_35KW-i79347.webp'},
  {id:'midea-xs35',    name:'Midea Xtreme Save 3,5 kW',  brand:'Midea',    cool:3.5, heatKw:3.8, en:'A++ / A+',    price:228150, real:true,  img:IMG+'MIDEA_XTREME_SAVE_MG2X-12-SP_MSAGBU-12HRFNX_MOX102-12HFN8_35_KW_KLIMA_MONO_OLDALFALI_SZETT-i1560.webp'},
  {id:'gree-cp27',     name:'Gree Comfort Pro 2,7 kW',   brand:'Gree',     cool:2.7, heatKw:3.0, en:'A++ / A+',    price:249800, real:true,  img:IMG+'GREE_COMFORT_PRO_GWH09ACCXB-K6DNA1GI_GWH09ACCXB-K6DNA1GO_KLIMA_MONO_OLDALFALI_SZETT_27KW-i79377.webp'},
  {id:'sinclair-sky32',name:'Sinclair SKY-3 3,2 kW',     brand:'Sinclair', cool:3.2, heatKw:3.8, en:'A++ / A+',    price:273304, real:true,  img:IMG+'SINCLAIR_SKY_3_12_SIM-12BS3I_-_SOM-12BS3O_MONO_OLFALI_SZETT_KOMPRESSZOR_ES_CSEPPTALCA_FUTES-i1910.webp'},
  {id:'gree-cp53',     name:'Gree Comfort Pro 5,3 kW',   brand:'Gree',     cool:5.3, heatKw:5.6, en:'A++ / A+',    price:379800, real:true,  img:IMG+'GREE_COMFORT_PRO_GWH18ACDXF-K6DNA1DI_GWH18ACDXF-K6DNA1DO_KLIMA_MONO_OLDALFALI_SZETT_53_KW-i79407.webp'},
  {id:'midea-xs26',    name:'Midea Xtreme Save 2,6 kW',  brand:'Midea',    cool:2.6, heatKw:2.8, en:'A++ / A+',    price:218150, real:true,  img:IMG+'MIDEA_XTREME_SAVE_MG2X-09-SP_MSAGAU-09HRFNX_MOX102-09HFN8_26_KW_MONO_OLDALFALI_KLIMA_SZETT-i3880.webp'},
  {id:'tcl-elite35',   name:'TCL Elite 3,5 kW',          brand:'TCL',      cool:3.5, heatKw:3.8, en:'A++ / A+',    price:220000, real:true,  img:IMG+'TCL_ELITE_TAC-12CHSDXA73IFSH_TAC-12CHSDXA73IFSH_2_KLIMA_MONO_OLDALFALI_SZETT_CSEPPTALCA-i2180.webp'},
  // TODO: a TCL Elite 5 kW saját fotója (jelenleg a 3,5 kW képét használja)
  {id:'tcl-elite5',    name:'TCL Elite 5 kW',            brand:'TCL',      cool:5.0, heatKw:5.4, en:'A++ / A+',    price:292100, real:true,  img:IMG+'TCL_ELITE_TAC-12CHSDXA73IFSH_TAC-12CHSDXA73IFSH_2_KLIMA_MONO_OLDALFALI_SZETT_CSEPPTALCA-i2180.webp'},
  {id:'gree-cosmo35',  name:'Gree Cosmo 3,5 kW',         brand:'Gree',     cool:3.5, heatKw:3.8, en:'A++ / A+',    price:335661, real:true,  img:IMG+'GREE_COSMO_GWH12AWCXD-K6DNA4DI_-_GWH12AWCXD-K6DNA1DO_KLIMA_MONO_OLDALFALI_SZETT_35KW-i335.webp'},
  {id:'midea-xs53',    name:'Midea Xtreme Save 5,3 kW',  brand:'Midea',    cool:5.3, heatKw:5.6, en:'A++ / A+',    price:358150, real:true,  img:IMG+'MIDEA_XTREME_SAVE_MG2X-18-SP_MSAGCU-18HRFNX_MOX301-18HFN8_53_KW_MONO_OLDALFALI_KLIMA_SZETT-i1575.webp'},
  {id:'polar-opt35',   name:'Polar Optimum 3,5 kW',      brand:'Polar',    cool:3.5, heatKw:3.8, en:'A++ / A+',    price:242000, real:true,  img:IMG+'POLAR_OPTIMUM_SIEH0035SDOB_SO1H0035SDOB_KLIMA_MONO_OLDAFALI_SZETT-i910.webp'},
  {id:'midea-aep35',   name:'Midea All Easy Pro 3,5 kW', brand:'Midea',    cool:3.5, heatKw:3.8, en:'A+++ / A+++', price:276000, real:true,  img:IMG+'MIDEA_ALL_EASY_PRO_MEX-12-SP_MSEPBU-12HRFN8_MOX330-12HFN8_35_KW_KLIMA_MONO_OLDALFALI_SZETT-i3780.webp'},
  {id:'syen-charm32',  name:'Syen Charm 3,2 kW',         brand:'Syen',     cool:3.2, heatKw:3.4, en:'A++ / A+',    price:215913, real:true,  img:IMG+'SYEN_CHARM_SOH12CH-E32DA1DI_SOH12CH-E32DA1DO_KLIMA_MONO_OLDALFALI_SZETT_32KW-i2655.webp'},
];

// --- Szolgáltatások (az Árak szekció szövege jelenleg statikus; ezek referenciaként / későbbi CMS-hez) ---
export const services = [
  {id:'tisztitas',  name:'Klímatisztítás',     price:20000, label:'20 000 Ft'},
  {id:'leszereles', name:'Klíma leszerelése',  price:25000, label:'25 000 Ft'},
  {id:'hibajavitas',name:'Hibajavítás',        price:15000, label:'15 000 Ft kiszállás + 10 000 Ft / megkezdett óra'},
  {id:'gaztoltes',  name:'Klíma gáz töltése',  price:null,  label:'Egyedi ajánlat'},
];
