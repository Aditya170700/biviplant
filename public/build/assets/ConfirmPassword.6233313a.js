import{g as m,h as c,f as d,b as s,u as a,w as r,F as u,o as f,H as p,a as e,n as _,k as w,q as b}from"./app.cbcfe82a.js";import{J as h}from"./AuthenticationCard.31ce49e0.js";import{_ as g}from"./AuthenticationCardLogo.ea1bfd5c.js";import{_ as x}from"./Button.6a45ae1a.js";import{_ as v}from"./Input.c0099510.js";import{_ as y}from"./Label.1cc07b31.js";import{_ as V}from"./ValidationErrors.11c69446.js";const k=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),C=["onSubmit"],$={class:"flex justify-end mt-4"},J={__name:"ConfirmPassword",setup(F){const o=m({password:""}),t=c(null),n=()=>{o.post(route("password.confirm"),{onFinish:()=>{o.reset(),t.value.focus()}})};return(B,i)=>(f(),d(u,null,[s(a(p),{title:"Secure Area"}),s(h,null,{logo:r(()=>[s(g)]),default:r(()=>[k,s(V,{class:"mb-4"}),e("form",{onSubmit:b(n,["prevent"])},[e("div",null,[s(y,{for:"password",value:"Password"}),s(v,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(o).password,"onUpdate:modelValue":i[0]||(i[0]=l=>a(o).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",$,[s(x,{class:_(["ml-4",{"opacity-25":a(o).processing}]),disabled:a(o).processing},{default:r(()=>[w(" Confirm ")]),_:1},8,["class","disabled"])])],40,C)]),_:1})],64))}};export{J as default};