import { L as Layout } from "./App.6cf91a9e.mjs";
import { P as Pagination } from "./Pagination.43572340.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import { Inertia } from "@inertiajs/inertia";
import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import "axios";
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@vue/reactivity";
const _sfc_main = {
  components: {
    Layout,
    Link,
    SpinnerProcessing,
    FormText,
    Pagination
  },
  props: {
    errors: Object,
    result: Object,
    origins: Array
  },
  setup(props) {
    let originUsed = props.result.origins.map((origin) => origin.id);
    let dataOrigins = props.origins;
    let attach = (originId) => {
      Inertia.visit(
        route("admin.products.origins.attach", {
          id: props.result.id,
          originId
        }),
        {
          method: "post",
          preserveState: (page) => console.log(page),
          onSuccess: (data) => {
            props = data.props;
            originUsed = props.result.origins.map((origin) => origin.id);
          }
        }
      );
    };
    let detach = (originId) => {
      Inertia.visit(
        route("admin.products.origins.detach", {
          id: props.result.id,
          originId
        }),
        {
          method: "delete",
          onSuccess: (data) => {
            dataOrigins = data.props.origins;
          }
        }
      );
    };
    return {
      originUsed,
      attach,
      detach,
      dataOrigins
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Suplier Produk",
    typeButton: "back",
    href: _ctx.route("admin.products.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-12 mb-3"${_scopeId}><div class="h6 mb-2"${_scopeId}>Data Suplier</div><div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><thead class="table-dark"${_scopeId}><tr${_scopeId}><th${_scopeId}>No</th><th${_scopeId}>Nama Pengirim</th><th${_scopeId}>Kecamatan</th><th${_scopeId}>Kabupaten/Kota</th><th${_scopeId}>Provinsi</th><th${_scopeId}>Kode Pos</th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($setup.dataOrigins, (origin, i) => {
          _push2(`<tr class="${ssrRenderClass(`${$setup.originUsed.includes(
            origin.id
          ) ? "d-none" : ""}`)}"${_scopeId}><td${_scopeId}>${ssrInterpolate(i + 1)}</td><td${_scopeId}>${ssrInterpolate(origin.sender)}</td><td${_scopeId}>${ssrInterpolate(origin.subdistrict.name)}</td><td${_scopeId}>${ssrInterpolate(origin.subdistrict.city.name)}</td><td${_scopeId}>${ssrInterpolate(origin.subdistrict.city.province.name)}</td><td${_scopeId}>${ssrInterpolate(origin.postal_code)}</td><td${_scopeId}><button class="btn btn-sm btn-success me-2 rounded-custom"${_scopeId}><i class="fas fa-check"${_scopeId}></i></button></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="h6 mb-2"${_scopeId}>Suplier Dipilih</div><div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><thead class="table-dark"${_scopeId}><tr${_scopeId}><th${_scopeId}>No</th><th${_scopeId}>Nama Pengirim</th><th${_scopeId}>Kecamatan</th><th${_scopeId}>Kabupaten/Kota</th><th${_scopeId}>Provinsi</th><th${_scopeId}>Kode Pos</th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($props.result.origins, (origin, i) => {
          _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(i + 1)}</td><td${_scopeId}>${ssrInterpolate(origin.sender)}</td><td${_scopeId}>${ssrInterpolate(origin.subdistrict.name)}</td><td${_scopeId}>${ssrInterpolate(origin.subdistrict.city.name)}</td><td${_scopeId}>${ssrInterpolate(origin.subdistrict.city.province.name)}</td><td${_scopeId}>${ssrInterpolate(origin.postal_code)}</td><td${_scopeId}><button class="btn btn-sm btn-danger me-2 rounded-custom"${_scopeId}><i class="fas fa-times"${_scopeId}></i></button></td></tr>`);
        });
        _push2(`<!--]--></tbody></table></div></div></div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "col-lg-12 mb-3" }, [
                      createVNode("div", { class: "h6 mb-2" }, "Data Suplier"),
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table" }, [
                          createVNode("thead", { class: "table-dark" }, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Nama Pengirim"),
                              createVNode("th", null, "Kecamatan"),
                              createVNode("th", null, "Kabupaten/Kota"),
                              createVNode("th", null, "Provinsi"),
                              createVNode("th", null, "Kode Pos"),
                              createVNode("th")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList($setup.dataOrigins, (origin, i) => {
                              return openBlock(), createBlock("tr", {
                                key: i,
                                class: `${$setup.originUsed.includes(
                                  origin.id
                                ) ? "d-none" : ""}`
                              }, [
                                createVNode("td", null, toDisplayString(i + 1), 1),
                                createVNode("td", null, toDisplayString(origin.sender), 1),
                                createVNode("td", null, toDisplayString(origin.subdistrict.name), 1),
                                createVNode("td", null, toDisplayString(origin.subdistrict.city.name), 1),
                                createVNode("td", null, toDisplayString(origin.subdistrict.city.province.name), 1),
                                createVNode("td", null, toDisplayString(origin.postal_code), 1),
                                createVNode("td", null, [
                                  createVNode("button", {
                                    onClick: ($event) => $setup.attach(origin.id),
                                    class: "btn btn-sm btn-success me-2 rounded-custom"
                                  }, [
                                    createVNode("i", { class: "fas fa-check" })
                                  ], 8, ["onClick"])
                                ])
                              ], 2);
                            }), 128))
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-12 mb-3" }, [
                      createVNode("div", { class: "h6 mb-2" }, "Suplier Dipilih"),
                      createVNode("div", { class: "table-responsive" }, [
                        createVNode("table", { class: "table" }, [
                          createVNode("thead", { class: "table-dark" }, [
                            createVNode("tr", null, [
                              createVNode("th", null, "No"),
                              createVNode("th", null, "Nama Pengirim"),
                              createVNode("th", null, "Kecamatan"),
                              createVNode("th", null, "Kabupaten/Kota"),
                              createVNode("th", null, "Provinsi"),
                              createVNode("th", null, "Kode Pos"),
                              createVNode("th")
                            ])
                          ]),
                          createVNode("tbody", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.result.origins, (origin, i) => {
                              return openBlock(), createBlock("tr", { key: i }, [
                                createVNode("td", null, toDisplayString(i + 1), 1),
                                createVNode("td", null, toDisplayString(origin.sender), 1),
                                createVNode("td", null, toDisplayString(origin.subdistrict.name), 1),
                                createVNode("td", null, toDisplayString(origin.subdistrict.city.name), 1),
                                createVNode("td", null, toDisplayString(origin.subdistrict.city.province.name), 1),
                                createVNode("td", null, toDisplayString(origin.postal_code), 1),
                                createVNode("td", null, [
                                  createVNode("button", {
                                    onClick: ($event) => $setup.detach(origin.id),
                                    class: "btn btn-sm btn-danger me-2 rounded-custom"
                                  }, [
                                    createVNode("i", { class: "fas fa-times" })
                                  ], 8, ["onClick"])
                                ])
                              ]);
                            }), 128))
                          ])
                        ])
                      ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Product/Origin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Origin = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Origin as default
};
