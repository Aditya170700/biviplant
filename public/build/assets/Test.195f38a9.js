import{D as p,E as o,o as _,f as m,a as n,b as a,w as d,u as l}from"./app.2d01b1f7.js";const u={class:"col-lg-12 px-lg-5 mb-3"},f={class:"mb-3"},h=n("label",{for:"address",class:"form-label d-flex justify-content-between"},[n("span",null,"Lokasi")],-1),x={__name:"Test",setup(M){let e=p({lat:40.689247,lng:-74.044502});function c(t){console.log(t.latLng.lat(),t.latLng.lng()),e.lat=t.latLng.lat(),e.lng=t.latLng.lng()}function s(t){console.log(t.geometry.location.lat(),t.geometry.location.lng()),e.lat=t.geometry.location.lat(),e.lng=t.geometry.location.lng()}return(t,b)=>{const r=o("GMapAutocomplete"),g=o("GMapMarker"),i=o("GMapMap");return _(),m("div",u,[n("div",f,[h,a(r,{placeholder:"Cari...",onPlace_changed:s,class:"form-control mb-2"}),a(i,{style:{width:"100%",height:"500px"},center:{lat:l(e).lat,lng:l(e).lng},zoom:15,onClick:c},{default:d(()=>[a(g,{position:l(e),clickable:!0,draggable:!0,onDrag:c},null,8,["position"])]),_:1},8,["center"])])])}}};export{x as default};
