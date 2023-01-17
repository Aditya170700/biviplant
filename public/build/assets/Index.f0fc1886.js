import{h as u,D as E,K as r,P as b,M as T,J as x,W as y,o as a,c as M,w as V,a as e,f as l,k as w,u as k,F as C,t as n,l as _,e as D,G as F,j as I}from"./app.2d01b1f7.js";import{L}from"./App.c3b8bd99.js";const S={class:"row"},U={class:"col-md-12"},$={class:"card",id:"chat3",style:{"border-radius":"15px"}},H={class:"card-body"},O={class:"row"},P={class:"col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0"},G={class:"p-3"},J=e("div",{class:"input-group rounded mb-3 shadow-sm"},[e("input",{type:"search",class:"form-control rounded",placeholder:"Cari","aria-label":"Search","aria-describedby":"search-addon"}),e("span",{class:"input-group-text border-0",id:"search-addon"},[e("i",{class:"fas fa-search"})])],-1),K={"data-mdb-perfect-scrollbar":"true",style:{position:"relative",height:"400px",overflow:"scroll"}},R={class:"list-unstyled mb-0"},W=["onClick"],q={class:"d-flex flex-row"},z=["src"],A=e("span",{class:"badge bg-success badge-dot"},null,-1),Q={class:"pt-1"},X={class:"fw-bold mb-0"},Y={key:0,class:"fa-solid fa-circle-dot",style:{color:"green"}},Z={class:"small text-muted"},ee={key:0,class:"pt-1"},se={class:"badge bg-danger rounded-pill float-end"},te={class:"col-md-6 col-lg-7 col-xl-8"},oe={key:0,class:"input-group rounded mb-3 px-2 py-2 shadow-sm"},ae={class:"d-flex flex-row"},le=["src"],de=e("span",{class:"badge bg-success badge-dot"},null,-1),ne={class:"pt-1"},ce={class:"fw-bold mb-0"},ie={class:"small text-muted"},re={class:"pt-3 pe-3 chat-room","data-mdb-perfect-scrollbar":"true",style:{position:"relative",height:"400px",overflow:"scroll"}},ue={key:0,class:"d-flex flex-row justify-content-start"},_e={class:"small p-2 ms-3 mb-1 rounded-3",style:{"background-color":"#f5f6f7"}},me={class:"small ms-3 mb-3 rounded-3 text-muted float-end"},he={key:1,class:"d-flex flex-row justify-content-end"},pe={class:"small p-2 me-3 mb-1 rounded-3",style:{"background-color":"#f5f6f7"}},fe={class:"small me-3 mb-3 rounded-3 text-muted"},ve={key:1,class:"text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"},ge=e("a",{class:"ms-1 text-muted",href:"#!"},[e("i",{class:"fas fa-paperclip"})],-1),be=e("i",{class:"fas fa-paper-plane"},null,-1),xe=[be],Ce={__name:"Index",props:{user:Object,customers:Object},setup(j){const m=j,i=u(""),c=E({}),d=u({});let h=u(m.customers.data),p=u([]);r.on("message",t=>{var o,s;console.log(c,t),((o=d.value)==null?void 0:o.id)&&((s=d.value)==null?void 0:s.id)==t.user.id&&(p.value.push(t),b(()=>{window.document.getElementsByClassName("chat-room")[0].scrollTo(0,window.document.getElementsByClassName("chat-room")[0].scrollHeight)}))}),r.on("notif-chat-admin",t=>{T(`Pesan baru dari ${t.name}.`),f()}),r.on("user-leave",()=>{f()}),r.on("user-join",()=>{f()});function B(){if(i.value!=""){let t=c.data.sender.id!=m.user.id?c.data.sender:c.data.receiver;d.value=t,r.emit("message-to-customer",{user_id:m.user.id,message:i.value,conversation_id:c.data.id,to_user_id:t.id}),i.value="",g(t)}}function f(){x.get(route("admin.chat.customers")).then(t=>{h.value=t.data.data}).catch(t=>{y("failed sync customers!")})}function g(t){x.get(route("admin.chat.show",{id:t.id})).then(o=>{d.value=t,c.data=o.data,p.value=o.data.messages,N(t),b(()=>{window.document.getElementsByClassName("chat-room")[0].scrollTo(0,window.document.getElementsByClassName("chat-room")[0].scrollHeight)})}).catch(o=>{y("something went wrooongg!")})}function N(t){var o;(o=h.value)==null||o.map(s=>s.id==t.id?(t.unread_messages=[],t):s)}return(t,o)=>(a(),M(L,{title:"Chat"},{default:V(()=>[e("div",S,[e("div",U,[e("div",$,[e("div",H,[e("div",O,[e("div",P,[e("div",G,[J,e("div",K,[e("ul",R,[(a(!0),l(C,null,w(k(h),(s,v)=>(a(),l("li",{class:"p-2 border-bottom",key:v},[e("a",{href:"#",class:"d-flex justify-content-between",onClick:ye=>g(s)},[e("div",q,[e("div",null,[e("img",{src:s.profile_photo_path_url,alt:"avatar",class:"d-flex align-self-center me-3",width:"50"},null,8,z),A]),e("div",Q,[e("p",X,[I(n(s.name)+" ",1),s.is_online==1?(a(),l("i",Y)):_("",!0)]),e("p",Z,n(s.email),1)])]),s.unread_messages.length>0?(a(),l("div",ee,[e("span",se,n(s.unread_messages.length),1)])):_("",!0)],8,W)]))),128))])])])]),e("div",te,[d.value.id?(a(),l("div",oe,[e("div",ae,[e("div",null,[e("img",{src:d.value.profile_photo_path_url,alt:"avatar",class:"d-flex align-self-center me-3",width:"50"},null,8,le),de]),e("div",ne,[e("p",ce,n(d.value.name),1),e("p",ie,n(d.value.email),1)])])])):_("",!0),e("div",re,[(a(!0),l(C,null,w(k(p),(s,v)=>(a(),l("div",{key:v},[s.user.is_admin?(a(),l("div",he,[e("div",null,[e("p",pe,n(s.message),1),e("p",fe,n(s.date_time_formated),1)])])):(a(),l("div",ue,[e("div",null,[e("p",_e,n(s.message),1),e("p",me,n(s.date_time_formated),1)])]))]))),128))]),d.value.id?(a(),l("div",ve,[D(e("textarea",{type:"text","onUpdate:modelValue":o[0]||(o[0]=s=>i.value=s),class:"form-control form-control-lg",id:"exampleFormControlInput2",placeholder:"Tulis pesan"},null,512),[[F,i.value]]),ge,e("a",{class:"ms-3",href:"#!",onClick:o[1]||(o[1]=s=>B())},xe)])):_("",!0)])])])])])])]),_:1}))}};export{Ce as default};