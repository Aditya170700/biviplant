import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    links: Array,
    from: Number,
    to: Number,
    total: Number
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<nav${ssrRenderAttrs(mergeProps({
      "aria-label": "...",
      class: "d-flex justify-content-between align-items-center"
    }, _attrs))}><ul class="pagination"><!--[-->`);
    ssrRenderList($props.links, (link, index) => {
      _push(`<li class="${ssrRenderClass(`page-item ${link.active ? "active" : ""}`)}">`);
      _push(ssrRenderComponent(_component_Link, {
        class: "page-link",
        href: `${link.url ? link.url : "#"}`,
        style: { "cursor": "pointer" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(index == 0 ? "Prev" : index == $props.links.length - 1 ? "Next" : link.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(index == 0 ? "Prev" : index == $props.links.length - 1 ? "Next" : link.label), 1)
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</li>`);
    });
    _push(`<!--]--></ul> Show ${ssrInterpolate($props.from)} - ${ssrInterpolate($props.to)} from ${ssrInterpolate($props.total)} data </nav>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Pagination as P
};
