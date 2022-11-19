import{C as O,D as z,g as Q,s as R,f as m,b as c,w as v,u as t,a as e,q as W,e as u,E as b,c as d,j as r,G as f,F as y,l as k,k as x,I as w,o as a,t as h,H as X,L as B,z as Y}from"./app.20070287.js";import{_ as Z}from"./Header.c410a042.js";import{S as ee}from"./Sidebar.009ec18d.js";import{_ as te}from"./Footer.52e3282f.js";import{F as _}from"./FormText.ad0c021c.js";import{S as se}from"./SpinnerProcessing.68332544.js";const oe=["content"],ie=["content"],le={class:"page-content-wrapper"},ae={class:"container"},ne={class:"profile-wrapper-area py-3"},de={class:"card"},re={class:"card-body p-4"},ce={class:"d-flex align-items-center justify-content-between mb-3"},ue=e("span",{class:"h6"},"Ubah Alamat",-1),_e=e("i",{class:"lni lni-arrow-left me-2"},null,-1),me=["onSubmit"],pe={class:"row"},be=e("div",{class:"col-lg-12 py-2"},[e("hr")],-1),ge={class:"col-lg-12 mb-3"},ve={class:"mb-3"},he=e("label",{for:"address",class:"form-label d-flex justify-content-between"},[e("span",null,"Lokasi")],-1),fe={class:"col-6 mb-3"},ye={class:"mb-3"},ke=e("label",{for:"longitude",class:"form-label"},"Longitude",-1),we={class:"col-6 mb-3"},xe={class:"mb-3"},Me=e("label",{for:"latitude",class:"form-label"},"Latitude",-1),Ve={class:"col-6 mb-3"},Se={class:"mb-3"},Ce=e("label",{for:"receiver",class:"form-label"},"Nama Penerima",-1),Ue={class:"col-6 mb-3"},Le={class:"mb-3"},Pe=e("label",{for:"phone",class:"form-label"},"No HP",-1),Ge={class:"col-12 mb-3"},Fe=e("label",{for:"province_id",class:"form-label"},"Provinsi",-1),Ke=["value"],Ae={class:"col-12 mb-3"},De=e("label",{for:"city_id",class:"form-label"},"Kabupaten / Kota",-1),Ne=["value"],je={class:"col-12 mb-3"},ze=e("label",{for:"subdistrict_id",class:"form-label"},"Kecamatan",-1),Be=["value"],Te={class:"col-12 mb-3"},$e={class:"mb-3"},Ee=e("label",{for:"postal_code",class:"form-label"},"Kode Pos",-1),He={class:"col-12 mb-3"},Ie={class:"mb-3"},qe=e("label",{for:"detail",class:"form-label"},"Alamat Detail",-1),Je={class:"col-6"},Oe={class:"d-grid"},Qe=["disabled"],Re={class:"d-flex justify-content-center align-items-center"},We=e("span",null,[e("i",{class:"lni lni-save me-2"}),x("Simpan")],-1),Xe={class:"col-6"},Ye={class:"d-grid"},Ze=e("i",{class:"lni lni-arrow-left me-2"},null,-1),et=e("div",{class:"internet-connection-status",id:"internetStatus"},null,-1),dt={__name:"Edit",setup(tt){var C,U,L,P,G,F,K,A,D,N,j;let n=O();z({zoom:5});const s=Q({id:(C=n.result.id)!=null?C:"",province_id:(U=n.result.subdistrict.city.province_id)!=null?U:"",city_id:(L=n.result.subdistrict.city_id)!=null?L:"",user_id:(P=n.result.user_id)!=null?P:"",subdistrict_id:(G=n.result.subdistrict_id)!=null?G:"",longitude:(F=parseFloat(n.result.longitude))!=null?F:0,latitude:(K=parseFloat(n.result.latitude))!=null?K:0,receiver:(A=n.result.receiver)!=null?A:"",phone:(D=n.result.phone)!=null?D:"",postal_code:(N=n.result.postal_code)!=null?N:"",detail:(j=n.result.detail)!=null?j:""});let p=z({provinces:[],cities:[],subdistricts:[],searchAddress:[],preview:null}),T=()=>{axios.get("/api/provinces").then(l=>{p.provinces=l.data.data}).catch(l=>{console.log(l)})},M=l=>{axios.get("/api/cities",{params:{province_id:l}}).then(o=>{p.cities=o.data.data}).catch(o=>{console.log(o)})},V=l=>{axios.get("/api/subdistricts",{params:{city_id:l}}).then(o=>{p.subdistricts=o.data.data}).catch(o=>{console.log(o)})};function $(){navigator.geolocation?navigator.geolocation.getCurrentPosition(l=>{}):console.log("Geolocation is not supported by this browser.")}R(()=>{T(),M(s.province_id),V(s.city_id),$()});function S(l){s.latitude=l.latLng.lat(),s.longitude=l.latLng.lng()}function E(l){s.latitude=l.geometry.location.lat(),s.longitude=l.geometry.location.lng()}function H(){let l=s.data();Y.Inertia.post(route("address.update",l.id),{_method:"put",...l})}return(l,o)=>{const I=w("GMapAutocomplete"),q=w("GMapMarker"),J=w("GMapMap");return a(),m("div",null,[c(t(X),null,{default:v(()=>[e("title",null,h(t(n).metaTitle),1),e("meta",{"head-key":"description",name:"description",content:t(n).metaDescription},null,8,oe),e("meta",{"head-key":"keyword",name:"keyword",content:t(n).metaKeyword},null,8,ie)]),_:1}),c(Z),c(ee),e("div",le,[e("div",ae,[e("div",ne,[e("div",de,[e("div",re,[e("div",ce,[ue,c(t(B),{href:l.route("address.index"),class:"btn btn-sm btn-outline-secondary"},{default:v(()=>[_e,x("Kembali ")]),_:1},8,["href"])]),e("form",{onSubmit:W(H,["prevent"])},[e("div",pe,[be,e("div",ge,[e("div",ve,[he,c(I,{placeholder:"Cari...",onPlace_changed:E,class:"form-control mb-2"}),c(J,{style:{width:"100%",height:"500px"},center:{lat:t(s).latitude,lng:t(s).longitude},zoom:15,onClick:S},{default:v(()=>[c(q,{position:{lat:t(s).latitude,lng:t(s).longitude},clickable:!0,draggable:!0,onDrag:S},null,8,["position"])]),_:1},8,["center"])])]),e("div",fe,[e("div",ye,[ke,u(e("input",{class:"form-control",id:"longitude","onUpdate:modelValue":o[0]||(o[0]=i=>t(s).longitude=i),disabled:""},null,512),[[b,t(s).longitude]]),t(s).errors.longitude?(a(),d(_,{key:0,id:"longitude",message:t(s).errors.longitude},null,8,["message"])):r("",!0)])]),e("div",we,[e("div",xe,[Me,u(e("input",{class:"form-control",id:"latitude","onUpdate:modelValue":o[1]||(o[1]=i=>t(s).latitude=i),disabled:""},null,512),[[b,t(s).latitude]]),t(s).errors.latitude?(a(),d(_,{key:0,id:"latitude",message:t(s).errors.latitude},null,8,["message"])):r("",!0)])]),e("div",Ve,[e("div",Se,[Ce,u(e("input",{class:"form-control",id:"receiver","onUpdate:modelValue":o[2]||(o[2]=i=>t(s).receiver=i)},null,512),[[b,t(s).receiver]]),t(s).errors.receiver?(a(),d(_,{key:0,id:"receiver",message:t(s).errors.receiver},null,8,["message"])):r("",!0)])]),e("div",Ue,[e("div",Le,[Pe,u(e("input",{class:"form-control",id:"sender","onUpdate:modelValue":o[3]||(o[3]=i=>t(s).phone=i)},null,512),[[b,t(s).phone]]),t(s).errors.phone?(a(),d(_,{key:0,id:"phone",message:t(s).errors.phone},null,8,["message"])):r("",!0)])]),e("div",Ge,[Fe,u(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[4]||(o[4]=i=>t(s).province_id=i),id:"province_id",onChange:o[5]||(o[5]=i=>t(M)(t(s).province_id))},[(a(!0),m(y,null,k(t(p).provinces,(i,g)=>(a(),m("option",{value:i.id,key:g},h(i.name),9,Ke))),128))],544),[[f,t(s).province_id]]),t(s).errors.province_id?(a(),d(_,{key:0,id:"province_id",message:t(s).errors.province_id},null,8,["message"])):r("",!0)]),e("div",Ae,[De,u(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[6]||(o[6]=i=>t(s).city_id=i),id:"city_id",onChange:o[7]||(o[7]=i=>t(V)(t(s).city_id))},[(a(!0),m(y,null,k(t(p).cities,(i,g)=>(a(),m("option",{value:i.id,key:g},h(i.name),9,Ne))),128))],544),[[f,t(s).city_id]]),t(s).errors.city_id?(a(),d(_,{key:0,id:"city_id",message:t(s).errors.city_id},null,8,["message"])):r("",!0)]),e("div",je,[ze,u(e("select",{class:"form-control mb-3","onUpdate:modelValue":o[8]||(o[8]=i=>t(s).subdistrict_id=i),id:"subdistrict_id"},[(a(!0),m(y,null,k(t(p).subdistricts,(i,g)=>(a(),m("option",{value:i.id,key:g},h(i.name),9,Be))),128))],512),[[f,t(s).subdistrict_id]]),t(s).errors.subdistrict_id?(a(),d(_,{key:0,id:"subdistrict_id",message:t(s).errors.subdistrict_id},null,8,["message"])):r("",!0)]),e("div",Te,[e("div",$e,[Ee,u(e("input",{class:"form-control",id:"postal_code","onUpdate:modelValue":o[9]||(o[9]=i=>t(s).postal_code=i)},null,512),[[b,t(s).postal_code]]),t(s).errors.postal_code?(a(),d(_,{key:0,id:"postal_code",message:t(s).errors.postal_code},null,8,["message"])):r("",!0)])]),e("div",He,[e("div",Ie,[qe,u(e("textarea",{class:"form-control",id:"detail",rows:"3","onUpdate:modelValue":o[10]||(o[10]=i=>t(s).detail=i)},null,512),[[b,t(s).detail]]),t(s).errors.detail?(a(),d(_,{key:0,id:"detail",message:t(s).errors.detail},null,8,["message"])):r("",!0)])]),e("div",Je,[e("div",Oe,[e("button",{class:"btn btn-success rounded-custom",disabled:t(s).processing},[e("div",Re,[t(s).processing?(a(),d(se,{key:0,color:"text-white",size:"sm",me:"me-2"})):r("",!0),We])],8,Qe)])]),e("div",Xe,[e("div",Ye,[c(t(B),{href:l.route("address.index"),class:"btn btn-outline-secondary rounded-custom"},{default:v(()=>[Ze,x("Kembali ")]),_:1},8,["href"])])])])],40,me)])])])])]),et,c(te)])}}};export{dt as default};
