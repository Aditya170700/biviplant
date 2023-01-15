import { unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { Head } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.74b19c58.mjs";
import { S as Sidebar } from "./Sidebar.7d303b8e.mjs";
import { _ as _sfc_main$2 } from "./Footer.8d824544.mjs";
import { ref } from "@vue/reactivity";
import "@inertiajs/inertia";
import "@vue/runtime-core";
import "lodash";
import "axios";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "./socket.0d6bda6b.mjs";
import "socket.io-client";
const _sfc_main = {
  __name: "Rating",
  __ssrInlineRender: true,
  props: {
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    results: Array
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
      _push(`<div class="page-content-wrapper bg-fug"><div class="container"><div class="py-3"><div class="card p-0"><div class="card-body"><!--[-->`);
      ssrRenderList(__props.results, (result, i) => {
        _push(`<div class="row mb-3"><div class="col-12 d-flex justify-content-center mb-2"><img${ssrRenderAttr("src", result.image)} alt="Product Image" style="${ssrRenderStyle({ "width": "100px" })}" class="rounded"></div><div class="col-12 text-center"><span class="fw-bold">${ssrInterpolate(result.product)}</span></div><div class="col-12 text-center"><div class="my-3"><div class="product-rating"><i class="${ssrRenderClass(`lni me-2 ${result.rating >= 1 ? "lni-star-filled text-warning" : "lni-star"}`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i><i class="${ssrRenderClass(`lni me-2 ${result.rating >= 2 ? "lni-star-filled text-warning" : "lni-star"}`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i><i class="${ssrRenderClass(`lni me-2 ${result.rating >= 3 ? "lni-star-filled text-warning" : "lni-star"}`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i><i class="${ssrRenderClass(`lni me-2 ${result.rating >= 4 ? "lni-star-filled text-warning" : "lni-star"}`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i><i class="${ssrRenderClass(`lni me-2 ${result.rating >= 5 ? "lni-star-filled text-warning" : "lni-star"}`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i></div></div></div><div class="col-12"><div class="mb-3"><textarea class="form-control"${ssrRenderAttr("id", `comment-${i}`)} placeholder="Comment">${ssrInterpolate(result.comment)}</textarea></div></div><div class="col-12"><hr></div></div>`);
      });
      _push(`<!--]--><div class="row"><div class="col-12"><div class="d-grid"><button class="btn btn-sm btn-success"><i class="lni lni-save me-2"></i>Simpan </button></div></div></div></div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Rating.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
