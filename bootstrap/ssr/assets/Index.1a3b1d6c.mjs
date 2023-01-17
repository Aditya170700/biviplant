import { L as Layout } from "./App.6cf91a9e.mjs";
import { P as Pagination } from "./Pagination.43572340.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { reactive, resolveComponent, mergeProps, withCtx, createVNode, withDirectives, vModelText, vModelSelect, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { pickBy } from "lodash";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
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
    let destroy = (id) => {
      confirmation(
        "Tindakan ini akan menghapus data secara permanen"
      ).then((res) => {
        if (res) {
          Inertia.delete(route("admin.banners.destroy", { id }));
        }
      });
    };
    return {
      params,
      sort,
      destroy
    };
  },
  watch: {
    params: {
      handler() {
        let params = pickBy(this.params);
        Inertia.get(route("admin.banners.index"), params, {
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
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Banner",
    typeButton: "create",
    href: _ctx.route("admin.banners.create")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="d-flex justify-content-start"${_scopeId}><div class="col-lg-2 col-sm-6 me-2"${_scopeId}><div class="mb-3"${_scopeId}><input class="form-control" placeholder="Cari..."${ssrRenderAttr("value", $setup.params.search)}${_scopeId}></div></div><div class="col-lg-2 col-sm-6 me-2"${_scopeId}><select class="form-control mb-3"${_scopeId}><option value="25"${_scopeId}>Lihat 25 data</option><option value="50"${_scopeId}>Lihat 50 data</option><option value="100"${_scopeId}>Lihat 100 data</option><option value="200"${_scopeId}>Lihat 200 data</option></select></div></div><div class="table-responsive"${_scopeId}><table class="table"${_scopeId}><thead class="table-dark"${_scopeId}><tr${_scopeId}><th${_scopeId}>NO</th><th${_scopeId}><span class="d-flex justify-content-between" style="${ssrRenderStyle({ "cursor": "pointer" })}"${_scopeId}> JUDUL `);
        if ($setup.params.direction == "asc" && $setup.params.field == "title") {
          _push2(`<i class="fa-solid fa-arrow-down-a-z"${_scopeId}></i>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.params.direction == "desc" && $setup.params.field == "title") {
          _push2(`<i class="fa-solid fa-arrow-up-z-a"${_scopeId}></i>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span></th><th${_scopeId}><span class="d-flex justify-content-between" style="${ssrRenderStyle({ "cursor": "pointer" })}"${_scopeId}> SUB JUDUL `);
        if ($setup.params.direction == "asc" && $setup.params.field == "sub_title") {
          _push2(`<i class="fa-solid fa-arrow-down-a-z"${_scopeId}></i>`);
        } else {
          _push2(`<!---->`);
        }
        if ($setup.params.direction == "desc" && $setup.params.field == "sub_title") {
          _push2(`<i class="fa-solid fa-arrow-up-z-a"${_scopeId}></i>`);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</span></th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
        ssrRenderList($props.results.data, (result, i) => {
          _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(i + 1)}</td><td${_scopeId}>${ssrInterpolate(result.title)}</td><td${_scopeId}>${ssrInterpolate(result.sub_title)}</td><td class="d-flex justify-content-end"${_scopeId}>`);
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route(
              "admin.banners.show",
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
          _push2(ssrRenderComponent(_component_Link, {
            href: _ctx.route(
              "admin.banners.edit",
              {
                id: result.id
              }
            ),
            class: "btn btn-sm btn-warning me-2 rounded-custom"
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<i class="fas fa-pencil"${_scopeId2}></i>`);
              } else {
                return [
                  createVNode("i", { class: "fas fa-pencil" })
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
          _push2(`<button class="btn btn-sm btn-danger me-2 rounded-custom"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></td></tr>`);
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
                          createVNode("th", null, [
                            createVNode("span", {
                              onClick: ($event) => $setup.sort("title"),
                              class: "d-flex justify-content-between",
                              style: { "cursor": "pointer" }
                            }, [
                              createTextVNode(" JUDUL "),
                              $setup.params.direction == "asc" && $setup.params.field == "title" ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "fa-solid fa-arrow-down-a-z"
                              })) : createCommentVNode("", true),
                              $setup.params.direction == "desc" && $setup.params.field == "title" ? (openBlock(), createBlock("i", {
                                key: 1,
                                class: "fa-solid fa-arrow-up-z-a"
                              })) : createCommentVNode("", true)
                            ], 8, ["onClick"])
                          ]),
                          createVNode("th", null, [
                            createVNode("span", {
                              onClick: ($event) => $setup.sort("sub_title"),
                              class: "d-flex justify-content-between",
                              style: { "cursor": "pointer" }
                            }, [
                              createTextVNode(" SUB JUDUL "),
                              $setup.params.direction == "asc" && $setup.params.field == "sub_title" ? (openBlock(), createBlock("i", {
                                key: 0,
                                class: "fa-solid fa-arrow-down-a-z"
                              })) : createCommentVNode("", true),
                              $setup.params.direction == "desc" && $setup.params.field == "sub_title" ? (openBlock(), createBlock("i", {
                                key: 1,
                                class: "fa-solid fa-arrow-up-z-a"
                              })) : createCommentVNode("", true)
                            ], 8, ["onClick"])
                          ]),
                          createVNode("th")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList($props.results.data, (result, i) => {
                          return openBlock(), createBlock("tr", { key: i }, [
                            createVNode("td", null, toDisplayString(i + 1), 1),
                            createVNode("td", null, toDisplayString(result.title), 1),
                            createVNode("td", null, toDisplayString(result.sub_title), 1),
                            createVNode("td", { class: "d-flex justify-content-end" }, [
                              createVNode(_component_Link, {
                                href: _ctx.route(
                                  "admin.banners.show",
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
                              }, 1032, ["href"]),
                              createVNode(_component_Link, {
                                href: _ctx.route(
                                  "admin.banners.edit",
                                  {
                                    id: result.id
                                  }
                                ),
                                class: "btn btn-sm btn-warning me-2 rounded-custom"
                              }, {
                                default: withCtx(() => [
                                  createVNode("i", { class: "fas fa-pencil" })
                                ]),
                                _: 2
                              }, 1032, ["href"]),
                              createVNode("button", {
                                class: "btn btn-sm btn-danger me-2 rounded-custom",
                                onClick: ($event) => $setup.destroy(result.id)
                              }, [
                                createVNode("i", { class: "fas fa-trash" })
                              ], 8, ["onClick"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Banner/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Index as default
};
