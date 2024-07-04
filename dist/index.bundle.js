(()=>{"use strict";var n={919:(n,r,e)=>{e.d(r,{A:()=>c});var o=e(354),t=e.n(o),i=e(314),a=e.n(i)()(t());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([n.id,":root {\n    box-sizing: border-box;\n    --main-color: rgb(151, 191, 255);\n    --main-color-darker: rgb(120, 172, 255);\n    --font-color-menu: white;\n    --checkbox-checked-color: rgb(255, 132, 18);\n    --secondary-color: white;\n    --secondary-color-darker: rgb(242, 241, 241);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 1fr;\n    height: 100vh;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: 200px;\n    grid-template-rows: 50px 40px 40px 40px;\n    /* place-items: center; */\n    justify-content: left;\n    grid-column: 1;\n    background-color: var(--main-color);\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);\n    z-index: 999;\n}\n\n#menu>.dashboard {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    padding: 10px auto;\n    background-color: var(--main-color);\n    height: 50px;\n    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */\n    border-bottom: 1px solid var(--font-color-menu);\n    z-index: 999;\n}\n\n#menu>.dashboard>#dash {\n    padding: 0px 6px;\n    font-weight: 600;\n    color: var(--font-color-menu);\n    font-size: 1.5rem;\n}\n\n#menu>div {\n    height: 40px;\n}\n\n#menu>div>button {\n    width: 200px;\n    text-align: left;\n    border: none;\n    height: 40px;\n    padding: 0px 6px;\n    background-color: var(--main-color);\n    color: var(--font-color-menu);\n    font-weight: 600;\n    font-size: 1rem;\n}\n\n#menu>div>button:hover {\n    cursor: pointer;\n    /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.4); */\n    background-color: var(--main-color-darker);\n}\n\n\n\n#menu>div>button>i {\n    margin-right: 5px;\n}\n\n\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 50px max-content;\n    grid-column: 2;\n    background-color: var(--main-color);\n    z-index: 1;\n    padding: 50px;\n    row-gap: 30px;\n}\n\n#content>* {\n    border-radius: 5px;\n}\n\n#content>.titleDiv {\n    background-color: white;\n    padding: 10px 0 10px 15px;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    width: clamp(200px, 250px, 300px);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n\n}\n\n#content>.titleDiv>.title {\n    font-size: 1.1rem;\n    font-weight: 600;\n}\n\n#content>.container {\n    background-color: white;\n    width: clamp(500px, 600px, 1fr);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n#content>.container>#containerHeaderRow,\n#content>.container>.item{\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr .5fr;\n    grid-template-rows: auto;\n    height: 54px;\n    align-items: center;\n    border-bottom: 1px solid var(--main-color);\n}\n\n#content>.container>#containerHeaderRow{\n    border: none;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    font-weight: 600;\n    z-index: 600;\n}\n\n#content>.container>#containerHeaderRow:hover{\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n#content>.container>.item{\n    z-index: 500;\n}\n\n#content>.container>.item:hover{\n    background-color: var(--secondary-color-darker);\n    cursor: pointer;\n    z-index: 400;\n}\n\n#content>.container>.item>.checkboxDiv>.fa-regular.fa-circle {\n    color: var(--checkbox-checked-color);\n}\n\n#content>.container>.item>.checkboxDiv>.fa-solid.fa-circle-check {\n    color: var(--checkbox-checked-color);\n}\n\n#content>.container>#containerHeaderRow>div:nth-child(1),\n#content>.container>.item>div:nth-child(1){\n    border-right: 1px solid var(--main-color);\n    padding: 0 15px 0 15px;\n}\n\n#content>.container>#containerHeaderRow>div:nth-child(2),\n#content>.container>.item>div:nth-child(2){\n    border-right: 1px solid var(--main-color);\n    padding: 0 15px 0 15px;\n}\n\n#content>.container>#containerHeaderRow>div:nth-child(3),\n#content>.container>.item>div:nth-child(3){\n    border-right: 1px solid var(--main-color);\n    padding: 0 15px 0 15px;\n}\n\n#content>.container>#containerHeaderRow>div:nth-child(4),\n#content>.container>.item>div:nth-child(4){\n    border-right: 1px solid var(--main-color);\n    padding: 0 15px 0 15px;\n}\n\n#content>.container>#containerHeaderRow>div:nth-child(5){\n    display: grid;\n    place-items: center;\n}\n\n#content>.container>.item:hover #due{\n    background-color: var(--secondary-color-darker);\n}\n\n#due{\n    border: none;\n}\n\n#content>.container>.item>.checkboxDiv{\n    display: grid;\n    place-items: center;\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"AAEA;IACI,sBAAsB;IACtB,gCAAgC;IAChC,uCAAuC;IACvC,wBAAwB;IACxB,2CAA2C;IAC3C,wBAAwB;IACxB,4CAA4C;AAChD;;AAEA;IACI,aAAa;IACb,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,SAAS;IACT,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,4BAA4B;IAC5B,uCAAuC;IACvC,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;IACd,mCAAmC;IACnC,yCAAyC;IACzC,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,kBAAkB;IAClB,mCAAmC;IACnC,YAAY;IACZ,8CAA8C;IAC9C,+CAA+C;IAC/C,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,6BAA6B;IAC7B,iBAAiB;AACrB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;IACnC,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,4CAA4C;IAC5C,0CAA0C;AAC9C;;;;AAIA;IACI,iBAAiB;AACrB;;;;AAIA;IACI,aAAa;IACb,0BAA0B;IAC1B,oCAAoC;IACpC,cAAc;IACd,mCAAmC;IACnC,UAAU;IACV,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,iCAAiC;IACjC,wCAAwC;;AAE5C;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,uBAAuB;IACvB,+BAA+B;IAC/B,wCAAwC;AAC5C;;AAEA;;IAEI,aAAa;IACb,2CAA2C;IAC3C,wBAAwB;IACxB,YAAY;IACZ,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA;IACI,YAAY;IACZ,wCAAwC;IACxC,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,+CAA+C;IAC/C,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;IAEI,yCAAyC;IACzC,sBAAsB;AAC1B;;AAEA;;IAEI,yCAAyC;IACzC,sBAAsB;AAC1B;;AAEA;;IAEI,yCAAyC;IACzC,sBAAsB;AAC1B;;AAEA;;IAEI,yCAAyC;IACzC,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    --main-color: rgb(151, 191, 255);\r\n    --main-color-darker: rgb(120, 172, 255);\r\n    --font-color-menu: white;\r\n    --checkbox-checked-color: rgb(255, 132, 18);\r\n    --secondary-color: white;\r\n    --secondary-color-darker: rgb(242, 241, 241);\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    grid-template-rows: 1fr;\r\n    height: 100vh;\r\n    margin: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n#menu {\r\n    display: grid;\r\n    grid-template-columns: 200px;\r\n    grid-template-rows: 50px 40px 40px 40px;\r\n    /* place-items: center; */\r\n    justify-content: left;\r\n    grid-column: 1;\r\n    background-color: var(--main-color);\r\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);\r\n    z-index: 999;\r\n}\r\n\r\n#menu>.dashboard {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    padding: 10px auto;\r\n    background-color: var(--main-color);\r\n    height: 50px;\r\n    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */\r\n    border-bottom: 1px solid var(--font-color-menu);\r\n    z-index: 999;\r\n}\r\n\r\n#menu>.dashboard>#dash {\r\n    padding: 0px 6px;\r\n    font-weight: 600;\r\n    color: var(--font-color-menu);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menu>div {\r\n    height: 40px;\r\n}\r\n\r\n#menu>div>button {\r\n    width: 200px;\r\n    text-align: left;\r\n    border: none;\r\n    height: 40px;\r\n    padding: 0px 6px;\r\n    background-color: var(--main-color);\r\n    color: var(--font-color-menu);\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n\r\n#menu>div>button:hover {\r\n    cursor: pointer;\r\n    /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.4); */\r\n    background-color: var(--main-color-darker);\r\n}\r\n\r\n\r\n\r\n#menu>div>button>i {\r\n    margin-right: 5px;\r\n}\r\n\r\n\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 50px max-content;\r\n    grid-column: 2;\r\n    background-color: var(--main-color);\r\n    z-index: 1;\r\n    padding: 50px;\r\n    row-gap: 30px;\r\n}\r\n\r\n#content>* {\r\n    border-radius: 5px;\r\n}\r\n\r\n#content>.titleDiv {\r\n    background-color: white;\r\n    padding: 10px 0 10px 15px;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    width: clamp(200px, 250px, 300px);\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n\r\n}\r\n\r\n#content>.titleDiv>.title {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#content>.container {\r\n    background-color: white;\r\n    width: clamp(500px, 600px, 1fr);\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#content>.container>#containerHeaderRow,\r\n#content>.container>.item{\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr 1fr .5fr;\r\n    grid-template-rows: auto;\r\n    height: 54px;\r\n    align-items: center;\r\n    border-bottom: 1px solid var(--main-color);\r\n}\r\n\r\n#content>.container>#containerHeaderRow{\r\n    border: none;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n    font-weight: 600;\r\n    z-index: 600;\r\n}\r\n\r\n#content>.container>#containerHeaderRow:hover{\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n#content>.container>.item{\r\n    z-index: 500;\r\n}\r\n\r\n#content>.container>.item:hover{\r\n    background-color: var(--secondary-color-darker);\r\n    cursor: pointer;\r\n    z-index: 400;\r\n}\r\n\r\n#content>.container>.item>.checkboxDiv>.fa-regular.fa-circle {\r\n    color: var(--checkbox-checked-color);\r\n}\r\n\r\n#content>.container>.item>.checkboxDiv>.fa-solid.fa-circle-check {\r\n    color: var(--checkbox-checked-color);\r\n}\r\n\r\n#content>.container>#containerHeaderRow>div:nth-child(1),\r\n#content>.container>.item>div:nth-child(1){\r\n    border-right: 1px solid var(--main-color);\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n#content>.container>#containerHeaderRow>div:nth-child(2),\r\n#content>.container>.item>div:nth-child(2){\r\n    border-right: 1px solid var(--main-color);\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n#content>.container>#containerHeaderRow>div:nth-child(3),\r\n#content>.container>.item>div:nth-child(3){\r\n    border-right: 1px solid var(--main-color);\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n#content>.container>#containerHeaderRow>div:nth-child(4),\r\n#content>.container>.item>div:nth-child(4){\r\n    border-right: 1px solid var(--main-color);\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n#content>.container>#containerHeaderRow>div:nth-child(5){\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n#content>.container>.item:hover #due{\r\n    background-color: var(--secondary-color-darker);\r\n}\r\n\r\n#due{\r\n    border: none;\r\n}\r\n\r\n#content>.container>.item>.checkboxDiv{\r\n    display: grid;\r\n    place-items: center;\r\n}"],sourceRoot:""}]);const c=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(t," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],d=o.base?A[0]+o.base:A[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var s=e(p),C={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==s)r[s].references++,r[s].updater(C);else{var u=t(C,o);o.byIndex=c,r.splice(c,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var i=o(n=n||[],t=t||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var A=o(n,t),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=A}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var i=r[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=e(72),t=e.n(o),i=e(825),a=e.n(i),c=e(659),A=e.n(c),d=e(56),l=e.n(d),p=e(540),s=e.n(p),C=e(113),u=e.n(C),m=e(919),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=A().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=s(),t()(m.A,h),m.A&&m.A.locals&&m.A.locals,document.addEventListener("DOMContentLoaded",(function(){document.getElementById("projectsBtn").addEventListener("click",(function(){window.location.href="projects.html"})),document.getElementById("toDosBtn").addEventListener("click",(function(){window.location.href="toDos.html"})),document.getElementById("categoriesBtn").addEventListener("click",(function(){window.location.href="categories.html"}))}))})();
//# sourceMappingURL=index.bundle.js.map