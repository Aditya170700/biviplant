import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass } from "vue/server-renderer";
import { Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { useAttrs } from "@vue/runtime-core";
import "@inertiajs/inertia";
import "@vue/reactivity";
import "lodash";
import "axios";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Index",
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
      _push(`<div class="page-content-wrapper"><div class="container"><div class="profile-wrapper-area py-3"><div class="card"><div class="card-body p-4"><div class="d-flex align-items-center justify-content-between mb-3"><span class="h6">Daftar Alamat</span>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("address.create"),
        class: "btn btn-sm btn-success"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-plus me-2"${_scopeId}></i>Tambah `);
          } else {
            return [
              createVNode("i", { class: "lni lni-plus me-2" }),
              createTextVNode("Tambah ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="row">`);
      if (unref(attrs).results.data.length < 1) {
        _push(`<div class="col-lg-12 py-2"><hr><div class="d-flex justify-content-center align-items-center mt-2"><span class="small">Belum ada alamat</span></div></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(attrs).results.data, (data, i) => {
          _push(`<div class="col-lg-12 py-2"><hr><div class="d-flex justify-content-between align-items-center mt-2"><span class="small">${ssrInterpolate(data.receiver)}</span><span>`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route(
              "address.edit",
              data.id
            ),
            class: "btn btn-sm btn-warning me-2 rounded-circle"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="lni lni-pencil"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "lni lni-pencil" })
                ];
              }
            }),
            _: 2
          }, _parent));
          if (data.is_primary) {
            _push(`<button class="${ssrRenderClass(`btn btn-sm btn-success rounded-circle`)}"><i class="lni lni-checkmark"></i></button>`);
          } else {
            _push(`<button class="${ssrRenderClass(`btn btn-sm btn-light rounded-circle`)}"><i class="lni lni-power-switch"></i></button>`);
          }
          _push(`</span></div><span class="d-block small">${ssrInterpolate(data.phone)}</span><span class="d-block small">${ssrInterpolate(data.detail)}</span><span class="d-block small">${ssrInterpolate(`${data.subdistrict.name}, ${data.subdistrict.city.name}, ${data.subdistrict.city.province.name}, ${data.postal_code}`)}</span></div>`);
        });
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Address/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
