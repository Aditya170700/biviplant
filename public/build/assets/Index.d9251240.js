import{L as b}from"./App.c3b8bd99.js";import{P as k}from"./Pagination.7f0065f9.js";import{_ as y,L as g,D as x,a3 as T,z as S,E as d,o as i,c as E,w as u,a as t,e as h,G as O,I as A,f as r,k as I,F as P,b as f,t as s,j as V,l as w}from"./app.2d01b1f7.js";const B={components:{Layout:b,Link:g,Pagination:k},props:{errors:Object,results:Object,filters:Object},setup(l){var o;let a=x({search:l.filters.search,limit:(o=l.filters.limit)!=null?o:25,field:l.filters.field,direction:l.filters.direction});return{params:a,sort:c=>{a.field=c,a.direction=a.direction=="asc"?"desc":"asc"}}},watch:{params:{handler(){let l=T.exports.pickBy(this.params);S.Inertia.get(route("admin.orders.index"),l,{replace:!0,preserveState:!0})},deep:!0}}},N={class:"row"},R={class:"col-md-12 grid-margin"},j={class:"card"},C={class:"card-body"},D={class:"d-flex justify-content-start"},G={class:"col-lg-2 col-sm-6 me-2"},U={class:"mb-3"},M={class:"col-lg-2 col-sm-6 me-2"},K=t("option",{value:"25"},"Lihat 25 data",-1),F=t("option",{value:"50"},"Lihat 50 data",-1),z=t("option",{value:"100"},"Lihat 100 data",-1),H=t("option",{value:"200"},"Lihat 200 data",-1),Y=[K,F,z,H],q={class:"table-responsive"},J={class:"table"},Q=t("thead",{class:"table-dark"},[t("tr",null,[t("th",null,"NO"),t("th",null,"PEMESAN"),t("th",null,"PRODUK"),t("th",null,"VOUCHER"),t("th",null,"TOTAL"),t("th",null,"STATUS"),t("th",null,"TGL ORDER"),t("th",null,"TGL BAYAR"),t("th",null,"TGL KIRIM"),t("th",null,"TGL SELESAI"),t("th",null,"AKSI")])],-1),W={key:0},X={class:"d-flex"},Z=t("i",{class:"fas fa-eye"},null,-1);function $(l,a,n,o,c,tt){const p=d("Link"),v=d("Pagination"),L=d("Layout");return i(),E(L,{title:"Pesanan"},{default:u(()=>[t("div",N,[t("div",R,[t("div",j,[t("div",C,[t("div",D,[t("div",G,[t("div",U,[h(t("input",{class:"form-control",placeholder:"Cari...","onUpdate:modelValue":a[0]||(a[0]=e=>o.params.search=e)},null,512),[[O,o.params.search]])])]),t("div",M,[h(t("select",{class:"form-control mb-3","onUpdate:modelValue":a[1]||(a[1]=e=>o.params.limit=e)},Y,512),[[A,o.params.limit]])])]),t("div",q,[t("table",J,[Q,t("tbody",null,[(i(!0),r(P,null,I(n.results.data,(e,_)=>{var m;return i(),r("tr",{key:_},[t("td",null,s(_+1),1),t("td",null,s((m=e.user)==null?void 0:m.name),1),t("td",null,[V(s(e.order_details[0].product.name)+" ",1),e.order_details.length>1?(i(),r("span",W," dan "+s(e.order_details.length-1)+" produk lainnya",1)):w("",!0)]),t("td",null,s(e.voucher_rp),1),t("td",null,s(e.total_rp),1),t("td",null,s(e.payment_status),1),t("td",null,s(e.created_at),1),t("td",null,s(e.paid_at),1),t("td",null,s(e.send_at),1),t("td",null,s(e.finish_at),1),t("td",null,[t("div",X,[f(p,{href:l.route("admin.orders.show",{id:e.id}),class:"btn btn-sm btn-primary me-2 rounded-custom"},{default:u(()=>[Z]),_:2},1032,["href"])])])])}),128))])]),f(v,{class:"mt-6",links:n.results.links,from:n.results.from,to:n.results.to,total:n.results.total},null,8,["links","from","to","total"])])])])])])]),_:1})}const lt=y(B,[["render",$]]);export{lt as default};
