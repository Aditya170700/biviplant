import{C as h,o as n,f as o,b as i,w as d,a as s,t as l,u as e,j as p,F as b,k as f,H as y,L as r,n as _,z as k}from"./app.2d01b1f7.js";import{_ as v}from"./Header.f65a2d37.js";import{S as w}from"./Sidebar.2b2cde39.js";import{_ as g}from"./Footer.c0935864.js";const $=["content"],x=["content"],C={class:"page-content-wrapper"},S={class:"container"},j={class:"profile-wrapper-area py-3"},B={class:"card"},D={class:"card-body p-4"},L={class:"d-flex align-items-center justify-content-between mb-3"},N=s("span",{class:"h6"},"Daftar Alamat",-1),T=s("i",{class:"lni lni-plus me-2"},null,-1),V={class:"row"},z={key:0,class:"col-lg-12 py-2"},A=s("hr",null,null,-1),F=s("div",{class:"d-flex justify-content-center align-items-center mt-2"},[s("span",{class:"small"},"Belum ada alamat")],-1),H=[A,F],I=s("hr",null,null,-1),E={class:"d-flex justify-content-between align-items-center mt-2"},K={class:"small"},q=s("i",{class:"lni lni-pencil"},null,-1),G={key:0,class:_("btn btn-sm btn-success rounded-circle")},J=s("i",{class:"lni lni-checkmark"},null,-1),M=[J],O=["onClick"],P=s("i",{class:"lni lni-power-switch"},null,-1),Q=[P],R={class:"d-block small"},U={class:"d-block small"},W={class:"d-block small"},X=s("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),is={__name:"Index",setup(Y){let c=h();function u(a){k.Inertia.post(route("address.update.status",a),{_method:"put"})}return(a,Z)=>(n(),o("div",null,[i(e(y),null,{default:d(()=>[s("title",null,l(e(c).metaTitle),1),s("meta",{"head-key":"description",name:"description",content:e(c).metaDescription},null,8,$),s("meta",{"head-key":"keyword",name:"keyword",content:e(c).metaKeyword},null,8,x)]),_:1}),i(v),i(w),s("div",C,[s("div",S,[s("div",j,[s("div",B,[s("div",D,[s("div",L,[N,i(e(r),{href:a.route("address.create"),class:"btn btn-sm btn-success"},{default:d(()=>[T,p("Tambah ")]),_:1},8,["href"])]),s("div",V,[e(c).results.data.length<1?(n(),o("div",z,H)):(n(!0),o(b,{key:1},f(e(c).results.data,(t,m)=>(n(),o("div",{class:"col-lg-12 py-2",key:m},[I,s("div",E,[s("span",K,l(t.receiver),1),s("span",null,[i(e(r),{href:a.route("address.edit",t.id),class:"btn btn-sm btn-warning me-2 rounded-circle"},{default:d(()=>[q]),_:2},1032,["href"]),t.is_primary?(n(),o("button",G,M)):(n(),o("button",{key:1,class:_("btn btn-sm btn-light rounded-circle"),onClick:ss=>u(t.id)},Q,8,O))])]),s("span",R,l(t.phone),1),s("span",U,l(t.detail),1),s("span",W,l(`${t.subdistrict.name}, ${t.subdistrict.city.name}, ${t.subdistrict.city.province.name}, ${t.postal_code}`),1)]))),128))])])])])])]),X,i(g)]))}};export{is as default};
