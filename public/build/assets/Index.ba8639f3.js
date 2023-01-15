import{L}from"./App.a6a0540d.js";import{P as g}from"./Pagination.b4cbf4aa.js";import{_ as x,L as j,D as B,a2 as C,z as p,c as U,w as _,I as f,o as n,a as t,e as y,E as V,G as z,k,f as l,j as c,l as D,t as u,b as h,F as N}from"./app.e28463fd.js";const I={components:{Layout:L,Link:j,Pagination:g},props:{errors:Object,results:Object,filters:Object},setup(o){var m;let s=B({search:o.filters.search,limit:(m=o.filters.limit)!=null?m:25,field:o.filters.field,direction:o.filters.direction});return{params:s,sort:r=>{s.field=r,s.direction=s.direction=="asc"?"desc":"asc"},destroy:r=>{confirmation("Tindakan ini akan menghapus data secara permanen").then(d=>{d&&p.Inertia.delete(route("admin.banners.destroy",{id:r}))})}}},watch:{params:{handler(){let o=C.exports.pickBy(this.params);p.Inertia.get(route("admin.banners.index"),o,{replace:!0,preserveState:!0})},deep:!0}}},O={class:"row"},P={class:"col-md-12 grid-margin"},S={class:"card"},T={class:"card-body"},E={class:"d-flex justify-content-start"},F={class:"col-lg-2 col-sm-6 me-2"},J={class:"mb-3"},M={class:"col-lg-2 col-sm-6 me-2"},G=t("option",{value:"25"},"Lihat 25 data",-1),q=t("option",{value:"50"},"Lihat 50 data",-1),A=t("option",{value:"100"},"Lihat 100 data",-1),H=t("option",{value:"200"},"Lihat 200 data",-1),K=[G,q,A,H],Q={class:"table-responsive"},R={class:"table"},W={class:"table-dark"},X=t("th",null,"NO",-1),Y={key:0,class:"fa-solid fa-arrow-down-a-z"},Z={key:1,class:"fa-solid fa-arrow-up-z-a"},$={key:0,class:"fa-solid fa-arrow-down-a-z"},tt={key:1,class:"fa-solid fa-arrow-up-z-a"},et=t("th",null,null,-1),st={class:"d-flex justify-content-end"},at=t("i",{class:"fas fa-eye"},null,-1),ot=t("i",{class:"fas fa-pencil"},null,-1),nt=["onClick"],it=t("i",{class:"fas fa-trash"},null,-1),lt=[it];function rt(o,s,i,e,m,r){const d=f("Link"),v=f("Pagination"),w=f("Layout");return n(),U(w,{title:"Banner",typeButton:"create",href:o.route("admin.banners.create")},{default:_(()=>[t("div",O,[t("div",P,[t("div",S,[t("div",T,[t("div",E,[t("div",F,[t("div",J,[y(t("input",{class:"form-control",placeholder:"Cari...","onUpdate:modelValue":s[0]||(s[0]=a=>e.params.search=a)},null,512),[[V,e.params.search]])])]),t("div",M,[y(t("select",{class:"form-control mb-3","onUpdate:modelValue":s[1]||(s[1]=a=>e.params.limit=a)},K,512),[[z,e.params.limit]])])]),t("div",Q,[t("table",R,[t("thead",W,[t("tr",null,[X,t("th",null,[t("span",{onClick:s[2]||(s[2]=a=>e.sort("title")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[k(" JUDUL "),e.params.direction=="asc"&&e.params.field=="title"?(n(),l("i",Y)):c("",!0),e.params.direction=="desc"&&e.params.field=="title"?(n(),l("i",Z)):c("",!0)])]),t("th",null,[t("span",{onClick:s[3]||(s[3]=a=>e.sort("sub_title")),class:"d-flex justify-content-between",style:{cursor:"pointer"}},[k(" SUB JUDUL "),e.params.direction=="asc"&&e.params.field=="sub_title"?(n(),l("i",$)):c("",!0),e.params.direction=="desc"&&e.params.field=="sub_title"?(n(),l("i",tt)):c("",!0)])]),et])]),t("tbody",null,[(n(!0),l(N,null,D(i.results.data,(a,b)=>(n(),l("tr",{key:b},[t("td",null,u(b+1),1),t("td",null,u(a.title),1),t("td",null,u(a.sub_title),1),t("td",st,[h(d,{href:o.route("admin.banners.show",{id:a.id}),class:"btn btn-sm btn-primary me-2 rounded-custom"},{default:_(()=>[at]),_:2},1032,["href"]),h(d,{href:o.route("admin.banners.edit",{id:a.id}),class:"btn btn-sm btn-warning me-2 rounded-custom"},{default:_(()=>[ot]),_:2},1032,["href"]),t("button",{class:"btn btn-sm btn-danger me-2 rounded-custom",onClick:dt=>e.destroy(a.id)},lt,8,nt)])]))),128))])]),h(v,{class:"mt-6",links:i.results.links,from:i.results.from,to:i.results.to,total:i.results.total},null,8,["links","from","to","total"])])])])])])]),_:1},8,["href"])}const ft=x(I,[["render",rt]]);export{ft as default};
