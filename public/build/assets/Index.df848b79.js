import a from"./ApiTokenManager.804aa733.js";import{_ as i}from"./AppLayout.ebc03ac9.js";import{o,c as r,w as t,a as e,b as m}from"./app.1f43e56f.js";import"./ActionMessage.e9a04256.js";import"./DialogModal.738f629f.js";import"./InputError.6a68784b.js";import"./Button.78edeac7.js";import"./DangerButton.3f64f120.js";import"./FormSection.69e32b03.js";import"./Input.e69627d4.js";import"./Label.86ff80f7.js";import"./SecondaryButton.8bcd09cd.js";const n=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," API Tokens ",-1),l={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},g={__name:"Index",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(s){return(p,c)=>(o(),r(i,{title:"API Tokens"},{header:t(()=>[n]),default:t(()=>[e("div",null,[e("div",l,[m(a,{tokens:s.tokens,"available-permissions":s.availablePermissions,"default-permissions":s.defaultPermissions},null,8,["tokens","available-permissions","default-permissions"])])])]),_:1}))}};export{g as default};