import{L as w}from"./App.82b61e73.js";import{_ as y,L as x,g as C,h as b,c as l,w as S,z as k,Z as V,I as d,o as a,a as s,q as L,e as f,E as h,j as c,b as F,k as p}from"./app.b8fedaf9.js";import{S as T}from"./SpinnerProcessing.c1fd1dc9.js";import{F as B}from"./FormText.2b858965.js";import{C as j}from"./upload-3.14b76ed1.js";const N={components:{Layout:w,Link:x,SpinnerProcessing:T,FormText:B,crop:j},props:{errors:Object,result:Object},setup(i){const o=C(i.result),n=b(i.result.path_url),e=b(!1);function m(){let t=o.data();k.Inertia.post(route("admin.events.update",{id:i.result.id}),{_method:"put",...t})}function _(t,u){o.path=V(t),n.value=t}return{form:o,submit:m,banner:n,cropSuccess:_,showCroper:e}}},P={class:"row"},U={class:"col-md-12 grid-margin"},E={class:"card"},z={class:"card-body"},I={class:"row"},J={class:"col-lg-6 mb-3"},M={class:"mb-3"},O=s("label",{for:"title",class:"form-label"},"Judul",-1),q={class:"col-lg-6 mb-3"},R={class:"mb-3"},Z=s("label",{for:"sub_title",class:"form-label"},"Sub Judul",-1),A={class:"col-lg-6 mb-3"},D={class:"mb-3"},G=s("label",{for:"banner",class:"form-label"},"Banner",-1),H={class:"mb-3"},K=["src"],Q=["disabled"],W=s("span",null,[s("i",{class:"fas fa-upload me-2"}),p("Pilih")],-1),X=[W],Y={class:"col-lg-12"},$=["disabled"],ss={class:"d-flex justify-content-center align-items-center"},es=s("span",null,[s("i",{class:"fas fa-save me-2"}),p("Simpan")],-1);function os(i,o,n,e,m,_){const t=d("FormText"),u=d("crop"),g=d("SpinnerProcessing"),v=d("Layout");return a(),l(v,{title:"Ubah Event",typeButton:"back",href:i.route("admin.events.index")},{default:S(()=>[s("div",P,[s("div",U,[s("div",E,[s("div",z,[s("form",{onSubmit:o[4]||(o[4]=L((...r)=>e.submit&&e.submit(...r),["prevent"]))},[s("div",I,[s("div",J,[s("div",M,[O,f(s("input",{class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=r=>e.form.title=r)},null,512),[[h,e.form.title]]),n.errors.title?(a(),l(t,{key:0,id:"title",message:n.errors.title},null,8,["message"])):c("",!0)])]),s("div",q,[s("div",R,[Z,f(s("input",{class:"form-control",id:"sub_title","onUpdate:modelValue":o[1]||(o[1]=r=>e.form.sub_title=r)},null,512),[[h,e.form.sub_title]]),n.errors.sub_title?(a(),l(t,{key:0,id:"sub_title",message:n.errors.sub_title},null,8,["message"])):c("",!0)])]),s("div",A,[s("div",D,[G,F(u,{field:"img",langType:"en",onCropSuccess:e.cropSuccess,width:1200,height:800,modelValue:e.showCroper,"onUpdate:modelValue":o[2]||(o[2]=r=>e.showCroper=r)},null,8,["onCropSuccess","modelValue"]),s("div",H,[s("img",{class:"img rounded fluid",alt:"",src:e.banner,style:{width:"200px"}},null,8,K)]),s("a",{onClick:o[3]||(o[3]=r=>e.showCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:e.form.processing},X,8,Q),e.form.errors.path?(a(),l(t,{key:0,id:"banner",message:e.form.errors.path},null,8,["message"])):c("",!0)])]),s("div",Y,[s("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:e.form.processing},[s("div",ss,[e.form.processing?(a(),l(g,{key:0,color:"text-white",size:"sm",me:"me-2"})):c("",!0),es])],8,$)])])],32)])])])])]),_:1},8,["href"])}const as=y(N,[["render",os]]);export{as as default};
