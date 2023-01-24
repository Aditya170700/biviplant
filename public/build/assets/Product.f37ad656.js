import{_ as Ne,L as se,E as He,o as p,f as w,a as e,b as B,w as X,aa as $e,h as d,D as K,s as Ce,P as Ie,x as Ve,d as ue,p as fe,an as ze,S as ae,q as Me,N as Q,Q as H,C as qe,J as ce,W,t as x,u as S,c as Z,l as Ae,F as ee,k as te,j as Y,Z as Ee,Y as Pe,z as Ue,M as de,H as Xe,n as U}from"./app.a9c04c44.js";import{S as Ye}from"./Sidebar.ab3b788e.js";import{_ as Ke}from"./Footer.d48a67e2.js";import We from"./AddressModal.0b073c8f.js";import Fe from"./CourierModal.66c87589.js";import Je from"./AddressModalGuest.7f7f522c.js";const Ge={components:{Link:se}},Re={class:"header-area",id:"headerArea"},Qe={class:"container h-100 d-flex align-items-center justify-content-between"},Ze={class:"back-button"},et=e("svg",{class:"bi bi-arrow-left",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"currentColor",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"})],-1),tt=e("div",{class:"page-heading"},[e("h6",{class:"mb-0"},"Detail Produk")],-1),st=e("div",{class:"suha-navbar-toggler","data-bs-toggle":"offcanvas","data-bs-target":"#suhaOffcanvas","aria-controls":"suhaOffcanvas"},[e("span"),e("span"),e("span")],-1);function at(t,i,l,o,r,f){const u=He("Link");return p(),w("div",Re,[e("div",Qe,[e("div",Ze,[B(u,{href:"/products"},{default:X(()=>[et]),_:1})]),tt,st])])}const nt=Ne(Ge,[["render",at]]);/**
 * Vue 3 Carousel 0.1.48
 * (c) 2022
 * @license MIT
 */const k={itemsToShow:1,itemsToScroll:1,modelValue:0,transition:300,autoplay:0,snapAlign:"center",wrapAround:!1,pauseAutoplayOnHover:!1,mouseDrag:!0,touchDrag:!0,dir:"ltr",breakpoints:void 0},Oe={itemsToShow:{default:k.itemsToShow,type:Number},itemsToScroll:{default:k.itemsToScroll,type:Number},wrapAround:{default:k.wrapAround,type:Boolean},snapAlign:{default:k.snapAlign,validator(t){return["start","end","center","center-even","center-odd"].includes(t)}},transition:{default:k.transition,type:Number},breakpoints:{default:k.breakpoints,type:Object},autoplay:{default:k.autoplay,type:Number},pauseAutoplayOnHover:{default:k.pauseAutoplayOnHover,type:Boolean},modelValue:{default:void 0,type:Number},mouseDrag:{default:k.mouseDrag,type:Boolean},touchDrag:{default:k.touchDrag,type:Boolean},dir:{default:k.dir,validator(t){return["rtl","ltr"].includes(t)}},settings:{default(){return{}},type:Object}};function it(t,i){let l;return function(...o){l&&clearTimeout(l),l=setTimeout(()=>{t(...o),l=null},i)}}function lt(t,i){let l;return function(...o){const r=this;l||(t.apply(r,o),l=!0,setTimeout(()=>l=!1,i))}}function ot(t){var i,l,o;return t?((l=(i=t[0])===null||i===void 0?void 0:i.type)===null||l===void 0?void 0:l.name)==="CarouselSlide"?t:((o=t[0])===null||o===void 0?void 0:o.children)||[]:[]}function rt(t,i){if(t.wrapAround)return i-1;switch(t.snapAlign){case"start":return i-t.itemsToShow;case"end":return i-1;case"center":case"center-odd":return i-Math.ceil(t.itemsToShow/2);case"center-even":return i-Math.ceil(t.itemsToShow/2);default:return 0}}function ct(t){if(t.wrapAround)return 0;switch(t.snapAlign){case"start":return 0;case"end":return t.itemsToShow-1;case"center":case"center-odd":return Math.floor((t.itemsToShow-1)/2);case"center-even":return Math.floor((t.itemsToShow-2)/2);default:return 0}}function je(t,i,l,o){return t.wrapAround?i:Math.min(Math.max(i,o),l)}function dt({slidesBuffer:t,currentSlide:i,snapAlign:l,itemsToShow:o,wrapAround:r,slidesCount:f}){let u=t.indexOf(i);if(u===-1&&(u=t.indexOf(Math.ceil(i))),l==="center"||l==="center-odd"?u-=(o-1)/2:l==="center-even"?u-=(o-2)/2:l==="end"&&(u-=o-1),!r){const M=f-o,A=0;u=Math.max(Math.min(u,M),A)}return u}var ut=$e({name:"Carousel",props:Oe,setup(t,{slots:i,emit:l,expose:o}){var r;const f=d(null),u=d([]),M=d([]),A=d(0),m=d(1);let O,I,E=d({}),y=Object.assign({},k);const a=K(Object.assign({},y)),h=d((r=a.modelValue)!==null&&r!==void 0?r:0),G=d(0),F=d(0),n=d(0),j=d(0);H("config",a),H("slidesBuffer",M),H("slidesCount",m),H("currentSlide",h),H("maxSlide",n),H("minSlide",j);function D(){const s=Object.assign(Object.assign({},t),t.settings);E=d(Object.assign({},s.breakpoints)),y=Object.assign(Object.assign({},s),{settings:void 0,breakpoints:void 0}),L(y)}function $(){const s=Object.keys(E.value).map(g=>Number(g)).sort((g,T)=>+T-+g);let _=Object.assign({},y);s.some(g=>window.matchMedia(`(min-width: ${g}px)`).matches?(_=Object.assign(Object.assign({},_),E.value[g]),!0):!1),L(_)}function L(s){for(let _ in s)a[_]=s[_]}const V=it(()=>{E.value&&($(),c()),z()},16);function z(){if(!f.value)return;const s=f.value.getBoundingClientRect();A.value=s.width/a.itemsToShow}function c(){m.value=Math.max(u.value.length,1),!(m.value<=0)&&(F.value=Math.ceil((m.value-1)/2),n.value=rt(a,m.value),j.value=ct(a),h.value=je(a,h.value,n.value,j.value))}function v(){const s=[...Array(m.value).keys()];if(a.wrapAround&&a.itemsToShow+1<=m.value){let T=(a.itemsToShow!==1?Math.round((m.value-a.itemsToShow)/2):0)-h.value;if(a.snapAlign==="end"?T+=Math.floor(a.itemsToShow-1):(a.snapAlign==="center"||a.snapAlign==="center-odd")&&T++,T<0)for(let C=T;C<0;C++)s.push(Number(s.shift()));else for(let C=0;C<T;C++)s.unshift(Number(s.pop()))}M.value=s}Ce(()=>{E.value&&($(),c()),Ie(()=>setTimeout(z,16)),pe(),window.addEventListener("resize",V,{passive:!0})}),Ve(()=>{I&&clearTimeout(I),O&&clearInterval(O)});let b=!1;const q={x:0,y:0},R={x:0,y:0},P=K({x:0,y:0}),ne=d(!1),Be=()=>{ne.value=!0},De=()=>{ne.value=!1};function me(s){b=s.type==="touchstart",!(!b&&s.button!==0||J.value)&&(b||s.preventDefault(),q.x=b?s.touches[0].clientX:s.clientX,q.y=b?s.touches[0].clientY:s.clientY,document.addEventListener(b?"touchmove":"mousemove",he,!0),document.addEventListener(b?"touchend":"mouseup",_e,!0))}const he=lt(s=>{R.x=b?s.touches[0].clientX:s.clientX,R.y=b?s.touches[0].clientY:s.clientY;const _=R.x-q.x,g=R.y-q.y;P.y=g,P.x=_},16);function _e(){const s=a.dir==="rtl"?-1:1,_=Math.sign(P.x)*.4,g=Math.round(P.x/A.value+_)*s;let T=je(a,h.value-g,n.value,j.value);if(g&&!b){const C=re=>{re.stopPropagation(),window.removeEventListener("click",C,!0)};window.addEventListener("click",C,!0)}N(T),P.x=0,P.y=0,document.removeEventListener(b?"touchmove":"mousemove",he,!0),document.removeEventListener(b?"touchend":"mouseup",_e,!0)}function pe(){!a.autoplay||a.autoplay<=0||(O=setInterval(()=>{a.pauseAutoplayOnHover&&ne.value||ie()},a.autoplay))}function ve(){O&&(clearInterval(O),O=null),pe()}const J=d(!1);function N(s,_=!1){if(h.value===s||J.value)return;ve();const g=m.value-1;if(s>g)return N(s-m.value);if(s<0)return N(s+m.value);J.value=!0,G.value=h.value,h.value=s,_||l("update:modelValue",h.value),I=setTimeout(()=>{a.wrapAround&&v(),J.value=!1},a.transition)}function ie(){let s=h.value+a.itemsToScroll;a.wrapAround||(s=Math.min(s,n.value)),N(s)}function ge(){let s=h.value-a.itemsToScroll;a.wrapAround||(s=Math.max(s,j.value)),N(s)}const be={slideTo:N,next:ie,prev:ge};H("nav",be);const ye=ue(()=>dt({slidesBuffer:M.value,itemsToShow:a.itemsToShow,snapAlign:a.snapAlign,wrapAround:Boolean(a.wrapAround),currentSlide:h.value,slidesCount:m.value}));H("slidesToScroll",ye);const Le=ue(()=>{const s=a.dir==="rtl"?-1:1,_=ye.value*A.value*s;return{transform:`translateX(${P.x-_}px)`,transition:`${J.value?a.transition:0}ms`}});function we(){D()}function xe(){D(),$(),c(),v(),z(),ve()}function Se(){c(),v()}Object.keys(Oe).forEach(s=>{["modelValue"].includes(s)||fe(()=>t[s],xe)}),we(),ze(()=>{const s=m.value!==u.value.length;t.modelValue!==void 0&&h.value!==t.modelValue&&N(Number(t.modelValue),!0),s&&Se()});const ke={config:a,slidesBuffer:M,slidesCount:m,slideWidth:A,currentSlide:h,maxSlide:n,minSlide:j,middleSlide:F};o({updateBreakpointsConfigs:$,updateSlidesData:c,updateSlideWidth:z,updateSlidesBuffer:v,initCarousel:we,restartCarousel:xe,updateCarousel:Se,slideTo:N,next:ie,prev:ge,nav:be,data:ke});const le=i.default||i.slides,oe=i.addons,Te=K(ke);return()=>{const s=ot(le==null?void 0:le(Te)),_=(oe==null?void 0:oe(Te))||[];u.value=s,s.forEach((C,re)=>C.props.index=re);const g=ae("ol",{class:"carousel__track",style:Le.value,onMousedown:a.mouseDrag?Me(me,["capture"]):null,onTouchstart:a.touchDrag?Me(me,["capture"]):null},s),T=ae("div",{class:"carousel__viewport"},g);return ae("section",{ref:f,class:{carousel:!0,"carousel--rtl":a.dir==="rtl"},dir:a.dir,"aria-label":"Gallery",onMouseenter:Be,onMouseleave:De},[T,_])}}}),ft=$e({name:"CarouselSlide",props:{index:{type:Number,default:1}},setup(t,{slots:i}){const l=Q("config",K(Object.assign({},k))),o=Q("slidesBuffer",d([])),r=Q("currentSlide",d(0)),f=Q("slidesToScroll",d(0)),u=d(t.index);l.wrapAround&&(M(),fe(o,M));function M(){u.value=o.value.indexOf(t.index)}const A=ue(()=>({width:`${1/l.itemsToShow*100}%`,order:u.value.toString()})),m=()=>t.index===r.value,O=()=>{const y=Math.ceil(f.value),a=Math.floor(f.value+l.itemsToShow);return o.value.slice(y,a).includes(t.index)},I=()=>t.index===o.value[Math.ceil(f.value)-1],E=()=>t.index===o.value[Math.floor(f.value+l.itemsToShow)];return()=>{var y;return ae("li",{style:A.value,class:{carousel__slide:!0,"carousel__slide--active":m(),"carousel__slide--visible":O(),"carousel__slide--prev":I(),"carousel__slide--next":E()}},(y=i.default)===null||y===void 0?void 0:y.call(i))}}});const mt=["content"],ht=["content"],_t={class:"card fixed-bottom rounded-0 shadow-0 bg-fug",style:{bottom:"58px"}},pt={class:"card-body p-0"},vt={class:"d-flex justify-content-start align-items-center"},gt=e("div",{class:"col-3 text-center bg-fug-2 p-3 text-white border-end"},[e("i",{class:"lni lni-comments",style:{"font-size":"25px"}})],-1),bt=e("i",{class:"lni lni-cart-full",style:{"font-size":"25px"}},null,-1),yt=[bt],wt=e("i",{class:"lni lni-cart-full",style:{"font-size":"25px"}},null,-1),xt=[wt],St=e("div",{class:"toast pwa-install-alert shadow bg-white",role:"alert","aria-live":"assertive","aria-atomic":"true","data-bs-delay":"5000","data-bs-autohide":"true"},[e("div",{class:"toast-body"},[e("div",{class:"content d-flex align-items-center mb-2"},[e("img",{src:"/img/icons/icon-72x72.png",alt:""}),e("h6",{class:"mb-0"},"Add to Home Screen"),e("button",{class:"btn-close ms-auto",type:"button","data-bs-dismiss":"toast","aria-label":"Close"})]),e("span",{class:"mb-0 d-block"},[Y("Add Suha on your mobile home screen. Click the"),e("strong",{class:"mx-1"},"Add to Home Screen"),Y("button & enjoy it like a regular app.")])])],-1),kt={class:"page-content-wrapper bg-fug"},Tt={id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"carousel"},Mt={class:"carousel-indicators"},At=["data-bs-slide-to","aria-current","aria-label"],Ot={class:"carousel-inner"},jt={class:"single-product-slide text-center"},$t=["src","alt"],Ct=Ee('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2),Et={class:"product-description bg-fug"},Bt={class:"product-title-meta-data bg-white py-3"},Dt={class:"container d-flex justify-content-between"},Lt={class:"p-title-price"},Nt={class:"mb-1"},Ht={class:"sale-price mb-0"},It={class:"container my-2"},Vt=e("hr",null,null,-1),zt={class:"sales-offer-content d-flex mt-2"},qt=e("div",{class:"col-3"},[e("p",{class:"mb-1 fw-bold"},[e("strong",null,"Kondisi")])],-1),Pt={class:"col-9 fw-bold"},Ut={class:"sales-offer-content d-flex mt-2"},Xt=e("div",{class:"col-3"},[e("p",{class:"mb-1 fw-bold"},"Berat")],-1),Yt={class:"col-9 fw-bold"},Kt={class:"sales-offer-content d-flex mt-2"},Wt=e("div",{class:"col-3"},[e("p",{class:"mb-1 fw-bold"},"Stok")],-1),Ft={class:"col-9 fw-bold"},Jt=e("div",{class:"sales-offer-content d-flex mt-2"},[e("div",{class:"col-3"},[e("p",{class:"mb-1 fw-bold"},"Terjual")]),e("div",{class:"col-9 fw-bold"},[e("p",null,"390")])],-1),Gt={class:"sales-offer-content d-flex mt-2"},Rt=e("div",{class:"col-3"},[e("p",{class:"mb-1 fw-bold"},"Kategori")],-1),Qt={class:"col-9 fw-bold"},Zt={class:"sales-offer-content d-flex mt-2"},es=e("div",{class:"col-3"},[e("p",{class:"mb-1 fw-bold"},"Dikirim ke")],-1),ts={class:"col-9"},ss={href:"#","data-bs-toggle":"offcanvas","data-bs-target":"#addressModal","aria-controls":"addressModal",style:{"align-items":"center"}},as={class:"d-flex justify-content-between align-items-center"},ns={key:0},is={key:1},ls=e("i",{class:"lni lni-chevron-right small"},null,-1),os=Ee('<div class="sales-offer-content mb-2"><hr class="my-2"><ul class="mb-2"><li><i class="lni lni-checkmark-circle"></i> 100% Kualitas Unggul </li><li><i class="lni lni-checkmark-circle"></i> Bergaransi </li><li><i class="lni lni-checkmark-circle"></i> 100% Terpercaya </li></ul></div>',1),rs={class:"sales-offer-content mb-2"},cs=e("hr",{class:"my-2"},null,-1),ds=e("h6",{class:"mb-2"},"Deskripsi",-1),us=["innerHTML"],fs={class:"sales-offer-content my-5"},ms={class:"d-flex justify-content-between align-items-center"},hs=e("h6",null,"Produk Terkait",-1),_s={class:"related-product-slide carousel"},ps={class:"card product-card"},vs={class:"card-body text-start"},gs=["src","alt"],bs={class:"sale-price"},ys=e("br",null,null,-1),ws={class:"sales-offer-content my-5"},xs=e("div",{class:"d-flex justify-content-between align-items-center mb-2"},[e("h6",null,"Ulasan")],-1),Ss={class:"rating-review-content"},ks={class:"ps-0"},Ts={key:0,class:"single-user-review d-flex"},Ms={class:"user-thumbnail"},As=["src"],Os={class:"rating-comment"},js={class:"rating"},$s=["innerHTML"],Cs={class:"name-date"},Es=e("div",{class:"sales-offer-content mt-2 mb-5"},[e("hr",{class:"mt-4 mb-2"}),Y(" \xA0 ")],-1),Bs=e("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),zs={__name:"Product",props:{meta_title:String,meta_description:String,meta_keyword:String,related_products:Object,product:Object,user_addresses:Object,primary_address:Object},setup(t){var y,a,h,G,F;const i=t;let l=qe(),o=Pe();Ce(()=>{u()}),typeof window<"u"&&K((y=i.primary_address)!=null?y:JSON.parse(localStorage.getItem("primary_address")));let r=K({user_id:(a=l.user)==null?void 0:a.id,product_id:i.product.id,user_address_id:(h=i.primary_address)==null?void 0:h.id,user_address:"",courier:"",shipping_service:"",shipping_cost:"",shipping_etd:"",qty:(F=(G=i.product.cart_user)==null?void 0:G.qty)!=null?F:0+1}),f=K({data:[],meta:"",loading:!1,more:!0});function u(){ce.get(`/api/feedbacks/${i.product.id}`).then(n=>{f.data=n.data.data,f.meta=n.data.meta,f.loading=!1}).catch(n=>{f.loading=!1,W(n.response.data.message)})}const M=d(i.meta_title),A=d(i.meta_description),m=d(i.meta_keyword);function O(){if(!r.user_address_id){W("Silahkan pilih alamat pengiriman terlebih dahulu");return}Ue.Inertia.post(route("cart.store"),r)}function I(){if(!r.user_address_id){W("Silahkan pilih alamat pengiriman terlebih dahulu");return}i.product.cart_user==null?ce.post("/api/carts",r).then(n=>{i.product.cart_user=n.data.data,de(n.data.message)}).catch(n=>{W(n.response.data.message)}):ce.put("/api/carts",r).then(n=>{i.product.cart_user=n.data.data,de(n.data.message)}).catch(n=>{W(n.response.data.message)})}function E(){if(o.getters.courier==null){W("Silahkan pilih kurir terlebih dahulu");return}r.user_id=null,r.courier=o.getters.courier.name,r.shipping_service=o.getters.courier.service,r.shipping_cost=o.getters.courier.value,r.shipping_etd=o.getters.courier.etd,r.user_address=primary_address,typeof window<"u"&&localStorage.setItem("cart",JSON.stringify(r)),de("Produk berhasil ditambahkan ke keranjang")}return fe(()=>o.getters.courier,n=>{var j,D,$,L,V;r.courier=(j=n==null?void 0:n.name)!=null?j:null,r.shipping_service=(D=n==null?void 0:n.service)!=null?D:null,r.shipping_cost=($=n==null?void 0:n.value)!=null?$:null,r.shipping_etd=(L=n==null?void 0:n.etd)!=null?L:null,r.qty=(V=n==null?void 0:n.qty)!=null?V:0}),(n,j)=>{var D,$,L,V,z;return p(),w("div",null,[B(S(Xe),null,{default:X(()=>[e("title",null,x(S(M)),1),e("meta",{"head-key":"description",name:"description",content:S(A)},null,8,mt),e("meta",{"head-key":"keyword",name:"keyword",content:S(m)},null,8,ht)]),_:1}),B(nt),B(Ye),t.user_addresses!=null?(p(),Z(We,{key:0,user_addresses:t.user_addresses},null,8,["user_addresses"])):(p(),Z(Je,{key:1})),t.primary_address!=null?(p(),Z(Fe,{key:2,primary_address:t.primary_address,product:t.product,qty:S(r).qty},null,8,["primary_address","product","qty"])):Ae("",!0),e("div",_t,[e("div",pt,[e("div",vt,[gt,S(l).user?(p(),w("div",{key:0,class:"col-3 text-center bg-fug-2 p-3 text-white border-start",onClick:I},yt)):(p(),w("div",{key:1,class:"col-3 text-center bg-fug-2 p-3 text-white border-start",onClick:E},xt)),e("div",{class:"col-6 text-center bg-fug-3 p-3 text-white",style:{"font-size":"18px"},onClick:O}," Beli Sekarang ")])])]),St,e("div",kt,[e("div",Tt,[e("div",Mt,[(p(!0),w(ee,null,te(t.product.files,(c,v)=>(p(),w("button",{key:v,type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":v,class:U(v==0?"active":""),"aria-current":v==0,"aria-label":`Slide ${v+1}`},null,10,At))),128))]),e("div",Ot,[(p(!0),w(ee,null,te(t.product.files,(c,v)=>(p(),w("div",{class:U(["carousel-item",v==0?"active":""]),key:v},[e("div",jt,[e("img",{class:"rounded mx-auto d-block mb-2",src:c.src,alt:c.alt},null,8,$t)])],2))),128))]),Ct]),e("div",Et,[e("div",Bt,[e("div",Dt,[e("div",Lt,[e("h6",Nt,x(t.product.name),1),e("p",Ht,[Y(x(t.product.price_rp),1),e("span",null,x(t.product.strike_price_rp),1)])])]),e("div",It,[Vt,e("div",zt,[qt,e("div",Pt,[e("p",null,x((D=t.product.text_condition)!=null?D:"-"),1)])]),e("div",Ut,[Xt,e("div",Yt,[e("p",null,x(t.product.weight)+" gram",1)])]),e("div",Kt,[Wt,e("div",Ft,[e("p",null,x(t.product.stock),1)])]),Jt,e("div",Gt,[Rt,e("div",Qt,[e("p",null,x((L=($=t.product)==null?void 0:$.category)==null?void 0:L.name),1)])]),e("div",Zt,[es,e("div",ts,[e("a",ss,[e("div",as,[t.primary_address?(p(),w("p",ns,x(`${t.primary_address.subdistrict.name}, ${t.primary_address.subdistrict.city.name}, ${t.primary_address.subdistrict.city.province.name}, ${t.primary_address.postal_code}`),1)):(p(),w("p",is,"Belum Ada Alamat")),ls])])])]),os,e("div",rs,[cs,ds,e("p",{innerHTML:t.product.description},null,8,us)]),e("div",fs,[e("div",ms,[hs,B(S(se),{class:"btn btn-light",href:n.route("category.show",{slug:(z=(V=t.product)==null?void 0:V.category)==null?void 0:z.slug})},{default:X(()=>[Y(" Lihat Semua ")]),_:1},8,["href"])]),e("div",_s,[B(S(ut),{"items-to-show":1.5},{default:X(()=>[(p(!0),w(ee,null,te(t.related_products,(c,v)=>(p(),Z(S(ft),{class:"single-related-product-slide",key:v},{default:X(()=>[e("div",ps,[e("div",vs,[B(S(se),{class:"product-thumbnail d-block",href:n.route("product.show",{slug:c.slug})},{default:X(()=>{var b,q;return[e("img",{class:"mb-2",src:(b=c.files[0])==null?void 0:b.src,alt:(q=c.files[0])==null?void 0:q.alt},null,8,gs)]}),_:2},1032,["href"]),B(S(se),{class:"product-title d-block",href:n.route("product.show",{slug:c.slug})},{default:X(()=>[Y(x(c.name),1)]),_:2},1032,["href"]),e("p",bs,[Y(x(c.price_rp),1),ys,e("span",null,x(c.strike_price_rp),1)])])])]),_:2},1024))),128))]),_:1},8,["items-to-show"])])]),e("div",ws,[xs,e("div",Ss,[e("ul",ks,[S(f).data.length<1?(p(),w("li",Ts," Belum ada ulasan ")):Ae("",!0),(p(!0),w(ee,null,te(S(f).data,(c,v)=>(p(),w("li",{class:"single-user-review d-flex",key:v},[e("div",Ms,[e("img",{src:c.user.profile_photo_path_url,alt:""},null,8,As)]),e("div",Os,[e("div",js,[e("i",{class:U(`lni lni-star${c.rating>=1?"-filled":""}`)},null,2),e("i",{class:U(`lni lni-star${c.rating>=2?"-filled":""}`)},null,2),e("i",{class:U(`lni lni-star${c.rating>=3?"-filled":""}`)},null,2),e("i",{class:U(`lni lni-star${c.rating>=4?"-filled":""}`)},null,2),e("i",{class:U(`lni lni-star${c.rating>=5?"-filled":""}`)},null,2)]),e("p",{class:"comment mb-0",innerHTML:c.comment},null,8,$s),e("span",Cs,x(c.created_at),1)])]))),128))])])]),Es])])])]),Bs,B(Ke)])}}};export{zs as default};
