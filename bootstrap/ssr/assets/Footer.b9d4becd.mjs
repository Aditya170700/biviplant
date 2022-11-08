import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "footer-nav-area",
        id: "footerNav"
      }, _attrs))}><div class="container h-100 px-0"><div class="suha-footer-nav h-100"><ul class="h-100 d-flex align-items-center justify-content-between ps-0"><li><a href="/"><i class="lni lni-home"></i>Home</a></li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("cart.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-shopping-basket"${_scopeId}></i>Cart`);
          } else {
            return [
              createVNode("i", { class: "lni lni-shopping-basket" }),
              createTextVNode("Cart")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li><a href="https://wa.me/6283840907389" target="_blank"><i class="lni lni-wechat"></i>Support</a></li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
