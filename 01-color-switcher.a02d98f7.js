parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"V4IP":[function(require,module,exports) {

},{}],"TCaP":[function(require,module,exports) {
"use strict";require("../css/main.scss");const t={body:document.querySelector("body"),start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]")};function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let r=null;t.stop.setAttribute("disabled",!0),t.body.addEventListener("click",o=>{"BUTTON"===o.target.nodeName&&(void 0!==o.target.dataset.start?(o.target.setAttribute("disabled",!0),t.stop.removeAttribute("disabled"),r=setInterval(()=>{t.body.style.backgroundColor=e()},1e3)):(t.start.removeAttribute("disabled"),t.stop.setAttribute("disabled",!0),clearInterval(r)))});
},{"../css/main.scss":"V4IP"}]},{},["TCaP"], null)
//# sourceMappingURL=/parcel-project-template/01-color-switcher.a02d98f7.js.map