import { L as Layout } from "./App.6cf91a9e.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import { ref } from "@vue/reactivity";
import { i as imageReader } from "./utils.bec59827.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "../ssr.mjs";
import "@vue/server-renderer";
import "process";
import "http";
import "qs";
import "vuex";
import "moment";
const _sfc_main = {
  components: { Layout, Link, SpinnerProcessing, FormText },
  props: {
    errors: Object,
    result: Object
  },
  setup(props) {
    const form = useForm({
      ...props.result,
      photo: "",
      password: "",
      password_confirmation: ""
    });
    const photo = ref(props.result.profile_photo_path_url);
    function submit() {
      let data = form.data();
      Inertia.post(
        route("admin.users.update", {
          id: props.result.id
        }),
        {
          _method: "put",
          ...data
        }
      );
    }
    const setPhoto = (e) => {
      imageReader(form.photo, photo);
    };
    return {
      form,
      submit,
      setPhoto,
      photo
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Ubah Pengguna",
    typeButton: "back",
    href: _ctx.route("admin.users.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="name" class="form-label"${_scopeId}>Nama</label><input class="form-control" id="name"${ssrRenderAttr("value", $setup.form.name)}${_scopeId}>`);
        if ($props.errors.name) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "name",
            message: $props.errors.name
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><label for="role" class="form-label"${_scopeId}>Role</label><select class="form-control mb-3" id="role"${_scopeId}><option value="admin"${_scopeId}>Admin</option><option value="customer"${_scopeId}> Customer </option></select>`);
        if ($props.errors.role) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "role",
            message: $props.errors.role
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="email" class="form-label"${_scopeId}>E-Mail</label><input class="form-control" id="email"${ssrRenderAttr("value", $setup.form.email)}${_scopeId}>`);
        if ($props.errors.email) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "email",
            message: $props.errors.email
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="phone" class="form-label"${_scopeId}>No Telepon</label><input class="form-control" id="phone"${ssrRenderAttr("value", $setup.form.phone)}${_scopeId}>`);
        if ($props.errors.phone) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "phone",
            message: $props.errors.phone
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="password" class="form-label"${_scopeId}>Password</label><input class="form-control" id="password"${ssrRenderAttr("value", $setup.form.password)}${_scopeId}>`);
        if ($props.errors.password) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "password",
            message: $props.errors.password
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="password_confirmation" class="form-label"${_scopeId}>Konfirmasi Password</label><input class="form-control" id="password_confirmation"${ssrRenderAttr("value", $setup.form.password_confirmation)}${_scopeId}>`);
        if ($props.errors.password_confirmation) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "password_confirmation",
            message: $props.errors.password_confirmation
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="photo" class="form-label"${_scopeId}>Foto Profil</label><div class="mb-3"${_scopeId}><img class="img rounded fluid" alt=""${ssrRenderAttr("src", $setup.photo)} style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}></div><input type="file" class="form-control" id="photo"${_scopeId}>`);
        if ($props.errors.photo) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "photo",
            message: $props.errors.photo
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12"${_scopeId}><button class="btn btn-primary btn-sm"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><div class="d-flex justify-content-center align-items-center"${_scopeId}>`);
        if ($setup.form.processing) {
          _push2(ssrRenderComponent(_component_SpinnerProcessing, {
            color: "text-white",
            size: "sm",
            me: "me-2"
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`<span${_scopeId}><i class="fas fa-save me-2"${_scopeId}></i>Save</span></div></button></div></div></form></div></div></div></div>`);
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
                            for: "name",
                            class: "form-label"
                          }, "Nama"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "name",
                            "onUpdate:modelValue": ($event) => $setup.form.name = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.name]
                          ]),
                          $props.errors.name ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "name",
                            message: $props.errors.name
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("label", {
                          for: "role",
                          class: "form-label"
                        }, "Role"),
                        withDirectives(createVNode("select", {
                          class: "form-control mb-3",
                          "onUpdate:modelValue": ($event) => $setup.form.role = $event,
                          id: "role"
                        }, [
                          createVNode("option", { value: "admin" }, "Admin"),
                          createVNode("option", { value: "customer" }, " Customer ")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, $setup.form.role]
                        ]),
                        $props.errors.role ? (openBlock(), createBlock(_component_FormText, {
                          key: 0,
                          id: "role",
                          message: $props.errors.role
                        }, null, 8, ["message"])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "email",
                            class: "form-label"
                          }, "E-Mail"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "email",
                            "onUpdate:modelValue": ($event) => $setup.form.email = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.email]
                          ]),
                          $props.errors.email ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "email",
                            message: $props.errors.email
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "phone",
                            class: "form-label"
                          }, "No Telepon"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "phone",
                            "onUpdate:modelValue": ($event) => $setup.form.phone = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.phone]
                          ]),
                          $props.errors.phone ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "phone",
                            message: $props.errors.phone
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "password",
                            class: "form-label"
                          }, "Password"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "password",
                            "onUpdate:modelValue": ($event) => $setup.form.password = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.password]
                          ]),
                          $props.errors.password ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "password",
                            message: $props.errors.password
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "password_confirmation",
                            class: "form-label"
                          }, "Konfirmasi Password"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "password_confirmation",
                            "onUpdate:modelValue": ($event) => $setup.form.password_confirmation = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.password_confirmation]
                          ]),
                          $props.errors.password_confirmation ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "password_confirmation",
                            message: $props.errors.password_confirmation
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "photo",
                            class: "form-label"
                          }, "Foto Profil"),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("img", {
                              class: "img rounded fluid",
                              alt: "",
                              src: $setup.photo,
                              style: { "width": "200px" }
                            }, null, 8, ["src"])
                          ]),
                          createVNode("input", {
                            type: "file",
                            class: "form-control",
                            id: "photo",
                            onChange: $setup.setPhoto,
                            onInput: ($event) => $setup.form.photo = $event.target.files[0]
                          }, null, 40, ["onChange", "onInput"]),
                          $props.errors.photo ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "photo",
                            message: $props.errors.photo
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12" }, [
                        createVNode("button", {
                          class: "btn btn-primary btn-sm",
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
                              createTextVNode("Save")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/User/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
