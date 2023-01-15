import { mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, withDirectives, vModelText, withModifiers, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { L as Layout } from "./App.6cf91a9e.mjs";
import { Link } from "@inertiajs/inertia-vue3";
import { useAttrs } from "@vue/runtime-core";
import { r as rupiah, t as toastError, a as toastSuccess } from "./utils.bec59827.mjs";
import { copyText } from "vue3-clipboard";
import { Inertia } from "@inertiajs/inertia";
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
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
    function copyClipboard(text, pesan) {
      copyText(text, void 0, (error, event) => {
        if (error) {
          toastError(pesan);
        } else {
          toastSuccess(pesan);
        }
      });
    }
    function updateReceipt(detail) {
      confirmation("Apakah nomor resi sudah benar?").then((res) => {
        if (res) {
          let data = { receipt: detail.receipt };
          Inertia.post(
            route("admin.orders.update-receipt", {
              id: detail.id
            }),
            {
              _method: "put",
              ...data
            }
          );
        }
      });
    }
    function finishOrder(orderId) {
      Inertia.post(
        route("admin.orders.finish", {
          id: orderId
        }),
        {
          _method: "put"
        }
      );
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, mergeProps({
        title: "Detail Pesanan",
        typeButton: "back",
        href: _ctx.route("admin.orders.index")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><!--[-->`);
            ssrRenderList(unref(attrs).order.order_details, (detail, idetail) => {
              var _a;
              _push2(`<div class="col-lg-6"${_scopeId}><div class="row"${_scopeId}><div class="col-lg-12 py-2"${_scopeId}><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="h6"${_scopeId}><i class="fas fa-gift me-2"${_scopeId}></i> Produk </span></div><div class="d-flex justify-content-start"${_scopeId}><img${ssrRenderAttr(
                "src",
                detail.product.files[0].src
              )} alt="" style="${ssrRenderStyle({ "width": "100px" })}" class="rounded me-2"${_scopeId}><div${_scopeId}><div class="h6 one-line"${_scopeId}>${ssrInterpolate(detail.product.name)}</div><div class="small mb-3"${_scopeId}>${ssrInterpolate(detail.qty)} pcs </div><div class="d-flex justify-content-between small"${_scopeId}><span class="opacity-25 text-decoration-line-through small"${_scopeId}>${ssrInterpolate(unref(rupiah)(
                detail.strike_price
              ))}</span><span class="small"${_scopeId}>${ssrInterpolate(unref(rupiah)(detail.price))}</span></div></div></div></div><div class="col-lg-12 py-2"${_scopeId}><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="h6"${_scopeId}><i class="fas fa-location-dot me-2"${_scopeId}></i> Alamat Pengiriman </span></div><div class="opacity-50"${_scopeId}>${ssrInterpolate(detail.user_address.receiver)}</div><div class="opacity-50"${_scopeId}>${ssrInterpolate(detail.user_address.phone)}</div><div class="opacity-50 small"${_scopeId}>${ssrInterpolate(detail.user_address.detail)}</div><div class="opacity-50 small"${_scopeId}>${ssrInterpolate(`${detail.user_address.subdistrict.name}, ${detail.user_address.subdistrict.city.name}, ${detail.user_address.subdistrict.city.province.name} ${detail.user_address.postal_code}`)}</div></div><div class="col-lg-12 py-2"${_scopeId}><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="h6"${_scopeId}><i class="fas fa-circle-info me-2"${_scopeId}></i> Informasi Pengiriman </span>`);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route(
                  "admin.orders.track",
                  detail.id
                ),
                class: "btn btn-sm btn-light"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`LIHAT`);
                  } else {
                    return [
                      createTextVNode("LIHAT")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div><div class="opacity-50"${_scopeId}>${ssrInterpolate(detail.courier)}</div><div class="opacity-50"${_scopeId}>${ssrInterpolate(detail.shipping_service)} - ${ssrInterpolate((_a = detail.receipt) != null ? _a : "Belum ada resi")}</div><div class="opacity-50 small"${_scopeId}>${ssrInterpolate(detail.shipping_etd)} hari </div><div class="opacity-50 small"${_scopeId}>${ssrInterpolate(unref(rupiah)(detail.shipping_cost))}</div><div class="row my-3"${_scopeId}><div class="col-lg-12"${_scopeId}><div class="input-group mb-3"${_scopeId}><input class="form-control" placeholder="Nomor resi"${ssrRenderAttr("value", detail.receipt)}${_scopeId}><button class="btn btn-success"${ssrIncludeBooleanAttr(
                detail.receipt === null || unref(attrs).order.payment_status !== "Dikemas"
              ) ? " disabled" : ""}${_scopeId}><i class="fas fa-save"${_scopeId}></i></button></div></div></div></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="row"${_scopeId}><div class="col-lg-12 py-2"${_scopeId}><hr class="mb-2"${_scopeId}><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="h6"${_scopeId}><i class="fas fa-credit-card me-2"${_scopeId}></i> Metode Pembayaran </span></div><div class="col-lg-12"${_scopeId}><div class="d-flex justify-content-between opacity-50 my-2"${_scopeId}><div class="small"${_scopeId}>Voucher</div><div class="small"${_scopeId}>${ssrInterpolate(unref(rupiah)(unref(attrs).order.voucher))}</div></div><div class="d-flex justify-content-between my-2"${_scopeId}><div class="small fw-bold text-success"${_scopeId}> Total </div><div class="small fw-bold text-success"${_scopeId}>${ssrInterpolate(unref(rupiah)(unref(attrs).order.total))}</div></div></div><div class="col-lg-12"${_scopeId}><div class="d-flex justify-content-between opacity-50 my-2"${_scopeId}><div class="small"${_scopeId}>Metode</div><div class="small text-uppercase"${_scopeId}>${ssrInterpolate(unref(attrs).order.payment_method)}</div></div></div><div class="col-lg-12"${_scopeId}><div class="d-flex justify-content-between opacity-50 my-2"${_scopeId}><div class="small"${_scopeId}>Channel</div><div class="small text-uppercase"${_scopeId}>${ssrInterpolate(unref(attrs).order.payment_channel)}</div></div></div><div class="col-lg-12"${_scopeId}><div class="d-flex justify-content-between opacity-50 my-2"${_scopeId}><div class="small"${_scopeId}> Nomor Pembayaran </div>`);
            if (unref(attrs).order.payment_channel != "qris") {
              _push2(`<div class="small text-uppercase"${_scopeId}>${ssrInterpolate(unref(attrs).order.payment_no)}<i class="fas fa-paste ms-2 pointer"${_scopeId}></i></div>`);
            } else {
              _push2(`<div class="small text-decoration-none"${_scopeId}><a${ssrRenderAttr("href", `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${unref(attrs).order.payment_no}`)} target="_blank"${_scopeId}><i class="fas fa-eye me-2"${_scopeId}></i>Lihat QR</a></div>`);
            }
            _push2(`</div></div></div><div class="col-lg-12 py-2"${_scopeId}><hr class="mb-2"${_scopeId}><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="small opacity-50"${_scopeId}> No. Pesanan </span><span class="small opacity-50 text-uppercase"${_scopeId}>${ssrInterpolate(unref(attrs).order.id.substr(0, 13))}</span></div><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="small opacity-50"${_scopeId}> Waktu Pemesanan </span><span class="small opacity-50"${_scopeId}>${ssrInterpolate(unref(attrs).order.created_at)}</span></div><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="small opacity-50"${_scopeId}> Waktu Pembayaran </span>`);
            if (unref(attrs).order.paid_at) {
              _push2(`<span class="small opacity-50"${_scopeId}>${ssrInterpolate(unref(attrs).order.paid_at)}</span>`);
            } else {
              _push2(`<span class="small opacity-50"${_scopeId}>-</span>`);
            }
            _push2(`</div><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="small opacity-50"${_scopeId}> Waktu Pengiriman </span>`);
            if (unref(attrs).order.send_at) {
              _push2(`<span class="small opacity-50"${_scopeId}>${ssrInterpolate(unref(attrs).order.send_at)}</span>`);
            } else {
              _push2(`<span class="small opacity-50"${_scopeId}>-</span>`);
            }
            _push2(`</div><div class="d-flex justify-content-between align-items-center"${_scopeId}><span class="small opacity-50"${_scopeId}> Waktu Pesanan Selesai </span>`);
            if (unref(attrs).order.finish_at) {
              _push2(`<span class="small opacity-50"${_scopeId}>${ssrInterpolate(unref(attrs).order.finish_at)}</span>`);
            } else {
              _push2(`<span class="small opacity-50"${_scopeId}>-</span>`);
            }
            _push2(`</div><hr class="mt-2"${_scopeId}></div>`);
            if (unref(attrs).order.payment_status == "Dikirim") {
              _push2(`<div class="col-12"${_scopeId}><div class="d-grid"${_scopeId}><button class="btn btn-sm btn-light text-white" style="${ssrRenderStyle({ "background-color": "#00b893 !important" })}"${_scopeId}><i class="fas fa-gift me-2"${_scopeId}></i>Pesanan sudah diterima? </button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-md-12 grid-margin" }, [
                  createVNode("div", { class: "card" }, [
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "row" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(attrs).order.order_details, (detail, idetail) => {
                          var _a;
                          return openBlock(), createBlock("div", {
                            class: "col-lg-6",
                            key: idetail
                          }, [
                            createVNode("div", { class: "row" }, [
                              createVNode("div", { class: "col-lg-12 py-2" }, [
                                createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                  createVNode("span", { class: "h6" }, [
                                    createVNode("i", { class: "fas fa-gift me-2" }),
                                    createTextVNode(" Produk ")
                                  ])
                                ]),
                                createVNode("div", { class: "d-flex justify-content-start" }, [
                                  createVNode("img", {
                                    src: detail.product.files[0].src,
                                    alt: "",
                                    style: { "width": "100px" },
                                    class: "rounded me-2"
                                  }, null, 8, ["src"]),
                                  createVNode("div", null, [
                                    createVNode("div", { class: "h6 one-line" }, toDisplayString(detail.product.name), 1),
                                    createVNode("div", { class: "small mb-3" }, toDisplayString(detail.qty) + " pcs ", 1),
                                    createVNode("div", { class: "d-flex justify-content-between small" }, [
                                      createVNode("span", { class: "opacity-25 text-decoration-line-through small" }, toDisplayString(unref(rupiah)(
                                        detail.strike_price
                                      )), 1),
                                      createVNode("span", { class: "small" }, toDisplayString(unref(rupiah)(detail.price)), 1)
                                    ])
                                  ])
                                ])
                              ]),
                              createVNode("div", { class: "col-lg-12 py-2" }, [
                                createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                  createVNode("span", { class: "h6" }, [
                                    createVNode("i", { class: "fas fa-location-dot me-2" }),
                                    createTextVNode(" Alamat Pengiriman ")
                                  ])
                                ]),
                                createVNode("div", { class: "opacity-50" }, toDisplayString(detail.user_address.receiver), 1),
                                createVNode("div", { class: "opacity-50" }, toDisplayString(detail.user_address.phone), 1),
                                createVNode("div", { class: "opacity-50 small" }, toDisplayString(detail.user_address.detail), 1),
                                createVNode("div", { class: "opacity-50 small" }, toDisplayString(`${detail.user_address.subdistrict.name}, ${detail.user_address.subdistrict.city.name}, ${detail.user_address.subdistrict.city.province.name} ${detail.user_address.postal_code}`), 1)
                              ]),
                              createVNode("div", { class: "col-lg-12 py-2" }, [
                                createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                                  createVNode("span", { class: "h6" }, [
                                    createVNode("i", { class: "fas fa-circle-info me-2" }),
                                    createTextVNode(" Informasi Pengiriman ")
                                  ]),
                                  createVNode(unref(Link), {
                                    href: _ctx.route(
                                      "admin.orders.track",
                                      detail.id
                                    ),
                                    class: "btn btn-sm btn-light"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("LIHAT")
                                    ]),
                                    _: 2
                                  }, 1032, ["href"])
                                ]),
                                createVNode("div", { class: "opacity-50" }, toDisplayString(detail.courier), 1),
                                createVNode("div", { class: "opacity-50" }, toDisplayString(detail.shipping_service) + " - " + toDisplayString((_a = detail.receipt) != null ? _a : "Belum ada resi"), 1),
                                createVNode("div", { class: "opacity-50 small" }, toDisplayString(detail.shipping_etd) + " hari ", 1),
                                createVNode("div", { class: "opacity-50 small" }, toDisplayString(unref(rupiah)(detail.shipping_cost)), 1),
                                createVNode("div", { class: "row my-3" }, [
                                  createVNode("div", { class: "col-lg-12" }, [
                                    createVNode("div", { class: "input-group mb-3" }, [
                                      withDirectives(createVNode("input", {
                                        class: "form-control",
                                        placeholder: "Nomor resi",
                                        "onUpdate:modelValue": ($event) => detail.receipt = $event
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, detail.receipt]
                                      ]),
                                      createVNode("button", {
                                        class: "btn btn-success",
                                        onClick: withModifiers(($event) => updateReceipt(
                                          detail
                                        ), ["prevent"]),
                                        disabled: detail.receipt === null || unref(attrs).order.payment_status !== "Dikemas"
                                      }, [
                                        createVNode("i", { class: "fas fa-save" })
                                      ], 8, ["onClick", "disabled"])
                                    ])
                                  ])
                                ])
                              ])
                            ])
                          ]);
                        }), 128))
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-12 py-2" }, [
                          createVNode("hr", { class: "mb-2" }),
                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                            createVNode("span", { class: "h6" }, [
                              createVNode("i", { class: "fas fa-credit-card me-2" }),
                              createTextVNode(" Metode Pembayaran ")
                            ])
                          ]),
                          createVNode("div", { class: "col-lg-12" }, [
                            createVNode("div", { class: "d-flex justify-content-between opacity-50 my-2" }, [
                              createVNode("div", { class: "small" }, "Voucher"),
                              createVNode("div", { class: "small" }, toDisplayString(unref(rupiah)(unref(attrs).order.voucher)), 1)
                            ]),
                            createVNode("div", { class: "d-flex justify-content-between my-2" }, [
                              createVNode("div", { class: "small fw-bold text-success" }, " Total "),
                              createVNode("div", { class: "small fw-bold text-success" }, toDisplayString(unref(rupiah)(unref(attrs).order.total)), 1)
                            ])
                          ]),
                          createVNode("div", { class: "col-lg-12" }, [
                            createVNode("div", { class: "d-flex justify-content-between opacity-50 my-2" }, [
                              createVNode("div", { class: "small" }, "Metode"),
                              createVNode("div", { class: "small text-uppercase" }, toDisplayString(unref(attrs).order.payment_method), 1)
                            ])
                          ]),
                          createVNode("div", { class: "col-lg-12" }, [
                            createVNode("div", { class: "d-flex justify-content-between opacity-50 my-2" }, [
                              createVNode("div", { class: "small" }, "Channel"),
                              createVNode("div", { class: "small text-uppercase" }, toDisplayString(unref(attrs).order.payment_channel), 1)
                            ])
                          ]),
                          createVNode("div", { class: "col-lg-12" }, [
                            createVNode("div", { class: "d-flex justify-content-between opacity-50 my-2" }, [
                              createVNode("div", { class: "small" }, " Nomor Pembayaran "),
                              unref(attrs).order.payment_channel != "qris" ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "small text-uppercase"
                              }, [
                                createTextVNode(toDisplayString(unref(attrs).order.payment_no), 1),
                                createVNode("i", {
                                  class: "fas fa-paste ms-2 pointer",
                                  onClick: ($event) => copyClipboard(
                                    unref(attrs).order.payment_no,
                                    "VA berhasil disalin"
                                  )
                                }, null, 8, ["onClick"])
                              ])) : (openBlock(), createBlock("div", {
                                key: 1,
                                class: "small text-decoration-none"
                              }, [
                                createVNode("a", {
                                  href: `https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${unref(attrs).order.payment_no}`,
                                  target: "_blank"
                                }, [
                                  createVNode("i", { class: "fas fa-eye me-2" }),
                                  createTextVNode("Lihat QR")
                                ], 8, ["href"])
                              ]))
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-lg-12 py-2" }, [
                          createVNode("hr", { class: "mb-2" }),
                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                            createVNode("span", { class: "small opacity-50" }, " No. Pesanan "),
                            createVNode("span", { class: "small opacity-50 text-uppercase" }, toDisplayString(unref(attrs).order.id.substr(0, 13)), 1)
                          ]),
                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                            createVNode("span", { class: "small opacity-50" }, " Waktu Pemesanan "),
                            createVNode("span", { class: "small opacity-50" }, toDisplayString(unref(attrs).order.created_at), 1)
                          ]),
                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                            createVNode("span", { class: "small opacity-50" }, " Waktu Pembayaran "),
                            unref(attrs).order.paid_at ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "small opacity-50"
                            }, toDisplayString(unref(attrs).order.paid_at), 1)) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "small opacity-50"
                            }, "-"))
                          ]),
                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                            createVNode("span", { class: "small opacity-50" }, " Waktu Pengiriman "),
                            unref(attrs).order.send_at ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "small opacity-50"
                            }, toDisplayString(unref(attrs).order.send_at), 1)) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "small opacity-50"
                            }, "-"))
                          ]),
                          createVNode("div", { class: "d-flex justify-content-between align-items-center" }, [
                            createVNode("span", { class: "small opacity-50" }, " Waktu Pesanan Selesai "),
                            unref(attrs).order.finish_at ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "small opacity-50"
                            }, toDisplayString(unref(attrs).order.finish_at), 1)) : (openBlock(), createBlock("span", {
                              key: 1,
                              class: "small opacity-50"
                            }, "-"))
                          ]),
                          createVNode("hr", { class: "mt-2" })
                        ]),
                        unref(attrs).order.payment_status == "Dikirim" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "col-12"
                        }, [
                          createVNode("div", { class: "d-grid" }, [
                            createVNode("button", {
                              class: "btn btn-sm btn-light text-white",
                              style: { "background-color": "#00b893 !important" },
                              onClick: ($event) => finishOrder(unref(attrs).order.id)
                            }, [
                              createVNode("i", { class: "fas fa-gift me-2" }),
                              createTextVNode("Pesanan sudah diterima? ")
                            ], 8, ["onClick"])
                          ])
                        ])) : createCommentVNode("", true)
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
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Order/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
