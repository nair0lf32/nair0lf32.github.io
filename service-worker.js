if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>i(e,r),n={module:{uri:r},exports:o,require:d};s[r]=Promise.all(a.map((e=>n[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-b45ff455"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/favicon.ico",revision:"75feb65daa5fae5b518e3198f9426be2"},{url:"assets/icon-192x192.png",revision:"ebffe2c6c5c577b9b8cb5d772a43ab62"},{url:"assets/icon-256x256.png",revision:"cbe89362469f3f7e1dabe187e2c52be7"},{url:"assets/icon-384x384.png",revision:"b107a0c902209593d42398ad844c5538"},{url:"assets/icon-512x512.png",revision:"285378adb7a89f82a19287137b479713"},{url:"assets/img/avataaars.svg",revision:"987744b60abfbfd42eec58c418c0b1a6"},{url:"assets/img/lolpics/lol-logo.png",revision:"7da67fc3089d3583a186a13d267d803c"},{url:"assets/img/lolpics/teemo.jpg",revision:"7b8355516c64ee34cf9f62321f211161"},{url:"assets/img/lolpics/Thumbs.db",revision:"9c65d1ff77f88b6201c3c23054021a79"},{url:"assets/img/lolpics/wpp.jpg",revision:"215a76c783ca3eea6550c19cf005f562"},{url:"assets/img/lolpics/wpp2.jpg",revision:"f92d29c9399fc6e99d7a8b6282b8d64e"},{url:"assets/img/lolpics/wpp3.jpg",revision:"6910de7395aec84b71aa70ede0c9b158"},{url:"assets/img/lolpics/wpp4.png",revision:"9e6fa2ab8661149f3ee45e06a6cb9bdd"},{url:"assets/img/og-nair0lf32.png",revision:"014d3071b0d65921e8bb824f50de6fed"},{url:"assets/img/pacman.svg",revision:"02604b8ea45a1d34d9d0c524f493381e"},{url:"assets/img/portfolio/self.png",revision:"68ded102234beb05c63805b83d33fe82"},{url:"assets/img/portfolio/Thumbs.db",revision:"bdc7cd32ba4ba0042b2f640f8359e476"},{url:"assets/img/Thumbs.db",revision:"f433c5e3200d36e4479d9a7e7a3dc386"},{url:"assets/Thumbs.db",revision:"ccc8dc668446cdd426e2559a9cb6d9d4"},{url:"css/animations.css",revision:"ca58e9083b32739dc8dde1c0d5f1bd2e"},{url:"css/styles.css",revision:"4fcce9ce223426eb317d5abfed679f13"},{url:"index.html",revision:"e1902b3ba91e09360f1ae77c4dca2ad4"},{url:"js/scripts.js",revision:"63a96af0306aae9dac114b514f4c5180"},{url:"lol-fanzone.html",revision:"45220203ec76a75a3d1a63053d7e0ea3"},{url:"manifest.webmanifest",revision:"a8ac1135f04ae0f09f6178c895132858"},{url:"README.md",revision:"083429a9bae0621cadd7b8b619f61932"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=service-worker.js.map
