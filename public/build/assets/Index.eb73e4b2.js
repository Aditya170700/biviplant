import{L as b}from"./App.b377252e.js";import{P as k}from"./Pagination.aa47c70a.js";import{L as y,D as g,a0 as x,z as T,c as S,w as u,J as d,o as i,a as t,e as h,E,G as O,f as r,l as A,t as s,k as P,j as V,b as f,F as w}from"./app.982608ae.js";import{_ as B}from"./_plugin-vue_export-helper.cdc0426e.js";const I={components:{Layout:b,Link:y,Pagination:k},props:{errors:Object,results:Object,filters:Object},setup(o){var l;let a=g({search:o.filters.search,limit:(l=o.filters.limit)!=null?l:25,field:o.filters.field,direction:o.filters.direction});return{params:a,sort:c=>{a.field=c,a.direction=a.direction=="asc"?"desc":"asc"}}},watch:{params:{handler(){let o=x.exports.pickBy(this.params);T.Inertia.get(route("admin.orders.index"),o,{replace:!0,preserveState:!0})},deep:!0}}},N={class:"row"},R={class:"col-md-12 grid-margin"},j={class:"card"},C={class:"card-body"},D={class:"d-flex justify-content-start"},G={class:"col-lg-2 col-sm-6 me-2"},U={class:"mb-3"},M={class:"col-lg-2 col-sm-6 me-2"},K=t("option",{value:"25"},"Lihat 25 data",-1),F=t("option",{value:"50"},"Lihat 50 data",-1),z=t("option",{value:"100"},"Lihat 100 data",-1),H=t("option",{value:"200"},"Lihat 200 data",-1),J=[K,F,z,H],Y={class:"table-responsive"},q={class:"table"},Q=t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"NO"),t("th",null,"PEMESAN"),t("th",null,"PRODUK"),t("th",null,"VOUCHER"),t("th",null,"TOTAL"),t("th",null,"STATUS"),t("th",null,"TGL ORDER"),t("th",null,"TGL BAYAR"),t("th",null,"TGL KIRIM"),t("th",null,"TGL SELESAI"),t("th",null,"AKSI")])],-1),W={key:0},X={class:"d-flex"},Z=t("i",{class:"fas fa-eye"},null,-1);function $(o,a,n,l,c,tt){const p=d("Link"),v=d("Pagination"),L=d("Layout");return i(),S(L,{title:"Pesanan"},{default:u(()=>[t("div",N,[t("div",R,[t("div",j,[t("div",C,[t("div",D,[t("div",G,[t("div",U,[h(t("input",{class:"form-control",placeholder:"Cari...","onUpdate:modelValue":a[0]||(a[0]=e=>l.params.search=e)},null,512),[[E,l.params.search]])])]),t("div",M,[h(t("select",{class:"form-control mb-3","onUpdate:modelValue":a[1]||(a[1]=e=>l.params.limit=e)},J,512),[[O,l.params.limit]])])]),t("div",Y,[t("table",q,[Q,t("tbody",null,[(i(!0),r(w,null,A(n.results.data,(e,_)=>{var m;return i(),r("tr",{key:_},[t("td",null,s(_+1),1),t("td",null,s((m=e.user)==null?void 0:m.name),1),t("td",null,[P(s(e.order_details[0].product.name)+" ",1),e.order_details.length>1?(i(),r("span",W," dan "+s(e.order_details.length-1)+" produk lainnya",1)):V("",!0)]),t("td",null,s(e.voucher_rp),1),t("td",null,s(e.total_rp),1),t("td",null,s(e.payment_status),1),t("td",null,s(e.created_at),1),t("td",null,s(e.paid_at),1),t("td",null,s(e.send_at),1),t("td",null,s(e.finish_at),1),t("td",null,[t("div",X,[f(p,{href:o.route("admin.orders.show",{id:e.id}),class:"btn btn-sm btn-primary me-2 rounded-custom"},{default:u(()=>[Z]),_:2},1032,["href"])])])])}),128))])]),f(v,{class:"mt-6",links:n.results.links,from:n.results.from,to:n.results.to,total:n.results.total},null,8,["links","from","to","total"])])])])])])]),_:1})}const lt=B(I,[["render",$]]);export{lt as default};