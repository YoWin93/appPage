(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-marry-register-marry-register-submit"],{"026b":function(t,e,a){"use strict";var i=a("5cbc"),n=a.n(i);n.a},"032c":function(t,e,a){"use strict";a.r(e);var i=a("06fd"),n=a("a742");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"2906d09a",null,!1,i["a"],o);e["default"]=l.exports},"06fd":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-form",{attrs:{"report-submit":t.reportSubmit},on:{submit:function(e){arguments[0]=e=t.$handleEvent(e),t.formSubmit.apply(void 0,arguments)},reset:function(e){arguments[0]=e=t.$handleEvent(e),t.formReset.apply(void 0,arguments)}}},[t._t("default")],2)],1)},r=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},1277:function(t,e,a){"use strict";var i=a("5c86"),n=a.n(i);n.a},"239f":function(t,e,a){"use strict";a.r(e);var i=a("3465"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},3465:function(t,e,a){"use strict";(function(t){var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3fcd")),r={data:function(){return{visable:!1,subtype:"",formData:{degreeManLabel:"",marryStatusWoMan:"",regSJWoMan:"",regJXMan:"",certNumMan:"",degreeWoManLabel:"",opType:"IA",nameWoMan:"",applyStatusLabel:"",degreeMan:"",tel:"",nationMan:"156",idTypeWoMan:"1",folkWoMan:"",regJXWoMan:"",appTime:"",birthMan:"",nationManLabel:"中国",nationWoMan:"156",marryStatusMan:"",regQXWoMan:"",regDetailMan:"",electronicID:{cardMan:{url:"",id:""},cardWoMan:{url:"",id:""},certMan:{url:"",id:""},certWoMan:{url:"",id:""},others:[]},jobWoManLabel:"",certNumWoMan:"",certTypeMan:"1",folkWoManLabel:"",Id:"",degreeWoMan:"",applyStatus:"",marryStatusWoManLabel:"",bookDate:" ",deptCode:"",deptName:"",idTypeMan:"1",certTypeWoMan:"1",jobManLabel:"",startTime:"",nationWoManLabel:"中国",idTypeWoManLabel:"内地居民",birthWoMan:"",marryStatusManLabel:"",regQXMan:"",opTypeLabel:"",regDSWoMan:"",nameMan:"",jobWoMan:"",regDetailWoMan:"",certTypeManLabel:"内地居民身份证",certTypeWoManLabel:"内地居民身份证",folkManLabel:"",regDSMan:"",jobMan:"",endTime:"",folkMan:"",idTypeManLabel:"内地居民",regSJMan:"",mobile:"",regQXManLabel:"",regQXWoManLabel:""},imglist:[]}},methods:{open:function(t){this.formData=t,this.visable=!0},endClick:function(){var e=this;if(this.formData.Id){var a=(new Date).getTime(),i={app_id:"sdmzthyyy",interface_id:"marryAppUpdateMarryInfo",version:"1.0",biz_content:JSON.stringify({reqData:{baseInfo:this.formData,attachInfo:this.imglist}}),charset:"UTF-8",timestamp:a,origin:"1"};n.default.queryRegistrySign(i).then((function(a){a.data&&(i.sign=a.data.sign,n.default.queryRegistryGet(i).then((function(a){uni.showToast({title:JSON.parse(a.data).message,duration:2e3,icon:"none"}),setTimeout((function(){e.visable=!1;try{var a=uni.getStorageSync("windowUrl");lightAppJssdk.navigation.close({success:function(e){lightAppJssdk.navigation.show({url:a,title:"首页",isgoback:"0",success:function(e){t.log(e),uni.clearStorage()},fail:function(e){t.log(e)}})},fail:function(t){}})}catch(i){}}),2100)})))})).catch((function(e){t.log(e)}))}else{var r=(new Date).getTime(),o={app_id:"sdmzthyyy",interface_id:"marryAppSaveMarryInfo",version:"1.0",biz_content:JSON.stringify({reqData:{baseInfo:this.formData,attachInfo:this.imglist}}),charset:"UTF-8",timestamp:r,origin:"1"};n.default.queryRegistrySign(o).then((function(a){a.data&&(o.sign=a.data.sign,n.default.queryRegistryGet(o).then((function(a){uni.showToast({title:JSON.parse(a.data).message,duration:2e3,icon:"none"}),setTimeout((function(){e.visable=!1;try{var a=uni.getStorageSync("windowUrl");lightAppJssdk.navigation.close({success:function(e){lightAppJssdk.navigation.show({url:a,title:"首页",isgoback:"0",success:function(e){t.log(e),uni.clearStorage()},fail:function(e){t.log(e)}})},fail:function(t){}})}catch(i){}}),2100)})))})).catch((function(e){t.log(e)}))}}}};e.default=r}).call(this,a("5a52")["default"])},"3d0b":function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"bjx-form-item",style:{width:t.theWidth}},[a("v-uni-view",{class:"label-"+t.theLabelType,style:{alignItems:t.theVerticalAlign}},[a("v-uni-view",{staticClass:"item-label",style:t.theLabelStyle},[a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.thePromptType&&(2==t.thePromptType||t.theRequired),expression:"thePromptType&&(thePromptType==2||theRequired)"}],staticClass:"item-required",style:{color:t.theForm.msgColor,opacity:t.thePromptType&&t.theRequired?1:0}},[t._v(t._s(t.theForm.prompt))]),a("v-uni-view",{staticClass:"label-con"},[t._t("label",[a("v-uni-text",{staticClass:"label-text"},[t._v(t._s(t.label))]),"block"==t.theLabelType&&t.labelRight?a("v-uni-text",{staticClass:"right"},[t._v(t._s(t.labelRight))]):t._e()])],2)],1),a("v-uni-view",{staticClass:"item-con"},[t._t("default")],2)],1),"in"==t.theForm.msgType?a("v-uni-scroll-view",{staticClass:"item-msg",attrs:{"scroll-x":"true"}},[a("v-uni-view",{style:{color:t.theForm.msgColor}},[t._v(t._s(t.msg))])],1):t._e()],1)},r=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},4017:function(t,e,a){"use strict";a.r(e);var i=a("3d0b"),n=a("851e");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("1277");var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"7113c82e",null,!1,i["a"],o);e["default"]=l.exports},"418a":function(t,e,a){t.exports=a.p+"static/img/marry-bg.4b1be0e8.png"},4809:function(t,e,a){"use strict";a("4160"),a("a9e3"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"BjxForm",props:{form:{type:Object,default:function(){return{}}},rules:{type:Object,default:function(){return{}}},msgType:{type:String,default:"out"},labelType:{type:String,default:"block"},labelWidth:{type:String,default:"auto"},align:{type:String,default:"left"},reportSubmit:{type:Boolean,default:!1},submit:Function,reset:Function,msgColor:{type:String,default:"#F56C6C"},prompt:{type:String,default:"*"},promptType:{type:Number,default:1},authCheck:{type:Boolean,default:!1}},methods:{formSubmit:function(t){this.$emit("submit",t)},formReset:function(t){this.$emit("reset",t)},validate:function(t){for(var e=!0,a=this.getItem(this.$children),i=0;i<a.length;++i){var n=!a[i].validate||a[i].validate();if(e&&!n&&(e=!1),"in"!=this.msgType&&!n)break}t&&t(e)},getItem:function(t,e){var a=this;return e=e||[],t.forEach((function(t){t.$options.name&&"BjxFormItem"===t.$options.name||t.$options._componentTag&&"bjx-form-item"===t.$options._componentTag?e.push(t):t.$children.length&&(e=a.getItem(t.$children,e))})),e}}};e.default=i},4855:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJklEQVRYR+2WzRGCMBBGs0kDtuCdIdCBdGJpdqIdID93W7CB3XXiGCeiYBJguIQTwzB5j283G0BsfMHGfJEEUgIpgWcCdV3vlFIaEZuyLO9rbs0hC8wDKeUNAHbMfFdKVVmWXdeQ6Pu+QMSzZRHRHrquOzDz2QLXknDhlgUA1bMEbduaL9auhLFbqhxuyk6yTZ7nhdsDl4HElYiquRIvuIm9cOGIeDBrv7fhqzkWlfgHN0Ifc2BJCR/4l4CzJWcl4Qv/KTBXIgQ+KhArEQqfFAiViIH/FfCViIV7CUxJaK3LOXBvgTEJIcSJmYuxIeNzngT9D/yaEwNIYyecDzwoAbvghEQwPEpgpBxR8GgBKyGlPJp7IjrFHlpBPeBb15D3kkBKYPMEHr9dM2agp8UNAAAAAElFTkSuQmCC"},"4c0d":function(t,e,a){"use strict";var i={evanSteps:a("889f").default,bjxForm:a("032c").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"form-content"},[a("v-uni-view",{staticClass:"from-tab"},[a("evan-steps",{attrs:{active:3,primaryColor:"#1677ff",direction:"horizontal"}},[a("evan-step",{attrs:{title:"基本信息"}}),a("evan-step",{attrs:{title:"登记机关"}}),a("evan-step",{attrs:{title:"选择日期"}}),a("evan-step",{attrs:{title:"提交登记"}})],1)],1),a("v-uni-view",{staticClass:"form-group"},[a("v-uni-view",{staticClass:"form-panes"},[a("bjx-form",{ref:"totalform",attrs:{"label-type":"inline","label-width":"220"}},[a("v-uni-view",{staticClass:"form-title"},[t._v("男方信息")]),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"姓名"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.nameMan))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"身份类别"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.idTypeManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"国籍"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.nationManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"证件类型"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.certTypeManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"证件号码"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.certNumMan))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"出生日期"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.birthMan))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"民族"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.folkManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"婚姻状况"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.marryStatusManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"职业"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.jobManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"文化程度"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.degreeManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"户口所在地"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.regQXManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"乡镇/街道"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.regJXManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"详细地址"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.regDetailMan))])],1),a("v-uni-view",{staticClass:"form-title"},[t._v("女方信息")]),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"姓名"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.nameWoMan))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"身份类别"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.idTypeWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"国籍"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.nationWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"证件类型"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.certTypeWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"证件号码"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.certNumWoMan))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"出生日期"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.birthWoMan))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"民族"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.folkWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"婚姻状况"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.marryStatusWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"职业"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.jobWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"文化程度"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.degreeWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"户口所在地"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.regQXWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"乡镇/街道"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.regJXWoManLabel))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"详细地址"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.regDetailWoMan))])],1),a("v-uni-view",{staticClass:"form-title"},[t._v("其他信息")]),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"手机"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.mobile))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"联系电话"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.tel))])],1),a("bjx-form-item",{staticClass:"imgList-item clearfix",attrs:{"label-type":"block",label:"电子证件照"}},[a("v-uni-view",{staticClass:"add-img-box"},[t.formData.electronicID.cardMan.url?a("v-uni-view",{staticClass:"add-img-item"},[a("v-uni-image",{staticClass:"add-img",attrs:{src:t.formData.electronicID.cardMan.url,mode:"aspectFill"}})],1):t._e(),a("v-uni-view",{staticClass:"img-title"},[t._v("身份证(男)")])],1),a("v-uni-view",{staticClass:"add-img-box"},[t.formData.electronicID.cardWoMan.url?a("v-uni-view",{staticClass:"add-img-item"},[a("v-uni-image",{staticClass:"add-img",attrs:{src:t.formData.electronicID.cardWoMan.url,mode:"aspectFill"}})],1):t._e(),a("v-uni-view",{staticClass:"img-title"},[t._v("身份证(女)")])],1),a("v-uni-view",{staticClass:"add-img-box"},[t.formData.electronicID.certMan.url?a("v-uni-view",{staticClass:"add-img-item"},[a("v-uni-image",{staticClass:"add-img",attrs:{src:t.formData.electronicID.certMan.url,mode:"aspectFill"}})],1):t._e(),a("v-uni-view",{staticClass:"img-title"},[t._v("户口簿常住人口登记卡(男)")])],1),a("v-uni-view",{staticClass:"add-img-box"},[t.formData.electronicID.certWoMan.url?a("v-uni-view",{staticClass:"add-img-item"},[a("v-uni-image",{staticClass:"add-img",attrs:{src:t.formData.electronicID.certWoMan.url,mode:"aspectFill"}})],1):t._e(),a("v-uni-view",{staticClass:"img-title"},[t._v("户口簿常住人口登记卡(女)")])],1),a("v-uni-view",{staticClass:"other-list clearfix"},[t._l(t.formData.electronicID.others,(function(t,e){return a("v-uni-view",{key:e,staticClass:"add-img-item"},[a("v-uni-image",{staticClass:"add-img",attrs:{src:t.url,mode:"aspectFill"}})],1)})),a("v-uni-view",{staticClass:"img-title other-title"},[t._v("其他证件照片")])],2)],1),a("v-uni-view",{staticClass:"form-title"},[t._v("登记机关")]),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"登记机关"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.deptName))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"预约日期"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.bookDate))])],1),a("bjx-form-item",{staticClass:"form-item",attrs:{label:"预约时间"}},[a("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.formData.startTime)+"-"+t._s(t.formData.endTime))])],1)],1)],1),a("v-uni-view",{staticClass:"btn-group"},[a("v-uni-view",{staticClass:"btn-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changefrom.apply(void 0,arguments)}}},[t._v("修改")]),a("v-uni-view",{staticClass:"btn-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.subform.apply(void 0,arguments)}}},[t._v("提交")])],1),a("formdialog",{ref:"formlog"})],1)],1)},r=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},"5c86":function(t,e,a){var i=a("a747");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("619d379a",i,!0,{sourceMap:!1,shadowMode:!1})},"5cbc":function(t,e,a){var i=a("c8c2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6de92767",i,!0,{sourceMap:!1,shadowMode:!1})},"5eb7":function(t,e,a){"use strict";var i=a("c169"),n=a.n(i);n.a},"7b4b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={phone:function(t){return!(t&&!/^1[3|4|5|6|7|8][0-9]\d{8,8}$/.test(t))||"请填写正确的手机号码"}};e.default=i},"851e":function(t,e,a){"use strict";a.r(e);var i=a("bfa8"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},"8cd9":function(t,e,a){"use strict";var i=a("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("50f5")),r=i(a("09ae")),o=i(a("032c")),s=i(a("4017")),l=i(a("eacb")),c={data:function(){return{formData:{degreeManLabel:"",marryStatusWoMan:"",regSJWoMan:"",regJXMan:"",certNumMan:"",degreeWoManLabel:"",opType:"IA",nameWoMan:"",applyStatusLabel:"",degreeMan:"",tel:"",nationMan:"156",idTypeWoMan:"1",folkWoMan:"",regJXWoMan:"",appTime:"",birthMan:"",nationManLabel:"中国",nationWoMan:"156",marryStatusMan:"",regQXWoMan:"",regDetailMan:"",electronicID:{cardMan:{url:"",id:""},cardWoMan:{url:"",id:""},certMan:{url:"",id:""},certWoMan:{url:"",id:""},others:[]},jobWoManLabel:"",certNumWoMan:"",certTypeMan:"1",folkWoManLabel:"",Id:"",degreeWoMan:"",applyStatus:"",marryStatusWoManLabel:"",bookDate:" ",deptCode:"",deptName:"",idTypeMan:"1",certTypeWoMan:"1",jobManLabel:"",startTime:"",nationWoManLabel:"中国",idTypeWoManLabel:"内地居民",birthWoMan:"",marryStatusManLabel:"",regQXMan:"",opTypeLabel:"",regDSWoMan:"",nameMan:"",jobWoMan:"",regDetailWoMan:"",certTypeManLabel:"内地居民身份证",certTypeWoManLabel:"内地居民身份证",folkManLabel:"",regDSMan:"",jobMan:"",endTime:"",folkMan:"",idTypeManLabel:"内地居民",regSJMan:"",mobile:"",regQXManLabel:"",regQXWoManLabel:""},isupdate:!1}},computed:{},components:{EvanStep:n.default,EvanIcons:r.default,bjxForm:o.default,bjxFormItem:s.default,formdialog:l.default},onShow:function(){try{this.formData=uni.getStorageSync("formData")}catch(t){}},methods:{changefrom:function(){uni.navigateTo({url:"./marry-form-man"})},subform:function(){this.$refs.formlog.open(this.formData)}}};e.default=c},9691:function(t,e,a){var i=a("24fb"),n=a("1de5"),r=a("55f3");e=i(!1);var o=n(r);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.form-content .from-tab[data-v-7a90ec10]{background-color:#fff}.form-content .form-panes[data-v-7a90ec10]{padding:%?10?% %?20?%}.form-content .form-group[data-v-7a90ec10]{background-color:#fff;margin-bottom:%?28?%}.form-content .form-title[data-v-7a90ec10]{color:#1677ff;border-left:%?5?% solid #1677ff;height:%?30?%;line-height:%?30?%;padding-left:%?12?%;font-size:%?34?%;font-weight:700;margin-top:%?20?%;margin-left:%?20?%}.form-content .form-item[data-v-7a90ec10]{height:%?110?%;padding-top:%?20?%;border-bottom:1px solid #eee}.form-content .form-item .title[data-v-7a90ec10]{float:left;width:%?240?%}.form-content .form-item[data-v-7a90ec10] .item-label{font-size:%?32?%}.form-content .form-item .uni-input[data-v-7a90ec10]{float:right;font-size:%?28?%;width:80%;height:%?80?%;margin:%?15?% 0;padding-right:%?10?%;text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.form-content .form-item .time-group[data-v-7a90ec10]{float:right;width:40%;color:#fff;height:%?80?%;text-align:center;line-height:%?80?%;font-size:%?24?%;margin:%?15?% 0;background:#1677ff}.form-content .form-item .time-group .code-btn[data-v-7a90ec10]{display:inline-block}.form-content .form-item .time-group .code-time[data-v-7a90ec10]{display:inline-block}.form-content .form-item .code-input[data-v-7a90ec10]{float:right;width:40%;height:%?80?%;line-height:%?80?%;font-size:%?24?%;margin:%?15?% 0;text-align:center}.form-content .form-item .icon-box[data-v-7a90ec10]{float:right;width:%?18?%;height:%?30?%;margin:%?40?% 0}.form-content .form-item .right-icon[data-v-7a90ec10]{background:url('+o+") 50% no-repeat;background-size:100% 100%}.form-content .imgList-item[data-v-7a90ec10]{box-sizing:border-box;width:100%}.form-content .imgList-item .img-group[data-v-7a90ec10]{box-sizing:border-box;width:100%}.form-content .add-img-box[data-v-7a90ec10]{width:50%;float:left}.form-content .add-img-item[data-v-7a90ec10]{width:90%;margin:0 auto;position:relative;padding:%?9?% 0}.form-content .other-list[data-v-7a90ec10]{box-sizing:border-box;width:100%}.form-content .other-list .add-img-item[data-v-7a90ec10]{box-sizing:border-box;width:50%;padding:%?9?%;float:left}.form-content .add-img[data-v-7a90ec10]{width:100%;height:%?203?%;border-radius:%?24?%}.form-content .add-img-del[data-v-7a90ec10]{position:absolute;width:%?40?%;height:%?40?%;right:%?8?%;top:%?17?%;z-index:999;border-radius:%?20?%}.form-content .img-title[data-v-7a90ec10]{width:100%;box-sizing:border-box;padding:%?17?% 0;text-align:center;color:#333;font-size:%?22?%}.form-content .other-title[data-v-7a90ec10]{width:100%;float:left}.form-content .address-time[data-v-7a90ec10]{width:%?484?%;height:%?88?%;background-color:#f5f5f5;opacity:1;border-radius:%?24?%;text-align:center;font-size:%?35?%;font-weight:500;color:#333}.form-content .line[data-v-7a90ec10]{width:%?750?%;height:1px;-webkit-transform:scaleY(.3);transform:scaleY(.3);background-color:rgba(0,0,0,.5)}.btn-group[data-v-7a90ec10]{box-sizing:border-box;width:100%;padding:%?30?%;text-align:center}.btn-item[data-v-7a90ec10]{display:inline-block;width:%?300?%;height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;background:#1677ff;border-radius:5px;margin:0 %?10?%}.code-box[data-v-7a90ec10]{margin:%?24?% 0;height:%?138?%;line-height:%?138?%;border-radius:16px;font-weight:700;font-size:%?30?%;text-align:center;border:1px solid #999;color:#999}.activebg[data-v-7a90ec10]{background-color:#1677ff;color:#fff}.null-box .null-bg[data-v-7a90ec10]{display:block;margin:%?30?% auto;width:%?162?%;height:%?143?%}.time-picker[data-v-7a90ec10]{width:50%;float:right;text-align:right;color:#00b578}.frend-ship[data-v-7a90ec10]{padding:%?28?%;background-color:#f5f5f5}.ship-title[data-v-7a90ec10]{font-weight:700;color:#333;font-size:%?26?%;line-height:%?36?%}.ship-box[data-v-7a90ec10]{line-height:%?36?%;font-size:%?22?%;color:#666}",""]),t.exports=e},"97a5":function(t,e,a){"use strict";a.r(e);var i=a("4c0d"),n=a("cd4e");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("5eb7");var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"7a90ec10",null,!1,i["a"],o);e["default"]=l.exports},a742:function(t,e,a){"use strict";a.r(e);var i=a("4809"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},a747:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.bjx-form-item[data-v-7113c82e]{padding:3px 0}.bjx-form-item .label-block .item-label[data-v-7113c82e]{display:-webkit-box;display:-webkit-flex;display:flex;margin-bottom:2px}.bjx-form-item .label-block .item-label .label-con[data-v-7113c82e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.bjx-form-item .label-block .item-label .right[data-v-7113c82e]{float:right}.bjx-form-item .label-inline[data-v-7113c82e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;align-items:flex-start}.bjx-form-item .label-inline .item-label[data-v-7113c82e]{display:-webkit-box;display:-webkit-flex;display:flex;margin-right:%?10?%}.bjx-form-item .label-inline .item-con[data-v-7113c82e]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.bjx-form-item .item-msg[data-v-7113c82e]{padding:2px;margin-bottom:5px;font-size:%?24?%;height:22px}.bjx-form-item .item-msg uni-view[data-v-7113c82e]{width:-webkit-max-content;width:max-content}',""]),t.exports=e},bfa8:function(t,e,a){"use strict";a("99af"),a("4160"),a("a9e3"),a("159b"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("d2e7"),n={name:"BjxFormItem",props:{label:String,prop:String,width:{type:String,default:"auto"},labelWidth:{type:String,default:""},labelType:String,align:String,labelRight:{type:String,default:""},required:{type:Boolean,default:!1},verticalAlign:{type:String,default:"center"},promptType:Number,authCheck:{type:Boolean,default:null}},data:function(){return{formField:["labelType","labelWidth","align","msgType","form","rules","msgColor","prompt","promptType","authCheck"],msg:""}},watch:{value:function(){(this.authCheck||null===this.authCheck&&this.theForm.authCheck)&&this.validate()}},computed:{theRequired:function(){return!!(this.required||this.theForm.rules&&this.theForm.rules[this.prop]&&this.theForm.rules[this.prop].required)},theForm:function(){var t=this.$parent,e=t.$options.name;while(null!==e&&"BjxForm"!==e)t=t?t.$parent:null,e=t?t.$options.name:null;var a={};return t&&this.formField.forEach((function(e){a[e]=t[e]})),a},theWidth:function(){return isNaN(Number(this.width))?this.width:this.width+"rpx"},theLabelWidth:function(){var t="auto";return this.$slots.label||(t=this.labelWidth||this.theForm.labelWidth,isNaN(Number(t))||(t+="rpx")),t},theLabelType:function(){var t=this.labelType||this.theForm.labelType;return t},theLabelStyle:function(){var t="block"!=this.theLabelType?this.theLabelWidth:"auto",e={left:"flex-start",right:"flex-end",center:"center",between:"space-between"},a=this.align||this.theForm.align;return"width: ".concat(t,"; justify-content: ").concat(e[a],"; vertical-align: ").concat(this.verticalAlign,";")},theVerticalAlign:function(){var t={top:"flex-start",bottom:"flex-end",center:"center"};return t[this.verticalAlign]},value:function(){var t=this.theForm.form,e=t?t[this.prop]:"";return e},thePromptType:function(){return this.promptType>-1?this.promptType:this.theForm.promptType}},methods:{validate:function(){if(this.theForm.rules){var t=this.theForm.rules[this.prop];if(this.msg="",t)if(!t.required||null!=this.value&&""!=this.value){if(t.validator){var e=t.validator(this.value,t);"string"==typeof e?this.msg=e:e||(this.msg=t.message||this.label+"不符合规则")}else if(t.rule&&null!=this.value&&""!=this.value){var a=(0,i.fromCheck)(this.value,t.rule,this.theForm.form);!0!==a&&(this.msg=this.label+a.msg,t.message&&("string"===typeof t.message?this.msg=typeof t.message:t.message[a.rule]&&(this.msg=t.message[a.rule])))}}else this.msg=t.msg||this.label+"不能为空";return""!=this.msg&&("out"==this.theForm.msgType?uni.showModal({content:this.msg}):"msg"==this.theForm.msgType&&uni.showToast({icon:"none",title:this.msg})),!this.msg}}}};e.default=n},c169:function(t,e,a){var i=a("9691");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("a379c4fc",i,!0,{sourceMap:!1,shadowMode:!1})},c8c2:function(t,e,a){var i=a("24fb"),n=a("1de5"),r=a("418a"),o=a("4855");e=i(!1);var s=n(r),l=n(o);e.push([t.i,'uni-page-body[data-v-154d5e18]{height:100%}\r\n\t/*按钮样式\r\n */uni-button[type=primary][plain].btn-blue[data-v-154d5e18]{background-color:#1677ff;color:#fff;font-size:%?26?%;padding:%?28?% 0;line-height:1}uni-button[type=primary][plain].btn-default[data-v-154d5e18]{background-color:#fff;border:%?1?% solid #e8e8e8;color:#333}.clearfix[data-v-154d5e18],.clearfix[data-v-154d5e18]::after{display:block;content:"";clear:both}\r\n\t/* 公共样式 */.flex[data-v-154d5e18]{display:-webkit-box;display:-webkit-flex;display:flex}\r\n\t/*结婚登记 + 离婚的登记 + 补领结婚证 + 补领离婚证 + 登记处查询 页面样式\r\n */.content[data-v-154d5e18]{height:100%}.marry-bg[data-v-154d5e18]{background:url('+s+") no-repeat 50% %?-250?%;background-size:%?1200?% %?800?%;width:100%;height:100%}.marry-con[data-v-154d5e18]{padding-top:%?140?%}.marry-panel[data-v-154d5e18]{position:relative;padding:%?37?% %?38?%;margin:0 auto %?26?%;background-color:hsla(0,0%,100%,.9);box-shadow:0 %?4?% %?68?% %?0?% rgba(39,52,125,.25);border-radius:%?16?%}\r\n\t/* 暂无预约页面样式\r\n */.marry-nothing[data-v-154d5e18]{position:relative;top:98px;padding:114px 20px;margin:0 auto 10px;background-color:hsla(0,0%,100%,.9);box-shadow:0 2px 37px 0 rgba(39,52,125,.25);border-radius:8px;font-size:14px;text-align:center;height:10px}.marry-flag-img[data-v-154d5e18]{position:absolute;top:%?-130?%;right:%?46?%;width:%?205?%;height:%?262?%}.nothing-img[data-v-154d5e18]{position:absolute;top:52px;left:137px;width:30px;height:30px}.nothing-text[data-v-154d5e18]{position:absolute;top:53.5px;left:170px;width:46px;height:30px;color:#1296db;font-size:20px}.marry-panel-img[data-v-154d5e18]{height:%?54?%;width:%?174?%}.marry-panel-img-name[data-v-154d5e18]{height:%?54?%;width:%?234?%}.marry-panel-con[data-v-154d5e18]{padding:%?50?% 0;line-height:%?36?%;font-size:%?26?%;color:#333}\r\n\t/*登记处查询\r\n */.registry-img[data-v-154d5e18]{position:absolute;top:%?-124?%;right:%?50?%;width:%?262?%;height:%?262?%}.form-item-top[data-v-154d5e18]{margin-top:%?140?%}.form-item-bottom[data-v-154d5e18]{margin-bottom:%?52?%}\r\n\t/*输入框\r\n */.uni-input[data-v-154d5e18]{width:100%;height:%?80?%;margin-bottom:%?26?%;line-height:%?80?%;padding:0 %?20?%;box-sizing:border-box;background-color:#fff;border-radius:%?16?%;box-shadow:0 %?4?% %?10?% %?0?% rgba(39,52,125,.1);font-size:%?26?%}\r\n\t/*下拉框\r\n */.uni-list .uni-input[data-v-154d5e18]{background:url("+l+') no-repeat calc(100% - %?20?%) 50% #fff;background-size:%?32?% %?32?%}.adress[data-v-154d5e18]{display:block;margin:%?20?% auto;width:%?450?%}.adress-img[data-v-154d5e18]{width:100%;height:%?310?%}.adress-con[data-v-154d5e18]{width:100%;line-height:%?60?%;color:#333;font-size:%?22?%}.adress-data[data-v-154d5e18]{color:#999;uni-label{color:#333}}\r\n\t/*验证码\r\n */.uni-form-item[data-v-154d5e18]{position:relative}.form-input-code[data-v-154d5e18]{position:absolute;right:%?23?%;top:%?20?%;width:%?184?%;height:%?40?%;color:#007aff;border:1px solid #007aff;font-size:%?22?%;line-height:%?40?%;text-align:center;cursor:pointer}\r\n\t/*结婚登记 预约协议书  弹出层 页面样式\r\n */.Popup[data-v-154d5e18]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.1);display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.popup-main[data-v-154d5e18]{background-color:#fff;border-radius:%?16?%;box-shadow:0 0 57px 0 rgba(39,52,125,.25);width:%?633?%;margin:0 auto}.popup-body[data-v-154d5e18]{padding:%?40?%;display:block;content:"";clear:both}.popup-body[data-v-154d5e18]:after{display:block;content:"";clear:both}.protocal-title[data-v-154d5e18]{width:100%;text-align:center;line-height:%?40?%;color:#1677ff;font-size:%?30?%}.protocal-con[data-v-154d5e18],.protocal-list[data-v-154d5e18],.protocal-footer[data-v-154d5e18]{padding-top:%?40?%;font-size:%?22?%;color:#333;line-height:%?40?%;text-align:left}.protocal-footer[data-v-154d5e18]{float:right;text-align:center}.popup-footer[data-v-154d5e18]{padding:0 %?40?% %?40?%;text-align:center}.popup-footer uni-button[data-v-154d5e18]{display:inline-block;width:calc(50% - %?20?%);margin:0 %?20?% 0 0;font-size:%?30?%}\r\n\t/* 预约结果 查看页面\r\n */.info .civil-main[data-v-154d5e18]{margin:0;padding:0;width:100%}.info-list[data-v-154d5e18]{width:100%}.info-list-item[data-v-154d5e18]{padding:0 %?27?%;background-color:#fff;margin-bottom:%?26?%;font-size:%?30?%;color:#333;width:100%;box-sizing:border-box}.busniess-item[data-v-154d5e18]{border-bottom:1px solid #e8e8e8;height:%?110?%;width:100%;line-height:%?110?%}.busniess-item .left[data-v-154d5e18]{color:#999;float:right}.busniess-item .border-color[data-v-154d5e18]{color:#1677ff}.busniess-item .href[data-v-154d5e18]{color:#1677ff;text-decoration:underline ;-webkit-text-decoration-color:#1677ff;text-decoration-color:#1677ff}.btn-default-red[data-v-154d5e18]{float:left;padding:0 %?26?%;margin:%?30?% 0 0 %?20?%;height:%?50?%;line-height:%?46?%;font-size:%?30?%;border-radius:%?50?%;border:1px solid #ff3b30;color:#ff3b30;background-color:#fff}.btn-default-blue[data-v-154d5e18]{float:left;padding:0 %?26?%;margin:%?30?% 0 0 %?20?%;height:%?50?%;line-height:%?46?%;font-size:%?30?%;border-radius:%?50?%;border:1px solid #1677ff;color:#1677ff;background-color:#fff}.time-group[data-v-154d5e18]{box-sizing:border-box;position:absolute;width:40%;top:0;right:0;color:#fff;height:%?80?%;text-align:center;line-height:%?80?%;font-size:%?20?%;background:#1677ff}',""]),t.exports=e},cd4e:function(t,e,a){"use strict";a.r(e);var i=a("8cd9"),n=a.n(i);for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);e["default"]=n.a},d2e7:function(t,e,a){"use strict";var i=a("ee27");a("caad"),a("c975"),a("a15b"),a("fb6a"),a("a9e3"),a("4d63"),a("ac1f"),a("25f0"),a("2532"),a("1276"),a("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.fromCheck=void 0;var n=i(a("f3f3")),r=i(a("7b4b")),o=(0,n.default)({},r.default,{type:function(t,e){var a={string:"字符串",boolean:"布尔值",objec:"对象"};if("number"==e[0]){if(""==t||isNaN(Number(t)))return"不是一个数字"}else if(typeof t!=e[0])return a[e[0]]?"不是"+a[e[0]]:"数据类型不符合";return!0},max:function(t,e){var a=this.type(t,["number"]);return!0!==a?a:!(t>e[0])||"值不能超过"+e[0]},min:function(t,e){var a=this.type(t,["number"]);return!0!==a?a:!(t.length<e[0])||"值不能小于"+e[0]},length:function(t,e){if(e.length>1){if("~"==e[1].trim()&&t.length<e[0])return"长度不能小于"+e[0];if("~"==e[0].trim()&&t.length>e[1])return"长度不能超过"+e[1];if(t.length<e[0]||t.length>e[1])return"长度应在"+e[0]+"~"+e[1]+"之间"}else if(t.length!=e[0])return"长度应等于"+e[0];return!0},between:function(t,e){if(e.length>1){if(Number(t)<Number(e[0])||Number(t)>Number(e[1]))return"应在"+e[0]+"~"+e[1]+"之间"}else if(t!=e[0])return"应等于"+e[0];return!0},in:function(t,e){return!!e.includes(t)||"应该在"+e.join()+"之中"},eq:function(t,e,a){return!a[e[0]]||t==a[e[0]]||"与"+e[0]+"不相等"},reg:function(t,e){var a=new RegExp(e);return!!a.test(t)||"不符合正则"},date:function(t){return new Date(t).getDate()==t.substring(t.length-2)||"不是一个有效的日期"}});function s(t,e){return t.split?t.split(e):t}var l=function(t,e,a){e=s(e,"|");for(var i=e.length,n=0;n<i;++n){var r="",l="";if(0==e[n].indexOf("reg")?(r="reg",l=e[n].slice(e[n].indexOf(":")+1)):(e[n]=s(e[n],":"),r=e[n][0].trim(),l=e[n][1]?s(e[n][1],","):[]),o[r]){var c=o[r](t,l,a);if(!0!==c)return{msg:c,rule:r}}}return!0};e.fromCheck=l},e4ff:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.visable?a("v-uni-view",{staticClass:"Popup",staticStyle:{position:"fixed"}},[a("v-uni-view",{staticClass:"popup-main"},[a("v-uni-view",{staticClass:"popup-body"},[a("v-uni-view",{staticClass:"protocal-title"},[t._v(t._s(t.formData.deptName))]),a("v-uni-view",{staticClass:"protocal-title"},[t._v(t._s(t.formData.bookDate)+"/"+t._s(t.formData.startTime)+"-"+t._s(t.formData.endTime))]),a("v-uni-view",[t._v("当事人应提交的证件和证明等材料")]),a("v-uni-view",{staticClass:"protocal-con"},[t._v("1.当事人应当提交本人有效的居民身份证（或有效临时身份证）和户口簿。居民身份证与户口簿上的姓名、性别、出生日期、公民身份号码应当一致；不一致的，当事人应当先到有关部门更正，户口簿上的婚姻状况应当与当事人声明一致；不一致的，当事人应当向登记机关提供能够证明其声明真实性的法院生效司法文书、配偶居民死亡医学证明（推断）书等材料；不一致且无法提供相关材料的，当事人应当到有关部门更正。"),a("br"),t._v("2.当事人声明的婚姻状况与婚姻登记档案记载不一致的，当事人应当向登记机关提供能够证明其声明真实性的法院生效司法文书、配偶居民死亡医学证明（推断）书等材料"),a("br"),t._v("3.3张2寸双方近期半身免冠合影照片。"),a("br"),t._v("4.现役军人办理结婚登记应当提交本人的居民身份证、军人证件和部队出具的军人婚姻登记证明。"),a("br"),t._v("5.居民身份证、军人证件和军人婚姻登记证明上的姓名、性别、出生日期、公民身份证号码应当一致；不一致的，当事人应当先到有关部门更正。")])],1),a("v-uni-view",{staticClass:"popup-footer"},[a("v-uni-button",{staticClass:"btn-blue",attrs:{type:"primary",plain:"true"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.endClick.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1):t._e()},r=[];a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}))},eacb:function(t,e,a){"use strict";a.r(e);var i=a("e4ff"),n=a("239f");for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);a("026b");var o,s=a("f0c5"),l=Object(s["a"])(n["default"],i["b"],i["c"],!1,null,"154d5e18",null,!1,i["a"],o);e["default"]=l.exports}}]);