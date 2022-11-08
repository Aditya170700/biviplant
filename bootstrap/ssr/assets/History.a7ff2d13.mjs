import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle, ssrRenderClass } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { useAttrs } from "@vue/runtime-core";
import "@inertiajs/inertia";
import { r as rupiah } from "./utils.3a466e9c.mjs";
import "@vue/reactivity";
import "lodash";
import "axios";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main = {
  __name: "History",
  __ssrInlineRender: true,
  setup(__props) {
    let attrs = useAttrs();
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
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Riwayat Pesanan</span></div><div class="d-flex align-items-center justify-content-between mb-3 overflow-auto">`);
      _push(ssrRenderComponent(unref(Link), {
        class: `col-5 text-center py-2 rounded ${unref(attrs).status == null ? "text-white" : ""}`,
        style: `${unref(attrs).status == null ? "background-color: #00b893 !important" : ""}`,
        href: _ctx.route("orders.history", {
          status: null
        })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Semua `);
          } else {
            return [
              createTextVNode(" Semua ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: `col-5 text-center py-2 rounded ${unref(attrs).status == "Pending" ? "text-white" : ""}`,
        style: `${unref(attrs).status == "Pending" ? "background-color: #00b893 !important" : ""}`,
        href: _ctx.route("orders.history", {
          status: "Pending"
        })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pending `);
          } else {
            return [
              createTextVNode(" Pending ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: `col-5 text-center py-2 rounded ${unref(attrs).status == "Dikemas" ? "text-white" : ""}`,
        style: `${unref(attrs).status == "Dikemas" ? "background-color: #00b893 !important" : ""}`,
        href: _ctx.route("orders.history", {
          status: "Dikemas"
        })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dikemas `);
          } else {
            return [
              createTextVNode(" Dikemas ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: `col-5 text-center py-2 rounded ${unref(attrs).status == "Dikirim" ? "text-white" : ""}`,
        style: `${unref(attrs).status == "Dikirim" ? "background-color: #00b893 !important" : ""}`,
        href: _ctx.route("orders.history", {
          status: "Dikirim"
        })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dikirim `);
          } else {
            return [
              createTextVNode(" Dikirim ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(unref(Link), {
        class: `col-5 text-center py-2 rounded ${unref(attrs).status == "Selesai" ? "text-white" : ""}`,
        style: `${unref(attrs).status == "Selesai" ? "background-color: #00b893 !important" : ""}`,
        href: _ctx.route("orders.history", {
          status: "Selesai"
        })
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Selesai `);
          } else {
            return [
              createTextVNode(" Selesai ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(attrs).order.data.length > 0) {
        _push(`<div><!--[-->`);
        ssrRenderList(unref(attrs).order.data, (order, iorder) => {
          _push(`<div class="row mb-5"><div class="col-lg-12 mb-2"><div class="d-flex justify-content-start"><img${ssrRenderAttr("src", `${order.order_details[0].product.files[0].src}`)} alt="" style="${ssrRenderStyle({ "width": "100px" })}" class="rounded me-2"><div class="col-8"><span class="${ssrRenderClass(`text-warning rounded small text-uppercase`)}">${ssrInterpolate(order.payment_status)}</span><div class="h6 one-line">${ssrInterpolate(order.order_details[0].product.name)}</div><div class="small mb-3">${ssrInterpolate(order.order_details[0].qty)} pcs </div><div class="d-flex justify-content-between small"><span class="opacity-25 text-decoration-line-through small">${ssrInterpolate(unref(rupiah)(
            order.order_details[0].strike_price
          ))}</span><span class="small">${ssrInterpolate(unref(rupiah)(
            order.order_details[0].price
          ))}</span></div></div></div></div><div class="col-lg-12"><hr><div class="d-flex justify-content-between my-2"><div class="small">${ssrInterpolate(order.order_details.length)} produk </div><div class="small"> Total Pesanan: ${ssrInterpolate(unref(rupiah)(order.total))}</div></div></div><div class="col-lg-12"><hr><div class="d-flex justify-content-between my-2 align-items-center"><div class="small opacity-25"> Belum Dinilai </div>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route(
              "orders.detail",
              order.id
            ),
            class: "btn btn-sm btn-light px-2"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` LIHAT DETAIL `);
              } else {
                return [
                  createTextVNode(" LIHAT DETAIL ")
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</div></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div><div class="row"><div class="col-lg-12 py-2"><div class="border rounded"><div class="d-flex justify-content-center align-items-center my-2"><span class="small">Belum ada pesanan</span></div></div></div></div></div>`);
      }
      _push(`<div class="row mt-5">`);
      if (unref(attrs).order.data.length > 0) {
        _push(`<div class="col-lg-12 mb-2 text-center small text-muted"> Menampilkan ${ssrInterpolate(unref(attrs).order.from)} - ${ssrInterpolate(unref(attrs).order.to)} dari ${ssrInterpolate(unref(attrs).order.total)} data </div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(attrs).order.next_page_url) {
        _push(`<div class="col-lg-12 py-2 text-center border rounded">`);
        _push(ssrRenderComponent(unref(Link), {
          href: unref(attrs).order.next_page_url
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Tampilkan Lebih Banyak `);
            } else {
              return [
                createTextVNode(" Tampilkan Lebih Banyak ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/History.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
