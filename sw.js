if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,t)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const n={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return n;default:return e(s)}}))).then((e=>{const s=t(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-d6040a4a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/fon.jpg",revision:"67e011ed19a436d5ad6d3b3dc25b65c5"},{url:"assets/images/graffity2.jpg",revision:"d5e88c8769c39395235e2ccf439942b4"},{url:"assets/images/military.jpg",revision:"81c99f2a73dc30ab4fd01ce4947228bf"},{url:"extended.css",revision:"b545428ba30ab7880f3e3f7243e03b63"},{url:"index.html",revision:"381110fdaf66cbecd64ce6252b5fae6d"}],{})}));
//# sourceMappingURL=sw.js.map
