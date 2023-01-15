import { resolveComponent, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.74b19c58.mjs";
import { S as Sidebar } from "./Sidebar.7d303b8e.mjs";
import { _ as _sfc_main$2 } from "./Footer.8d824544.mjs";
import { reactive } from "@vue/reactivity";
import { useAttrs, onMounted } from "@vue/runtime-core";
import { F as FormText, S as SpinnerProcessing } from "./SpinnerProcessing.6b8068f7.mjs";
import "lodash";
import "axios";
import "@inertiajs/inertia";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./socket.0d6bda6b.mjs";
import "socket.io-client";
const _sfc_main = {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
    reactive({
      zoom: 5
    });
    const form = useForm({
      province_id: "",
      city_id: "",
      subdistrict_id: "",
      longitude: 0,
      latitude: 0,
      receiver: "",
      phone: "",
      postal_code: "",
      detail: ""
    });
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
    function dragend(e) {
      form.latitude = e.latLng.lat();
      form.longitude = e.latLng.lng();
    }
    function setPlace(e) {
      form.latitude = e.geometry.location.lat();
      form.longitude = e.geometry.location.lng();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GMapAutocomplete = resolveComponent("GMapAutocomplete");
      const _component_GMapMap = resolveComponent("GMapMap");
      const _component_GMapMarker = resolveComponent("GMapMarker");
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
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Tambah Alamat</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("address.index"),
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
      _push(`</div><form><div class="row"><div class="col-lg-12 py-2"><hr></div><div class="col-lg-12 mb-3"><div class="mb-3"><label for="address" class="form-label d-flex justify-content-between"><span>Lokasi</span></label>`);
      _push(ssrRenderComponent(_component_GMapAutocomplete, {
        placeholder: "Cari...",
        onPlace_changed: setPlace,
        class: "form-control mb-2"
      }, null, _parent));
      _push(ssrRenderComponent(_component_GMapMap, {
        style: { "width": "100%", "height": "500px" },
        center: {
          lat: unref(form).latitude,
          lng: unref(form).longitude
        },
        zoom: 15,
        onClick: dragend
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GMapMarker, {
              position: {
                lat: unref(form).latitude,
                lng: unref(form).longitude
              },
              clickable: true,
              draggable: true,
              onDrag: dragend
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_GMapMarker, {
                position: {
                  lat: unref(form).latitude,
                  lng: unref(form).longitude
                },
                clickable: true,
                draggable: true,
                onDrag: dragend
              }, null, 8, ["position"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="col-6 mb-3"><div class="mb-3"><label for="longitude" class="form-label">Longitude</label><input class="form-control" id="longitude"${ssrRenderAttr("value", unref(form).longitude)} disabled>`);
      if (unref(form).errors.longitude) {
        _push(ssrRenderComponent(FormText, {
          id: "longitude",
          message: unref(form).errors.longitude
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-6 mb-3"><div class="mb-3"><label for="latitude" class="form-label">Latitude</label><input class="form-control" id="latitude"${ssrRenderAttr("value", unref(form).latitude)} disabled>`);
      if (unref(form).errors.latitude) {
        _push(ssrRenderComponent(FormText, {
          id: "latitude",
          message: unref(form).errors.latitude
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-6 mb-3"><div class="mb-3"><label for="receiver" class="form-label">Nama Penerima</label><input class="form-control" id="receiver"${ssrRenderAttr("value", unref(form).receiver)}>`);
      if (unref(form).errors.receiver) {
        _push(ssrRenderComponent(FormText, {
          id: "receiver",
          message: unref(form).errors.receiver
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-6 mb-3"><div class="mb-3"><label for="phone" class="form-label">No HP</label><input class="form-control" id="sender"${ssrRenderAttr("value", unref(form).phone)}>`);
      if (unref(form).errors.phone) {
        _push(ssrRenderComponent(FormText, {
          id: "phone",
          message: unref(form).errors.phone
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-12 mb-3"><label for="province_id" class="form-label">Provinsi</label><select class="form-control mb-3" id="province_id"><!--[-->`);
      ssrRenderList(unref(other).provinces, (province, i) => {
        _push(`<option${ssrRenderAttr("value", province.id)}>${ssrInterpolate(province.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(form).errors.province_id) {
        _push(ssrRenderComponent(FormText, {
          id: "province_id",
          message: unref(form).errors.province_id
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 mb-3"><label for="city_id" class="form-label">Kabupaten / Kota</label><select class="form-control mb-3" id="city_id"><!--[-->`);
      ssrRenderList(unref(other).cities, (city, i) => {
        _push(`<option${ssrRenderAttr("value", city.id)}>${ssrInterpolate(city.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(form).errors.city_id) {
        _push(ssrRenderComponent(FormText, {
          id: "city_id",
          message: unref(form).errors.city_id
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 mb-3"><label for="subdistrict_id" class="form-label">Kecamatan</label><select class="form-control mb-3" id="subdistrict_id"><!--[-->`);
      ssrRenderList(unref(other).subdistricts, (subdistrict, i) => {
        _push(`<option${ssrRenderAttr("value", subdistrict.id)}>${ssrInterpolate(subdistrict.name)}</option>`);
      });
      _push(`<!--]--></select>`);
      if (unref(form).errors.subdistrict_id) {
        _push(ssrRenderComponent(FormText, {
          id: "subdistrict_id",
          message: unref(form).errors.subdistrict_id
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-12 mb-3"><div class="mb-3"><label for="postal_code" class="form-label">Kode Pos</label><input class="form-control" id="postal_code"${ssrRenderAttr("value", unref(form).postal_code)}>`);
      if (unref(form).errors.postal_code) {
        _push(ssrRenderComponent(FormText, {
          id: "postal_code",
          message: unref(form).errors.postal_code
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-12 mb-3"><div class="mb-3"><label for="detail" class="form-label">Alamat Detail</label><textarea class="form-control" id="detail" rows="3">${ssrInterpolate(unref(form).detail)}</textarea>`);
      if (unref(form).errors.detail) {
        _push(ssrRenderComponent(FormText, {
          id: "detail",
          message: unref(form).errors.detail
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-6"><div class="d-grid"><button class="btn btn-success rounded-custom"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}><div class="d-flex justify-content-center align-items-center">`);
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
        href: _ctx.route("address.index"),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Address/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
