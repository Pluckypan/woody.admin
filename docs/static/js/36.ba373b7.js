webpackJsonp([36],{530:function(e,t,s){function n(e){o||s(910)}var o=!1,i=s(54)(s(865),s(965),n,null,null);i.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/demo-components/account/modules/notice-setting.vue",i.esModule&&Object.keys(i.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] notice-setting.vue: functional components are not supported with templates, they should use render functions."),e.exports=i.exports},865:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{openSystemMessage:!0,openAccountMessage:!0}},mounted:function(){this.init()},methods:{init:function(){}},computed:{}}},910:function(e,t){},965:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"notice-setting-vue"},[s("div",{staticClass:"subframe-title"},[e._v("通知设置")]),e._v(" "),s("div",{staticClass:"common-list-container"},[s("div",{staticClass:"common-list-item"},[e._m(0),e._v(" "),s("div",{staticClass:"common-list-action"},[s("h-switch",{model:{value:e.openSystemMessage,callback:function(t){e.openSystemMessage=t},expression:"openSystemMessage"}})],1)]),e._v(" "),s("div",{staticClass:"common-list-item"},[e._m(1),e._v(" "),s("div",{staticClass:"common-list-action"},[s("h-switch",{model:{value:e.openAccountMessage,callback:function(t){e.openAccountMessage=t},expression:"openAccountMessage"}})],1)])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"common-list-meta"},[s("p",{staticClass:"font-bold"},[e._v("系统消息")]),e._v(" "),s("p",[e._v("系统性的通知或者更新消息")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"common-list-meta"},[s("p",{staticClass:"font-bold"},[e._v("帐号消息")]),e._v(" "),s("p",[e._v("帐号变更的通知消息")])])}]},e.exports.render._withStripped=!0}});