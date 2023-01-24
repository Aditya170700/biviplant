import{C as L,D as V,h as w,V as N,J as q,W as y,o as l,f as n,b as f,w as P,a as e,t as i,u as t,F as M,k as $,e as R,G as O,l as v,j as C,z as j,H as G,L as J,n as h,q as Q,X as x}from"./app.e8be5593.js";import{_ as U}from"./Header.a8ad852f.js";import{S as W}from"./Sidebar.64aa91fc.js";import{_ as X}from"./Footer.68cceae2.js";import Y from"./AddressModal.5aae5dd1.js";import Z from"./CourierModal.33481649.js";const ee=["content"],se=["content"],te=e("div",{class:"toast pwa-install-alert shadow bg-white",role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000","data-bs-autohide":"true"},[e("div",{class:"toast-body"},[e("div",{class:"content d-flex align-items-center mb-2"},[e("img",{src:"img/icons/icon-72x72.png",alt:""}),e("h6",{class:"mb-0"},"Add to Home Screen"),e("button",{class:"btn-close ms-auto",type:"button","data-bs-dismiss":"toast","aria-label":"Close"})]),e("span",{class:"mb-0 d-block"},[C("Add Suha on your mobile home screen. Click the"),e("strong",{class:"mx-1"},"Add to Home Screen"),C("button & enjoy it like a regular app.")])])],-1),oe={class:"page-content-wrapper",style:{"min-height":"100"}},ae={class:"container"},le={key:0,class:"cart-wrapper-area py-3 text-center"},ne=e("div",{class:"alert alert-danger",role:"alert"},[e("i",{class:"fa fa-cart-plus fa-3x mb-3"}),e("br"),e("div",{class:"h6 fw-bold"},"Cart kamu kosong!")],-1),ie=[ne],ce={key:1,class:"py-3"},de={class:"card p-0"},re={class:"card-body"},_e={class:"col-2"},ue={key:0,class:"rounded",src:"img/product/11.png",alt:""},he=["src"],pe={class:"col-8"},me={class:"text-muted text-decoration-line-through me-2 small"},ye={class:"text-dark small"},fe={class:"d-flex justify-content-start align-items-center p-0 my-3"},ge=["onClick"],be={class:"mx-2"},ke=["onClick"],ve={class:"col-2 text-end"},xe=["onClick"],Ce=e("i",{class:"lni lni-cross-circle text-danger"},null,-1),we=[Ce],Me={class:"col-12 mb-3"},$e={class:"row"},Se={class:"col-12 d-flex justify-content-between"},je=e("span",{class:"fw-bold"}," Dikirim ke :",-1),Be=["data-bs-target","aria-controls"],De=e("i",{class:"lni lni-pencil text-warning"},null,-1),Te=[De],Ve={class:"col-12 small text-muted"},qe={class:"col-12 mb-3"},Pe={class:"row"},Ae={class:"col-12 d-flex justify-content-between"},Fe=e("span",{class:"fw-bold"}," Kurir :",-1),Ie=["data-bs-target","aria-controls"],ze=e("i",{class:"lni lni-pencil text-warning"},null,-1),Ee=[ze],He={key:0,class:"col-12 small text-muted"},Ke={class:"small"},Le={class:"small"},Ne={class:"small"},Re={class:"small"},Oe={class:"small"},Ge={key:1,class:"col-12 small text-muted"},Je=e("span",{class:"text-danger blink"},"Belum memilih kurir",-1),Qe=[Je],Ue={class:"row mb-3"},We=e("div",{class:"col-12"},[e("h6",{class:"fw-bold mb-0"},"Voucher"),e("p",{class:"mb-2"}," Masukkan kode voucher dan dapatkan diskon ")],-1),Xe={class:"col-12"},Ye={class:"input-group mb-3"},Ze=["disabled"],es={key:0,class:"lni lni-checkmark"},ss={key:1,class:"spinner-border spinner-border-sm text-light",role:"status"},ts=e("span",{class:"visually-hidden"},"Loading...",-1),os=[ts],as={key:0,class:"small text-muted blink"},ls={key:1,class:"small text-success"},ns={class:"row mb-3"},is=e("div",{class:"col-12"},[e("h6",{class:"fw-bold mb-0"},"Pembayaran"),e("p",{class:"mb-2"}," Pilih metode pembayaran yang kamu inginkan ")],-1),cs={class:"col-12"},ds={class:"list-group"},rs={key:0,class:"list-group-item small border-danger"},_s=e("span",{class:"small blink text-danger"},"Sedang memuat metode pembayaran...",-1),us=[_s],hs={key:1,class:"list-group-item small border-danger small text-danger"},ps={key:0,class:"list-group"},ms=["href","aria-controls"],ys=e("i",{class:"lni lni-chevron-right"},null,-1),fs=["id"],gs={key:0,class:"row"},bs=["onClick"],ks={key:1,class:"row"},vs=["onClick"],xs=e("div",{class:"col-12 mt-3"},[e("hr")],-1),Cs={class:"row"},ws={class:"col-12 d-flex justify-content-between"},Ms=e("span",{class:"small fw-bold"},"Metode Pembayaran",-1),$s={key:0,class:"small text-success text-uppercase"},Ss={key:1,class:"small text-danger"},js={class:"col-12 d-flex justify-content-between"},Bs=e("span",{class:"small fw-bold"},"Voucher",-1),Ds={class:"small text-success"},Ts={class:"col-12 d-flex justify-content-between"},Vs=e("span",{class:"small fw-bold"},"Ongkos Kirim ",-1),qs={class:"small text-muted text-decoration-line-through"},Ps={class:"col-12 d-flex justify-content-between"},As=e("span",{class:"small fw-bold"},"Total",-1),Fs={class:"text-success fw-bold"},Is={class:"col-12 mb-3 d-flex justify-content-between"},zs=e("span",{class:"small fw-bold"},"Hemat",-1),Es={class:"small text-muted text-decoration-line-through"},Hs=e("i",{class:"lni lni-postcard me-2"},null,-1),Ks=e("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),Qs={__name:"Cart",props:{meta_title:String,meta_description:String,meta_keyword:String},setup(A){const S=A;let g=L(),r=V({code:"",data:null,loading:!1});const F=w(S.meta_title),I=w(S.meta_description),z=w(S.meta_keyword),p=w(0),o=V({data:[],selected:{paymentMethod:null,paymentChannel:null,fee:0,feeType:0},loading:!1});N(()=>{o.loading=!0,q.get("/api/orders/list-payment-method").then(a=>{o.data=a.data.data,o.loading=!1}).catch(a=>{o.loading=!1,y(a)})});function B(a,_){let s=a.qty+_;if(s==0){y("Kuantitas tidak boleh 0");return}if(s>a.product.stock){y("Stok tidak mencukupi");return}r.code="",r.data=null,p.value=0,j.Inertia.put(route("cart.update",a.id),{user_address_id:a.user_address_id,user_id:a.user_id,product_id:a.product_id,qty:a.qty+_,courier:null,shipping_cost:null,shipping_etd:null,shipping_service:null},{_method:"put"})}function b(){let a=0,_=0,s=0;return g.carts.forEach(c=>{var T;let d=c.product.strike_price,u=parseInt(c.product.price),m=parseInt(c.qty),k=parseInt((T=c.shipping_cost)!=null?T:0);a+=u*m+k,_+=d*m+k,s+=k}),a-=p.value,{res:a,strikeRes:_,shippingCost:s}}function E(a){j.Inertia.delete(route("cart.destroy",a),{_method:"delete"})}function D(a,_){var d,u,m,k;let s=o.data[a],c=null;s.Code=="va"?c=s.Channels[_]:c=s.PaymentMethod[_],o.selected.paymentMethod=s.Code,o.selected.paymentChannel=c.Code,o.selected.fee=(u=(d=c.TransactionFee)==null?void 0:d.ActualFee)!=null?u:0,o.selected.feeType=(k=(m=c.TransactionFee)==null?void 0:m.ActualFeeType)!=null?k:0}function H(){r.loading=!0,q.post("/api/vouchers/check",{code:r.code,total:b().res}).then(a=>{r.data=a.data.data,p.value=b().res*a.data.data.discount/100,r.loading=!1}).catch(a=>{y(a.response.data.message),r.loading=!1})}function K(){var _;let a=!0;if(!o.selected.paymentMethod||!o.selected.paymentChannel)return y("Belum memilih metode pembayaran"),a=!1,!1;g.carts.forEach(s=>{if(!s.courier||!s.shipping_cost||!s.shipping_etd||!s.shipping_service)return y("Belum memilih kurir"),a=!1,!1;if(!s.user_address_id)return y("Belum memilih alamat pengiriman"),a=!1,!1}),a&&j.Inertia.post(route("orders.store"),{carts:g.carts,payment_method:o.selected,voucher_code:(_=r.data)==null?void 0:_.code,voucher:p.value,total:b()},{_method:"post"})}return(a,_)=>(l(),n("div",null,[f(t(G),null,{default:P(()=>[e("title",null,i(t(F)),1),e("meta",{"head-key":"description",name:"description",content:t(I)},null,8,ee),e("meta",{"head-key":"keyword",name:"keyword",content:t(z)},null,8,se)]),_:1}),f(U),f(W),te,e("div",oe,[e("div",ae,[t(g).carts.length<=0?(l(),n("div",le,ie)):(l(),n("div",ce,[e("div",de,[e("div",re,[(l(!0),n(M,null,$(t(g).carts,(s,c)=>(l(),n("div",{class:"row mb-3",key:c},[f(Y,{user_addresses:t(g).user_addresses,cart:s},null,8,["user_addresses","cart"]),f(Z,{cart:s},null,8,["cart"]),e("div",_e,[s.product.files.length<=0?(l(),n("img",ue)):(l(),n("img",{key:1,class:"rounded",src:s.product.files[0].src,alt:""},null,8,he))]),e("div",pe,[f(t(J),{class:"product-title d-block",href:a.route("product.show",{slug:s.product.slug})},{default:P(()=>[C(i(s.product.name),1)]),_:2},1032,["href"]),e("span",me,i(s.product.strike_price_rp),1),e("span",ye,i(s.product.price_rp),1),e("div",fe,[e("i",{onClick:d=>B(s,-1),class:h("lni lni-circle-minus text-danger"),style:{"font-size":"20px"}},null,8,ge),e("span",be,i(s.qty)+" pcs",1),e("i",{onClick:d=>B(s,1),class:h("lni lni-circle-plus text-primary"),style:{"font-size":"20px"}},null,8,ke)])]),e("div",ve,[e("a",{href:"#",onClick:Q(d=>E(s.id),["prevent"]),style:{"font-size":"20px"}},we,8,xe)]),e("div",Me,[e("div",$e,[e("div",Se,[je,e("a",{href:"#","data-bs-toggle":"offcanvas","data-bs-target":`#addressModal${s.id}`,"aria-controls":`addressModal${s.id}`,style:{"align-items":"center"}},Te,8,Be)]),e("div",Ve,i(`${s.user_address.subdistrict.name}, ${s.user_address.subdistrict.city.name}, ${s.user_address.subdistrict.city.province.name}, ${s.user_address.postal_code}`),1)])]),e("div",qe,[e("div",Pe,[e("div",Ae,[Fe,e("a",{href:"#","data-bs-toggle":"offcanvas","data-bs-target":`#courierModal${s.id}`,"aria-controls":`courierModal${s.id}`,style:{"align-items":"center"}},Ee,8,Ie)]),s.courier||s.shipping_service||s.shipping_cost||s.shipping_etd?(l(),n("div",He,[e("p",Ke,i(s.courier),1),e("p",Le,i(s.shipping_service),1),e("p",Ne," Rp. "+i(s.shipping_cost),1),e("p",Re,i(s.shipping_etd)+" hari ",1),e("p",Oe,i(s.qty)+" pcs ",1)])):(l(),n("div",Ge,Qe))])])]))),128)),e("div",Ue,[We,e("div",Xe,[e("div",Ye,[R(e("input",{class:"form-control",placeholder:"KODE","onUpdate:modelValue":_[0]||(_[0]=s=>t(r).code=s)},null,512),[[O,t(r).code]]),e("button",{class:"btn btn-success",onClick:H,disabled:t(r).code==""||t(r).loading},[t(r).loading?(l(),n("div",ss,os)):(l(),n("i",es))],8,Ze)]),t(r).loading?(l(),n("span",as,"Cek voucher...")):v("",!0),t(p)>0?(l(),n("span",ls,"Mendapat potongan sebesar "+i(t(x)(t(p))),1)):v("",!0)])]),e("div",ns,[is,e("div",cs,[e("ul",ds,[t(o).loading?(l(),n("li",rs,us)):v("",!0),!t(o).loading&&t(o).data.length==0?(l(),n("li",hs," Metode pembayaran tidak ditemukan ")):v("",!0)]),!t(o).loading&&t(o).data.length>0?(l(),n("ul",ps,[(l(!0),n(M,null,$(t(o).data,(s,c)=>(l(),n("li",{class:"list-group-item small",key:c},[e("a",{"data-bs-toggle":"collapse",href:`#collapse-pm-${c}`,role:"button","aria-expanded":"false","aria-controls":`collapse-pm-${c}`,class:"text-decoration-none text-dark d-flex justify-content-between align-items-center"},[C(i(s.Description)+" ",1),ys],8,ms),e("div",{class:"collapse pt-3",id:`collapse-pm-${c}`},[s.Code!="va"?(l(),n("div",gs,[(l(!0),n(M,null,$(s.PaymentMethod,(d,u)=>(l(),n("div",{class:"col-6 mb-3",key:u},[e("div",{class:h(`rounded text-center border py-2 ${t(o).selected.paymentMethod==s.Code&&t(o).selected.paymentChannel==d.Code?"border-success":""}`),onClick:m=>D(c,u)},[e("div",{class:h(`h6 one-line fw-bold text-uppercase ${t(o).selected.paymentMethod==s.Code&&t(o).selected.paymentChannel==d.Code?"text-success":"opacity-25"}`)},i(d.Code),3),e("span",{class:h(`small one-line ${t(o).selected.paymentMethod==s.Code&&t(o).selected.paymentChannel==d.Code?"text-success":"opacity-25"}`)},i(d.Description),3)],10,bs)]))),128))])):(l(),n("div",ks,[(l(!0),n(M,null,$(s.Channels,(d,u)=>(l(),n("div",{class:"col-6 mb-3",key:u},[e("div",{class:h(`rounded text-center border py-2 ${t(o).selected.paymentMethod==s.Code&&t(o).selected.paymentChannel==d.Code?"border-success":""}`),onClick:m=>D(c,u)},[e("div",{class:h(`h6 one-line fw-bold text-uppercase ${t(o).selected.paymentMethod==s.Code&&t(o).selected.paymentChannel==d.Code?"text-success":"opacity-25"}`)},i(d.Code),3),e("span",{class:h(`small one-line ${t(o).selected.paymentMethod==s.Code&&t(o).selected.paymentChannel==d.Code?"text-success":"opacity-25"}`)},i(d.Description),3)],10,vs)]))),128))]))],8,fs)]))),128))])):v("",!0)]),xs]),e("div",Cs,[e("div",ws,[Ms,t(o).selected.paymentMethod&&t(o).selected.paymentChannel?(l(),n("span",$s,i(t(o).selected.paymentMethod)+"("+i(t(o).selected.paymentChannel)+")",1)):(l(),n("span",Ss,"Belum memilih"))]),e("div",js,[Bs,e("span",Ds,i(t(x)(t(p))),1)]),e("div",Ts,[Vs,e("span",qs,i(t(x)(b().shippingCost)),1)]),e("div",Ps,[As,e("span",Fs,i(t(x)(b().res)),1)]),e("div",Is,[zs,e("span",Es,i(t(x)(b().strikeRes)),1)]),e("div",{class:"col-12"},[e("div",{class:"d-grid"},[e("button",{class:"btn btn-success btn-sm",onClick:K},[Hs,C("Checkout ")])])])])])])]))])]),Ks,f(X)]))}};export{Qs as default};