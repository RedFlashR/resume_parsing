"use strict";(self["webpackChunkresume_parsing"]=self["webpackChunkresume_parsing"]||[]).push([[476,723],{1723:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"choiceBox"},[a("el-select",{staticClass:"choice",attrs:{placeholder:"工作年数"},model:{value:e.workingYears,callback:function(a){e.workingYears=a},expression:"workingYears"}},e._l(e.workYearsC,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{staticClass:"choice",attrs:{placeholder:"教育背景"},model:{value:e.education,callback:function(a){e.education=a},expression:"education"}},e._l(e.eduBackgroundC,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{staticClass:"choice",attrs:{placeholder:"年龄"},model:{value:e.age,callback:function(a){e.age=a},expression:"age"}},e._l(e.ageC,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("查询")]),a("el-button",{on:{click:e.resetForm}},[e._v("重置")])],1),e._l(e.upLoadList,(function(t){return a("div",{key:t.id,staticClass:"resume",style:{display:e.hidden}},[a("div",{staticClass:"name"},[e._v(e._s(t.name))]),a("div",{staticClass:"age"},[a("span",[e._v("年龄："+e._s(t.age))]),e._v(" "),a("span",[e._v("工作年限："+e._s(t.workingYears))]),e._v(" "),a("span",[e._v("学历："+e._s(t.education))])]),a("div",{staticClass:"want"},[a("span",[e._v("求职期望："+e._s(t.career)+" ")])]),a("div",{staticClass:"honor"},[a("span",[e._v("荣誉证书："+e._s(t.honor))])]),a("div",{staticClass:"ex"},[e._v("主要经历："+e._s(t.workExperience))]),a("el-rate",{staticClass:"score",attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.score,callback:function(a){e.score=a},expression:"score"}}),a("el-button",{staticClass:"details",attrs:{type:"primary",size:"mini"},on:{click:function(a){return e.goDetail(t.id)}}},[e._v("查看详情")]),a("el-button",{staticClass:"cancel",attrs:{type:"info",size:"mini"},on:{click:function(a){return e.hide(t.id)}}},[e._v("删除此项")])],1)}))],2)},l=[],i=(t(7658),t(5101)),n={name:"upload",data(){return{hidden:"block",formInline:{user:"",region:""},workYearsC:[{value:"1",label:"0"},{value:"2",label:"0—3年"},{value:"3",label:"3—6年"},{value:"4",label:"6-9年"},{value:"5",label:"9-16年"},{value:"6",label:"16及以上年"}],workingYears:"",eduBackgroundC:[{value:"2",label:"大专"},{value:"3",label:"本科"},{value:"4",label:"硕士"},{value:"1",label:"大专以下"},{value:"5",label:"博士及以上"}],education:"",ageC:[{value:"1 ",label:"18-23 "},{value:"2 ",label:"23-28 "},{value:"  3 ",label:"28-33  "},{value:"  4",label:"33-38   "},{value:" 5 ",label:"38-43"},{value:"6",label:"43-48"},{value:"7",label:"48+"}],age:"",area:"",score:"4",id:"1661341670245003266",upLoadList:[]}},methods:{onSubmit(){console.log("submit!")},goDetail(e){this.$router.push({name:"Analyze",params:{id:e}})},async hide(e){const a=confirm("确定删除吗");if(a){const a=await(0,i.CH)(e);1==a.code&&(this.$message({message:"删除成功",type:"success"}),this.getUserUpload())}},async getUserUpload(){const e=await(0,i.Qs)(localStorage.getItem("id"));1==e.code&&(this.upLoadList=e.data)},resetForm(){this.workingYears="",this.education="",this.age="",this.getUserUpload()},async search(){const e=localStorage.getItem("id"),{workingYears:a,education:t,age:s}=this,l={workingYears:a,education:t,age:s},n=await(0,i.rY)(e,l);1==n.code&&(console.log(15),this.upLoadList=n.data)}},mounted(){this.getUserUpload()}},r=n,o=t(1001),c=(0,o.Z)(r,s,l,!1,null,"681ac4d4",null),u=c.exports},7476:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"box"},[a("div",{staticClass:"title"},[e._v("人岗匹配")]),a("div",{staticClass:"content"},[a("div",{staticClass:"upload"},[e._m(0),e._m(1),a("div",{staticClass:"doc"},[a("div",{staticClass:"one"},[e._v("岗位要求")]),a("div",{staticClass:"two",staticStyle:{"font-size":"14px"}},[e._v(" 1.熟练使用办公软件，可以独立制作表格、PPT等； 2.良好的沟通能力，善于维护客户关系； 3.有拓展、策划经验能力者优先考虑。 4.本科以上 5.10年以上相关工作经验 ")]),a("input",{staticClass:"file",attrs:{type:"file"}}),a("el-button",{staticClass:"button",attrs:{size:"medium",type:"primary"}},[e._v("开始匹配")])],1)]),a("div",{staticClass:"result"},[a("ul",[a("li",{staticStyle:{display:"block"}},[a("div",{staticClass:"one"},[e._v("市场专员")]),e._m(2),e._m(3),e._m(4),a("div",{staticClass:"five"},[a("el-rate",{attrs:{disabled:"","text-color":"#ff9900"},model:{value:e.star,callback:function(a){e.star=a},expression:"star"}})],1),a("el-button",{staticClass:"six",attrs:{type:"primary"},on:{click:e.goDe}},[e._v("查看详情")])],1),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9)])])])])},l=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"name"},[a("div",[e._v("岗位名称")]),a("div",{staticClass:"input"},[e._v(" 市场营销 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"name"},[a("div",[e._v("岗位职责")]),a("div",{staticClass:"input",staticStyle:{"overflow-y":"scroll","overflow-x":"hidden"}},[e._v(" 1.根据公司发展方向及阶段性目标，制定品牌战略、推广策略等年度经营方案； 2.参与各产品推广筹划方案的制定与执行； 3.负责企业整体形象的定位与维护，建立完整的产品口碑营销方案及公司形象推广方案； 4.负责与新媒体及知名媒体进行沟通，开展长期良好合作； 5.负责制作与推广公司各类宣传资料，完善对外各类宣传通稿； 6.负责为公司的知识产权、荣誉资质等进行申请、维护与宣传。 ")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"two"},[a("span",[e._v("林国瑞")]),e._v("|"),a("span",[e._v("本科")]),e._v("|"),a("span",[e._v("10")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"three"},[a("span",[e._v(" 中国传媒大学")]),e._v("|"),a("span",[e._v("设计")])])},function(){var e=this,a=e._self._c;return a("div",{staticClass:"four"},[a("span",[e._v("阿里巴巴公司")]),e._v("|"),a("span",[e._v("市场经理助理")])])},function(){var e=this,a=e._self._c;return a("li",[a("div")])},function(){var e=this,a=e._self._c;return a("li",[a("div")])},function(){var e=this,a=e._self._c;return a("li",[a("div")])},function(){var e=this,a=e._self._c;return a("li",[a("div")])},function(){var e=this,a=e._self._c;return a("li",[a("div")])}],i=(t(7658),t(1723)),n={components:{Upload:i["default"]},name:"postMatch",data(){return{input:"",star:4.5}},methods:{goDe(){this.$router.push({path:"/analyze/result2"})}}},r=n,o=t(1001),c=(0,o.Z)(r,s,l,!1,null,"541ec3da",null),u=c.exports}}]);
//# sourceMappingURL=476.5c83dccd.js.map