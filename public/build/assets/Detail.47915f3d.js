import{C as g,o as n,f as a,b as r,w as m,a as s,t as e,u as t,j as c,F as k,k as w,l as f,z as x,H as M,L as p,X as _,am as h,W as j,M as Y}from"./app.0050a820.js";import{_ as D}from"./Header.b37de8c2.js";import{S as P}from"./Sidebar.7a70638d.js";import{_ as H}from"./Footer.589e6b74.js";import{c as $}from"./vue3-clipboard-es.f4fdbc1a.js";const C=["content"],N=["content"],S={class:"page-content-wrapper"},V={class:"container"},T={class:"profile-wrapper-area py-3"},W={class:"card"},A={class:"card-body p-4"},B={class:"d-flex align-items-center justify-content-between mb-3"},L=s("span",{class:"h6"},"Rincian Pesanan",-1),I=s("i",{class:"lni lni-arrow-left me-2"},null,-1),E={class:"col-lg-12 py-2"},F=s("div",{class:"d-flex justify-content-between align-items-center"},[s("span",{class:"h6"},[s("i",{class:"lni lni-gift me-2"}),c(" Produk ")])],-1),K={class:"d-flex justify-content-start"},q=["src"],z={class:"h6 one-line"},O={class:"small mb-3"},R={class:"d-flex justify-content-between small"},X={class:"opacity-25 text-decoration-line-through small"},G={class:"small"},J={class:"col-lg-12 py-2"},Q=s("div",{class:"d-flex justify-content-between align-items-center"},[s("span",{class:"h6"},[s("i",{class:"lni lni-map-marker me-2"}),c(" Alamat Pengiriman ")])],-1),U={class:"opacity-50"},Z={class:"opacity-50"},ss={class:"opacity-50 small"},ts={class:"opacity-50 small"},es={class:"col-lg-12 py-2"},os={class:"d-flex justify-content-between align-items-center"},is=s("span",{class:"h6"},[s("i",{class:"lni lni-caravan me-2"}),c(" Informasi Pengiriman ")],-1),ns={class:"opacity-50"},as={class:"opacity-50"},cs={class:"opacity-50 small"},ls={class:"opacity-50 small"},ds=s("hr",{class:"my-2"},null,-1),rs={class:"row"},_s={class:"col-lg-12"},ms={class:"d-flex justify-content-between opacity-50 my-2"},hs=s("div",{class:"small"},"Voucher",-1),ps={class:"small"},us={class:"d-flex justify-content-between my-2"},ys=s("div",{class:"small"},"Total",-1),fs={class:"small"},vs={class:"col-lg-12 py-2"},bs=s("hr",{class:"mb-2"},null,-1),gs=s("div",{class:"d-flex justify-content-between align-items-center"},[s("span",{class:"h6"},[s("i",{class:"lni lni-credit-cards me-2"}),c(" Metode Pembayaran ")])],-1),ks={class:"col-lg-12"},ws={class:"d-flex justify-content-between opacity-50 my-2"},xs=s("div",{class:"small"},"Metode",-1),Ms={class:"small text-uppercase"},js={class:"col-lg-12"},Ys={class:"d-flex justify-content-between opacity-50 my-2"},Ds=s("div",{class:"small"},"Channel",-1),Ps={class:"small text-uppercase"},Hs={class:"col-lg-12"},$s={class:"d-flex justify-content-between opacity-50 my-2"},Cs=s("div",{class:"small"}," Nomor Pembayaran ",-1),Ns={class:"small text-uppercase"},Ss={class:"col-lg-12 py-2"},Vs=s("hr",{class:"mb-2"},null,-1),Ts={class:"d-flex justify-content-between align-items-center"},Ws=s("span",{class:"small opacity-50"}," No. Pesanan ",-1),As={class:"small opacity-50 text-uppercase"},Bs={class:"d-flex justify-content-between align-items-center"},Ls=s("span",{class:"small opacity-50"}," Waktu Pemesanan ",-1),Is={class:"small opacity-50"},Es={class:"d-flex justify-content-between align-items-center"},Fs=s("span",{class:"small opacity-50"}," Waktu Pembayaran ",-1),Ks={key:0,class:"small opacity-50"},qs={key:1,class:"small opacity-50"},zs={class:"d-flex justify-content-between align-items-center"},Os=s("span",{class:"small opacity-50"}," Waktu Pengiriman ",-1),Rs={key:0,class:"small opacity-50"},Xs={key:1,class:"small opacity-50"},Gs={class:"d-flex justify-content-between align-items-center"},Js=s("span",{class:"small opacity-50"}," Waktu Pesanan Selesai ",-1),Qs={key:0,class:"small opacity-50"},Us={key:1,class:"small opacity-50"},Zs=s("hr",{class:"mt-2"},null,-1),st={key:0,class:"col-12"},tt={class:"d-grid"},et=s("i",{class:"lni lni-gift me-2"},null,-1),ot={key:1,class:"col-12"},it={class:"d-grid"},nt=s("i",{class:"lni lni-pencil me-2"},null,-1),at=s("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),ht={__name:"Detail",setup(ct){let o=g();function v(l,d){$(l,void 0,(i,u)=>{i?j(d):Y(d)})}function b(l){x.Inertia.post(route("orders.finish",{id:l}),{_method:"put"})}return(l,d)=>(n(),a("div",null,[r(t(M),null,{default:m(()=>[s("title",null,e(t(o).metaTitle),1),s("meta",{"head-key":"description",name:"description",content:t(o).metaDescription},null,8,C),s("meta",{"head-key":"keyword",name:"keyword",content:t(o).metaKeyword},null,8,N)]),_:1}),r(D),r(P),s("div",S,[s("div",V,[s("div",T,[s("div",W,[s("div",A,[s("div",B,[L,r(t(p),{href:l.route("orders.history"),class:"btn btn-outline-secondary px-2 btn-sm"},{default:m(()=>[I,c(" Kembali ")]),_:1},8,["href"])]),(n(!0),a(k,null,w(t(o).order.order_details,(i,u)=>{var y;return n(),a("div",{class:"row",key:u},[s("div",E,[F,s("div",K,[s("img",{src:i.product.files[0].src,alt:"",style:{width:"100px"},class:"rounded me-2"},null,8,q),s("div",null,[s("div",z,e(i.product.name),1),s("div",O,e(i.qty)+" pcs ",1),s("div",R,[s("span",X,e(t(_)(i.strike_price)),1),s("span",G,e(t(_)(i.price)),1)])])])]),s("div",J,[Q,s("div",U,e(i.user_address.receiver),1),s("div",Z,e(i.user_address.phone),1),s("div",ss,e(i.user_address.detail),1),s("div",ts,e(`${i.user_address.subdistrict.name}, ${i.user_address.subdistrict.city.name}, ${i.user_address.subdistrict.city.province.name} ${i.user_address.postal_code}`),1)]),s("div",es,[s("div",os,[is,r(t(p),{href:l.route("orders.track",i.id),class:"btn btn-sm btn-light"},{default:m(()=>[c("LIHAT")]),_:2},1032,["href"])]),s("div",ns,e(i.courier),1),s("div",as,e(i.shipping_service)+" - "+e((y=i.receipt)!=null?y:"Belum ada resi"),1),s("div",cs,e(i.shipping_etd)+" hari ",1),s("div",ls,e(t(_)(i.shipping_cost)),1),ds])])}),128)),s("div",rs,[s("div",_s,[s("div",ms,[hs,s("div",ps,e(t(_)(t(o).order.voucher)),1)]),s("div",us,[ys,s("div",fs,e(t(_)(t(o).order.total)),1)])]),s("div",vs,[bs,gs,s("div",ks,[s("div",ws,[xs,s("div",Ms,e(t(o).order.payment_method),1)])]),s("div",js,[s("div",Ys,[Ds,s("div",Ps,e(t(o).order.payment_channel),1)])]),s("div",Hs,[s("div",$s,[Cs,s("div",Ns,[c(e(t(o).order.payment_no),1),s("i",{class:"lni lni-empty-file ms-2",onClick:d[0]||(d[0]=i=>v(t(o).order.payment_no,"VA berhasil disalin"))})])])])]),s("div",Ss,[Vs,s("div",Ts,[Ws,s("span",As,e(t(o).order.id.substr(0,13)),1)]),s("div",Bs,[Ls,s("span",Is,e(t(h)(t(o).order.created_at,"DD MMMM YYYY HH:mm")),1)]),s("div",Es,[Fs,t(o).order.paid_at?(n(),a("span",Ks,e(t(h)(t(o).order.paid_at,"DD MMMM YYYY HH:mm")),1)):(n(),a("span",qs,"-"))]),s("div",zs,[Os,t(o).order.send_at?(n(),a("span",Rs,e(t(h)(t(o).order.send_at,"DD MMMM YYYY HH:mm")),1)):(n(),a("span",Xs,"-"))]),s("div",Gs,[Js,t(o).order.finish_at?(n(),a("span",Qs,e(t(h)(t(o).order.finish_at,"DD MMMM YYYY HH:mm")),1)):(n(),a("span",Us,"-"))]),Zs]),t(o).order.payment_status=="Dikirim"?(n(),a("div",st,[s("div",tt,[s("button",{class:"btn btn-sm btn-light text-white",style:{"background-color":"#00b893 !important"},onClick:d[1]||(d[1]=i=>b(t(o).order.id))},[et,c("Pesanan sudah diterima? ")])])])):f("",!0),t(o).order.payment_status=="Selesai"&&t(o).order.feedbacks_count<1?(n(),a("div",ot,[s("div",it,[r(t(p),{class:"btn btn-sm btn-light text-white",style:{"background-color":"#00b893 !important"},href:l.route("rating.index",{id:t(o).order.id})},{default:m(()=>[nt,c("Nilai ")]),_:1},8,["href"])])])):f("",!0)])])])])])]),at,r(H)]))}};export{ht as default};