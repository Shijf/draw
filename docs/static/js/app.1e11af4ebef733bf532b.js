webpackJsonp([0],{"2OB8":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"app"}},[s("lucky-wheel")],1)},n=[],a={render:e,staticRenderFns:n};i.a=a},"5P/H":function(t,i,s){t.exports=s.p+"static/img/congratulation.b790ac0.png"},"98HQ":function(t,i,s){"use strict";var e=s("Ln0X"),n={duration:4e3,circle:8,mode:"ease-in-out"};i.a={data:function(){return{count:10,duration:3e3,prizeList:[],rotateAngle:0,index:0,prize:null,flag:!1}},created:function(){this.angleList=[],this.isRotating=!1,this.config=n,this.initPrizeList()},computed:{rotateStyle:function(){return"\n        -webkit-transition: transform "+this.config.duration+"ms "+this.config.mode+";\n        transition: transform "+this.config.duration+"ms "+this.config.mode+";\n        -webkit-transform: rotate("+this.rotateAngle+"deg);\n            transform: rotate("+this.rotateAngle+"deg);"},toastTitle:function(){return this.prize&&1===this.prize.isPrize?"恭喜您，获得"+this.prize.name:"未中奖"},toastIcon:function(){return s(this.prize&&1===this.prize.isPrize?"5P/H":"xt23")}},methods:{initPrizeList:function(){this.prizeList=this.formatPrizeList(e.a)},formatPrizeList:function(t){var i=[],s=t.length,e=360/s,n=e/2;return t.forEach(function(t,s){var a=-(s*e+n);t.style="-webkit-transform: rotate("+a+"deg);\n                      transform: rotate("+a+"deg);",i.push(s*e+n)}),this.angleList=i,t},beginRotate:function(){if(this.flag)return void this.$toast("您已参与过");this.index=this.random(this.prizeList.length-1),this.rotating()},random:function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return parseInt(Math.random()*(t-i+1)+i)},rotating:function(){var t=this,i=this.isRotating,s=this.angleList,e=this.config,n=this.rotateAngle,a=this.index;if(!i){this.isRotating=!0;var r=n+360*e.circle+s[a]-n%360;this.rotateAngle=r,setTimeout(function(){t.rotateOver()},e.duration+1e3)}},rotateOver:function(){this.isRotating=!1,this.prize=e.a[this.index]},closeToast:function(){this.prize=null,this.flag=!0}}}},Cxzw:function(t,i){},"D/3C":function(t,i,s){"use strict";function e(t){s("Cxzw")}var n=s("98HQ"),a=s("DRZi"),r=s("VU/8"),c=e,o=r(n.a,a.a,!1,c,"data-v-038762af",null);i.a=o.exports},DRZi:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"container"},[s("div",{staticClass:"lucky-wheel"},[s("div",{staticClass:"lucky-title"}),t._v(" "),s("div",{staticClass:"wheel-main"},[s("div",{staticClass:"wheel-pointer",on:{click:function(i){return t.beginRotate()}}}),t._v(" "),s("div",{staticClass:"wheel-bg",style:t.rotateStyle},[s("div",{staticClass:"prize-list"},t._l(t.prizeList,function(i,e){return s("div",{key:e,staticClass:"prize-item",style:i.style},[s("div",{staticClass:"prize-pic"},[s("img",{attrs:{src:i.icon}})]),t._v(" "),s("div",{staticClass:"prize-type"},[t._v(t._s(i.name))])])}),0)])])]),t._v(" "),s("div",{staticClass:"main"},[s("div",{staticClass:"main-bg"}),t._v(" "),s("div",{staticClass:"bg-p"}),t._v(" "),s("div",{staticClass:"content",staticStyle:{display:"none"}},[s("div",{staticClass:"count"},[t._v("今日免费抽奖次数： "+t._s(t.count))])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.prize,expression:"prize"}],staticClass:"toast"},[s("div",{staticClass:"toast-container"},[s("img",{staticClass:"toast-picture",attrs:{src:t.toastIcon}}),t._v(" "),s("div",{staticClass:"close",on:{click:function(i){return t.closeToast()}}}),t._v(" "),s("div",{staticClass:"toast-title"},[t._v(t._s(t.toastTitle))]),t._v(" "),s("div",{staticClass:"toast-btn"},[s("div",{staticClass:"toast-cancel",on:{click:t.closeToast}},[t._v("关闭")])])])]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.prize,expression:"prize"}],staticClass:"toast-mask"})])},n=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"tip"},[s("div",{staticClass:"tip-title"},[t._v("活动规则")]),t._v(" "),s("div",{staticClass:"tip-content"},[s("p",[t._v("1.本活动仅限光大e信线下活动现场使用")]),t._v(" "),s("p",[t._v("2.活动最终解释权归光大e信组所有")])])])}],a={render:e,staticRenderFns:n};i.a=a},"G59/":function(t,i,s){"use strict";i.a={data:function(){return{theToast:!1,msg:""}}}},IwWi:function(t,i,s){"use strict";var e=s("suVo"),n={};n.install=function(t){var i=t.extend(e.a),s=new i;s.$mount(document.createElement("div")),document.body.appendChild(s.$el),t.prototype.$toast=function(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1250;s.msg=t,s.theToast=!0,setTimeout(function(){s.theToast=!1},i)}},i.a=n},Ln0X:function(t,i,s){"use strict";s.d(i,"a",function(){return e});var e=[{id:1,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/1.be5711d.png",name:"口罩",isPrize:1,weight:30},{id:2,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/2.c242cfd.png",name:"鼠标垫",isPrize:1,weight:60},{id:3,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/3.f8002ae.png",name:"手提袋",isPrize:1,weight:10},{id:4,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/2.c242cfd.png",name:"鼠标垫",isPrize:1,weight:60},{id:5,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/1.be5711d.png",name:"口罩",isPrize:1,weight:30},{id:6,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/2.c242cfd.png",name:"鼠标垫",isPrize:1,weight:60},{id:7,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/7.1a07fd9.png",name:"抱枕",isPrize:1,weight:5},{id:8,icon:"https://cdn.jsdelivr.net/gh/shijf/draw@1.1/docs/static/img/2.c242cfd.png",name:"鼠标垫",isPrize:1,weight:60}]},M93x:function(t,i,s){"use strict";function e(t){s("R1H7")}var n=s("xJD8"),a=s("2OB8"),r=s("VU/8"),c=e,o=r(n.a,a.a,!1,c,null,null);i.a=o.exports},NHnr:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("7+uW"),n=s("M93x"),a=s("IwWi");e.a.config.productionTip=!1,e.a.use(a.a),new e.a({el:"#app",template:"<App/>",components:{App:n.a}})},R1H7:function(t,i){},VTcc:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("transition",{attrs:{name:"demo"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.theToast,expression:"theToast"}],staticClass:"toast"},[t._v("\n        "+t._s(t.msg)+"\n    ")])])},n=[],a={render:e,staticRenderFns:n};i.a=a},suVo:function(t,i,s){"use strict";function e(t){s("wHRD")}var n=s("G59/"),a=s("VTcc"),r=s("VU/8"),c=e,o=r(n.a,a.a,!1,c,"data-v-9b8b45b6",null);i.a=o.exports},wHRD:function(t,i){},xJD8:function(t,i,s){"use strict";var e=s("D/3C");i.a={name:"app",components:{LuckyWheel:e.a}}},xt23:function(t,i,s){t.exports=s.p+"static/img/sorry.f97510f.png"}},["NHnr"]);
//# sourceMappingURL=app.1e11af4ebef733bf532b.js.map