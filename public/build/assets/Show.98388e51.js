import{L as l}from"./App.b377252e.js";import{L as i,c as a,w as _,J as d,o as n,a as s,t}from"./app.982608ae.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";const h={components:{Layout:l,Link:i},props:{errors:Object,result:Object}},m={class:"row"},u={class:"col-md-12 grid-margin"},v={class:"card"},g={class:"card-body"},f={class:"row mt-3"},p=s("div",{class:"col-lg-2"},"Nama",-1),w={class:"col-lg-10"},y={class:"row mt-3"},L=s("div",{class:"col-lg-2"},"Role",-1),x={class:"col-lg-10"},b={class:"row mt-3"},k=s("div",{class:"col-lg-2"},"E-Mail",-1),B={class:"col-lg-10"},N={class:"row mt-3"},j=s("div",{class:"col-lg-2"},"No Telepon",-1),C={class:"col-lg-10"},D={class:"row mt-3"},O=s("div",{class:"col-lg-2"},"Foto Profil",-1),P={class:"col-lg-10"},S=["src"];function E(c,F,o,J,M,R){const e=d("Layout");return n(),a(e,{title:"Detail Pengguna",typeButton:"back",href:c.route("admin.users.index")},{default:_(()=>[s("div",m,[s("div",u,[s("div",v,[s("div",g,[s("div",f,[p,s("div",w,": "+t(o.result.name),1)]),s("div",y,[L,s("div",x,": "+t(o.result.role),1)]),s("div",b,[k,s("div",B,": "+t(o.result.email),1)]),s("div",N,[j,s("div",C,": "+t(o.result.phone),1)]),s("div",D,[O,s("div",P,[s("img",{src:o.result.profile_photo_path_url,alt:"",style:{width:"200px"}},null,8,S)])])])])])])]),_:1},8,["href"])}const z=r(h,[["render",E]]);export{z as default};
