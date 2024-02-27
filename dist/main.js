(()=>{"use strict";var n,e,t,r,o,a,i,s,c,d,p,l,u,f,g={208:(n,e,t)=>{t.d(e,{A:()=>s});var r=t(601),o=t.n(r),a=t(314),i=t.n(a)()(o());i.push([n.id,"* {\n    box-sizing: border-box;\n}\n\nbody, html {\n    background: linear-gradient(237deg, #1f0404, rgb(10, 10, 47));\n    margin: 0;\n    height: 100%;\n    padding-top: 20px;\n    padding-bottom: 10px;\n}\n\n.content {\n    border: 6px double gold;\n    margin: auto;\n    width: 75%;\n    height: 70%;\n    margin-top: 10%;\n    border-style: double;\n    display: grid;\n    grid-template-columns: 0.75fr 3fr 0.75fr;\n    grid-template-rows: 1fr 3fr 1fr;\n}\n\n.imageTitle {\n    grid-column: 1 / 4;\n    border: 2px solid tomato;\n    /*color: wheat;*/\n    text-align: center;\n    padding-top: 20px;\n    font-weight: bolder;\n    font-style: italic;\n    font-family: Verdana;\n    font-size: 30px;\n    color: #FFF;\n    background-color: rgba(0, 0, 0, 0.61);\n    text-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px;\n}\n\n.previousBtn, .nextBtn {\n    grid-row: 2/3;\n    border: 2px solid peru;\n}\n\n.imageDisplay {\n    grid-row: 2/3;\n    border: 2px solid pink;\n}\n\n/*.nextBtn{*/\n/*    grid-row: 2/3;*/\n/*    border: 2px solid peru;*/\n/*}*/\n\n.imageSelectorDisplay {\n    grid-column: 1 / 4;\n    display: flex;\n    border: 1px solid yellow;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.displayImageBtn {\n    border: 1px solid black;\n    border-radius: 20%;\n    background: red;\n    height: 30%;\n    width: 7%;\n}\n\n.displayImageBtn:hover {\n    background: #0d730d;\n}\n\n.skipBtn {\n    width: 100%;\n    height: 100%;\n    background: brown;\n    font-size: 40px;\n}\n\n.skipBtn:hover {\n    background: navy;\n}",""]);const s=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<n.length;d++){var p=[].concat(n[d]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],d=r.base?c[0]+r.base:c[0],p=a[d]||0,l="".concat(d," ").concat(p);a[d]=p+1;var u=t(l),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:g,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),d=0;d<a.length;d++){var p=t(a[d]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},v={};function m(n){var e=v[n];if(void 0!==e)return e.exports;var t=v[n]={id:n,exports:{}};return g[n](t,t.exports,m),t.exports}m.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return m.d(e,{a:e}),e},m.d=(n,e)=>{for(var t in e)m.o(e,t)&&!m.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},m.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),m.nc=void 0,n=m(72),e=m.n(n),t=m(825),r=m.n(t),o=m(659),a=m.n(o),i=m(56),s=m.n(i),c=m(540),d=m.n(c),p=m(113),l=m.n(p),u=m(208),(f={}).styleTagTransform=l(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(u.A,f),u.A&&u.A.locals&&u.A.locals})();