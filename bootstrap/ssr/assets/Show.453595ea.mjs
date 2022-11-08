import { L as Layout } from "./App.be33ee16.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
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
    title: "Detail Produk",
    typeButton: "back",
    href: _ctx.route("admin.products.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      var _a, _b;
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Nama</div><div class="col-lg-10"${_scopeId}>: ${ssrInterpolate($props.result.name)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Slug</div><div class="col-lg-10"${_scopeId}>: ${ssrInterpolate($props.result.slug)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Kategori</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate($props.result.category.name)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Meta Title</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate($props.result.meta_title)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Meta Description</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate($props.result.meta_description)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Meta Keyword</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate($props.result.meta_keyword)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Harga</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate($props.result.price_rp)} <del${_scopeId}>${ssrInterpolate($props.result.strike_price_rp)}</del></div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Stok</div><div class="col-lg-10"${_scopeId}>: ${ssrInterpolate($props.result.stock)}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Berat</div><div class="col-lg-10"${_scopeId}>: ${ssrInterpolate($props.result.weight)}gr</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Kondisi</div><div class="col-lg-10"${_scopeId}> : ${ssrInterpolate((_a = $props.result.condition) != null ? _a : "-")}</div></div><div class="row mb-3"${_scopeId}><div class="col-lg-2"${_scopeId}>Description</div><div class="col-lg-10"${_scopeId}>${$props.result.description}</div></div><hr class="my-3"${_scopeId}><div class="row mb-3"${_scopeId}><!--[-->`);
        ssrRenderList($props.result.files, (image, i) => {
          _push2(`<div class="col-lg-2"${_scopeId}><div class="card bg-dark text-white"${_scopeId}><img${ssrRenderAttr("src", image.src)} class="card-img"${ssrRenderAttr("alt", image.alt)}${_scopeId}></div></div>`);
        });
        _push2(`<!--]--></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Nama"),
                    createVNode("div", { class: "col-lg-10" }, ": " + toDisplayString($props.result.name), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Slug"),
                    createVNode("div", { class: "col-lg-10" }, ": " + toDisplayString($props.result.slug), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Kategori"),
                    createVNode("div", { class: "col-lg-10" }, " : " + toDisplayString($props.result.category.name), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Meta Title"),
                    createVNode("div", { class: "col-lg-10" }, " : " + toDisplayString($props.result.meta_title), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Meta Description"),
                    createVNode("div", { class: "col-lg-10" }, " : " + toDisplayString($props.result.meta_description), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Meta Keyword"),
                    createVNode("div", { class: "col-lg-10" }, " : " + toDisplayString($props.result.meta_keyword), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Harga"),
                    createVNode("div", { class: "col-lg-10" }, [
                      createTextVNode(" : " + toDisplayString($props.result.price_rp) + " ", 1),
                      createVNode("del", null, toDisplayString($props.result.strike_price_rp), 1)
                    ])
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Stok"),
                    createVNode("div", { class: "col-lg-10" }, ": " + toDisplayString($props.result.stock), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Berat"),
                    createVNode("div", { class: "col-lg-10" }, ": " + toDisplayString($props.result.weight) + "gr", 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Kondisi"),
                    createVNode("div", { class: "col-lg-10" }, " : " + toDisplayString((_b = $props.result.condition) != null ? _b : "-"), 1)
                  ]),
                  createVNode("div", { class: "row mb-3" }, [
                    createVNode("div", { class: "col-lg-2" }, "Description"),
                    createVNode("div", {
                      class: "col-lg-10",
                      innerHTML: $props.result.description
                    }, null, 8, ["innerHTML"])
                  ]),
                  createVNode("hr", { class: "my-3" }),
                  createVNode("div", { class: "row mb-3" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($props.result.files, (image, i) => {
                      return openBlock(), createBlock("div", {
                        class: "col-lg-2",
                        key: i
                      }, [
                        createVNode("div", { class: "card bg-dark text-white" }, [
                          createVNode("img", {
                            src: image.src,
                            class: "card-img",
                            alt: image.alt
                          }, null, 8, ["src", "alt"])
                        ])
                      ]);
                    }), 128))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Product/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Show = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Show as default
};
