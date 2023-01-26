import{L as b}from"./App.6a4e86de.js";import{_ as g,L as u,g as v,h as w,E as f,o as t,c as l,w as y,a as o,q as x,e as i,G as d,l as n,I as k,a4 as P,j as V}from"./app.1f43e56f.js";import{S}from"./SpinnerProcessing.9138c1af.js";import{F as T}from"./FormText.11bbd261.js";const C={components:{Layout:b,Link:u,SpinnerProcessing:S,FormText:T},props:{errors:Object},setup(){const m=v({name:"",role:"",email:"",phone:"",password:"",password_confirmation:"",photo:""}),e=w("");function _(){m.transform(c=>({...c})).post(route("admin.users.store"))}return{form:m,submit:_,setPhoto:c=>{P(m.photo,e)},photo:e}}},F={class:"row"},L={class:"col-md-12 grid-margin"},U={class:"card"},N={class:"card-body"},B={class:"row"},M={class:"col-lg-6 mb-3"},j={class:"mb-3"},E=o("label",{for:"name",class:"form-label"},"Nama",-1),I={class:"col-lg-6 mb-3"},R=o("label",{for:"role",class:"form-label"},"Role",-1),q=o("option",{value:"admin"},"Admin",-1),z=o("option",{value:"customer"}," Customer ",-1),A=[q,z],D={class:"col-lg-6 mb-3"},G={class:"mb-3"},K=o("label",{for:"email",class:"form-label"},"E-Mail",-1),O={class:"col-lg-6 mb-3"},H={class:"mb-3"},J=o("label",{for:"phone",class:"form-label"},"No Telepon",-1),Q={class:"col-lg-6 mb-3"},W={class:"mb-3"},X=o("label",{for:"password",class:"form-label"},"Password",-1),Y={class:"col-lg-6 mb-3"},Z={class:"mb-3"},$=o("label",{for:"password_confirmation",class:"form-label"},"Konfirmasi Password",-1),oo={class:"col-lg-6 mb-3"},so={class:"mb-3"},eo=o("label",{for:"photo",class:"form-label"},"Foto Profil",-1),ro={class:"mb-3"},to=["src"],lo={class:"col-lg-12"},no=["disabled"],ao={class:"d-flex justify-content-center align-items-center"},io=o("span",null,[o("i",{class:"fas fa-save me-2"}),V("Save")],-1);function mo(m,e,_,s,c,co){const a=f("FormText"),h=f("SpinnerProcessing"),p=f("Layout");return t(),l(p,{title:"Tambah Pengguna",typeButton:"back",href:m.route("admin.users.index")},{default:y(()=>[o("div",F,[o("div",L,[o("div",U,[o("div",N,[o("form",{onSubmit:e[8]||(e[8]=x((...r)=>s.submit&&s.submit(...r),["prevent"]))},[o("div",B,[o("div",M,[o("div",j,[E,i(o("input",{type:"text",class:"form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=r=>s.form.name=r)},null,512),[[d,s.form.name]]),s.form.errors.name?(t(),l(a,{key:0,id:"name",message:s.form.errors.name},null,8,["message"])):n("",!0)])]),o("div",I,[R,i(o("select",{class:"form-control mb-3","onUpdate:modelValue":e[1]||(e[1]=r=>s.form.role=r),id:"role"},A,512),[[k,s.form.role]]),s.form.errors.role?(t(),l(a,{key:0,id:"role",message:s.form.errors.role},null,8,["message"])):n("",!0)]),o("div",D,[o("div",G,[K,i(o("input",{class:"form-control",id:"email","onUpdate:modelValue":e[2]||(e[2]=r=>s.form.email=r)},null,512),[[d,s.form.email]]),s.form.errors.email?(t(),l(a,{key:0,id:"email",message:s.form.errors.email},null,8,["message"])):n("",!0)])]),o("div",O,[o("div",H,[J,i(o("input",{class:"form-control",id:"phone","onUpdate:modelValue":e[3]||(e[3]=r=>s.form.phone=r)},null,512),[[d,s.form.phone]]),s.form.errors.phone?(t(),l(a,{key:0,id:"phone",message:s.form.errors.phone},null,8,["message"])):n("",!0)])]),o("div",Q,[o("div",W,[X,i(o("input",{class:"form-control",id:"password","onUpdate:modelValue":e[4]||(e[4]=r=>s.form.password=r)},null,512),[[d,s.form.password]]),s.form.errors.password?(t(),l(a,{key:0,id:"password",message:s.form.errors.password},null,8,["message"])):n("",!0)])]),o("div",Y,[o("div",Z,[$,i(o("input",{class:"form-control",id:"password_confirmation","onUpdate:modelValue":e[5]||(e[5]=r=>s.form.password_confirmation=r)},null,512),[[d,s.form.password_confirmation]]),s.form.errors.password_confirmation?(t(),l(a,{key:0,id:"password_confirmation",message:s.form.errors.password_confirmation},null,8,["message"])):n("",!0)])]),o("div",oo,[o("div",so,[eo,o("div",ro,[o("img",{class:"img rounded fluid",alt:"",src:s.photo,style:{width:"200px"}},null,8,to)]),o("input",{type:"file",class:"form-control",id:"photo",onChange:e[6]||(e[6]=(...r)=>s.setPhoto&&s.setPhoto(...r)),onInput:e[7]||(e[7]=r=>s.form.photo=r.target.files[0])},null,32),s.form.errors.photo?(t(),l(a,{key:0,id:"photo",message:s.form.errors.photo},null,8,["message"])):n("",!0)])]),o("div",lo,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:s.form.processing},[o("div",ao,[s.form.processing?(t(),l(h,{key:0,color:"text-white",size:"sm",me:"me-2"})):n("",!0),io])],8,no)])])],32)])])])])]),_:1},8,["href"])}const bo=g(C,[["render",mo]]);export{bo as default};