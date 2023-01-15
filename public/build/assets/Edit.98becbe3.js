import{L as V}from"./App.a6a0540d.js";import{_ as B,L as I,g as N,h as b,c as l,w as T,z as L,a3 as p,Z as k,a4 as U,I as g,o as i,a as e,q as F,e as m,E as _,j as c,b as C,k as w}from"./app.e28463fd.js";import{S as M}from"./SpinnerProcessing.e6460438.js";import{F as P}from"./FormText.52e5ff48.js";import{C as j}from"./upload-3.101d19b6.js";const K={components:{Layout:V,Link:I,SpinnerProcessing:M,FormText:P,crop:j},props:{errors:Object,result:Object},setup(d){const s=N(d.result),n=b(d.result.banner_url),o=b(!1),f=b(d.result.icon_url),y=b(!1);function r(){let a=s.data();L.Inertia.post(route("admin.categories.update",{id:d.result.id}),{_method:"put",...a})}const u=a=>{p(s.banner,n)},h=a=>{p(s.icon,f)};function v(a,S){s.banner=k(a),n.value=a}function t(a,S){s.icon=k(a),f.value=a}function x(){s.slug=U(s.name)}return{form:s,submit:r,setBanner:u,setIcon:h,changeName:x,banner:n,showBannerCroper:o,cropBannerSuccess:v,icon:f,showIconCroper:y,cropIconSuccess:t}}},z={class:"row"},E={class:"col-md-12 grid-margin"},O={class:"card"},R={class:"card-body"},q={class:"row"},Z={class:"col-lg-6 mb-3"},A={class:"mb-3"},D=e("label",{for:"name",class:"form-label"},"Nama",-1),G={class:"col-lg-6 mb-3"},H={class:"mb-3"},J=e("label",{for:"slug",class:"form-label"},"Slug",-1),Q={class:"col-lg-6 mb-3"},W={class:"mb-3"},X=e("label",{for:"meta_title",class:"form-label"},"Meta Title",-1),Y={class:"col-lg-6 mb-3"},$={class:"mb-3"},ee=e("label",{for:"meta_description",class:"form-label"},"Meta Description",-1),oe={class:"col-lg-6 mb-3"},se={class:"mb-3"},te=e("label",{for:"meta_keyword",class:"form-label"},"Meta Keyword",-1),ne={class:"col-lg-6 mb-3"},re={class:"mb-3"},ae=e("label",{for:"banner",class:"form-label"},"Banner",-1),le={class:"mb-3"},ie=["src"],ce=["disabled"],de=e("span",null,[e("i",{class:"fas fa-upload me-2"}),w("Pilih")],-1),me=[de],_e={class:"col-lg-6 mb-3"},fe={class:"mb-3"},ue=e("label",{for:"icon",class:"form-label"},"Ikon",-1),be={class:"mb-3"},ge=["src"],he=["disabled"],ve=e("span",null,[e("i",{class:"fas fa-upload me-2"}),w("Pilih")],-1),we=[ve],ye={class:"col-lg-12"},pe=["disabled"],ke={class:"d-flex justify-content-center align-items-center"},Ce=e("span",null,[e("i",{class:"fas fa-save me-2"}),w("Simpan")],-1);function xe(d,s,n,o,f,y){const r=g("FormText"),u=g("crop"),h=g("SpinnerProcessing"),v=g("Layout");return i(),l(v,{title:"Ubah Kategori",typeButton:"back",href:d.route("admin.categories.index")},{default:T(()=>[e("div",z,[e("div",E,[e("div",O,[e("div",R,[e("form",{onSubmit:s[10]||(s[10]=F((...t)=>o.submit&&o.submit(...t),["prevent"]))},[e("div",q,[e("div",Z,[e("div",A,[D,m(e("input",{class:"form-control",id:"name","onUpdate:modelValue":s[0]||(s[0]=t=>o.form.name=t),onKeyup:s[1]||(s[1]=(...t)=>o.changeName&&o.changeName(...t))},null,544),[[_,o.form.name]]),n.errors.name?(i(),l(r,{key:0,id:"name",message:n.errors.name},null,8,["message"])):c("",!0)])]),e("div",G,[e("div",H,[J,m(e("input",{class:"form-control",id:"slug","onUpdate:modelValue":s[2]||(s[2]=t=>o.form.slug=t)},null,512),[[_,o.form.slug]]),o.form.errors.slug?(i(),l(r,{key:0,id:"slug",message:o.form.errors.slug},null,8,["message"])):c("",!0)])]),e("div",Q,[e("div",W,[X,m(e("input",{class:"form-control",id:"meta_title","onUpdate:modelValue":s[3]||(s[3]=t=>o.form.meta_title=t)},null,512),[[_,o.form.meta_title]]),n.errors.meta_title?(i(),l(r,{key:0,id:"meta_title",message:n.errors.meta_title},null,8,["message"])):c("",!0)])]),e("div",Y,[e("div",$,[ee,m(e("textarea",{class:"form-control",id:"meta_description",rows:"3","onUpdate:modelValue":s[4]||(s[4]=t=>o.form.meta_description=t)},null,512),[[_,o.form.meta_description]]),n.errors.meta_description?(i(),l(r,{key:0,id:"meta_description",message:n.errors.meta_description},null,8,["message"])):c("",!0)])]),e("div",oe,[e("div",se,[te,m(e("textarea",{class:"form-control",id:"meta_keyword",rows:"3","onUpdate:modelValue":s[5]||(s[5]=t=>o.form.meta_keyword=t)},null,512),[[_,o.form.meta_keyword]]),n.errors.meta_keyword?(i(),l(r,{key:0,id:"meta_keyword",message:n.errors.meta_keyword},null,8,["message"])):c("",!0)])]),e("div",ne,[e("div",re,[ae,C(u,{field:"img",langType:"en",onCropSuccess:o.cropBannerSuccess,width:744,height:300,modelValue:o.showBannerCroper,"onUpdate:modelValue":s[6]||(s[6]=t=>o.showBannerCroper=t)},null,8,["onCropSuccess","modelValue"]),e("div",le,[e("img",{class:"img rounded fluid",alt:"",src:o.banner,style:{width:"200px"}},null,8,ie)]),e("a",{onClick:s[7]||(s[7]=t=>o.showBannerCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:o.form.processing},me,8,ce),o.form.errors.banner?(i(),l(r,{key:0,id:"banner",message:o.form.errors.banner},null,8,["message"])):c("",!0)])]),e("div",_e,[e("div",fe,[ue,C(u,{field:"img",langType:"en",onCropSuccess:o.cropIconSuccess,width:50,height:50,modelValue:o.showIconCroper,"onUpdate:modelValue":s[8]||(s[8]=t=>o.showIconCroper=t)},null,8,["onCropSuccess","modelValue"]),e("div",be,[e("img",{class:"img rounded fluid",alt:"",src:o.icon,style:{width:"50px"}},null,8,ge)]),e("a",{onClick:s[9]||(s[9]=t=>o.showIconCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:o.form.processing},we,8,he),o.form.errors.icon?(i(),l(r,{key:0,id:"icon",message:o.form.errors.icon},null,8,["message"])):c("",!0)])]),e("div",ye,[e("button",{class:"btn btn-primary btn-sm",disabled:o.form.processing},[e("div",ke,[o.form.processing?(i(),l(h,{key:0,color:"text-white",size:"sm",me:"me-2"})):c("",!0),Ce])],8,pe)])])],32)])])])])]),_:1},8,["href"])}const Te=B(K,[["render",xe]]);export{Te as default};
