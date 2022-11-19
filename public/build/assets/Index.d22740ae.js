import{L as g}from"./App.b377252e.js";import{P as L}from"./Pagination.aa47c70a.js";import{L as x,D as j,a0 as C,z as b,c as z,w as m,J as p,o,a as t,e as y,E as A,G as B,k as f,f as n,j as r,l as S,t as c,b as _,F as N}from"./app.982608ae.js";import{_ as O}from"./_plugin-vue_export-helper.cdc0426e.js";const P={components:{Layout:g,Link:x,Pagination:L},props:{errors:Object,results:Object,filters:Object},setup(i){var h;let e=j({search:i.filters.search,limit:(h=i.filters.limit)!=null?h:25,field:i.filters.field,direction:i.filters.direction});return{params:e,sort:u=>{e.field=u,e.direction=e.direction=="asc"?"desc":"asc"},destroy:u=>{confirmation("Tindakan ini akan menghapus data secara permanen").then(d=>{d&&b.Inertia.delete(route("admin.products.destroy",{id:u}))})}}},watch:{params:{handler(){let i=C.exports.pickBy(this.params);b.Inertia.get(route("admin.products.index"),i,{replace:!0,preserveState:!0})},deep:!0}}},T={class:"row"},V={class:"col-md-12 grid-margin"},E={class:"card"},R={class:"card-body"},D={class:"d-flex justify-content-start"},G={class:"col-lg-2 col-sm-6 me-2"},I={class:"mb-3"},M={class:"col-lg-2 col-sm-6 me-2"},F=t("option",{value:"25"},"Lihat 25 data",-1),H=t("option",{value:"50"},"Lihat 50 data",-1),U=t("option",{value:"100"},"Lihat 100 data",-1),J=t("option",{value:"200"},"Lihat 200 data",-1),K=[F,H,U,J],q={class:"table-responsive"},Q={class:"table"},W={class:"table-dark"},X=t("th",null,"NO",-1),Y={key:0,class:"fa-solid fa-arrow-down-a-z"},Z={key:1,class:"fa-solid fa-arrow-up-z-a"},$={key:0,class:"fa-solid fa-arrow-down-a-z"},tt={key:1,class:"fa-solid fa-arrow-up-z-a"},st={key:0,class:"fa-solid fa-arrow-down-a-z"},et={key:1,class:"fa-solid fa-arrow-up-z-a"},at={key:0,class:"fa-solid fa-arrow-down-a-z"},ot={key:1,class:"fa-solid fa-arrow-up-z-a"},it={key:0,class:"fa-solid fa-arrow-down-a-z"},nt={key:1,class:"fa-solid fa-arrow-up-z-a"},rt=t("th",null,null,-1),lt={class:"d-flex justify-content-end"},dt=t("i",{class:"fas fa-location-arrow"},null,-1),ct=t("i",{class:"fas fa-images"},null,-1),mt=t("i",{class:"fas fa-eye"},null,-1),ft=t("i",{class:"fas fa-pencil"},null,-1),_t=["onClick"],ut=t("i",{class:"fas fa-trash"},null,-1),ht=[ut],pt=t("div",{class:"modal fade",id:"attachSuplier",tabindex:"-1","aria-labelledby":"attachSuplierLabel","aria-hidden":"true"},[t("div",{class:"modal-dialog modal-lg"},[t("div",{class:"modal-content rounded-custom"},[t("div",{class:"modal-body"},[t("div",{class:"d-flex justify-content-between align-items-center mb-3"},[t("div",{class:"h5"},"Pilih Suplier")]),t("div",{class:"row"})])])])],-1);function kt(i,e,l,s,h,u){const d=p("Link"),w=p("Pagination"),v=p("Layout");return o(),z(v,{title:"Produk",typeButton:"create",href:i.route("admin.products.create")},{default:m(()=>[t("div",T,[t("div",V,[t("div",E,[t("div",R,[t("div",D,[t("div",G,[t("div",I,[y(t("input",{class:"form-control",placeholder:"Cari...","onUpdate:modelValue":e[0]||(e[0]=a=>s.params.search=a)},null,512),[[A,s.params.search]])])]),t("div",M,[y(t("select",{class:"form-control mb-3","onUpdate:modelValue":e[1]||(e[1]=a=>s.params.limit=a)},K,512),[[B,s.params.limit]])])]),t("div",q,[t("table",Q,[t("thead",W,[t("tr",null,[X,t("th",null,[t("span",{onClick:e[2]||(e[2]=a=>s.sort("name")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" NAMA "),s.params.direction=="asc"&&s.params.field=="name"?(o(),n("i",Y)):r("",!0),s.params.direction=="desc"&&s.params.field=="name"?(o(),n("i",Z)):r("",!0)])]),t("th",null,[t("span",{onClick:e[3]||(e[3]=a=>s.sort("price")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" HARGA "),s.params.direction=="asc"&&s.params.field=="price"?(o(),n("i",$)):r("",!0),s.params.direction=="desc"&&s.params.field=="price"?(o(),n("i",tt)):r("",!0)])]),t("th",null,[t("span",{onClick:e[4]||(e[4]=a=>s.sort("strike_price")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" HARGA CORET "),s.params.direction=="asc"&&s.params.field=="strike_price"?(o(),n("i",st)):r("",!0),s.params.direction=="desc"&&s.params.field=="strike_price"?(o(),n("i",et)):r("",!0)])]),t("th",null,[t("span",{onClick:e[5]||(e[5]=a=>s.sort("weight")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" BERAT "),s.params.direction=="asc"&&s.params.field=="weight"?(o(),n("i",at)):r("",!0),s.params.direction=="desc"&&s.params.field=="weight"?(o(),n("i",ot)):r("",!0)])]),t("th",null,[t("span",{onClick:e[6]||(e[6]=a=>s.sort("stock")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" STOK "),s.params.direction=="asc"&&s.params.field=="stock"?(o(),n("i",it)):r("",!0),s.params.direction=="desc"&&s.params.field=="stock"?(o(),n("i",nt)):r("",!0)])]),rt])]),t("tbody",null,[(o(!0),n(N,null,S(l.results.data,(a,k)=>(o(),n("tr",{key:k},[t("td",null,c(k+1),1),t("td",null,c(a.name),1),t("td",null,c(a.price_rp),1),t("td",null,c(a.strike_price_rp),1),t("td",null,c(a.weight)+"gr",1),t("td",null,c(a.stock),1),t("td",lt,[_(d,{href:i.route("admin.products.origins",{id:a.id}),class:"btn btn-sm btn-success me-2 rounded-custom"},{default:m(()=>[dt]),_:2},1032,["href"]),_(d,{href:i.route("admin.products.files",{id:a.id}),class:"btn btn-sm btn-info me-2 rounded-custom"},{default:m(()=>[ct]),_:2},1032,["href"]),_(d,{href:i.route("admin.products.show",{id:a.id}),class:"btn btn-sm btn-primary me-2 rounded-custom"},{default:m(()=>[mt]),_:2},1032,["href"]),_(d,{href:i.route("admin.products.edit",{id:a.id}),class:"btn btn-sm btn-warning me-2 rounded-custom"},{default:m(()=>[ft]),_:2},1032,["href"]),t("button",{class:"btn btn-sm btn-danger me-2 rounded-custom",onClick:bt=>s.destroy(a.id)},ht,8,_t)])]))),128))])]),_(w,{class:"mt-6",links:l.results.links,from:l.results.from,to:l.results.to,total:l.results.total},null,8,["links","from","to","total"])])])])])]),pt]),_:1},8,["href"])}const Lt=O(P,[["render",kt]]);export{Lt as default};
