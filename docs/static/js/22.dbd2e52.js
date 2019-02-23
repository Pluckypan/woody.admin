webpackJsonp([22],{531:function(t,e,a){function o(t){n||a(884)}var n=!1,l=a(60)(a(825),a(937),o,null,null);l.options.__file="/Users/plucky/own/Woody/woody.admin/src/components/demo-components/form.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] form.vue: functional components are not supported with templates, they should use render functions."),t.exports=l.exports},825:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{mode:"single",data:{int:null,number:null,url:null,email:null,tel:null,mobile:null,input:"",textarea:"测试",radio:1,rate:null,checkbox:[1],select1:"人民币",select2:"",select3:[],taginputs:[],autocomplete:null,money:{min:null,max:null},date:null,inputs:[],things:[""]},dataParam:{1:"男",2:"女",3:"其他"},param1:["美金","人民币","卢布"],isLoading:!1,validationRules:{rules:{textarea:{maxLen:50,minLen:10},input:{validAsync:function(t,e,a,o){setTimeout(function(){15==t.length||18==t.length?e():e("字段长度非15/18位，可能不符合规定")},10)}}},required:["autocomplete","select2","select3","inputs[].value","input","radio","rate","checkbox","money","date","taginputs","money.min","money.max","int","number","url","email","tel","mobile"],int:["int"],number:["number","money.min","money.max"],url:["url"],email:["email"],tel:["tel"],mobile:["mobile"],combineRules:[{parentRef:"money",refs:["min","max"],valid:{valid:"lessThan",message:"起始金额不能大于结束金额"}}]}}},methods:{submit:function(){var t=this;this.$refs.form.valid().result&&(this.$Message("验证成功"),this.isLoading=!0,setTimeout(function(){t.isLoading=!1},1e3))},reset:function(){this.isLoading=!1,this.$refs.form.reset()},add:function(){this.data.inputs.push({value:""})},remove:function(t){this.data.inputs.splice(t,1)}}}},884:function(t,e){},937:function(t,e,a){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-form frame-page basic-form-vue"},[a("div",{staticClass:"h-panel"},[t._m(0),t._v(" "),a("div",{staticClass:"h-panel-body"},[a("Form",{ref:"form",attrs:{"label-width":110,mode:"twocolumn",model:t.data,rules:t.validationRules,showErrorTip:""}},[a("FormItem",{attrs:{label:"输入框",prop:"input"},scopedSlots:t._u([{key:"error",fn:function(e){return["async"==e.type?a("span",{staticClass:"link"},[t._v("+++++++错误的特殊提示+++++++")]):t._e()]}}])},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.input,expression:"data.input"},{name:"wordlimit",rawName:"v-wordlimit",value:30,expression:"30"}],attrs:{type:"text",placeholder:"限制输入30个字"},domProps:{value:t.data.input},on:{input:function(e){e.target.composing||t.$set(t.data,"input",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"整数",prop:"int"}},[a("Slider",{model:{value:t.data.int,callback:function(e){t.$set(t.data,"int",e)},expression:"data.int"}})],1),t._v(" "),a("FormItem",{attrs:{label:"整数",prop:"int"}},[a("NumberInput",{attrs:{min:0,max:100},model:{value:t.data.int,callback:function(e){t.$set(t.data,"int",e)},expression:"data.int"}})],1),t._v(" "),a("FormItem",{attrs:{label:"只读",readonly:""}},[t._v("只读数据")]),t._v(" "),a("FormItem",{attrs:{label:"数字",prop:"number"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.number,expression:"data.number"}],attrs:{type:"text"},domProps:{value:t.data.number},on:{input:function(e){e.target.composing||t.$set(t.data,"number",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"邮箱",prop:"email"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],attrs:{type:"text"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"网址",prop:"url"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.url,expression:"data.url"}],attrs:{type:"text"},domProps:{value:t.data.url},on:{input:function(e){e.target.composing||t.$set(t.data,"url",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"电话",prop:"tel"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.tel,expression:"data.tel"}],attrs:{type:"text"},domProps:{value:t.data.tel},on:{input:function(e){e.target.composing||t.$set(t.data,"tel",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"手机号码",prop:"mobile"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.mobile,expression:"data.mobile"}],attrs:{type:"text"},domProps:{value:t.data.mobile},on:{input:function(e){e.target.composing||t.$set(t.data,"mobile",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"金额",required:!0}},[a("div",{staticClass:"h-input-group"},[a("div",{staticClass:"h-input-addon"},[a("Select",{attrs:{datas:t.param1,"no-border":!0,"null-option":!1},model:{value:t.data.select1,callback:function(e){t.$set(t.data,"select1",e)},expression:"data.select1"}})],1),t._v(" "),a("FormItem",{attrs:{prop:"money.min",label:"起始金额","show-label":!1}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.money.min,expression:"data.money.min"}],attrs:{type:"text",placeholder:"起始金额"},domProps:{value:t.data.money.min},on:{input:function(e){e.target.composing||t.$set(t.data.money,"min",e.target.value)}}})]),t._v(" "),a("span",{staticClass:"h-input-addon"},[t._v("-")]),t._v(" "),a("FormItem",{attrs:{prop:"money.max",label:"结束金额","show-label":!1}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.money.max,expression:"data.money.max"}],attrs:{type:"text",placeholder:"结束金额"},domProps:{value:t.data.money.max},on:{input:function(e){e.target.composing||t.$set(t.data.money,"max",e.target.value)}}})]),t._v(" "),a("span",{staticClass:"h-input-addon"},[t._v("K")])],1)]),t._v(" "),a("FormItem",{attrs:{label:"选择",prop:"select2"}},[a("Select",{attrs:{dict:"simple"},model:{value:t.data.select2,callback:function(e){t.$set(t.data,"select2",e)},expression:"data.select2"}})],1),t._v(" "),a("FormItem",{attrs:{label:"标签",prop:"taginputs"}},[a("TagInput",{model:{value:t.data.taginputs,callback:function(e){t.$set(t.data,"taginputs",e)},expression:"data.taginputs"}})],1),t._v(" "),a("FormItem",{attrs:{label:"多选",prop:"select3"}},[a("Select",{attrs:{dict:"simple",multiple:!0},model:{value:t.data.select3,callback:function(e){t.$set(t.data,"select3",e)},expression:"data.select3"}})],1),t._v(" "),a("FormItem",{attrs:{label:"日期",prop:"date"}},[a("DatePicker",{attrs:{placeholder:"选择日期"},model:{value:t.data.date,callback:function(e){t.$set(t.data,"date",e)},expression:"data.date"}})],1),t._v(" "),a("FormItem",{attrs:{label:"评分",prop:"rate"}},[a("Rate",{attrs:{"show-text":!0},model:{value:t.data.rate,callback:function(e){t.$set(t.data,"rate",e)},expression:"data.rate"}})],1),t._v(" "),a("FormItem",{attrs:{label:"多文本",single:!0,prop:"textarea"}},[a("textarea",{directives:[{name:"autosize",rawName:"v-autosize"},{name:"wordcount",rawName:"v-wordcount",value:50,expression:"50"},{name:"model",rawName:"v-model",value:t.data.textarea,expression:"data.textarea"}],attrs:{rows:"3"},domProps:{value:t.data.textarea},on:{input:function(e){e.target.composing||t.$set(t.data,"textarea",e.target.value)}}})]),t._v(" "),a("FormItem",{attrs:{label:"单选",prop:"radio"}},[a("Radio",{attrs:{datas:t.dataParam},on:{input:function(e){t.data.textarea+="12"}},model:{value:t.data.radio,callback:function(e){t.$set(t.data,"radio",e)},expression:"data.radio"}})],1),t._v(" "),a("FormItem",{attrs:{label:"多选",prop:"checkbox"}},[a("Checkbox",{attrs:{datas:t.dataParam},model:{value:t.data.checkbox,callback:function(e){t.$set(t.data,"checkbox",e)},expression:"data.checkbox"}})],1),t._v(" "),a("FormItem",{attrs:{label:"模糊匹配",prop:"autocomplete"}},[a("AutoComplete",{attrs:{config:"simple"},model:{value:t.data.autocomplete,callback:function(e){t.$set(t.data,"autocomplete",e)},expression:"data.autocomplete"}})],1),t._v(" "),a("FormItem",{attrs:{label:"自定义规则",prop:"things[0]",required:""}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.things[0],expression:"data.things[0]"}],attrs:{type:"text"},domProps:{value:t.data.things[0]},on:{input:function(e){e.target.composing||t.$set(t.data.things,0,e.target.value)}}})]),t._v(" "),a("FormItemList",t._l(t.data.inputs,function(e,o){return a("FormItem",{key:e,attrs:{label:"输入框"+(o+1),prop:"inputs["+o+"].value"}},[a("Row",{attrs:{type:"flex"}},[a("Col",{staticClass:"flex1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"item.value"}],attrs:{type:"text"},domProps:{value:e.value},on:{input:function(a){a.target.composing||t.$set(e,"value",a.target.value)}}})]),t._v(" "),a("Col",{directives:[{name:"width",rawName:"v-width",value:50,expression:"50"}],staticClass:"text-right"},[a("Poptip",{attrs:{content:"确定删除？"},on:{confirm:function(e){return t.remove(o)}}},[a("Button",{attrs:{"text-color":"red","no-border":!0,icon:"h-icon-trash"}})],1)],1)],1)],1)}),1),t._v(" "),a("FormItem",{attrs:{single:!0}},[a("Button",{attrs:{size:"s","text-color":"blue"},on:{click:t.add}},[t._v("添加输入框")])],1),t._v(" "),a("FormItem",{attrs:{"no-padding":!0}},[a("Button",{attrs:{color:"primary",loading:t.isLoading},on:{click:t.submit}},[t._v("提交")]),t._v("   \n          "),a("Button",{on:{click:t.reset}},[t._v("重置验证")])],1)],1)],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-panel-bar"},[a("span",{staticClass:"h-panel-title"},[t._v("Form")])])}]},t.exports.render._withStripped=!0}});