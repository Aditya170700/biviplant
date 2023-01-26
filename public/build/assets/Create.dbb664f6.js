import{C as K,D as y,s as P,o as d,f as a,b as r,w as m,a as e,t as _,u as t,j as v,q as I,F as g,k as h,l as S,e as c,G as p,I as k,c as M,H as D,L as w}from"./app.1f43e56f.js";import{_ as O}from"./Header.ff10d999.js";import{S as j}from"./Sidebar.5f00d4fa.js";import{_ as B}from"./Footer.3faa4227.js";import{S as J}from"./SpinnerProcessing.9138c1af.js";import{O as T,s as H,a as F,b as G,c as E,d as Q}from"./geosearch.module.66072f5b.js";const R=["content"],W=["content"],X={class:"page-content-wrapper"},Y={class:"container"},Z={class:"profile-wrapper-area py-3"},ee={class:"card"},te={class:"card-body p-4"},se={class:"d-flex align-items-center justify-content-between mb-3"},oe=e("span",{class:"h6"},"Tambah Alamat",-1),ie=e("i",{class:"lni lni-arrow-left me-2"},null,-1),le=["onSubmit"],de={class:"row"},ne=e("div",{class:"col-lg-12 py-2"},[e("hr")],-1),ae={class:"col-1g-12 py-2"},re={style:{height:"50vh",width:"100%","z-index":"1 !important"}},ce={key:0,class:"collapse show",style:{width:"205px"}},ue={class:"card card-body rounded-0 border border-dark p-0"},me=["onClick"],_e={key:0},pe={class:"col-6 mb-3"},be={class:"mb-3"},ge=e("label",{for:"longitude",class:"form-label"},"Longitude",-1),he={class:"col-6 mb-3"},ve={class:"mb-3"},fe=e("label",{for:"latitude",class:"form-label"},"Latitude",-1),ye={class:"col-6 mb-3"},Se={class:"mb-3"},ke=e("label",{for:"receiver",class:"form-label"},"Nama Penerima",-1),we={class:"col-6 mb-3"},xe={class:"mb-3"},Ve=e("label",{for:"phone",class:"form-label"},"No HP",-1),Ce={class:"col-12 mb-3"},$e=e("label",{for:"province_id",class:"form-label"},"Provinsi",-1),ze=["value"],Ae={class:"col-12 mb-3"},Ue=e("label",{for:"city_id",class:"form-label"},"Kabupaten / Kota",-1),Le=["value"],Ne={class:"col-12 mb-3"},qe=e("label",{for:"subdistrict_id",class:"form-label"},"Kecamatan",-1),Ke=["value"],Pe={class:"col-12 mb-3"},Ie={class:"mb-3"},Me=e("label",{for:"postal_code",class:"form-label"},"Kode Pos",-1),De={class:"col-12 mb-3"},Oe={class:"mb-3"},je=e("label",{for:"detail",class:"form-label"},"Alamat Detail",-1),Be={class:"col-6"},Je={class:"d-grid"},Te=["disabled"],He={class:"d-flex justify-content-center align-items-center"},Fe=e("span",null,[e("i",{class:"lni lni-save me-2"}),v("Simpan")],-1),Ge={class:"col-6"},Ee={class:"d-grid"},Qe=e("i",{class:"lni lni-arrow-left me-2"},null,-1),Re=e("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),it={__name:"Create",setup(We){let f=K(),b=y({zoom:5});JSON.parse(localStorage.getItem("address"));const s=y({province_id:"",city_id:"",subdistrict_id:"",subdistrict:{id:"",name:"",city:{id:"",name:"",province:{id:"",name:""}}},longitude:0,latitude:0,receiver:"",phone:"",postal_code:"",detail:"",processing:!1,is_primary:0});let n=y({provinces:[],cities:[],subdistricts:[],searchAddress:[],preview:null}),x=()=>{axios.get("/api/provinces").then(l=>{n.provinces=l.data.data}).catch(l=>{console.log(l)})},V=l=>{s.subdistrict.city.province.id=l,s.subdistrict.city.province.name=document.querySelector("#province_id").options[document.querySelector("#province_id").selectedIndex].text,axios.get("/api/cities",{params:{province_id:l}}).then(o=>{n.cities=o.data.data}).catch(o=>{console.log(o)})},C=l=>{s.subdistrict.city.id=l,s.subdistrict.city.name=document.querySelector("#city_id").options[document.querySelector("#city_id").selectedIndex].text,axios.get("/api/subdistricts",{params:{city_id:l}}).then(o=>{n.subdistricts=o.data.data}).catch(o=>{console.log(o)})},$=l=>{s.subdistrict.id=l,s.subdistrict.name=document.querySelector("#subdistrict_id").options[document.querySelector("#subdistrict_id").selectedIndex].text};function z(){navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{s.latitude=l.coords.latitude,s.longitude=l.coords.longitude}):console.log("Geolocation is not supported by this browser.")}P(()=>{x(),z()});function A(l){let o=l.target.getLatLng();s.longitude=o.lng,s.latitude=o.lat}function U(l){s.longitude=l.latlng.lng,s.latitude=l.latlng.lat}function L(l){new T().search({query:l.target.value}).then(i=>{n.searchAddress=i})}function N(l,o){s.longitude=o,s.latitude=l,n.searchAddress=[]}function q(){let l=localStorage.getItem("address")!=null?JSON.parse(localStorage.getItem("address")):[];l.push(JSON.stringify(s)),s.processing=!0,localStorage.setItem("address",JSON.stringify(l)),s.processing=!1,window.location.href="/address-guest"}return(l,o)=>(d(),a("div",null,[r(t(D),null,{default:m(()=>[e("title",null,_(t(f).metaTitle),1),e("meta",{"head-key":"description",name:"description",content:t(f).metaDescription},null,8,R),e("meta",{"head-key":"keyword",name:"keyword",content:t(f).metaKeyword},null,8,W)]),_:1}),r(O),r(j),e("div",X,[e("div",Y,[e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[oe,r(t(w),{href:l.route("address-guest.index"),class:"btn btn-sm btn-outline-secondary"},{default:m(()=>[ie,v("Kembali ")]),_:1},8,["href"])]),e("form",{onSubmit:I(q,["prevent"])},[e("div",de,[ne,e("div",ae,[e("div",re,[r(t(Q),{modelValue:t(b).zoom,"onUpdate:modelValue":o[0]||(o[0]=i=>t(b).zoom=i),zoom:t(b).zoom,"onUpdate:zoom":o[1]||(o[1]=i=>t(b).zoom=i),center:[t(s).latitude,t(s).longitude],onClick:U},{default:m(()=>[r(t(H),{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),r(t(F),{position:"topright"},{default:m(()=>[e("input",{onKeyup:L,type:"text",placeholder:"Cari...",style:{width:"100%"}},null,32),t(n).searchAddress.length>0?(d(),a("div",ce,[e("div",ue,[(d(!0),a(g,null,h(t(n).searchAddress,(i,u)=>(d(),a("p",{style:{cursor:"pointer"},key:u,onClick:Xe=>N(i.y,i.x)},_(i.label),9,me))),128)),t(n).searchAddress<1?(d(),a("p",_e," Alamat tidak ditemukan ")):S("",!0)])])):S("",!0)]),_:1}),r(t(G),{"lat-lng":[t(s).latitude,t(s).longitude],draggable:"",onMoveend:A},{default:m(()=>[r(t(E),null,{default:m(()=>[v(_(`Lat: ${t(s).latitude} Lng: ${t(s).longitude}`),1)]),_:1})]),_:1},8,["lat-lng"])]),_:1},8,["modelValue","zoom","center"])])]),e("div",pe,[e("div",be,[ge,c(e("input",{class:"form-control",id:"longitude","onUpdate:modelValue":o[2]||(o[2]=i=>t(s).longitude=i),disabled:""},null,512),[[p,t(s).longitude]])])]),e("div",he,[e("div",ve,[fe,c(e("input",{class:"form-control",id:"latitude","onUpdate:modelValue":o[3]||(o[3]=i=>t(s).latitude=i),disabled:""},null,512),[[p,t(s).latitude]])])]),e("div",ye,[e("div",Se,[ke,c(e("input",{class:"form-control",id:"receiver","onUpdate:modelValue":o[4]||(o[4]=i=>t(s).receiver=i)},null,512),[[p,t(s).receiver]])])]),e("div",we,[e("div",xe,[Ve,c(e("input",{class:"form-control",id:"sender","onUpdate:modelValue":o[5]||(o[5]=i=>t(s).phone=i)},null,512),[[p,t(s).phone]])])]),e("div",Ce,[$e,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[6]||(o[6]=i=>t(s).province_id=i),id:"province_id",onChange:o[7]||(o[7]=i=>t(V)(t(s).province_id))},[(d(!0),a(g,null,h(t(n).provinces,(i,u)=>(d(),a("option",{value:i.id,key:u},_(i.name),9,ze))),128))],544),[[k,t(s).province_id]])]),e("div",Ae,[Ue,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[8]||(o[8]=i=>t(s).city_id=i),id:"city_id",onChange:o[9]||(o[9]=i=>t(C)(t(s).city_id))},[(d(!0),a(g,null,h(t(n).cities,(i,u)=>(d(),a("option",{value:i.id,key:u},_(i.name),9,Le))),128))],544),[[k,t(s).city_id]])]),e("div",Ne,[qe,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[10]||(o[10]=i=>t(s).subdistrict_id=i),id:"subdistrict_id",onChange:o[11]||(o[11]=i=>t($)(t(s).subdistrict_id))},[(d(!0),a(g,null,h(t(n).subdistricts,(i,u)=>(d(),a("option",{value:i.id,key:u},_(i.name),9,Ke))),128))],544),[[k,t(s).subdistrict_id]])]),e("div",Pe,[e("div",Ie,[Me,c(e("input",{class:"form-control",id:"postal_code","onUpdate:modelValue":o[12]||(o[12]=i=>t(s).postal_code=i)},null,512),[[p,t(s).postal_code]])])]),e("div",De,[e("div",Oe,[je,c(e("textarea",{class:"form-control",id:"detail",rows:"3","onUpdate:modelValue":o[13]||(o[13]=i=>t(s).detail=i)},null,512),[[p,t(s).detail]])])]),e("div",Be,[e("div",Je,[e("button",{class:"btn btn-success rounded-custom",disabled:t(s).processing},[e("div",He,[t(s).processing?(d(),M(J,{key:0,color:"text-white",size:"sm",me:"me-2"})):S("",!0),Fe])],8,Te)])]),e("div",Ge,[e("div",Ee,[r(t(w),{href:l.route("address-guest.index"),class:"btn btn-outline-secondary rounded-custom"},{default:m(()=>[Qe,v("Kembali ")]),_:1},8,["href"])])])])],40,le)])])])])]),Re,r(B)]))}};export{it as default};