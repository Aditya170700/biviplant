import{L as c,o as n,f as o,a as i,F as m,l as u,n as _,b as f,w as d,k as r,t as a,j as k,J as g}from"./app.982608ae.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";const N={components:{Link:c},props:{links:Array,from:Number,to:Number,total:Number}},b={key:0,"aria-label":"...",class:"d-flex justify-content-between align-items-center"},p={class:"pagination"};function y(v,x,e,L,w,C){const l=g("Link");return e.links.length>3?(n(),o("nav",b,[i("ul",p,[(n(!0),o(m,null,u(e.links,(t,s)=>(n(),o("li",{class:_(`page-item ${t.active?"active":""}`),key:s},[f(l,{class:"page-link",href:`${t.url?t.url:"#"}`,style:{cursor:"pointer"}},{default:d(()=>[r(a(s==0?"Prev":s==e.links.length-1?"Next":t.label),1)]),_:2},1032,["href"])],2))),128))]),r(" Show "+a(e.from)+" - "+a(e.to)+" from "+a(e.total)+" data ",1)])):k("",!0)}const P=h(N,[["render",y]]);export{P};