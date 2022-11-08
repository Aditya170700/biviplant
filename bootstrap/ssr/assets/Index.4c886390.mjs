import { L as Layout } from "./App.be33ee16.mjs";
import { P as Pagination } from "./Pagination.65791fe2.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { reactive, resolveComponent, mergeProps, withCtx, createVNode, withDirectives, vModelText, vModelSelect, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from "vue";
import { pickBy } from "lodash";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@vue/reactivity";
const _sfc_main = {
  components: { Layout, Link, Pagination },
  props: {
    errors: Object,
    results: Object,
    filters: Object
  },
  setup(props) {
    var _a;
    let params = reactive({
      search: props.filters.search,
      limit: (_a = props.filters.limit) != null ? _a : 25,
      field: props.filters.field,
      direction: props.filters.direction
    });
    let sort = (field) => {
      params.field = field;
      params.direction = params.direction == "asc" ? "desc" : "asc";
    };
    return {
      params,
      sort
    };
  },
  watch: {
    params: {
      handler() {
        let params = pickBy(this.params);
        Inertia.get(route("admin.orders.index"), params, {
          replace: true,
          preserveState: true
        });
      },
      deep: true
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_Link = resolveComponent("Link");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_Layout, mergeProps({ title: "Pesanan" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex justify-content-start"${_scopeId}><div class="col-lg-2 col-sm-6 me-2"${_scopeId}><div class="mb-3"${_scopeId}><input class="form-control" placeholder="Cari..."${ssrRenderAttr("value", $setup.params.search)}${_scopeId}></div></div><div class="col-lg-2 col-sm-6 me-2"${_scopeId}><select class="form-control mb-3"${_scopeId}><option value="25"${_scopeId}>Lihat 25 data</option><option value="50"${_scopeId}>Lihat 50 data</option><option value="100"${_scopeId}>Lihat 100 data</option><option value="200"${_scopeId}>Lihat 200 data</option></select></div></div><div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><thead class="table-dark"${_scopeId}><tr${_scopeId}><th${_scopeId}>NO</th><th${_scopeId}>PEMESAN</th><th${_scopeId}>PRODUK</th><th${_scopeId}>VOUCHER</th><th${_scopeId}>TOTAL</th><th${_scopeId}>STATUS</th><th${_scopeId}>TGL ORDER</th><th${_scopeId}>TGL BAYAR</th><th${_scopeId}>TGL KIRIM</th><th${_scopeId}>TGL SELESAI</th><th${_scopeId}>AKSI</th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($props.results.data, (result, i) => {
          var _a;
          _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(i + 1)}</td><td${_scopeId}>${ssrInterpolate((_a = result.user) == null ? void 0 : _a.name)}</td><td${_scopeId}>${ssrInterpolate(result.order_details[0].product.name)} `);
          if (result.order_details.length > 1) {
            _push2(`<span${_scopeId}> dan ${ssrInterpolate(result.order_details.length - 1)} produk lainnya</span>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</td><td${_scopeId}>${ssrInterpolate(result.voucher_rp)}</td><td${_scopeId}>${ssrInterpolate(result.total_rp)}</td><td${_scopeId}>${ssrInterpolate(result.payment_status)}</td><td${_scopeId}>${ssrInterpolate(result.created_at)}</td><td${_scopeId}>${ssrInterpolate(result.paid_at)}</td><td${_scopeId}>${ssrInterpolate(result.send_at)}</td><td${_scopeId}>${ssrInterpolate(result.finish_at)}</td><td${_scopeId}><div class="d-flex"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route(
              "admin.orders.show",
              {
                id: result.id
              }
            ),
            class: "btn btn-sm btn-primary me-2 rounded-custom"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="fas fa-eye"${_scopeId2}></i>`);
              } else {
                return [
                  createVNode("i", { class: "fas fa-eye" })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`</div></td></tr>`);
        });
        _push2(`<!--]--></tbody></table>`);
        _push2(ssrRenderComponent(_component_Pagination, {
          class: "mt-6",
          links: $props.results.links,
          from: $props.results.from,
          to: $props.results.to,
          total: $props.results.total
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "d-flex justify-content-start" }, [
                    createVNode("div", { class: "col-lg-2 col-sm-6 me-2" }, [
                      createVNode("div", { class: "mb-3" }, [
                        withDirectives(createVNode("input", {
                          class: "form-control",
                          placeholder: "Cari...",
                          "onUpdate:modelValue": ($event) => $setup.params.search = $event
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, $setup.params.search]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "col-lg-2 col-sm-6 me-2" }, [
                      withDirectives(createVNode("select", {
                        class: "form-control mb-3",
                        "onUpdate:modelValue": ($event) => $setup.params.limit = $event
                      }, [
                        createVNode("option", { value: "25" }, "Lihat 25 data"),
                        createVNode("option", { value: "50" }, "Lihat 50 data"),
                        createVNode("option", { value: "100" }, "Lihat 100 data"),
                        createVNode("option", { value: "200" }, "Lihat 200 data")
                      ], 8, ["onUpdate:modelValue"]), [
                        [vModelSelect, $setup.params.limit]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "table-responsive" }, [
                    createVNode("table", { class: "table" }, [
                      createVNode("thead", { class: "table-dark" }, [
                        createVNode("tr", null, [
                          createVNode("th", null, "NO"),
                          createVNode("th", null, "PEMESAN"),
                          createVNode("th", null, "PRODUK"),
                          createVNode("th", null, "VOUCHER"),
                          createVNode("th", null, "TOTAL"),
                          createVNode("th", null, "STATUS"),
                          createVNode("th", null, "TGL ORDER"),
                          createVNode("th", null, "TGL BAYAR"),
                          createVNode("th", null, "TGL KIRIM"),
                          createVNode("th", null, "TGL SELESAI"),
                          createVNode("th", null, "AKSI")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.results.data, (result, i) => {
                          var _a;
                          return openBlock(), createBlock("tr", { key: i }, [
                            createVNode("td", null, toDisplayString(i + 1), 1),
                            createVNode("td", null, toDisplayString((_a = result.user) == null ? void 0 : _a.name), 1),
                            createVNode("td", null, [
                              createTextVNode(toDisplayString(result.order_details[0].product.name) + " ", 1),
                              result.order_details.length > 1 ? (openBlock(), createBlock("span", { key: 0 }, " dan " + toDisplayString(result.order_details.length - 1) + " produk lainnya", 1)) : createCommentVNode("", true)
                            ]),
                            createVNode("td", null, toDisplayString(result.voucher_rp), 1),
                            createVNode("td", null, toDisplayString(result.total_rp), 1),
                            createVNode("td", null, toDisplayString(result.payment_status), 1),
                            createVNode("td", null, toDisplayString(result.created_at), 1),
                            createVNode("td", null, toDisplayString(result.paid_at), 1),
                            createVNode("td", null, toDisplayString(result.send_at), 1),
                            createVNode("td", null, toDisplayString(result.finish_at), 1),
                            createVNode("td", null, [
                              createVNode("div", { class: "d-flex" }, [
                                createVNode(_component_Link, {
                                  href: _ctx.route(
                                    "admin.orders.show",
                                    {
                                      id: result.id
                                    }
                                  ),
                                  class: "btn btn-sm btn-primary me-2 rounded-custom"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("i", { class: "fas fa-eye" })
                                  ]),
                                  _: 2
                                }, 1032, ["href"])
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode(_component_Pagination, {
                      class: "mt-6",
                      links: $props.results.links,
                      from: $props.results.from,
                      to: $props.results.to,
                      total: $props.results.total
                    }, null, 8, ["links", "from", "to", "total"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Order/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
