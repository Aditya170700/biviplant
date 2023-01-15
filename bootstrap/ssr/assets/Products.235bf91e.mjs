import { mergeProps, unref, withCtx, openBlock, createBlock, createVNode, useSSRContext, onMounted, watch, toDisplayString, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrLooseEqual, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { Link, Head } from "@inertiajs/inertia-vue3";
import { ref, reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { _ as _sfc_main$3 } from "./Footer.8d824544.mjs";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import "@vue/runtime-core";
import "./socket.0d6bda6b.mjs";
import "socket.io-client";
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    useStore();
    let search = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "header-area",
        id: "headerArea"
      }, _attrs))}><div class="container h-100 d-flex align-items-center justify-content-between"><div class="back-button">`);
      _push(ssrRenderComponent(unref(Link), { href: "/" }, {
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
      _push(`</div><div class="top-search-form"><form action="" method=""><input class="form-control" type="search" placeholder="Cari kebutuhanmu di sini"${ssrRenderAttr("value", unref(search))}><button type="submit"><i class="fa fa-search"></i></button></form></div><div class="suha-navbar-toggler d-none" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas" id="suhaOffcanvasToggler"></div><div class="filter-option" data-bs-toggle="offcanvas" data-bs-target="#suhaFilterOffcanvas" aria-controls="suhaFilterOffcanvas"><svg class="bi bi-sliders" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"></path></svg></div></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Products/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  props: {
    product_conditions: Object
  },
  setup(__props) {
    const props = __props;
    let store = useStore();
    const productConditions = ref(props.product_conditions);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "offcanvas offcanvas-start suha-filter-offcanvas-wrap",
        tabindex: "-1",
        id: "suhaFilterOffcanvas",
        "aria-labelledby": "suhaFilterOffcanvasLabel",
        style: { "background": "linear-gradient(to left, #fff, #fff) !important", "width": "250px !important" }
      }, _attrs))}><button class="btn-close text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="lni lni-close"></i></button><div class="offcanvas-body py-5"><div class="container"><div class="row"><div class="col-12"><div class="widget catagory mb-4"><h6 class="widget-title mb-2">Kondisi Tanaman</h6><div class="widget-desc"><!--[-->`);
      ssrRenderList(productConditions.value, (cond, iCond) => {
        _push(`<div class="form-check"><input class="form-check-input"${ssrRenderAttr("id", `cond-${iCond}`)} type="checkbox"${ssrRenderAttr("value", iCond)}${ssrIncludeBooleanAttr(
          Array.isArray(
            unref(store).state.filterProduct.conditions
          ) ? ssrLooseContain(
            unref(store).state.filterProduct.conditions,
            iCond
          ) : unref(store).state.filterProduct.conditions
        ) ? " checked" : ""}><label class="form-check-label"${ssrRenderAttr("for", `cond-${iCond}`)}>${ssrInterpolate(cond)}</label></div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-12"><div class="widget catagory mb-4"><h6 class="widget-title mb-2">Urutkan</h6><div class="widget-desc"><div class="form-check"><input class="form-check-input" type="radio" name="asc" id="asc"${ssrIncludeBooleanAttr(ssrLooseEqual(
        unref(store).state.filterProduct.sort_price,
        "asc"
      )) ? " checked" : ""} value="asc"><label class="form-check-label" for="asc"> Harga Termurah </label></div><div class="form-check"><input class="form-check-input" type="radio" name="desc" id="desc"${ssrIncludeBooleanAttr(ssrLooseEqual(
        unref(store).state.filterProduct.sort_price,
        "desc"
      )) ? " checked" : ""} value="desc"><label class="form-check-label" for="desc"> Harga Termahal </label></div></div></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Products/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Products",
  __ssrInlineRender: true,
  props: {
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    categories: Object,
    products: Object,
    product_conditions: Object
  },
  setup(__props) {
    const props = __props;
    let store = useStore();
    let category = ref("");
    const isLoading = ref(false);
    const dataProducts = ref(props.products);
    const listProducts = ref(props.products.data);
    const productConditions = ref(props.product_conditions);
    const nextProduct = () => {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && dataProducts.value.next_page_url) {
          isLoading.value = true;
          Inertia.get(
            dataProducts.value.next_page_url,
            {},
            {
              preserveState: true,
              preserveScroll: true,
              only: ["products"],
              onSuccess: (res) => {
                dataProducts.value = res.props.products;
                listProducts.value = [
                  ...listProducts.value,
                  ...res.props.products.data
                ];
                isLoading.value = false;
              }
            }
          );
        }
      };
    };
    onMounted(() => {
      nextProduct();
      const url = new URL(window.location.href);
      category.value = url.searchParams.get("category");
    });
    const metaTitle = ref(props.meta_title);
    const metaDescription = ref(props.meta_description);
    const metaKeyword = ref(props.meta_keyword);
    reactive([]);
    watch(store.state.filterProduct, (val) => {
      var _a;
      axios.get("/api/products", {
        params: (_a = store == null ? void 0 : store.state) == null ? void 0 : _a.filterProduct
      }).then((res) => {
        dataProducts.value = res.data;
        listProducts.value = res.data.data;
      }).catch((err) => {
        console.log(err);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
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
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { product_conditions: productConditions.value }, null, _parent));
      _push(`<div class="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true"><div class="toast-body"><div class="content d-flex align-items-center mb-2"><img src="img/icons/icon-72x72.png" alt=""><h6 class="mb-0">Add to Home Screen</h6><button class="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button></div><span class="mb-0 d-block">Add Suha on your mobile home screen. Click the<strong class="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span></div></div><div class="page-content-wrapper bg-fug"><div class="top-products-area py-3"><div class="container"><div class="section-heading d-flex align-items-center justify-content-between"><h6 class="fw-bold">KATEGORI</h6></div><div class="product-catagories"><div class="row g-3"><div class="col-4"><a href="#" class="${ssrRenderClass(`shadow-sm d-flex align-items-center ${unref(category) == "" || !unref(category) ? "bg-light border border-success" : ""}`)}"><img src="/assets/images/logo/store.svg" alt=""> Semua </a></div><!--[-->`);
      ssrRenderList(__props.categories.data, (cat, i) => {
        _push(`<div class="col-4"><a class="${ssrRenderClass(`shadow-sm d-flex align-items-center ${unref(category) == cat.slug ? "bg-light border border-success" : ""}`)}" href="#"><img${ssrRenderAttr("src", cat.icon_url)} alt="" style="${ssrRenderStyle({ "width": "19px" })}"> ${ssrInterpolate(cat.name)}</a></div>`);
      });
      _push(`<!--]--></div></div><div class="row g-3"><div class="section-heading d-flex align-items-center justify-content-between mt-5"><h6 class="fw-bold">DAFTAR PRODUK</h6></div>`);
      if (listProducts.value.length < 1) {
        _push(`<div class="col-12 text-center"> Produk tidak ditemukan </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(listProducts.value, (product, i) => {
        _push(`<div class="col-6 col-md-4 col-lg-3"><div class="card product-card"><div class="card-body">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "product-thumbnail d-block",
          href: _ctx.route("product.show", {
            slug: product.slug
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<img class="mb-2"${ssrRenderAttr("src", (_a = product.files[0]) == null ? void 0 : _a.src)}${ssrRenderAttr("alt", (_b = product.files[0]) == null ? void 0 : _b.alt)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  class: "mb-2",
                  src: (_c = product.files[0]) == null ? void 0 : _c.src,
                  alt: (_d = product.files[0]) == null ? void 0 : _d.alt
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(unref(Link), {
          class: "product-title d-block",
          href: _ctx.route("product.show", {
            slug: product.slug
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(product.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(product.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="sale-price">${ssrInterpolate(product.price_rp)}<br><span>${ssrInterpolate(product.strike_price_rp)}</span></p><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (isLoading.value) {
        _push(`<div class="row mt-3 g-3"><div class="col text-center"><span style="${ssrRenderStyle({ "color": "blue" })}">Sedang memuat ...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Product/Products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
