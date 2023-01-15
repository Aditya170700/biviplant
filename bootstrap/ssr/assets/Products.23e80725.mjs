import { onMounted, unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./HeaderWithTitle.8fd337c7.mjs";
import { S as Sidebar } from "./Sidebar.7d303b8e.mjs";
import { ref } from "@vue/reactivity";
import { useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";
import { _ as _sfc_main$2 } from "./Footer.8d824544.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "axios";
import "./socket.0d6bda6b.mjs";
import "socket.io-client";
const _sfc_main = {
  __name: "Products",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
    const isLoading = ref(false);
    const dataProducts = ref(attrs.products);
    const listProducts = ref(attrs.products.data);
    const metaTitle = ref(attrs.meta_title);
    const metaDescription = ref(attrs.meta_description);
    const metaKeyword = ref(attrs.meta_keyword);
    const nextProduct = () => {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && dataProducts.value.next_page_url) {
          isLoading.value = true;
          Inertia.get(dataProducts.value.next_page_url, {}, {
            preserveState: true,
            preserveScroll: true,
            only: ["products"],
            onSuccess: (res) => {
              dataProducts.value = res.props.products;
              listProducts.value = [...listProducts.value, ...res.props.products.data];
              isLoading.value = false;
            }
          });
        }
      };
    };
    onMounted(() => {
      nextProduct();
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
      _push(ssrRenderComponent(_sfc_main$1, {
        link_back: "/",
        title: unref(attrs).category.name
      }, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="page-content-wrapper"><div class="pt-3"><div class="container"><div class="catagory-single-img pt-3" style="${ssrRenderStyle({ backgroundImage: `url('${unref(attrs).category.banner_url}')` })}"></div></div></div><div class="top-products-area pb-3"><div class="container"><div class="section-heading d-flex align-items-center justify-content-between mb-3"></div><div class="row g-3"><!--[-->`);
      ssrRenderList(listProducts.value, (product, i) => {
        _push(`<div class="col-6 col-md-4 col-lg-3"><div class="card product-card"><div class="card-body"><span class="badge rounded-pill badge-warning"> Sale </span><a class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a>`);
        _push(ssrRenderComponent(unref(Link), {
          class: "product-thumbnail d-block",
          href: _ctx.route("product.show", { slug: product.slug })
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
          href: _ctx.route("product.show", { slug: product.slug })
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
        _push(`<p class="sale-price">${ssrInterpolate(product.price_rp)}<br><span>${ssrInterpolate(product.strike_price_rp)}</span></p><div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a></div></div></div>`);
      });
      _push(`<!--]--></div>`);
      if (isLoading.value) {
        _push(`<div class="row mt-3 g-3"><div class="col text-center"><span style="${ssrRenderStyle({ "color": "blue" })}">Sedang memuat ...</span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/ProductCategory/Products.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
