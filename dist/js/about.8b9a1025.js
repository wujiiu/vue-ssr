(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")]),t._v(" "),n("span",[t._v("以下是服务端渲染的数据")]),t._v(" "),n("ul",t._l(t.item,function(e,s){return n("li",{key:s,on:{click:function(n){t.handleItemClick(e)}}},[t._v("\n      "+t._s(s)+":"+t._s(e)+"\n    ")])}))])},i=[],o=n("5def"),u=n("2b0e"),a={namespaced:!0,state:function(){return{items:{}}},actions:{fetchItem:function(t,e){var n=t.commit;return Object(o["a"])({url:"/list.do",data:e}).then(function(t){n("setItem",t)})}},mutations:{setItem:function(t,e){u["a"].set(t,"items",e)}}},c={asyncData:function(t){var e=t.store;return e.registerModule("about",a),e.dispatch("about/fetchItem")},computed:{item:function(){return this.$store.state.about.items}},destoryed:function(t,e,n){this.$store.unregisterModule("about")}},r=c,f=n("2877"),l=Object(f["a"])(r,s,i,!1,null,null,"0f72add2");l.options.__file="About.vue";e["default"]=l.exports}}]);
//# sourceMappingURL=about.8b9a1025.js.map