(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20d4f543"],{5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var i=s("1d80"),r=s("5899"),c="["+r+"]",a=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),n=function(t){return function(e){var s=String(i(e));return 1&t&&(s=s.replace(a,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:n(1),end:n(2),trim:n(3)}},8844:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"seckill_details"}},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"title"},[s("p",[t._v(t._s(t.secgood.detail.product_name))]),s("div",{staticClass:"list"},[s("ul",[s("li",[s("router-link",{attrs:{to:""}},[t._v("概述")])],1),s("li",[s("router-link",{attrs:{to:""}},[t._v("参数")])],1),s("li",[s("router-link",{attrs:{to:""}},[t._v("用户评价")])],1)])])])]),s("div",{staticClass:"main"},[s("div",{staticClass:"block"},[t.productPicture.length>1?s("el-carousel",{attrs:{height:"560px"}},t._l(t.productPicture,(function(e){return s("el-carousel-item",{key:e.id},[s("img",{staticStyle:{height:"560px"},attrs:{src:t.$target+e.product_picture,alt:e.introduction}})])})),1):t._e(),1==t.productPicture.length?s("div",[s("img",{staticStyle:{height:"560px"},attrs:{src:t.$target+t.productPicture[0].product_picture,alt:t.productPicture[0].introduction}})]):t._e()],1),s("div",{staticClass:"content"},[s("h1",{staticClass:"name"},[t._v(t._s(t.secgood.detail.product_name))]),s("p",{staticClass:"intro"},[t._v(t._s(t.secgood.detail.product_intro))]),s("p",{staticClass:"store"},[t._v("小米自营")]),s("div",{staticClass:"price",attrs:{id:"seckill"}},[s("span",{staticClass:"seckill"},[t._v("秒杀价")]),s("span",[t._v(" ￥"+t._s(t.secgood.seckill_price))]),t._v(" "),s("br"),s("span",{staticClass:"pre_price"},[t._v("市场价")]),s("span",{staticClass:"del"},[t._v(" ￥"+t._s(t.secgood.detail.product_price))]),s("div",{staticClass:"timeout"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.status,expression:"status===0"}]},[t._v("距离秒杀开始还有"+t._s(t.remainTime))]),s("div",{directives:[{name:"show",rawName:"v-show",value:1===t.status,expression:"status===1"}]},[t._v("秒杀中")]),s("div",{directives:[{name:"show",rawName:"v-show",value:-1===t.status,expression:"status===-1"}]},[t._v("秒杀已结束")])])]),s("div",{staticClass:"pro-list"},[s("span",{staticClass:"pro-name"},[t._v(t._s(t.secgood.detail.product_name))]),s("span",{staticClass:"pro-price"},[s("span",[t._v(t._s(t.secgood.seckill_price)+"元")]),s("span",{staticClass:"pro-del"},[t._v(t._s(t.secgood.detail.product_price)+"元")])]),s("p",{staticClass:"price-sum"},[t._v("秒杀价 : "+t._s(t.secgood.seckill_price)+"元")])]),s("div",{staticClass:"button"},[s("el-button",{staticClass:"shop-cart",attrs:{disabled:1!==t.status},on:{click:t.addSecKillOrder}},[t._v("立即抢购")]),s("el-button",{staticClass:"like",on:{click:t.addCollect}},[t._v("喜欢")])],1),t._m(0)])])])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pro-policy"},[s("ul",[s("li",[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 小米自营 ")]),s("li",[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 小米发货 ")]),s("li",[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 7天无理由退货 ")]),s("li",[s("i",{staticClass:"el-icon-circle-check"}),t._v(" 7天价格保护 ")])])])}],c=(s("a4d3"),s("4de4"),s("4160"),s("0d03"),s("e439"),s("dbb4"),s("b64b"),s("d3b7"),s("e25e"),s("159b"),s("ade3")),a=s("2f62");function o(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function n(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?o(Object(s),!0).forEach((function(e){Object(c["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var l={data:function(){return{dis:!1,productID:"",secgood:"",productPicture:"",status:"",remain:0}},activated:function(){void 0!=this.$route.query.productID&&(this.productID=this.$route.query.productID)},watch:{productID:function(t){this.getDetails(t),this.getDetailsPicture(t)}},computed:{remainTime:function(){var t=parseInt(this.remain/3600/24),e=parseInt(this.remain/3600%24),s=parseInt(this.remain/60%60),i=parseInt(this.remain%60);return e<10&&(e="0"+e),s<10&&(s="0"+s),i<10&&(i="0"+i),0===t?e+":"+s+":"+i:t+"天"+e+":"+s+":"+i}},methods:n({},Object(a["b"])(["unshiftShoppingCart","addShoppingCartNum"]),{seckill:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){t.remain>0?t.remain=t.remain-1:parseInt(new Date(t.secgood.end_date).getTime()-(new Date).getTime())>0?t.status=1:t.status=-1}),1e3)},getDetails:function(t){var e=this;this.$axios.post("seckill/getDetails",{productID:t}).then((function(t){e.secgood=t.data.secgood,e.remain=parseInt((new Date(e.secgood.start_date).getTime()-(new Date).getTime())/1e3),e.seckill(),e.remain>0?e.status=0:new Date-e.secgood.end_date>0?e.status=-1:e.status=1})).catch((function(t){return Promise.reject(t)}))},getDetailsPicture:function(t){var e=this;this.$axios.post("product/getDetailsPicture",{productID:t},{withCredentials:!0}).then((function(t){e.productPicture=t.data.ProductPicture})).catch((function(t){return Promise.reject(t)}))},addSecKillOrder:function(){var t=this;this.$store.getters.getUser?(console.log(this.$store.getters.getUser.user_id),console.log(this.productID),this.$axios.post("seckill/addSecKillOrder",{user_id:this.$store.getters.getUser.user_id,product_id:this.productID,secgoods_id:this.secgood.id},{withCredentials:!0}).then((function(e){switch(e.data.code){case"001":t.notifySucceed(e.data.msg),t.timer=setInterval((function(){t.$axios.post("seckill/getSecKillResult",{user_id:t.$store.getters.getUser.user_id,product_id:t.productID},{withCredentials:!0}).then((function(e){"001"===e.data.code&&(t.notifySucceed(e.data.msg),clearInterval(t.timer),t.timer=null)})).catch((function(t){return Promise.reject(t)}))}),1e3);break;default:t.notifyError(e.data.msg)}})).catch((function(t){return Promise.reject(t)}))):this.$store.dispatch("setShowLogin",!0)},getSecKillResult:function(){},addCollect:function(){var t=this;this.$store.getters.getUser?this.$axios.post("collect/addCollect",{user_id:this.$store.getters.getUser.user_id,product_id:this.productID},{withCredentials:!0}).then((function(e){"001"==e.data.code?t.notifySucceed(e.data.msg):t.notifyError(e.data.msg)})).catch((function(t){return Promise.reject(t)})):this.$store.dispatch("setShowLogin",!0)}})},d=l,u=(s("a512"),s("2877")),p=Object(u["a"])(d,i,r,!1,null,null,null);e["default"]=p.exports},a512:function(t,e,s){"use strict";var i=s("d7af"),r=s.n(i);r.a},d7af:function(t,e,s){},e25e:function(t,e,s){var i=s("23e7"),r=s("e583");i({global:!0,forced:parseInt!=r},{parseInt:r})},e583:function(t,e,s){var i=s("da84"),r=s("58a8").trim,c=s("5899"),a=i.parseInt,o=/^[+-]?0[Xx]/,n=8!==a(c+"08")||22!==a(c+"0x16");t.exports=n?function(t,e){var s=r(String(t));return a(s,e>>>0||(o.test(s)?16:10))}:a}}]);
//# sourceMappingURL=chunk-20d4f543.4ee03f26.js.map