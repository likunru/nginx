(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-312171e5"],{"0d03":function(t,e,a){var n=a("6eeb"),s=Date.prototype,r="Invalid Date",i="toString",l=s[i],o=s.getTime;new Date(NaN)+""!=r&&n(s,i,(function(){var t=o.call(this);return t===t?l.call(this):r}))},"30d5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"navbar-container"},[t._m(0),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header clearfix"},[a("el-date-picker",{staticClass:"pull-right m-left30 cds-date",attrs:{type:"datetimerange","range-separator":"至","start-placeholder":"开始时间","end-placeholder":"结束时间",format:"yyyy-MM-dd HH:mm","picker-options":t.SetTimeRange,"value-format":"yyyy-MM-dd HH:mm:ss"},on:{change:t.fn},model:{value:t.time_frame,callback:function(e){t.time_frame=e},expression:"time_frame"}}),a("el-radio-group",{staticClass:"pull-right",model:{value:t.sel_time,callback:function(e){t.sel_time=e},expression:"sel_time"}},t._l(t.time_list,(function(e,n){return a("el-radio-button",{key:n,attrs:{label:e.value,value:e.value}},[a("span",{domProps:{textContent:t._s(e.name)}})])})),1)],1)])]),a("div",{staticClass:"navbar-container box-shadow"},[a("div",{staticClass:"container-fluid"},[a("hr",{staticClass:"normal"}),a("div",{staticClass:"navbar-header flex"},[a("el-select",{attrs:{placeholder:"报警状态"},model:{value:t.alarm_status,callback:function(e){t.alarm_status=e},expression:"alarm_status"}},[a("el-option",{attrs:{value:""}},[t._v("全部")]),t._l(t.status_list,(function(e){return a("el-option",{key:e.value,attrs:{label:e.name,value:e.value}},[t._v(t._s(e.name))])}))],2),a("el-input",{staticStyle:{width:"300px"},attrs:{placeholder:"请输入规则名称或实例名称"},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[a("el-button",{attrs:{slot:"append",type:"primary"},on:{click:t.search},slot:"append"},[a("i",{staticClass:"el-icon-search"})])],1)],1)])]),a("div",{staticClass:"content"},[a("el-table",{staticClass:"table--transparent",attrs:{data:t.list}},[a("el-table-column",{attrs:{label:"产品类型"},scopedSlots:t._u([{key:"default",fn:function(e){return["bms"==e.row.product_type?a("span",[t._v("裸金属")]):a("span",[t._v("云服务器")])]}}])}),a("el-table-column",{attrs:{label:"故障资源"},scopedSlots:t._u([{key:"default",fn:function(e){return["cloud_vm"===e.row.product_type?a("a",{staticClass:"light",attrs:{target:"_blank",href:t.vmInstanceUrl+e.row.instance_id+"/VM_UPDATE"}},[t._v(t._s(e.row.instance_name))]):a("a",{staticClass:"light",attrs:{target:"_blank",href:t.bmsInstanceUrl+e.row.instance_id+"/config"}},[t._v(t._s(e.row.instance_name))])]}}])}),a("el-table-column",{attrs:{label:"发生时间",prop:"alarm_time"}}),a("el-table-column",{attrs:{label:"持续时间",prop:"duration"}}),a("el-table-column",{attrs:{label:"规则名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{staticClass:"light",attrs:{to:{name:"报警规则详情",params:{id:e.row.rule_id}},target:"_blank"}},[t._v(t._s(e.row.rule_name))])]}}])}),a("el-table-column",{attrs:{label:"通知方式"},scopedSlots:t._u([{key:"default",fn:function(e){return[0==e.row.notification_type?a("span",[t._v("邮件")]):a("span",[t._v("短信")])]}}])}),a("el-table-column",{attrs:{label:"状态",prop:"status"}}),a("el-table-column",{attrs:{label:"通知对象"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.group_list,(function(e,n){return a("p",{key:n},[t._v(" "+t._s(e.name)+" ")])}))}}])})],1),a("el-pagination",{staticClass:"pull-right",attrs:{background:!0,"current-page":t.currentPage,"page-size":t.page_size,"prev-text":"上一页","next-text":"下一页",layout:"prev, pager, next, jumper","page-count":t.totalNums},on:{"current-change":t.handleCurrentChange}})],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"navbar-header"},[a("span",{staticClass:"page-title"},[t._v("报警历史")])])])}],r=(a("4160"),a("0d03"),a("b0c0"),a("b64b"),a("159b"),a("0fb7"),a("450d"),a("f529")),i=a.n(r),l=(a("96cf"),a("89ba")),o=a("5724");function u(t){return Object(o["a"])({method:"post",url:"/alarm/record/list",data:t,loadingStatus:!0})}a("ac1f"),a("5319");var c=function(t,e){var a=e||new Date((new Date).getTime()),n=a.getFullYear(),s=a.getMonth()+1>9?a.getMonth()+1:"0"+(a.getMonth()+1),r=a.getDate()>9?a.getDate():"0"+a.getDate(),i=a.getHours()>9?a.getHours():"0"+a.getHours(),l=a.getMinutes()>9?a.getMinutes():"0"+a.getMinutes(),o=a.getSeconds()>9?a.getSeconds():"0"+a.getSeconds();switch(t){case"yyyy-mm-dd":return n+"-"+s+"-"+r;case"yyyy-mm-dd h:m:s":return n+"-"+s+"-"+r+" "+i+":"+l+":"+o;case"yyyy-mm-dd h:m":return n+"-"+s+"-"+r+" "+i+":"+l;default:return n+"-"+s+"-"+r}},m="",d="",h={data:function(){return{list:[],time_list:[{name:"1小时",value:1},{name:"2小时",value:2},{name:"4小时",value:4},{name:"6小时",value:6},{name:"12小时",value:12},{name:"1天",value:24},{name:"3天",value:72},{name:"7天",value:168}],sel_time:0,currentPage:1,page_size:20,totalNums:0,keyword:"",selectData:"",time_frame:[],start_time:"",end_time:"",SetTimeRange:{disabledDate:function(t){return t.getTime()>d||t.getTime()<m}},rangeTime:720,status_list:[{value:"alarm_happened",name:"报警发生"},{value:"pipe_silence",name:"沉默通道"}],alarm_status:"",vmInstanceUrl:"http://172.20.3.31:9601/vpc/",bmsInstanceUrl:"http://172.20.3.31:9601/bmc/detail/"}},methods:{FnGetHistoryData:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.list=[],e={page_number:this.currentPage,page_size:this.page_size,start_time:this.start_time,end_time:this.end_time,keyword:this.selectData.keyword,alarm_status:this.selectData.alarm_status},t.next=4,u(e);case 4:a=t.sent,"Success"===a.code?(this.list=a.data.alarm_list,this.totalNums=a.data.total_pages,n=[],s=[],this.list.forEach((function(t){s=Object.keys(t.notification_group),n=[],s.forEach((function(e){n.push({id:e,name:t.notification_group[e]})})),t.group_list=n}))):i()({message:a.msg,type:"error"});case 6:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),search:function(){if(this.selectData=Object.assign({},{alarm_status:this.alarm_status},{keyword:this.keyword}),0!==this.sel_time){this.time_frame=[];var t=this.FnFormateTime(this.sel_time),e=t.start_time,a=t.end_time;this.time_frame.push(e),this.time_frame.push(a),this.start_time=e,this.end_time=a}else this.FnGetHistoryData()},handleCurrentChange:function(t){this.currentPage=t,this.FnGetHistoryData(this.selectData)},FnFormateTime:function(t){var e=c("yyyy-mm-dd h:m:s"),a=c("yyyy-mm-dd h:m:s",new Date((new Date).getTime()-60*t*60*1e3));return{start_time:a,end_time:e}},fn:function(t){this.sel_time=null===t?1:0}},created:function(){this.sel_time=1,this.$route.params.name&&(this.keyword=this.$route.params.name,this.selectData=this.$route.params.name),m=new Date(c("yyyy-mm-dd h:m:s",new Date((new Date).getTime()-60*this.rangeTime*60*1e3))),d=new Date(c("yyyy-mm-dd h:m:s"))},watch:{sel_time:function(t,e){if(t!==e&&0!==t){this.time_frame=[];var a=this.FnFormateTime(t),n=a.start_time,s=a.end_time;this.time_frame.push(n),this.time_frame.push(s),this.start_time=n,this.end_time=s}},time_frame:function(t,e){t!==e&&(this.start_time=t[0],this.end_time=t[1],this.FnGetHistoryData(this.selectData))}}},p=h,_=a("2877"),f=Object(_["a"])(p,n,s,!1,null,null,null);e["default"]=f.exports},5319:function(t,e,a){"use strict";var n=a("d784"),s=a("825a"),r=a("7b0b"),i=a("50c4"),l=a("a691"),o=a("1d80"),u=a("8aa5"),c=a("14c3"),m=Math.max,d=Math.min,h=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,_=/\$([$&'`]|\d\d?)/g,f=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a){return[function(a,n){var s=o(this),r=void 0==a?void 0:a[t];return void 0!==r?r.call(a,s,n):e.call(String(s),a,n)},function(t,r){var o=a(e,t,this,r);if(o.done)return o.value;var h=s(t),p=String(this),_="function"===typeof r;_||(r=String(r));var v=h.global;if(v){var g=h.unicode;h.lastIndex=0}var y=[];while(1){var b=c(h,p);if(null===b)break;if(y.push(b),!v)break;var w=String(b[0]);""===w&&(h.lastIndex=u(p,i(h.lastIndex),g))}for(var k="",D=0,C=0;C<y.length;C++){b=y[C];for(var x=String(b[0]),S=m(d(l(b.index),p.length),0),M=[],T=1;T<b.length;T++)M.push(f(b[T]));var F=b.groups;if(_){var H=[x].concat(M,S,p);void 0!==F&&H.push(F);var $=String(r.apply(void 0,H))}else $=n(x,p,S,M,F,r);S>=D&&(k+=p.slice(D,S)+$,D=S+x.length)}return k+p.slice(D)}];function n(t,a,n,s,i,l){var o=n+t.length,u=s.length,c=_;return void 0!==i&&(i=r(i),c=p),e.call(l,c,(function(e,r){var l;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(o);case"<":l=i[r.slice(1,-1)];break;default:var c=+r;if(0===c)return e;if(c>u){var m=h(c/10);return 0===m?e:m<=u?void 0===s[m-1]?r.charAt(1):s[m-1]+r.charAt(1):e}l=s[c-1]}return void 0===l?"":l}))}}))}}]);
//# sourceMappingURL=chunk-312171e5.98f99f4f.js.map