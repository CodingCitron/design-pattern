(()=>{"use strict";var e={888:(e,t,r)=>{r.r(t)},586:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.data=e}}},225:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this._name=e,this._age=t}get name(){return this._name}get age(){return this._age}}},658:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e){this.builder=e}build(){return`${this.builder.head()}${this.builder.body()}${this.builder.foot()}`}}},445:function(e,t,r){var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=u(r(586));class n extends o.default{constructor(e){super(e)}head(){return'<?xml version="1.0" encoding="utf-8"?><DATA>'}body(){return`<NAME>${this.data.name}</NAME><AGE>${this.data.age}</AGE>`}foot(){return"</DATA>"}}t.default=n},198:function(e,t,r){var u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),r(888);const o=u(r(225)),n=u(r(658)),a=u(r(445)),s=new o.default("Jane",76),l=new a.default(s),d=new n.default(l).build();console.log(d)}},t={};function r(u){var o=t[u];if(void 0!==o)return o.exports;var n=t[u]={exports:{}};return e[u].call(n.exports,n,n.exports,r),n.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(198)})();