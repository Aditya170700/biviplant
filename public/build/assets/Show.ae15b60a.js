import{L as l}from"./App.c3b8bd99.js";import{_ as a,L as i,E as d,o as n,c as _,w as r,a as s,t as o}from"./app.2d01b1f7.js";const u={components:{Layout:l,Link:i},props:{errors:Object,result:Object}},h={class:"row"},v={class:"col-md-12 grid-margin"},m={class:"card"},p={class:"card-body"},f={class:"row mt-3"},g=s("div",{class:"col-lg-2"},"Judul",-1),w={class:"col-lg-10"},y={class:"row mt-3"},b=s("div",{class:"col-lg-2"},"Sub Judul",-1),L={class:"col-lg-10"},x={class:"row mt-3"},B=s("div",{class:"col-lg-2"},"Banner",-1),k={class:"col-lg-10"},S=["src"];function j(e,C,t,D,E,J){const c=d("Layout");return n(),_(c,{title:"Detail Event",typeButton:"back",href:e.route("admin.events.index")},{default:r(()=>[s("div",h,[s("div",v,[s("div",m,[s("div",p,[s("div",f,[g,s("div",w,": "+o(t.result.title),1)]),s("div",y,[b,s("div",L," : "+o(t.result.sub_title),1)]),s("div",x,[B,s("div",k,[s("img",{src:t.result.path_url,class:"fluid rounded",alt:"",style:{width:"200px"}},null,8,S)])])])])])])]),_:1},8,["href"])}const V=a(u,[["render",j]]);export{V as default};
