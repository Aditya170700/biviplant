import{h as l,f as c,b as a,w as k,u as x,a as t,F as y,l as w,k as C,z as $,o as d,t as p,H as b,n as i,e as S,E as z}from"./app.8df216ad.js";import{_ as V}from"./Header.4ab38aca.js";import{S as B}from"./Sidebar.98772fb9.js";import{_ as D}from"./Footer.f08eeea0.js";const N=["content"],T=["content"],E={class:"page-content-wrapper bg-fug"},F={class:"container"},H={class:"py-3"},I={class:"card p-0"},U={class:"card-body"},j={class:"col-12 d-flex justify-content-center mb-2"},A=["src"],K={class:"col-12 text-center"},L={class:"fw-bold"},M={class:"col-12 text-center"},P={class:"my-3"},R={class:"product-rating"},q=["onClick"],G=["onClick"],J=["onClick"],O=["onClick"],Q=["onClick"],W={class:"col-12"},X={class:"mb-3"},Y=["id","onUpdate:modelValue"],Z=t("div",{class:"col-12"},[t("hr")],-1),tt=t("i",{class:"lni lni-save me-2"},null,-1),st=t("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),at={__name:"Rating",props:{meta_title:String,meta_description:String,meta_keyword:String,results:Array},setup(r){const o=r,u=l(o.meta_title),v=l(o.meta_description),f=l(o.meta_keyword);function n(_,m){_.rating=m}function g(){$.Inertia.post(route("rating.store"),{results:o.results})}return(_,m)=>(d(),c("div",null,[a(x(b),null,{default:k(()=>[t("title",null,p(u.value),1),t("meta",{"head-key":"description",name:"description",content:v.value},null,8,N),t("meta",{"head-key":"keyword",name:"keyword",content:f.value},null,8,T)]),_:1}),a(V),a(B),t("div",E,[t("div",F,[t("div",H,[t("div",I,[t("div",U,[(d(!0),c(y,null,w(r.results,(s,h)=>(d(),c("div",{class:"row mb-3",key:h},[t("div",j,[t("img",{src:s.image,alt:"Product Image",style:{width:"100px"},class:"rounded"},null,8,A)]),t("div",K,[t("span",L,p(s.product),1)]),t("div",M,[t("div",P,[t("div",R,[t("i",{class:i(`lni me-2 ${s.rating>=1?"lni-star-filled text-warning":"lni-star"}`),onClick:e=>n(s,1),style:{"font-size":"20px"}},null,10,q),t("i",{class:i(`lni me-2 ${s.rating>=2?"lni-star-filled text-warning":"lni-star"}`),onClick:e=>n(s,2),style:{"font-size":"20px"}},null,10,G),t("i",{class:i(`lni me-2 ${s.rating>=3?"lni-star-filled text-warning":"lni-star"}`),onClick:e=>n(s,3),style:{"font-size":"20px"}},null,10,J),t("i",{class:i(`lni me-2 ${s.rating>=4?"lni-star-filled text-warning":"lni-star"}`),onClick:e=>n(s,4),style:{"font-size":"20px"}},null,10,O),t("i",{class:i(`lni me-2 ${s.rating>=5?"lni-star-filled text-warning":"lni-star"}`),onClick:e=>n(s,5),style:{"font-size":"20px"}},null,10,Q)])])]),t("div",W,[t("div",X,[S(t("textarea",{class:"form-control",id:`comment-${h}`,"onUpdate:modelValue":e=>s.comment=e,placeholder:"Comment"},null,8,Y),[[z,s.comment]])])]),Z]))),128)),t("div",{class:"row"},[t("div",{class:"col-12"},[t("div",{class:"d-grid"},[t("button",{class:"btn btn-sm btn-success",onClick:g},[tt,C("Simpan ")])])])])])])])])]),st,a(D)]))}};export{at as default};
