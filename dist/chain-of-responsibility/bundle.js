(()=>{"use strict";var e={32:(e,t,s)=>{s.r(t)},498:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=n(s(993));class l extends u.default{process(e){const t=e.indexOf("://"),s=e.lastIndexOf(":");-1===t?-1===s?this.displayResult("DOMAIN",e):this.displayResult("DOMAIN",e.substring(0,s)):t!==s?this.displayResult("DOMAIN",e.substring(t+3,s)):t===s?this.displayResult("DOMAIN",e.substring(t+3)):this.displayResult("DOMAIN","NONE")}}t.default=l},993:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.nextHandler=null}setNext(e){return this.nextHandler=e,e}run(e){this.process(e),this.nextHandler&&this.nextHandler.run(e)}displayResult(e,t){const s=document.createElement("div"),n=document.createElement("div"),u=document.createElement("div");s.append(n,u),s.classList.add("layout"),n.classList.add("title"),u.classList.add("content"),n.innerText=e,u.innerText=t,document.querySelector(".result").append(s)}}},130:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=n(s(993));class l extends u.default{process(e){const t=e.lastIndexOf(":");if(-1!==t){const s=e.substring(t+1);if(!isNaN(Number(s)))return void this.displayResult("PORT",s)}this.displayResult("PORT","NONE")}}t.default=l},432:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const u=n(s(993));class l extends u.default{process(e){const t=e.indexOf("://");-1!==t?this.displayResult("PROTOCOL",e.substring(0,t)):this.displayResult("PROTOCOL","NONE")}}t.default=l},398:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),s(32);const u=n(s(498)),l=n(s(130)),r=new(n(s(432)).default),i=new l.default,d=new u.default;r.setNext(i).setNext(d);const o=document.querySelector("#url");document.querySelector("#btn").addEventListener("click",(e=>{const t=o.value;r.run(t)}))}},t={};function s(n){var u=t[n];if(void 0!==u)return u.exports;var l=t[n]={exports:{}};return e[n].call(l.exports,l,l.exports,s),l.exports}s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s(398)})();