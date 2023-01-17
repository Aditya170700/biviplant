import{g as _,d as h,o as r,f as l,b as e,u as t,w as s,l as p,a as o,n as y,j as a,q as g,F as v,H as x,L as d}from"./app.2d01b1f7.js";import{J as b}from"./AuthenticationCard.9b4d93eb.js";import{_ as k}from"./AuthenticationCardLogo.a5609445.js";import{_ as w}from"./Button.ff4bfa2b.js";const V=o("div",{class:"mb-4 text-sm text-gray-600"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},A={__name:"VerifyEmail",props:{status:String},setup(c){const m=c,i=_(),u=()=>{i.post(route("verification.send"))},f=h(()=>m.status==="verification-link-sent");return(n,L)=>(r(),l(v,null,[e(t(x),{title:"Email Verification"}),e(b,null,{logo:s(()=>[e(k)]),default:s(()=>[V,t(f)?(r(),l("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):p("",!0),o("form",{onSubmit:g(u,["prevent"])},[o("div",C,[e(w,{class:y({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:s(()=>[a(" Resend Verification Email ")]),_:1},8,["class","disabled"]),o("div",null,[e(t(d),{href:n.route("profile.show"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:s(()=>[a(" Edit Profile")]),_:1},8,["href"]),e(t(d),{href:n.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900 ml-2"},{default:s(()=>[a(" Log Out ")]),_:1},8,["href"])])])],40,B)]),_:1})],64))}};export{A as default};
