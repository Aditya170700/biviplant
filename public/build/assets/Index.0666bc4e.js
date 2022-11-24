import{L as x}from"./App.2bf85953.js";import{P as L}from"./Pagination.abb97466.js";import{_ as g,L as z,D as C,a1 as j,z as p,c as I,w as y,I as u,o,a as t,e as k,E as B,G as D,k as c,f as i,j as n,l as N,t as d,b as v,F as O}from"./app.20070287.js";const V={components:{Layout:x,Link:z,Pagination:L},props:{errors:Object,results:Object,filters:Object},setup(r){var f;let e=C({search:r.filters.search,limit:(f=r.filters.limit)!=null?f:25,field:r.filters.field,direction:r.filters.direction});return{params:e,sort:m=>{e.field=m,e.direction=e.direction=="asc"?"desc":"asc"},destroy:m=>{confirmation("Tindakan ini akan menghapus data secara permanen").then(_=>{_&&p.Inertia.delete(route("admin.vouchers.destroy",{id:m}))})}}},watch:{params:{handler(){let r=j.exports.pickBy(this.params);p.Inertia.get(route("admin.vouchers.index"),r,{replace:!0,preserveState:!0})},deep:!0}}},E={class:"row"},S={class:"col-md-12 grid-margin"},P={class:"card"},R={class:"card-body"},M={class:"d-flex justify-content-start"},T={class:"col-lg-2 col-sm-6 me-2"},K={class:"mb-3"},F={class:"col-lg-2 col-sm-6 me-2"},U=t("option",{value:"25"},"Lihat 25 data",-1),A=t("option",{value:"50"},"Lihat 50 data",-1),G=t("option",{value:"100"},"Lihat 100 data",-1),H=t("option",{value:"200"},"Lihat 200 data",-1),q=[U,A,G,H],J={class:"table-responsive"},Q={class:"table"},W={class:"table-dark"},X=t("th",null,"NO",-1),Y={key:0,class:"fa-solid fa-arrow-down-a-z"},Z={key:1,class:"fa-solid fa-arrow-up-z-a"},$={key:0,class:"fa-solid fa-arrow-down-a-z"},tt={key:1,class:"fa-solid fa-arrow-up-z-a"},st={key:0,class:"fa-solid fa-arrow-down-a-z"},et={key:1,class:"fa-solid fa-arrow-up-z-a"},at={key:0,class:"fa-solid fa-arrow-down-a-z"},ot={key:1,class:"fa-solid fa-arrow-up-z-a"},it={key:0,class:"fa-solid fa-arrow-down-a-z"},nt={key:1,class:"fa-solid fa-arrow-up-z-a"},rt={key:0,class:"fa-solid fa-arrow-down-a-z"},dt={key:1,class:"fa-solid fa-arrow-up-z-a"},lt=t("th",null,null,-1),ct={class:"d-flex justify-content-end"},mt=t("i",{class:"fas fa-pencil"},null,-1),ft=["onClick"],_t=t("i",{class:"fas fa-trash"},null,-1),ut=[_t];function ht(r,e,l,s,f,m){const _=u("Link"),w=u("Pagination"),b=u("Layout");return o(),I(b,{title:"Voucher",typeButton:"create",href:r.route("admin.vouchers.create")},{default:y(()=>[t("div",E,[t("div",S,[t("div",P,[t("div",R,[t("div",M,[t("div",T,[t("div",K,[k(t("input",{class:"form-control",placeholder:"Cari...","onUpdate:modelValue":e[0]||(e[0]=a=>s.params.search=a)},null,512),[[B,s.params.search]])])]),t("div",F,[k(t("select",{class:"form-control mb-3","onUpdate:modelValue":e[1]||(e[1]=a=>s.params.limit=a)},q,512),[[D,s.params.limit]])])]),t("div",J,[t("table",Q,[t("thead",W,[t("tr",null,[X,t("th",null,[t("span",{onClick:e[2]||(e[2]=a=>s.sort("code")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[c(" CODE "),s.params.direction=="asc"&&s.params.field=="code"?(o(),i("i",Y)):n("",!0),s.params.direction=="desc"&&s.params.field=="code"?(o(),i("i",Z)):n("",!0)])]),t("th",null,[t("span",{onClick:e[3]||(e[3]=a=>s.sort("desc")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[c(" DESKRIPSI "),s.params.direction=="asc"&&s.params.field=="desc"?(o(),i("i",$)):n("",!0),s.params.direction=="desc"&&s.params.field=="desc"?(o(),i("i",tt)):n("",!0)])]),t("th",null,[t("span",{onClick:e[4]||(e[4]=a=>s.sort("limit")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[c(" LIMIT "),s.params.direction=="asc"&&s.params.field=="limit"?(o(),i("i",st)):n("",!0),s.params.direction=="desc"&&s.params.field=="limit"?(o(),i("i",et)):n("",!0)])]),t("th",null,[t("span",{onClick:e[5]||(e[5]=a=>s.sort("expired_at")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[c(" BERAKHIR "),s.params.direction=="asc"&&s.params.field=="expired_at"?(o(),i("i",at)):n("",!0),s.params.direction=="desc"&&s.params.field=="expired_at"?(o(),i("i",ot)):n("",!0)])]),t("th",null,[t("span",{onClick:e[6]||(e[6]=a=>s.sort("min_order")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[c(" MIN ORDER "),s.params.direction=="asc"&&s.params.field=="min_order"?(o(),i("i",it)):n("",!0),s.params.direction=="desc"&&s.params.field=="min_order"?(o(),i("i",nt)):n("",!0)])]),t("th",null,[t("span",{onClick:e[7]||(e[7]=a=>s.sort("discount")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[c(" DISKON "),s.params.direction=="asc"&&s.params.field=="discount"?(o(),i("i",rt)):n("",!0),s.params.direction=="desc"&&s.params.field=="discount"?(o(),i("i",dt)):n("",!0)])]),lt])]),t("tbody",null,[(o(!0),i(O,null,N(l.results.data,(a,h)=>(o(),i("tr",{key:h},[t("td",null,d(h+1),1),t("td",null,d(a.code),1),t("td",null,d(a.desc),1),t("td",null,d(a.limit),1),t("td",null,d(a.expired_at),1),t("td",null,d(a.min_order),1),t("td",null,d(a.discount)+" - "+d(a.max_discount),1),t("td",ct,[v(_,{href:r.route("admin.vouchers.edit",{id:a.id}),class:"btn btn-sm btn-warning me-2 rounded-custom"},{default:y(()=>[mt]),_:2},1032,["href"]),t("button",{class:"btn btn-sm btn-danger me-2 rounded-custom",onClick:pt=>s.destroy(a.id)},ut,8,ft)])]))),128))])]),v(w,{class:"mt-6",links:l.results.links,from:l.results.from,to:l.results.to,total:l.results.total},null,8,["links","from","to","total"])])])])])])]),_:1},8,["href"])}const wt=g(V,[["render",ht]]);export{wt as default};
