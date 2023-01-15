import { L as Layout } from "./App.6cf91a9e.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import { ref } from "@vue/reactivity";
import { d as dataURLtoFile } from "./utils.bec59827.mjs";
import { C as Cropper } from "./upload-3.d826e72d.mjs";
import { QuillEditor } from "@vueup/vue-quill";
/* empty css                          */import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, vModelSelect, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "../ssr.mjs";
import "@vue/server-renderer";
import "process";
import "http";
import "qs";
import "vuex";
import "moment";
const _sfc_main = {
  components: {
    Layout,
    Link,
    SpinnerProcessing,
    FormText,
    crop: Cropper,
    QuillEditor
  },
  props: {
    errors: Object,
    result: Object
  },
  setup(props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N;
    const form = useForm({
      owner: (_b = (_a = props.result) == null ? void 0 : _a.owner) != null ? _b : "",
      meta_title: (_d = (_c = props.result) == null ? void 0 : _c.meta_title) != null ? _d : "",
      meta_description: (_f = (_e = props.result) == null ? void 0 : _e.meta_description) != null ? _f : "",
      meta_keyword: (_h = (_g = props.result) == null ? void 0 : _g.meta_keyword) != null ? _h : "",
      facebook: (_j = (_i = props.result) == null ? void 0 : _i.facebook) != null ? _j : "",
      ig: (_l = (_k = props.result) == null ? void 0 : _k.ig) != null ? _l : "",
      tiktok: (_n = (_m = props.result) == null ? void 0 : _m.tiktok) != null ? _n : "",
      email: (_p = (_o = props.result) == null ? void 0 : _o.email) != null ? _p : "",
      phone: (_r = (_q = props.result) == null ? void 0 : _q.phone) != null ? _r : "",
      about_us: (_t = (_s = props.result) == null ? void 0 : _s.about_us) != null ? _t : "",
      privacy_policy: (_v = (_u = props.result) == null ? void 0 : _u.privacy_policy) != null ? _v : "",
      logo: "",
      mail_mailer: (_x = (_w = props.result) == null ? void 0 : _w.mail_mailer) != null ? _x : "smtp",
      mail_host: (_z = (_y = props.result) == null ? void 0 : _y.mail_host) != null ? _z : "",
      mail_port: (_B = (_A = props.result) == null ? void 0 : _A.mail_port) != null ? _B : "",
      mail_username: (_D = (_C = props.result) == null ? void 0 : _C.mail_username) != null ? _D : "",
      mail_password: (_F = (_E = props.result) == null ? void 0 : _E.mail_password) != null ? _F : "",
      mail_encryption: (_H = (_G = props.result) == null ? void 0 : _G.mail_encryption) != null ? _H : "",
      mail_from_address: (_J = (_I = props.result) == null ? void 0 : _I.mail_from_address) != null ? _J : "",
      mail_from_name: (_L = (_K = props.result) == null ? void 0 : _K.mail_from_name) != null ? _L : ""
    });
    const logo = ref((_N = (_M = props.result) == null ? void 0 : _M.logo_url) != null ? _N : "");
    const showLogoCroper = ref(false);
    function submit() {
      form.transform((data) => ({
        ...data
      })).post(route("admin.settings.store"));
    }
    function cropLogoSuccess(imgDataUrl, field) {
      form.logo = dataURLtoFile(imgDataUrl);
      logo.value = imgDataUrl;
    }
    return {
      form,
      submit,
      logo,
      showLogoCroper,
      cropLogoSuccess
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_QuillEditor = resolveComponent("QuillEditor");
  const _component_crop = resolveComponent("crop");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Pengaturan",
    typeButton: "back",
    href: _ctx.route("admin.dashboard")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="owner" class="form-label"${_scopeId}>Owner</label><input class="form-control" id="owner"${ssrRenderAttr("value", $setup.form.owner)}${_scopeId}>`);
        if ($setup.form.errors.owner) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "owner",
            message: $setup.form.errors.owner
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="meta_title" class="form-label"${_scopeId}>Meta Title</label><input class="form-control" id="meta_title"${ssrRenderAttr("value", $setup.form.meta_title)}${_scopeId}>`);
        if ($setup.form.errors.meta_title) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "meta_title",
            message: $setup.form.errors.meta_title
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="meta_description" class="form-label"${_scopeId}>Meta Description</label><textarea class="form-control" id="meta_description" rows="3"${_scopeId}>${ssrInterpolate($setup.form.meta_description)}</textarea>`);
        if ($setup.form.errors.meta_description) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "meta_description",
            message: $setup.form.errors.meta_description
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="meta_keyword" class="form-label"${_scopeId}>Meta Keyword</label><textarea class="form-control" id="meta_keyword" rows="3"${_scopeId}>${ssrInterpolate($setup.form.meta_keyword)}</textarea>`);
        if ($setup.form.errors.meta_keyword) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "meta_keyword",
            message: $setup.form.errors.meta_keyword
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="email" class="form-label"${_scopeId}>Email</label><input class="form-control" id="email"${ssrRenderAttr("value", $setup.form.email)}${_scopeId}>`);
        if ($setup.form.errors.email) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "email",
            message: $setup.form.errors.email
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="phone" class="form-label"${_scopeId}>No HP</label><input class="form-control" id="phone"${ssrRenderAttr("value", $setup.form.phone)}${_scopeId}>`);
        if ($setup.form.errors.phone) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "phone",
            message: $setup.form.errors.phone
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-4 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="facebook" class="form-label"${_scopeId}>Facebook</label><input class="form-control" id="facebook"${ssrRenderAttr("value", $setup.form.facebook)}${_scopeId}>`);
        if ($setup.form.errors.facebook) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "facebook",
            message: $setup.form.errors.facebook
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-4 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="ig" class="form-label"${_scopeId}>Instagram</label><input class="form-control" id="ig"${ssrRenderAttr("value", $setup.form.ig)}${_scopeId}>`);
        if ($setup.form.errors.ig) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "ig",
            message: $setup.form.errors.ig
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-4 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="tiktok" class="form-label"${_scopeId}>Tiktok</label><input class="form-control" id="tiktok"${ssrRenderAttr("value", $setup.form.tiktok)}${_scopeId}>`);
        if ($setup.form.errors.tiktok) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "tiktok",
            message: $setup.form.errors.tiktok
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="about_us" class="form-label"${_scopeId}>Tentang Kami</label>`);
        _push2(ssrRenderComponent(_component_QuillEditor, {
          theme: "snow",
          content: $setup.form.about_us,
          "onUpdate:content": ($event) => $setup.form.about_us = $event,
          contentType: "html",
          style: { "height": "100px" }
        }, null, _parent2, _scopeId));
        if ($setup.form.errors.about_us) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "about_us",
            message: $setup.form.errors.about_us
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="privacy_policy" class="form-label"${_scopeId}>Kebijakan Privasi</label>`);
        _push2(ssrRenderComponent(_component_QuillEditor, {
          theme: "snow",
          content: $setup.form.privacy_policy,
          "onUpdate:content": ($event) => $setup.form.privacy_policy = $event,
          contentType: "html",
          style: { "height": "100px" }
        }, null, _parent2, _scopeId));
        if ($setup.form.errors.privacy_policy) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "privacy_policy",
            message: $setup.form.errors.privacy_policy
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="logo" class="form-label"${_scopeId}>Logo</label>`);
        _push2(ssrRenderComponent(_component_crop, {
          field: "img",
          langType: "en",
          onCropSuccess: $setup.cropLogoSuccess,
          width: 100,
          height: 100,
          modelValue: $setup.showLogoCroper,
          "onUpdate:modelValue": ($event) => $setup.showLogoCroper = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-3"${_scopeId}><img class="img rounded fluid" alt=""${ssrRenderAttr("src", $setup.logo)} style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}></div><a class="btn btn-success btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}><i class="fas fa-upload me-2"${_scopeId}></i>Pilih</span></a>`);
        if ($setup.form.errors.logo) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "logo",
            message: $setup.form.errors.logo
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_mailer" class="form-label"${_scopeId}>Protokol Mail Server</label><select class="form-select" aria-label="Default select example"${_scopeId}><option value=""${_scopeId}>Pilih</option><option value="smtp"${_scopeId}>SMTP</option><option value="imap"${_scopeId}>IMAP</option><option value="pop3"${_scopeId}>POP3</option></select>`);
        if ($setup.form.errors.mail_mailer) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_mailer",
            message: $setup.form.errors.mail_mailer
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_host" class="form-label"${_scopeId}>Host</label><input class="form-control" id="mail_host"${ssrRenderAttr("value", $setup.form.mail_host)}${_scopeId}>`);
        if ($setup.form.errors.mail_host) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_host",
            message: $setup.form.errors.mail_host
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_port" class="form-label"${_scopeId}>Port</label><input class="form-control" id="mail_port"${ssrRenderAttr("value", $setup.form.mail_port)}${_scopeId}>`);
        if ($setup.form.errors.mail_port) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_port",
            message: $setup.form.errors.mail_port
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_username" class="form-label"${_scopeId}>Username</label><input class="form-control" id="mail_username"${ssrRenderAttr("value", $setup.form.mail_username)}${_scopeId}>`);
        if ($setup.form.errors.mail_username) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_username",
            message: $setup.form.errors.mail_username
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_password" class="form-label"${_scopeId}>Password</label><input class="form-control" id="mail_password"${ssrRenderAttr("value", $setup.form.mail_password)}${_scopeId}>`);
        if ($setup.form.errors.mail_password) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_password",
            message: $setup.form.errors.mail_password
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_encryption" class="form-label"${_scopeId}>Encryption</label><select class="form-select" aria-label="Default select example"${_scopeId}><option value=""${_scopeId}>Pilih</option><option value="ssl"${_scopeId}>SSL</option><option value="tls"${_scopeId}>TLS</option></select>`);
        if ($setup.form.errors.mail_encryption) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_encryption",
            message: $setup.form.errors.mail_encryption
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_from_address" class="form-label"${_scopeId}>Mail From Address</label><input class="form-control" id="mail_from_address"${ssrRenderAttr("value", $setup.form.mail_from_address)}${_scopeId}>`);
        if ($setup.form.errors.mail_from_address) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_from_address",
            message: $setup.form.errors.mail_from_address
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="mail_from_name" class="form-label"${_scopeId}>Mail From Name</label><input class="form-control" id="mail_from_name"${ssrRenderAttr("value", $setup.form.mail_from_name)}${_scopeId}>`);
        if ($setup.form.errors.mail_from_name) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "mail_from_name",
            message: $setup.form.errors.mail_from_name
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div></div><div class="row"${_scopeId}><div class="col-lg-12"${_scopeId}><button class="btn btn-primary btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><div class="d-flex justify-content-center align-items-center"${_scopeId}>`);
        if ($setup.form.processing) {
          _push2(ssrRenderComponent(_component_SpinnerProcessing, {
            color: "text-white",
            size: "sm",
            me: "me-2"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span${_scopeId}><i class="fas fa-save me-2"${_scopeId}></i>Simpan</span></div></button></div></div></form></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-12 grid-margin" }, [
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("form", {
                    onSubmit: withModifiers($setup.submit, ["prevent"])
                  }, [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "owner",
                            class: "form-label"
                          }, "Owner"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "owner",
                            "onUpdate:modelValue": ($event) => $setup.form.owner = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.owner]
                          ]),
                          $setup.form.errors.owner ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "owner",
                            message: $setup.form.errors.owner
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "meta_title",
                            class: "form-label"
                          }, "Meta Title"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "meta_title",
                            "onUpdate:modelValue": ($event) => $setup.form.meta_title = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.meta_title]
                          ]),
                          $setup.form.errors.meta_title ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "meta_title",
                            message: $setup.form.errors.meta_title
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "meta_description",
                            class: "form-label"
                          }, "Meta Description"),
                          withDirectives(createVNode("textarea", {
                            class: "form-control",
                            id: "meta_description",
                            rows: "3",
                            "onUpdate:modelValue": ($event) => $setup.form.meta_description = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.meta_description]
                          ]),
                          $setup.form.errors.meta_description ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "meta_description",
                            message: $setup.form.errors.meta_description
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "meta_keyword",
                            class: "form-label"
                          }, "Meta Keyword"),
                          withDirectives(createVNode("textarea", {
                            class: "form-control",
                            id: "meta_keyword",
                            rows: "3",
                            "onUpdate:modelValue": ($event) => $setup.form.meta_keyword = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.meta_keyword]
                          ]),
                          $setup.form.errors.meta_keyword ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "meta_keyword",
                            message: $setup.form.errors.meta_keyword
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "email",
                            class: "form-label"
                          }, "Email"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "email",
                            "onUpdate:modelValue": ($event) => $setup.form.email = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.email]
                          ]),
                          $setup.form.errors.email ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "email",
                            message: $setup.form.errors.email
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "phone",
                            class: "form-label"
                          }, "No HP"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "phone",
                            "onUpdate:modelValue": ($event) => $setup.form.phone = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.phone]
                          ]),
                          $setup.form.errors.phone ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "phone",
                            message: $setup.form.errors.phone
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-4 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "facebook",
                            class: "form-label"
                          }, "Facebook"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "facebook",
                            "onUpdate:modelValue": ($event) => $setup.form.facebook = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.facebook]
                          ]),
                          $setup.form.errors.facebook ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "facebook",
                            message: $setup.form.errors.facebook
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-4 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "ig",
                            class: "form-label"
                          }, "Instagram"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "ig",
                            "onUpdate:modelValue": ($event) => $setup.form.ig = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.ig]
                          ]),
                          $setup.form.errors.ig ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "ig",
                            message: $setup.form.errors.ig
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-4 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "tiktok",
                            class: "form-label"
                          }, "Tiktok"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "tiktok",
                            "onUpdate:modelValue": ($event) => $setup.form.tiktok = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.tiktok]
                          ]),
                          $setup.form.errors.tiktok ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "tiktok",
                            message: $setup.form.errors.tiktok
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "about_us",
                            class: "form-label"
                          }, "Tentang Kami"),
                          createVNode(_component_QuillEditor, {
                            theme: "snow",
                            content: $setup.form.about_us,
                            "onUpdate:content": ($event) => $setup.form.about_us = $event,
                            contentType: "html",
                            style: { "height": "100px" }
                          }, null, 8, ["content", "onUpdate:content"]),
                          $setup.form.errors.about_us ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "about_us",
                            message: $setup.form.errors.about_us
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "privacy_policy",
                            class: "form-label"
                          }, "Kebijakan Privasi"),
                          createVNode(_component_QuillEditor, {
                            theme: "snow",
                            content: $setup.form.privacy_policy,
                            "onUpdate:content": ($event) => $setup.form.privacy_policy = $event,
                            contentType: "html",
                            style: { "height": "100px" }
                          }, null, 8, ["content", "onUpdate:content"]),
                          $setup.form.errors.privacy_policy ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "privacy_policy",
                            message: $setup.form.errors.privacy_policy
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "logo",
                            class: "form-label"
                          }, "Logo"),
                          createVNode(_component_crop, {
                            field: "img",
                            langType: "en",
                            onCropSuccess: $setup.cropLogoSuccess,
                            width: 100,
                            height: 100,
                            modelValue: $setup.showLogoCroper,
                            "onUpdate:modelValue": ($event) => $setup.showLogoCroper = $event
                          }, null, 8, ["onCropSuccess", "modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("img", {
                              class: "img rounded fluid",
                              alt: "",
                              src: $setup.logo,
                              style: { "width": "100px" }
                            }, null, 8, ["src"])
                          ]),
                          createVNode("a", {
                            onClick: ($event) => $setup.showLogoCroper = true,
                            class: "btn btn-success btn-sm rounded-custom",
                            disabled: $setup.form.processing
                          }, [
                            createVNode("span", null, [
                              createVNode("i", { class: "fas fa-upload me-2" }),
                              createTextVNode("Pilih")
                            ])
                          ], 8, ["onClick", "disabled"]),
                          $setup.form.errors.logo ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "logo",
                            message: $setup.form.errors.logo
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_mailer",
                            class: "form-label"
                          }, "Protokol Mail Server"),
                          withDirectives(createVNode("select", {
                            class: "form-select",
                            "aria-label": "Default select example",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_mailer = $event
                          }, [
                            createVNode("option", { value: "" }, "Pilih"),
                            createVNode("option", { value: "smtp" }, "SMTP"),
                            createVNode("option", { value: "imap" }, "IMAP"),
                            createVNode("option", { value: "pop3" }, "POP3")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, $setup.form.mail_mailer]
                          ]),
                          $setup.form.errors.mail_mailer ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_mailer",
                            message: $setup.form.errors.mail_mailer
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_host",
                            class: "form-label"
                          }, "Host"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "mail_host",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_host = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.mail_host]
                          ]),
                          $setup.form.errors.mail_host ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_host",
                            message: $setup.form.errors.mail_host
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_port",
                            class: "form-label"
                          }, "Port"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "mail_port",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_port = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.mail_port]
                          ]),
                          $setup.form.errors.mail_port ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_port",
                            message: $setup.form.errors.mail_port
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_username",
                            class: "form-label"
                          }, "Username"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "mail_username",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_username = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.mail_username]
                          ]),
                          $setup.form.errors.mail_username ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_username",
                            message: $setup.form.errors.mail_username
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_password",
                            class: "form-label"
                          }, "Password"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "mail_password",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_password = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.mail_password]
                          ]),
                          $setup.form.errors.mail_password ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_password",
                            message: $setup.form.errors.mail_password
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_encryption",
                            class: "form-label"
                          }, "Encryption"),
                          withDirectives(createVNode("select", {
                            class: "form-select",
                            "aria-label": "Default select example",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_encryption = $event
                          }, [
                            createVNode("option", { value: "" }, "Pilih"),
                            createVNode("option", { value: "ssl" }, "SSL"),
                            createVNode("option", { value: "tls" }, "TLS")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, $setup.form.mail_encryption]
                          ]),
                          $setup.form.errors.mail_encryption ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_encryption",
                            message: $setup.form.errors.mail_encryption
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_from_address",
                            class: "form-label"
                          }, "Mail From Address"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "mail_from_address",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_from_address = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.mail_from_address]
                          ]),
                          $setup.form.errors.mail_from_address ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_from_address",
                            message: $setup.form.errors.mail_from_address
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "mail_from_name",
                            class: "form-label"
                          }, "Mail From Name"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "mail_from_name",
                            "onUpdate:modelValue": ($event) => $setup.form.mail_from_name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.mail_from_name]
                          ]),
                          $setup.form.errors.mail_from_name ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "mail_from_name",
                            message: $setup.form.errors.mail_from_name
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "col-lg-12" }, [
                        createVNode("button", {
                          class: "btn btn-primary btn-sm rounded-custom",
                          disabled: $setup.form.processing
                        }, [
                          createVNode("div", { class: "d-flex justify-content-center align-items-center" }, [
                            $setup.form.processing ? (openBlock(), createBlock(_component_SpinnerProcessing, {
                              key: 0,
                              color: "text-white",
                              size: "sm",
                              me: "me-2"
                            })) : createCommentVNode("", true),
                            createVNode("span", null, [
                              createVNode("i", { class: "fas fa-save me-2" }),
                              createTextVNode("Simpan")
                            ])
                          ])
                        ], 8, ["disabled"])
                      ])
                    ])
                  ], 40, ["onSubmit"])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Setting.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Setting = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Setting as default
};
