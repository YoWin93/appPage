(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-marry-register-marry-register-date"],{"0c41":function(t,e,a){"use strict";(function(t){var n=a("ee27");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("1266")),i=n(a("50f5")),o=n(a("09ae")),s=n(a("6ebf")),d=n(a("3fcd")),l={data:function(){var t=this.getDate({format:!0}),e=new Date,a=r.default.setTime("d ",33,e);return{current:"",startCalendarDate:t,endCalendarDate:a,betweenStart:"",betweenEnd:"",appointmentsNum:"0",appointmentsTimes:[],limitFlag:!0,selected:[],selectedDate:[],isHave:!1,isupdate:!1,formData:{degreeManLabel:"",marryStatusWoMan:"",regSJWoMan:"",regJXMan:"",certNumMan:"",degreeWoManLabel:"",opType:"IA",nameWoMan:"",applyStatusLabel:"",degreeMan:"",tel:"",nationMan:"156",idTypeWoMan:"1",folkWoMan:"",regJXWoMan:"",appTime:"",birthMan:"",nationManLabel:"中国",nationWoMan:"156",marryStatusMan:"",regQXWoMan:"",regDetailMan:"",electronicID:{cardMan:{url:"",id:""},cardWoMan:{url:"",id:""},certMan:{url:"",id:""},certWoMan:{url:"",id:""},others:[]},jobWoManLabel:"",certNumWoMan:"",certTypeMan:"1",folkWoManLabel:"",Id:"",degreeWoMan:"",applyStatus:"",marryStatusWoManLabel:"",bookDate:" ",deptCode:"",deptName:"",idTypeMan:"1",certTypeWoMan:"1",jobManLabel:"",startTime:"",nationWoManLabel:"中国",idTypeWoManLabel:"内地居民",birthWoMan:"",marryStatusManLabel:"",regQXMan:"",opTypeLabel:"",regDSWoMan:"",nameMan:"",jobWoMan:"",regDetailWoMan:"",certTypeManLabel:"内地居民身份证",certTypeWoManLabel:"内地居民身份证",folkManLabel:"",regDSMan:"",jobMan:"",endTime:"",folkMan:"",idTypeManLabel:"内地居民",regSJMan:"",mobile:"",regQXManLabel:"",regQXWoManLabel:""}}},computed:{startDate:function(){return this.getDate("start")},manendDate:function(){return this.getDate("manend")},womanendDate:function(){return this.getDate("womanend")}},components:{EvanStep:i.default,EvanIcons:o.default,calendar:s.default},onShow:function(){var e=this;try{this.formData=uni.getStorageSync("formData"),this.formData.bookDate="";var a=(new Date).getTime(),n={app_id:"sdmzthyyy",interface_id:"marryAppGetRegDateList",version:"1.0",biz_content:JSON.stringify({deptCode:this.formData.deptCode,opType:"IA"}),charset:"UTF-8",timestamp:a,origin:"1"};d.default.queryRegistrySign(n).then((function(t){t.data&&(n.sign=t.data.sign,d.default.queryRegistryGet(n).then((function(t){for(var a=JSON.parse(t.data).data,n=0;n<a.length;n++)e.selected.push({date:a[n].regDate,info:"可预约",data:{custom:"自定义信息",name:"自定义消息头"}})})))})).catch((function(e){t.log(e)}))}catch(r){}},methods:{showBaseInfo6:function(){uni.navigateBack()},netxSearchchange:function(){if(this.formData.startTime&&this.appointmentsTimes.length>0){var t=this.formData;uni.setStorage({key:"formData",data:t,success:function(){uni.navigateTo({url:"./marry-register-submit"})}})}else uni.showToast({title:"请选择预约时间，若已约满，可返回上一步，选择其他登记机关",duration:2e3,icon:"none"})},radioChange:function(t,e,a,n,r){this.formData.startTime=t,this.formData.endTime=e,this.formData.dateId=n,this.formData.timeCode=r,a>0&&(this.isHave=!0)},calendarChange:function(e){var a=this;this.formData.bookDate=e.fulldate,this.appointmentsTimes=[];var n=(new Date).getTime(),r={app_id:"sdmzthyyy",interface_id:"marryAppGetRegDate",version:"1.0",biz_content:JSON.stringify({deptCode:this.formData.deptCode,opType:"IA",dateTime:e.fulldate}),charset:"UTF-8",timestamp:n,origin:"1"};d.default.queryRegistrySign(r).then((function(t){t.data&&(r.sign=t.data.sign,d.default.queryRegistryGet(r).then((function(t){for(var e=JSON.parse(t.data).data,n=0;n<e.length;n++)a.appointmentsTimes.push({startTime:e[n].startTime,endTime:e[n].endTime,allNum:e[n].allNum,dateId:""+e[n].dateId,value:""+e[n].dateId,timeCode:e[n].timeCode})})))})).catch((function(e){t.log(e)}))},getDate:function(t){var e=new Date,a=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return"start"===t?a-=60:"manend"===t?a-=22:"womanend"===t&&(a-=20),n=n>9?n:"0"+n,r=r>9?r:"0"+r,"".concat(a,"-").concat(n,"-").concat(r)}}};e.default=l}).call(this,a("5a52")["default"])},1266:function(t,e,a){"use strict";a("a9e3"),a("d3b7"),a("acd8"),a("e25e"),a("ac1f"),a("25f0"),a("466d"),a("5319"),a("1276"),a("498a"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={isCardNo:function(t,e){var a=t.length;if(!t||"string"!=typeof t||15!=a&&18!=a||!t.match(/^[0-9]{15}$/)&&!t.match(/^[0-9]{17}[0-9xX]$/)||"111111111111111"==t)return!1;var n={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};if(!n[t.substr(0,2)])return!1;var r="",i="",o="";if(15==t.length?(r=parseInt(t.substr(6,2)),i=parseInt(t.substr(8,2)),o=parseInt(t.substr(10,2))):(r=parseInt(t.substr(6,4)),i=parseInt(t.substr(10,2)),o=parseInt(t.substr(12,2))),i>12)return!1;if(o>31)return!1;if(2==i&&o>29)return!1;if((4==i||6==i||9==i||11==i)&&o>30)return!1;if(r<100&&(r+=1900),r>9999)return!1;if(2==i&&29==o){var s=r%4,d=r%100,l=r%400;if(0!=s)return!1;if(0==d&&0!=l)return!1}var u=new Date(r,i-1,o);if(u-new Date>=0||u-new Date(1850,1,1)<=0)return!1;var c="15"==a?t.substr(14,1):t.substr(16,1),f="1"==c||"3"==c||"5"==c||"7"==c||"9"==c?"1":"0";if(e&&f!=e)return!1;var g=function(t){for(var e=new Array(17),a=new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1),n=new Array("1","0","X","9","8","7","6","5","4","3","2"),r=0,i=0,o=16;o>=0;o-=1)e[o]=Number(t.charAt(o));for(var s=16;s>=0;s-=1)r+=e[s]*a[s];return i=r%11,n[i]};return t.substr(17,1)==g(t.substr(0,17))},checkWord:function(t){var e=/^[A-Za-z0-9]+$/,a=e.test(t);return a},getUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){return("x"===t?16*Math.random()|0:8).toString(16)}))},compareDate:function(t,e){var a=new Date(t),n=new Date(e);return!(a.getTime()-n.getTime()>0)},checkIntNumber:function(t){return null==t||""==t?(uni.showToast({title:"请输入所在班级",icon:"none"}),!1):/(^[1-9]\d*$)/.test(t)?!(t>100)||(uni.showToast({title:"班级不能大于100",icon:"none"}),!1):(uni.showToast({title:"请输入小于100的正整数",icon:"none"}),!1)},isEmpty:function(t){var e=t.replace(/(^\s*)|(\s*$)/g,"");return""==e||e.length<=0||null==t},specialChar:function(t){var e=/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘'，。、]/im;return!!e.test(t)},specialCharExcept:function(t){var e=/[`~!@#$%^&*_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*——\-+={}|《》？：“”【】、；‘'，。、]/im;return!!e.test(t)},checkCard:function(t){if(""==t||void 0==t||null==t||t.length>0&&0==t.trim().length)return uni.showToast({title:"身份证不能为空",icon:"none"}),!1;if(15==t.length)return!!i(t)||(uni.showToast({title:"请输入正确的身份证",icon:"none"}),!1);if(18==t.length){var e=t.split("");return!(!o(t)||!s(e))||(uni.showToast({title:"请输入正确的身份证",icon:"none"}),!1)}return uni.showToast({title:"身份证长度不正确",icon:"none"}),!1},checkPhone:function(t){var e=/^((13[0-9]|14[56789]|15[0-3,5-9]|16[5-6]|17[012345678]|18[0-9]|19[189])\d{8})$/;return""==t||void 0==t||null==t||t.length>0&&0==t.trim().length?(uni.showToast({title:"紧急联络人联系方式不能为空",icon:"none"}),!1):!!e.test(t)||(uni.showToast({title:"紧急联络人联系方式不合法",icon:"none"}),!1)},guid:function(){return r()+r()+r()+r()+r()+r()+r()+r()},setTime:function(t,e,a){switch(t){case"y ":return a.setFullYear(a.getFullYear()+e),a;case"q ":return a.setMonth(a.getMonth()+3*e),a;case"m ":return a.setMonth(a.getMonth()+e),a;case"w ":return a.setDate(a.getDate()+7*e),a;case"d ":a.setDate(a.getDate()+e);var n=a.getFullYear()+"-"+l(a.getMonth()+1)+"-"+l(a.getDate());return n;case"h ":return a.setHours(a.getHours()+e),a;case"m ":return a.setMinutes(a.getMinutes()+e),a;case"s ":return a.setSeconds(a.getSeconds()+e),a;default:return a.setDate(d.getDate()+e),a}}};function r(){return(65536*(1+Math.random())|0).toString(16).substring(1)}function i(t){var e=t.substring(6,8),a=t.substring(8,10),n=t.substring(10,12),r=new Date(e,parseFloat(a)-1,parseFloat(n));return r.getYear()==parseFloat(e)&&r.getMonth()==parseFloat(a)-1&&r.getDate()==parseFloat(n)}function o(t){var e=t.substring(6,10),a=t.substring(10,12),n=t.substring(12,14),r=new Date(e,parseFloat(a)-1,parseFloat(n));return r.getFullYear()==parseFloat(e)&&r.getMonth()==parseFloat(a)-1&&r.getDate()==parseFloat(n)}function s(t){var e=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1],a=[1,0,10,9,8,7,6,5,4,3,2],n=0;"x"==t[17].toLowerCase()&&(t[17]=10);for(var r=0;r<17;r++)n+=e[r]*t[r];var i=n%11;return t[17]==a[i]}function l(t){return t<10?"0"+t:t}e.default=n},"173d":function(t,e,a){"use strict";var n={evanSteps:a("889f").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"form-content"},[a("v-uni-view",{staticClass:"from-tab"},[a("evan-steps",{attrs:{active:2,primaryColor:"#1677ff",direction:"horizontal"}},[a("evan-step",{attrs:{title:"基本信息"}}),a("evan-step",{attrs:{title:"登记机关"}}),a("evan-step",{attrs:{title:"选择日期"}}),a("evan-step",{attrs:{title:"提交登记"}})],1)],1),a("v-uni-view",{staticClass:"form-group"},[a("v-uni-view",{staticClass:"form-panes"},[a("calendar",{attrs:{startDate:t.startCalendarDate,endDate:t.endCalendarDate,limitFlag:t.limitFlag,selectedDate:t.selectedDate,showMonth:!1,selected:t.selected},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.calendarChange.apply(void 0,arguments)}}}),a("v-uni-view",{staticClass:"form-item"},[a("v-uni-view",{},[t._v("可预约时间段（"+t._s(this.formData.bookDate)+"）")])],1),a("v-uni-view",{staticClass:"form-item-list"},[a("v-uni-radio-group",t._l(t.appointmentsTimes,(function(e,n){return a("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.radioChange(e.startTime,e.endTime,e.allNum,e.dateId,e.timeCode)}}},[a("v-uni-view",[a("v-uni-radio",{attrs:{disabled:e.allNum<=0,value:e.value,checked:n===t.current}}),t._v(t._s(e.startTime)+"-"+t._s(e.endTime)),a("v-uni-text",{staticStyle:{float:"right"}},[t._v("剩余人数："+t._s(e.allNum))])],1)],1)})),1)],1)],1),a("v-uni-view",{staticClass:"frend-ship"},[a("v-uni-view",{staticClass:"ship-title"},[t._v("友情提醒")]),a("v-uni-view",{staticClass:"ship-box"},[t._v("1.请你选择具体日期，预约服务需要提前2个工作日申请，受理日期为一个月（按30天的工作日计算）之内的工作日")]),a("v-uni-view",{staticClass:"ship-box"},[t._v("2.“绿色日期”代表可进行预约，其他日期不可预约")])],1),a("v-uni-view",{staticClass:"btn-group"},[a("v-uni-view",{staticClass:"btn-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showBaseInfo6.apply(void 0,arguments)}}},[t._v("上一页")]),t.isHave?a("v-uni-view",{staticClass:"btn-item",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.netxSearchchange.apply(void 0,arguments)}}},[t._v("下一页")]):t._e()],1)],1)],1)},i=[];a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}))},"1e9a":function(t,e,a){var n=a("ee08");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("2b75366d",n,!0,{sourceMap:!1,shadowMode:!1})},"68bc":function(t,e,a){"use strict";a.r(e);var n=a("173d"),r=a("929b");for(var i in r)"default"!==i&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("e1d9");var o,s=a("f0c5"),d=Object(s["a"])(r["default"],n["b"],n["c"],!1,null,"0479b17a",null,!1,n["a"],o);e["default"]=d.exports},"929b":function(t,e,a){"use strict";a.r(e);var n=a("0c41"),r=a.n(n);for(var i in n)"default"!==i&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},e1d9:function(t,e,a){"use strict";var n=a("1e9a"),r=a.n(n);r.a},ee08:function(t,e,a){var n=a("24fb"),r=a("1de5"),i=a("55f3");e=n(!1);var o=r(i);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.form-content .from-tab[data-v-0479b17a]{background-color:#fff}.form-content .form-panes[data-v-0479b17a]{padding:%?10?% %?20?%}.form-content .form-group[data-v-0479b17a]{background-color:#fff;margin-bottom:%?28?%}.form-content .form-title[data-v-0479b17a]{color:#1677ff;border-left:%?5?% solid #1677ff;height:%?30?%;line-height:%?30?%;padding-left:%?12?%;font-size:%?34?%;font-weight:700;margin-top:%?20?%;margin-left:%?20?%}.form-content .form-item[data-v-0479b17a]{height:%?110?%;padding-top:%?20?%;border-bottom:1px solid #eee}.form-content .form-item .title[data-v-0479b17a]{float:left;width:%?240?%}.form-content .form-item[data-v-0479b17a] .item-label{font-size:%?32?%}.form-content .form-item .uni-input[data-v-0479b17a]{float:right;font-size:%?28?%;width:80%;height:%?80?%;margin:%?15?% 0;padding-right:%?10?%;text-align:right;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.form-content .form-item .time-group[data-v-0479b17a]{float:right;width:40%;color:#fff;height:%?80?%;text-align:center;line-height:%?80?%;font-size:%?24?%;margin:%?15?% 0;background:#1677ff}.form-content .form-item .time-group .code-btn[data-v-0479b17a]{display:inline-block}.form-content .form-item .time-group .code-time[data-v-0479b17a]{display:inline-block}.form-content .form-item .code-input[data-v-0479b17a]{float:right;width:40%;height:%?80?%;line-height:%?80?%;font-size:%?24?%;margin:%?15?% 0;text-align:center}.form-content .form-item .icon-box[data-v-0479b17a]{float:right;width:%?18?%;height:%?30?%;margin:%?40?% 0}.form-content .form-item .right-icon[data-v-0479b17a]{background:url('+o+") 50% no-repeat;background-size:100% 100%}.form-content .imgList-item[data-v-0479b17a]{box-sizing:border-box;width:100%}.form-content .imgList-item .img-group[data-v-0479b17a]{box-sizing:border-box;width:100%}.form-content .add-img-box[data-v-0479b17a]{width:50%;float:left}.form-content .add-img-item[data-v-0479b17a]{width:90%;margin:0 auto;position:relative;padding:%?9?% 0}.form-content .other-list[data-v-0479b17a]{box-sizing:border-box;width:100%}.form-content .other-list .add-img-item[data-v-0479b17a]{box-sizing:border-box;width:50%;padding:%?9?%;float:left}.form-content .add-img[data-v-0479b17a]{width:100%;height:%?203?%;border-radius:%?24?%}.form-content .add-img-del[data-v-0479b17a]{position:absolute;width:%?40?%;height:%?40?%;right:%?8?%;top:%?17?%;z-index:999;border-radius:%?20?%}.form-content .img-title[data-v-0479b17a]{width:100%;box-sizing:border-box;padding:%?17?% 0;text-align:center;color:#333;font-size:%?22?%}.form-content .other-title[data-v-0479b17a]{width:100%;float:left}.form-content .address-time[data-v-0479b17a]{width:%?484?%;height:%?88?%;background-color:#f5f5f5;opacity:1;border-radius:%?24?%;text-align:center;font-size:%?35?%;font-weight:500;color:#333}.form-content .line[data-v-0479b17a]{width:%?750?%;height:1px;-webkit-transform:scaleY(.3);transform:scaleY(.3);background-color:rgba(0,0,0,.5)}.btn-group[data-v-0479b17a]{box-sizing:border-box;width:100%;padding:%?30?%;text-align:center}.btn-item[data-v-0479b17a]{display:inline-block;width:%?300?%;height:%?80?%;line-height:%?80?%;color:#fff;text-align:center;background:#1677ff;border-radius:5px;margin:0 %?10?%}.code-box[data-v-0479b17a]{margin:%?24?% 0;height:%?138?%;line-height:%?138?%;border-radius:16px;font-weight:700;font-size:%?30?%;text-align:center;border:1px solid #999;color:#999}.activebg[data-v-0479b17a]{background-color:#1677ff;color:#fff}.null-box .null-bg[data-v-0479b17a]{display:block;margin:%?30?% auto;width:%?162?%;height:%?143?%}.time-picker[data-v-0479b17a]{width:50%;float:right;text-align:right;color:#00b578}.frend-ship[data-v-0479b17a]{padding:%?28?%;background-color:#f5f5f5}.ship-title[data-v-0479b17a]{font-weight:700;color:#333;font-size:%?26?%;line-height:%?36?%}.ship-box[data-v-0479b17a]{line-height:%?36?%;font-size:%?22?%;color:#666}",""]),t.exports=e}}]);