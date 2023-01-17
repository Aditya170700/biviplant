import{L}from"./App.c3b8bd99.js";import{P as g}from"./Pagination.7f0065f9.js";import{_ as x,L as j,D as C,a3 as z,z as k,E as u,o,c as N,w as h,a as t,e as b,G as B,I as E,j as f,f as i,l as r,k as O,F as P,b as p,t as d}from"./app.2d01b1f7.js";const V={components:{Layout:L,Link:j,Pagination:g},props:{errors:Object,results:Object,filters:Object},setup(n){var _;let e=C({search:n.filters.search,limit:(_=n.filters.limit)!=null?_:25,field:n.filters.field,direction:n.filters.direction});return{params:e,sort:c=>{e.field=c,e.direction=e.direction=="asc"?"desc":"asc"},destroy:c=>{confirmation("Tindakan ini akan menghapus data secara permanen").then(m=>{m&&k.Inertia.delete(route("admin.users.destroy",{id:c}))})}}},watch:{params:{handler(){let n=z.exports.pickBy(this.params);k.Inertia.get(route("admin.users.index"),n,{replace:!0,preserveState:!0})},deep:!0}}},I={class:"row"},M={class:"col-md-12 grid-margin"},T={class:"card"},A={class:"card-body"},D={class:"d-flex justify-content-start"},S={class:"col-lg-2 col-sm-6 me-2"},F={class:"mb-3"},U={class:"col-lg-2 col-sm-6 me-2"},G=t("option",{value:"25"},"Lihat 25 data",-1),R=t("option",{value:"50"},"Lihat 50 data",-1),q=t("option",{value:"100"},"Lihat 100 data",-1),H=t("option",{value:"200"},"Lihat 200 data",-1),J=[G,R,q,H],K={class:"table-responsive"},Q={class:"table"},W={class:"table-dark"},X=t("th",null,"NO",-1),Y={key:0,class:"fa-solid fa-arrow-down-a-z"},Z={key:1,class:"fa-solid fa-arrow-up-z-a"},$={key:0,class:"fa-solid fa-arrow-down-a-z"},tt={key:1,class:"fa-solid fa-arrow-up-z-a"},st={key:0,class:"fa-solid fa-arrow-down-a-z"},et={key:1,class:"fa-solid fa-arrow-up-z-a"},at={key:0,class:"fa-solid fa-arrow-down-a-z"},ot={key:1,class:"fa-solid fa-arrow-up-z-a"},nt=t("th",null,null,-1),it={class:"d-flex justify-content-end"},rt=t("i",{class:"fas fa-eye"},null,-1),lt=t("i",{class:"fas fa-pencil"},null,-1),dt=["onClick"],ct=t("i",{class:"fas fa-trash"},null,-1),mt=[ct];function ft(n,e,l,s,_,c){const m=u("Link"),v=u("Pagination"),w=u("Layout");return o(),N(w,{title:"Pengguna",typeButton:"create",href:n.route("admin.users.create")},{default:h(()=>[t("div",I,[t("div",M,[t("div",T,[t("div",A,[t("div",D,[t("div",S,[t("div",F,[b(t("input",{class:"form-control",placeholder:"Cari...","onUpdate:modelValue":e[0]||(e[0]=a=>s.params.search=a)},null,512),[[B,s.params.search]])])]),t("div",U,[b(t("select",{class:"form-control mb-3","onUpdate:modelValue":e[1]||(e[1]=a=>s.params.limit=a)},J,512),[[E,s.params.limit]])])]),t("div",K,[t("table",Q,[t("thead",W,[t("tr",null,[X,t("th",null,[t("span",{onClick:e[2]||(e[2]=a=>s.sort("name")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" NAMA "),s.params.direction=="asc"&&s.params.field=="name"?(o(),i("i",Y)):r("",!0),s.params.direction=="desc"&&s.params.field=="name"?(o(),i("i",Z)):r("",!0)])]),t("th",null,[t("span",{onClick:e[3]||(e[3]=a=>s.sort("role")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" ROLE "),s.params.direction=="asc"&&s.params.field=="role"?(o(),i("i",$)):r("",!0),s.params.direction=="desc"&&s.params.field=="role"?(o(),i("i",tt)):r("",!0)])]),t("th",null,[t("span",{onClick:e[4]||(e[4]=a=>s.sort("email")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" EMAIL "),s.params.direction=="asc"&&s.params.field=="email"?(o(),i("i",st)):r("",!0),s.params.direction=="desc"&&s.params.field=="email"?(o(),i("i",et)):r("",!0)])]),t("th",null,[t("span",{onClick:e[5]||(e[5]=a=>s.sort("phone")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[f(" TELEPON "),s.params.direction=="asc"&&s.params.field=="phone"?(o(),i("i",at)):r("",!0),s.params.direction=="desc"&&s.params.field=="phone"?(o(),i("i",ot)):r("",!0)])]),nt])]),t("tbody",null,[(o(!0),i(P,null,O(l.results.data,(a,y)=>(o(),i("tr",{key:y},[t("td",null,d(y+1),1),t("td",null,d(a.name),1),t("td",null,d(a.role),1),t("td",null,d(a.email),1),t("td",null,d(a.phone),1),t("td",it,[p(m,{href:n.route("admin.users.show",{id:a.id}),class:"btn btn-sm btn-primary me-2 rounded-custom"},{default:h(()=>[rt]),_:2},1032,["href"]),p(m,{href:n.route("admin.users.edit",{id:a.id}),class:"btn btn-sm btn-warning me-2 rounded-custom"},{default:h(()=>[lt]),_:2},1032,["href"]),t("button",{class:"btn btn-sm btn-danger me-2 rounded-custom",onClick:_t=>s.destroy(a.id)},mt,8,dt)])]))),128))])]),p(v,{class:"mt-6",links:l.results.links,from:l.results.from,to:l.results.to,total:l.results.total},null,8,["links","from","to","total"])])])])])])]),_:1},8,["href"])}const yt=x(V,[["render",ft]]);export{yt as default};
