import{L as j}from"./App.b377252e.js";import{P as T}from"./Pagination.aa47c70a.js";import{L as F,D as A,g as B,s as D,c as m,w as f,I as K,z as I,J as _,o as l,a as o,q,b as g,f as d,F as v,l as b,t as n,j as a,k as U,e as h,E as u,G as M}from"./app.982608ae.js";import{S as E}from"./SpinnerProcessing.77a69ef5.js";import{F as H}from"./FormText.6c4399ca.js";import{d as O,e as G,s as J,b as R,a as Q,f as W,c as X,g as Y,h as Z,i as $,j as oo,O as to}from"./geosearch.module.14e7ae8c.js";import{_ as eo}from"./_plugin-vue_export-helper.cdc0426e.js";const so={components:{Layout:j,Link:F,SpinnerProcessing:E,FormText:H,Pagination:T,LMap:O,LIcon:G,LTileLayer:J,LMarker:R,LControl:Q,LControlLayers:W,LTooltip:X,LPopup:Y,LPolyline:Z,LPolygon:$,LRectangle:oo},props:{errors:Object,result:Object},setup(N){let s=A({zoom:15});const r=B({province_id:"",city_id:"",subdistrict_id:"",longitude:0,latitude:0,sender:"",phone:"",postal_code:"",detail:""});let t=A({provinces:[],cities:[],subdistricts:[],searchAddress:[],preview:null});function S(e){t.preview=e,new bootstrap.Modal(document.getElementById("preview"),{keyboard:!1}).show()}let z=()=>{K.get("/api/provinces").then(e=>{t.provinces=e.data.data}).catch(e=>{console.log(e)})},y=e=>{K.get("/api/cities",{params:{province_id:e}}).then(i=>{t.cities=i.data.data}).catch(i=>{console.log(i)})},k=e=>{K.get("/api/subdistricts",{params:{city_id:e}}).then(i=>{t.subdistricts=i.data.data}).catch(i=>{console.log(i)})};function w(){navigator.geolocation?navigator.geolocation.getCurrentPosition(e=>{r.latitude=e.coords.latitude,r.longitude=e.coords.longitude}):console.log("Geolocation is not supported by this browser.")}D(()=>{z(),w()});function L(){r.transform(e=>({...e})).post(route("admin.origins.store"),{onSuccess:()=>{r.reset("province_id","city_id","subdistrict_id","longitude","latitude","sender","phone","postal_code","detail")}})}let P=e=>{confirmation("Tindakan ini akan menghapus data secara permanen").then(i=>{i&&I.Inertia.delete(route("admin.origins.destroy",{id:e}))})};function c(e){let i=e.target.getLatLng();r.longitude=i.lng,r.latitude=i.lat}function x(e){r.longitude=e.latlng.lng,r.latitude=e.latlng.lat}function C(e){new to().search({query:e.target.value}).then(p=>{t.searchAddress=p})}function V(e,i){r.longitude=i,r.latitude=e,t.searchAddress=[]}return{other:t,getCity:y,getSubdistrict:k,form:r,preview:S,submit:L,destroy:P,map:s,log:c,changeMarker:x,search:C,selectAddress:V}}},io={class:"row"},lo={class:"col-md-12 grid-margin"},no={class:"card"},ro={class:"card-body"},ao={class:"row"},co={class:"col-1g-12 mb-3"},mo={style:{height:"75vh",width:"100%","z-index":"1 !important"}},_o={key:0,class:"collapse show",style:{width:"500px"}},ho={class:"card card-body rounded-0 border border-dark p-0"},go=["onClick"],uo={key:0},fo={class:"col-lg-6 mb-3"},vo={class:"mb-3"},bo=o("label",{for:"longitude",class:"form-label"},"Longitude",-1),po={class:"col-lg-6 mb-3"},yo={class:"mb-3"},ko=o("label",{for:"latitude",class:"form-label"},"Latitude",-1),wo={class:"col-lg-6 mb-3"},Lo={class:"mb-3"},Po=o("label",{for:"sender",class:"form-label"},"Nama Pengirim",-1),xo={class:"col-lg-6 mb-3"},Co={class:"mb-3"},Vo=o("label",{for:"phone",class:"form-label"},"No HP",-1),Ko={class:"col-lg-3 mb-3"},Mo=o("label",{for:"province_id",class:"form-label"},"Provinsi",-1),So=["value"],zo={class:"col-lg-3 mb-3"},Ao=o("label",{for:"city_id",class:"form-label"},"Kabupaten / Kota",-1),Uo=["value"],No={class:"col-lg-3 mb-3"},jo=o("label",{for:"subdistrict_id",class:"form-label"},"Kecamatan",-1),To=["value"],Fo={class:"col-lg-3 mb-3"},Bo={class:"mb-3"},Do=o("label",{for:"postal_code",class:"form-label"},"Kode Pos",-1),Io={class:"col-lg-12 mb-3"},qo={class:"mb-3"},Eo=o("label",{for:"detail",class:"form-label"},"Alamat Detail",-1),Ho={class:"col-lg-12"},Oo=["disabled"],Go={class:"d-flex justify-content-center align-items-center"},Jo=o("span",null,[o("i",{class:"fas fa-save me-2"}),U("Simpan")],-1),Ro={class:"col-md-12 grid-margin"},Qo={class:"modal fade",id:"preview",tabindex:"-1","aria-labelledby":"previewLabel","aria-hidden":"true"},Wo={class:"modal-dialog"},Xo={class:"modal-content rounded-custom"},Yo={key:0,class:"modal-body"},Zo={class:"d-flex justify-content-between align-items-center mb-3"},$o=o("div",{class:"h5"},"Preview Suplier",-1),ot=["href"],tt=o("i",{class:"fas fa-location-arrow"},null,-1),et=[tt],st={class:"row"},it=o("div",{class:"col-lg-4"},"Pengirim",-1),lt={class:"col-lg-8"},nt={class:"row"},rt=o("div",{class:"col-lg-4"},"No HP",-1),dt={class:"col-lg-8"},at={class:"row"},ct=o("div",{class:"col-lg-4"},"Provinsi",-1),mt={class:"col-lg-8"},_t={class:"row"},ht=o("div",{class:"col-lg-4"},"Kota / Kabupaten",-1),gt={class:"col-lg-8"},ut={class:"row"},ft=o("div",{class:"col-lg-4"},"Kecamatan",-1),vt={class:"col-lg-8"},bt={class:"row"},pt=o("div",{class:"col-lg-4"},"Kode Pos",-1),yt={class:"col-lg-8"},kt={class:"row"},wt=o("div",{class:"col-lg-4"},"Alamat Detail",-1),Lt={class:"col-lg-8"},Pt={class:"card"},xt={class:"card-body"},Ct={class:"row"},Vt={class:"col-lg-12"},Kt={class:"table-responsive"},Mt={class:"table"},St=o("thead",{class:"table-dark"},[o("tr",null,[o("th",null,"No"),o("th",null,"Pengirim"),o("th",null,"No Hp"),o("th",null,"Provinsi"),o("th",null,"Kota / Kabupaten"),o("th",null,"Kecamatan"),o("th",null,"Kode Pos"),o("th")])],-1),zt={class:"d-flex justify-content-end"},At=["onClick"],Ut=o("i",{class:"fas fa-eye"},null,-1),Nt=[Ut],jt=["onClick"],Tt=o("i",{class:"fas fa-trash"},null,-1),Ft=[Tt];function Bt(N,s,r,t,S,z){const y=_("l-tile-layer"),k=_("l-control"),w=_("l-tooltip"),L=_("l-marker"),P=_("l-map"),c=_("FormText"),x=_("SpinnerProcessing"),C=_("Pagination"),V=_("Layout");return l(),m(V,{title:"Suplier"},{default:f(()=>[o("div",io,[o("div",lo,[o("div",no,[o("div",ro,[o("form",{onSubmit:s[14]||(s[14]=q((...e)=>t.submit&&t.submit(...e),["prevent"]))},[o("div",ao,[o("div",co,[o("div",mo,[g(P,{modelValue:t.map.zoom,"onUpdate:modelValue":s[1]||(s[1]=e=>t.map.zoom=e),zoom:t.map.zoom,"onUpdate:zoom":s[2]||(s[2]=e=>t.map.zoom=e),center:[t.form.latitude,t.form.longitude],onClick:t.changeMarker},{default:f(()=>[g(y,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),g(k,{position:"topright"},{default:f(()=>[o("input",{onKeyup:s[0]||(s[0]=(...e)=>t.search&&t.search(...e)),type:"text",placeholder:"Cari...",style:{width:"500px"}},null,32),t.other.searchAddress.length>0?(l(),d("div",_o,[o("div",ho,[(l(!0),d(v,null,b(t.other.searchAddress,(e,i)=>(l(),d("p",{style:{cursor:"pointer"},key:i,onClick:p=>t.selectAddress(e.y,e.x)},n(e.label),9,go))),128)),t.other.searchAddress<1?(l(),d("p",uo," Alamat tidak ditemukan ")):a("",!0)])])):a("",!0)]),_:1}),g(L,{"lat-lng":[t.form.latitude,t.form.longitude],draggable:"",onMoveend:t.log},{default:f(()=>[g(w,null,{default:f(()=>[U(n(`Lat: ${t.form.latitude} Lng: ${t.form.longitude}`),1)]),_:1})]),_:1},8,["lat-lng","onMoveend"])]),_:1},8,["modelValue","zoom","center","onClick"])])]),o("div",fo,[o("div",vo,[bo,h(o("input",{class:"form-control",id:"longitude","onUpdate:modelValue":s[3]||(s[3]=e=>t.form.longitude=e),disabled:""},null,512),[[u,t.form.longitude]]),t.form.errors.longitude?(l(),m(c,{key:0,id:"longitude",message:t.form.errors.longitude},null,8,["message"])):a("",!0)])]),o("div",po,[o("div",yo,[ko,h(o("input",{class:"form-control",id:"latitude","onUpdate:modelValue":s[4]||(s[4]=e=>t.form.latitude=e),disabled:""},null,512),[[u,t.form.latitude]]),t.form.errors.latitude?(l(),m(c,{key:0,id:"latitude",message:t.form.errors.latitude},null,8,["message"])):a("",!0)])]),o("div",wo,[o("div",Lo,[Po,h(o("input",{class:"form-control",id:"sender","onUpdate:modelValue":s[5]||(s[5]=e=>t.form.sender=e)},null,512),[[u,t.form.sender]]),t.form.errors.sender?(l(),m(c,{key:0,id:"sender",message:t.form.errors.sender},null,8,["message"])):a("",!0)])]),o("div",xo,[o("div",Co,[Vo,h(o("input",{class:"form-control",id:"sender","onUpdate:modelValue":s[6]||(s[6]=e=>t.form.phone=e)},null,512),[[u,t.form.phone]]),t.form.errors.phone?(l(),m(c,{key:0,id:"phone",message:t.form.errors.phone},null,8,["message"])):a("",!0)])]),o("div",Ko,[Mo,h(o("select",{class:"form-control mb-3","onUpdate:modelValue":s[7]||(s[7]=e=>t.form.province_id=e),id:"province_id",onChange:s[8]||(s[8]=e=>t.getCity(t.form.province_id))},[(l(!0),d(v,null,b(t.other.provinces,(e,i)=>(l(),d("option",{value:e.id,key:i},n(e.name),9,So))),128))],544),[[M,t.form.province_id]]),t.form.errors.province_id?(l(),m(c,{key:0,id:"province_id",message:t.form.errors.province_id},null,8,["message"])):a("",!0)]),o("div",zo,[Ao,h(o("select",{class:"form-control mb-3","onUpdate:modelValue":s[9]||(s[9]=e=>t.form.city_id=e),id:"city_id",onChange:s[10]||(s[10]=e=>t.getSubdistrict(t.form.city_id))},[(l(!0),d(v,null,b(t.other.cities,(e,i)=>(l(),d("option",{value:e.id,key:i},n(e.name),9,Uo))),128))],544),[[M,t.form.city_id]]),t.form.errors.city_id?(l(),m(c,{key:0,id:"city_id",message:t.form.errors.city_id},null,8,["message"])):a("",!0)]),o("div",No,[jo,h(o("select",{class:"form-control mb-3","onUpdate:modelValue":s[11]||(s[11]=e=>t.form.subdistrict_id=e),id:"subdistrict_id"},[(l(!0),d(v,null,b(t.other.subdistricts,(e,i)=>(l(),d("option",{value:e.id,key:i},n(e.name),9,To))),128))],512),[[M,t.form.subdistrict_id]]),t.form.errors.subdistrict_id?(l(),m(c,{key:0,id:"subdistrict_id",message:t.form.errors.subdistrict_id},null,8,["message"])):a("",!0)]),o("div",Fo,[o("div",Bo,[Do,h(o("input",{class:"form-control",id:"postal_code","onUpdate:modelValue":s[12]||(s[12]=e=>t.form.postal_code=e)},null,512),[[u,t.form.postal_code]]),t.form.errors.postal_code?(l(),m(c,{key:0,id:"postal_code",message:t.form.errors.postal_code},null,8,["message"])):a("",!0)])]),o("div",Io,[o("div",qo,[Eo,h(o("textarea",{class:"form-control",id:"detail",rows:"3","onUpdate:modelValue":s[13]||(s[13]=e=>t.form.detail=e)},null,512),[[u,t.form.detail]]),t.form.errors.detail?(l(),m(c,{key:0,id:"detail",message:t.form.errors.detail},null,8,["message"])):a("",!0)])]),o("div",Ho,[o("button",{class:"btn btn-primary btn-sm rounded-custom",disabled:t.form.processing},[o("div",Go,[t.form.processing?(l(),m(x,{key:0,color:"text-white",size:"sm",me:"me-2"})):a("",!0),Jo])],8,Oo)])])],32)])])]),o("div",Ro,[o("div",Qo,[o("div",Wo,[o("div",Xo,[t.other.preview?(l(),d("div",Yo,[o("div",Zo,[$o,o("a",{href:`https://www.google.com/maps/?q=${t.other.preview.latitude},${t.other.preview.longitude}`,target:"_blank",class:"btn btn-primary btn-sm rounded-custom"},et,8,ot)]),o("div",st,[it,o("div",lt," : "+n(t.other.preview.sender),1)]),o("div",nt,[rt,o("div",dt," : "+n(t.other.preview.phone),1)]),o("div",at,[ct,o("div",mt," : "+n(t.other.preview.subdistrict.city.province.name),1)]),o("div",_t,[ht,o("div",gt," : "+n(t.other.preview.subdistrict.city.name),1)]),o("div",ut,[ft,o("div",vt," : "+n(t.other.preview.subdistrict.name),1)]),o("div",bt,[pt,o("div",yt," : "+n(t.other.preview.postal_code),1)]),o("div",kt,[wt,o("div",Lt," : "+n(t.other.preview.detail),1)])])):a("",!0)])])]),o("div",Pt,[o("div",xt,[o("div",Ct,[o("div",Vt,[o("div",Kt,[o("table",Mt,[St,o("tbody",null,[(l(!0),d(v,null,b(r.result.data,(e,i)=>(l(),d("tr",{key:i},[o("td",null,n(i+1),1),o("td",null,n(e.sender),1),o("td",null,n(e.phone),1),o("td",null,n(e.subdistrict.city.province.name),1),o("td",null,n(e.subdistrict.city.name),1),o("td",null,n(e.subdistrict.name),1),o("td",null,n(e.postal_code),1),o("td",zt,[o("button",{class:"btn btn-sm btn-primary me-2 rounded-custom",onClick:p=>t.preview(e)},Nt,8,At),o("button",{class:"btn btn-sm btn-danger me-2 rounded-custom",onClick:p=>t.destroy(e.id)},Ft,8,jt)])]))),128))])]),g(C,{class:"mt-2",links:r.result.links,from:r.result.from,to:r.result.to,total:r.result.total},null,8,["links","from","to","total"])])])])])])])])]),_:1})}const Jt=eo(so,[["render",Bt]]);export{Jt as default};