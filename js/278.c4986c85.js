"use strict";(self["webpackChunkresume_parsing"]=self["webpackChunkresume_parsing"]||[]).push([[278],{1278:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v("简历解析")]),e("div",{staticClass:"upload"},[e("el-upload",{ref:"fileInput",staticClass:"el-upload",attrs:{drag:"","on-change":t.fileChange,multiple:"",limit:"3 ","on-success":t.handleSuccess,"on-error":t.handleError,"auto-upload":!1,headers:{"Content-Type":""}}},[e("div",{staticClass:"el-upload__text",staticStyle:{transform:"translateY(80px) scale(0.9)"}},[t._v("将文件拖到此处，或"),e("em",[t._v("点击上传")])]),e("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("（支持格式：pdf|doc|docx|txt|odt|RTF|HTML|JPG等30多种格式, 最大8M,最多支持3个批量上传） ")])]),e("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:t.goPersonal}},[t._v("开始解析")])],1)])},l=[],r=(s(7658),s(5101)),o={name:"Analyze",methods:{async goPersonal(){try{await(0,r.vP)(this.id,this.selectedFile.raw);this.$router.push("/userInfo/upload")}catch(t){console.error(t)}},handleSuccess(t,e,s){console.log(t)},handleError(t,e,s){console.log(t,e)},async fileChange(t){this.selectedFile=t}},computed:{id(){return this.$store.state.user.id}},data(){return{selectedFile:null}}},n=o,i=s(1001),c=(0,i.Z)(n,a,l,!1,null,"6df16ad8",null),u=c.exports}}]);
//# sourceMappingURL=278.c4986c85.js.map