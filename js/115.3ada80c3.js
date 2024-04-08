"use strict";(self["webpackChunkresume_parsing"]=self["webpackChunkresume_parsing"]||[]).push([[115],{6115:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var s=function(){var e=this;e._self._c;return e._m(0)},i=[function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"title"},[e._v("数据分析")]),t("div",{staticClass:"tips"},[e._v("注意：仅支持已上传的简历")]),t("div",{staticClass:"box"},[t("div",{staticClass:"sex",attrs:{id:"sex"}}),t("div",{staticClass:"age",attrs:{id:"age"}}),t("div",{staticClass:"line",attrs:{id:"line"}}),t("div",{staticClass:"edu",attrs:{id:"edu"}})])])}],n=a(5101),u={name:"dataAnalyze",data(){return{man:0,women:0,unKonwn:0,age0:0,age1:0,age2:0,age3:0,age4:0,age5:0,age6:0,uploadCv:0,collectCv:0}},methods:{async getData(){const e=await(0,n.LI)(localStorage.getItem("id"));let t=e.data;this.man=t.sexNums.man,this.women=t.sexNums.women,this.unKnown=t.sexNums.unKnown,this.age0=t.ageNums.age0,this.age1=t.ageNums.age1,this.age2=t.ageNums.age2,this.age3=t.ageNums.age3,this.age4=t.ageNums.age4,this.age5=t.ageNums.age5,this.age6=t.ageNums.age6,this.uploadCv=t.uploadCv,this.collectCv=t.collectCv,this.edu0=t.educationNums.edu0,this.edu1=t.educationNums.edu1,this.edu2=t.educationNums.edu2,this.edu3=t.educationNums.edu3,this.edu4=t.educationNums.edu4,this.edu5=t.educationNums.edu5,this.edu6=t.educationNums.edu6,this.sexImg(),this.ageImg(),this.eduImg(),this.lineImg()},sexImg(){var e,t=document.getElementById("sex"),a=this.$echarts.init(t);e={title:{text:"性别",left:"center",top:"0"},tooltip:{trigger:"item"},dataset:[{source:[["性别","Sales","Year"],["男",this.man,2011],["未知",this.unKnown,2011],["女",this.women,2011]]},{transform:{type:"filter",config:{dimension:"Year",value:2011}}}],series:[{type:"pie",radius:150,center:["100%","100%"],datasetIndex:1}],media:[{query:{minAspectRatio:1},option:{series:[{center:["50%","50%"]}]}}]},e&&a.setOption(e)},ageImg(){var e,t=document.getElementById("age"),a=this.$echarts.init(t);a.resize({width:600,height:500}),e={title:{text:"年龄",left:"center",top:"0"},tooltip:{trigger:"item"},xAxis:{type:"category",data:["18-22","23-27","28-32","33-37","38-42","43-47","48+"]},yAxis:{type:"value"},series:[{data:[this.age0,this.age1,this.age2,this.age3,this.age4,this.age5,this.age6],type:"bar"}]},e&&a.setOption(e)},eduImg(){var e,t=document.getElementById("edu"),a=this.$echarts.init(t);e={title:{text:"学历",left:"center",top:"0"},tooltip:{trigger:"item",formatter:" {c} ({d}%)"},series:[{name:"Area Mode",type:"pie",radius:[40,200],center:["50%","50%"],roseType:"area",itemStyle:{borderRadius:5},data:[{value:this.edu2,name:"大专"},{value:this.edu5,name:"博士"},{value:this.edu4,name:"硕士"},{value:this.edu6,name:"博士后"},{value:this.edu3,name:"本科"},{value:this.edu1,name:"大专以下"}]}]},e&&a.setOption(e)},lineImg(){var e,t=document.getElementById("line"),a=this.$echarts.init(t);e={color:["#c0ebd7","#faff72"],title:{text:"简历情况",left:"center",top:"30px"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},legend:{},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:["简历情况"]},series:[{name:"已上传简历",type:"bar",data:[this.uploadCv]},{name:"已收藏简历",type:"bar",data:[this.collectCv]}]},e&&a.setOption(e)}},mounted(){this.getData()}},d=u,r=a(1001),o=(0,r.Z)(d,s,i,!1,null,"564eb6b1",null),g=o.exports}}]);
//# sourceMappingURL=115.3ada80c3.js.map