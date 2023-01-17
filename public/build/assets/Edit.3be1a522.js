import{L as x}from"./App.c3b8bd99.js";import{_ as h,L as v,g as k,ab as u,E as _,o as i,c as d,w as p,a as e,q as y,e as a,G as m,l,b as V,z as D,j as w}from"./app.2d01b1f7.js";import{S as U}from"./SpinnerProcessing.a1ced27b.js";import{F as L}from"./FormText.5495bd75.js";import{Z as M}from"./main.4aa5e26d.js";const S={components:{Layout:x,Link:v,SpinnerProcessing:U,FormText:L,Datepicker:M},props:{errors:Object,result:Object},setup(c){const o=k(c.result);o.expired_at=u(o.expired_at);function t(){o.expired_at=u(new Date(o.expired_at)).format("YYYY-MM-DD HH:mm");let s=o.data();D.Inertia.post(route("admin.vouchers.update",{id:c.result.id}),{_method:"put",...s})}return{form:o,submit:t}}},B={class:"row"},F={class:"col-md-12 grid-margin"},T={class:"card"},j={class:"card-body"},C={class:"row"},N={class:"col-lg-6 mb-3"},Y={class:"mb-3"},O=e("label",{for:"code",class:"form-label"},"Code",-1),P={class:"col-lg-6 mb-3"},z={class:"mb-3"},E=e("label",{for:"desc",class:"form-label"},"Deskripsi",-1),H={class:"col-lg-6 mb-3"},Z={class:"mb-3"},q=e("label",{for:"limit",class:"form-label"},"Limit",-1),G={class:"col-lg-6 mb-3"},I={class:"mb-3"},W=e("label",{for:"expired_at",class:"form-label"},"Waktu Berakhir",-1),A={class:"col-lg-6 mb-3"},J={class:"mb-3"},K=e("label",{for:"min_order",class:"form-label"},"Minimal Order",-1),Q={class:"col-lg-6 mb-3"},R={class:"mb-3"},X=e("label",{for:"discount",class:"form-label"},"Diskon",-1),$={class:"col-lg-6 mb-3"},ee={class:"mb-3"},oe=e("label",{for:"max_discount",class:"form-label"},"Maksimal Diskon",-1),se={class:"col-lg-12"},te=["disabled"],re={class:"d-flex justify-content-center align-items-center"},ie=e("span",null,[e("i",{class:"fas fa-save me-2"}),w("Simpan")],-1);function de(c,o,t,s,le,ne){const n=_("FormText"),f=_("Datepicker"),b=_("SpinnerProcessing"),g=_("Layout");return i(),d(g,{title:"Ubah Voucher",typeButton:"back",href:c.route("admin.vouchers.index")},{default:p(()=>[e("div",B,[e("div",F,[e("div",T,[e("div",j,[e("form",{onSubmit:o[7]||(o[7]=y((...r)=>s.submit&&s.submit(...r),["prevent"]))},[e("div",C,[e("div",N,[e("div",Y,[O,a(e("input",{class:"form-control",id:"code","onUpdate:modelValue":o[0]||(o[0]=r=>s.form.code=r)},null,512),[[m,s.form.code]]),t.errors.code?(i(),d(n,{key:0,id:"code",message:t.errors.code},null,8,["message"])):l("",!0)])]),e("div",P,[e("div",z,[E,a(e("input",{class:"form-control",id:"desc","onUpdate:modelValue":o[1]||(o[1]=r=>s.form.desc=r)},null,512),[[m,s.form.desc]]),t.errors.desc?(i(),d(n,{key:0,id:"desc",message:s.form.errors.desc},null,8,["message"])):l("",!0)])]),e("div",H,[e("div",Z,[q,a(e("input",{type:"number",class:"form-control",id:"limit","onUpdate:modelValue":o[2]||(o[2]=r=>s.form.limit=r)},null,512),[[m,s.form.limit]]),t.errors.limit?(i(),d(n,{key:0,id:"limit",message:t.errors.limit},null,8,["message"])):l("",!0)])]),e("div",G,[e("div",I,[W,V(f,{modelValue:s.form.expired_at,"onUpdate:modelValue":o[3]||(o[3]=r=>s.form.expired_at=r),id:"expired_at"},null,8,["modelValue"]),t.errors.expired_at?(i(),d(n,{key:0,id:"expired_at",message:t.errors.expired_at},null,8,["message"])):l("",!0)])]),e("div",A,[e("div",J,[K,a(e("input",{type:"number",class:"form-control",id:"min_order","onUpdate:modelValue":o[4]||(o[4]=r=>s.form.min_order=r)},null,512),[[m,s.form.min_order]]),t.errors.min_order?(i(),d(n,{key:0,id:"min_order",message:t.errors.min_order},null,8,["message"])):l("",!0)])]),e("div",Q,[e("div",R,[X,a(e("input",{type:"number",class:"form-control",id:"discount","onUpdate:modelValue":o[5]||(o[5]=r=>s.form.discount=r)},null,512),[[m,s.form.discount]]),t.errors.discount?(i(),d(n,{key:0,id:"discount",message:t.errors.discount},null,8,["message"])):l("",!0)])]),e("div",$,[e("div",ee,[oe,a(e("input",{type:"number",class:"form-control",id:"max_discount","onUpdate:modelValue":o[6]||(o[6]=r=>s.form.max_discount=r)},null,512),[[m,s.form.max_discount]]),t.errors.max_discount?(i(),d(n,{key:0,id:"max_discount",message:t.errors.max_discount},null,8,["message"])):l("",!0)])]),e("div",se,[e("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:s.form.processing},[e("div",re,[s.form.processing?(i(),d(b,{key:0,color:"text-white",size:"sm",me:"me-2"})):l("",!0),ie])],8,te)])])],32)])])])])]),_:1},8,["href"])}const fe=h(S,[["render",de]]);export{fe as default};
