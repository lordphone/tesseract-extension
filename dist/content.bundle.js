(()=>{var e={205:e=>{"use strict";e.exports=tesseract.js}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,r),c.exports}(()=>{const e=r(205);document.addEventListener("click",(t=>{if("IMG"===t.target.tagName){const r=t.target;e.recognize(r).progress((e=>console.log(e))).then((e=>console.log(e.text))).catch((e=>console.error(e)))}}))})()})();