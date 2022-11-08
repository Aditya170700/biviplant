import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import { ref } from "@vue/runtime-core";
import "axios";
import { useStore } from "vuex";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const CourierModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "CourierModal",
  __ssrInlineRender: true,
  props: {
    primary_address: Object,
    product: Object,
    qty: Number
  },
  setup(__props) {
    const props = __props;
    let store = useStore();
    let qty = ref(props.qty);
    let shippingCosts = ref(null);
    let loading = ref(false);
    function isActive(name, service) {
      var _a, _b;
      return ((_a = store.getters.courier) == null ? void 0 : _a.name) == name && ((_b = store.getters.courier) == null ? void 0 : _b.service) == service;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "offcanvas offcanvas-start suha-offcanvas-wrap",
        tabindex: "-1",
        id: "courierModal",
        "aria-labelledby": "courierModalLabel",
        style: { "background": "#f1f5f0 !important" }
      }, _attrs))}><div class="offcanvas-body"><div class="profile-wrapper-area"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Cek Ongkir</span><button class="btn btn-sm btn-light" data-bs-dismiss="offcanvas" aria-label="Close"><i class="lni lni-close"></i></button></div><div class="d-flex justify-content-between my-3 align-items-center"><div class="d-flex justify-content-center"><button class="btn btn-sm btn-outline-danger"${ssrIncludeBooleanAttr(unref(qty) == 1) ? " disabled" : ""}><i class="lni lni-minus"></i></button><span class="mx-4">${ssrInterpolate(unref(qty))} pcs</span><button class="btn btn-sm btn-outline-primary"${ssrIncludeBooleanAttr(unref(qty) == __props.product.stock) ? " disabled" : ""}><i class="lni lni-plus"></i></button></div><button class="btn btn-sm btn-success"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""}><i class="lni lni-search-alt me-2"></i> Cek Ongkir </button></div>`);
      if (unref(loading)) {
        _push(`<div class="list-group text-center"><span class="list-group-item list-group-item-action blink" aria-current="true">Cek ongkir...</span></div>`);
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
            _push(`<a href="#" data-bs-toggle="offcanvas" data-bs-target="#courierModal" aria-controls="courierModal" style="${ssrRenderStyle({ "align-items": "center" })}" class="${ssrRenderClass(`list-group-item list-group-item-action ${isActive(data.name, cost.service) ? "active" : ""}`)}" aria-current="true"><div class="row mt-2"><div class="col-3"><img${ssrRenderAttr("src", `/courier/${data.code}.png`)} class="rounded mx-auto d-block mt-4" alt="" width="60"></div><div class="col-9"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1 small">${ssrInterpolate(data.name)}</h5></div><span class="mb-1 d-block small fw-bold">${ssrInterpolate(cost.service)}</span><span class="mb-1 d-block small"><b>Rp. ${ssrInterpolate(cost.cost[0].value)}</b></span><small class="mb-1 d-block small"><b>Estimasi : </b> ${ssrInterpolate(cost.cost[0].etd)} Hari </small></div></div></a>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/CourierModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
