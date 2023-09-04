(()=>{"use strict";var t={933:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e,r){this.title=t,this.content=e,this.footer=r}getTitle(){return this.title}getContent(){return this.content}getFooter(){return this.footer}}},194:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t){this.article=t,this.displayHtml=()=>`\n            ${this.titleHtml()}\n            ${this.contentHtml()}\n            ${this.footerHtml()}\n        `}}},600:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=n(r(194));class o extends l.default{constructor(t){super(t)}titleHtml(){return`<div><span>제목</span><input value='${this.article.getTitle()}' /></div>`}contentHtml(){return`<span>내용<span><br /><textarea cols='50' rows='5'>${this.article.getContent().map((t=>`${t}\n`)).join("")}</textarea>`}footerHtml(){return`<div><span>글쓴이</span><input value='${this.article.getFooter()}' /></div>`}}e.default=o},318:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=n(r(194));class o extends l.default{constructor(t){super(t)}titleHtml(){return`<h1>${this.article.getTitle()}</h1>`}contentHtml(){return`<ul>${this.article.getContent().map((t=>`<li>${t}</li>`)).join("")}</ul>`}footerHtml(){return`<h3>${this.article.getFooter()}</h3>`}}e.default=o},297:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const l=n(r(933)),o=n(r(600)),i=n(r(318)),s=new l.default("GIS 분야의 업무",["공간 DB 구축 및 가공","위치기반서비스 개발","지도 기반 업무 시스템 설계 및 개발","공간 정보 3차원 시각화","영상 판독을 위한 딥러닝 학습 및 서비스 개발"],"GIS DEVELOPER"),u=new i.default(s),a=document.querySelector(".content");a.innerHTML=u.displayHtml(),document.querySelector(".edit-mode").addEventListener("change",(t=>{let e;e=t.target.checked?new o.default(s):new i.default(s),a.innerHTML=e.displayHtml()}))}},e={};!function r(n){var l=e[n];if(void 0!==l)return l.exports;var o=e[n]={exports:{}};return t[n].call(o.exports,o,o.exports,r),o.exports}(297)})();