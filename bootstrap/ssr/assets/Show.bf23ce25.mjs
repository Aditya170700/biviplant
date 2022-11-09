import { L as Layout } from "./App.be33ee16.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "@vue/reactivity";
const _sfc_main = {
  components: { Layout, Link },
  props: {
    errors: Object,
    result: Object
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Detail Event",
    typeButton: "back",
    href: _ctx.route("admin.events.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row mt-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Judul</div><div class="col-lg-10"${_scopeId}>: ${ssrInterpolate($props.result.title)}</div></div><div class="row mt-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Sub Judul</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate($props.result.sub_title)}</div></div><div class="row mt-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Banner</div><div class="col-lg-10"${_scopeId}><img${ssrRenderAttr("src", $props.result.path_url)} class="fluid rounded" alt="" style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row mt-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Judul"),
                    createVNode("div", { class: "col-lg-10" }, ": " + toDisplayString($props.result.title), 1)
                  ]),
                  createVNode("div", { class: "row mt-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Sub Judul"),
                    createVNode("div", { class: "col-lg-10" }, " : " + toDisplayString($props.result.sub_title), 1)
                  ]),
                  createVNode("div", { class: "row mt-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Banner"),
                    createVNode("div", { class: "col-lg-10" }, [
                      createVNode("img", {
                        src: $props.result.path_url,
                        class: "fluid rounded",
                        alt: "",
                        style: { "width": "200px" }
                      }, null, 8, ["src"])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Event/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};