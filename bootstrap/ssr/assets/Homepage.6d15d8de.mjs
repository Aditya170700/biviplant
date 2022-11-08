import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { ref } from "@vue/reactivity";
import "@vue/runtime-core";
import "lodash";
import "axios";
import "@inertiajs/inertia";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Homepage",
  __ssrInlineRender: true,
  props: {
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    banners: Object,
    categories: Object,
    event: Object,
    products: Object,
    product_best_sellers: Object,
    vouchers: Object,
    setting: Object,
    origins: Object
  },
  setup(__props) {
    const props = __props;
    const metaTitle = ref(props.meta_title);
    const metaDescription = ref(props.meta_description);
    const metaKeyword = ref(props.meta_keyword);
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
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true"><div class="toast-body"><div class="content d-flex align-items-center mb-2"><img src="img/icons/icon-72x72.png" alt=""><h6 class="mb-0">Add to Home Screen</h6><button class="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button></div><span class="mb-0 d-block">Add Suha on your mobile home screen. Click the<strong class="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span></div></div><div class="page-content-wrapper bg-fug"><div class="container"><div class="pt-3"><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel"><div class="carousel-indicators"><!--[-->`);
      ssrRenderList(__props.banners.data, (banner, i) => {
        _push(`<button type="button" data-bs-target="#carouselExampleIndicators"${ssrRenderAttr("data-bs-slide-to", i)} class="${ssrRenderClass(i == 0 ? "active" : "")}"${ssrRenderAttr("aria-current", i == 0 ? true : false)}${ssrRenderAttr("aria-label", `Slide ${i + 1}`)}></button>`);
      });
      _push(`<!--]--></div><div class="carousel-inner"><!--[-->`);
      ssrRenderList(__props.banners.data, (banner, i) => {
        _push(`<div class="${ssrRenderClass([
          "carousel-item",
          i == 0 ? "active" : ""
        ])}"><div class="single-hero-slide" style="${ssrRenderStyle({
          backgroundImage: `url('${banner.path_url}')`,
          width: "100% !important"
        })}"><div class="slide-content h-100 d-flex align-items-center"><div class="slide-text"><h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-duration="1000ms">${ssrInterpolate(banner.title)}</h4><p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-duration="1000ms">${ssrInterpolate(banner.sub_title)}</p>`);
        if (banner.link) {
          _push(`<a class="btn btn-primary btn-sm"${ssrRenderAttr("href", banner.link)} data-animation="fadeInUp" data-delay="800ms" data-duration="1000ms">Lihat</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="container mt-4"><div class="section-heading d-flex align-items-center justify-content-between"><h6 class="fw-bold">KATEGORI</h6></div></div><div class="product-catagories-wrapper pb-3"><div class="container"><div class="product-catagory-wrap"><div class="row g-3"><!--[-->`);
      ssrRenderList(__props.categories.data, (category, i) => {
        _push(`<div class="col-4"><div class="card catagory-card"><div class="card-body">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "text-danger",
          href: _ctx.route("category.show", {
            slug: category.slug
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="d-flex justify-content-center"${_scopeId}><img${ssrRenderAttr("src", category.icon_url)} alt="" class="mb-2"${_scopeId}></div><span${_scopeId}>${ssrInterpolate(category.name)}</span>`);
            } else {
              return [
                createVNode("div", { class: "d-flex justify-content-center" }, [
                  createVNode("img", {
                    src: category.icon_url,
                    alt: "",
                    class: "mb-2"
                  }, null, 8, ["src"])
                ]),
                createVNode("span", null, toDisplayString(category.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div><div class="container mt-4"><div class="section-heading d-flex align-items-center justify-content-between"><h6 class="fw-bold">PRODUK UNGGULAN</h6>`);
      _push(ssrRenderComponent(unref(Link), {
        class: "btn",
        href: "/products"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Lihat Semua`);
          } else {
            return [
              createTextVNode("Lihat Semua")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="top-products-area pb-3"><div class="container"><div class="row g-3"><!--[-->`);
      ssrRenderList(__props.products.data, (product, i) => {
        _push(`<div class="col-6 col-md-4 col-lg-3"><div class="card product-card"><div class="card-body">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "product-thumbnail d-block",
          href: _ctx.route("product.show", {
            id: product.slug
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
            id: product.slug
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
        _push(`<p class="sale-price">${ssrInterpolate(product.price_rp)}<br><span>${ssrInterpolate(product.strike_price_rp)}</span></p></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (__props.event) {
        _push(`<div class="cta-area py-3"><div class="container"><div class="cta-text p-4 p-lg-5" style="${ssrRenderStyle({
          backgroundImage: `url('${__props.event.banner_url}')`
        })}"><h4 class="text-white">${ssrInterpolate(__props.event.title)}</h4><p class="text-white">${ssrInterpolate(__props.event.sub_title)}</p></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container mt-4"><div class="section-heading d-flex align-items-center justify-content-between"><h6 class="fw-bold">PRODUK TERLARIS</h6></div></div><div class="weekly-best-seller-area pb-3"><div class="container"><div class="row g-3"><!--[-->`);
      ssrRenderList(__props.product_best_sellers, (data, i) => {
        _push(`<div class="col-12 col-md-6"><div class="card horizontal-product-card"><div class="card-body d-flex"><div class="product-thumbnail-side">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "product-thumbnail d-block",
          href: _ctx.route("product.show", {
            id: data.slug
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b, _c, _d;
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", (_a = data.files[0]) == null ? void 0 : _a.src)}${ssrRenderAttr("alt", (_b = data.files[0]) == null ? void 0 : _b.alt)}${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: (_c = data.files[0]) == null ? void 0 : _c.src,
                  alt: (_d = data.files[0]) == null ? void 0 : _d.alt
                }, null, 8, ["src", "alt"])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="product-description">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "product-title d-block",
          href: _ctx.route("product.show", {
            id: data.slug
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(data.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(data.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="sale-price">${ssrInterpolate(data.price_rp)}<br><span>${ssrInterpolate(data.strike_price_rp)}</span></p>`);
        _push(ssrRenderComponent(unref(Link), {
          class: "btn btn-danger btn-sm",
          href: _ctx.route("product.show", {
            id: data.slug
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="me-1 lni lni-cart"${_scopeId}></i>Beli`);
            } else {
              return [
                createVNode("i", { class: "me-1 lni lni-cart" }),
                createTextVNode("Beli")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
      if (__props.vouchers.length > 0) {
        _push(`<div class="container mt-4"><div class="section-heading d-flex align-items-center justify-content-between"><h6 class="fw-bold">VOUCHER</h6></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="container pb-3 px-4"><!--[-->`);
      ssrRenderList(__props.vouchers, (voucher, i) => {
        _push(`<div class="row mb-3 shadow-sm bg-white rounded"><div class="col-4 bg-success rounded-start py-4"><p class="small text-white">Kode</p><h1 class="text-white pe-3 mb-0 fw-bold">${ssrInterpolate(voucher.code)}</h1></div><div class="col-8 rounded-end py-3"><span>Min. order</span><p class="fw-bold">${ssrInterpolate(voucher.min_order_rp)}</p><span class="small">Berlaku hingga: ${ssrInterpolate(voucher.expired_at_formatted)}</span></div></div>`);
      });
      _push(`<!--]--></div><div class="container pb-3"><div class="card"><div class="background-shape" style="${ssrRenderStyle({ "background": "rgb(80, 208, 72) !important" })}"></div><div class="card-body"><div class="row mb-3 p-3 text-center"><div class="col"><i class="fa fa-money"></i><p>Pembayaran Terintegrasi</p></div><div class="col"><i class="fa fa-truck"></i><p>Kirim Seluruh Indonesia</p></div><div class="col"><i class="fa fa-check"></i><p>100% Terpercaya</p></div></div><hr><div class="row mb-3 p-3"><div class="col-lg-6 my-auto"><img src="https://dn56y54v4g6fs.cloudfront.net/product/25_04_2022_10_57_10_anggur_merah.jpg" class="img-fluid" alt=""></div><div class="col-lg-6 my-auto"><p>Untuk menjaga agar kualitas bibit tetap terjaga, kami bekerja sama dengan ahli pembibitan dari IPB sebagai konsultan dan pelatih pelaksana di kebun bibit kami. Selain itu kami juga menerapkan standard kualitas bibit hasil kebun kami. Sehingga hanya bibit yang sesuai standard yang kami kirim ke pelanggan. Harga bibit buah yang kami tampilkan adalah harga eceran/satuan.</p></div></div><hr><div class="row mt-3"><div class="col-lg-6 mb-3"><div class="row"><div class="card-title"><strong>Kontak Kami</strong></div><div class="col-3"><p>Email</p></div><div class="col-9"><p>: ${ssrInterpolate(__props.setting.email)}</p></div></div><div class="row"><div class="col-3"><p>Telepon</p></div><div class="col-9"><p>: ${ssrInterpolate(__props.setting.phone)}</p></div></div><div class="row mt-3"><div class="card-title"><strong>Temukan Kami di</strong></div><div class="col-12 d-flex justify-content-around"><div class="img"><a${ssrRenderAttr("href", __props.setting.ig)} target="_blank"><img src="assets/images/logo/instagram.jpg" class="opacity-75" width="50" alt=""></a></div><div class="img"><a${ssrRenderAttr("href", __props.setting.facebook)} target="_blank"><img src="assets/images/logo/youtube.png" class="opacity-75" width="50" alt=""></a></div><div class="img"><a${ssrRenderAttr("href", __props.setting.tiktok)} target="_blank"><img src="assets/images/logo/tiktok.png" class="opacity-75" width="50" alt=""></a></div></div></div></div><div class="col-lg-6 mb-3"><div class="row"><div class="card-title"><strong>Kebun Kami</strong></div><div class="col-lg-12"><!--[-->`);
      ssrRenderList(__props.origins, (origin, i) => {
        _push(`<div class="row mb-2"><div class="col-lg-12"><div class="card"><div class="card-body d-flex"><div class="img"><img src="assets/images/logo/map-point.png" class="opacity-75" width="60" alt=""></div><div class="tex-left"><p class="mb-2">${ssrInterpolate(origin.subdistrict.city.province.name)}</p><p>${ssrInterpolate(origin.detail)}</p></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div><div class="col-lg-12 mb-3"><div class="text-left"><p>All rights reserved Biviplant ${ssrInterpolate(new Date().getFullYear())}</p></div></div></div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Homepage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
