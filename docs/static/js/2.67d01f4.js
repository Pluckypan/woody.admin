webpackJsonp([2],{520:function(e,t,n){function o(e){s||n(911)}var s=!1,a=n(54)(n(845),n(966),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/app-frame.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-frame.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},574:function(e,t,n){"use strict";t.__esModule=!0;var o=n(578),s=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=s.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}},578:function(e,t,n){e.exports={default:n(581),__esModule:!0}},581:function(e,t,n){n(585),e.exports=n(21).Object.assign},582:function(e,t,n){"use strict";var o=n(138),s=n(583),a=n(584),r=n(74),i=n(137),u=Object.assign;e.exports=!u||n(61)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=u({},e)[n]||Object.keys(u({},t)).join("")!=o})?function(e,t){for(var n=r(e),u=arguments.length,l=1,c=s.f,d=a.f;u>l;)for(var p,f=i(arguments[l++]),m=c?o(f).concat(c(f)):o(f),h=m.length,v=0;h>v;)d.call(f,p=m[v++])&&(n[p]=f[p]);return n}:u},583:function(e,t){t.f=Object.getOwnPropertySymbols},584:function(e,t){t.f={}.propertyIsEnumerable},585:function(e,t,n){var o=n(27);o(o.S+o.F,"Object",{assign:n(582)})},634:function(e,t,n){e.exports={default:n(648),__esModule:!0}},648:function(e,t,n){var o=n(21),s=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},672:function(e,t,n){e.exports={default:n(727),__esModule:!0}},724:function(e,t,n){"use strict";t.__esModule=!0;var o=n(208),s=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default=function(e){return function(){var t=e.apply(this,arguments);return new s.default(function(e,n){function o(a,r){try{var i=t[a](r),u=i.value}catch(e){return void n(e)}if(!i.done)return s.default.resolve(u).then(function(e){o("next",e)},function(e){o("throw",e)});e(u)}return o("next")})}}},726:function(e,t,n){e.exports=n(812)},727:function(e,t,n){n(142),n(92),e.exports=n(729)},729:function(e,t,n){var o=n(40),s=n(141);e.exports=n(21).getIterator=function(e){var t=s(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},812:function(e,t,n){(function(t){var o="object"==typeof t?t:"object"==typeof window?window:"object"==typeof self?self:this,s=o.regeneratorRuntime&&Object.getOwnPropertyNames(o).indexOf("regeneratorRuntime")>=0,a=s&&o.regeneratorRuntime;if(o.regeneratorRuntime=void 0,e.exports=n(212),s)o.regeneratorRuntime=a;else try{delete o.regeneratorRuntime}catch(e){o.regeneratorRuntime=void 0}}).call(t,n(55))},844:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},845:function(e,t,n){"use strict";(function(e,o){function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(574),r=s(a),i=n(672),u=s(i),l=n(946),c=s(l),d=n(942),p=s(d),f=n(944),m=s(f),h=n(941),v=s(h),g=n(949),y=s(g),_=n(140),b=s(_),C=n(207);t.default={data:function(){return{loading:!0,openSetting:!1,layoutConfig:{siderTheme:"white",showSystab:!1,headerFixed:!0,siderFixed:!0}}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.$Loading("加载中"),e.User.info().then(function(e){e.ok&&(e.body.avatar=n(940),b.default.dispatch("updateAccount",e.body),t.initDict())})},initDict:function(){var t=this;e.Dict.get().then(function(e){if(e.ok){var n=e.body,s=!0,a=!1,r=void 0;try{for(var i,l=(0,u.default)(n);!(s=(i=l.next()).done);s=!0){var c=i.value;o.addDict(c.name,c.data)}}catch(e){a=!0,r=e}finally{try{!s&&l.return&&l.return()}finally{if(a)throw r}}}t.loading=!1,t.$Loading.close()})},updateLayoutConfig:function(e){var t=e.key,n=e.value;this.layoutConfig[t]=n}},computed:(0,r.default)({},(0,C.mapState)(["siderCollapsed"])),components:{appHead:p.default,appMenu:m.default,SysTabs:y.default,appFooter:v.default,appLayoutSetting:c.default}}}).call(t,n(139).default,n(60))},846:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(574),a=o(s),r=n(207),i=n(945),u=o(i);t.default={components:{appHeaderMessage:u.default},data:function(){return{searchText:"",infoMenu:[{key:"info",title:"个人信息",icon:"h-icon-user"},{key:"logout",title:"退出登录",icon:"h-icon-outbox"}]}},computed:(0,a.default)({},(0,r.mapState)(["User"]),{siderCollapsed:{get:function(){return this.$store.state.siderCollapsed},set:function(e){this.$store.commit("updateSiderCollapse",e)}}}),methods:{goGithub:function(){window.open("https://github.com/Pluckypan/woody.admin")},trigger:function(t){"logout"==t?(e.removeLocal("Auth"),this.$router.replace({name:"login"})):this.$router.push({name:"accountBasic"})},showSettingModal:function(){this.$emit("openSetting")}}}}).call(t,n(72).default)},847:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},mounted:function(){},methods:{},computed:{}}},848:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(574),a=o(s),r=n(894),i=o(r),u=n(207),l=n(943),c=o(l);t.default={props:{theme:String},data:function(){return{menus:i.default}},watch:{$route:function(){this.menuSelect()}},mounted:function(){this.menuSelect()},computed:(0,a.default)({},(0,u.mapState)(["siderCollapsed"])),methods:{menuSelect:function(){this.$route.name&&this.$refs.menu.select(this.$route.name)},trigger:function(e){e.children.length>0||this.$router.push({name:e.key})}},components:{appLogo:c.default}}},849:function(e,t,n){"use strict";(function(e){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(574),a=o(s),r=n(726),i=o(r),u=n(724),l=o(u),c=n(207);t.default={data:function(){return{messageList:[]}},mounted:function(){this.getMessageList()},methods:{init:function(){},getMessageList:function(){function t(){return n.apply(this,arguments)}var n=(0,l.default)(i.default.mark(function t(){var n;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.Home.getMessageList();case 2:n=t.sent,n.ok&&(this.messageList=n.body);case 4:case"end":return t.stop()}},t,this)}));return t}(),goMessageDetail:function(){this.$refs.messageDropdown.hide()}},computed:(0,a.default)({},(0,c.mapGetters)({user:"User",msgCount:"msgCount"}))}}).call(t,n(139).default)},850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(634),s=function(e){return e&&e.__esModule?e:{default:e}}(o);n(207);t.default={props:{layoutConfig:Object},data:function(){return{}},mounted:function(){},methods:{copySetting:function(){this.$Clipboard({text:(0,s.default)(this.layoutConfig,null,2),showSuccessTip:"复制成功"})}}}},860:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=n(208),s=function(e){return e&&e.__esModule?e:{default:e}}(o),a=n(891);t.default={name:"TagsNav",props:{value:Object,homePage:String},data:function(){return{tagList:[]}},computed:{currentRouteObj:function(){var e=this.$route;return{name:e.name,params:e.params,query:e.query}}},methods:{init:function(){this.tagList=e.getLocal2Json("SYS_TABS")||[],this.addTab(this.$route)},beforeClose:function(){return this.$Confirm("确定要关闭这一页吗")},handleClose:function(e){var t=this;e.meta&&e.meta.beforeCloseName&&e.meta.beforeCloseName in beforeClose?new s.default(this.beforeClose[e.meta.beforeCloseName]).then(function(n){n&&t.close(e)}):this.close(e)},close:function(e){var t=this.tagList.indexOf(e);this.tagList.splice(t,1);var n=null;this.isCurrentTab(e)&&(this.tagList.length>t?n=this.tagList[t]:this.tagList.length>0?n=this.tagList[t-1]:this.$router.replace({name:"Home"}),n&&this.$router.replace(n)),this.saveLocal()},handleClick:function(e){this.$router.push(e)},showTitleInside:function(e){return(0,a.showTitle)(e,this)},isCurrentTab:function(e){return(0,a.routeEqual)(this.currentRouteObj,e)},addTab:function(e){if(e.name){var t=e.name,n=e.query,o=e.params,s=e.meta,r={name:t,query:n,params:o,meta:s||{}};(0,a.isExsit)(r,this.tagList)||(this.tagList.push(r),this.saveLocal())}},saveLocal:function(){e.saveLocal("SYS_TABS",this.tagList)}},mounted:function(){this.init()},watch:{$route:function(e){this.addTab(e)}}}}).call(t,n(72).default)},891:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.routeEqual=t.showTitle=t.isExsit=void 0;var s=n(672),a=o(s),r=n(206),i=o(r),u=function(e,t){var n=(0,i.default)(e),o=(0,i.default)(t);return n.length===o.length&&(0===n.length&&0===o.length||!n.some(function(n){return e[n]!=t[n]}))},l=(t.isExsit=function(e,t){var n=!0,o=!1,s=void 0;try{for(var r,i=(0,a.default)(t);!(n=(r=i.next()).done);n=!0){var u=r.value;if(l(u,e))return!0}}catch(e){o=!0,s=e}finally{try{!n&&i.return&&i.return()}finally{if(o)throw s}}return!1},t.showTitle=function(e,t){var n=e.meta.title;if(n)return n},t.routeEqual=function(e,t){var n=e.params||{},o=t.params||{},s=e.query||{},a=t.query||{};return e.name===t.name&&u(n,o)&&u(s,a)})},894:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=[{title:"Dashboard",key:"Home",icon:"icon-monitor",count:1},{title:"我的书签",key:"tree",icon:"icon-ribbon"},{title:"管理书签",key:"woody",icon:"icon-book",children:[{title:"添加分类",key:"category"},{title:"分类列表",key:"categorys"},{title:"添加书签",key:"bookmark"},{title:"书签列表",key:"bookmarks"}]},{title:"系统设置",key:"sys-setting",icon:"icon-cog",children:[{title:"个人中心",key:"accountBasic"},{title:"安全设置",key:"securitySetting"}]}];t.default=o},910:function(e,t){},911:function(e,t){},913:function(e,t){},914:function(e,t){},925:function(e,t){},932:function(e,t){},935:function(e,t){},938:function(e,t){},940:function(e,t,n){e.exports=n.p+"static/images/src/images/avatar.8a80923.png"},941:function(e,t,n){function o(e){s||n(938)}var s=!1,a=n(54)(n(844),n(996),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/app-footer.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-footer.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},942:function(e,t,n){function o(e){s||n(935)}var s=!1,a=n(54)(n(846),n(993),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/app-header.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-header.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},943:function(e,t,n){function o(e){s||n(925)}var s=!1,a=n(54)(n(847),n(982),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/app-logo.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-logo.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},944:function(e,t,n){function o(e){s||n(913)}var s=!1,a=n(54)(n(848),n(968),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/app-menu.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-menu.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},945:function(e,t,n){function o(e){s||n(910)}var s=!1,a=n(54)(n(849),n(965),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/modules/app-header-message.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-header-message.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},946:function(e,t,n){function o(e){s||n(914)}var s=!1,a=n(54)(n(850),n(969),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/app/modules/app-layout-setting.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] app-layout-setting.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},949:function(e,t,n){function o(e){s||n(932)}var s=!1,a=n(54)(n(860),n(990),o,null,null);a.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/common/SysTabs/SysTabs.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] SysTabs.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},965:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("DropdownCustom",{ref:"messageDropdown",staticClass:"app-header-message-vue",attrs:{placement:"bottom-end",className:"app-message-dropdown",toggleIcon:!1}},[n("div",{staticClass:"app-header-icon-item"},[n("Badge",{attrs:{count:e.msgCount.messages}},[n("i",{staticClass:"h-icon-bell"})])],1),e._v(" "),n("div",{attrs:{slot:"content"},slot:"content"},[n("div",{staticClass:"h-panel"},[n("div",{staticClass:"h-panel-bar h-panel-bar-s"},[n("span",{staticClass:"h-panel-title"},[e._v("消息")])]),e._v(" "),n("div",{staticClass:"message-list-container common-list-container"},e._l(e.messageList,function(t){return n("div",{key:t.id,staticClass:"common-list-item",class:{readed:t.isReaded,unReaded:!t.isReaded},on:{click:function(n){return e.goMessageDetail(t)}}},[n("div",{staticClass:"common-list-meta"},[n("p",{staticClass:"title"},[e._v(e._s(t.title))]),e._v(" "),n("p",{staticClass:"description"},[e._v(e._s(t.description))])])])}),0),e._v(" "),e.messageList.length>0?n("div",{staticClass:"text-center h-panel-bar"},[n("span",{staticClass:"link"},[e._v("查看更多")])]):e._e()])])])},staticRenderFns:[]},e.exports.render._withStripped=!0},966:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loading?e._e():n("Layout",{staticClass:"app-frame",attrs:{siderCollapsed:e.siderCollapsed,siderFixed:e.layoutConfig.siderFixed}},[n("Sider",{attrs:{theme:e.layoutConfig.siderTheme}},[n("appMenu",{attrs:{theme:e.layoutConfig.siderTheme}})],1),e._v(" "),n("Layout",{attrs:{headerFixed:e.layoutConfig.headerFixed}},[n("HHeader",{attrs:{theme:"white"}},[n("appHead",{attrs:{layoutConfig:e.layoutConfig},on:{openSetting:function(t){e.openSetting=!0}}})],1),e._v(" "),e.layoutConfig.showSystab?n("SysTabs",{attrs:{homePage:"Home"}}):e._e(),e._v(" "),n("Content",[n("router-view")],1),e._v(" "),n("HFooter",[n("appFooter")],1)],1)],1),e._v(" "),n("Modal",{attrs:{type:"drawer-right"},model:{value:e.openSetting,callback:function(t){e.openSetting=t},expression:"openSetting"}},[n("appLayoutSetting",{attrs:{layoutConfig:e.layoutConfig}})],1)],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},968:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-menu"},[n("appLogo"),e._v(" "),n("Menu",{ref:"menu",attrs:{datas:e.menus,inlineCollapsed:e.siderCollapsed,className:"h-menu-"+e.theme},on:{click:e.trigger}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},969:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-layout-setting-vue"},[n("div",{staticClass:"h-modal-header"},[e._v("系统布局配置")]),e._v(" "),n("div",{staticClass:"h-panel"},[n("div",{staticClass:"h-panel-body"},[n("Form",{staticClass:"setting-form",attrs:{labelWidth:120,labelPosition:"left",readonly:""}},[n("FormItem",{attrs:{label:"Sider风格"}},[n("SwitchList",{attrs:{small:"",datas:{white:"白色",dark:"暗色"}},model:{value:e.layoutConfig.siderTheme,callback:function(t){e.$set(e.layoutConfig,"siderTheme",t)},expression:"layoutConfig.siderTheme"}})],1),e._v(" "),n("FormItem",{attrs:{label:"固定 Header"}},[n("h-switch",{attrs:{small:""},model:{value:e.layoutConfig.headerFixed,callback:function(t){e.$set(e.layoutConfig,"headerFixed",t)},expression:"layoutConfig.headerFixed"}})],1),e._v(" "),n("FormItem",{attrs:{label:"固定侧边菜单"}},[n("h-switch",{attrs:{small:""},model:{value:e.layoutConfig.siderFixed,callback:function(t){e.$set(e.layoutConfig,"siderFixed",t)},expression:"layoutConfig.siderFixed"}})],1),e._v(" "),n("FormItem",{attrs:{label:"开启多Tab"}},[n("h-switch",{attrs:{small:""},model:{value:e.layoutConfig.showSystab,callback:function(t){e.$set(e.layoutConfig,"showSystab",t)},expression:"layoutConfig.showSystab"}})],1),e._v(" "),n("p",{staticClass:"dark-color font13",staticStyle:{padding:"10px 15px"}},[e._v("开启多Tab后，在 app-frame 中打开 keep-alive 才能开启页面缓存")])],1),e._v(" "),n("Button",{attrs:{block:""},on:{click:e.copySetting}},[e._v("复制配置")]),e._v(" "),n("p",{staticClass:"alert-warning"},[e._v("所有的配置都在 app-frame.vue 文件内，通过 layoutConfig 参数设置排版方式。")])],1)])])},staticRenderFns:[]},e.exports.render._withStripped=!0},982:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-logo"},[n("router-link",{attrs:{to:"/"}},[e._v("WOODY ADMIN")])],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},990:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sys-tabs-vue"},[n("div",{ref:"scrollOuter",staticClass:"tabs-container"},[n("div",{staticClass:"tabs-body"},e._l(e.tagList,function(t,o){return n("span",{key:"sys-tab-"+o,staticClass:"tabs-item",class:{"tabs-item-chosen":e.isCurrentTab(t)},on:{click:function(n){return e.handleClick(t)}}},[n("div",{staticClass:"tabs-item-title"},[n("span",{class:t.meta.icon}),e._v(" "),n("span",[e._v(e._s(t.meta.title))])]),e._v(" "),e.homePage!=t.name?n("span",{staticClass:"tabs-item-close h-icon-close",on:{click:function(n){return n.stopPropagation(),e.handleClose(t)}}}):e._e()])}),0)])])},staticRenderFns:[]},e.exports.render._withStripped=!0},993:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-header"},[n("div",{staticStyle:{width:"100px",float:"left"}},[n("Button",{staticClass:"font20",attrs:{icon:e.siderCollapsed?"icon-align-right":"icon-align-left",size:"l",noBorder:""},on:{click:function(t){e.siderCollapsed=!e.siderCollapsed}}})],1),e._v(" "),n("div",{staticClass:"float-right app-header-info"},[n("AutoComplete",{attrs:{showDropdownWhenNoResult:!1,config:"globalSearch",placeholder:"全局搜索.."},model:{value:e.searchText,callback:function(t){e.searchText=t},expression:"searchText"}}),e._v(" "),n("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"app-header-icon-item",attrs:{content:"系统布局配置",theme:"white"},on:{click:e.showSettingModal}},[n("i",{staticClass:"icon-content-left"})]),e._v(" "),n("appHeaderMessage"),e._v(" "),n("div",{directives:[{name:"tooltip",rawName:"v-tooltip"}],staticClass:"app-header-icon-item",attrs:{content:"说明文档",theme:"white"},on:{click:e.goGithub}},[n("i",{staticClass:"h-icon-help"})]),e._v(" "),n("DropdownMenu",{attrs:{className:"app-header-dropdown",trigger:"hover",offset:"0 5",width:150,placement:"bottom-end",datas:e.infoMenu},on:{onclick:e.trigger}},[n("span",[e._v(e._s(e.User.name))])])],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0},996:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-footer"},[e._v("\n    Copyright © 2019  woody·admin \n\t\t"),n("a",{attrs:{href:"https://github.com/Pluckypan/woody.admin",target:"_blank"}},[n("i",{staticClass:"h-icon-github"})]),e._v(" · \n\t\t"),n("a",{attrs:{href:"https://github.com/Pluckypan/Woody",target:"_blank"}},[e._v("Woody")])])}]},e.exports.render._withStripped=!0}});