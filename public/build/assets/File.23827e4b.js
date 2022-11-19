import{L as S}from"./App.b377252e.js";import{P as F}from"./Pagination.aa47c70a.js";import{L as V,h,g as L,c,w as P,X as I,z as N,J as _,o as n,a as s,q as T,e as p,E as b,j as f,b as w,t as y,f as k,l as B,F as j,k as x}from"./app.982608ae.js";import{S as M}from"./SpinnerProcessing.77a69ef5.js";import{F as E}from"./FormText.6c4399ca.js";import{C as U}from"./upload-3.d01592e4.js";import{_ as z}from"./_plugin-vue_export-helper.cdc0426e.js";const O={components:{Layout:S,Link:V,SpinnerProcessing:M,FormText:E,crop:U,Pagination:F},props:{errors:Object,result:Object},setup(r){const e=h("");let a=h({name:"",src:"",description:"",id:""});const o=h(!1),l=L({name:"",alt:"",description:"",path:"",ext:"",product_id:r.result.id});function v(i,m){l.path=I(i),l.ext=i.split(";")[0].split("/")[1],e.value=i}function d(){l.transform(i=>({...i})).post(route("admin.products.files.store",r.result.id),{onSuccess:()=>{l.reset("name","alt","description","path"),e.value=""}})}function u(i){a.value=i,new bootstrap.Modal(document.getElementById("preview"),{keyboard:!1}).show()}return{form:l,showCroper:o,path:e,cropSuccess:v,submit:d,preview:u,previewImg:a,destroy:i=>{confirmation("Tindakan ini akan menghapus data secara permanen").then(m=>{m&&N.Inertia.delete(route("admin.products.files.destroy",{id:r.result.id,fileId:i}))})}}}},q={class:"row"},A={class:"col-md-6 grid-margin"},D={class:"card"},J={class:"card-body"},K={class:"row"},R={class:"col-lg-6 mb-3"},X={class:"mb-3"},G=s("label",{for:"name",class:"form-label"},"Nama",-1),H={class:"col-lg-6 mb-3"},Q={class:"mb-3"},W=s("label",{for:"alt",class:"form-label"},"Nama Alternatif",-1),Y={class:"col-lg-12 mb-3"},Z={class:"mb-3"},$=s("label",{for:"description",class:"form-label"},"Deskripsi",-1),ss={class:"col-lg-12 mb-3"},os={class:"mb-3"},es=s("label",{for:"path",class:"form-label"},"Foto",-1),ts={class:"mb-3"},is=["src"],as=["disabled"],ns=s("span",null,[s("i",{class:"fas fa-upload me-2"}),x("Pilih")],-1),rs=[ns],ls={class:"col-lg-12"},ds=["disabled"],cs={class:"d-flex justify-content-center align-items-center"},ms=s("span",null,[s("i",{class:"fas fa-save me-2"}),x("Simpan")],-1),_s={class:"col-md-6 grid-margin"},fs={class:"modal fade",id:"preview",tabindex:"-1","aria-labelledby":"previewLabel","aria-hidden":"true"},us={class:"modal-dialog modal-sm"},hs={class:"modal-content rounded-custom"},ps={class:"modal-body"},bs={class:"d-flex justify-content-between align-items-center mb-3"},vs={class:"h5"},gs=s("i",{class:"fas fa-trash"},null,-1),ws=[gs],ys={class:"row"},ks={class:"col-lg-12 mb-3"},xs=["src"],Cs={class:"col-lg-12 mb-3"},Ss={class:"card"},Fs={class:"card-body"},Vs={class:"row"},Ls={class:"card bg-dark text-white"},Ps=["src","alt","onClick"];function Is(r,e,a,o,l,v){const d=_("FormText"),u=_("crop"),g=_("SpinnerProcessing"),i=_("Pagination"),m=_("Layout");return n(),c(m,{title:"Foto Produk",typeButton:"back",href:r.route("admin.products.index")},{default:P(()=>[s("div",q,[s("div",A,[s("div",D,[s("div",J,[s("form",{onSubmit:e[6]||(e[6]=T((...t)=>o.submit&&o.submit(...t),["prevent"]))},[s("div",K,[s("div",R,[s("div",X,[G,p(s("input",{class:"form-control",id:"name","onUpdate:modelValue":e[0]||(e[0]=t=>o.form.name=t),onKeyup:e[1]||(e[1]=(...t)=>r.changeName&&r.changeName(...t))},null,544),[[b,o.form.name]]),o.form.errors.name?(n(),c(d,{key:0,id:"name",message:o.form.errors.name},null,8,["message"])):f("",!0)])]),s("div",H,[s("div",Q,[W,p(s("input",{class:"form-control",id:"alt","onUpdate:modelValue":e[2]||(e[2]=t=>o.form.alt=t)},null,512),[[b,o.form.alt]]),o.form.errors.alt?(n(),c(d,{key:0,id:"alt",message:o.form.errors.alt},null,8,["message"])):f("",!0)])]),s("div",Y,[s("div",Z,[$,p(s("textarea",{class:"form-control",id:"description",rows:"3","onUpdate:modelValue":e[3]||(e[3]=t=>o.form.description=t)},null,512),[[b,o.form.description]]),o.form.errors.description?(n(),c(d,{key:0,id:"description",message:o.form.errors.description},null,8,["message"])):f("",!0)])]),s("div",ss,[s("div",os,[es,w(u,{field:"img",langType:"en",onCropSuccess:o.cropSuccess,width:500,height:500,modelValue:o.showCroper,"onUpdate:modelValue":e[4]||(e[4]=t=>o.showCroper=t)},null,8,["onCropSuccess","modelValue"]),s("div",ts,[s("img",{class:"img rounded fluid",alt:"",src:o.path,style:{width:"100px"}},null,8,is)]),s("a",{onClick:e[5]||(e[5]=t=>o.showCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:o.form.processing},rs,8,as),o.form.errors.path?(n(),c(d,{key:0,id:"path",message:o.form.errors.path},null,8,["message"])):f("",!0)])]),s("div",ls,[s("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:o.form.processing},[s("div",cs,[o.form.processing?(n(),c(g,{key:0,color:"text-white",size:"sm",me:"me-2"})):f("",!0),ms])],8,ds)])])],32)])])]),s("div",_s,[s("div",fs,[s("div",us,[s("div",hs,[s("div",ps,[s("div",bs,[s("div",vs,y(o.previewImg.name),1),s("button",{class:"btn btn-sm rounded-custom btn-danger","data-bs-dismiss":"modal","aria-label":"Close",onClick:e[7]||(e[7]=t=>o.destroy(o.previewImg.id))},ws)]),s("div",ys,[s("div",ks,[s("img",{class:"img rounded-custom fluid",alt:"",src:o.previewImg.src,style:{width:"100%"}},null,8,xs)]),s("div",Cs,[s("p",null,y(o.previewImg.description),1)])])])])])]),s("div",Ss,[s("div",Fs,[s("div",Vs,[(n(!0),k(j,null,B(a.result.files.data,(t,C)=>(n(),k("div",{class:"col-lg-3",key:C},[s("div",Ls,[s("img",{src:t.src,class:"card-img",alt:t.alt,onClick:Ns=>o.preview(t)},null,8,Ps)])]))),128))]),w(i,{class:"mt-2",links:a.result.files.links,from:a.result.files.from,to:a.result.files.to,total:a.result.files.total},null,8,["links","from","to","total"])])])])])]),_:1},8,["href"])}const Os=z(O,[["render",Is]]);export{Os as default};
