import{h as p,K as u,O as g,s as f,f as a,b as r,w as y,u as m,a as e,F as w,l as k,e as x,E as b,i as F,o,t as n,H as C}from"./app.cbcfe82a.js";import{_ as S}from"./HeaderWithTitle.b26a1fca.js";import{S as B}from"./Sidebar.fecf842f.js";const T=["content"],D=["content"],E={class:"page-content-wrapper"},H=e("div",{class:"live-chat-intro mb-3",style:{position:"fixed",width:"100%","z-index":"1000"}},[e("p",null,"Mulai Percakapan Dengan Admin"),e("img",{src:"/assets/images/customer-service.png",alt:""}),e("div",{class:"status online"},"Admin sedang online")],-1),M={class:"support-wrapper py-3",style:{"padding-top":"200px !important"}},N={class:"container"},z={key:0,class:"agent-message-content d-flex align-items-start"},O={class:"agent-message-text"},V={class:"d-block mt-2"},j={style:{"font-size":"10px"}},A={key:1,class:"user-message-content"},K={class:"user-message-text"},L={class:"d-block mt-2 mt-3"},P={style:{"background-color":"#FFFFFF !important",color:"#747794"}},R={style:{"font-size":"10px"}},U={class:"type-text-form"},q={action:"#"},G=e("img",{src:"/assets/images/send-message.png",alt:"",style:{opacity:"0.5"}},null,-1),I=[G],X={__name:"Chat",props:{meta_title:String,meta_description:String,meta_keyword:String,user:Object,conversation:Object},setup(i){const c=i;let s=p(""),d=p([]);d.value=c.conversation.messages,u.on("message",l=>{d.value.push(l),g(()=>{window.scrollTo(0,window.document.getElementsByClassName("page-content-wrapper")[0].scrollHeight)})});function h(l){l.preventDefault(),s.value!=""&&(u.emit("message-to-admin",{user_id:c.user.id,message:s.value,conversation_id:c.conversation.id}),s.value="")}return f(()=>{g(()=>{window.scrollTo(0,window.document.getElementsByClassName("page-content-wrapper")[0].scrollHeight)})}),(l,_)=>(o(),a("div",null,[r(m(C),null,{default:y(()=>[e("title",null,n(i.meta_title),1),e("meta",{"head-key":"description",name:"description",content:i.meta_description},null,8,T),e("meta",{"head-key":"keyword",name:"keyword",content:i.meta_keyword},null,8,D)]),_:1}),r(S,{link_back:"/",title:"Chat"}),r(B),e("div",E,[H,e("div",M,[e("div",N,[(o(!0),a(w,null,k(m(d),(t,v)=>(o(),a("div",{class:"live-chat-wrapper",key:v},[t.user.role=="admin"?(o(),a("div",z,[e("div",O,[e("div",V,[e("p",null,n(t.message),1),e("span",j,n(t.date_time_formated),1)])])])):(o(),a("div",A,[e("div",K,[e("div",L,[e("p",P,n(t.message),1)]),e("span",R,n(t.date_time_formated),1)])]))]))),128))])])]),e("div",U,[e("form",q,[x(e("textarea",{style:{height:"69px"},class:"form-control","onUpdate:modelValue":_[0]||(_[0]=t=>F(s)?s.value=t:s=t),cols:"30",rows:"20",placeholder:"Tulis pesan"},null,512),[[b,m(s)]]),e("button",{type:"submit",onClick:h},I)])])]))}};export{X as default};
