(()=>{"use strict";var t={405:(t,e,i)=>{i.r(e)},436:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=s(i(187));e.default=class{constructor(t,e,i){this.title=t,this.url=e,this.parent=i,this.image=null,this.domLayout=null,this.domTitle=null,this.domLayout=document.createElement("div"),this.domLayout.classList.add("layout"),this.parent.append(this.domLayout),this.domTitle=document.createElement("div"),this.domTitle.classList.add("title-proxy"),this.domTitle.innerHTML=`<span>${this.title}</span><br/><span>Click to load</span>`,this.domLayout.append(this.domTitle)}append(){if(this.image)return;const t=this.domLayout;t.addEventListener("click",(()=>{t.style.border="none",t.innerHTML="",this.image=new a.default(this.title,this.url,t),this.image.append()}))}}},187:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=class{constructor(t,e,i){this.title=t,this.url=e,this.parent=i,this.domLayout=null,this.domTitle=null,this.domImage=null,this.domLoading=null,this.domLayout=document.createElement("div"),this.domLayout.classList.add("layout"),this.parent.append(this.domLayout),this.domTitle=document.createElement("div"),this.domTitle.classList.add("title"),this.domTitle.innerText=this.title,this.domLayout.append(this.domTitle),this.domLoading=document.createElement("div"),this.domLoading.classList.add("loading"),this.domLoading.innerText="Loading..."}append(){this.domImage||(this.domImage=new Image,this.domLayout.append(this.domLoading),this.domImage.src=this.url,this.domImage.onload=()=>{setTimeout((()=>{this.domLayout.removeChild(this.domLoading),this.domLayout.append(this.domImage)}),5e3*Math.random()+3e3)})}}},698:function(t,e,i){var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),i(405);const a=s(i(436)),o=document.querySelector(".list");[["설산야경","https://cdn.bhdw.net/im/snow-mountain-night-wallpaper-81305_w635.webp"],["외로운늑대","https://cdn.bhdw.net/im/fantasy-world-wallpaper-29897_w635.webp"],["강변황혼","https://cdn.bhdw.net/im/sunset-minimalist-wallpaper-81072_w635.webp"],["일출","https://cdn.bhdw.net/im/sunset-scenery-minimalist-wallpaper-81379_w635.webp"],["지구탈출","https://cdn.bhdw.net/im/mountain-scenery-art-wallpaper-81095_w635.webp"],["고양이","https://wallpapers.com/images/hd/cute-praying-animal-kitten-fhuzpz6q5d3l5qpw.webp"],["사마귀","https://wallpapers.com/images/high/sparkling-brown-praying-mantis-brhsitcpcco26pcl.webp"],["앵무새","https://wallpapers.com/images/high/golden-conure-parrots-bifvcsdpuwm1gxlf.webp"],["비둘기","https://wallpapers.com/images/high/flying-homing-pigeon-low-angle-shot-bliq95v02wjt2d7b.webp"],["벌","https://wallpapers.com/images/high/bee-desktop-wallpaper-c0hpghgtppnmux5f.webp"],["닭","https://wallpapers.com/images/high/rooster-tied-in-rock-9x6089a6edflz844.webp"],["도마뱀","https://wallpapers.com/images/high/green-gecko-reptile-atv6058gd3fj8ors.webp"],["노란앵무새","https://wallpapers.com/images/high/two-conure-parrots-with-blurry-backdrop-elrhq1l9840e79xd.webp"],["하얀비둘기","https://wallpapers.com/images/high/elegant-white-indian-fantail-pigeons-cxlk42hr0htvks8p.webp"],["부엉이","https://wallpapers.com/images/high/little-owlet-animal-lg0huhcfvtwb6kci.webp"],["무지개비둘기","https://wallpapers.com/images/high/colorful-homing-pigeon-birds-macro-shot-64tnhxlh4t361yxq.webp"],["뱀","https://wallpapers.com/images/high/cobra-close-up-hissing-tongue-4l5lbdbi3rblrsjj.webp"]].forEach((t=>{const e=t[0],i=t[1];new a.default(e,i,o).append()}))}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var o=e[s]={exports:{}};return t[s].call(o.exports,o,o.exports,i),o.exports}i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i(698)})();