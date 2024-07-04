(()=>{"use strict";var n={738:(n,r,e)=>{e.d(r,{A:()=>c});var o=e(354),t=e.n(o),i=e(314),a=e.n(i)()(t());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]),a.push([n.id,':root {\n    box-sizing: border-box;\n    --main-color: rgb(151, 191, 255);\n    --main-color-darker: rgb(120, 172, 255);\n    --font-color-menu: white;\n    --checkbox-checked-color: rgb(255, 132, 18);\n    --checkbox-checked-color-darker: rgb(244, 121, 6);\n    --secondary-color: white;\n    --secondary-color-darker: rgb(242, 241, 241);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: 1fr;\n    height: 100vh;\n    margin: 0;\n    font-family: \'Roboto\', sans-serif;\n}\n\n#menu {\n    display: grid;\n    grid-template-columns: 200px;\n    grid-template-rows: 50px 40px 40px 40px;\n    /* place-items: center; */\n    justify-content: left;\n    grid-column: 1;\n    background-color: var(--main-color);\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);\n    z-index: 999;\n}\n\n#menu>.dashboard {\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    padding: 10px auto;\n    background-color: var(--main-color);\n    height: 50px;\n    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */\n    border-bottom: 1px solid var(--font-color-menu);\n    z-index: 999;\n}\n\n#menu>.dashboard>#dash {\n    padding: 0px 6px;\n    font-weight: 600;\n    color: var(--font-color-menu);\n    font-size: 1.5rem;\n}\n\n#menu>div {\n    height: 40px;\n}\n\n#menu>div>button {\n    width: 200px;\n    text-align: left;\n    border: none;\n    height: 40px;\n    padding: 0px 6px;\n    background-color: var(--main-color);\n    color: var(--font-color-menu);\n    font-weight: 600;\n    font-size: 1rem;\n}\n\n#menu>div>button:hover {\n    cursor: pointer;\n    /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.4); */\n    background-color: var(--main-color-darker);\n}\n\n\n\n#menu>div>button>i {\n    margin-right: 5px;\n}\n\n#newCategoryDiv{\n    position: absolute;\n    top: 50px;\n    right: 50px;\n    width: 40px;\n    height: 40px;\n    background-color: var(--checkbox-checked-color);\n    display: grid;\n    place-items: center;\n    z-index: 9999;\n    border-radius: 5px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n#newCategoryDiv>#addCategoryBtn{\n    font-size: 1.5rem;\n    color: white;\n    background-color: var(--checkbox-checked-color);\n    border: none;\n    width: 40px;\n    height: 40px;\n    border-radius: 5px;\n}\n\n#newCategoryDiv>#addCategoryBtn:hover{\n    cursor: pointer;\n    background-color: var(--checkbox-checked-color-darker);\n}\n\n#newCategoryDiv>#addCategoryBtn:active,\n#newCategoryDiv:active{\n    transform: scale(0.96);\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 50px max-content;\n    grid-column: 2;\n    background-color: var(--main-color);\n    z-index: 1;\n    padding: 50px;\n    row-gap: 30px;\n}\n\n#content>* {\n    border-radius: 5px;\n}\n\n#content>.titleDiv {\n    background-color: white;\n    padding: 10px 0 10px 15px;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    width: clamp(200px, 250px, 300px);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n\n}\n\n#content>.titleDiv>.title {\n    font-size: 1.1rem;\n    font-weight: 600;\n}\n\n#content>.container {\n    background-color: white;\n    width: clamp(500px, 600px, 1fr);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n}\n\n#content>.container>#categoryHeaderRow,\n#content>.container>.item{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: auto;\n    height: 54px;\n    align-items: center;\n    border-bottom: 1px solid var(--main-color);\n}\n\n#content>.container>.item:last-child{\n    border-bottom: none;\n}\n\n#content>.container>.item:last-child:hover{\n    border-bottom: none;\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n#content>.container>#categoryHeaderRow{\n    border: none;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    font-weight: 600;\n    z-index: 600;\n    border-radius: 5px;\n}\n\n#content>.container>#categoryHeaderRow:hover{\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n#content>.container>.item{\n    z-index: 500;\n    display: grid;\n    justify-content: left;\n    align-items: center;\n    grid-template-columns: 40px 1fr;\n    font-weight: 600;\n\n}\n\n#content>.container>.item:hover{\n    background-color: var(--secondary-color-darker);\n    cursor: pointer;\n    z-index: 400;\n}\n\n#content>.container>.item>.checkboxDiv>.fa-regular.fa-circle {\n    color: var(--checkbox-checked-color);\n}\n\n#content>.container>.item>i{\n    margin-right: 15px;\n}\n\n#content>.container>.item>i[class*="dumbbell"]{\n    color: grey;\n}\n\n#content>.container>.item>i[class*="house"]{\n    color: red;\n}\n\n#content>.container>.item>i[class*="building"]{\n    color: blue;\n}\n\n#content>.container>.item>i[class*="beach"]{\n    color: sandybrown;\n}\n\n#content>.container>.item>i[class*="book-bookmark"]{\n    color: brown;\n}\n\n#content>.container>.item>i[class*="notes-medical"]{\n    color: green;\n}\n\n#content>.container>div{\n    padding: 0 15px 0 15px;\n}\n\n\n#content>.container>.item:hover #due{\n    background-color: var(--secondary-color-darker);\n}\n\n#due{\n    border: none;\n}\n\n#content>.container>.item>.checkboxDiv{\n    display: grid;\n    place-items: center;\n}\n\n#formDiv {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 1000;\n    padding: 20px;\n    background-color: var(--secondary-color);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    border-radius: 5px;\n}\n\n#formDiv>#form{\n    display: flex;\n    flex-direction: column;\n    justify-content: left;\n\n}\n\n#formDiv>#form>div:nth-child(1){\n    display: flex;\n    flex-direction: column;\n}\n\n#formDiv>#form>div{\n    margin-bottom: 10px;\n    gap: 5px;\n}\n\n#formDiv>#form>div>label{\n    font-weight: 500;\n}\n\n#formDiv>#form>div>input[type="text"]{\n    border: none;\n    height: clamp(16px, 20px, 24px);\n    background-color: var(--secondary-color);\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);    \n    border-radius: 5px;\n    padding: 2px 5px;\n}\n\n#formDiv>#form>div>input:focus{\n    outline: none;\n}\n\n\n#formDiv>#form>#submit{\n    background-color: var(--checkbox-checked-color);\n    border: none;\n    border-radius: 5px;\n    padding: 4px 5px;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    font-weight: 600;\n    color: var(--secondary-color);\n}\n\n#formDiv>#form>#submit:hover{\n    cursor: pointer;\n    background-color: var(--checkbox-checked-color-darker);\n}\n\n#formDiv>#form>#submit:active{\n    transform: scale(0.96);\n}\n\n#formDiv>#form>#closeFormBtn{\n    position: absolute;\n    top: 6px;\n    right: 6px;\n    color: var(--checkbox-checked-color);\n    z-index: 1300;\n    font-size: 10px;\n}\n\n#formDiv>#form>#closeFormBtn:hover{\n    cursor: pointer;\n    color: var(--checkbox-checked-color-darker);\n}\n\n#formDiv>#form>#closeFormBtn:active{\n    transform: scale(0.96);\n}',"",{version:3,sources:["webpack://./src/styles/category.css"],names:[],mappings:"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",sourcesContent:['@import url(\'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\');\r\n\r\n:root {\r\n    box-sizing: border-box;\r\n    --main-color: rgb(151, 191, 255);\r\n    --main-color-darker: rgb(120, 172, 255);\r\n    --font-color-menu: white;\r\n    --checkbox-checked-color: rgb(255, 132, 18);\r\n    --checkbox-checked-color-darker: rgb(244, 121, 6);\r\n    --secondary-color: white;\r\n    --secondary-color-darker: rgb(242, 241, 241);\r\n}\r\n\r\nbody {\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    grid-template-rows: 1fr;\r\n    height: 100vh;\r\n    margin: 0;\r\n    font-family: \'Roboto\', sans-serif;\r\n}\r\n\r\n#menu {\r\n    display: grid;\r\n    grid-template-columns: 200px;\r\n    grid-template-rows: 50px 40px 40px 40px;\r\n    /* place-items: center; */\r\n    justify-content: left;\r\n    grid-column: 1;\r\n    background-color: var(--main-color);\r\n    box-shadow: 4px 0 10px rgba(0, 0, 0, 0.4);\r\n    z-index: 999;\r\n}\r\n\r\n#menu>.dashboard {\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    padding: 10px auto;\r\n    background-color: var(--main-color);\r\n    height: 50px;\r\n    /* box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4); */\r\n    border-bottom: 1px solid var(--font-color-menu);\r\n    z-index: 999;\r\n}\r\n\r\n#menu>.dashboard>#dash {\r\n    padding: 0px 6px;\r\n    font-weight: 600;\r\n    color: var(--font-color-menu);\r\n    font-size: 1.5rem;\r\n}\r\n\r\n#menu>div {\r\n    height: 40px;\r\n}\r\n\r\n#menu>div>button {\r\n    width: 200px;\r\n    text-align: left;\r\n    border: none;\r\n    height: 40px;\r\n    padding: 0px 6px;\r\n    background-color: var(--main-color);\r\n    color: var(--font-color-menu);\r\n    font-weight: 600;\r\n    font-size: 1rem;\r\n}\r\n\r\n#menu>div>button:hover {\r\n    cursor: pointer;\r\n    /* box-shadow: 0 0 4px rgba(0, 0, 0, 0.4); */\r\n    background-color: var(--main-color-darker);\r\n}\r\n\r\n\r\n\r\n#menu>div>button>i {\r\n    margin-right: 5px;\r\n}\r\n\r\n#newCategoryDiv{\r\n    position: absolute;\r\n    top: 50px;\r\n    right: 50px;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-color: var(--checkbox-checked-color);\r\n    display: grid;\r\n    place-items: center;\r\n    z-index: 9999;\r\n    border-radius: 5px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#newCategoryDiv>#addCategoryBtn{\r\n    font-size: 1.5rem;\r\n    color: white;\r\n    background-color: var(--checkbox-checked-color);\r\n    border: none;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 5px;\r\n}\r\n\r\n#newCategoryDiv>#addCategoryBtn:hover{\r\n    cursor: pointer;\r\n    background-color: var(--checkbox-checked-color-darker);\r\n}\r\n\r\n#newCategoryDiv>#addCategoryBtn:active,\r\n#newCategoryDiv:active{\r\n    transform: scale(0.96);\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 50px max-content;\r\n    grid-column: 2;\r\n    background-color: var(--main-color);\r\n    z-index: 1;\r\n    padding: 50px;\r\n    row-gap: 30px;\r\n}\r\n\r\n#content>* {\r\n    border-radius: 5px;\r\n}\r\n\r\n#content>.titleDiv {\r\n    background-color: white;\r\n    padding: 10px 0 10px 15px;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n    width: clamp(200px, 250px, 300px);\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n\r\n}\r\n\r\n#content>.titleDiv>.title {\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n}\r\n\r\n#content>.container {\r\n    background-color: white;\r\n    width: clamp(500px, 600px, 1fr);\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n#content>.container>#categoryHeaderRow,\r\n#content>.container>.item{\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: auto;\r\n    height: 54px;\r\n    align-items: center;\r\n    border-bottom: 1px solid var(--main-color);\r\n}\r\n\r\n#content>.container>.item:last-child{\r\n    border-bottom: none;\r\n}\r\n\r\n#content>.container>.item:last-child:hover{\r\n    border-bottom: none;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n#content>.container>#categoryHeaderRow{\r\n    border: none;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n    font-weight: 600;\r\n    z-index: 600;\r\n    border-radius: 5px;\r\n}\r\n\r\n#content>.container>#categoryHeaderRow:hover{\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n}\r\n\r\n#content>.container>.item{\r\n    z-index: 500;\r\n    display: grid;\r\n    justify-content: left;\r\n    align-items: center;\r\n    grid-template-columns: 40px 1fr;\r\n    font-weight: 600;\r\n\r\n}\r\n\r\n#content>.container>.item:hover{\r\n    background-color: var(--secondary-color-darker);\r\n    cursor: pointer;\r\n    z-index: 400;\r\n}\r\n\r\n#content>.container>.item>.checkboxDiv>.fa-regular.fa-circle {\r\n    color: var(--checkbox-checked-color);\r\n}\r\n\r\n#content>.container>.item>i{\r\n    margin-right: 15px;\r\n}\r\n\r\n#content>.container>.item>i[class*="dumbbell"]{\r\n    color: grey;\r\n}\r\n\r\n#content>.container>.item>i[class*="house"]{\r\n    color: red;\r\n}\r\n\r\n#content>.container>.item>i[class*="building"]{\r\n    color: blue;\r\n}\r\n\r\n#content>.container>.item>i[class*="beach"]{\r\n    color: sandybrown;\r\n}\r\n\r\n#content>.container>.item>i[class*="book-bookmark"]{\r\n    color: brown;\r\n}\r\n\r\n#content>.container>.item>i[class*="notes-medical"]{\r\n    color: green;\r\n}\r\n\r\n#content>.container>div{\r\n    padding: 0 15px 0 15px;\r\n}\r\n\r\n\r\n#content>.container>.item:hover #due{\r\n    background-color: var(--secondary-color-darker);\r\n}\r\n\r\n#due{\r\n    border: none;\r\n}\r\n\r\n#content>.container>.item>.checkboxDiv{\r\n    display: grid;\r\n    place-items: center;\r\n}\r\n\r\n#formDiv {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 1000;\r\n    padding: 20px;\r\n    background-color: var(--secondary-color);\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n    border-radius: 5px;\r\n}\r\n\r\n#formDiv>#form{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: left;\r\n\r\n}\r\n\r\n#formDiv>#form>div:nth-child(1){\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n#formDiv>#form>div{\r\n    margin-bottom: 10px;\r\n    gap: 5px;\r\n}\r\n\r\n#formDiv>#form>div>label{\r\n    font-weight: 500;\r\n}\r\n\r\n#formDiv>#form>div>input[type="text"]{\r\n    border: none;\r\n    height: clamp(16px, 20px, 24px);\r\n    background-color: var(--secondary-color);\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);    \r\n    border-radius: 5px;\r\n    padding: 2px 5px;\r\n}\r\n\r\n#formDiv>#form>div>input:focus{\r\n    outline: none;\r\n}\r\n\r\n\r\n#formDiv>#form>#submit{\r\n    background-color: var(--checkbox-checked-color);\r\n    border: none;\r\n    border-radius: 5px;\r\n    padding: 4px 5px;\r\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\r\n    font-weight: 600;\r\n    color: var(--secondary-color);\r\n}\r\n\r\n#formDiv>#form>#submit:hover{\r\n    cursor: pointer;\r\n    background-color: var(--checkbox-checked-color-darker);\r\n}\r\n\r\n#formDiv>#form>#submit:active{\r\n    transform: scale(0.96);\r\n}\r\n\r\n#formDiv>#form>#closeFormBtn{\r\n    position: absolute;\r\n    top: 6px;\r\n    right: 6px;\r\n    color: var(--checkbox-checked-color);\r\n    z-index: 1300;\r\n    font-size: 10px;\r\n}\r\n\r\n#formDiv>#form>#closeFormBtn:hover{\r\n    cursor: pointer;\r\n    color: var(--checkbox-checked-color-darker);\r\n}\r\n\r\n#formDiv>#form>#closeFormBtn:active{\r\n    transform: scale(0.96);\r\n}'],sourceRoot:""}]);const c=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),i="/*# ".concat(t," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],d=o.base?A[0]+o.base:A[0],l=i[d]||0,s="".concat(d," ").concat(l);i[d]=l+1;var m=e(s),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==m)r[m].references++,r[m].updater(p);else{var u=t(p,o);o.byIndex=c,r.splice(c,0,{identifier:s,updater:u,references:1})}a.push(s)}return a}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var i=o(n=n||[],t=t||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var A=o(n,t),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=A}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var i=r[o]={id:o,exports:{}};return n[o](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=e(72),t=e.n(o),i=e(825),a=e.n(i),c=e(659),A=e.n(c),d=e(56),l=e.n(d),s=e(540),m=e.n(s),p=e(113),u=e.n(p),f=e(738),C={};function b(n){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},b(n)}function v(n,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,g(o.key),o)}}function g(n){var r=function(n,r){if("object"!=b(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==b(r)?r:r+""}C.styleTagTransform=u(),C.setAttributes=l(),C.insert=A().bind(null,"head"),C.domAPI=a(),C.insertStyleElement=m(),t()(f.A,C),f.A&&f.A.locals&&f.A.locals;const h=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},(r=[{key:"renderMenu",value:function(){var n=document.getElementById("menu"),r=document.createElement("div");r.classList.add("dashboard");var e=document.createElement("p");e.id="dash",e.innerText="Dashboard";var o=document.createElement("div");o.classList.add("projects");var t=document.createElement("button");t.id="projectsBtn",t.innerHTML='<i class="fa-solid fa-list"></i>Projects';var i=document.createElement("div");i.classList.add("toDos");var a=document.createElement("button");a.id="toDosBtn",a.innerHTML='<i class="fa-solid fa-check"></i>To-Do\'s';var c=document.createElement("div");c.classList.add("categories");var A=document.createElement("button");A.id="categoriesBtn",A.innerHTML='<i class="fa-solid fa-hashtag"></i>Categories',c.appendChild(A),i.appendChild(a),o.appendChild(t),r.appendChild(e),[r,o,i,c].forEach((function(r){return n.appendChild(r)}))}},{key:"renderStructure",value:function(){var n=document.getElementById("content"),r=document.createElement("div");r.classList.add("titleDiv");var e=document.createElement("p");e.classList.add("title"),e.innerText="Categories";var o=document.createElement("div");o.classList.add("container");var t=document.createElement("div");t.id="categoryHeaderRow";var i=document.createElement("div");i.id="categoryHeaderName",i.innerText="Category",t.appendChild(i),o.appendChild(t),r.appendChild(e),n.appendChild(r),n.appendChild(o)}},{key:"renderContent",value:function(){var n=document.querySelector(".container"),r=document.createElement("div");r.classList.add("item"),r.innerHTML='<i class="fa-solid fa-dumbbell"></i><p class="categoryName">Fitness</p>';var e=document.createElement("div");e.classList.add("item"),e.innerHTML='<i class="fa-solid fa-house"></i><p class="categoryName">Household</p>';var o=document.createElement("div");o.classList.add("item"),o.innerHTML='<i class="fa-solid fa-building"></i><p class="categoryName">Work</p>';var t=document.createElement("div");t.classList.add("item"),t.innerHTML='<i class="fa-solid fa-umbrella-beach"></i><p class="categoryName">Vacation</p>';var i=document.createElement("div");i.classList.add("item"),i.innerHTML='<i class="fa-solid fa-book-bookmark"></i><p class="categoryName">Education</p>';var a=document.createElement("div");a.classList.add("item"),a.innerHTML='<i class="fa-solid fa-notes-medical"></i><p class="categoryName">Health</p>',[r,e,o,t,i,a].forEach((function(r){return n.appendChild(r)}))}},{key:"renderNewCategoryButton",value:function(){var n=document.getElementById("newCategoryDiv"),r=document.createElement("button");r.id="addCategoryBtn",r.innerText="+",n.appendChild(r)}}])&&v(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}();function x(n){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},x(n)}function B(n,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,y(o.key),o)}}function y(n){var r=function(n,r){if("object"!=x(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=x(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==x(r)?r:r+""}const I=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},(r=[{key:"renderForm",value:function(n){var r=document.getElementById(n),e=document.querySelector("body");r.addEventListener("click",(function(){if(!document.getElementById("formDiv"))switch(n){case"addProjectBtn":var r=document.createElement("div");r.id="formDiv",r.innerHTML='\n                        <form id="form">\n                                <div class="name">\n                                    <label for="projectName">Project Name</label>\n                                    <input type="text" id="projectName" maxlength="40">\n                                </div>\n                                <div class="desc">\n                                    <label for="projectDesc">Description</label>\n                                    <textarea id="projectDesc" name="projectDesc" rows="3" cols="max-content" form="form" maxlength="120" placeholder="Max. 120 characters"></textarea>\n                                </div>\n                                <div class="status">\n                                    <label for="projectStatus">Status</label>\n                                    <input type="checkbox" id="projectStatus">\n                                </div>\n                                <button id="submit">Submit</button>\n                                <i class="fa-solid fa-x" id="closeFormBtn"></i>\n                            </form>',e.appendChild(r),document.getElementById("submit").addEventListener("click",(function(n){n.preventDefault()}));break;case"addToDoBtn":var o=document.createElement("div");o.id="formDiv",o.innerHTML='\n                            <form id="form">\n                                <div class="name">\n                                    <label for="toDoName">To-Do Name</label>\n                                    <input type="text" id="toDoName">\n                                </div>\n                                <div class="desc">\n                                    <label for="toDoDesc">Description</label>\n                                    <input type="text" id="toDoDesc">\n                                </div>\n                                <div class="dueDiv">\n                                    <label for="dueDateFormEl">Due Date</label>\n                                    <input type="date" id="dueDateFormEl">\n                                </div>\n                                <div class="priorityDiv">\n                                    <label for="priorityFormEl">Priority</label>\n                                    <select name="priorityFormEl" class="priorityDropdown">\n                                        <option value="low">Low</option>\n                                        <option value="medium">Medium</option>\n                                        <option value="high">High</option>\n                                    </select>\n                                </div>\n                                <div class="status">\n                                    <label for="toDoStatus">Status</label>\n                                    <input type="checkbox" id="toDoStatus">\n                                </div>\n                                <button id="submit">Submit</button>\n                                <i class="fa-solid fa-x" id="closeFormBtn"></i>\n                            </form>',e.appendChild(o),document.getElementById("submit").addEventListener("click",(function(n){n.preventDefault()}));break;case"addCategoryBtn":var t=document.createElement("div");t.id="formDiv",t.innerHTML='\n                            <form id="form">\n                                <div class="name">\n                                    <label for="categoryName">Category Name</label>\n                                    <input type="text" id="categoryName">\n                                </div>\n                                <button id="submit">Submit</button>\n                                <i class="fa-solid fa-x" id="closeFormBtn"></i>\n                            </form>',e.appendChild(t),document.getElementById("submit").addEventListener("click",(function(n){n.preventDefault()}))}}))}}])&&B(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}();function w(n){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(n)}function k(n,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,E(o.key),o)}}function E(n){var r=function(n,r){if("object"!=w(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=w(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==w(r)?r:r+""}const D=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},(r=[{key:"renderMenu",value:function(){var n=document.getElementById("menu"),r=document.createElement("div");r.classList.add("dashboard");var e=document.createElement("p");e.id="dash",e.innerText="Dashboard";var o=document.createElement("div");o.classList.add("projects");var t=document.createElement("button");t.id="projectsBtn",t.innerHTML='<i class="fa-solid fa-list"></i>Projects';var i=document.createElement("div");i.classList.add("toDos");var a=document.createElement("button");a.id="toDosBtn",a.innerHTML='<i class="fa-solid fa-check"></i>To-Do\'s';var c=document.createElement("div");c.classList.add("categories");var A=document.createElement("button");A.id="categoriesBtn",A.innerHTML='<i class="fa-solid fa-hashtag"></i>Categories',c.appendChild(A),i.appendChild(a),o.appendChild(t),r.appendChild(e),[r,o,i,c].forEach((function(r){return n.appendChild(r)}))}}])&&k(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}();function j(n){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j(n)}function S(n,r){for(var e=0;e<r.length;e++){var o=r[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,L(o.key),o)}}function L(n){var r=function(n,r){if("object"!=j(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,"string");if("object"!=j(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==j(r)?r:r+""}const T=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},(r=[{key:"close",value:function(){var n=document.getElementById("formDiv"),r=document.getElementById("closeFormBtn");document.querySelector("body"),n&&r.addEventListener("click",(function(){n.innerHTML=""}))}}])&&S(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}();document.addEventListener("DOMContentLoaded",(function(){document.getElementById("projectsBtn").addEventListener("click",(function(){window.location.href="/dist/projects.html"})),document.getElementById("toDosBtn").addEventListener("click",(function(){window.location.href="/dist/toDos.html"})),document.getElementById("categoriesBtn").addEventListener("click",(function(){window.location.href="/dist/categories.html"}))})),(new D).renderMenu(),(new h).renderStructure(),(new h).renderContent(),(new h).renderNewCategoryButton(),(new I).renderForm("addCategoryBtn"),(new T).close()})();
//# sourceMappingURL=categories.bundle.js.map