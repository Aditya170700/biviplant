import{C as b,h as y,V as S,o as a,f as o,b as l,w as _,a as s,t as i,u as n,j as g,l as k,F as v,k as N,H as w,L as p,n as h}from"./app.e8be5593.js";import{_ as J}from"./Header.a8ad852f.js";import{S as O}from"./Sidebar.64aa91fc.js";import{_ as $}from"./Footer.68cceae2.js";const x=["content"],C=["content"],B={class:"page-content-wrapper"},V={class:"container"},j={class:"profile-wrapper-area py-3"},A={class:"card"},I={class:"card-body p-4"},D={class:"d-flex align-items-center justify-content-between mb-3"},L=s("span",{class:"h6"},"Daftar Alamat",-1),T=s("i",{class:"lni lni-plus me-2"},null,-1),E={class:"row"},F={key:0,class:"col-lg-12 py-2"},H=s("hr",null,null,-1),z=s("div",{class:"d-flex justify-content-center align-items-center mt-2"},[s("span",{class:"small"},"Belum ada alamat")],-1),G=[H,z],K=s("hr",null,null,-1),M={class:"d-flex justify-content-between align-items-center mt-2"},q={class:"small"},P=s("i",{class:"lni lni-pencil"},null,-1),Q={key:0,class:h("btn btn-sm btn-success rounded-circle")},R=s("i",{class:"lni lni-checkmark"},null,-1),U=[R],W=["onClick"],X=s("i",{class:"lni lni-power-switch"},null,-1),Y=[X],Z={class:"d-block small"},ss={class:"d-block small"},es={class:"d-block small"},ts=s("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),rs={__name:"Index",setup(ns){let r=b(),d=y(JSON.parse(localStorage.getItem("address"))),u=[];function f(c){d.value.forEach((m,e)=>{let t=JSON.parse(m);e==c?(t.is_primary=1,localStorage.setItem("primary_address",JSON.stringify(t))):t.is_primary=0,u.push(JSON.stringify(t))}),localStorage.setItem("address",JSON.stringify(u)),window.location.reload()}return S(()=>{document.title="Address Guest"}),(c,m)=>(a(),o("div",null,[l(n(w),null,{default:_(()=>[s("title",null,i(n(r).metaTitle),1),s("meta",{"head-key":"description",name:"description",content:n(r).metaDescription},null,8,x),s("meta",{"head-key":"keyword",name:"keyword",content:n(r).metaKeyword},null,8,C)]),_:1}),l(J),l(O),s("div",B,[s("div",V,[s("div",j,[s("div",A,[s("div",I,[s("div",D,[L,l(n(p),{href:c.route("address-guest.create"),class:"btn btn-sm btn-success"},{default:_(()=>[T,g("Tambah ")]),_:1},8,["href"])]),s("div",E,[n(d)==null?(a(),o("div",F,G)):k("",!0),(a(!0),o(v,null,N(n(d),(e,t)=>(a(),o("div",{class:"col-lg-12 py-2",key:t},[K,s("div",M,[s("span",q,i(JSON.parse(e).receiver),1),s("span",null,[l(n(p),{href:c.route("address-guest.edit",t),class:"btn btn-sm btn-warning me-2 rounded-circle"},{default:_(()=>[P]),_:2},1032,["href"]),JSON.parse(e).is_primary?(a(),o("button",Q,U)):(a(),o("button",{key:1,class:h("btn btn-sm btn-light rounded-circle"),onClick:as=>f(t)},Y,8,W))])]),s("span",Z,i(JSON.parse(e).phone),1),s("span",ss,i(JSON.parse(e).detail),1),s("span",es,i(`${JSON.parse(e).subdistrict.name}, ${JSON.parse(e).subdistrict.city.name}, ${JSON.parse(e).subdistrict.city.province.name}, ${JSON.parse(e).postal_code}`),1)]))),128))])])])])])]),ts,l($)]))}};export{rs as default};