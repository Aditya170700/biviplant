import{C as b,h as y,U as S,f as a,b as o,w as _,u as n,a as s,j as g,F as k,l as v,o as l,t as i,H as N,k as w,L as p,n as h}from"./app.cbcfe82a.js";import{_ as J}from"./Header.5bb25340.js";import{S as O}from"./Sidebar.fecf842f.js";import{_ as $}from"./Footer.5bffbdd3.js";const x=["content"],C=["content"],B={class:"page-content-wrapper"},j={class:"container"},A={class:"profile-wrapper-area py-3"},I={class:"card"},V={class:"card-body p-4"},D={class:"d-flex align-items-center justify-content-between mb-3"},L=s("span",{class:"h6"},"Daftar Alamat",-1),T=s("i",{class:"lni lni-plus me-2"},null,-1),E={class:"row"},F={key:0,class:"col-lg-12 py-2"},H=s("hr",null,null,-1),z=s("div",{class:"d-flex justify-content-center align-items-center mt-2"},[s("span",{class:"small"},"Belum ada alamat")],-1),G=[H,z],K=s("hr",null,null,-1),M={class:"d-flex justify-content-between align-items-center mt-2"},U={class:"small"},q=s("i",{class:"lni lni-pencil"},null,-1),P={key:0,class:h("btn btn-sm btn-success rounded-circle")},Q=s("i",{class:"lni lni-checkmark"},null,-1),R=[Q],W=["onClick"],X=s("i",{class:"lni lni-power-switch"},null,-1),Y=[X],Z={class:"d-block small"},ss={class:"d-block small"},es={class:"d-block small"},ts=s("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),rs={__name:"Index",setup(ns){let r=b(),d=y(JSON.parse(localStorage.getItem("address"))),u=[];function f(c){d.value.forEach((m,e)=>{let t=JSON.parse(m);e==c?(t.is_primary=1,localStorage.setItem("primary_address",JSON.stringify(t))):t.is_primary=0,u.push(JSON.stringify(t))}),localStorage.setItem("address",JSON.stringify(u)),window.location.reload()}return S(()=>{document.title="Address Guest"}),(c,m)=>(l(),a("div",null,[o(n(N),null,{default:_(()=>[s("title",null,i(n(r).metaTitle),1),s("meta",{"head-key":"description",name:"description",content:n(r).metaDescription},null,8,x),s("meta",{"head-key":"keyword",name:"keyword",content:n(r).metaKeyword},null,8,C)]),_:1}),o(J),o(O),s("div",B,[s("div",j,[s("div",A,[s("div",I,[s("div",V,[s("div",D,[L,o(n(p),{href:c.route("address-guest.create"),class:"btn btn-sm btn-success"},{default:_(()=>[T,w("Tambah ")]),_:1},8,["href"])]),s("div",E,[n(d)==null?(l(),a("div",F,G)):g("",!0),(l(!0),a(k,null,v(n(d),(e,t)=>(l(),a("div",{class:"col-lg-12 py-2",key:t},[K,s("div",M,[s("span",U,i(JSON.parse(e).receiver),1),s("span",null,[o(n(p),{href:c.route("address-guest.edit",t),class:"btn btn-sm btn-warning me-2 rounded-circle"},{default:_(()=>[q]),_:2},1032,["href"]),JSON.parse(e).is_primary?(l(),a("button",P,R)):(l(),a("button",{key:1,class:h("btn btn-sm btn-light rounded-circle"),onClick:as=>f(t)},Y,8,W))])]),s("span",Z,i(JSON.parse(e).phone),1),s("span",ss,i(JSON.parse(e).detail),1),s("span",es,i(`${JSON.parse(e).subdistrict.name}, ${JSON.parse(e).subdistrict.city.name}, ${JSON.parse(e).subdistrict.city.province.name}, ${JSON.parse(e).postal_code}`),1)]))),128))])])])])])]),ts,o($)]))}};export{rs as default};
