(function(e){function t(t){for(var r,c,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)c=u[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},c={app:0},a={app:0},o=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d2255f9":"b33bfe15","chunk-5d0c4422":"09ac8d75","chunk-24f73579":"eda07077","chunk-26df8942":"3655d21e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-24f73579":1,"chunk-26df8942":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d2255f9":"31d6cfe0","chunk-5d0c4422":"31d6cfe0","chunk-24f73579":"60a3b14e","chunk-26df8942":"51bd42b5"}[e]+".css",a=s.p+r,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var i=o[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){c[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",d.name="ChunkLoadError",d.type=r,d.request=c,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},2:function(e,t){},"44fd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function c(e,t,n,c,a,o){var u=Object(r["resolveComponent"])("main-header"),s=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(u),Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])((function(e){var t=e.Component;return[Object(r["createVNode"])(r["Transition"],{name:"anim-page",mode:"out-in"},{default:Object(r["withCtx"])((function(){return[(Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(t)))]})),_:2},1024)]})),_:1})],64)}var a=n("cf05"),o=n.n(a),u={class:"header"},s={class:"content-width"},i={class:"header__body"},l={class:"header__logo"},d=Object(r["createElementVNode"])("img",{src:o.a,alt:"Логотип: логотип в виде буквы 'V'"},null,-1),f={class:"header__nav nav"},p={class:"nav__menu text"},m=Object(r["createTextVNode"])("Конвертер валют"),b=Object(r["createTextVNode"])("Мои финансы");function v(e,t,n,c,a,o){var v=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createElementBlock"])("header",u,[Object(r["createElementVNode"])("div",s,[Object(r["createElementVNode"])("div",i,[Object(r["createElementVNode"])("div",l,[Object(r["createVNode"])(v,{to:{name:"main"}},{default:Object(r["withCtx"])((function(){return[d]})),_:1})]),Object(r["createElementVNode"])("nav",f,[Object(r["createElementVNode"])("ul",p,[Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])(v,{class:"nav__link hover-color",to:{name:"main"}},{default:Object(r["withCtx"])((function(){return[m]})),_:1})]),Object(r["createElementVNode"])("li",null,[Object(r["createVNode"])(v,{class:"nav__link hover-color",to:{name:"portfolio"}},{default:Object(r["withCtx"])((function(){return[b]})),_:1})])])])])])])}var h={name:"AppHeader"},g=(n("bb02"),n("6b0d")),k=n.n(g);const x=k()(h,[["render",v]]);var w=x,O={name:"App",components:{MainHeader:w}};const j=k()(O,[["render",c]]);var y=j,C=n("5502"),R=n("1da1"),_=(n("96cf"),n("b0c0"),n("d3b7"),n("159b"),n("b64b"),function(){return[{id:"btc",name:"bitcoin"},{id:"eth",name:"ethereum"},{id:"usd",name:"usd-coin"}]}),q=(n("d9e2"),n("2edf")),E=n.n(q),N=new E.a,V=Object(R["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.ping();case 2:if(e.t2=t=e.sent,e.t1=null!==e.t2,!e.t1){e.next=6;break}e.t1=void 0!==t;case 6:if(e.t0=e.t1,!e.t0){e.next=9;break}e.t0=t.success;case 9:if(!e.t0){e.next=13;break}e.t3=N,e.next=14;break;case 13:e.t3=!1;case 14:return e.abrupt("return",e.t3);case 15:case"end":return e.stop()}}),e)}))),A=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.coin,r=t.toCoin,e.next=3,V();case 3:if(c=e.sent,c){e.next=6;break}throw new Error("Сервер валют недоступен");case 6:return e.next=8,c.simple.price({ids:n,vs_currencies:r});case 8:return a=e.sent,o=a.data,e.abrupt("return",o[n[0]][r[0]]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var n,r,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.days,r=t.coin,c=t.toCoin,e.prev=1,e.next=4,V();case 4:if(a=e.sent,a){e.next=7;break}throw new Error("Сервер валют недоступен");case 7:return e.next=9,a.coins.fetchMarketChart(r,{days:n,vs_currency:c});case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e["catch"](1),console.warn(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),B={namespaced:!0,state:{coins:{},chart:[],convert:{from:null,to:null,result:null},requests:{chartHistory:"succsess",convert:"succsess"}},getters:{coins:function(e){return e.coins},chart:function(e){return e.chart},days:function(){return"14"},convert:function(e){return e.convert},requests:function(e){return e.requests}},mutations:{setCoins:function(e,t){t&&(e.coins=t)},setChart:function(e,t){t&&(e.chart=t)},setForConvert:function(e,t){var n=t.item,r=t.coin;e.convert[n]=r},setResult:function(e,t){e.convert.result=t},setRequest:function(e,t){var n=t.name,r=t.result;e.requests[n]=r},isClear:function(e){e.chart=[],Object.keys(e.convert).forEach((function(t){return e.convert[t]="request"===t?"succsess":null}))}},actions:{getCoins:function(e){var t=e.commit;try{var n=_();t("setCoins",n)}catch(r){console.warn(r)}},getChartData:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function n(){var r,c,a,o,u,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.commit,c=e.getters,a=t.coin,o=t.toCoin,"pending"!==c.requests.chartHistory){n.next=4;break}return n.abrupt("return");case 4:return n.prev=4,r("setRequest",{result:"pending",name:"convert"}),n.next=8,P({days:c.days,coin:a,toCoin:o});case 8:u=n.sent,s=u.data,s&&r("setChart",s.prices),r("setRequest",{name:"convert",result:"succsess"}),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](4),console.warn(n.t0),r("setRequest",{name:"convert",result:!1});case 18:case"end":return n.stop()}}),n,null,[[4,14]])})))()},changeSelect:function(e,t){var n=e.commit,r=e.getters,c=t.item,a=t.coin,o=function(){var e;return null===(e=r.coins)||void 0===e?void 0:e.some((function(e){return e.id===a.id}))};c&&a&&o()&&n("setForConvert",{item:c,coin:a})},convert:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,r=e.getters,"pending"!==r.requests.convert){t.next=3;break}return t.abrupt("return");case 3:if(n("setResult",null),t.prev=4,n("setRequest",{result:"pending",name:"convert"}),!r.convert.to||!r.convert.from){t.next=17;break}return t.prev=7,t.next=10,A({coin:[r.convert.from.name],toCoin:[r.convert.to.id]});case 10:c=t.sent,n("setResult",c),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](7),console.warn(t.t0);case 17:n("setRequest",{name:"convert",result:"succsess"}),t.next=24;break;case 20:t.prev=20,t.t1=t["catch"](4),console.warn(t.t1),n("setRequest",{name:"convert",result:!1});case 24:case"end":return t.stop()}}),t,null,[[4,20],[7,14]])})))()},clearData:function(e){var t=e.commit;t("isClear")}}},S=n("5530"),T=(n("4de4"),n("c740"),{namespaced:!0,state:{assets:[],currency:"usd",request:"succsess"},getters:{assets:function(e){return e.assets},currency:function(e){return e.currency},total:function(e){return e.assets.reduce((function(e,t){return e+t.price*t.count}),0)},request:function(e){return e.request}},mutations:{setAssets:function(e,t){e.assets=t},changeCoin:function(e,t){var n=t.id,r=t.count,c=t.price;r&&(e.assets[n].count=r),c&&(e.assets[n].price=c)},addCoin:function(e,t){e.assets.push(t)},setRequest:function(e,t){e.request=t}},actions:{changeAssets:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function n(){var r,c,a,o,u,s,i,l,d,f,p,m;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.getters,c=e.commit,a=t.op,o=t.coin,u=t.count,"pending"!==r.request){n.next=4;break}return n.abrupt("return");case 4:if(n.prev=4,a&&o){n.next=7;break}return n.abrupt("return");case 7:if(s=null===o||void 0===o?void 0:o.id,i=function(){var e,t=null===(e=r.assets)||void 0===e?void 0:e.filter((function(e){return e.id!==s}));c("setAssets",t)},"remove"!==a){n.next=13;break}i(),n.next=44;break;case 13:if(isNaN(u)){n.next=44;break}if(r.currency!==o.id){n.next=18;break}n.t0=1,n.next=23;break;case 18:return n.next=20,A({coin:[o.name],toCoin:[r.currency]});case 20:n.t1=n.sent,n.t2=u,n.t0=n.t1*n.t2;case 23:if(l=n.t0,d=null===r||void 0===r?void 0:r.assets.findIndex((function(e){return(null===e||void 0===e?void 0:e.id)===s})),f=-1!==d?r.assets[d].count:0,p=0,"increase"!==a){n.next=31;break}p=f+u,n.next=35;break;case 31:if("decrease"!==a){n.next=35;break}if(p=f-u,-1!=d){n.next=35;break}return n.abrupt("return");case 35:if(-1===d){n.next=42;break}if(!(p<=0)){n.next=39;break}return i(),n.abrupt("return");case 39:c("changeCoin",{id:d,count:p,price:l}),n.next=44;break;case 42:m=Object(S["a"])(Object(S["a"])({},o),{},{count:u,price:l}),c("addCoin",m);case 44:n.next=49;break;case 46:n.prev=46,n.t3=n["catch"](4),console.warn(n.t3);case 49:case"end":return n.stop()}}),n,null,[[4,46]])})))()},updateAssetsPrices:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.getters,r=e.commit,"pending"!==n.request){t.next=3;break}return t.abrupt("return");case 3:c=function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A({coin:[t],toCoin:[n.currency]});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();try{n.assets.forEach(function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r("setRequest","pending"),n.currency!==t.id){e.next=5;break}e.t0=1,e.next=8;break;case 5:return e.next=7,c(t.name);case 7:e.t0=e.sent;case 8:if(a=e.t0,!a){e.next=15;break}o=null===n||void 0===n?void 0:n.assets.findIndex((function(e){return(null===e||void 0===e?void 0:e.id)===t.id})),r("setRequest","success"),r("changeCoin",{id:o,price:a}),e.next=17;break;case 15:throw r("setRequest",!1),new Error("Ошибка обновления стоимости валюты");case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(a){r("setRequest",!1),console.warn(a)}case 5:case"end":return t.stop()}}),t)})))()}}}),M=Object(C["a"])({modules:{coin:B,portfolio:T},strict:!1}),D=(n("3ca3"),n("ddb0"),n("6c02")),H=function(){return Promise.all([n.e("chunk-5d0c4422"),n.e("chunk-24f73579")]).then(n.bind(null,"29d1"))},I=function(){return Promise.all([n.e("chunk-5d0c4422"),n.e("chunk-26df8942")]).then(n.bind(null,"b1be"))},L=function(){return n.e("chunk-2d2255f9").then(n.bind(null,"e3b7"))},F=[{name:"main",path:"/",component:H,meta:{auth:!0}},{name:"portfolio",path:"/portfolio",component:I,meta:{auth:!1}},{name:"E404",path:"/:pathMatch(.*)",component:L}],J=Object(D["a"])({history:Object(D["b"])("demo-task-crypto"),routes:F,scrollBehavior:function(){document.getElementById("app").scrollIntoView()}}),K=J;n("44fd");M.dispatch("coin/getCoins"),Object(r["createApp"])(y).use(M).use(K).mount("#app")},"8d6d":function(e,t,n){},bb02:function(e,t,n){"use strict";n("8d6d")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});