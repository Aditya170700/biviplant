import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  components: {
    Link
  },
  setup() {
    const logout = () => {
      Inertia.post(route("logout"));
    };
    return {
      logout
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "offcanvas offcanvas-start suha-offcanvas-wrap",
    tabindex: "-1",
    id: "suhaOffcanvas",
    "aria-labelledby": "suhaOffcanvasLabel",
    style: { "background": "rgb(0, 184, 148) !important", "width": "250px !important" }
  }, _attrs))}><button class="btn-close btn-close-white text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"><i class="lni lni-close"></i></button><div class="offcanvas-body"><div class="sidenav-profile"><div class="user-profile"><img${ssrRenderAttr(
    "src",
    _ctx.$page.props.user ? _ctx.$page.props.user.profile_photo_path_url : "https://ui-avatars.com/api/?name=Guest&color=50D048&background=C0D276&size=500"
  )} alt=""></div><div class="user-info"><h6 class="user-name mb-1">${ssrInterpolate(_ctx.$page.props.user ? _ctx.$page.props.user.name : "Guest")}</h6>`);
  if (_ctx.$page.props.user) {
    _push(`<p class="available-balance"> Total balance $<span class="counter">583.67</span></p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if (_ctx.$page.props.user) {
    _push(`<ul class="sidenav-nav ps-0"><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("profile.index")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="lni lni-user"${_scopeId}></i>Profil Saya`);
        } else {
          return [
            createVNode("i", { class: "lni lni-user" }),
            createTextVNode("Profil Saya")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("address.index")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="lni lni-postcard"${_scopeId}></i>Alamat Pengiriman`);
        } else {
          return [
            createVNode("i", { class: "lni lni-postcard" }),
            createTextVNode("Alamat Pengiriman")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("orders.history")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="lni lni-package"${_scopeId}></i>Riwayat Pesanan`);
        } else {
          return [
            createVNode("i", { class: "lni lni-package" }),
            createTextVNode("Riwayat Pesanan")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("about_us")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa fa-building"${_scopeId}></i>Tentang Kami`);
        } else {
          return [
            createVNode("i", { class: "fa fa-building" }),
            createTextVNode("Tentang Kami")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("privacy_policy")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa fa-shield"${_scopeId}></i>Kebijakan &amp; Privasi`);
        } else {
          return [
            createVNode("i", { class: "fa fa-shield" }),
            createTextVNode("Kebijakan & Privasi")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li><a href="#"><i class="lni lni-power-switch"></i>Log Out</a></li></ul>`);
  } else {
    _push(`<ul class="sidenav-nav ps-0"><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("login")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="lni lni-power-switch"${_scopeId}></i>Login/Register`);
        } else {
          return [
            createVNode("i", { class: "lni lni-power-switch" }),
            createTextVNode("Login/Register")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("about_us")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa fa-building"${_scopeId}></i>Tentang Kami`);
        } else {
          return [
            createVNode("i", { class: "fa fa-building" }),
            createTextVNode("Tentang Kami")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li>`);
    _push(ssrRenderComponent(_component_Link, {
      href: _ctx.route("privacy_policy")
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fa fa-shield"${_scopeId}></i>Kebijakan &amp; Privasi`);
        } else {
          return [
            createVNode("i", { class: "fa fa-shield" }),
            createTextVNode("Kebijakan & Privasi")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul>`);
  }
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Homepage/Sidebar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Sidebar as S
};
