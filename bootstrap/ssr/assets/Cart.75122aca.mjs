import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$4 } from "./Footer.b9d4becd.mjs";
import { reactive, ref } from "@vue/reactivity";
import { useAttrs, onBeforeMount } from "@vue/runtime-core";
import { t as toastError, r as rupiah } from "./utils.3a466e9c.mjs";
import _sfc_main$2 from "./AddressModal.cba38522.mjs";
import _sfc_main$3 from "./CourierModal.71db9875.mjs";
import "@inertiajs/inertia";
import axios from "axios";
import "lodash";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
import "vuex";
const _sfc_main = {
  __name: "Cart",
  __ssrInlineRender: true,
  props: {
    meta_title: String,
    meta_description: String,
    meta_keyword: String
  },
  setup(__props) {
    const props = __props;
    let attrs = useAttrs();
    let voucherCode = reactive({
      code: "",
      data: null,
      loading: false
    });
    const metaTitle = ref(props.meta_title);
    const metaDescription = ref(props.meta_description);
    const metaKeyword = ref(props.meta_keyword);
    const voucher = ref(0);
    const paymentMethod = reactive({
      data: [],
      selected: {
        paymentMethod: null,
        paymentChannel: null,
        fee: 0,
        feeType: 0
      },
      loading: false
    });
    onBeforeMount(() => {
      paymentMethod.loading = true;
      axios.get("/api/orders/list-payment-method").then((res) => {
        paymentMethod.data = res.data.data;
        paymentMethod.loading = false;
      }).catch((err) => {
        paymentMethod.loading = false;
        toastError(err);
      });
    });
    function total() {
      let res = 0;
      let strikeRes = 0;
      let shippingCost = 0;
      attrs.carts.forEach((cart) => {
        var _a;
        let strikePrice = cart.product.strike_price;
        let price = parseInt(cart.product.price);
        let qty = parseInt(cart.qty);
        let ongkir = parseInt((_a = cart.shipping_cost) != null ? _a : 0);
        res += price * qty + ongkir;
        strikeRes += strikePrice * qty + ongkir;
        shippingCost += ongkir;
      });
      res -= voucher.value;
      return { res, strikeRes, shippingCost };
    }
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
      _push(`<div class="toast pwa-install-alert shadow bg-white" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="5000" data-bs-autohide="true"><div class="toast-body"><div class="content d-flex align-items-center mb-2"><img src="img/icons/icon-72x72.png" alt=""><h6 class="mb-0">Add to Home Screen</h6><button class="btn-close ms-auto" type="button" data-bs-dismiss="toast" aria-label="Close"></button></div><span class="mb-0 d-block">Add Suha on your mobile home screen. Click the<strong class="mx-1">Add to Home Screen</strong>button &amp; enjoy it like a regular app.</span></div></div><div class="page-content-wrapper" style="${ssrRenderStyle({ "min-height": "100" })}"><div class="container">`);
      if (unref(attrs).carts.length <= 0) {
        _push(`<div class="cart-wrapper-area py-3 text-center"><div class="alert alert-danger" role="alert"><i class="fa fa-cart-plus fa-3x mb-3"></i><br><div class="h6 fw-bold">Cart kamu kosong!</div></div></div>`);
      } else {
        _push(`<div class="py-3"><div class="card p-0"><div class="card-body"><!--[-->`);
        ssrRenderList(unref(attrs).carts, (cart, i) => {
          _push(`<div class="row mb-3">`);
          _push(ssrRenderComponent(_sfc_main$2, {
            user_addresses: unref(attrs).user_addresses,
            cart
          }, null, _parent));
          _push(ssrRenderComponent(_sfc_main$3, { cart }, null, _parent));
          _push(`<div class="col-2">`);
          if (cart.product.files.length <= 0) {
            _push(`<img class="rounded" src="img/product/11.png" alt="">`);
          } else {
            _push(`<img class="rounded"${ssrRenderAttr("src", cart.product.files[0].src)} alt="">`);
          }
          _push(`</div><div class="col-8">`);
          _push(ssrRenderComponent(unref(Link), {
            class: "product-title d-block",
            href: _ctx.route("product.show", {
              slug: cart.product.slug
            })
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(cart.product.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(cart.product.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<span class="text-muted text-decoration-line-through me-2 small">${ssrInterpolate(cart.product.strike_price_rp)}</span><span class="text-dark small">${ssrInterpolate(cart.product.price_rp)}</span><div class="d-flex justify-content-start align-items-center p-0 my-3"><i class="${ssrRenderClass(`lni lni-circle-minus text-danger`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i><span class="mx-2">${ssrInterpolate(cart.qty)} pcs</span><i class="${ssrRenderClass(`lni lni-circle-plus text-primary`)}" style="${ssrRenderStyle({ "font-size": "20px" })}"></i></div></div><div class="col-2 text-end"><a href="#" style="${ssrRenderStyle({ "font-size": "20px" })}"><i class="lni lni-cross-circle text-danger"></i></a></div><div class="col-12 mb-3"><div class="row"><div class="col-12 d-flex justify-content-between"><span class="fw-bold"> Dikirim ke :</span><a href="#" data-bs-toggle="offcanvas"${ssrRenderAttr("data-bs-target", `#addressModal${cart.id}`)}${ssrRenderAttr("aria-controls", `addressModal${cart.id}`)} style="${ssrRenderStyle({ "align-items": "center" })}"><i class="lni lni-pencil text-warning"></i></a></div><div class="col-12 small text-muted">${ssrInterpolate(`${cart.user_address.subdistrict.name}, ${cart.user_address.subdistrict.city.name}, ${cart.user_address.subdistrict.city.province.name}, ${cart.user_address.postal_code}`)}</div></div></div><div class="col-12 mb-3"><div class="row"><div class="col-12 d-flex justify-content-between"><span class="fw-bold"> Kurir :</span><a href="#" data-bs-toggle="offcanvas"${ssrRenderAttr("data-bs-target", `#courierModal${cart.id}`)}${ssrRenderAttr("aria-controls", `courierModal${cart.id}`)} style="${ssrRenderStyle({ "align-items": "center" })}"><i class="lni lni-pencil text-warning"></i></a></div>`);
          if (cart.courier || cart.shipping_service || cart.shipping_cost || cart.shipping_etd) {
            _push(`<div class="col-12 small text-muted"><p class="small">${ssrInterpolate(cart.courier)}</p><p class="small">${ssrInterpolate(cart.shipping_service)}</p><p class="small"> Rp. ${ssrInterpolate(cart.shipping_cost)}</p><p class="small">${ssrInterpolate(cart.shipping_etd)} hari </p><p class="small">${ssrInterpolate(cart.qty)} pcs </p></div>`);
          } else {
            _push(`<div class="col-12 small text-muted"><span class="text-danger blink">Belum memilih kurir</span></div>`);
          }
          _push(`</div></div></div>`);
        });
        _push(`<!--]--><div class="row mb-3"><div class="col-12"><h6 class="fw-bold mb-0">Voucher</h6><p class="mb-2"> Masukkan kode voucher dan dapatkan diskon </p></div><div class="col-12"><div class="input-group mb-3"><input class="form-control" placeholder="KODE"${ssrRenderAttr("value", unref(voucherCode).code)}><button class="btn btn-success"${ssrIncludeBooleanAttr(
          unref(voucherCode).code == "" || unref(voucherCode).loading
        ) ? " disabled" : ""}>`);
        if (!unref(voucherCode).loading) {
          _push(`<i class="lni lni-checkmark"></i>`);
        } else {
          _push(`<div class="spinner-border spinner-border-sm text-light" role="status"><span class="visually-hidden">Loading...</span></div>`);
        }
        _push(`</button></div>`);
        if (unref(voucherCode).loading) {
          _push(`<span class="small text-muted blink">Cek voucher...</span>`);
        } else {
          _push(`<!---->`);
        }
        if (voucher.value > 0) {
          _push(`<span class="small text-success">Mendapat potongan sebesar ${ssrInterpolate(unref(rupiah)(voucher.value))}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div class="row mb-3"><div class="col-12"><h6 class="fw-bold mb-0">Pembayaran</h6><p class="mb-2"> Pilih metode pembayaran yang kamu inginkan </p></div><div class="col-12"><ul class="list-group">`);
        if (paymentMethod.loading) {
          _push(`<li class="list-group-item small border-danger"><span class="small blink text-danger">Sedang memuat metode pembayaran...</span></li>`);
        } else {
          _push(`<!---->`);
        }
        if (!paymentMethod.loading && paymentMethod.data.length == 0) {
          _push(`<li class="list-group-item small border-danger small text-danger"> Metode pembayaran tidak ditemukan </li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul>`);
        if (!paymentMethod.loading && paymentMethod.data.length > 0) {
          _push(`<ul class="list-group"><!--[-->`);
          ssrRenderList(paymentMethod.data, (pm, ipm) => {
            _push(`<li class="list-group-item small"><a data-bs-toggle="collapse"${ssrRenderAttr("href", `#collapse-pm-${ipm}`)} role="button" aria-expanded="false"${ssrRenderAttr("aria-controls", `collapse-pm-${ipm}`)} class="text-decoration-none text-dark d-flex justify-content-between align-items-center">${ssrInterpolate(pm.Description)} <i class="lni lni-chevron-right"></i></a><div class="collapse pt-3"${ssrRenderAttr("id", `collapse-pm-${ipm}`)}>`);
            if (pm.Code != "va") {
              _push(`<div class="row"><!--[-->`);
              ssrRenderList(pm.PaymentMethod, (method, imethod) => {
                _push(`<div class="col-6 mb-3"><div class="${ssrRenderClass(`rounded text-center border py-2 ${paymentMethod.selected.paymentMethod == pm.Code && paymentMethod.selected.paymentChannel == method.Code ? "border-success" : ""}`)}"><div class="${ssrRenderClass(`h6 one-line fw-bold text-uppercase ${paymentMethod.selected.paymentMethod == pm.Code && paymentMethod.selected.paymentChannel == method.Code ? "text-success" : "opacity-25"}`)}">${ssrInterpolate(method.Code)}</div><span class="${ssrRenderClass(`small one-line ${paymentMethod.selected.paymentMethod == pm.Code && paymentMethod.selected.paymentChannel == method.Code ? "text-success" : "opacity-25"}`)}">${ssrInterpolate(method.Description)}</span></div></div>`);
              });
              _push(`<!--]--></div>`);
            } else {
              _push(`<div class="row"><!--[-->`);
              ssrRenderList(pm.Channels, (method, imethod) => {
                _push(`<div class="col-6 mb-3"><div class="${ssrRenderClass(`rounded text-center border py-2 ${paymentMethod.selected.paymentMethod == pm.Code && paymentMethod.selected.paymentChannel == method.Code ? "border-success" : ""}`)}"><div class="${ssrRenderClass(`h6 one-line fw-bold text-uppercase ${paymentMethod.selected.paymentMethod == pm.Code && paymentMethod.selected.paymentChannel == method.Code ? "text-success" : "opacity-25"}`)}">${ssrInterpolate(method.Code)}</div><span class="${ssrRenderClass(`small one-line ${paymentMethod.selected.paymentMethod == pm.Code && paymentMethod.selected.paymentChannel == method.Code ? "text-success" : "opacity-25"}`)}">${ssrInterpolate(method.Description)}</span></div></div>`);
              });
              _push(`<!--]--></div>`);
            }
            _push(`</div></li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="col-12 mt-3"><hr></div></div><div class="row"><div class="col-12 d-flex justify-content-between"><span class="small fw-bold">Metode Pembayaran</span>`);
        if (paymentMethod.selected.paymentMethod && paymentMethod.selected.paymentChannel) {
          _push(`<span class="small text-success text-uppercase">${ssrInterpolate(paymentMethod.selected.paymentMethod)}(${ssrInterpolate(paymentMethod.selected.paymentChannel)})</span>`);
        } else {
          _push(`<span class="small text-danger">Belum memilih</span>`);
        }
        _push(`</div><div class="col-12 d-flex justify-content-between"><span class="small fw-bold">Voucher</span><span class="small text-success">${ssrInterpolate(unref(rupiah)(voucher.value))}</span></div><div class="col-12 d-flex justify-content-between"><span class="small fw-bold">Ongkos Kirim </span><span class="small text-muted text-decoration-line-through">${ssrInterpolate(unref(rupiah)(total().shippingCost))}</span></div><div class="col-12 d-flex justify-content-between"><span class="small fw-bold">Total</span><span class="text-success fw-bold">${ssrInterpolate(unref(rupiah)(total().res))}</span></div><div class="col-12 mb-3 d-flex justify-content-between"><span class="small fw-bold">Hemat</span><span class="small text-muted text-decoration-line-through">${ssrInterpolate(unref(rupiah)(total().strikeRes))}</span></div><div class="col-12"><div class="d-grid"><button class="btn btn-success btn-sm"><i class="lni lni-postcard me-2"></i>Checkout </button></div></div></div></div></div></div>`);
      }
      _push(`</div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
