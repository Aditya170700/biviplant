import a from"./ApiTokenManager.a158d575.js";import{_ as i}from"./AppLayout.d83df20d.js";import{c as o,w as t,o as r,a as e,b as m}from"./app.20070287.js";import"./ActionMessage.beab7587.js";import"./DialogModal.ffee2f23.js";import"./InputError.0031b2d6.js";import"./Button.7516cfbb.js";import"./DangerButton.9dc772b5.js";import"./FormSection.b9663612.js";import"./Input.11aa8a44.js";import"./Label.6c2e53e6.js";import"./SecondaryButton.ea9788b9.js";const n=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," API Tokens ",-1),l={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},g={__name:"Index",props:{tokens:Array,availablePermissions:Array,defaultPermissions:Array},setup(s){return(p,c)=>(r(),o(i,{title:"API Tokens"},{header:t(()=>[n]),default:t(()=>[e("div",null,[e("div",l,[m(a,{tokens:s.tokens,"available-permissions":s.availablePermissions,"default-permissions":s.defaultPermissions},null,8,["tokens","available-permissions","default-permissions"])])])]),_:1}))}};export{g as default};