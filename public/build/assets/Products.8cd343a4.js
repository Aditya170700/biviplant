import{Y as C,h,o as l,f as r,a as t,b as f,w as y,u as e,L as H,e as $,G as F,i as L,F as P,k as S,v as D,t as p,ao as j,s as B,D as K,p as E,n as M,q as T,j as v,l as V,z as I,H as N,J as W}from"./app.e8be5593.js";import{_ as G}from"./Footer.68cceae2.js";const q={class:"header-area",id:"headerArea"},J={class:"container h-100 d-flex align-items-center justify-content-between"},Y={class:"back-button"},Q=t("svg",{class:"bi bi-arrow-left",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})],-1),X={class:"top-search-form"},Z={action:"",method:""},tt=t("button",{type:"submit"},[t("i",{class:"fa fa-search"})],-1),st=t("div",{class:"suha-navbar-toggler d-none","data-bs-toggle":"offcanvas","data-bs-target":"#suhaOffcanvas","aria-controls":"suhaOffcanvas",id:"suhaOffcanvasToggler"},null,-1),et=t("div",{class:"filter-option","data-bs-toggle":"offcanvas","data-bs-target":"#suhaFilterOffcanvas","aria-controls":"suhaFilterOffcanvas"},[t("svg",{class:"bi bi-sliders",xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"},[t("path",{"fill-rule":"evenodd",d:"M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"})])],-1),ot={__name:"Header",setup(g){let d=C(),o=h("");function _(){d.state.filterProduct.search=o.value}return(b,a)=>(l(),r("div",q,[t("div",J,[t("div",Y,[f(e(H),{href:"/"},{default:y(()=>[Q]),_:1})]),t("div",X,[t("form",Z,[$(t("input",{class:"form-control",type:"search",placeholder:"Cari kebutuhanmu di sini","onUpdate:modelValue":a[0]||(a[0]=c=>L(o)?o.value=c:o=c),onKeyup:_},null,544),[[F,e(o)]]),tt])]),st,et])]))}},at={class:"offcanvas offcanvas-start suha-filter-offcanvas-wrap",tabindex:"-1",id:"suhaFilterOffcanvas","aria-labelledby":"suhaFilterOffcanvasLabel",style:{background:"linear-gradient(to left, #fff, #fff) !important",width:"250px !important"}},ct=t("button",{class:"btn-close text-reset",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},[t("i",{class:"lni lni-close"})],-1),nt={class:"offcanvas-body py-5"},it={class:"container"},lt={class:"row"},rt={class:"col-12"},dt={class:"widget catagory mb-4"},ut=t("h6",{class:"widget-title mb-2"},"Kondisi Tanaman",-1),ht={class:"widget-desc"},_t=["id","value"],ft=["for"],mt={class:"col-12"},pt={class:"widget catagory mb-4"},vt=t("h6",{class:"widget-title mb-2"},"Urutkan",-1),gt={class:"widget-desc"},bt={class:"form-check"},wt=t("label",{class:"form-check-label",for:"asc"}," Harga Termurah ",-1),kt={class:"form-check"},yt=t("label",{class:"form-check-label",for:"desc"}," Harga Termahal ",-1),$t={__name:"Sidebar",props:{product_conditions:Object},setup(g){const d=g;let o=C();const _=h(d.product_conditions);return(b,a)=>(l(),r("div",at,[ct,t("div",nt,[t("div",it,[t("div",lt,[t("div",rt,[t("div",dt,[ut,t("div",ht,[(l(!0),r(P,null,S(e(_),(c,m)=>(l(),r("div",{class:"form-check",key:m},[$(t("input",{class:"form-check-input",id:`cond-${m}`,type:"checkbox",value:m,"onUpdate:modelValue":a[0]||(a[0]=x=>e(o).state.filterProduct.conditions=x)},null,8,_t),[[D,e(o).state.filterProduct.conditions]]),t("label",{class:"form-check-label",for:`cond-${m}`},p(c),9,ft)]))),128))])])]),t("div",mt,[t("div",pt,[vt,t("div",gt,[t("div",bt,[$(t("input",{class:"form-check-input",type:"radio",name:"asc",id:"asc","onUpdate:modelValue":a[1]||(a[1]=c=>e(o).state.filterProduct.sort_price=c),value:"asc"},null,512),[[j,e(o).state.filterProduct.sort_price]]),wt]),t("div",kt,[$(t("input",{class:"form-check-input",type:"radio",name:"desc",id:"desc","onUpdate:modelValue":a[2]||(a[2]=c=>e(o).state.filterProduct.sort_price=c),value:"desc"},null,512),[[j,e(o).state.filterProduct.sort_price]]),yt])])])])])])])]))}},xt=["content"],Ht=["content"],Pt=t("div",{class:"toast pwa-install-alert shadow bg-white",role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000","data-bs-autohide":"true"},[t("div",{class:"toast-body"},[t("div",{class:"content d-flex align-items-center mb-2"},[t("img",{src:"img/icons/icon-72x72.png",alt:""}),t("h6",{class:"mb-0"},"Add to Home Screen"),t("button",{class:"btn-close ms-auto",type:"button","data-bs-dismiss":"toast","aria-label":"Close"})]),t("span",{class:"mb-0 d-block"},[v("Add Suha on your mobile home screen. Click the"),t("strong",{class:"mx-1"},"Add to Home Screen"),v("button & enjoy it like a regular app.")])])],-1),St={class:"page-content-wrapper bg-fug"},Ct={class:"top-products-area py-3"},Ot={class:"container"},jt=t("div",{class:"section-heading d-flex align-items-center justify-content-between"},[t("h6",{class:"fw-bold"},"KATEGORI")],-1),Mt={class:"product-catagories"},Tt={class:"row g-3"},Vt={class:"col-4"},zt=t("img",{src:"/assets/images/logo/store.svg",alt:""},null,-1),Ut=["onClick"],At=["src"],Rt={class:"row g-3"},Ft=t("div",{class:"section-heading d-flex align-items-center justify-content-between mt-5"},[t("h6",{class:"fw-bold"},"DAFTAR PRODUK")],-1),Lt={key:0,class:"col-12 text-center"},Dt={class:"card product-card"},Bt={class:"card-body"},Kt=["src","alt"],Et={class:"sale-price"},It=t("br",null,null,-1),Nt=t("a",{class:"btn btn-success btn-sm",href:"#"},[t("i",{class:"lni lni-plus"})],-1),Wt={key:0,class:"row mt-3 g-3"},Gt=t("div",{class:"col text-center"},[t("span",{style:{color:"blue"}},"Sedang memuat ...")],-1),qt=[Gt],Jt=t("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),Xt={__name:"Products",props:{meta_title:String,meta_description:String,meta_keyword:String,categories:Object,products:Object,product_conditions:Object},setup(g){const d=g;let o=C(),_=h("");const b=h(!1),a=h(d.products),c=h(d.products.data),m=h(d.product_conditions),x=()=>{window.onscroll=()=>{document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&a.value.next_page_url&&(b.value=!0,I.Inertia.get(a.value.next_page_url,{},{preserveState:!0,preserveScroll:!0,only:["products"],onSuccess:i=>{a.value=i.props.products,c.value=[...c.value,...i.props.products.data],b.value=!1}}))}};B(()=>{x();const n=new URL(window.location.href);_.value=n.searchParams.get("category")});const z=h(d.meta_title),U=h(d.meta_description),A=h(d.meta_keyword);K([]),E(o.state.filterProduct,n=>{var i;W.get("/api/products",{params:(i=o==null?void 0:o.state)==null?void 0:i.filterProduct}).then(s=>{a.value=s.data,c.value=s.data.data}).catch(s=>{console.log(s)})});function R(n,i){n=encodeURIComponent(n),i=encodeURIComponent(i);var s=document.location.search.substr(1).split("&");let u=0;for(;u<s.length;u++)if(s[u].startsWith(n+"=")){let k=s[u].split("=");k[1]=i,s[u]=k.join("=");break}u>=s.length&&(s[s.length]=[n,i].join("="));let w=s.join("&");document.location.search=w}function O(n){R("category",n)}return(n,i)=>(l(),r("div",null,[f(e(N),null,{default:y(()=>[t("title",null,p(e(z)),1),t("meta",{"head-key":"description",name:"description",content:e(U)},null,8,xt),t("meta",{"head-key":"keyword",name:"keyword",content:e(A)},null,8,Ht)]),_:1}),f(ot),f($t,{product_conditions:e(m)},null,8,["product_conditions"]),Pt,t("div",St,[t("div",Ct,[t("div",Ot,[jt,t("div",Mt,[t("div",Tt,[t("div",Vt,[t("a",{href:"#",class:M(`shadow-sm d-flex align-items-center ${e(_)==""||!e(_)?"bg-light border border-success":""}`),onClick:i[0]||(i[0]=T(s=>O(""),["prevent"]))},[zt,v(" Semua ")],2)]),(l(!0),r(P,null,S(g.categories.data,(s,u)=>(l(),r("div",{class:"col-4",key:u},[t("a",{class:M(`shadow-sm d-flex align-items-center ${e(_)==s.slug?"bg-light border border-success":""}`),href:"#",onClick:T(w=>O(s.slug),["prevent"])},[t("img",{src:s.icon_url,alt:"",style:{width:"19px"}},null,8,At),v(" "+p(s.name),1)],10,Ut)]))),128))])]),t("div",Rt,[Ft,e(c).length<1?(l(),r("div",Lt," Produk tidak ditemukan ")):V("",!0),(l(!0),r(P,null,S(e(c),(s,u)=>(l(),r("div",{class:"col-6 col-md-4 col-lg-3",key:u},[t("div",Dt,[t("div",Bt,[f(e(H),{class:"product-thumbnail d-block",href:n.route("product.show",{slug:s.slug})},{default:y(()=>{var w,k;return[t("img",{class:"mb-2",src:(w=s.files[0])==null?void 0:w.src,alt:(k=s.files[0])==null?void 0:k.alt},null,8,Kt)]}),_:2},1032,["href"]),f(e(H),{class:"product-title d-block",href:n.route("product.show",{slug:s.slug})},{default:y(()=>[v(p(s.name),1)]),_:2},1032,["href"]),t("p",Et,[v(p(s.price_rp),1),It,t("span",null,p(s.strike_price_rp),1)]),Nt])])]))),128))]),e(b)?(l(),r("div",Wt,qt)):V("",!0)])])]),Jt,f(G)]))}};export{Xt as default};