import{g as u,o as c,f,b as s,u as a,w as l,a as r,n as _,j as w,q as V,F as b,H as k}from"./app.0050a820.js";import{J as v}from"./AuthenticationCard.60b39a4a.js";import{_ as g}from"./AuthenticationCardLogo.dc9e80d4.js";import{_ as x}from"./Button.129d0a7a.js";import{_ as i}from"./Input.3c2db6e7.js";import{_ as m}from"./Label.c2726175.js";import{_ as y}from"./ValidationErrors.0e77088c.js";const P=["onSubmit"],$={class:"mt-4"},q={class:"mt-4"},C={class:"flex items-center justify-end mt-4"},E={__name:"ResetPassword",props:{email:String,token:String},setup(n){const d=n,o=u({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{o.post(route("password.update"),{onFinish:()=>o.reset("password","password_confirmation")})};return(F,e)=>(c(),f(b,null,[s(a(k),{title:"Reset Password"}),s(v,null,{logo:l(()=>[s(g)]),default:l(()=>[s(y,{class:"mb-4"}),r("form",{onSubmit:V(p,["prevent"])},[r("div",null,[s(m,{for:"email",value:"Email"}),s(i,{id:"email",modelValue:a(o).email,"onUpdate:modelValue":e[0]||(e[0]=t=>a(o).email=t),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),r("div",$,[s(m,{for:"password",value:"Password"}),s(i,{id:"password",modelValue:a(o).password,"onUpdate:modelValue":e[1]||(e[1]=t=>a(o).password=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",q,[s(m,{for:"password_confirmation",value:"Confirm Password"}),s(i,{id:"password_confirmation",modelValue:a(o).password_confirmation,"onUpdate:modelValue":e[2]||(e[2]=t=>a(o).password_confirmation=t),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"])]),r("div",C,[s(x,{class:_({"opacity-25":a(o).processing}),disabled:a(o).processing},{default:l(()=>[w(" Reset Password ")]),_:1},8,["class","disabled"])])],40,P)]),_:1})],64))}};export{E as default};