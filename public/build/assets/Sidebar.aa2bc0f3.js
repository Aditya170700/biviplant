import{_ as d,L as f,I as p,o as n,f as i,a as s,t as h,k as a,j as _,b as l,w as t,z as b}from"./app.b8fedaf9.js";const g={components:{Link:f},setup(){return{logout:()=>{b.Inertia.post(route("logout"))}}}},v={class:"offcanvas offcanvas-start suha-offcanvas-wrap",tabindex:"-1",id:"suhaOffcanvas","aria-labelledby":"suhaOffcanvasLabel",style:{background:"rgb(0, 184, 148) !important",width:"250px !important"}},m=s("button",{class:"btn-close btn-close-white text-reset",type:"button","data-bs-dismiss":"offcanvas","aria-label":"Close"},[s("i",{class:"lni lni-close"})],-1),k={class:"offcanvas-body"},y={class:"sidenav-profile"},w={class:"user-profile"},$=["src"],L={class:"user-info"},C={class:"user-name mb-1"},P={key:0,class:"available-balance"},K=s("span",{class:"counter"},"583.67",-1),N={key:0,class:"sidenav-nav ps-0"},S=s("i",{class:"lni lni-user"},null,-1),T=s("i",{class:"lni lni-postcard"},null,-1),V=s("i",{class:"lni lni-package"},null,-1),j=s("i",{class:"fa fa-building"},null,-1),B=s("i",{class:"fa fa-shield"},null,-1),D=s("i",{class:"lni lni-power-switch"},null,-1),O={key:1,class:"sidenav-nav ps-0"},z=s("i",{class:"lni lni-power-switch"},null,-1),G=s("i",{class:"lni lni-apartment"},null,-1),I=s("i",{class:"fa fa-shield"},null,-1);function R(e,r,A,u,E,q){const o=p("Link");return n(),i("div",v,[m,s("div",k,[s("div",y,[s("div",w,[s("img",{src:e.$page.props.user?e.$page.props.user.profile_photo_path_url:"https://ui-avatars.com/api/?name=Guest&color=50D048&background=C0D276&size=500",alt:""},null,8,$)]),s("div",L,[s("h6",C,h(e.$page.props.user?e.$page.props.user.name:"Guest"),1),e.$page.props.user?(n(),i("p",P,[a(" Total balance $"),K])):_("",!0)])]),e.$page.props.user?(n(),i("ul",N,[s("li",null,[l(o,{href:e.route("profile.index")},{default:t(()=>[S,a("Profil Saya")]),_:1},8,["href"])]),s("li",null,[l(o,{href:e.route("address.index")},{default:t(()=>[T,a("Alamat Pengiriman")]),_:1},8,["href"])]),s("li",null,[l(o,{href:e.route("orders.history")},{default:t(()=>[V,a("Riwayat Pesanan")]),_:1},8,["href"])]),s("li",null,[l(o,{href:e.route("about_us")},{default:t(()=>[j,a("Tentang Kami")]),_:1},8,["href"])]),s("li",null,[l(o,{href:e.route("privacy_policy")},{default:t(()=>[B,a("Kebijakan & Privasi")]),_:1},8,["href"])]),s("li",null,[s("a",{href:"#",onClick:r[0]||(r[0]=(...c)=>u.logout&&u.logout(...c))},[D,a("Log Out")])])])):(n(),i("ul",O,[s("li",null,[l(o,{href:e.route("login")},{default:t(()=>[z,a("Login/Register")]),_:1},8,["href"])]),s("li",null,[l(o,{href:e.route("about_us")},{default:t(()=>[G,a("Tentang Kami")]),_:1},8,["href"])]),s("li",null,[l(o,{href:e.route("privacy_policy")},{default:t(()=>[I,a("Kebijakan & Privasi")]),_:1},8,["href"])])]))])])}const H=d(g,[["render",R]]);export{H as S};
