import{h as m,f as t,a as s,b as f,w as b,u as o,F as y,l as v,o as a,L as g,t as c,n as p}from"./app.b8fedaf9.js";const k={class:"offcanvas offcanvas-start suha-offcanvas-wrap",tabindex:"-1",id:"addressModal","aria-labelledby":"addressModalLabel",style:{background:"#f1f5f0 !important"}},S={class:"offcanvas-body"},N={class:"profile-wrapper-area"},J={class:"card"},O={class:"card-body p-4"},w={class:"d-flex align-items-center justify-content-between mb-3"},x=s("span",{class:"h6"},"Daftar Alamat",-1),C=s("i",{class:"lni lni-plus"},null,-1),$=s("button",{class:"btn btn-sm btn-light","data-bs-dismiss":"offcanvas","aria-label":"Close"},[s("i",{class:"lni lni-close"})],-1),A={class:"row"},B={key:0,class:"col-lg-12 py-2"},L=s("hr",null,null,-1),M=s("div",{class:"d-flex justify-content-center align-items-center mt-2"},[s("span",{class:"small"},"Belum ada alamat")],-1),j=[L,M],I=s("hr",null,null,-1),D={class:"d-flex justify-content-between align-items-center mt-2"},E={class:"small"},F=["onClick"],G=s("i",{class:"lni lni-checkmark"},null,-1),V=[G],z=["onClick"],q=s("i",{class:"lni lni-power-switch"},null,-1),H=[q],K={class:"d-block small"},P={class:"d-block small"},Q={class:"d-block small"},U={__name:"AddressModalGuest",setup(R){let n=m(JSON.parse(localStorage.getItem("address"))),d=[];function _(i){n.value.forEach((u,l)=>{let e=JSON.parse(u);l==i?(e.is_primary=1,localStorage.setItem("primary_address",JSON.stringify(e))):e.is_primary=0,d.push(JSON.stringify(e))}),localStorage.setItem("address",JSON.stringify(d)),window.location.reload()}return(i,u)=>{var l;return a(),t("div",k,[s("div",S,[s("div",N,[s("div",J,[s("div",O,[s("div",w,[x,s("div",null,[f(o(g),{href:i.route("address-guest.create"),class:"btn btn-sm btn-success me-2"},{default:b(()=>[C]),_:1},8,["href"]),$])]),s("div",A,[!o(n)||((l=o(n))==null?void 0:l.length)<1?(a(),t("div",B,j)):(a(!0),t(y,{key:1},v(o(n),(e,r)=>(a(),t("div",{class:"col-lg-12 py-2",key:r},[I,s("div",D,[s("span",E,c(JSON.parse(e).receiver),1),s("span",null,[JSON.parse(e).is_primary?(a(),t("button",{key:0,class:p("btn btn-sm btn-success rounded-circle"),onClick:h=>_(r)},V,8,F)):(a(),t("button",{key:1,class:p("btn btn-sm btn-light rounded-circle"),onClick:h=>_(r)},H,8,z))])]),s("span",K,c(JSON.parse(e).phone),1),s("span",P,c(JSON.parse(e).detail),1),s("span",Q,c(`${JSON.parse(e).subdistrict.name}, ${JSON.parse(e).subdistrict.city.name}, ${JSON.parse(e).subdistrict.city.province.name}, ${JSON.parse(e).postal_code}`),1)]))),128))])])])])])])}}};export{U as default};
