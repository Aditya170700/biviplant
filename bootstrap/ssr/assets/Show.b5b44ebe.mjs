import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { useAttrs } from "@vue/runtime-core";
import "@vue/reactivity";
import "lodash";
import "axios";
import "@inertiajs/inertia";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Show",
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
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card user-info-card"><div class="card-body p-4 d-flex align-items-center"><div class="user-profile me-3"><img${ssrRenderAttr("src", unref(attrs).user.profile_photo_path_url)}${ssrRenderAttr("alt", unref(attrs).user.name)}></div><div class="user-info"><p class="mb-0 text-uppercase">${ssrInterpolate(unref(attrs).user.role)}</p><h5 class="mb-0">${ssrInterpolate(unref(attrs).user.name)}</h5></div></div></div><div class="card user-data-card"><div class="card-body"><div class="single-profile-data d-flex align-items-center justify-content-between"><div class="title d-flex align-items-center"><i class="lni lni-user"></i><span>Nama Lengkap</span></div><div class="data-content">${ssrInterpolate(unref(attrs).user.name)}</div></div><div class="single-profile-data d-flex align-items-center justify-content-between"><div class="title d-flex align-items-center"><i class="lni lni-phone"></i><span>No Telepon</span></div><div class="data-content">${ssrInterpolate(unref(attrs).user.phone)}</div></div><div class="single-profile-data d-flex align-items-center justify-content-between"><div class="title d-flex align-items-center"><i class="lni lni-envelope"></i><span>Alamat Email</span></div><div class="data-content">${ssrInterpolate(unref(attrs).user.email)}</div></div><div class="edit-profile-btn mt-3">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "btn btn-info w-100",
        href: _ctx.route("profile.edit")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-pencil me-2"${_scopeId}></i>Ubah`);
          } else {
            return [
              createVNode("i", { class: "lni lni-pencil me-2" }),
              createTextVNode("Ubah")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
