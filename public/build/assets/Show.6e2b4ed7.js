import{L as i}from"./App.c3b8bd99.js";import{_ as l,L as a,E as d,o as _,c as n,w as r,a as s,t as o}from"./app.2d01b1f7.js";const h={components:{Layout:i,Link:a},props:{errors:Object,result:Object}},m={class:"row"},v={class:"col-md-12 grid-margin"},u={class:"card"},g={class:"card-body"},w={class:"row mt-3"},f=s("div",{class:"col-lg-2"},"Nama",-1),y={class:"col-lg-10"},p={class:"row mt-3"},k=s("div",{class:"col-lg-2"},"Meta Title",-1),x={class:"col-lg-10"},L={class:"row mt-3"},b=s("div",{class:"col-lg-2"},"Meta Description",-1),B={class:"col-lg-10"},D={class:"row mt-3"},M=s("div",{class:"col-lg-2"},"Meta Keyword",-1),j={class:"col-lg-10"},C={class:"row mt-3"},K=s("div",{class:"col-lg-2"},"Ikon",-1),N={class:"col-lg-10"},O=["src"],S={class:"row mt-3"},E=s("div",{class:"col-lg-2"},"Banner",-1),I={class:"col-lg-10"},T=["src"];function V(c,q,t,z,A,F){const e=d("Layout");return _(),n(e,{title:"Detail Kategori",typeButton:"back",href:c.route("admin.categories.index")},{default:r(()=>[s("div",m,[s("div",v,[s("div",u,[s("div",g,[s("div",w,[f,s("div",y,": "+o(t.result.name),1)]),s("div",p,[k,s("div",x," : "+o(t.result.meta_title),1)]),s("div",L,[b,s("div",B," : "+o(t.result.meta_description),1)]),s("div",D,[M,s("div",j," : "+o(t.result.meta_keyword),1)]),s("div",C,[K,s("div",N,[s("img",{src:t.result.icon_url,alt:"",style:{width:"50px"}},null,8,O)])]),s("div",S,[E,s("div",I,[s("img",{src:t.result.banner_url,alt:"",style:{width:"200px"}},null,8,T)])])])])])])]),_:1},8,["href"])}const J=l(h,[["render",V]]);export{J as default};
