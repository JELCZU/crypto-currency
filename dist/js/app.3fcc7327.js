(function(){"use strict";var e={822:function(e,t,r){var n=r(9242),a=r(3396);function o(e,t,r,n,o,c){const i=(0,a.up)("AppHeader"),s=(0,a.up)("CryptoCurrencyDashboard");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(i),(0,a.Wm)(s)])}var c=r.p+"img/interface-alert-alarm-bell-1--notification-vibrate-ring-sound-alarm-alert-bell-noise.2cc34138.svg",i=r.p+"img/interface-setting-menu-1--button-parallel-horizontal-lines-menu-navigation-three-hamburger.a803c7ba.svg";const s={class:"container"},d=(0,a.uE)('<form class="nosubmit" data-v-206de6ed><input id="search" type="search" placeholder="Search..." data-v-206de6ed></form><div class="btns" data-v-206de6ed><button data-v-206de6ed><img src="'+c+'" alt="notification" data-v-206de6ed></button><button data-v-206de6ed><img src="'+i+'" alt="interface settings menu" data-v-206de6ed></button></div>',2),l=[d];function u(e,t){return(0,a.wg)(),(0,a.iD)("div",s,l)}var p=r(89);const y={},g=(0,p.Z)(y,[["render",u],["__scopeId","data-v-206de6ed"]]);var h=g;const m={class:"container"},v={class:"current-balance"},b={class:"summary-view"},f={class:"detail-view"};function C(e,t,r,n,o,c){const i=(0,a.up)("CurrentBalance"),s=(0,a.up)("SummaryView"),d=(0,a.up)("DetailView");return(0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",v,[(0,a.Wm)(i)]),(0,a._)("div",b,[(0,a.Wm)(s)]),(0,a._)("div",f,[(0,a.Wm)(d,{cryptoCurrencyData:o.cryptoCurrencyData,isDataFetched:o.isDataFetched},null,8,["cryptoCurrencyData","isDataFetched"])])])}var _=r(7139),D=r.p+"img/dots-horizontal.084353e4.svg";const w=e=>((0,a.dD)("data-v-a1693340"),e=e(),(0,a.Cn)(),e),k={class:"box"},S={class:"box-heading"},x=w((()=>(0,a._)("button",null,[(0,a._)("img",{src:D,alt:"Current ballance more info"})],-1))),F={class:"cash"},I=["src"],P=w((()=>(0,a._)("div",{class:"btns"},[(0,a._)("button",{id:"quick-invest"},"Quick Invest"),(0,a._)("button",{id:"show-report"},"Show Report")],-1)));function B(e,t,r,n,o,c){const i=(0,a.up)("H2"),s=(0,a.up)("H1");return(0,a.wg)(),(0,a.iD)("div",k,[(0,a._)("div",S,[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Current Balance")])),_:1}),x]),(0,a._)("div",null,[(0,a._)("div",F,[(0,a.Wm)(s,{id:"currency"},{default:(0,a.w5)((()=>[(0,a.Uk)("$")])),_:1}),(0,a.Wm)(s,{id:"currency-value"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,_.zw)(c.numberWithSpaces(this.CurrentBalance)),1)])),_:1})]),(0,a._)("div",{class:(0,_.C_)(["diference-status",{rise:o.change>0,fall:o.change<0}])},[(0,a._)("img",{src:this.setGraphic(o.change),alt:""},null,8,I),(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,_.zw)(o.change)+"% vs last month",1)])),_:1})],2)]),P])}var T={name:"CurrentBalance",props:[],data(){return{CurrentBalance:21432.23,change:12}},methods:{numberWithSpaces(e){const t=e.toString().split(".");return t[0]=t[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),t.join(".")},setGraphic(e){let t=r(2098);return e>0&&(t=r(4413)),e<0&&(t=r(8317)),t}},mounted(){}};const Z=(0,p.Z)(T,[["render",B],["__scopeId","data-v-a1693340"]]);var O=Z;const A=e=>((0,a.dD)("data-v-582ea197"),e=e(),(0,a.Cn)(),e),W={class:"box"},E={class:"inner-box"},j={class:"box-heading"},U=A((()=>(0,a._)("button",null,[(0,a._)("img",{src:D,alt:"Current ballance more info"})],-1))),z=A((()=>(0,a._)("div",{class:"canvas-border"},[(0,a._)("canvas",{id:"myChart"})],-1)));function q(e,t,r,n,o,c){const i=(0,a.up)("H2");return(0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",E,[(0,a._)("div",j,[(0,a.Wm)(i,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Summary")])),_:1}),U]),z])])}var R=r(8454),H={name:"CurrentBalance",props:["change","CurrentBalance"],methods:{diferenceSymbolPath(){const e="../assets/img/market-growth-big.svg";return e}},mounted(){const e=document.getElementById("myChart"),t=e.getContext("2d").createLinearGradient(0,0,0,200);t.addColorStop(0,"rgb(116, 69, 251,0.16)"),t.addColorStop(1,"rgba(254,254,254,0)");new R.ZP(e,{type:"line",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"This month",data:[43,19,3,5,23,3],backgroundColor:t,borderColor:"#7445FB",fill:!0,tension:.4,borderWidth:2},{label:"Last month",data:[13,29,13,25,32,3],backgroundColor:"#D5D5D6",borderColor:"#D5D5D6",tension:.4,borderDash:[10,5],borderWidth:2}]},options:{responsive:!0,maintainAspectRatio:!0,scales:{y:{beginAtZero:!0,ticks:{color:"rgba(0, 0, 0, 0.48)",beginAtZero:!0},grid:{drawTicks:!1},border:{display:!1,dash:[1,4]}},x:{display:!1}},elements:{point:{radius:0}},plugins:{legend:{display:!0,position:"bottom",align:"start",labels:{usePointStyle:!0,pointStyle:"circle",padding:44,boxHeight:4,color:"#9896A1",font:{family:"SF Pro Display",size:12,weight:400}}}}}})}};const G=(0,p.Z)(H,[["render",q],["__scopeId","data-v-582ea197"]]);var L=G;const M={class:"box"},Y={class:"box-heading"},K=["onClick","id"];function V(e,t,r,n,o,c){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",M,[(0,a._)("div",null,[(0,a._)("div",Y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(o.tabs,(e=>((0,a.wg)(),(0,a.iD)("button",{key:e,onClick:t=>c.chagneTab(e),id:e},(0,_.zw)(e),9,K)))),128))]),((0,a.wg)(),(0,a.j4)((0,a.LL)(o.selected),{cryptoCurrencyData:r.cryptoCurrencyData,isDataFetched:r.isDataFetched},null,8,["cryptoCurrencyData","isDataFetched"]))])])])}const $={class:"tab-summary-box"};function N(e,t,r,n,o,c){const i=(0,a.up)("CryptoCurrencyElement");return(0,a.wg)(),(0,a.iD)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.cryptoCurrencyData.data,(e=>((0,a.wg)(),(0,a.j4)(i,{isDataFetched:r.isDataFetched,key:e.id,cryptoCurrency:e},null,8,["isDataFetched","cryptoCurrency"])))),128))])}const Q=e=>((0,a.dD)("data-v-78941cfa"),e=e(),(0,a.Cn)(),e),J={key:0,class:"li"},X={class:"currency-general"},ee=["src"],te={class:"description"},re={class:"value"},ne={class:"currency-price"},ae=Q((()=>(0,a._)("div",{class:"description"},"Price",-1))),oe={class:"value"},ce={class:"currency-change"},ie=Q((()=>(0,a._)("div",{class:"description"},"Change",-1))),se={key:0},de=["src"],le={class:"currency-trend"},ue=["id"],pe=Q((()=>(0,a._)("div",{class:"currency-btns"},[(0,a._)("button",{id:"sell"},"Sell"),(0,a._)("button",{id:"buy"},"Buy")],-1)));function ye(e,t,r,n,o,c){return r.isDataFetched?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("div",X,[(0,a._)("img",{src:this.cryptoCurrency.logo},null,8,ee),(0,a._)("div",null,[(0,a._)("div",te,(0,_.zw)(this.cryptoCurrency.symbol),1),(0,a._)("div",re,(0,_.zw)(this.cryptoCurrency.name),1)])]),(0,a._)("div",ne,[ae,(0,a._)("div",oe," $"+(0,_.zw)(new Intl.NumberFormat("en-IN").format((Math.round(100*this.cryptoCurrency.quote.USD.price)/100).toFixed(2))),1)]),(0,a._)("div",ce,[ie,(0,a._)("div",{class:(0,_.C_)(["value",{rise:this.cryptoCurrency.quote.USD.percent_change_30d>0,fall:this.cryptoCurrency.quote.USD.percent_change_30d<0}])},[(0,a._)("div",null,[this.cryptoCurrency.quote.USD.percent_change_30d>0?((0,a.wg)(),(0,a.iD)("div",se," + ")):(0,a.kq)("",!0)]),(0,a._)("div",null,(0,_.zw)(Math.round(100*this.cryptoCurrency.quote.USD.percent_change_30d)/100..toFixed(2))+"% ",1),(0,a._)("img",{src:this.setGraphic(this.cryptoCurrency.quote.USD.percent_change_30d),alt:""},null,8,de)],2)]),(0,a._)("div",le,[(0,a._)("canvas",{id:this.cryptoCurrency.id},null,8,ue)]),pe])):(0,a.kq)("",!0)}var ge={name:"CryptoCurrencyElement",props:["cryptoCurrency","isDataFetched"],data(){return{change:0,borderColor:"",trendConfig:{borderColor:{rise:"rgba(45, 199, 143, 1)",fall:"#ea4d4d"},backgroundColor:{rise:"rgba(45, 199, 143, 0.04)",fall:"rgb(234,77,77,0.04)"}}}},methods:{diferenceSymbolPath(){const e="../assets/img/market-growth-sm.svg";return e},setSymbol(){},setGraphic(e){let t=r(9468);return e>0&&(t=r(9984)),e<0&&(t=r(2866)),t},renderChart(){const e=document.getElementById(this.cryptoCurrency.id),t=e.getContext("2d").createLinearGradient(0,0,0,200);this.cryptoCurrency.quote.USD.percent_change_30d<0?(t.addColorStop(0,this.trendConfig.backgroundColor.fall),this.borderColor=this.trendConfig.borderColor.fall):(t.addColorStop(0,this.trendConfig.backgroundColor.rise),this.borderColor=this.trendConfig.borderColor.rise),t.addColorStop(1,"rgba(254,254,254,0)");new R.ZP(e,{type:"line",data:{labels:["Red","Blue","Yellow","Green","Purple","Orange"],datasets:[{label:"This month",data:[43,19,3,5,23,3],backgroundColor:t,borderColor:this.borderColor,fill:!0,tension:.4,borderWidth:2}]},options:{layout:{padding:{left:!1,top:-30,bottom:!1}},maintainAspectRatio:!1,scales:{y:{display:!1,beginAtZero:!0,ticks:{color:"rgba(0, 0, 0, 0.48)",beginAtZero:!0},grid:{drawTicks:!1},border:{display:!1,dash:[1,4]}},x:{display:!1}},elements:{point:{radius:0}},plugins:{legend:{display:!1,position:"bottom",align:"start",labels:{usePointStyle:!0,pointStyle:"circle",padding:44,boxHeight:4,color:"#9896A1",font:{family:"SF Pro Display",size:12,weight:400}}}}}})}},mounted(){this.renderChart()}};const he=(0,p.Z)(ge,[["render",ye],["__scopeId","data-v-78941cfa"]]);var me=he,ve={name:"TabSummary",props:["cryptoCurrencyData","isDataFetched"],data(){return{CryptoCurrencyElement:me}},methods:{},components:{CryptoCurrencyElement:me},mounted(){}};const be=(0,p.Z)(ve,[["render",N],["__scopeId","data-v-7c4550e5"]]);var fe=be;const Ce={class:"container"};function _e(e,t){return(0,a.wg)(),(0,a.iD)("div",Ce,"TabTable")}const De={},we=(0,p.Z)(De,[["render",_e],["__scopeId","data-v-5ac12b88"]]);var ke=we;const Se={class:"container"};function xe(e,t){return(0,a.wg)(),(0,a.iD)("div",Se,"TabCharts")}const Fe={},Ie=(0,p.Z)(Fe,[["render",xe],["__scopeId","data-v-3de2ed44"]]);var Pe=Ie;const Be={class:"container"};function Te(e,t){return(0,a.wg)(),(0,a.iD)("div",Be,"Tab Reporting")}const Ze={},Oe=(0,p.Z)(Ze,[["render",Te],["__scopeId","data-v-18a942f0"]]);var Ae=Oe;const We={class:"container"};function Ee(e,t){return(0,a.wg)(),(0,a.iD)("div",We,"TabAnalysis")}const je={},Ue=(0,p.Z)(je,[["render",Ee],["__scopeId","data-v-16570750"]]);var ze=Ue,qe={props:["cryptoCurrencyData","isDataFetched"],data(){return{tabs:["Summary","Table","Charts","Reporting","Analysis"],selected:"Summary"}},methods:{chagneTab(e){document.getElementById(this.selected).classList.remove("button-active"),this.selected=e,document.getElementById(this.selected).classList.add("button-active")}},components:{Summary:fe,Table:ke,Charts:Pe,Reporting:Ae,Analysis:ze},mounted(){try{document.getElementById("Summary").classList.add("button-active")}catch(e){window.console.log(e)}}};const Re=(0,p.Z)(qe,[["render",V],["__scopeId","data-v-c6b1708a"]]);var He=Re,Ge={name:"CryptoCurrencyDashboard",components:{CurrentBalance:O,SummaryView:L,DetailView:He},data(){return{cryptoCurrencyData:[],isDataFetched:!1}},methods:{async getCrypto(e){const t=await fetch(e);return t.json()}},mounted(){this.getCrypto("https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?&CMC_PRO_API_KEY=7db9b81c-111c-4a42-afc8-9471d4995e77&limit=10").then((e=>{this.cryptoCurrencyData=e,this.cryptoCurrencyData.data.forEach(((e,t)=>{this.getCrypto(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?&CMC_PRO_API_KEY=7db9b81c-111c-4a42-afc8-9471d4995e77&id=${e.id}`).then((r=>{try{this.cryptoCurrencyData.data[t].logo=r.data[e.id].logo}catch(n){window.console.log(n)}}))})),this.isDataFetched=!0}))}};const Le=(0,p.Z)(Ge,[["render",C],["__scopeId","data-v-f92c2376"]]);var Me=Le,Ye={name:"App",components:{AppHeader:h,CryptoCurrencyDashboard:Me}};const Ke=(0,p.Z)(Ye,[["render",o]]);var Ve=Ke;r(5654);(0,n.ri)(Ve).mount("#app")},8317:function(e,t,r){e.exports=r.p+"img/market-fall-md.0d2a8bb6.svg"},2866:function(e,t,r){e.exports=r.p+"img/market-fall-sm.243b6cf0.svg"},4413:function(e,t,r){e.exports=r.p+"img/market-growth-md.4a1d0c81.svg"},9984:function(e,t,r){e.exports=r.p+"img/market-growth-sm.84de0cca.svg"},2098:function(e,t,r){e.exports=r.p+"img/market-no-change-md.ef2b7ad2.svg"},9468:function(e,t,r){e.exports=r.p+"img/market-no-change-sm.02d5ec4e.svg"}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,o){if(!n){var c=1/0;for(l=0;l<e.length;l++){n=e[l][0],a=e[l][1],o=e[l][2];for(var i=!0,s=0;s<n.length;s++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(i=!1,o<c&&(c=o));if(i){e.splice(l--,1);var d=a();void 0!==d&&(t=d)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,a,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/crypto-currency/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,o,c=n[0],i=n[1],s=n[2],d=0;if(c.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var l=s(r)}for(t&&t(n);d<c.length;d++)o=c[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(l)},n=self["webpackChunkcrypto_currency"]=self["webpackChunkcrypto_currency"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(822)}));n=r.O(n)})();
//# sourceMappingURL=app.3fcc7327.js.map