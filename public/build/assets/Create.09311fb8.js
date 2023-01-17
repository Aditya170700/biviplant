import{L as k}from"./App.c3b8bd99.js";import{_ as w,L as y,g as x,h as u,E as d,o as r,c as n,w as C,a as o,q as S,e as m,G as _,l as c,b as V,$ as L,j as h}from"./app.2d01b1f7.js";import{S as T}from"./SpinnerProcessing.a1ced27b.js";import{F as B}from"./FormText.5495bd75.js";import{C as F}from"./upload-3.dcf7f7a5.js";const N={components:{Layout:k,Link:y,SpinnerProcessing:T,FormText:B,crop:F},props:{errors:Object},setup(){const l=x({title:"",sub_title:"",link:"",path:""}),e=u(""),f=u(!1);function s(){l.transform(i=>({...i})).post(route("admin.banners.store"))}function b(i,a){l.path=L(i),e.value=i}return{form:l,submit:s,banner:e,cropSuccess:b,showCroper:f}}},P={class:"row"},U={class:"col-md-12 grid-margin"},j={class:"card"},J={class:"card-body"},M={class:"row"},q={class:"col-lg-6 mb-3"},z={class:"mb-3"},E=o("label",{for:"title",class:"form-label"},"Judul",-1),G={class:"col-lg-6 mb-3"},O={class:"mb-3"},R=o("label",{for:"sub_title",class:"form-label"},"Sub Judul",-1),A={class:"col-lg-6 mb-3"},D={class:"mb-3"},H=o("label",{for:"link",class:"form-label"},"Link",-1),I={class:"col-lg-6 mb-3"},K={class:"mb-3"},Q=o("label",{for:"banner",class:"form-label"},"Banner",-1),W={class:"mb-3"},X=["src"],Y=["disabled"],Z=o("span",null,[o("i",{class:"fas fa-upload me-2"}),h("Pilih")],-1),$=[Z],oo={class:"col-lg-12"},so=["disabled"],eo={class:"d-flex justify-content-center align-items-center"},to=o("span",null,[o("i",{class:"fas fa-save me-2"}),h("Simpan")],-1);function ro(l,e,f,s,b,i){const a=d("FormText"),p=d("crop"),g=d("SpinnerProcessing"),v=d("Layout");return r(),n(v,{title:"Tambah Banner",typeButton:"back",href:l.route("admin.banners.index")},{default:C(()=>[o("div",P,[o("div",U,[o("div",j,[o("div",J,[o("form",{onSubmit:e[5]||(e[5]=S((...t)=>s.submit&&s.submit(...t),["prevent"]))},[o("div",M,[o("div",q,[o("div",z,[E,m(o("input",{class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>s.form.title=t)},null,512),[[_,s.form.title]]),s.form.errors.title?(r(),n(a,{key:0,id:"title",message:s.form.errors.title},null,8,["message"])):c("",!0)])]),o("div",G,[o("div",O,[R,m(o("input",{class:"form-control",id:"sub_title","onUpdate:modelValue":e[1]||(e[1]=t=>s.form.sub_title=t)},null,512),[[_,s.form.sub_title]]),s.form.errors.sub_title?(r(),n(a,{key:0,id:"sub_title",message:s.form.errors.sub_title},null,8,["message"])):c("",!0)])]),o("div",A,[o("div",D,[H,m(o("textarea",{class:"form-control",id:"link",rows:"3","onUpdate:modelValue":e[2]||(e[2]=t=>s.form.link=t)},null,512),[[_,s.form.link]]),s.form.errors.link?(r(),n(a,{key:0,id:"link",message:s.form.errors.link},null,8,["message"])):c("",!0)])]),o("div",I,[o("div",K,[Q,V(p,{field:"img",langType:"en",onCropSuccess:s.cropSuccess,width:744,height:300,modelValue:s.showCroper,"onUpdate:modelValue":e[3]||(e[3]=t=>s.showCroper=t)},null,8,["onCropSuccess","modelValue"]),o("div",W,[o("img",{class:"img rounded fluid",alt:"",src:s.banner,style:{width:"200px"}},null,8,X)]),o("a",{onClick:e[4]||(e[4]=t=>s.showCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:s.form.processing},$,8,Y),s.form.errors.path?(r(),n(a,{key:0,id:"banner",message:s.form.errors.path},null,8,["message"])):c("",!0)])]),o("div",oo,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:s.form.processing},[o("div",eo,[s.form.processing?(r(),n(g,{key:0,color:"text-white",size:"sm",me:"me-2"})):c("",!0),to])],8,so)])])],32)])])])])]),_:1},8,["href"])}const mo=w(N,[["render",ro]]);export{mo as default};
