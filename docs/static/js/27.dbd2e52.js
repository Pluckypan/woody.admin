webpackJsonp([27],{525:function(e,t,n){function o(e){a||n(874)}var a=!1,c=n(60)(n(819),n(926),o,null,null);c.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/demo-components/autocomplete3.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] autocomplete3.vue: functional components are not supported with templates, they should use render functions."),e.exports=c.exports},819:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{companyId:1,companyName:"知乎",accountId:2,accountName:"张三"}},methods:{onChange:function(e,t){this.companyName=e.title,this.accountId=null,this.accountName=null},onChange1:function(e,t){this.accountName=e.title}}}},874:function(e,t){},926:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"autocomplete-complex-demos frame-page h-panel"},[e._m(0),e._v(" "),n("div",{staticClass:"h-panel-body"},[n("Form",{staticStyle:{"max-width":"400px"},attrs:{labelWidth:100}},[n("FormItem",{attrs:{label:"公司信息",readonly:""}},[e._v("\n        "+e._s(e.companyId)+"/"+e._s(e.companyName)+"\n      ")]),e._v(" "),n("FormItem",{attrs:{label:"公司"}},[n("AutoComplete",{attrs:{config:"company",show:e.companyName},on:{change:e.onChange},model:{value:e.companyId,callback:function(t){e.companyId=t},expression:"companyId"}})],1),e._v(" "),n("FormItem",{attrs:{label:"人员信息",readonly:""}},[e._v("\n        "+e._s(e.accountId)+"/"+e._s(e.accountName)+"\n      ")]),e._v(" "),n("FormItem",{attrs:{label:"人员"}},[n("AutoComplete",{attrs:{config:"account",show:e.accountName,option:{companyId:e.companyId,companyName:e.companyName}},on:{change:e.onChange1},model:{value:e.accountId,callback:function(t){e.accountId=t},expression:"accountId"}})],1)],1)],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-panel-bar"},[n("span",{staticClass:"h-panel-title"},[e._v("复杂场景")])])}]},e.exports.render._withStripped=!0}});