import{L as k}from"./App.b377252e.js";import{L as w,g as y,h as u,c as r,w as x,X as C,J as d,o as n,a as o,q as S,e as m,E as _,j as c,b as V,k as p}from"./app.982608ae.js";import{S as L}from"./SpinnerProcessing.77a69ef5.js";import{F as T}from"./FormText.6c4399ca.js";import{C as B}from"./upload-3.d01592e4.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";const N={components:{Layout:k,Link:w,SpinnerProcessing:L,FormText:T,crop:B},props:{errors:Object},setup(){const l=y({title:"",sub_title:"",link:"",path:""}),e=u(""),f=u(!1);function s(){l.transform(i=>({...i})).post(route("admin.banners.store"))}function b(i,a){l.path=C(i),e.value=i}return{form:l,submit:s,banner:e,cropSuccess:b,showCroper:f}}},P={class:"row"},U={class:"col-md-12 grid-margin"},j={class:"card"},J={class:"card-body"},M={class:"row"},q={class:"col-lg-6 mb-3"},z={class:"mb-3"},E=o("label",{for:"title",class:"form-label"},"Judul",-1),O={class:"col-lg-6 mb-3"},R={class:"mb-3"},X=o("label",{for:"sub_title",class:"form-label"},"Sub Judul",-1),A={class:"col-lg-6 mb-3"},D={class:"mb-3"},G=o("label",{for:"link",class:"form-label"},"Link",-1),H={class:"col-lg-6 mb-3"},I={class:"mb-3"},K=o("label",{for:"banner",class:"form-label"},"Banner",-1),Q={class:"mb-3"},W=["src"],Y=["disabled"],Z=o("span",null,[o("i",{class:"fas fa-upload me-2"}),p("Pilih")],-1),$=[Z],oo={class:"col-lg-12"},so=["disabled"],eo={class:"d-flex justify-content-center align-items-center"},to=o("span",null,[o("i",{class:"fas fa-save me-2"}),p("Simpan")],-1);function ro(l,e,f,s,b,i){const a=d("FormText"),h=d("crop"),g=d("SpinnerProcessing"),v=d("Layout");return n(),r(v,{title:"Tambah Banner",typeButton:"back",href:l.route("admin.banners.index")},{default:x(()=>[o("div",P,[o("div",U,[o("div",j,[o("div",J,[o("form",{onSubmit:e[5]||(e[5]=S((...t)=>s.submit&&s.submit(...t),["prevent"]))},[o("div",M,[o("div",q,[o("div",z,[E,m(o("input",{class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>s.form.title=t)},null,512),[[_,s.form.title]]),s.form.errors.title?(n(),r(a,{key:0,id:"title",message:s.form.errors.title},null,8,["message"])):c("",!0)])]),o("div",O,[o("div",R,[X,m(o("input",{class:"form-control",id:"sub_title","onUpdate:modelValue":e[1]||(e[1]=t=>s.form.sub_title=t)},null,512),[[_,s.form.sub_title]]),s.form.errors.sub_title?(n(),r(a,{key:0,id:"sub_title",message:s.form.errors.sub_title},null,8,["message"])):c("",!0)])]),o("div",A,[o("div",D,[G,m(o("textarea",{class:"form-control",id:"link",rows:"3","onUpdate:modelValue":e[2]||(e[2]=t=>s.form.link=t)},null,512),[[_,s.form.link]]),s.form.errors.link?(n(),r(a,{key:0,id:"link",message:s.form.errors.link},null,8,["message"])):c("",!0)])]),o("div",H,[o("div",I,[K,V(h,{field:"img",langType:"en",onCropSuccess:s.cropSuccess,width:744,height:300,modelValue:s.showCroper,"onUpdate:modelValue":e[3]||(e[3]=t=>s.showCroper=t)},null,8,["onCropSuccess","modelValue"]),o("div",Q,[o("img",{class:"img rounded fluid",alt:"",src:s.banner,style:{width:"200px"}},null,8,W)]),o("a",{onClick:e[4]||(e[4]=t=>s.showCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:s.form.processing},$,8,Y),s.form.errors.path?(n(),r(a,{key:0,id:"banner",message:s.form.errors.path},null,8,["message"])):c("",!0)])]),o("div",oo,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:s.form.processing},[o("div",eo,[s.form.processing?(n(),r(g,{key:0,color:"text-white",size:"sm",me:"me-2"})):c("",!0),to])],8,so)])])],32)])])])])]),_:1},8,["href"])}const _o=F(N,[["render",ro]]);export{_o as default};