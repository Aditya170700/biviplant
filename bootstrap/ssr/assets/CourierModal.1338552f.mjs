import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import { ref } from "@vue/runtime-core";
import "axios";
import { useStore } from "vuex";
import "./utils.bec59827.mjs";
import "../ssr.mjs";
import "@vue/server-renderer";
import "process";
import "http";
import "qs";
import "moment";
const CourierModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "CourierModal",
  __ssrInlineRender: true,
  props: {
    cart: Object
  },
  setup(__props) {
    let store = useStore();
    let shippingCosts = ref(null);
    let loading = ref(false);
    function isActive(name, service) {
      var _a, _b;
      return ((_a = store.getters.courier) == null ? void 0 : _a.name) == name && ((_b = store.getters.courier) == null ? void 0 : _b.service) == service;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "offcanvas offcanvas-start suha-offcanvas-wrap p-0",
        tabindex: "-1",
        id: `courierModal${__props.cart.id}`,
        "aria-labelledby": `courierModal${__props.cart.id}Label`,
        style: { "background": "#f1f5f0 !important" }
      }, _attrs))}><div class="offcanvas-body"><div class="profile-wrapper-area"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Pilih Kurir</span><button class="btn btn-sm btn-light" data-bs-dismiss="offcanvas" aria-label="Close"><i class="lni lni-close"></i></button></div><div class="d-flex justify-content-between my-3"><div class="col-6"><div class="row"><div class="col-12 small">${ssrInterpolate(__props.cart.product.name)}</div><div class="col-12 small">${ssrInterpolate(Math.round(
        __props.cart.product.weight / 1e3 * __props.cart.qty
      ))} kg </div><div class="col-12 small">${ssrInterpolate(__props.cart.qty)} pcs </div></div></div><div class="col-6 text-end"><button class="btn btn-sm btn-success"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}><i class="lni lni-search-alt me-2"></i> Cari Kurir </button></div></div>`);
      if (unref(loading)) {
        _push(`<div class="list-group text-center"><span class="list-group-item list-group-item-action blink" aria-current="true">Mencari kurir...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading) && unref(shippingCosts) == null || ((_b = (_a = unref(shippingCosts)) == null ? void 0 : _a.results) == null ? void 0 : _b.length) == 0) {
        _push(`<div class="list-group text-center"><span class="list-group-item list-group-item-action" aria-current="true">Kurir tidak ditemukan</span></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(loading) && unref(shippingCosts) != null && ((_d = (_c = unref(shippingCosts)) == null ? void 0 : _c.results) == null ? void 0 : _d.length) > 0) {
        _push(`<div class="list-group"><!--[-->`);
        ssrRenderList(unref(shippingCosts).results, (data, i) => {
          _push(`<div class="${ssrRenderClass(`${data.costs.length > 0 ? "" : "d-none"}`)}"><!--[-->`);
          ssrRenderList(data.costs, (cost, iCost) => {
            _push(`<a href="#" data-bs-toggle="offcanvas"${ssrRenderAttr("data-bs-target", `#courierModal${__props.cart.id}`)}${ssrRenderAttr("aria-controls", `courierModal${__props.cart.id}`)} style="${ssrRenderStyle({ "align-items": "center" })}" class="${ssrRenderClass(`list-group-item list-group-item-action ${isActive(data.name, cost.service) ? "active" : ""}`)}" aria-current="true"><div class="row mt-2"><div class="col-3"><img${ssrRenderAttr("src", `/courier/${data.code}.png`)} class="rounded mx-auto d-block mt-4" alt="" width="60"></div><div class="col-9"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1 small">${ssrInterpolate(data.name)}</h5></div><span class="mb-1 d-block small fw-bold">${ssrInterpolate(cost.service)}</span><span class="mb-1 d-block small"><b>Rp. ${ssrInterpolate(cost.cost[0].value)}</b></span><small class="mb-1 d-block small"><b>Estimasi : </b> ${ssrInterpolate(cost.cost[0].etd)} Hari </small></div></div></a>`);
          });
          _push(`<!--]--></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/CourierModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
