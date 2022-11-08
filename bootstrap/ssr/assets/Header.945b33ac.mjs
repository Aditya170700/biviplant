import { mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { watch } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import "lodash";
import axios from "axios";
import { Link } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    let keyword = ref("");
    let loading = ref(false);
    let searchProducts = ref([]);
    let searchCategories = ref([]);
    watch(
      () => keyword,
      (keyword2) => {
        loading.value = true;
        axios.get(`/api/search?keyword=${keyword2.value}`).then((response) => {
          searchProducts.value = response.data.products;
          searchCategories.value = response.data.categories;
          loading.value = false;
        }).catch((error) => {
          loading.value = false;
          console.log(error);
        });
      },
      {
        deep: true
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "header-area",
        id: "headerArea"
      }, _attrs))}><div class="container h-100 d-flex align-items-center justify-content-between"><div class="logo-wrapper"><a href="/"><img src="/img/core-img/logo-small.png" alt=""></a></div><div class="top-search-form"><form action="" method=""><input class="form-control" type="search" placeholder="Cari..."><button type="submit"><i class="fa fa-search"></i></button></form><div class="offcanvas offcanvas-start suha-offcanvas-wrap" tabindex="-1" id="searchOffcanvas" aria-labelledby="searchOffcanvasLabel" style="${ssrRenderStyle({ "background": "#fff !important" })}"><div class="offcanvas-body"><div class="bg-white"><div id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"><div class="modal-dialog modal-dialog-centered" role="document"><div class="modal-content" style="${ssrRenderStyle({ "border": "0px !important" })}"><div class="modal-header" style="${ssrRenderStyle({ "border": "0px !important" })}"><h5 class="modal-title" id="exampleModalLongTitle"> Cari </h5><button class="btn-close btn-close-black text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="lni lni-close"></i></button></div><div class="modal-body" style="${ssrRenderStyle({ "border": "0px !important" })}"><div class="row"><div class="col-lg-12"><div class="input-group mb-3 shadow-sm"><span class="input-group-text bg-white border-0" id="basic-addon1"><i class="lni lni-search-alt"></i></span><input${ssrRenderAttr("value", unref(keyword))} class="form-control border-0" placeholder="Masukkan kata kunci" aria-label="Masukkan kata kunci" aria-describedby="basic-addon1"></div></div></div>`);
      if (unref(keyword) == "") {
        _push(`<div class="row"><div class="col-lg-12"><span class="small"> Masukkan kata kunci untuk mencari produk atau kategori produk </span></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="row"><div class="col-lg-12 text-center">`);
      if (unref(loading)) {
        _push(`<div class="spinner-border text-secondary" role="status"><span class="visually-hidden">Loading...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (unref(keyword) != "") {
        _push(`<div class="row mb-4 overflow-scroll" style="${ssrRenderStyle({ "max-height": "500px" })}"><div class="col-lg-12 mb-2"><span class="small d-block">Produk</span></div><!--[-->`);
        ssrRenderList(unref(searchProducts), (product, i) => {
          _push(`<div class="${ssrRenderClass(`col-lg-12 mb-2 ${unref(searchProducts).length > 0 ? "" : "d-none"}`)}">`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route(
              "product.show",
              {
                id: product.slug
              }
            )
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span${_scopeId}># ${ssrInterpolate(product.name)}</span><hr${_scopeId}>`);
              } else {
                return [
                  createVNode("span", null, "# " + toDisplayString(product.name), 1),
                  createVNode("hr")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--><div class="${ssrRenderClass(`col-lg-12 mb-2 ${unref(searchProducts).length < 1 ? "" : "d-none"}`)}">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route(
            "product.index"
          )
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span${_scopeId}># Lihat semua produk</span><hr${_scopeId}>`);
            } else {
              return [
                createVNode("span", null, "# Lihat semua produk"),
                createVNode("hr")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(keyword) != "") {
        _push(`<div class="row mb-4 overflow-scroll" style="${ssrRenderStyle({ "max-height": "500px" })}"><div class="col-lg-12 mb-2"><span class="small d-block">Kategori Produk</span></div><!--[-->`);
        ssrRenderList(unref(searchCategories), (category, i) => {
          _push(`<div class="${ssrRenderClass(`col-lg-12 mb-2 ${unref(searchCategories).length > 0 ? "" : "d-none"}`)}"><span># ${ssrInterpolate(category.name)}</span><hr></div>`);
        });
        _push(`<!--]--><div class="${ssrRenderClass(`col-lg-12 mb-2 ${unref(searchCategories).length < 1 ? "" : "d-none"}`)}"><span># Lihat semua kategori produk</span><hr></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div></div></div><div class="suha-navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#suhaOffcanvas" aria-controls="suhaOffcanvas" id="suhaOffcanvasToggler"><span></span><span></span><span></span></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Homepage/Header.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
