webpackJsonp([8],{556:function(e,t,n){function o(e){a||n(909)}var a=!1,s=n(56)(n(849),n(961),o,null,null);s.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/bookmarks/tree.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] tree.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},601:function(e,t,n){e.exports={default:n(603),__esModule:!0}},603:function(e,t,n){var o=n(21),a=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return a.stringify.apply(a,arguments)}},623:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(218),s=o(a),i=n(219),r=(o(i),s.default.create({baseURL:"https://api.github.com"})),l={Gist:{auth:function(e){r.defaults.headers.common.Authorization="token "+e,r.defaults.headers.common.Accept="application/vnd.github.v3.raw+json"},get:function(e){return r.get("/gists/"+e)},edit:function(e,t){return r({method:"POST",dataType:"JSON",url:"/gists/"+e,data:t})}},Repo:{login:function(e){return Ajax.postJson("/login",e)},logout:function(e){return Ajax.post("/logout",e)}}};t.default=l},624:function(e,t,n){"use strict";(function(e,o){function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(601),i=a(s),r=n(216),l=a(r),c={sync:function(t){var n=e.getLocal("gist"),a=e.getLocal("token");if(console.log("gist ="+n),null==n||"null"==n||null==a||"null"==a)return void t(-2,"invalid token");o.Gist.auth(a),o.Gist.get(n).then(function(n){if(200==n.status){var o=n.data.files,a=o["category.json"],s=a&&a.content?e.safeParse(a.content):[];s=e.isArray(s)?s:[];var i=o["bookmark.json"],r=i&&i.content?e.safeParse(i.content):[];r=e.isArray(r)?r:[],console.log(n.data);var l=n.data.owner;l.gist_url=n.data.html_url,l.gist_description=n.data.description,l.gist_created_at=n.data.created_at,l.gist_updated_at=n.data.updated_at,t(0,{category:s,bookmark:r,owner:l})}else t(1,n.status)}).catch(function(e){t(-1,e)})},submit:function(t){l.default.getAll(function(n,a){var s=e.getLocal("gist"),r=e.getLocal("token");if(console.log("gist ="+s),null==s||"null"==s||null==r||"null"==r)return void t(-2,"invalid token");o.Gist.auth(r);var l={files:{"category.json":{content:(0,i.default)(n)},"bookmark.json":{content:(0,i.default)(a)}}};o.Gist.edit(s,l).then(function(e){200==e.status?t(0,e.data):t(1,e.status)}).catch(function(e){t(-1,e)})})}};t.default=c}).call(t,n(62).default,n(623).default)},849:function(e,t,n){"use strict";(function(e,o,a){Object.defineProperty(t,"__esModule",{value:!0});var s=n(222),i=function(e){return e&&e.__esModule?e:{default:e}}(s);t.default={data:function(){var e=this;return{param:{keyName:"id",parentName:"pid",titleName:"name",dataMode:"list",getDatas:function(t,n){e.getData(t,function(e){n(e)})}},selectItem:null,submiting:!1}},mounted:function(){},methods:{submit:function(){var t=this;t.submiting||(t.submiting=!0,e.submit(function(e,n){t.submiting=!1,e?(console.log("提交出错:"+e),t.$Message("提交出错")):t.$Message("提交成功.")}))},editBookmark:function(e){this.$router.push({name:"bookmark",query:{id:e}})},deleteBookmark:function(e){var t=this;o.Bookmark.remove(e,function(n,o){o&&o>0&&t.remove(e)})},editCat:function(e){this.$router.push({name:"category",query:{id:e}})},deleteCat:function(e){var t=this;o.Category.remove(e,function(n,o){o&&o>0&&t.remove(e)})},edit:function(e){this.$set(e,"editValue",e.name),this.$set(e,"editing",!0)},updateValue:function(e){this.$set(e,"editing",!1),this.$refs.demo.updateTreeItem(e.id,{name:e.editValue})},append:function(e){this.$refs.demo.appendTreeItem(e.id,{id:i.default.uuid(),name:"测试"})},removeTreeItem:function(e){var t=this.$refs.demo,n=t.treeObj[e];if(console.log(n),n){var o=t.treeDatas.indexOf(n);if(console.log(o+" "+n.parentKey+" "+t.treeObj[n.parentKey]),o>-1)t.treeDatas.splice(o,1);else if(n.parentKey&&t.treeObj[n.parentKey]){var a=t.treeObj[n.parentKey];console.log(a),a.children.indexOf(n)>-1&&a.children.splice(a.children.indexOf(n),1)}delete t.treeObj[e]}},remove:function(e){this.$Message("删除成功"),this.selectItem=null,this.removeTreeItem(e.id)},choose:function(e){},select:function(e){console.log(this.$refs.demo),this.selectItem=e},open:function(e){e.isOpen=!e.isOpen,e.isCat&&("h-icon-angle-right"!=e.expIcon&&"h-icon-angle-down"!=e.expIcon||(a(e.isOpen),e.isOpen?e.expIcon="h-icon-angle-right":e.expIcon="h-icon-angle-down"))},expand:function(e){this.$refs.demo.expand(e)},expandAll:function(){this.$refs.demo.expandAll()},foldAll:function(){this.$refs.demo.foldAll()},getData:function(e,t){var n=this;console.log(e?"id="+e.id+" isCat="+e.isCat:null),e&&1!=e.isCat?t([]):n.getCategory(e,function(o){o&&o.length>0?(t(o),e&&(e.expIcon="h-icon-angle-down")):e?(e.expIcon="h-tree-item-bookmark",n.getBookmark(e.id,t)):t([])})},getBookmark:function(e,t){var n={cid:e};o.Bookmark.getAll(n,function(e,n){var o=[];n&&n.length>0&&(o=n.map(function(e){return e.treeIcon="icon-ribbon",e.expIcon="h-tree-item-bookmark",e.isCat=!1,e})),t(o)})},getCategory:function(e,t){var n={pid:e?e.id:"root"},a=this;o.Category.search(n,0,function(n,o){var s=[];o&&o.length>0&&(s=o.map(function(e){return e.treeIcon="icon-folder",e.expIcon="h-icon-angle-right",e.isCat=!0,e}));var i=e?e.id:"root";a.getBookmark(i,function(e){t(s.concat(e))})})}}}}).call(t,n(624).default,n(216).default,n(148))},909:function(e,t){},961:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"table-basic-vue frame-page h-panel"},[n("div",{directives:[{name:"font",rawName:"v-font",value:20,expression:"20"}],staticClass:"h-panel-bar"},[n("span",{staticClass:"h-panel-title"},[e._v("我的书签")]),e._v(" "),n("i",{class:e.submiting?"h-icon-spinner float-right":"h-icon-upload float-right",on:{click:e.submit}})]),e._v(" "),n("div",{staticClass:"h-panel-body tree4-demo-vue"},[n("Row",[n("Cell",{attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[n("Tree",{ref:"demo",attrs:{option:e.param,filterable:!1,selectOnClick:"",className:"h-tree-theme-row-selected"},on:{open:e.open,select:e.select,choose:e.choose},scopedSlots:e._u([{key:"item",fn:function(t){var o=t.item;return[n("span",[n("i",{class:o.expIcon})]),e._v(" "),n("div",{staticClass:"tree-show-custom"},[n("span",{class:o.treeIcon}),e._v(" "),o.editing?n("input",{directives:[{name:"model",rawName:"v-model",value:o.editValue,expression:"item.editValue"}],attrs:{type:"text"},domProps:{value:o.editValue},on:{blur:function(t){return e.updateValue(o)},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.updateValue(o)},input:function(t){t.target.composing||e.$set(o,"editValue",t.target.value)}}}):n("span",{staticClass:"tree-show-title"},[e._v(e._s(o.name))]),e._v(" "),o.editing?e._e():n("span",{staticClass:"tree-edit-part"})])]}}])})],1),e._v(" "),n("Cell",{attrs:{xs:24,sm:24,md:10,lg:10,xl:10}},[n("div",{staticClass:"right-fixed-container"},[null!=e.selectItem&&1==e.selectItem.isCat?n("Form",{attrs:{readonly:!0}},[n("FormItem",{attrs:{label:"编码"}},[e._v(e._s(e.selectItem.id))]),e._v(" "),n("FormItem",{attrs:{label:"名称"}},[e._v(e._s(e.selectItem.name))]),e._v(" "),n("FormItem",{attrs:{label:"日期"}},[e._v(e._s(e.selectItem.create_time))]),e._v(" "),e.selectItem.desc&&e.selectItem.desc.length>0?n("FormItem",{attrs:{label:"备注"}},[e._v(e._s(e.selectItem.desc))]):e._e(),e._v(" "),n("FormItem",[n("Button",{attrs:{color:"primary"},on:{click:function(t){return e.editCat(e.selectItem.id)}}},[e._v("编辑")]),e._v(" "),n("Button",{attrs:{disabled:"h-tree-item-bookmark"!=e.selectItem.expIcon},on:{click:function(t){return e.deleteCat(e.selectItem)}}},[e._v("删除")])],1)],1):e._e(),e._v(" "),null!=e.selectItem&&0==e.selectItem.isCat?n("Form",{attrs:{readonly:!0}},[n("FormItem",{attrs:{label:"编码"}},[e._v(e._s(e.selectItem.id))]),e._v(" "),n("FormItem",{attrs:{label:"名称"}},[e._v(e._s(e.selectItem.name))]),e._v(" "),n("FormItem",{attrs:{label:"日期"}},[e._v(e._s(e.selectItem.create_time))]),e._v(" "),n("FormItem",{attrs:{label:"链接"}},[n("a",{attrs:{href:e.selectItem.url,target:"_blank"}},[e._v(e._s(e.selectItem.url))])]),e._v(" "),e.selectItem.desc&&e.selectItem.desc.length>0?n("FormItem",{attrs:{label:"备注"}},[e._v(e._s(e.selectItem.desc))]):e._e(),e._v(" "),e.selectItem.tag&&e.selectItem.tag.length>0?n("div",{staticClass:"divider",staticStyle:{"margin-left":"40px"}}):e._e(),e._v(" "),e.selectItem.tag&&e.selectItem.tag.length>0?n("FormItem",{attrs:{label:"标签"}},[n("TagInput",{staticStyle:{width:"100%"},attrs:{readonly:!0},model:{value:e.selectItem.tag,callback:function(t){e.$set(e.selectItem,"tag",t)},expression:"selectItem.tag"}})],1):e._e(),e._v(" "),n("FormItem",[n("Button",{attrs:{color:"primary"},on:{click:function(t){return e.editBookmark(e.selectItem.id)}}},[e._v("编辑")]),e._v(" "),n("Button",{on:{click:function(t){return e.deleteBookmark(e.selectItem)}}},[e._v("删除")])],1)],1):e._e()],1)])],1)],1)])},staticRenderFns:[]},e.exports.render._withStripped=!0}});