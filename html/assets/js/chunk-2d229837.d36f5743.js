(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229837"],{de88:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[t._m(0),e("el-tabs",{attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.activeTab,callback:function(a){t.activeTab=a},expression:"activeTab"}},[e("el-tab-pane",{attrs:{label:"报警联系人",name:"contact_person"}},["contact_person"===t.activeTab?e("router-view",{attrs:{name:"contact_person"}}):t._e()],1),e("el-tab-pane",{attrs:{label:"报警联系组",name:"contact_group"}},["contact_group"===t.activeTab?e("router-view",{attrs:{name:"contact_group"}}):t._e()],1)],1)],1)},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"navbar-container box-shadow"},[e("div",{staticClass:"container-fluid navbar-header flex"},[e("span",{staticClass:"page-title"},[t._v("报警联系人管理")])])])}],i={name:"alarm_contact",data:function(){return{activeTab:"contact_person"}},methods:{handleClick:function(){this.$router.push({name:"view_contact_detail",params:{tap:this.activeTab}})}},mounted:function(){this.activeTab=this.$route.params.tap,this.activeTab||(this.activeTab="contact_person"),this.handleClick()}},r=i,s=e("2877"),o=Object(s["a"])(r,n,c,!1,null,null,null);a["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d229837.d36f5743.js.map