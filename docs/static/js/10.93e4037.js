webpackJsonp([10],{536:function(e,a,t){function s(e){n||t(924)}var n=!1,r=t(54)(t(871),t(980),s,null,null);r.options.__file="/Users/plucky/plucky/art/Woody/woody.admin/src/components/demo-components/components/chart.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] chart.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},666:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={tooltip:{trigger:"axis"},legend:{data:["最高价","最低价"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value",axisLabel:{formatter:"{value} K"}}],series:[{name:"最高价",type:"line",data:[11,11,15,13,12,13,10],markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},smooth:!0,markLine:{data:[{type:"average",name:"平均值"}]}},{name:"最低价",type:"line",data:[1,-2,2,5,3,2,0],smooth:!0,markPoint:{data:[{name:"周最低",value:-2,xAxis:1,yAxis:-1.5}]},markLine:{data:[{type:"average",name:"平均值"}]}}]}},667:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={title:{text:"南丁格尔玫瑰图",subtext:"纯属虚构",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{x:"center",y:"bottom",data:["rose1","rose2","rose3","rose4","rose5","rose6","rose7","rose8"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["pie","funnel"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,series:[{name:"半径模式",type:"pie",radius:[20,110],center:["25%","50%"],roseType:"radius",label:{normal:{show:!1},emphasis:{show:!0}},lableLine:{normal:{show:!1},emphasis:{show:!0}},data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]},{name:"面积模式",type:"pie",radius:[30,110],center:["75%","50%"],roseType:"area",data:[{value:10,name:"rose1"},{value:5,name:"rose2"},{value:15,name:"rose3"},{value:25,name:"rose4"},{value:20,name:"rose5"},{value:35,name:"rose6"},{value:30,name:"rose7"},{value:40,name:"rose8"}]}]}},871:function(e,a,t){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(a,"__esModule",{value:!0});var n=t(666),r=s(n),o=t(667),i=s(o),l=t(892),d=s(l);a.default={data:function(){return{data1:r.default,data2:i.default,data3:d.default}},mounted:function(){this.init()},methods:{init:function(){}},computed:{}}},892:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{data:["直接访问","邮件营销","联盟广告","视频广告","搜索引擎","百度","谷歌","必应","其他"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"直接访问",type:"bar",data:[320,332,301,334,390,330,320]},{name:"邮件营销",type:"bar",stack:"广告",data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"bar",stack:"广告",data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"bar",stack:"广告",data:[150,232,201,154,190,330,410]},{name:"搜索引擎",type:"bar",data:[862,1018,964,1026,1679,1600,1570],markLine:{lineStyle:{normal:{type:"dashed"}},data:[[{type:"min"},{type:"max"}]]}},{name:"百度",type:"bar",barWidth:5,stack:"搜索引擎",data:[620,732,701,734,1090,1130,1120]},{name:"谷歌",type:"bar",stack:"搜索引擎",data:[120,132,101,134,290,230,220]},{name:"必应",type:"bar",stack:"搜索引擎",data:[60,72,71,74,190,130,110]},{name:"其他",type:"bar",stack:"搜索引擎",data:[62,82,91,84,109,110,120]}]}},924:function(e,a){},980:function(e,a,t){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"frame-page"},[t("div",{staticClass:"h-panel"},[e._m(0),e._v(" "),t("div",{staticClass:"h-panel-body"},[t("Chart",{attrs:{options:e.data1}})],1)]),e._v(" "),t("div",{staticStyle:{height:"30px"}}),e._v(" "),t("div",{staticClass:"h-panel"},[e._m(1),e._v(" "),t("div",{staticClass:"h-panel-body"},[t("Chart",{attrs:{options:e.data2}})],1)]),e._v(" "),t("div",{staticStyle:{height:"30px"}}),e._v(" "),t("div",{staticClass:"h-panel"},[e._m(2),e._v(" "),t("div",{staticClass:"h-panel-body"},[t("Chart",{attrs:{options:e.data3}})],1)])])},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"h-panel-bar"},[t("span",{staticClass:"h-panel-title"},[e._v("图表1")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"h-panel-bar"},[t("span",{staticClass:"h-panel-title"},[e._v("图表2")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"h-panel-bar"},[t("span",{staticClass:"h-panel-title"},[e._v("图表3")])])}]},e.exports.render._withStripped=!0}});