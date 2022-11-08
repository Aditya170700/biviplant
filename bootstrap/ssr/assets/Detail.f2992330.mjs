import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { useAttrs } from "@vue/runtime-core";
import "@inertiajs/inertia";
import { r as rupiah, f as formatDate } from "./utils.3a466e9c.mjs";
import "vue3-clipboard";
import "@vue/reactivity";
import "lodash";
import "axios";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main = {
  __name: "Detail",
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
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Rincian Pesanan</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("orders.history"),
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
      _push(`</div><!--[-->`);
      ssrRenderList(unref(attrs).order.order_details, (detail, idetail) => {
        var _a;
        _push(`<div class="row"><div class="col-lg-12 py-2"><div class="d-flex justify-content-between align-items-center"><span class="h6"><i class="lni lni-gift me-2"></i> Produk </span></div><div class="d-flex justify-content-start"><img${ssrRenderAttr("src", detail.product.files[0].src)} alt="" style="${ssrRenderStyle({ "width": "100px" })}" class="rounded me-2"><div><div class="h6 one-line">${ssrInterpolate(detail.product.name)}</div><div class="small mb-3">${ssrInterpolate(detail.qty)} pcs </div><div class="d-flex justify-content-between small"><span class="opacity-25 text-decoration-line-through small">${ssrInterpolate(unref(rupiah)(
          detail.strike_price
        ))}</span><span class="small">${ssrInterpolate(unref(rupiah)(detail.price))}</span></div></div></div></div><div class="col-lg-12 py-2"><div class="d-flex justify-content-between align-items-center"><span class="h6"><i class="lni lni-map-marker me-2"></i> Alamat Pengiriman </span></div><div class="opacity-50">${ssrInterpolate(detail.user_address.receiver)}</div><div class="opacity-50">${ssrInterpolate(detail.user_address.phone)}</div><div class="opacity-50 small">${ssrInterpolate(detail.user_address.detail)}</div><div class="opacity-50 small">${ssrInterpolate(`${detail.user_address.subdistrict.name}, ${detail.user_address.subdistrict.city.name}, ${detail.user_address.subdistrict.city.province.name} ${detail.user_address.postal_code}`)}</div></div><div class="col-lg-12 py-2"><div class="d-flex justify-content-between align-items-center"><span class="h6"><i class="lni lni-caravan me-2"></i> Informasi Pengiriman </span>`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("orders.track", detail.id),
          class: "btn btn-sm btn-light"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`LIHAT`);
            } else {
              return [
                createTextVNode("LIHAT")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="opacity-50">${ssrInterpolate(detail.courier)}</div><div class="opacity-50">${ssrInterpolate(detail.shipping_service)} - ${ssrInterpolate((_a = detail.receipt) != null ? _a : "Belum ada resi")}</div><div class="opacity-50 small">${ssrInterpolate(detail.shipping_etd)} hari </div><div class="opacity-50 small">${ssrInterpolate(unref(rupiah)(detail.shipping_cost))}</div><hr class="my-2"></div></div>`);
      });
      _push(`<!--]--><div class="row"><div class="col-lg-12"><div class="d-flex justify-content-between opacity-50 my-2"><div class="small">Voucher</div><div class="small">${ssrInterpolate(unref(rupiah)(unref(attrs).order.voucher))}</div></div><div class="d-flex justify-content-between my-2"><div class="small">Total</div><div class="small">${ssrInterpolate(unref(rupiah)(unref(attrs).order.total))}</div></div></div><div class="col-lg-12 py-2"><hr class="mb-2"><div class="d-flex justify-content-between align-items-center"><span class="h6"><i class="lni lni-credit-cards me-2"></i> Metode Pembayaran </span></div><div class="col-lg-12"><div class="d-flex justify-content-between opacity-50 my-2"><div class="small">Metode</div><div class="small text-uppercase">${ssrInterpolate(unref(attrs).order.payment_method)}</div></div></div><div class="col-lg-12"><div class="d-flex justify-content-between opacity-50 my-2"><div class="small">Channel</div><div class="small text-uppercase">${ssrInterpolate(unref(attrs).order.payment_channel)}</div></div></div><div class="col-lg-12"><div class="d-flex justify-content-between opacity-50 my-2"><div class="small"> Nomor Pembayaran </div><div class="small text-uppercase">${ssrInterpolate(unref(attrs).order.payment_no)}<i class="lni lni-empty-file ms-2"></i></div></div></div></div><div class="col-lg-12 py-2"><hr class="mb-2"><div class="d-flex justify-content-between align-items-center"><span class="small opacity-50"> No. Pesanan </span><span class="small opacity-50 text-uppercase">${ssrInterpolate(unref(attrs).order.id.substr(0, 13))}</span></div><div class="d-flex justify-content-between align-items-center"><span class="small opacity-50"> Waktu Pemesanan </span><span class="small opacity-50">${ssrInterpolate(unref(formatDate)(
        unref(attrs).order.created_at,
        "DD MMMM YYYY HH:mm"
      ))}</span></div><div class="d-flex justify-content-between align-items-center"><span class="small opacity-50"> Waktu Pembayaran </span>`);
      if (unref(attrs).order.paid_at) {
        _push(`<span class="small opacity-50">${ssrInterpolate(unref(formatDate)(
          unref(attrs).order.paid_at,
          "DD MMMM YYYY HH:mm"
        ))}</span>`);
      } else {
        _push(`<span class="small opacity-50">-</span>`);
      }
      _push(`</div><div class="d-flex justify-content-between align-items-center"><span class="small opacity-50"> Waktu Pengiriman </span>`);
      if (unref(attrs).order.send_at) {
        _push(`<span class="small opacity-50">${ssrInterpolate(unref(formatDate)(
          unref(attrs).order.send_at,
          "DD MMMM YYYY HH:mm"
        ))}</span>`);
      } else {
        _push(`<span class="small opacity-50">-</span>`);
      }
      _push(`</div><div class="d-flex justify-content-between align-items-center"><span class="small opacity-50"> Waktu Pesanan Selesai </span>`);
      if (unref(attrs).order.finish_at) {
        _push(`<span class="small opacity-50">${ssrInterpolate(unref(formatDate)(
          unref(attrs).order.finish_at,
          "DD MMMM YYYY HH:mm"
        ))}</span>`);
      } else {
        _push(`<span class="small opacity-50">-</span>`);
      }
      _push(`</div><hr class="mt-2"></div>`);
      if (unref(attrs).order.payment_status == "Dikirim") {
        _push(`<div class="col-12"><div class="d-grid"><button class="btn btn-sm btn-light text-white" style="${ssrRenderStyle({ "background-color": "#00b893 !important" })}"><i class="lni lni-gift me-2"></i>Pesanan sudah diterima? </button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(attrs).order.payment_status == "Selesai" && unref(attrs).order.feedbacks_count < 1) {
        _push(`<div class="col-12"><div class="d-grid">`);
        _push(ssrRenderComponent(unref(Link), {
          class: "btn btn-sm btn-light text-white",
          style: { "background-color": "#00b893 !important" },
          href: _ctx.route("rating.index", {
            id: unref(attrs).order.id
          })
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="lni lni-pencil me-2"${_scopeId}></i>Nilai `);
            } else {
              return [
                createVNode("i", { class: "lni lni-pencil me-2" }),
                createTextVNode("Nilai ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Order/Detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
