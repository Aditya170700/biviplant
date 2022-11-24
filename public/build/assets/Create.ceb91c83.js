import{L as S}from"./App.2bf85953.js";import{_ as V,L as B,g as I,h as f,c as l,w as T,a2 as y,Y as k,a3 as N,I as b,o as i,a as o,q as L,e as c,E as d,j as m,b as C,k as h}from"./app.20070287.js";import{S as F}from"./SpinnerProcessing.68332544.js";import{F as U}from"./FormText.ad0c021c.js";import{C as M}from"./upload-3.b100974f.js";const P={components:{Layout:S,Link:B,SpinnerProcessing:F,FormText:U,crop:M},props:{errors:Object},setup(){const n=I({name:"",slug:"",meta_title:"",meta_description:"",meta_keyword:"",banner:"",icon:""}),s=f(""),p=f(!1),e=f(""),v=f(!1);function w(){n.transform(a=>({...a})).post(route("admin.categories.store"))}const t=a=>{y(n.banner,s)},_=a=>{y(n.icon,e)};function u(a,x){n.banner=k(a),s.value=a}function g(a,x){n.icon=k(a),e.value=a}function r(){n.slug=N(n.name)}return{form:n,submit:w,setBanner:t,setIcon:_,changeName:r,banner:s,showBannerCroper:p,cropBannerSuccess:u,icon:e,showIconCroper:v,cropIconSuccess:g}}},j={class:"row"},K={class:"col-md-12 grid-margin"},R={class:"card"},q={class:"card-body"},z={class:"row"},E={class:"col-lg-6 mb-3"},O={class:"mb-3"},Y=o("label",{for:"name",class:"form-label"},"Nama",-1),A={class:"col-lg-6 mb-3"},D={class:"mb-3"},G=o("label",{for:"slug",class:"form-label"},"Slug",-1),H={class:"col-lg-6 mb-3"},J={class:"mb-3"},Q=o("label",{for:"meta_title",class:"form-label"},"Meta Title",-1),W={class:"col-lg-6 mb-3"},X={class:"mb-3"},Z=o("label",{for:"meta_description",class:"form-label"},"Meta Description",-1),$={class:"col-lg-6 mb-3"},oo={class:"mb-3"},eo=o("label",{for:"meta_keyword",class:"form-label"},"Meta Keyword",-1),so={class:"col-lg-6 mb-3"},ro={class:"mb-3"},no=o("label",{for:"banner",class:"form-label"},"Banner",-1),to={class:"mb-3"},ao=["src"],lo=["disabled"],io=o("span",null,[o("i",{class:"fas fa-upload me-2"}),h("Pilih")],-1),mo=[io],co={class:"col-lg-6 mb-3"},_o={class:"mb-3"},fo=o("label",{for:"icon",class:"form-label"},"Ikon",-1),bo={class:"mb-3"},uo=["src"],go=["disabled"],ho=o("span",null,[o("i",{class:"fas fa-upload me-2"}),h("Pilih")],-1),po=[ho],vo={class:"col-lg-12"},wo=["disabled"],yo={class:"d-flex justify-content-center align-items-center"},ko=o("span",null,[o("i",{class:"fas fa-save me-2"}),h("Simpan")],-1);function Co(n,s,p,e,v,w){const t=b("FormText"),_=b("crop"),u=b("SpinnerProcessing"),g=b("Layout");return i(),l(g,{title:"Tambah Kategori",typeButton:"back",href:n.route("admin.categories.index")},{default:T(()=>[o("div",j,[o("div",K,[o("div",R,[o("div",q,[o("form",{onSubmit:s[10]||(s[10]=L((...r)=>e.submit&&e.submit(...r),["prevent"]))},[o("div",z,[o("div",E,[o("div",O,[Y,c(o("input",{class:"form-control",id:"name","onUpdate:modelValue":s[0]||(s[0]=r=>e.form.name=r),onKeyup:s[1]||(s[1]=(...r)=>e.changeName&&e.changeName(...r))},null,544),[[d,e.form.name]]),e.form.errors.name?(i(),l(t,{key:0,id:"name",message:e.form.errors.name},null,8,["message"])):m("",!0)])]),o("div",A,[o("div",D,[G,c(o("input",{class:"form-control",id:"slug","onUpdate:modelValue":s[2]||(s[2]=r=>e.form.slug=r)},null,512),[[d,e.form.slug]]),e.form.errors.slug?(i(),l(t,{key:0,id:"slug",message:e.form.errors.slug},null,8,["message"])):m("",!0)])]),o("div",H,[o("div",J,[Q,c(o("input",{class:"form-control",id:"meta_title","onUpdate:modelValue":s[3]||(s[3]=r=>e.form.meta_title=r)},null,512),[[d,e.form.meta_title]]),e.form.errors.meta_title?(i(),l(t,{key:0,id:"meta_title",message:e.form.errors.meta_title},null,8,["message"])):m("",!0)])]),o("div",W,[o("div",X,[Z,c(o("textarea",{class:"form-control",id:"meta_description",rows:"3","onUpdate:modelValue":s[4]||(s[4]=r=>e.form.meta_description=r)},null,512),[[d,e.form.meta_description]]),e.form.errors.meta_description?(i(),l(t,{key:0,id:"meta_description",message:e.form.errors.meta_description},null,8,["message"])):m("",!0)])]),o("div",$,[o("div",oo,[eo,c(o("textarea",{class:"form-control",id:"meta_keyword",rows:"3","onUpdate:modelValue":s[5]||(s[5]=r=>e.form.meta_keyword=r)},null,512),[[d,e.form.meta_keyword]]),e.form.errors.meta_keyword?(i(),l(t,{key:0,id:"meta_keyword",message:e.form.errors.meta_keyword},null,8,["message"])):m("",!0)])]),o("div",so,[o("div",ro,[no,C(_,{field:"img",langType:"en",onCropSuccess:e.cropBannerSuccess,width:744,height:300,modelValue:e.showBannerCroper,"onUpdate:modelValue":s[6]||(s[6]=r=>e.showBannerCroper=r)},null,8,["onCropSuccess","modelValue"]),o("div",to,[o("img",{class:"img rounded fluid",alt:"",src:e.banner,style:{width:"200px"}},null,8,ao)]),o("a",{onClick:s[7]||(s[7]=r=>e.showBannerCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:e.form.processing},mo,8,lo),e.form.errors.banner?(i(),l(t,{key:0,id:"banner",message:e.form.errors.banner},null,8,["message"])):m("",!0)])]),o("div",co,[o("div",_o,[fo,C(_,{field:"img",langType:"en",onCropSuccess:e.cropIconSuccess,width:50,height:50,modelValue:e.showIconCroper,"onUpdate:modelValue":s[8]||(s[8]=r=>e.showIconCroper=r)},null,8,["onCropSuccess","modelValue"]),o("div",bo,[o("img",{class:"img rounded fluid",alt:"",src:e.icon,style:{width:"50px"}},null,8,uo)]),o("a",{onClick:s[9]||(s[9]=r=>e.showIconCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:e.form.processing},po,8,go),e.form.errors.icon?(i(),l(t,{key:0,id:"icon",message:e.form.errors.icon},null,8,["message"])):m("",!0)])]),o("div",vo,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:e.form.processing},[o("div",yo,[e.form.processing?(i(),l(u,{key:0,color:"text-white",size:"sm",me:"me-2"})):m("",!0),ko])],8,wo)])])],32)])])])])]),_:1},8,["href"])}const To=V(P,[["render",Co]]);export{To as default};
