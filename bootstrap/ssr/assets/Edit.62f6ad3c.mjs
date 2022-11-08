import { unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { reactive } from "@vue/reactivity";
import { useAttrs, onMounted } from "@vue/runtime-core";
import { S as SpinnerProcessing } from "./SpinnerProcessing.d7cf9601.mjs";
import { LMap, LTileLayer, LControl, LMarker, LTooltip } from "@vue-leaflet/vue-leaflet";
/* empty css                   */import { OpenStreetMapProvider } from "leaflet-geosearch";
import "lodash";
import "axios";
import "@inertiajs/inertia";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
    let map = reactive({
      zoom: 5
    });
    let addresses = JSON.parse(localStorage.getItem("address"));
    let form = reactive(JSON.parse(addresses[route().params.id]));
    let other = reactive({
      provinces: [],
      cities: [],
      subdistricts: [],
      searchAddress: [],
      preview: null
    });
    let getProvince = () => {
      axios.get("/api/provinces").then((response) => {
        other.provinces = response.data.data;
        getCity(form.subdistrict.city.province.id, true);
      }).catch((error) => {
        console.log(error);
      });
    };
    let getCity = (provinceId, init = false) => {
      if (!init) {
        form.subdistrict.city.province.id = provinceId;
        form.subdistrict.city.province.name = document.querySelector("#province_id").options[document.querySelector("#province_id").selectedIndex].text;
      }
      axios.get("/api/cities", {
        params: {
          province_id: provinceId
        }
      }).then((response) => {
        other.cities = response.data.data;
        if (init) {
          getSubdistrict(form.subdistrict.city.id, true);
        }
      }).catch((error) => {
        console.log(error);
      });
    };
    let getSubdistrict = (cityId, init = false) => {
      if (!init) {
        form.subdistrict.city.id = cityId;
        form.subdistrict.city.name = document.querySelector("#city_id").options[document.querySelector("#city_id").selectedIndex].text;
      }
      axios.get("/api/subdistricts", {
        params: {
          city_id: cityId
        }
      }).then((response) => {
        other.subdistricts = response.data.data;
      }).catch((error) => {
        console.log(error);
      });
    };
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          form.latitude = position.coords.latitude;
          form.longitude = position.coords.longitude;
        });
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }
    onMounted(() => {
      getProvince();
      getLocation();
    });
    function log(ev) {
      let loc = ev.target.getLatLng();
      form.longitude = loc.lng;
      form.latitude = loc.lat;
    }
    function changeMarker(event) {
      form.longitude = event.latlng.lng;
      form.latitude = event.latlng.lat;
    }
    function search(event) {
      let provider = new OpenStreetMapProvider();
      provider.search({ query: event.target.value }).then((res) => {
        other.searchAddress = res;
      });
    }
    function selectAddress(lat, lng) {
      form.longitude = lng;
      form.latitude = lat;
      other.searchAddress = [];
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(unref(attrs).metaTitle)}</title><meta head-key="description" name="description"${ssrRenderAttr("content", unref(attrs).metaDescription)}${_scopeId}><meta head-key="keyword" name="keyword"${ssrRenderAttr("content", unref(attrs).metaKeyword)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(unref(attrs).metaTitle), 1),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: unref(attrs).metaDescription
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "keyword",
                name: "keyword",
                content: unref(attrs).metaKeyword
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Ubah Alamat</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("address-guest.index"),
        class: "btn btn-sm btn-outline-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-arrow-left me-2"${_scopeId}></i>Kembali `);
          } else {
            return [
              createVNode("i", { class: "lni lni-arrow-left me-2" }),
              createTextVNode("Kembali ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><form><div class="row"><div class="col-lg-12 py-2"><hr></div><div class="col-1g-12 py-2"><div style="${ssrRenderStyle({ "height": "50vh", "width": "100%", "z-index": "1 !important" })}">`);
      _push(ssrRenderComponent(unref(LMap), {
        modelValue: unref(map).zoom,
        "onUpdate:modelValue": ($event) => unref(map).zoom = $event,
        zoom: unref(map).zoom,
        "onUpdate:zoom": ($event) => unref(map).zoom = $event,
        center: [
          unref(form).latitude,
          unref(form).longitude
        ],
        onClick: changeMarker
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LTileLayer), { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LControl), { position: "topright" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<input type="text" placeholder="Cari..." style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId2}>`);
                  if (unref(other).searchAddress.length > 0) {
                    _push3(`<div class="collapse show" style="${ssrRenderStyle({ "width": "205px" })}"${_scopeId2}><div class="card card-body rounded-0 border border-dark p-0"${_scopeId2}><!--[-->`);
                    ssrRenderList(unref(other).searchAddress, (addr, i) => {
                      _push3(`<p style="${ssrRenderStyle({ "cursor": "pointer" })}"${_scopeId2}>${ssrInterpolate(addr.label)}</p>`);
                    });
                    _push3(`<!--]-->`);
                    if (unref(other).searchAddress < 1) {
                      _push3(`<p${_scopeId2}> Alamat tidak ditemukan </p>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("input", {
                      onKeyup: search,
                      type: "text",
                      placeholder: "Cari...",
                      style: { "width": "100%" }
                    }, null, 32),
                    unref(other).searchAddress.length > 0 ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "collapse show",
                      style: { "width": "205px" }
                    }, [
                      createVNode("div", { class: "card card-body rounded-0 border border-dark p-0" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(other).searchAddress, (addr, i) => {
                          return openBlock(), createBlock("p", {
                            style: { "cursor": "pointer" },
                            key: i,
                            onClick: ($event) => selectAddress(
                              addr.y,
                              addr.x
                            )
                          }, toDisplayString(addr.label), 9, ["onClick"]);
                        }), 128)),
                        unref(other).searchAddress < 1 ? (openBlock(), createBlock("p", { key: 0 }, " Alamat tidak ditemukan ")) : createCommentVNode("", true)
                      ])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(LMarker), {
              "lat-lng": [
                unref(form).latitude,
                unref(form).longitude
              ],
              draggable: "",
              onMoveend: log
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(LTooltip), null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(`Lat: ${unref(form).latitude} Lng: ${unref(form).longitude}`)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(`Lat: ${unref(form).latitude} Lng: ${unref(form).longitude}`), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(LTooltip), null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(`Lat: ${unref(form).latitude} Lng: ${unref(form).longitude}`), 1)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(LTileLayer), { url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" }),
              createVNode(unref(LControl), { position: "topright" }, {
                default: withCtx(() => [
                  createVNode("input", {
                    onKeyup: search,
                    type: "text",
                    placeholder: "Cari...",
                    style: { "width": "100%" }
                  }, null, 32),
                  unref(other).searchAddress.length > 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "collapse show",
                    style: { "width": "205px" }
                  }, [
                    createVNode("div", { class: "card card-body rounded-0 border border-dark p-0" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(other).searchAddress, (addr, i) => {
                        return openBlock(), createBlock("p", {
                          style: { "cursor": "pointer" },
                          key: i,
                          onClick: ($event) => selectAddress(
                            addr.y,
                            addr.x
                          )
                        }, toDisplayString(addr.label), 9, ["onClick"]);
                      }), 128)),
                      unref(other).searchAddress < 1 ? (openBlock(), createBlock("p", { key: 0 }, " Alamat tidak ditemukan ")) : createCommentVNode("", true)
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(unref(LMarker), {
                "lat-lng": [
                  unref(form).latitude,
                  unref(form).longitude
                ],
                draggable: "",
                onMoveend: log
              }, {
                default: withCtx(() => [
                  createVNode(unref(LTooltip), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(`Lat: ${unref(form).latitude} Lng: ${unref(form).longitude}`), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["lat-lng"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-6 mb-3"><div class="mb-3"><label for="longitude" class="form-label">Longitude</label><input class="form-control" id="longitude"${ssrRenderAttr("value", unref(form).longitude)} disabled></div></div><div class="col-6 mb-3"><div class="mb-3"><label for="latitude" class="form-label">Latitude</label><input class="form-control" id="latitude"${ssrRenderAttr("value", unref(form).latitude)} disabled></div></div><div class="col-6 mb-3"><div class="mb-3"><label for="receiver" class="form-label">Nama Penerima</label><input class="form-control" id="receiver"${ssrRenderAttr("value", unref(form).receiver)}></div></div><div class="col-6 mb-3"><div class="mb-3"><label for="phone" class="form-label">No HP</label><input class="form-control" id="sender"${ssrRenderAttr("value", unref(form).phone)}></div></div><div class="col-12 mb-3"><label for="province_id" class="form-label">Provinsi</label><select class="form-control mb-3" id="province_id"><!--[-->`);
      ssrRenderList(unref(other).provinces, (province, i) => {
        _push(`<option${ssrRenderAttr("value", province.id)}>${ssrInterpolate(province.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-12 mb-3"><label for="city_id" class="form-label">Kabupaten / Kota</label><select class="form-control mb-3" id="city_id"><!--[-->`);
      ssrRenderList(unref(other).cities, (city, i) => {
        _push(`<option${ssrRenderAttr("value", city.id)}>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-12 mb-3"><label for="subdistrict_id" class="form-label">Kecamatan</label><select class="form-control mb-3" id="subdistrict_id"><!--[-->`);
      ssrRenderList(unref(other).subdistricts, (subdistrict, i) => {
        _push(`<option${ssrRenderAttr("value", subdistrict.id)}>${ssrInterpolate(subdistrict.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="col-12 mb-3"><div class="mb-3"><label for="postal_code" class="form-label">Kode Pos</label><input class="form-control" id="postal_code"${ssrRenderAttr("value", unref(form).postal_code)}></div></div><div class="col-12 mb-3"><div class="mb-3"><label for="detail" class="form-label">Alamat Detail</label><textarea class="form-control" id="detail" rows="3">${ssrInterpolate(unref(form).detail)}</textarea></div></div><div class="col-6"><div class="d-grid"><button class="btn btn-success rounded-custom"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}><div class="d-flex justify-content-center align-items-center">`);
      if (unref(form).processing) {
        _push(ssrRenderComponent(SpinnerProcessing, {
          color: "text-white",
          size: "sm",
          me: "me-2"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span><i class="lni lni-save me-2"></i>Simpan</span></div></button></div></div><div class="col-6"><div class="d-grid">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("address-guest.index"),
        class: "btn btn-outline-secondary rounded-custom"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-arrow-left me-2"${_scopeId}></i>Kembali `);
          } else {
            return [
              createVNode("i", { class: "lni lni-arrow-left me-2" }),
              createTextVNode("Kembali ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></form></div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddressGuest/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
