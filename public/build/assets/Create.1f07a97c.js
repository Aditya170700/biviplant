<<<<<<<< HEAD:public/build/assets/Create.1f07a97c.js
import{C as F,D as V,g as T,s as j,E as h,o as a,f as _,b as r,w as g,a as e,t as v,u as t,j as x,q as B,e as c,G as p,c as n,l as d,I as y,F as k,k as w,H as $,L as C}from"./app.2d01b1f7.js";import{_ as z}from"./Header.f65a2d37.js";import{S as H}from"./Sidebar.2b2cde39.js";import{_ as E}from"./Footer.c0935864.js";import{F as u}from"./FormText.5495bd75.js";import{S as q}from"./SpinnerProcessing.a1ced27b.js";const I=["content"],J=["content"],O={class:"page-content-wrapper"},Q={class:"container"},R={class:"profile-wrapper-area py-3"},W={class:"card"},X={class:"card-body p-4"},Y={class:"d-flex align-items-center justify-content-between mb-3"},Z=e("span",{class:"h6"},"Tambah Alamat",-1),ee=e("i",{class:"lni lni-arrow-left me-2"},null,-1),te=["onSubmit"],se={class:"row"},oe=e("div",{class:"col-lg-12 py-2"},[e("hr")],-1),ie={class:"col-lg-12 mb-3"},le={class:"mb-3"},ae=e("label",{for:"address",class:"form-label d-flex justify-content-between"},[e("span",null,"Lokasi")],-1),ne={class:"col-6 mb-3"},de={class:"mb-3"},re=e("label",{for:"longitude",class:"form-label"},"Longitude",-1),ce={class:"col-6 mb-3"},ue={class:"mb-3"},_e=e("label",{for:"latitude",class:"form-label"},"Latitude",-1),me={class:"col-6 mb-3"},pe={class:"mb-3"},be=e("label",{for:"receiver",class:"form-label"},"Nama Penerima",-1),ge={class:"col-6 mb-3"},ve={class:"mb-3"},fe=e("label",{for:"phone",class:"form-label"},"No HP",-1),he={class:"col-12 mb-3"},ye=e("label",{for:"province_id",class:"form-label"},"Provinsi",-1),ke=["value"],we={class:"col-12 mb-3"},xe=e("label",{for:"city_id",class:"form-label"},"Kabupaten / Kota",-1),Me=["value"],Ve={class:"col-12 mb-3"},Ce=e("label",{for:"subdistrict_id",class:"form-label"},"Kecamatan",-1),Se=["value"],Le={class:"col-12 mb-3"},Pe={class:"mb-3"},Ue=e("label",{for:"postal_code",class:"form-label"},"Kode Pos",-1),Ge={class:"col-12 mb-3"},Ke={class:"mb-3"},Ae=e("label",{for:"detail",class:"form-label"},"Alamat Detail",-1),De={class:"col-6"},Ne={class:"d-grid"},Fe=["disabled"],Te={class:"d-flex justify-content-center align-items-center"},je=e("span",null,[e("i",{class:"lni lni-save me-2"}),x("Simpan")],-1),Be={class:"col-6"},$e={class:"d-grid"},ze=e("i",{class:"lni lni-arrow-left me-2"},null,-1),He=e("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),We={__name:"Create",setup(Ee){let f=F();V({zoom:5});const s=T({province_id:"",city_id:"",subdistrict_id:"",longitude:0,latitude:0,receiver:"",phone:"",postal_code:"",detail:""});let m=V({provinces:[],cities:[],subdistricts:[],searchAddress:[],preview:null}),S=()=>{axios.get("/api/provinces").then(l=>{m.provinces=l.data.data}).catch(l=>{console.log(l)})},L=l=>{axios.get("/api/cities",{params:{province_id:l}}).then(o=>{m.cities=o.data.data}).catch(o=>{console.log(o)})},P=l=>{axios.get("/api/subdistricts",{params:{city_id:l}}).then(o=>{m.subdistricts=o.data.data}).catch(o=>{console.log(o)})};function U(){navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{s.latitude=l.coords.latitude,s.longitude=l.coords.longitude}):console.log("Geolocation is not supported by this browser.")}j(()=>{S(),U()});function M(l){s.latitude=l.latLng.lat(),s.longitude=l.latLng.lng()}function G(l){s.latitude=l.geometry.location.lat(),s.longitude=l.geometry.location.lng()}function K(){s.transform(l=>({...l})).post(route("address.store"))}return(l,o)=>{const A=h("GMapAutocomplete"),D=h("GMapMarker"),N=h("GMapMap");return a(),_("div",null,[r(t($),null,{default:g(()=>[e("title",null,v(t(f).metaTitle),1),e("meta",{"head-key":"description",name:"description",content:t(f).metaDescription},null,8,I),e("meta",{"head-key":"keyword",name:"keyword",content:t(f).metaKeyword},null,8,J)]),_:1}),r(z),r(H),e("div",O,[e("div",Q,[e("div",R,[e("div",W,[e("div",X,[e("div",Y,[Z,r(t(C),{href:l.route("address.index"),class:"btn btn-sm btn-outline-secondary"},{default:g(()=>[ee,x("Kembali ")]),_:1},8,["href"])]),e("form",{onSubmit:B(K,["prevent"])},[e("div",se,[oe,e("div",ie,[e("div",le,[ae,r(A,{placeholder:"Cari...",onPlace_changed:G,class:"form-control mb-2"}),r(N,{style:{width:"100%",height:"500px"},center:{lat:t(s).latitude,lng:t(s).longitude},zoom:15,onClick:M},{default:g(()=>[r(D,{position:{lat:t(s).latitude,lng:t(s).longitude},clickable:!0,draggable:!0,onDrag:M},null,8,["position"])]),_:1},8,["center"])])]),e("div",ne,[e("div",de,[re,c(e("input",{class:"form-control",id:"longitude","onUpdate:modelValue":o[0]||(o[0]=i=>t(s).longitude=i),disabled:""},null,512),[[p,t(s).longitude]]),t(s).errors.longitude?(a(),n(u,{key:0,id:"longitude",message:t(s).errors.longitude},null,8,["message"])):d("",!0)])]),e("div",ce,[e("div",ue,[_e,c(e("input",{class:"form-control",id:"latitude","onUpdate:modelValue":o[1]||(o[1]=i=>t(s).latitude=i),disabled:""},null,512),[[p,t(s).latitude]]),t(s).errors.latitude?(a(),n(u,{key:0,id:"latitude",message:t(s).errors.latitude},null,8,["message"])):d("",!0)])]),e("div",me,[e("div",pe,[be,c(e("input",{class:"form-control",id:"receiver","onUpdate:modelValue":o[2]||(o[2]=i=>t(s).receiver=i)},null,512),[[p,t(s).receiver]]),t(s).errors.receiver?(a(),n(u,{key:0,id:"receiver",message:t(s).errors.receiver},null,8,["message"])):d("",!0)])]),e("div",ge,[e("div",ve,[fe,c(e("input",{class:"form-control",id:"sender","onUpdate:modelValue":o[3]||(o[3]=i=>t(s).phone=i)},null,512),[[p,t(s).phone]]),t(s).errors.phone?(a(),n(u,{key:0,id:"phone",message:t(s).errors.phone},null,8,["message"])):d("",!0)])]),e("div",he,[ye,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[4]||(o[4]=i=>t(s).province_id=i),id:"province_id",onChange:o[5]||(o[5]=i=>t(L)(t(s).province_id))},[(a(!0),_(k,null,w(t(m).provinces,(i,b)=>(a(),_("option",{value:i.id,key:b},v(i.name),9,ke))),128))],544),[[y,t(s).province_id]]),t(s).errors.province_id?(a(),n(u,{key:0,id:"province_id",message:t(s).errors.province_id},null,8,["message"])):d("",!0)]),e("div",we,[xe,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[6]||(o[6]=i=>t(s).city_id=i),id:"city_id",onChange:o[7]||(o[7]=i=>t(P)(t(s).city_id))},[(a(!0),_(k,null,w(t(m).cities,(i,b)=>(a(),_("option",{value:i.id,key:b},v(i.name),9,Me))),128))],544),[[y,t(s).city_id]]),t(s).errors.city_id?(a(),n(u,{key:0,id:"city_id",message:t(s).errors.city_id},null,8,["message"])):d("",!0)]),e("div",Ve,[Ce,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[8]||(o[8]=i=>t(s).subdistrict_id=i),id:"subdistrict_id"},[(a(!0),_(k,null,w(t(m).subdistricts,(i,b)=>(a(),_("option",{value:i.id,key:b},v(i.name),9,Se))),128))],512),[[y,t(s).subdistrict_id]]),t(s).errors.subdistrict_id?(a(),n(u,{key:0,id:"subdistrict_id",message:t(s).errors.subdistrict_id},null,8,["message"])):d("",!0)]),e("div",Le,[e("div",Pe,[Ue,c(e("input",{class:"form-control",id:"postal_code","onUpdate:modelValue":o[9]||(o[9]=i=>t(s).postal_code=i)},null,512),[[p,t(s).postal_code]]),t(s).errors.postal_code?(a(),n(u,{key:0,id:"postal_code",message:t(s).errors.postal_code},null,8,["message"])):d("",!0)])]),e("div",Ge,[e("div",Ke,[Ae,c(e("textarea",{class:"form-control",id:"detail",rows:"3","onUpdate:modelValue":o[10]||(o[10]=i=>t(s).detail=i)},null,512),[[p,t(s).detail]]),t(s).errors.detail?(a(),n(u,{key:0,id:"detail",message:t(s).errors.detail},null,8,["message"])):d("",!0)])]),e("div",De,[e("div",Ne,[e("button",{class:"btn btn-success rounded-custom",disabled:t(s).processing},[e("div",Te,[t(s).processing?(a(),n(q,{key:0,color:"text-white",size:"sm",me:"me-2"})):d("",!0),je])],8,Fe)])]),e("div",Be,[e("div",$e,[r(t(C),{href:l.route("address.index"),class:"btn btn-outline-secondary rounded-custom"},{default:g(()=>[ze,x("Kembali ")]),_:1},8,["href"])])])])],40,te)])])])])]),He,r(E)])}}};export{We as default};
========
import{C as F,D as V,g as T,s as j,f as _,b as r,w as g,u as t,a as e,q as B,e as c,E as p,c as n,j as d,G as h,F as y,l as k,k as x,I as w,o as a,t as v,H as $,L as C}from"./app.8df216ad.js";import{_ as z}from"./Header.4ab38aca.js";import{S as H}from"./Sidebar.98772fb9.js";import{_ as E}from"./Footer.f08eeea0.js";import{F as u}from"./FormText.a4a28e1d.js";import{S as q}from"./SpinnerProcessing.b72fbaed.js";const I=["content"],J=["content"],O={class:"page-content-wrapper"},Q={class:"container"},R={class:"profile-wrapper-area py-3"},W={class:"card"},X={class:"card-body p-4"},Y={class:"d-flex align-items-center justify-content-between mb-3"},Z=e("span",{class:"h6"},"Tambah Alamat",-1),ee=e("i",{class:"lni lni-arrow-left me-2"},null,-1),te=["onSubmit"],se={class:"row"},oe=e("div",{class:"col-lg-12 py-2"},[e("hr")],-1),ie={class:"col-lg-12 mb-3"},le={class:"mb-3"},ae=e("label",{for:"address",class:"form-label d-flex justify-content-between"},[e("span",null,"Lokasi")],-1),ne={class:"col-6 mb-3"},de={class:"mb-3"},re=e("label",{for:"longitude",class:"form-label"},"Longitude",-1),ce={class:"col-6 mb-3"},ue={class:"mb-3"},_e=e("label",{for:"latitude",class:"form-label"},"Latitude",-1),me={class:"col-6 mb-3"},pe={class:"mb-3"},be=e("label",{for:"receiver",class:"form-label"},"Nama Penerima",-1),ge={class:"col-6 mb-3"},ve={class:"mb-3"},fe=e("label",{for:"phone",class:"form-label"},"No HP",-1),he={class:"col-12 mb-3"},ye=e("label",{for:"province_id",class:"form-label"},"Provinsi",-1),ke=["value"],we={class:"col-12 mb-3"},xe=e("label",{for:"city_id",class:"form-label"},"Kabupaten / Kota",-1),Me=["value"],Ve={class:"col-12 mb-3"},Ce=e("label",{for:"subdistrict_id",class:"form-label"},"Kecamatan",-1),Se=["value"],Le={class:"col-12 mb-3"},Pe={class:"mb-3"},Ue=e("label",{for:"postal_code",class:"form-label"},"Kode Pos",-1),Ge={class:"col-12 mb-3"},Ke={class:"mb-3"},Ae=e("label",{for:"detail",class:"form-label"},"Alamat Detail",-1),De={class:"col-6"},Ne={class:"d-grid"},Fe=["disabled"],Te={class:"d-flex justify-content-center align-items-center"},je=e("span",null,[e("i",{class:"lni lni-save me-2"}),x("Simpan")],-1),Be={class:"col-6"},$e={class:"d-grid"},ze=e("i",{class:"lni lni-arrow-left me-2"},null,-1),He=e("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),We={__name:"Create",setup(Ee){let f=F();V({zoom:5});const s=T({province_id:"",city_id:"",subdistrict_id:"",longitude:0,latitude:0,receiver:"",phone:"",postal_code:"",detail:""});let m=V({provinces:[],cities:[],subdistricts:[],searchAddress:[],preview:null}),S=()=>{axios.get("/api/provinces").then(l=>{m.provinces=l.data.data}).catch(l=>{console.log(l)})},L=l=>{axios.get("/api/cities",{params:{province_id:l}}).then(o=>{m.cities=o.data.data}).catch(o=>{console.log(o)})},P=l=>{axios.get("/api/subdistricts",{params:{city_id:l}}).then(o=>{m.subdistricts=o.data.data}).catch(o=>{console.log(o)})};function U(){navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{s.latitude=l.coords.latitude,s.longitude=l.coords.longitude}):console.log("Geolocation is not supported by this browser.")}j(()=>{S(),U()});function M(l){s.latitude=l.latLng.lat(),s.longitude=l.latLng.lng()}function G(l){s.latitude=l.geometry.location.lat(),s.longitude=l.geometry.location.lng()}function K(){s.transform(l=>({...l})).post(route("address.store"))}return(l,o)=>{const A=w("GMapAutocomplete"),D=w("GMapMarker"),N=w("GMapMap");return a(),_("div",null,[r(t($),null,{default:g(()=>[e("title",null,v(t(f).metaTitle),1),e("meta",{"head-key":"description",name:"description",content:t(f).metaDescription},null,8,I),e("meta",{"head-key":"keyword",name:"keyword",content:t(f).metaKeyword},null,8,J)]),_:1}),r(z),r(H),e("div",O,[e("div",Q,[e("div",R,[e("div",W,[e("div",X,[e("div",Y,[Z,r(t(C),{href:l.route("address.index"),class:"btn btn-sm btn-outline-secondary"},{default:g(()=>[ee,x("Kembali ")]),_:1},8,["href"])]),e("form",{onSubmit:B(K,["prevent"])},[e("div",se,[oe,e("div",ie,[e("div",le,[ae,r(A,{placeholder:"Cari...",onPlace_changed:G,class:"form-control mb-2"}),r(N,{style:{width:"100%",height:"500px"},center:{lat:t(s).latitude,lng:t(s).longitude},zoom:15,onClick:M},{default:g(()=>[r(D,{position:{lat:t(s).latitude,lng:t(s).longitude},clickable:!0,draggable:!0,onDrag:M},null,8,["position"])]),_:1},8,["center"])])]),e("div",ne,[e("div",de,[re,c(e("input",{class:"form-control",id:"longitude","onUpdate:modelValue":o[0]||(o[0]=i=>t(s).longitude=i),disabled:""},null,512),[[p,t(s).longitude]]),t(s).errors.longitude?(a(),n(u,{key:0,id:"longitude",message:t(s).errors.longitude},null,8,["message"])):d("",!0)])]),e("div",ce,[e("div",ue,[_e,c(e("input",{class:"form-control",id:"latitude","onUpdate:modelValue":o[1]||(o[1]=i=>t(s).latitude=i),disabled:""},null,512),[[p,t(s).latitude]]),t(s).errors.latitude?(a(),n(u,{key:0,id:"latitude",message:t(s).errors.latitude},null,8,["message"])):d("",!0)])]),e("div",me,[e("div",pe,[be,c(e("input",{class:"form-control",id:"receiver","onUpdate:modelValue":o[2]||(o[2]=i=>t(s).receiver=i)},null,512),[[p,t(s).receiver]]),t(s).errors.receiver?(a(),n(u,{key:0,id:"receiver",message:t(s).errors.receiver},null,8,["message"])):d("",!0)])]),e("div",ge,[e("div",ve,[fe,c(e("input",{class:"form-control",id:"sender","onUpdate:modelValue":o[3]||(o[3]=i=>t(s).phone=i)},null,512),[[p,t(s).phone]]),t(s).errors.phone?(a(),n(u,{key:0,id:"phone",message:t(s).errors.phone},null,8,["message"])):d("",!0)])]),e("div",he,[ye,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[4]||(o[4]=i=>t(s).province_id=i),id:"province_id",onChange:o[5]||(o[5]=i=>t(L)(t(s).province_id))},[(a(!0),_(y,null,k(t(m).provinces,(i,b)=>(a(),_("option",{value:i.id,key:b},v(i.name),9,ke))),128))],544),[[h,t(s).province_id]]),t(s).errors.province_id?(a(),n(u,{key:0,id:"province_id",message:t(s).errors.province_id},null,8,["message"])):d("",!0)]),e("div",we,[xe,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[6]||(o[6]=i=>t(s).city_id=i),id:"city_id",onChange:o[7]||(o[7]=i=>t(P)(t(s).city_id))},[(a(!0),_(y,null,k(t(m).cities,(i,b)=>(a(),_("option",{value:i.id,key:b},v(i.name),9,Me))),128))],544),[[h,t(s).city_id]]),t(s).errors.city_id?(a(),n(u,{key:0,id:"city_id",message:t(s).errors.city_id},null,8,["message"])):d("",!0)]),e("div",Ve,[Ce,c(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[8]||(o[8]=i=>t(s).subdistrict_id=i),id:"subdistrict_id"},[(a(!0),_(y,null,k(t(m).subdistricts,(i,b)=>(a(),_("option",{value:i.id,key:b},v(i.name),9,Se))),128))],512),[[h,t(s).subdistrict_id]]),t(s).errors.subdistrict_id?(a(),n(u,{key:0,id:"subdistrict_id",message:t(s).errors.subdistrict_id},null,8,["message"])):d("",!0)]),e("div",Le,[e("div",Pe,[Ue,c(e("input",{class:"form-control",id:"postal_code","onUpdate:modelValue":o[9]||(o[9]=i=>t(s).postal_code=i)},null,512),[[p,t(s).postal_code]]),t(s).errors.postal_code?(a(),n(u,{key:0,id:"postal_code",message:t(s).errors.postal_code},null,8,["message"])):d("",!0)])]),e("div",Ge,[e("div",Ke,[Ae,c(e("textarea",{class:"form-control",id:"detail",rows:"3","onUpdate:modelValue":o[10]||(o[10]=i=>t(s).detail=i)},null,512),[[p,t(s).detail]]),t(s).errors.detail?(a(),n(u,{key:0,id:"detail",message:t(s).errors.detail},null,8,["message"])):d("",!0)])]),e("div",De,[e("div",Ne,[e("button",{class:"btn btn-success rounded-custom",disabled:t(s).processing},[e("div",Te,[t(s).processing?(a(),n(q,{key:0,color:"text-white",size:"sm",me:"me-2"})):d("",!0),je])],8,Fe)])]),e("div",Be,[e("div",$e,[r(t(C),{href:l.route("address.index"),class:"btn btn-outline-secondary rounded-custom"},{default:g(()=>[ze,x("Kembali ")]),_:1},8,["href"])])])])],40,te)])])])])]),He,r(E)])}}};export{We as default};
>>>>>>>> parent of 002428b (Debug 1):public/build/assets/Create.57674b24.js
