import { unref, withCtx, createVNode, toDisplayString, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderStyle } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/inertia-vue3";
import { _ as _sfc_main$1 } from "./Header.945b33ac.mjs";
import { S as Sidebar } from "./Sidebar.0b33f38b.mjs";
import { _ as _sfc_main$2 } from "./Footer.b9d4becd.mjs";
import { ref } from "@vue/reactivity";
import { useAttrs } from "@vue/runtime-core";
import "@inertiajs/inertia";
import { d as dataURLtoFile } from "./utils.3a466e9c.mjs";
import { F as FormText, S as SpinnerProcessing } from "./SpinnerProcessing.d7cf9601.mjs";
import { C as Cropper } from "./upload-3.d826e72d.mjs";
import "lodash";
import "axios";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main = {
  __name: "Edit",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    let attrs = useAttrs();
    let form = useForm({
      id: attrs.user.id,
      name: attrs.user.name,
      email: attrs.user.email,
      role: attrs.user.role,
      phone: attrs.user.phone,
      password: "",
      password_confirmation: "",
      profile_photo_path: ""
    });
    const profile_photo_path = ref((_a = attrs.user.profile_photo_path_url) != null ? _a : "");
    const showCroper = ref(false);
    function cropSuccess(imgDataUrl, field) {
      form.profile_photo_path = dataURLtoFile(imgDataUrl);
      profile_photo_path.value = imgDataUrl;
    }
    function srcFileSet(fileName, fileType, fileSize) {
      setTimeout(() => {
        let preview = document.querySelector(".vicp-preview");
        preview.classList.add("d-none");
      }, 500);
    }
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
      _push(`<div class="page-content-wrapper"><form><div class="container"><div class="profile-wrapper-area py-3"><div class="card user-info-card"><div class="card-body p-4 d-flex align-items-center"><div class="user-profile me-3"><img${ssrRenderAttr("src", profile_photo_path.value)}${ssrRenderAttr("alt", unref(form).name)}>`);
      if (unref(attrs).errors.profile_photo_path) {
        _push(ssrRenderComponent(FormText, {
          id: "name",
          message: unref(attrs).errors.profile_photo_path
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="change-user-thumb">`);
      _push(ssrRenderComponent(unref(Cropper), {
        field: "img",
        langType: "en",
        onCropSuccess: cropSuccess,
        onSrcFileSet: srcFileSet,
        width: 200,
        height: 200,
        modelValue: showCroper.value,
        "onUpdate:modelValue": ($event) => showCroper.value = $event
      }, null, _parent));
      _push(`<a${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}><i class="lni lni-pencil"></i></a></div></div><div class="user-info"><p class="mb-0 text-dark">${ssrInterpolate(unref(form).role)}</p><h5 class="mb-0">${ssrInterpolate(unref(form).name)}</h5></div></div></div><div class="card user-data-card" style="${ssrRenderStyle({ "z-index": "0 !important" })}"><div class="card-body"><div class="row"><div class="col-12"><div class="mb-3"><div class="title mb-2"><i class="lni lni-user"></i><span>Nama Lengkap</span></div><input class="form-control" type="text"${ssrRenderAttr("value", unref(form).name)}>`);
      if (unref(attrs).errors.name) {
        _push(ssrRenderComponent(FormText, {
          id: "name",
          message: unref(attrs).errors.name
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-12"><div class="mb-3"><div class="title mb-2"><i class="lni lni-phone"></i><span>No Telepon</span></div><input class="form-control" type="text"${ssrRenderAttr("value", unref(form).phone)}>`);
      if (unref(attrs).errors.phone) {
        _push(ssrRenderComponent(FormText, {
          id: "phone",
          message: unref(attrs).errors.phone
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-12"><div class="mb-3"><div class="title mb-2"><i class="lni lni-envelope"></i><span>Alamat Email</span></div><input class="form-control" type="email"${ssrRenderAttr("value", unref(form).email)}>`);
      if (unref(attrs).errors.email) {
        _push(ssrRenderComponent(FormText, {
          id: "email",
          message: unref(attrs).errors.email
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-12"><div class="mb-3"><div class="title mb-2"><i class="lni lni-lock"></i><span>Password</span></div><input class="form-control" type="password"${ssrRenderAttr("value", unref(form).password)}>`);
      if (unref(attrs).errors.password) {
        _push(ssrRenderComponent(FormText, {
          id: "password",
          message: unref(attrs).errors.password
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-12"><div class="mb-3"><div class="title mb-2"><i class="lni lni-lock"></i><span>Konfirmasi Password</span></div><input class="form-control" type="password"${ssrRenderAttr(
        "value",
        unref(form).password_confirmation
      )}></div></div><div class="col-6 d-grid"><button class="btn btn-success"><div class="d-flex justify-content-center align-items-center">`);
      if (unref(form).processing) {
        _push(ssrRenderComponent(SpinnerProcessing, {
          color: "text-white",
          size: "sm",
          me: "me-2"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span><i class="lni lni-save me-2"></i>Simpan</span></div></button></div><div class="col-6 d-grid">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("profile.index"),
        class: "btn btn-outline-secondary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-arrow-left me-2"${_scopeId}></i>Kembali `);
          } else {
            return [
              createVNode("i", { class: "lni lni-arrow-left me-2" }),
              createTextVNode("Kembali ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></div></form></div><div class="internet-connection-status" id="internetStatus"></div>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
