import a from"./ApiTokenManager.cf55a2e8.js";import{_ as i}from"./AppLayout.783f8fcb.js";import{o,c as r,w as t,a as e,b as m}from"./app.2d01b1f7.js";import"./ActionMessage.f5f6d28c.js";import"./DialogModal.bace128e.js";import"./InputError.e61803bf.js";import"./Button.ff4bfa2b.js";import"./DangerButton.ec0e3e03.js";import"./FormSection.87bf0ce7.js";import"./Input.2862f6b3.js";import"./Label.f1511c0b.js";import"./SecondaryButton.dfd6d809.js";const n=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," API Tokens ",-1),l={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},g={__name:"Index",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(s){return(p,c)=>(o(),r(i,{title:"API Tokens"},{header:t(()=>[n]),default:t(()=>[e("div",null,[e("div",l,[m(a,{tokens:s.tokens,"available-permissions":s.availablePermissions,"default-permissions":s.defaultPermissions},null,8,["tokens","available-permissions","default-permissions"])])])]),_:1}))}};export{g as default};