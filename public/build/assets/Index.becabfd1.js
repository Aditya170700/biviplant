import{C as h,f as n,b as o,w as d,u as e,a as s,F as p,l as b,o as i,t as c,H as f,k as y,L as r,n as _,z as k}from"./app.b8fedaf9.js";import{_ as v}from"./Header.ff8c1874.js";import{S as w}from"./Sidebar.aa2bc0f3.js";import{_ as g}from"./Footer.635d6cf7.js";const $=["content"],x=["content"],C={class:"page-content-wrapper"},S={class:"container"},B={class:"profile-wrapper-area py-3"},j={class:"card"},D={class:"card-body p-4"},L={class:"d-flex align-items-center justify-content-between mb-3"},N=s("span",{class:"h6"},"Daftar Alamat",-1),T=s("i",{class:"lni lni-plus me-2"},null,-1),V={class:"row"},z={key:0,class:"col-lg-12 py-2"},A=s("hr",null,null,-1),F=s("div",{class:"d-flex justify-content-center align-items-center mt-2"},[s("span",{class:"small"},"Belum ada alamat")],-1),H=[A,F],I=s("hr",null,null,-1),E={class:"d-flex justify-content-between align-items-center mt-2"},K={class:"small"},q=s("i",{class:"lni lni-pencil"},null,-1),G={key:0,class:_("btn btn-sm btn-success rounded-circle")},J=s("i",{class:"lni lni-checkmark"},null,-1),M=[J],O=["onClick"],P=s("i",{class:"lni lni-power-switch"},null,-1),Q=[P],R={class:"d-block small"},U={class:"d-block small"},W={class:"d-block small"},X=s("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),is={__name:"Index",setup(Y){let l=h();function u(a){k.Inertia.post(route("address.update.status",a),{_method:"put"})}return(a,Z)=>(i(),n("div",null,[o(e(f),null,{default:d(()=>[s("title",null,c(e(l).metaTitle),1),s("meta",{"head-key":"description",name:"description",content:e(l).metaDescription},null,8,$),s("meta",{"head-key":"keyword",name:"keyword",content:e(l).metaKeyword},null,8,x)]),_:1}),o(v),o(w),s("div",C,[s("div",S,[s("div",B,[s("div",j,[s("div",D,[s("div",L,[N,o(e(r),{href:a.route("address.create"),class:"btn btn-sm btn-success"},{default:d(()=>[T,y("Tambah ")]),_:1},8,["href"])]),s("div",V,[e(l).results.data.length<1?(i(),n("div",z,H)):(i(!0),n(p,{key:1},b(e(l).results.data,(t,m)=>(i(),n("div",{class:"col-lg-12 py-2",key:m},[I,s("div",E,[s("span",K,c(t.receiver),1),s("span",null,[o(e(r),{href:a.route("address.edit",t.id),class:"btn btn-sm btn-warning me-2 rounded-circle"},{default:d(()=>[q]),_:2},1032,["href"]),t.is_primary?(i(),n("button",G,M)):(i(),n("button",{key:1,class:_("btn btn-sm btn-light rounded-circle"),onClick:ss=>u(t.id)},Q,8,O))])]),s("span",R,c(t.phone),1),s("span",U,c(t.detail),1),s("span",W,c(`${t.subdistrict.name}, ${t.subdistrict.city.name}, ${t.subdistrict.city.province.name}, ${t.postal_code}`),1)]))),128))])])])])])]),X,o(g)]))}};export{is as default};
