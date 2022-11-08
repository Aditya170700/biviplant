import { Inertia } from "@inertiajs/inertia";
import { Link, usePage } from "@inertiajs/inertia-vue3";
import { ref } from "@vue/reactivity";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, computed, ref as ref$1, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Sidebar_vue_vue_type_style_index_0_scoped_734997cb_lang = "";
const _sfc_main$2 = {
  components: {
    Link
  },
  props: {
    sidebar: String
  },
  setup(props, { emit }) {
    const colapse = ref(null);
    const logout = () => {
      Inertia.post(route("logout"));
    };
    const menuColapse = (e) => {
      let $parent = e.target.closest(".sidebar-item");
      let $child = $parent.querySelector(".submenu");
      $child.style.display === "none" ? $child.style.display = "block" : $child.style.display = "none";
    };
    const setSidebar = () => {
      emit("changeSidebar", "");
      sidebar.value = "";
      console.log(sidebar.value);
    };
    return {
      logout,
      setSidebar,
      colapse,
      menuColapse
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "sidebar",
    class: $props.sidebar
  }, _attrs))} data-v-734997cb><div class="sidebar-wrapper active" style="${ssrRenderStyle({ "z-index": "99999 !important" })}" data-v-734997cb><div class="sidebar-header position-relative" data-v-734997cb><div class="d-flex justify-content-between align-items-center" data-v-734997cb><div class="logo" data-v-734997cb><a href="index.html" data-v-734997cb><img src="/assets/images/logo/logo.svg" alt="Logo" srcset="" data-v-734997cb></a></div><div class="theme-toggle d-flex gap-2 align-items-center mt-2" data-v-734997cb><i class="fas fa-sun me-2" style="${ssrRenderStyle({ "font-size": "20px !important" })}" data-v-734997cb></i><div class="form-check form-switch fs-6" data-v-734997cb><input class="form-check-input me-0" type="checkbox" id="toggle-dark" data-v-734997cb><label class="form-check-label" data-v-734997cb></label></div><i class="fas fa-moon" style="${ssrRenderStyle({ "font-size": "20px !important" })}" data-v-734997cb></i></div><div class="sidebar-toggler x" data-v-734997cb><a href="#" class="sidebar-hide d-xl-none d-block" data-v-734997cb><i class="fas fa-xmark" data-v-734997cb></i></a></div></div></div><div class="sidebar-menu" data-v-734997cb><ul class="menu" data-v-734997cb><li class="${ssrRenderClass([
    "sidebar-item",
    _ctx.route().current().includes("admin.dashboard") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.dashboard"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-dashboard" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Dashboard</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-dashboard" }),
          createVNode("span", null, "Dashboard")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "sidebar-item",
    "has-sub",
    _ctx.route().current().includes("admin.categories") || _ctx.route().current().includes("admin.banners") || _ctx.route().current().includes("admin.users") || _ctx.route().current().includes("admin.events") || _ctx.route().current().includes("admin.vouchers") ? "active" : ""
  ])}" data-v-734997cb><a href="#" class="sidebar-link" data-v-734997cb><i class="fas fa-book" data-v-734997cb></i><span data-v-734997cb>Data Master</span></a><ul class="${ssrRenderClass([
    "submenu",
    "has-sub",
    _ctx.route().current().includes("admin") ? "active" : ""
  ])}" data-v-734997cb><li class="${ssrRenderClass([
    "submenu-item",
    _ctx.route().current().includes("admin.categories.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.categories.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-o" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Kategori</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-o" }),
          createVNode("span", null, "Kategori")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "submenu-item",
    _ctx.route().current().includes("admin.banners.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.banners.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-o" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Banner</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-o" }),
          createVNode("span", null, "Banner")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "submenu-item",
    _ctx.route().current().includes("admin.users.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.users.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-o" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Pengguna</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-o" }),
          createVNode("span", null, "Pengguna")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "submenu-item",
    _ctx.route().current().includes("admin.events.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.events.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-o" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Event</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-o" }),
          createVNode("span", null, "Event")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "submenu-item",
    _ctx.route().current().includes("admin.vouchers.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.vouchers.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-o" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Voucher</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-o" }),
          createVNode("span", null, "Voucher")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "submenu-item",
    _ctx.route().current().includes("admin.origins.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.origins.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-o" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Suplier</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-o" }),
          createVNode("span", null, "Suplier")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></li><li class="${ssrRenderClass([
    "sidebar-item",
    _ctx.route().current().includes("admin.products.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.products.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-cubes" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Produk</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-cubes" }),
          createVNode("span", null, "Produk")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="${ssrRenderClass([
    "sidebar-item",
    _ctx.route().current().includes("admin.orders.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.orders.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-cart-shopping" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Pesanan</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-cart-shopping" }),
          createVNode("span", null, "Pesanan")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="sidebar-title" data-v-734997cb>Lainnya</li><li class="${ssrRenderClass([
    "sidebar-item",
    _ctx.route().current().includes("admin.settings.") ? "active" : ""
  ])}" data-v-734997cb>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("admin.settings.index"),
    class: "sidebar-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<i class="fas fa-cog" data-v-734997cb${_scopeId}></i><span data-v-734997cb${_scopeId}>Pengaturan</span>`);
      } else {
        return [
          createVNode("i", { class: "fas fa-cog" }),
          createVNode("span", null, "Pengaturan")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="sidebar-item" data-v-734997cb><a href="#" class="sidebar-link" data-v-734997cb><i class="fas fa-power-off" data-v-734997cb></i><span data-v-734997cb>Keluar</span></a></li></ul></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Dashboard/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Sidebar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-734997cb"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(_attrs)}><div class="footer clearfix mb-0 text-muted"><div class="float-start"><p>2021 \xA9 Biviplant</p></div><div class="float-end"><p> Crafted with <span class="text-danger"><i class="bi bi-heart"></i></span> by <a href="https://sudutkampus.com">Sudutkampus</a></p></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Dashboard/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { Sidebar, Footer, Link },
  props: {
    title: {
      type: String,
      required: true
    },
    typeButton: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: false
    }
  },
  emits: ["changeSidebar"],
  setup() {
    computed(() => usePage().props.value);
    const sidebar2 = ref$1("active");
    const changeSidebar = (e) => {
      sidebar2.value = e;
    };
    const setSidebar = () => {
      if (sidebar2.value == "") {
        sidebar2.value = "active";
      } else {
        sidebar2.value = "";
      }
    };
    return {
      sidebar: sidebar2,
      setSidebar,
      changeSidebar
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Sidebar = resolveComponent("Sidebar");
  const _component_Link = resolveComponent("Link");
  const _component_Footer = resolveComponent("Footer");
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Sidebar, {
    sidebar: $setup.sidebar,
    onChangeSidebar: $setup.changeSidebar
  }, null, _parent));
  _push(`<div id="main"><header class="mb-3"><a href="#" class="burger-btn d-block"><i class="fas fa-bars"></i></a></header><div class="row"><div class="col-md-12"><div class="card"><div class="card-body"><div class="d-flex justify-content-between align-items-center fw-bold"><h3>${ssrInterpolate($props.title)}</h3>`);
  if ($props.typeButton == "back") {
    _push(ssrRenderComponent(_component_Link, {
      class: "btn btn-secondary btn-sm rounded-custom",
      href: $props.href
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fas fa-arrow-left me-2"${_scopeId}></i> Kembali `);
        } else {
          return [
            createVNode("i", { class: "fas fa-arrow-left me-2" }),
            createTextVNode(" Kembali ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  if ($props.typeButton == "create") {
    _push(ssrRenderComponent(_component_Link, {
      class: "btn btn-success btn-sm rounded-custom",
      href: $props.href
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<i class="fas fa-plus me-2"${_scopeId}></i> Tambah `);
        } else {
          return [
            createVNode("i", { class: "fas fa-plus me-2" }),
            createTextVNode(" Tambah ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div></div></div></div><div class="page-content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/Dashboard/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Layout as L
};
