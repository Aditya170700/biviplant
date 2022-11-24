import{L as v}from"./App.b377252e.js";import{L as x,g as h,a9 as u,c as i,w as k,z as p,J as _,o as d,a as o,q as y,e as a,E as m,j as l,b as V,k as D}from"./app.982608ae.js";import{S as w}from"./SpinnerProcessing.77a69ef5.js";import{F as U}from"./FormText.6c4399ca.js";import{v as L}from"./main.98090e04.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";const S={components:{Layout:v,Link:x,SpinnerProcessing:w,FormText:U,Datepicker:L},props:{errors:Object,result:Object},setup(c){const e=h(c.result);e.expired_at=u(e.expired_at);function t(){e.expired_at=u(new Date(e.expired_at)).format("YYYY-MM-DD HH:mm");let s=e.data();p.Inertia.post(route("admin.vouchers.update",{id:c.result.id}),{_method:"put",...s})}return{form:e,submit:t}}},B={class:"row"},F={class:"col-md-12 grid-margin"},T={class:"card"},j={class:"card-body"},C={class:"row"},N={class:"col-lg-6 mb-3"},Y={class:"mb-3"},O=o("label",{for:"code",class:"form-label"},"Code",-1),P={class:"col-lg-6 mb-3"},z={class:"mb-3"},E=o("label",{for:"desc",class:"form-label"},"Deskripsi",-1),H={class:"col-lg-6 mb-3"},q={class:"mb-3"},I=o("label",{for:"limit",class:"form-label"},"Limit",-1),J={class:"col-lg-6 mb-3"},W={class:"mb-3"},A=o("label",{for:"expired_at",class:"form-label"},"Waktu Berakhir",-1),G={class:"col-lg-6 mb-3"},K={class:"mb-3"},Q=o("label",{for:"min_order",class:"form-label"},"Minimal Order",-1),R={class:"col-lg-6 mb-3"},X={class:"mb-3"},Z=o("label",{for:"discount",class:"form-label"},"Diskon",-1),$={class:"col-lg-6 mb-3"},oo={class:"mb-3"},eo=o("label",{for:"max_discount",class:"form-label"},"Maksimal Diskon",-1),so={class:"col-lg-12"},to=["disabled"],ro={class:"d-flex justify-content-center align-items-center"},io=o("span",null,[o("i",{class:"fas fa-save me-2"}),D("Simpan")],-1);function lo(c,e,t,s,no,ao){const n=_("FormText"),f=_("Datepicker"),b=_("SpinnerProcessing"),g=_("Layout");return d(),i(g,{title:"Ubah Voucher",typeButton:"back",href:c.route("admin.vouchers.index")},{default:k(()=>[o("div",B,[o("div",F,[o("div",T,[o("div",j,[o("form",{onSubmit:e[7]||(e[7]=y((...r)=>s.submit&&s.submit(...r),["prevent"]))},[o("div",C,[o("div",N,[o("div",Y,[O,a(o("input",{class:"form-control",id:"code","onUpdate:modelValue":e[0]||(e[0]=r=>s.form.code=r)},null,512),[[m,s.form.code]]),t.errors.code?(d(),i(n,{key:0,id:"code",message:t.errors.code},null,8,["message"])):l("",!0)])]),o("div",P,[o("div",z,[E,a(o("input",{class:"form-control",id:"desc","onUpdate:modelValue":e[1]||(e[1]=r=>s.form.desc=r)},null,512),[[m,s.form.desc]]),t.errors.desc?(d(),i(n,{key:0,id:"desc",message:s.form.errors.desc},null,8,["message"])):l("",!0)])]),o("div",H,[o("div",q,[I,a(o("input",{type:"number",class:"form-control",id:"limit","onUpdate:modelValue":e[2]||(e[2]=r=>s.form.limit=r)},null,512),[[m,s.form.limit]]),t.errors.limit?(d(),i(n,{key:0,id:"limit",message:t.errors.limit},null,8,["message"])):l("",!0)])]),o("div",J,[o("div",W,[A,V(f,{modelValue:s.form.expired_at,"onUpdate:modelValue":e[3]||(e[3]=r=>s.form.expired_at=r),id:"expired_at"},null,8,["modelValue"]),t.errors.expired_at?(d(),i(n,{key:0,id:"expired_at",message:t.errors.expired_at},null,8,["message"])):l("",!0)])]),o("div",G,[o("div",K,[Q,a(o("input",{type:"number",class:"form-control",id:"min_order","onUpdate:modelValue":e[4]||(e[4]=r=>s.form.min_order=r)},null,512),[[m,s.form.min_order]]),t.errors.min_order?(d(),i(n,{key:0,id:"min_order",message:t.errors.min_order},null,8,["message"])):l("",!0)])]),o("div",R,[o("div",X,[Z,a(o("input",{type:"number",class:"form-control",id:"discount","onUpdate:modelValue":e[5]||(e[5]=r=>s.form.discount=r)},null,512),[[m,s.form.discount]]),t.errors.discount?(d(),i(n,{key:0,id:"discount",message:t.errors.discount},null,8,["message"])):l("",!0)])]),o("div",$,[o("div",oo,[eo,a(o("input",{type:"number",class:"form-control",id:"max_discount","onUpdate:modelValue":e[6]||(e[6]=r=>s.form.max_discount=r)},null,512),[[m,s.form.max_discount]]),t.errors.max_discount?(d(),i(n,{key:0,id:"max_discount",message:t.errors.max_discount},null,8,["message"])):l("",!0)])]),o("div",so,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:s.form.processing},[o("div",ro,[s.form.processing?(d(),i(b,{key:0,color:"text-white",size:"sm",me:"me-2"})):l("",!0),io])],8,to)])])],32)])])])])]),_:1},8,["href"])}const go=M(S,[["render",lo]]);export{go as default};
