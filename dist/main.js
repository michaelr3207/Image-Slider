(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>s});var r=t(601),a=t.n(r),i=t(314),o=t.n(i)()(a());o.push([e.id,"* {\n    box-sizing: border-box;\n}\n\nbody, html {\n    background: linear-gradient(237deg, #1f0404, rgb(10, 10, 47));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n}\n\n.content {\n    border: 6px double gold;\n    margin: auto;\n    width: 75%;\n    height: 70%;\n    margin-top: 10%;\n    border-style: double;\n    display: grid;\n    grid-template-columns: 0.75fr 3fr 0.75fr;\n    grid-template-rows: 1fr 3fr 1fr;\n}\n\n.imageTitle {\n    grid-column: 1 / 4;\n    border: 2px solid tomato;\n    /*color: wheat;*/\n    text-align: center;\n    padding-top: 20px;\n    font-weight: bolder;\n    font-style: italic;\n    font-family: Verdana;\n    font-size: 30px;\n    color: #FFF;\n    background-color: rgba(0, 0, 0, 0.61);\n    text-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px;\n}\n\n.previousBtn, .nextBtn {\n    grid-row: 2/3;\n    border: 2px solid peru;\n}\n\n.imageDisplay {\n    grid-row: 2/3;\n    border: 2px solid pink;\n    align-items: center;\n}\n\n/*.nextBtn{*/\n/*    grid-row: 2/3;*/\n/*    border: 2px solid peru;*/\n/*}*/\n\n.imageSelectorDisplay {\n    grid-column: 1 / 4;\n    display: flex;\n    border: 1px solid yellow;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.displayImageBtn {\n    border: 1px solid black;\n    border-radius: 20%;\n    background: red;\n    height: 30%;\n    width: 7%;\n}\n\n.displayImageBtn:hover {\n    background: #0d730d;\n}\n\n.skipBtn {\n    width: 100%;\n    height: 100%;\n    background: brown;\n    font-size: 40px;\n}\n\n.skipBtn:hover {\n    background: navy;\n}\n\n.imgOnDisplay {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    height: 80%;\n}\n",""]);const s=o},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),a&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=a):p[4]="".concat(a)),n.push(p))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},o=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],p=i[d]||0,l="".concat(d," ").concat(p);i[d]=p+1;var u=t(l),g={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(g);else{var f=a(g,r);r.byIndex=s,n.splice(s,0,{identifier:l,updater:f,references:1})}o.push(l)}return o}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var i=r(e=e||[],a=a||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);n[s].references--}for(var c=r(e,a),d=0;d<i.length;d++){var p=t(i[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&(!e||!/^http(s?):/.test(e));)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),a=t.n(r),i=t(659),o=t.n(i),s=t(56),c=t.n(s),d=t(540),p=t.n(d),l=t(113),u=t.n(l),g=t(208),f={};f.styleTagTransform=u(),f.setAttributes=c(),f.insert=o().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=p(),n()(g.A,f),g.A&&g.A.locals&&g.A.locals;const m=t.p+"efa23ee519e574f7ebfe.png",h=t.p+"5f44ecb403569eaaf4ca.png",y=t.p+"99f37c08ddaa5403bc5b.png",v=t.p+"5084b1677baa072ac38a.jpg",b=t.p+"92c456f0520dd6e0452c.png";class x{constructor(){this.indexOfCurrentImage=0,this.allImages=this.createArrayOfImages(),this.currentImage=document.getElementById("displayedImg"),this.imageDisplay=document.getElementById("displayOfImage")}nextImage(){4===this.indexOfCurrentImage?this.indexOfCurrentImage=0:this.indexOfCurrentImage++,this.addImageToDisplay(this.indexOfCurrentImage)}previousImage(){0===this.indexOfCurrentImage?this.indexOfCurrentImage=4:this.indexOfCurrentImage--,this.addImageToDisplay(this.indexOfCurrentImage)}createArrayOfImages(){let e=[];const n=new Image,t=new Image,r=new Image,a=new Image,i=new Image;return n.src=m,t.src=h,r.src=y,a.src=v,i.src=b,n.id="0",t.id="1",r.id="2",a.id="3",i.id="4",n.className="imgOnDisplay",t.className="imgOnDisplay",r.className="imgOnDisplay",a.className="imgOnDisplay",i.className="imgOnDisplay",e.push(n),e.push(t),e.push(r),e.push(a),e.push(i),e}addImageToDisplay(e){const n=this.allImages[e];this.imageDisplay.innerHTML="",this.imageDisplay.appendChild(n)}}!function(){const e=new x;!function(e){const n=document.getElementById("nextBtn"),t=document.getElementById("prevBtn");n.addEventListener("click",(()=>{e.nextImage()})),t.addEventListener("click",(()=>{e.previousImage()}))}(e),e.addImageToDisplay(e.indexOfCurrentImage)}()})()})();