import{h,p as x,I as C,o,f as l,a as s,e as O,E as L,u as a,i as M,j as u,F as m,l as g,n as _,b as p,w as v,t as b,L as k}from"./app.982608ae.js";const S={class:"header-area",id:"headerArea"},T={class:"container h-100 d-flex align-items-center justify-content-between"},V=s("div",{class:"logo-wrapper"},[s("a",{href:"/"},[s("img",{src:"/img/core-img/logo-small.png",alt:""})])],-1),$={class:"top-search-form"},q=s("button",{type:"submit"},[s("i",{class:"fa fa-search"})],-1),B={class:"offcanvas offcanvas-start suha-offcanvas-wrap",tabindex:"-1",id:"searchOffcanvas","aria-labelledby":"searchOffcanvasLabel",style:{background:"#fff !important"}},N={class:"offcanvas-body"},P={class:"bg-white"},j={id:"exampleModalCenter",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle"},D={class:"modal-dialog modal-dialog-centered",role:"document"},E={class:"modal-content",style:{border:"0px !important"}},F=s("h5",{class:"modal-title",id:"exampleModalLongTitle"}," Cari ",-1),z=s("i",{class:"lni lni-close"},null,-1),A=[z],H={class:"modal-body",style:{border:"0px !important"}},I={class:"row"},K={class:"col-lg-12"},R={class:"input-group mb-3 shadow-sm"},U=s("span",{class:"input-group-text bg-white border-0",id:"basic-addon1"},[s("i",{class:"lni lni-search-alt"})],-1),G={key:0,class:"row"},J=s("div",{class:"col-lg-12"},[s("span",{class:"small"}," Masukkan kata kunci untuk mencari produk atau kategori produk ")],-1),Q=[J],W={class:"row"},X={class:"col-lg-12 text-center"},Y={key:0,class:"spinner-border text-secondary",role:"status"},Z=s("span",{class:"visually-hidden"},"Loading...",-1),ss=[Z],as={key:1,class:"row mb-4 overflow-scroll",style:{"max-height":"500px"}},es=s("div",{class:"col-lg-12 mb-2"},[s("span",{class:"small d-block"},"Produk")],-1),ts=s("hr",null,null,-1),os=s("span",null,"# Lihat semua produk",-1),ls=s("hr",null,null,-1),ns={key:2,class:"row mb-4 overflow-scroll",style:{"max-height":"500px"}},cs=s("div",{class:"col-lg-12 mb-2"},[s("span",{class:"small d-block"},"Kategori Produk")],-1),is=s("hr",null,null,-1),ds=s("span",null,"# Lihat semua kategori produk",-1),rs=s("hr",null,null,-1),hs=[ds,rs],us=s("div",{class:"suha-navbar-toggler","data-bs-toggle":"offcanvas","data-bs-target":"#suhaOffcanvas","aria-controls":"suhaOffcanvas",id:"suhaOffcanvasToggler"},[s("span"),s("span"),s("span")],-1),ms={__name:"Header",setup(_s){let n=h(""),i=h(!1),d=h([]),r=h([]);function y(){let c=document.querySelector("#suhaOffcanvasToggler"),e=document.querySelector("#searchOffcanvas"),t=new bootstrap.Offcanvas(e);c.classList.toggle("d-none"),t.show()}function w(){document.querySelector("#suhaOffcanvasToggler").classList.toggle("d-none")}return x(()=>n,c=>{i.value=!0,C.get(`/api/search?keyword=${c.value}`).then(e=>{d.value=e.data.products,r.value=e.data.categories,i.value=!1}).catch(e=>{i.value=!1,console.log(e)})},{deep:!0}),(c,e)=>(o(),l("div",S,[s("div",T,[V,s("div",$,[s("form",{action:"",method:""},[s("input",{class:"form-control",type:"search",placeholder:"Cari kebutuhanmu di sini",onClick:y}),q]),s("div",B,[s("div",N,[s("div",P,[s("div",j,[s("div",D,[s("div",E,[s("div",{class:"modal-header",style:{border:"0px !important"}},[F,s("button",{class:"btn-close btn-close-black text-reset",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close",onClick:w},A)]),s("div",H,[s("div",I,[s("div",K,[s("div",R,[U,O(s("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>M(n)?n.value=t:n=t),class:"form-control border-0",placeholder:"Masukkan kata kunci","aria-label":"Masukkan kata kunci","aria-describedby":"basic-addon1"},null,512),[[L,a(n)]])])])]),a(n)==""?(o(),l("div",G,Q)):u("",!0),s("div",W,[s("div",X,[a(i)?(o(),l("div",Y,ss)):u("",!0)])]),a(n)!=""?(o(),l("div",as,[es,(o(!0),l(m,null,g(a(d),(t,f)=>(o(),l("div",{class:_(`col-lg-12 mb-2 ${a(d).length>0?"":"d-none"}`),key:f},[p(a(k),{href:c.route("product.show",{id:t.slug})},{default:v(()=>[s("span",null,"# "+b(t.name),1),ts]),_:2},1032,["href"])],2))),128)),s("div",{class:_(`col-lg-12 mb-2 ${a(d).length<1?"":"d-none"}`)},[p(a(k),{href:c.route("product.index")},{default:v(()=>[os,ls]),_:1},8,["href"])],2)])):u("",!0),a(n)!=""?(o(),l("div",ns,[cs,(o(!0),l(m,null,g(a(r),(t,f)=>(o(),l("div",{class:_(`col-lg-12 mb-2 ${a(r).length>0?"":"d-none"}`),key:f},[s("span",null,"# "+b(t.name),1),is],2))),128)),s("div",{class:_(`col-lg-12 mb-2 ${a(r).length<1?"":"d-none"}`)},hs,2)])):u("",!0)])])])])])])])]),us])]))}};export{ms as _};
