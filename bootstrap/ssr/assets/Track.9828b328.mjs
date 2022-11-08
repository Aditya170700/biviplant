import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { reactive } from "@vue/reactivity";
import { useAttrs, onMounted } from "@vue/runtime-core";
import "@inertiajs/inertia";
import { t as toastError } from "./utils.3a466e9c.mjs";
import "vue3-clipboard";
import axios from "axios";
import "lodash";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main = {
  __name: "Track",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
    let shipping = reactive({
      data: null,
      loading: false
    });
    onMounted(() => {
      if (attrs.order_detail.receipt && attrs.order_detail.courier) {
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
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(unref(attrs).metaTitle)}</title><meta head-key="description" name="description"${ssrRenderAttr("content", unref(attrs).metaDescription)}${_scopeId}><meta head-key="keyword" name="keyword"${ssrRenderAttr("content", unref(attrs).metaKeyword)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(unref(attrs).metaTitle), 1),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: unref(attrs).metaDescription
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "keyword",
                name: "keyword",
                content: unref(attrs).metaKeyword
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Lacak Pesanan</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route(
          "orders.detail",
          unref(attrs).order_detail.order_id
        ),
        class: "btn btn-outline-secondary px-2 btn-sm"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-arrow-left me-2"${_scopeId}></i> Kembali `);
          } else {
            return [
              createVNode("i", { class: "lni lni-arrow-left me-2" }),
              createTextVNode(" Kembali ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="row"><div class="col-lg-12 py-2"><div class="d-flex justify-content-between"><span class="h6"> No. Resi </span>`);
      if (unref(attrs).order_detail.receipt) {
        _push(`<span class="opacity-50">${ssrInterpolate(unref(attrs).order_detail.receipt)} <i class="lni lni-empty-file ms-2"></i></span>`);
      } else {
        _push(`<span class="opacity-50">Belum Ada Resi</span>`);
      }
      _push(`</div><hr class="my-2"></div></div>`);
      if (!unref(attrs).order_detail.receipt) {
        _push(`<div class="row"><div class="col-lg-12 py-2 text-center"><div class="alert alert-danger" role="alert"><i class="lni lni-timer mb-3" style="${ssrRenderStyle({ "font-size": "40px" })}"></i><br><div class="h6 fw-bold"> Pesanan akan segera dikirim </div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(attrs).order_detail.receipt && !unref(shipping).loading) {
        _push(`<div class="row">`);
        if (unref(shipping).data && unref(shipping).data.delivered) {
          _push(`<div class="col-lg-12 py-2 text-center"><div class="alert alert-success" role="alert"><i class="lni lni-checkmark mb-3" style="${ssrRenderStyle({ "font-size": "40px" })}"></i><br><div class="h6 fw-bold"> Pesanan telah tiba ditujuan </div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(attrs).order_detail.receipt && !unref(shipping).loading && unref(shipping).data && unref(shipping).data.manifest.length > 0) {
        _push(`<div class="row"><div class="col-lg-12 py-2"><ul class="list-group"><!--[-->`);
        ssrRenderList(unref(shipping).data.manifest.reverse(), (data, i) => {
          _push(`<li class="list-group-item"><p class="small mb-2 text-dark">${ssrInterpolate(data.manifest_description)}</p><span class="small text-muted">2 Feb 2021 - 12:38 PM</span></li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Track.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
