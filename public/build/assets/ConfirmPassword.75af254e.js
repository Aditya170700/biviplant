import{g as m,h as c,o as d,f as u,b as s,u as a,w as r,a as e,n as f,j as p,q as _,F as w,H as b}from"./app.2d01b1f7.js";import{J as h}from"./AuthenticationCard.9b4d93eb.js";import{_ as g}from"./AuthenticationCardLogo.a5609445.js";import{_ as x}from"./Button.ff4bfa2b.js";import{_ as v}from"./Input.2862f6b3.js";import{_ as y}from"./Label.f1511c0b.js";import{_ as V}from"./ValidationErrors.160e8efa.js";const C=e("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},I={__name:"ConfirmPassword",setup(F){const o=m({password:""}),t=c(null),n=()=>{o.post(route("password.confirm"),{onFinish:()=>{o.reset(),t.value.focus()}})};return(B,i)=>(d(),u(w,null,[s(a(b),{title:"Secure Area"}),s(h,null,{logo:r(()=>[s(g)]),default:r(()=>[C,s(V,{class:"mb-4"}),e("form",{onSubmit:_(n,["prevent"])},[e("div",null,[s(y,{for:"password",value:"Password"}),s(v,{id:"password",ref_key:"passwordInput",ref:t,modelValue:a(o).password,"onUpdate:modelValue":i[0]||(i[0]=l=>a(o).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),e("div",k,[s(x,{class:f(["ml-4",{"opacity-25":a(o).processing}]),disabled:a(o).processing},{default:r(()=>[p(" Confirm ")]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{I as default};
