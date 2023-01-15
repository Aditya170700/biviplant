import{L as g}from"./App.82b61e73.js";import{_ as p,L as v,g as w,h as y,c as l,w as k,z as x,a3 as P,I as f,o as a,a as o,q as V,e as d,E as c,j as n,G as S,k as U}from"./app.b8fedaf9.js";import{S as F}from"./SpinnerProcessing.c1fd1dc9.js";import{F as L}from"./FormText.2b858965.js";const T={components:{Layout:g,Link:v,SpinnerProcessing:F,FormText:L},props:{errors:Object,result:Object},setup(m){const s=w({...m.result,photo:"",password:"",password_confirmation:""}),t=y(m.result.profile_photo_path_url);function e(){let _=s.data();x.Inertia.post(route("admin.users.update",{id:m.result.id}),{_method:"put",..._})}return{form:s,submit:e,setPhoto:_=>{P(s.photo,t)},photo:t}}},C={class:"row"},N={class:"col-md-12 grid-margin"},j={class:"card"},B={class:"card-body"},M={class:"row"},E={class:"col-lg-6 mb-3"},I={class:"mb-3"},z=o("label",{for:"name",class:"form-label"},"Nama",-1),O={class:"col-lg-6 mb-3"},R=o("label",{for:"role",class:"form-label"},"Role",-1),q=o("option",{value:"admin"},"Admin",-1),A=o("option",{value:"customer"}," Customer ",-1),D=[q,A],G={class:"col-lg-6 mb-3"},K={class:"mb-3"},H=o("label",{for:"email",class:"form-label"},"E-Mail",-1),J={class:"col-lg-6 mb-3"},Q={class:"mb-3"},W=o("label",{for:"phone",class:"form-label"},"No Telepon",-1),X={class:"col-lg-6 mb-3"},Y={class:"mb-3"},Z=o("label",{for:"password",class:"form-label"},"Password",-1),$={class:"col-lg-6 mb-3"},oo={class:"mb-3"},so=o("label",{for:"password_confirmation",class:"form-label"},"Konfirmasi Password",-1),eo={class:"col-lg-6 mb-3"},to={class:"mb-3"},ro=o("label",{for:"photo",class:"form-label"},"Foto Profil",-1),lo={class:"mb-3"},ao=["src"],no={class:"col-lg-12"},io=["disabled"],mo={class:"d-flex justify-content-center align-items-center"},co=o("span",null,[o("i",{class:"fas fa-save me-2"}),U("Save")],-1);function _o(m,s,t,e,u,_){const i=f("FormText"),h=f("SpinnerProcessing"),b=f("Layout");return a(),l(b,{title:"Ubah Pengguna",typeButton:"back",href:m.route("admin.users.index")},{default:k(()=>[o("div",C,[o("div",N,[o("div",j,[o("div",B,[o("form",{onSubmit:s[8]||(s[8]=V((...r)=>e.submit&&e.submit(...r),["prevent"]))},[o("div",M,[o("div",E,[o("div",I,[z,d(o("input",{class:"form-control",id:"name","onUpdate:modelValue":s[0]||(s[0]=r=>e.form.name=r)},null,512),[[c,e.form.name]]),t.errors.name?(a(),l(i,{key:0,id:"name",message:t.errors.name},null,8,["message"])):n("",!0)])]),o("div",O,[R,d(o("select",{class:"form-control mb-3","onUpdate:modelValue":s[1]||(s[1]=r=>e.form.role=r),id:"role"},D,512),[[S,e.form.role]]),t.errors.role?(a(),l(i,{key:0,id:"role",message:t.errors.role},null,8,["message"])):n("",!0)]),o("div",G,[o("div",K,[H,d(o("input",{class:"form-control",id:"email","onUpdate:modelValue":s[2]||(s[2]=r=>e.form.email=r)},null,512),[[c,e.form.email]]),t.errors.email?(a(),l(i,{key:0,id:"email",message:t.errors.email},null,8,["message"])):n("",!0)])]),o("div",J,[o("div",Q,[W,d(o("input",{class:"form-control",id:"phone","onUpdate:modelValue":s[3]||(s[3]=r=>e.form.phone=r)},null,512),[[c,e.form.phone]]),t.errors.phone?(a(),l(i,{key:0,id:"phone",message:t.errors.phone},null,8,["message"])):n("",!0)])]),o("div",X,[o("div",Y,[Z,d(o("input",{class:"form-control",id:"password","onUpdate:modelValue":s[4]||(s[4]=r=>e.form.password=r)},null,512),[[c,e.form.password]]),t.errors.password?(a(),l(i,{key:0,id:"password",message:t.errors.password},null,8,["message"])):n("",!0)])]),o("div",$,[o("div",oo,[so,d(o("input",{class:"form-control",id:"password_confirmation","onUpdate:modelValue":s[5]||(s[5]=r=>e.form.password_confirmation=r)},null,512),[[c,e.form.password_confirmation]]),t.errors.password_confirmation?(a(),l(i,{key:0,id:"password_confirmation",message:t.errors.password_confirmation},null,8,["message"])):n("",!0)])]),o("div",eo,[o("div",to,[ro,o("div",lo,[o("img",{class:"img rounded fluid",alt:"",src:e.photo,style:{width:"200px"}},null,8,ao)]),o("input",{type:"file",class:"form-control",id:"photo",onChange:s[6]||(s[6]=(...r)=>e.setPhoto&&e.setPhoto(...r)),onInput:s[7]||(s[7]=r=>e.form.photo=r.target.files[0])},null,32),t.errors.photo?(a(),l(i,{key:0,id:"photo",message:t.errors.photo},null,8,["message"])):n("",!0)])]),o("div",no,[o("button",{class:"btn btn-primary btn-sm",disabled:e.form.processing},[o("div",mo,[e.form.processing?(a(),l(h,{key:0,color:"text-white",size:"sm",me:"me-2"})):n("",!0),co])],8,io)])])],32)])])])])]),_:1},8,["href"])}const go=p(T,[["render",_o]]);export{go as default};
