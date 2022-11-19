import { mergeProps, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
const AddressModal_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "AddressModal",
  __ssrInlineRender: true,
  props: {
    user_addresses: Object,
    cart: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "offcanvas offcanvas-start suha-offcanvas-wrap p-0",
        tabindex: "-1",
        id: `addressModal${__props.cart.id}`,
        "aria-labelledby": `addressModalLabel${__props.cart.id}`,
        style: { "background": "#f1f5f0 !important" }
      }, _attrs))}><div class="offcanvas-body"><div class="profile-wrapper-area"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Daftar Alamat</span><div>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("address.create"),
        class: "btn btn-sm btn-success me-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-plus"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "lni lni-plus" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="btn btn-sm btn-light" data-bs-dismiss="offcanvas" aria-label="Close"><i class="lni lni-close"></i></button></div></div><div class="row">`);
      if (__props.user_addresses.data.length < 1) {
        _push(`<div class="col-lg-12 py-2"><hr><div class="d-flex justify-content-center align-items-center mt-2"><span class="small">Belum ada alamat</span></div></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(__props.user_addresses.data, (data, i) => {
          _push(`<div class="col-lg-12 py-2"><hr><div class="d-flex justify-content-between align-items-center mt-2"><span class="small">${ssrInterpolate(data.receiver)}</span><span>`);
          if (__props.cart.user_address_id == data.id) {
            _push(`<button class="${ssrRenderClass(`btn btn-sm btn-success rounded-circle`)}"><i class="lni lni-checkmark"></i></button>`);
          } else {
            _push(`<button class="${ssrRenderClass(`btn btn-sm btn-light rounded-circle`)}"><i class="lni lni-power-switch"></i></button>`);
          }
          _push(`</span></div><span class="d-block small">${ssrInterpolate(data.phone)}</span><span class="d-block small">${ssrInterpolate(data.detail)}</span><span class="d-block small">${ssrInterpolate(`${data.subdistrict.name}, ${data.subdistrict.city.name}, ${data.subdistrict.city.province.name}, ${data.postal_code}`)}</span></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/AddressModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
