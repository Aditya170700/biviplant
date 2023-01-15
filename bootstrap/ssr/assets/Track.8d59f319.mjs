import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createTextVNode, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { L as Layout } from "./App.6cf91a9e.mjs";
import "@inertiajs/inertia-vue3";
import { useAttrs, reactive, onMounted } from "@vue/runtime-core";
import { t as toastError, a as toastSuccess } from "./utils.bec59827.mjs";
import { copyText } from "vue3-clipboard";
import axios from "axios";
import "@inertiajs/inertia";
import "@vue/reactivity";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "../ssr.mjs";
import "@vue/server-renderer";
import "process";
import "http";
import "qs";
import "vuex";
import "moment";
const _sfc_main = {
  __name: "Track",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
    let shipping = reactive({
      data: null,
      loading: false
    });
    function copyClipboard(text, pesan) {
      copyText(text, void 0, (error, event) => {
        if (error) {
          toastError(pesan);
        } else {
          toastSuccess(pesan);
        }
      });
    }
    onMounted(() => {
      var _a, _b;
      if (((_a = attrs.order_detail) == null ? void 0 : _a.receipt) && ((_b = attrs.order_detail) == null ? void 0 : _b.courier)) {
        shipping.loading = true;
        axios.get("/api/orders/track", {
          params: {
            receipt: attrs.order_detail.receipt,
            courier: attrs.order_detail.courier.toLowerCase()
          }
        }).then((res) => {
          shipping.data = res.data.data;
          shipping.loading = false;
        }).catch((err) => {
          shipping.loading = false;
          toastError(err.response.data.message);
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(ssrRenderComponent(Layout, mergeProps({
        title: "Detail Pengiriman",
        typeButton: "back",
        href: _ctx.route("admin.orders.show", { id: (_a = unref(attrs).order_detail) == null ? void 0 : _a.order_id })
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body p-4"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-12 py-2"${_scopeId}><div class="d-flex justify-content-between"${_scopeId}><span class="h6"${_scopeId}> No. Resi </span>`);
            if (unref(attrs).order_detail.receipt) {
              _push2(`<span class="opacity-50"${_scopeId}>${ssrInterpolate(unref(attrs).order_detail.receipt)} <i class="fas fa-paste ms-2"${_scopeId}></i></span>`);
            } else {
              _push2(`<span class="opacity-50"${_scopeId}>Belum Ada Resi</span>`);
            }
            _push2(`</div><hr class="my-2"${_scopeId}></div></div>`);
            if (!unref(attrs).order_detail.receipt) {
              _push2(`<div class="row"${_scopeId}><div class="col-lg-12 py-2 text-center"${_scopeId}><div class="alert alert-danger" role="alert"${_scopeId}><i class="fas fa-clock mb-3" style="${ssrRenderStyle({ "font-size": "40px" })}"${_scopeId}></i><br${_scopeId}><div class="h6 fw-bold text-white"${_scopeId}> Jika pembayaran sudah dilakukan, segera kirim pesanan </div></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(attrs).order_detail.receipt && !unref(shipping).loading) {
              _push2(`<div class="row"${_scopeId}>`);
              if (unref(shipping).data && unref(shipping).data.delivered) {
                _push2(`<div class="col-lg-12 py-2 text-center"${_scopeId}><div class="alert alert-success" role="alert"${_scopeId}><i class="fas fa-check mb-3" style="${ssrRenderStyle({ "font-size": "40px" })}"${_scopeId}></i><br${_scopeId}><div class="h6 fw-bold"${_scopeId}> Pesanan telah tiba ditujuan </div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(attrs).order_detail.receipt && !unref(shipping).loading && unref(shipping).data && unref(shipping).data.manifest.length > 0) {
              _push2(`<div class="row"${_scopeId}><div class="col-lg-12 py-2"${_scopeId}><ul class="list-group"${_scopeId}><!--[-->`);
              ssrRenderList(unref(shipping).data.manifest.reverse(), (data, i) => {
                _push2(`<li class="list-group-item"${_scopeId}><p class="small mb-2 text-dark"${_scopeId}>${ssrInterpolate(data.manifest_description)}</p><span class="small text-muted"${_scopeId}>2 Feb 2021 - 12:38 PM</span></li>`);
              });
              _push2(`<!--]--></ul></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-md-12 grid-margin" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body p-4" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-12 py-2" }, [
                          createVNode("div", { class: "d-flex justify-content-between" }, [
                            createVNode("span", { class: "h6" }, " No. Resi "),
                            unref(attrs).order_detail.receipt ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "opacity-50",
                              onClick: ($event) => copyClipboard(
                                unref(attrs).order_detail.receipt,
                                "Nomor resi berhasi disalin"
                              )
                            }, [
                              createTextVNode(toDisplayString(unref(attrs).order_detail.receipt) + " ", 1),
                              createVNode("i", { class: "fas fa-paste ms-2" })
                            ], 8, ["onClick"])) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "opacity-50"
                            }, "Belum Ada Resi"))
                          ]),
                          createVNode("hr", { class: "my-2" })
                        ])
                      ]),
                      !unref(attrs).order_detail.receipt ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "row"
                      }, [
                        createVNode("div", { class: "col-lg-12 py-2 text-center" }, [
                          createVNode("div", {
                            class: "alert alert-danger",
                            role: "alert"
                          }, [
                            createVNode("i", {
                              class: "fas fa-clock mb-3",
                              style: { "font-size": "40px" }
                            }),
                            createVNode("br"),
                            createVNode("div", { class: "h6 fw-bold text-white" }, " Jika pembayaran sudah dilakukan, segera kirim pesanan ")
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      unref(attrs).order_detail.receipt && !unref(shipping).loading ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "row"
                      }, [
                        unref(shipping).data && unref(shipping).data.delivered ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "col-lg-12 py-2 text-center"
                        }, [
                          createVNode("div", {
                            class: "alert alert-success",
                            role: "alert"
                          }, [
                            createVNode("i", {
                              class: "fas fa-check mb-3",
                              style: { "font-size": "40px" }
                            }),
                            createVNode("br"),
                            createVNode("div", { class: "h6 fw-bold" }, " Pesanan telah tiba ditujuan ")
                          ])
                        ])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true),
                      unref(attrs).order_detail.receipt && !unref(shipping).loading && unref(shipping).data && unref(shipping).data.manifest.length > 0 ? (openBlock(), createBlock("div", {
                        key: 2,
                        class: "row"
                      }, [
                        createVNode("div", { class: "col-lg-12 py-2" }, [
                          createVNode("ul", { class: "list-group" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(shipping).data.manifest.reverse(), (data, i) => {
                              return openBlock(), createBlock("li", {
                                class: "list-group-item",
                                key: i
                              }, [
                                createVNode("p", { class: "small mb-2 text-dark" }, toDisplayString(data.manifest_description), 1),
                                createVNode("span", { class: "small text-muted" }, "2 Feb 2021 - 12:38 PM")
                              ]);
                            }), 128))
                          ])
                        ])
                      ])) : createCommentVNode("", true)
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Order/Track.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
