function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,t){var n=i.default(e,t,"get");return d.default(e,n)};var i=s(o("fExtF")),d=s(o("iaRLo"));function s(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,n){l.default(e,t),t.set(e,n)};var c,l=(c=o("7K24o"))&&c.__esModule?c:{default:c};const f={headers:{"x-api-key":"live_e3fj5ffy3NLjNSnI1MYdfztWEew7j5YC5iWqixcNlGzhBUsHf9qLb3HEa8B7X70C"}};var p=new WeakMap;const h=document.querySelector(".breed-select"),v=document.querySelector(".loader"),m=(document.querySelector(".error"),document.querySelector(".cat-info")),w=new class{fetchObjects(){const t=`${e(a)(this,p)}breeds`;return fetch(t,f).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch(console.warn)}fetchCatById(t){const n=`${e(a)(this,p)}images/search?breed_ids=${t}`;return fetch(n,f).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).catch(console.warn)}constructor(){e(u)(this,p,{writable:!0,value:"https://api.thecatapi.com/v1/"})}},b=new class{murkupOptions(e,t){t.innerHTML=e.map((e=>`<option value="${e.id}">${e.name}</option>`)).join("")}onHidden(e){e.classList.add("hidden")}offHidden(e){e.classList.remove("hidden")}murkupCard(e,t){t.innerHTML=e.map((e=>`<div class="cat-info">\n      <img class='img' src="${e.url}" alt="${e.name}" />\n      <h2>${e.breeds[0].name}</h2>\n      <p>${e.breeds[0].description}</p>\n      <p><b>Temperament: </b>${e.breeds[0].temperament}</p>\n    </div>`))}};w.fetchObjects().then((e=>{b.onHidden(v),b.murkupOptions(e,h),b.offHidden(h)})).catch(console.warn),h.addEventListener("change",(function(e){let t=e.target.value;b.onHidden(m),b.offHidden(v),w.fetchCatById(t).then((e=>{const t=[...e];b.murkupCard(t,m),b.onHidden(v),b.offHidden(m)})).catch(console.log)}));
//# sourceMappingURL=index.59a09a13.js.map