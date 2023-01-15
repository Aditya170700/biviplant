import{L as ro}from"./App.a6a0540d.js";import{_ as ao,L as to,g as io,h as so,c as t,w as mo,Z as no,I as c,o as i,a as o,q as _o,e as n,E as d,j as m,b as v,G as eo,k as lo}from"./app.e28463fd.js";import{S as co}from"./SpinnerProcessing.e6460438.js";import{F as fo}from"./FormText.52e5ff48.js";import{C as bo}from"./upload-3.101d19b6.js";import{Q as go}from"./vue-quill.snow.1399a1d7.js";const uo={components:{Layout:ro,Link:to,SpinnerProcessing:co,FormText:fo,crop:bo,QuillEditor:go},props:{errors:Object,result:Object},setup(a){var r,_,f,b,g,l,w,p,V,U,x,S,L,P,T,C,M,F,E,N,j,B,O,Q,D,I,K,A,H,q,z,G,R,Z,J,W,X,Y,$,oo;const e=io({owner:(_=(r=a.result)==null?void 0:r.owner)!=null?_:"",meta_title:(b=(f=a.result)==null?void 0:f.meta_title)!=null?b:"",meta_description:(l=(g=a.result)==null?void 0:g.meta_description)!=null?l:"",meta_keyword:(p=(w=a.result)==null?void 0:w.meta_keyword)!=null?p:"",facebook:(U=(V=a.result)==null?void 0:V.facebook)!=null?U:"",ig:(S=(x=a.result)==null?void 0:x.ig)!=null?S:"",tiktok:(P=(L=a.result)==null?void 0:L.tiktok)!=null?P:"",email:(C=(T=a.result)==null?void 0:T.email)!=null?C:"",phone:(F=(M=a.result)==null?void 0:M.phone)!=null?F:"",about_us:(N=(E=a.result)==null?void 0:E.about_us)!=null?N:"",privacy_policy:(B=(j=a.result)==null?void 0:j.privacy_policy)!=null?B:"",logo:"",mail_mailer:(Q=(O=a.result)==null?void 0:O.mail_mailer)!=null?Q:"smtp",mail_host:(I=(D=a.result)==null?void 0:D.mail_host)!=null?I:"",mail_port:(A=(K=a.result)==null?void 0:K.mail_port)!=null?A:"",mail_username:(q=(H=a.result)==null?void 0:H.mail_username)!=null?q:"",mail_password:(G=(z=a.result)==null?void 0:z.mail_password)!=null?G:"",mail_encryption:(Z=(R=a.result)==null?void 0:R.mail_encryption)!=null?Z:"",mail_from_address:(W=(J=a.result)==null?void 0:J.mail_from_address)!=null?W:"",mail_from_name:(Y=(X=a.result)==null?void 0:X.mail_from_name)!=null?Y:""}),h=so((oo=($=a.result)==null?void 0:$.logo_url)!=null?oo:""),s=so(!1);function y(){e.transform(u=>({...u})).post(route("admin.settings.store"))}function k(u,Js){e.logo=no(u),h.value=u}return{form:e,submit:y,logo:h,showLogoCroper:s,cropLogoSuccess:k}}},ho={class:"row"},vo={class:"col-md-12 grid-margin"},yo={class:"card"},ko={class:"card-body"},wo={class:"row"},po={class:"col-lg-6 mb-3"},Vo={class:"mb-3"},Uo=o("label",{for:"owner",class:"form-label"},"Owner",-1),xo={class:"col-lg-6 mb-3"},So={class:"mb-3"},Lo=o("label",{for:"meta_title",class:"form-label"},"Meta Title",-1),Po={class:"col-lg-6 mb-3"},To={class:"mb-3"},Co=o("label",{for:"meta_description",class:"form-label"},"Meta Description",-1),Mo={class:"col-lg-6 mb-3"},Fo={class:"mb-3"},Eo=o("label",{for:"meta_keyword",class:"form-label"},"Meta Keyword",-1),No={class:"col-lg-6 mb-3"},jo={class:"mb-3"},Bo=o("label",{for:"email",class:"form-label"},"Email",-1),Oo={class:"col-lg-6 mb-3"},Qo={class:"mb-3"},Do=o("label",{for:"phone",class:"form-label"},"No HP",-1),Io={class:"col-lg-4 mb-3"},Ko={class:"mb-3"},Ao=o("label",{for:"facebook",class:"form-label"},"Facebook",-1),Ho={class:"col-lg-4 mb-3"},qo={class:"mb-3"},zo=o("label",{for:"ig",class:"form-label"},"Instagram",-1),Go={class:"col-lg-4 mb-3"},Ro={class:"mb-3"},Zo=o("label",{for:"tiktok",class:"form-label"},"Tiktok",-1),Jo={class:"col-lg-12 mb-3"},Wo={class:"mb-3"},Xo=o("label",{for:"about_us",class:"form-label"},"Tentang Kami",-1),Yo={class:"col-lg-12 mb-3"},$o={class:"mb-3"},os=o("label",{for:"privacy_policy",class:"form-label"},"Kebijakan Privasi",-1),ss={class:"col-lg-6 mb-3"},es={class:"mb-3"},ls=o("label",{for:"logo",class:"form-label"},"Logo",-1),rs={class:"mb-3"},as=["src"],ts=["disabled"],is=o("span",null,[o("i",{class:"fas fa-upload me-2"}),lo("Pilih")],-1),ms=[is],ns={class:"row"},ds={class:"col-lg-6 mb-3"},_s={class:"mb-3"},cs=o("label",{for:"mail_mailer",class:"form-label"},"Protokol Mail Server",-1),fs=o("option",{value:""},"Pilih",-1),bs=o("option",{value:"smtp"},"SMTP",-1),gs=o("option",{value:"imap"},"IMAP",-1),us=o("option",{value:"pop3"},"POP3",-1),hs=[fs,bs,gs,us],vs={class:"col-lg-6 mb-3"},ys={class:"mb-3"},ks=o("label",{for:"mail_host",class:"form-label"},"Host",-1),ws={class:"col-lg-6 mb-3"},ps={class:"mb-3"},Vs=o("label",{for:"mail_port",class:"form-label"},"Port",-1),Us={class:"col-lg-6 mb-3"},xs={class:"mb-3"},Ss=o("label",{for:"mail_username",class:"form-label"},"Username",-1),Ls={class:"col-lg-6 mb-3"},Ps={class:"mb-3"},Ts=o("label",{for:"mail_password",class:"form-label"},"Password",-1),Cs={class:"col-lg-6 mb-3"},Ms={class:"mb-3"},Fs=o("label",{for:"mail_encryption",class:"form-label"},"Encryption",-1),Es=o("option",{value:""},"Pilih",-1),Ns=o("option",{value:"ssl"},"SSL",-1),js=o("option",{value:"tls"},"TLS",-1),Bs=[Es,Ns,js],Os={class:"col-lg-6 mb-3"},Qs={class:"mb-3"},Ds=o("label",{for:"mail_from_address",class:"form-label"},"Mail From Address",-1),Is={class:"col-lg-6 mb-3"},Ks={class:"mb-3"},As=o("label",{for:"mail_from_name",class:"form-label"},"Mail From Name",-1),Hs={class:"row"},qs={class:"col-lg-12"},zs=["disabled"],Gs={class:"d-flex justify-content-center align-items-center"},Rs=o("span",null,[o("i",{class:"fas fa-save me-2"}),lo("Simpan")],-1);function Zs(a,e,h,s,y,k){const r=c("FormText"),_=c("QuillEditor"),f=c("crop"),b=c("SpinnerProcessing"),g=c("Layout");return i(),t(g,{title:"Pengaturan",typeButton:"back",href:a.route("admin.dashboard")},{default:mo(()=>[o("div",ho,[o("div",vo,[o("div",yo,[o("div",ko,[o("form",{onSubmit:e[21]||(e[21]=_o((...l)=>s.submit&&s.submit(...l),["prevent"]))},[o("div",wo,[o("div",po,[o("div",Vo,[Uo,n(o("input",{class:"form-control",id:"owner","onUpdate:modelValue":e[0]||(e[0]=l=>s.form.owner=l)},null,512),[[d,s.form.owner]]),s.form.errors.owner?(i(),t(r,{key:0,id:"owner",message:s.form.errors.owner},null,8,["message"])):m("",!0)])]),o("div",xo,[o("div",So,[Lo,n(o("input",{class:"form-control",id:"meta_title","onUpdate:modelValue":e[1]||(e[1]=l=>s.form.meta_title=l)},null,512),[[d,s.form.meta_title]]),s.form.errors.meta_title?(i(),t(r,{key:0,id:"meta_title",message:s.form.errors.meta_title},null,8,["message"])):m("",!0)])]),o("div",Po,[o("div",To,[Co,n(o("textarea",{class:"form-control",id:"meta_description",rows:"3","onUpdate:modelValue":e[2]||(e[2]=l=>s.form.meta_description=l)},null,512),[[d,s.form.meta_description]]),s.form.errors.meta_description?(i(),t(r,{key:0,id:"meta_description",message:s.form.errors.meta_description},null,8,["message"])):m("",!0)])]),o("div",Mo,[o("div",Fo,[Eo,n(o("textarea",{class:"form-control",id:"meta_keyword",rows:"3","onUpdate:modelValue":e[3]||(e[3]=l=>s.form.meta_keyword=l)},null,512),[[d,s.form.meta_keyword]]),s.form.errors.meta_keyword?(i(),t(r,{key:0,id:"meta_keyword",message:s.form.errors.meta_keyword},null,8,["message"])):m("",!0)])]),o("div",No,[o("div",jo,[Bo,n(o("input",{class:"form-control",id:"email","onUpdate:modelValue":e[4]||(e[4]=l=>s.form.email=l)},null,512),[[d,s.form.email]]),s.form.errors.email?(i(),t(r,{key:0,id:"email",message:s.form.errors.email},null,8,["message"])):m("",!0)])]),o("div",Oo,[o("div",Qo,[Do,n(o("input",{class:"form-control",id:"phone","onUpdate:modelValue":e[5]||(e[5]=l=>s.form.phone=l)},null,512),[[d,s.form.phone]]),s.form.errors.phone?(i(),t(r,{key:0,id:"phone",message:s.form.errors.phone},null,8,["message"])):m("",!0)])]),o("div",Io,[o("div",Ko,[Ao,n(o("input",{class:"form-control",id:"facebook","onUpdate:modelValue":e[6]||(e[6]=l=>s.form.facebook=l)},null,512),[[d,s.form.facebook]]),s.form.errors.facebook?(i(),t(r,{key:0,id:"facebook",message:s.form.errors.facebook},null,8,["message"])):m("",!0)])]),o("div",Ho,[o("div",qo,[zo,n(o("input",{class:"form-control",id:"ig","onUpdate:modelValue":e[7]||(e[7]=l=>s.form.ig=l)},null,512),[[d,s.form.ig]]),s.form.errors.ig?(i(),t(r,{key:0,id:"ig",message:s.form.errors.ig},null,8,["message"])):m("",!0)])]),o("div",Go,[o("div",Ro,[Zo,n(o("input",{class:"form-control",id:"tiktok","onUpdate:modelValue":e[8]||(e[8]=l=>s.form.tiktok=l)},null,512),[[d,s.form.tiktok]]),s.form.errors.tiktok?(i(),t(r,{key:0,id:"tiktok",message:s.form.errors.tiktok},null,8,["message"])):m("",!0)])]),o("div",Jo,[o("div",Wo,[Xo,v(_,{theme:"snow",content:s.form.about_us,"onUpdate:content":e[9]||(e[9]=l=>s.form.about_us=l),contentType:"html",style:{height:"100px"}},null,8,["content"]),s.form.errors.about_us?(i(),t(r,{key:0,id:"about_us",message:s.form.errors.about_us},null,8,["message"])):m("",!0)])]),o("div",Yo,[o("div",$o,[os,v(_,{theme:"snow",content:s.form.privacy_policy,"onUpdate:content":e[10]||(e[10]=l=>s.form.privacy_policy=l),contentType:"html",style:{height:"100px"}},null,8,["content"]),s.form.errors.privacy_policy?(i(),t(r,{key:0,id:"privacy_policy",message:s.form.errors.privacy_policy},null,8,["message"])):m("",!0)])]),o("div",ss,[o("div",es,[ls,v(f,{field:"img",langType:"en",onCropSuccess:s.cropLogoSuccess,width:100,height:100,modelValue:s.showLogoCroper,"onUpdate:modelValue":e[11]||(e[11]=l=>s.showLogoCroper=l)},null,8,["onCropSuccess","modelValue"]),o("div",rs,[o("img",{class:"img rounded fluid",alt:"",src:s.logo,style:{width:"100px"}},null,8,as)]),o("a",{onClick:e[12]||(e[12]=l=>s.showLogoCroper=!0),class:"btn btn-success btn-sm rounded-custom",disabled:s.form.processing},ms,8,ts),s.form.errors.logo?(i(),t(r,{key:0,id:"logo",message:s.form.errors.logo},null,8,["message"])):m("",!0)])])]),o("div",ns,[o("div",ds,[o("div",_s,[cs,n(o("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[13]||(e[13]=l=>s.form.mail_mailer=l)},hs,512),[[eo,s.form.mail_mailer]]),s.form.errors.mail_mailer?(i(),t(r,{key:0,id:"mail_mailer",message:s.form.errors.mail_mailer},null,8,["message"])):m("",!0)])]),o("div",vs,[o("div",ys,[ks,n(o("input",{class:"form-control",id:"mail_host","onUpdate:modelValue":e[14]||(e[14]=l=>s.form.mail_host=l)},null,512),[[d,s.form.mail_host]]),s.form.errors.mail_host?(i(),t(r,{key:0,id:"mail_host",message:s.form.errors.mail_host},null,8,["message"])):m("",!0)])]),o("div",ws,[o("div",ps,[Vs,n(o("input",{class:"form-control",id:"mail_port","onUpdate:modelValue":e[15]||(e[15]=l=>s.form.mail_port=l)},null,512),[[d,s.form.mail_port]]),s.form.errors.mail_port?(i(),t(r,{key:0,id:"mail_port",message:s.form.errors.mail_port},null,8,["message"])):m("",!0)])]),o("div",Us,[o("div",xs,[Ss,n(o("input",{class:"form-control",id:"mail_username","onUpdate:modelValue":e[16]||(e[16]=l=>s.form.mail_username=l)},null,512),[[d,s.form.mail_username]]),s.form.errors.mail_username?(i(),t(r,{key:0,id:"mail_username",message:s.form.errors.mail_username},null,8,["message"])):m("",!0)])]),o("div",Ls,[o("div",Ps,[Ts,n(o("input",{class:"form-control",id:"mail_password","onUpdate:modelValue":e[17]||(e[17]=l=>s.form.mail_password=l)},null,512),[[d,s.form.mail_password]]),s.form.errors.mail_password?(i(),t(r,{key:0,id:"mail_password",message:s.form.errors.mail_password},null,8,["message"])):m("",!0)])]),o("div",Cs,[o("div",Ms,[Fs,n(o("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":e[18]||(e[18]=l=>s.form.mail_encryption=l)},Bs,512),[[eo,s.form.mail_encryption]]),s.form.errors.mail_encryption?(i(),t(r,{key:0,id:"mail_encryption",message:s.form.errors.mail_encryption},null,8,["message"])):m("",!0)])]),o("div",Os,[o("div",Qs,[Ds,n(o("input",{class:"form-control",id:"mail_from_address","onUpdate:modelValue":e[19]||(e[19]=l=>s.form.mail_from_address=l)},null,512),[[d,s.form.mail_from_address]]),s.form.errors.mail_from_address?(i(),t(r,{key:0,id:"mail_from_address",message:s.form.errors.mail_from_address},null,8,["message"])):m("",!0)])]),o("div",Is,[o("div",Ks,[As,n(o("input",{class:"form-control",id:"mail_from_name","onUpdate:modelValue":e[20]||(e[20]=l=>s.form.mail_from_name=l)},null,512),[[d,s.form.mail_from_name]]),s.form.errors.mail_from_name?(i(),t(r,{key:0,id:"mail_from_name",message:s.form.errors.mail_from_name},null,8,["message"])):m("",!0)])])]),o("div",Hs,[o("div",qs,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:s.form.processing},[o("div",Gs,[s.form.processing?(i(),t(b,{key:0,color:"text-white",size:"sm",me:"me-2"})):m("",!0),Rs])],8,zs)])])],32)])])])])]),_:1},8,["href"])}const ee=ao(uo,[["render",Zs]]);export{ee as default};
