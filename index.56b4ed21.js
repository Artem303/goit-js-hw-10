!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),o.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),o.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return a.default(e)||i.default(e)||f.default(e)||c.default()};var a=l(o("kMC0W")),i=l(o("7AJDX")),c=l(o("8CtQK")),f=l(o("auk6i"));function l(e){return e&&e.__esModule?e:{default:e}}var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t){var n=p.default(e,t,"get");return v.default(e,n)};var p=y(o("1UHsN")),v=y(o("ffZzF"));function y(e){return e&&e.__esModule?e:{default:e}}var h={};Object.defineProperty(h,"__esModule",{value:!0}),h.default=function(e,t,n){_.default(e,t),t.set(e,n)};var b,_=(b=o("5k7tO"))&&b.__esModule?b:{default:b};var m={};function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}Object.defineProperty(m,"__esModule",{value:!0}),m.default=function(e,t,n){t&&g(e.prototype,t);n&&g(e,n);return e};var w={headers:{"x-api-key":"live_e3fj5ffy3NLjNSnI1MYdfztWEew7j5YC5iWqixcNlGzhBUsHf9qLb3HEa8B7X70C"}},M=new WeakMap,j=function(){"use strict";function t(){e(s)(this,t),e(h)(this,M,{writable:!0,value:"https://api.thecatapi.com/v1/"})}return e(m)(t,[{key:"fetchObjects",value:function(){var t="".concat(e(d)(this,M),"breeds");return fetch(t,w).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch(console.warn)}},{key:"fetchCatById",value:function(t){var n="".concat(e(d)(this,M),"images/search?breed_ids=").concat(t);return fetch(n,w).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).catch(console.warn)}}]),t}(),O=function(){"use strict";function t(){e(s)(this,t)}return e(m)(t,[{key:"murkupOptions",value:function(e,t){t.innerHTML=e.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("")}},{key:"onHidden",value:function(e){e.classList.add("hidden")}},{key:"offHidden",value:function(e){e.classList.remove("hidden")}},{key:"murkupCard",value:function(e,t){t.innerHTML=e.map((function(e){return'<div class="cat-info">\n      <img class=\'img\' src="'.concat(e.url,'" alt="').concat(e.name,'" />\n      <h2>').concat(e.breeds[0].name,"</h2>\n      <p>").concat(e.breeds[0].description,"</p>\n      <p><b>Temperament: </b>").concat(e.breeds[0].temperament,"</p>\n    </div>")}))}}]),t}(),k=document.querySelector(".breed-select"),x=document.querySelector(".loader"),P=(document.querySelector(".error"),document.querySelector(".cat-info")),C=new j,H=new O;C.fetchObjects().then((function(e){H.onHidden(x),H.murkupOptions(e,k),H.offHidden(k)})).catch(console.warn),k.addEventListener("change",(function(t){var n=t.target.value;H.onHidden(P),H.offHidden(x),C.fetchCatById(n).then((function(t){var n=e(u)(t);H.murkupCard(n,P),H.onHidden(x),H.offHidden(P)})).catch(console.log)}))}();
//# sourceMappingURL=index.56b4ed21.js.map
