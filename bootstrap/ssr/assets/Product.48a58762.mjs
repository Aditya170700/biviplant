import { resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, unref, toDisplayString, createTextVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$5 } from "./Footer.b9d4becd.mjs";
import _sfc_main$2 from "./AddressModal.3588530b.mjs";
import _sfc_main$4 from "./CourierModal.384a9c3c.mjs";
import { reactive, ref } from "@vue/reactivity";
import { Carousel, Slide } from "vue3-carousel";
import axios from "axios";
import { t as toastError } from "./utils.3a466e9c.mjs";
import { useAttrs, onMounted, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import _sfc_main$3 from "./AddressModalGuest.683ce839.mjs";
import "@inertiajs/inertia";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main$1 = {
  components: {
    Link
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "header-area",
    id: "headerArea"
  }, _attrs))}><div class="container h-100 d-flex align-items-center justify-content-between"><div class="back-button">`);
  _push(ssrRenderComponent(_component_Link, { href: "/products" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="bi bi-arrow-left" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "bi bi-arrow-left",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "currentColor",
            viewBox: "0 0 16 16"
          }, [
            createVNode("path", {
              "fill-rule": "evenodd",
              d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            })
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="page-heading"><h6 class="mb-0">Detail Produk</h6></div><div class="suha-navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas"><span></span><span></span><span></span></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Product/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const carousel = "";
const Product_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Product",
  __ssrInlineRender: true,
  props: {
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    related_products: Object,
    product: Object,
    user_addresses: Object,
    primary_address: Object
  },
  setup(__props) {
    var _a, _b, _c, _d, _e;
    const props = __props;
    let attrs = useAttrs();
    let store = useStore();
    onMounted(() => {
      loadFeedback();
    });
    let primary_address = reactive(
      (_a = props.primary_address) != null ? _a : JSON.parse(localStorage.getItem("primary_address"))
    );
    let form = reactive({
      user_id: (_b = attrs.user) == null ? void 0 : _b.id,
      product_id: props.product.id,
      user_address_id: (_c = props.primary_address) == null ? void 0 : _c.id,
      user_address: "",
      courier: "",
      shipping_service: "",
      shipping_cost: "",
      shipping_etd: "",
      qty: (_e = (_d = props.product.cart_user) == null ? void 0 : _d.qty) != null ? _e : 0 + 1
    });
    let feedback = reactive({
      data: [],
      meta: "",
      loading: false,
      more: true
    });
    function loadFeedback() {
      axios.get(`/api/feedbacks/${props.product.id}`).then((res) => {
        feedback.data = res.data.data;
        feedback.meta = res.data.meta;
        feedback.loading = false;
      }).catch((err) => {
        feedback.loading = false;
        toastError(err.response.data.message);
      });
    }
    const metaTitle = ref(props.meta_title);
    const metaDescription = ref(props.meta_description);
    const metaKeyword = ref(props.meta_keyword);
    watch(
      () => store.getters.courier,
      (val) => {
        var _a2, _b2, _c2, _d2, _e2;
        form.courier = (_a2 = val == null ? void 0 : val.name) != null ? _a2 : null;
        form.shipping_service = (_b2 = val == null ? void 0 : val.service) != null ? _b2 : null;
        form.shipping_cost = (_c2 = val == null ? void 0 : val.value) != null ? _c2 : null;
        form.shipping_etd = (_d2 = val == null ? void 0 : val.etd) != null ? _d2 : null;
        form.qty = (_e2 = val == null ? void 0 : val.qty) != null ? _e2 : 0;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b2, _c2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(metaTitle.value)}</title><meta head-key="description" name="description"${ssrRenderAttr("content", metaDescription.value)}${_scopeId}><meta head-key="keyword" name="keyword"${ssrRenderAttr("content", metaKeyword.value)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(metaTitle.value), 1),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: metaDescription.value
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "keyword",
                name: "keyword",
                content: metaKeyword.value
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(Header, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      if (__props.user_addresses != null) {
        _push(ssrRenderComponent(_sfc_main$2, { user_addresses: __props.user_addresses }, null, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      }
      if (unref(primary_address) != null) {
        _push(ssrRenderComponent(_sfc_main$4, {
          primary_address: unref(primary_address),
          product: __props.product,
          qty: unref(form).qty
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="card fixed-bottom rounded-0 shadow-0 bg-fug" style="${ssrRenderStyle({ "bottom": "58px" })}"><div class="card-body p-0"><div class="d-flex justify-content-start align-items-center"><div class="col-3 text-center bg-fug-2 p-3 text-white border-end"><i class="lni lni-comments" style="${ssrRenderStyle({ "font-size": "25px" })}"></i></div>`);
      if (unref(attrs).user) {
        _push(`<div class="col-3 text-center bg-fug-2 p-3 text-white border-start"><i class="lni lni-cart-full" style="${ssrRenderStyle({ "font-size": "25px" })}"></i></div>`);
      } else {
        _push(`<div class="col-3 text-center bg-fug-2 p-3 text-white border-start"><i class="lni lni-cart-full" style="${ssrRenderStyle({ "font-size": "25px" })}"></i></div>`);
      }
      _push(`<div class="col-6 text-center bg-fug-3 p-3 text-white" style="${ssrRenderStyle({ "font-size": "18px" })}"> Beli Sekarang </div></div></div></div><div class="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true"><div class="toast-body"><div class="content d-flex align-items-center mb-2"><img src="/img/icons/icon-72x72.png" alt=""><h6 class="mb-0">Add to Home Screen</h6><button class="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button></div><span class="mb-0 d-block">Add Suha on your mobile home screen. Click the<strong class="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span></div></div><div class="page-content-wrapper bg-fug"><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><!--[-->`);
      ssrRenderList(__props.product.files, (file, i) => {
        _push(`<button type="button" data-bs-target="#carouselExampleIndicators"${ssrRenderAttr("data-bs-slide-to", i)} class="${ssrRenderClass(i == 0 ? "active" : "")}"${ssrRenderAttr("aria-current", i == 0 ? true : false)}${ssrRenderAttr("aria-label", `Slide ${i + 1}`)}></button>`);
      });
      _push(`<!--]--></div><div class="carousel-inner"><!--[-->`);
      ssrRenderList(__props.product.files, (file, i) => {
        _push(`<div class="${ssrRenderClass(["carousel-item", i == 0 ? "active" : ""])}"><div class="single-product-slide text-center"><img class="rounded mx-auto d-block mb-2"${ssrRenderAttr("src", file.src)}${ssrRenderAttr("alt", file.alt)}></div></div>`);
      });
      _push(`<!--]--></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div><div class="product-description bg-fug"><div class="product-title-meta-data bg-white py-3"><div class="container d-flex justify-content-between"><div class="p-title-price"><h6 class="mb-1">${ssrInterpolate(__props.product.name)}</h6><p class="sale-price mb-0">${ssrInterpolate(__props.product.price_rp)}<span>${ssrInterpolate(__props.product.strike_price_rp)}</span></p></div></div><div class="container my-2"><hr><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold"><strong>Kondisi</strong></p></div><div class="col-9 fw-bold"><p>${ssrInterpolate((_a2 = __props.product.text_condition) != null ? _a2 : "-")}</p></div></div><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold">Berat</p></div><div class="col-9 fw-bold"><p>${ssrInterpolate(__props.product.weight)} gram</p></div></div><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold">Stok</p></div><div class="col-9 fw-bold"><p>${ssrInterpolate(__props.product.stock)}</p></div></div><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold">Terjual</p></div><div class="col-9 fw-bold"><p>390</p></div></div><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold">Kategori</p></div><div class="col-9 fw-bold"><p>${ssrInterpolate((_c2 = (_b2 = __props.product) == null ? void 0 : _b2.category) == null ? void 0 : _c2.name)}</p></div></div><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold">Dikirim ke</p></div><div class="col-9"><a href="#" data-bs-toggle="offcanvas" data-bs-target="#addressModal" aria-controls="addressModal" style="${ssrRenderStyle({ "align-items": "center" })}"><div class="d-flex justify-content-between align-items-center">`);
      if (unref(primary_address)) {
        _push(`<p>${ssrInterpolate(`${unref(primary_address).subdistrict.name}, ${unref(primary_address).subdistrict.city.name}, ${unref(primary_address).subdistrict.city.province.name}, ${unref(primary_address).postal_code}`)}</p>`);
      } else {
        _push(`<p>Belum Ada Alamat</p>`);
      }
      _push(`<i class="lni lni-chevron-right small"></i></div></a></div></div><div class="sales-offer-content d-flex mt-2"><div class="col-3"><p class="mb-1 fw-bold">Ongkir</p></div><div class="col-9">`);
      if (unref(primary_address)) {
        _push(`<a href="#" data-bs-toggle="offcanvas" data-bs-target="#courierModal" aria-controls="courierModal" style="${ssrRenderStyle({ "align-items": "center" })}"><div class="d-flex justify-content-between align-items-center">`);
        if (unref(form).courier) {
          _push(`<div><p class="small">${ssrInterpolate(unref(form).courier)}</p><p class="small">${ssrInterpolate(unref(form).shipping_service)}</p><p class="small"> Rp. ${ssrInterpolate(unref(form).shipping_cost)}</p><p class="small">${ssrInterpolate(unref(form).shipping_etd)} hari </p><p class="small">${ssrInterpolate(unref(form).qty)} pcs </p></div>`);
        } else {
          _push(`<div><p>Cek Ongkir</p></div>`);
        }
        _push(`<i class="lni lni-chevron-right small"></i></div></a>`);
      } else {
        _push(`<a href="#" style="${ssrRenderStyle({ "align-items": "center" })}"><div class="d-flex justify-content-between align-items-center"><div><p>Belum pilih alamat pengiriman</p></div><i class="lni lni-chevron-right small"></i></div></a>`);
      }
      _push(`</div></div><div class="sales-offer-content mb-2"><hr class="my-2"><ul class="mb-2"><li><i class="lni lni-checkmark-circle"></i> 100% Kualitas Unggul </li><li><i class="lni lni-checkmark-circle"></i> Bergaransi </li><li><i class="lni lni-checkmark-circle"></i> 100% Terpercaya </li></ul></div><div class="sales-offer-content mb-2"><hr class="my-2"><h6 class="mb-2">Deskripsi</h6><p>${__props.product.description}</p></div><div class="sales-offer-content my-5"><div class="d-flex justify-content-between align-items-center"><h6>Produk Terkait</h6><a class="btn btn-light" href="/">Lihat Semua</a></div><div class="related-product-slide carousel">`);
      _push(ssrRenderComponent(unref(Carousel), { "items-to-show": 1.5 }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.related_products, (relatedProduct, i) => {
              _push2(ssrRenderComponent(unref(Slide), {
                class: "single-related-product-slide",
                key: i
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="card product-card"${_scopeId2}><div class="card-body text-start"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      class: "product-thumbnail d-block",
                      href: _ctx.route("product.show", {
                        slug: relatedProduct.slug
                      })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a3, _b3, _c3, _d2;
                        if (_push4) {
                          _push4(`<img class="mb-2"${ssrRenderAttr(
                            "src",
                            (_a3 = relatedProduct.files[0]) == null ? void 0 : _a3.src
                          )}${ssrRenderAttr(
                            "alt",
                            (_b3 = relatedProduct.files[0]) == null ? void 0 : _b3.alt
                          )}${_scopeId3}>`);
                        } else {
                          return [
                            createVNode("img", {
                              class: "mb-2",
                              src: (_c3 = relatedProduct.files[0]) == null ? void 0 : _c3.src,
                              alt: (_d2 = relatedProduct.files[0]) == null ? void 0 : _d2.alt
                            }, null, 8, ["src", "alt"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(Link), {
                      class: "product-title d-block",
                      href: _ctx.route("product.show", {
                        slug: relatedProduct.slug
                      })
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(relatedProduct.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(relatedProduct.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`<p class="sale-price"${_scopeId2}>${ssrInterpolate(relatedProduct.price_rp)}<br${_scopeId2}><span${_scopeId2}>${ssrInterpolate(relatedProduct.strike_price_rp)}</span></p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "card product-card" }, [
                        createVNode("div", { class: "card-body text-start" }, [
                          createVNode(unref(Link), {
                            class: "product-thumbnail d-block",
                            href: _ctx.route("product.show", {
                              slug: relatedProduct.slug
                            })
                          }, {
                            default: withCtx(() => {
                              var _a3, _b3;
                              return [
                                createVNode("img", {
                                  class: "mb-2",
                                  src: (_a3 = relatedProduct.files[0]) == null ? void 0 : _a3.src,
                                  alt: (_b3 = relatedProduct.files[0]) == null ? void 0 : _b3.alt
                                }, null, 8, ["src", "alt"])
                              ];
                            }),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode(unref(Link), {
                            class: "product-title d-block",
                            href: _ctx.route("product.show", {
                              slug: relatedProduct.slug
                            })
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(relatedProduct.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"]),
                          createVNode("p", { class: "sale-price" }, [
                            createTextVNode(toDisplayString(relatedProduct.price_rp), 1),
                            createVNode("br"),
                            createVNode("span", null, toDisplayString(relatedProduct.strike_price_rp), 1)
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.related_products, (relatedProduct, i) => {
                return openBlock(), createBlock(unref(Slide), {
                  class: "single-related-product-slide",
                  key: i
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "card product-card" }, [
                      createVNode("div", { class: "card-body text-start" }, [
                        createVNode(unref(Link), {
                          class: "product-thumbnail d-block",
                          href: _ctx.route("product.show", {
                            slug: relatedProduct.slug
                          })
                        }, {
                          default: withCtx(() => {
                            var _a3, _b3;
                            return [
                              createVNode("img", {
                                class: "mb-2",
                                src: (_a3 = relatedProduct.files[0]) == null ? void 0 : _a3.src,
                                alt: (_b3 = relatedProduct.files[0]) == null ? void 0 : _b3.alt
                              }, null, 8, ["src", "alt"])
                            ];
                          }),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode(unref(Link), {
                          class: "product-title d-block",
                          href: _ctx.route("product.show", {
                            slug: relatedProduct.slug
                          })
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(relatedProduct.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"]),
                        createVNode("p", { class: "sale-price" }, [
                          createTextVNode(toDisplayString(relatedProduct.price_rp), 1),
                          createVNode("br"),
                          createVNode("span", null, toDisplayString(relatedProduct.strike_price_rp), 1)
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="sales-offer-content my-5"><div class="d-flex justify-content-between align-items-center mb-2"><h6>Ulasan</h6></div><div class="rating-review-content"><ul class="ps-0">`);
      if (unref(feedback).data.length < 1) {
        _push(`<li class="single-user-review d-flex"> Belum ada ulasan </li>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(feedback).data, (data, i) => {
        _push(`<li class="single-user-review d-flex"><div class="user-thumbnail"><img${ssrRenderAttr(
          "src",
          data.user.profile_photo_path_url
        )} alt=""></div><div class="rating-comment"><div class="rating"><i class="${ssrRenderClass(`lni lni-star${data.rating >= 1 ? "-filled" : ""}`)}"></i><i class="${ssrRenderClass(`lni lni-star${data.rating >= 2 ? "-filled" : ""}`)}"></i><i class="${ssrRenderClass(`lni lni-star${data.rating >= 3 ? "-filled" : ""}`)}"></i><i class="${ssrRenderClass(`lni lni-star${data.rating >= 4 ? "-filled" : ""}`)}"></i><i class="${ssrRenderClass(`lni lni-star${data.rating >= 5 ? "-filled" : ""}`)}"></i></div><p class="comment mb-0">${data.comment}</p><span class="name-date">${ssrInterpolate(data.created_at)}</span></div></li>`);
      });
      _push(`<!--]--></ul></div></div><div class="sales-offer-content mt-2 mb-5"><hr class="mt-4 mb-2"> \xA0 </div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Product.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
