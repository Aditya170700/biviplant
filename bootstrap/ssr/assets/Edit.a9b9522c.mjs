import { L as Layout } from "./App.6cf91a9e.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import { ref } from "@vue/reactivity";
import { d as dataURLtoFile } from "./utils.bec59827.mjs";
import { C as Cropper } from "./upload-3.d826e72d.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
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
  components: { Layout, Link, SpinnerProcessing, FormText, "crop": Cropper },
  props: {
    errors: Object,
    result: Object
  },
  setup(props) {
    const form = useForm(props.result);
    const banner = ref(props.result.path_url);
    const showCroper = ref(false);
    function submit() {
      let data = form.data();
      Inertia.post(
        route("admin.events.update", {
          id: props.result.id
        }),
        {
          _method: "put",
          ...data
        }
      );
    }
    function cropSuccess(imgDataUrl, field) {
      form.path = dataURLtoFile(imgDataUrl);
      banner.value = imgDataUrl;
    }
    return {
      form,
      submit,
      banner,
      cropSuccess,
      showCroper
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_crop = resolveComponent("crop");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Ubah Event",
    typeButton: "back",
    href: _ctx.route("admin.events.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="title" class="form-label"${_scopeId}>Judul</label><input class="form-control" id="title"${ssrRenderAttr("value", $setup.form.title)}${_scopeId}>`);
        if ($props.errors.title) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "title",
            message: $props.errors.title
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="sub_title" class="form-label"${_scopeId}>Sub Judul</label><input class="form-control" id="sub_title"${ssrRenderAttr("value", $setup.form.sub_title)}${_scopeId}>`);
        if ($props.errors.sub_title) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "sub_title",
            message: $props.errors.sub_title
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="banner" class="form-label"${_scopeId}>Banner</label>`);
        _push2(ssrRenderComponent(_component_crop, {
          field: "img",
          langType: "en",
          onCropSuccess: $setup.cropSuccess,
          width: 1200,
          height: 800,
          modelValue: $setup.showCroper,
          "onUpdate:modelValue": ($event) => $setup.showCroper = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-3"${_scopeId}><img class="img rounded fluid" alt=""${ssrRenderAttr("src", $setup.banner)} style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}></div><a class="btn btn-success btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}><i class="fas fa-upload me-2"${_scopeId}></i>Pilih</span></a>`);
        if ($setup.form.errors.path) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "banner",
            message: $setup.form.errors.path
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12"${_scopeId}><button class="btn btn-primary btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><div class="d-flex justify-content-center align-items-center"${_scopeId}>`);
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
                            for: "title",
                            class: "form-label"
                          }, "Judul"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "title",
                            "onUpdate:modelValue": ($event) => $setup.form.title = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.title]
                          ]),
                          $props.errors.title ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "title",
                            message: $props.errors.title
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "sub_title",
                            class: "form-label"
                          }, "Sub Judul"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "sub_title",
                            "onUpdate:modelValue": ($event) => $setup.form.sub_title = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.sub_title]
                          ]),
                          $props.errors.sub_title ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "sub_title",
                            message: $props.errors.sub_title
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "banner",
                            class: "form-label"
                          }, "Banner"),
                          createVNode(_component_crop, {
                            field: "img",
                            langType: "en",
                            onCropSuccess: $setup.cropSuccess,
                            width: 1200,
                            height: 800,
                            modelValue: $setup.showCroper,
                            "onUpdate:modelValue": ($event) => $setup.showCroper = $event
                          }, null, 8, ["onCropSuccess", "modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("img", {
                              class: "img rounded fluid",
                              alt: "",
                              src: $setup.banner,
                              style: { "width": "200px" }
                            }, null, 8, ["src"])
                          ]),
                          createVNode("a", {
                            onClick: ($event) => $setup.showCroper = true,
                            class: "btn btn-success btn-sm rounded-custom",
                            disabled: $setup.form.processing
                          }, [
                            createVNode("span", null, [
                              createVNode("i", { class: "fas fa-upload me-2" }),
                              createTextVNode("Pilih")
                            ])
                          ], 8, ["onClick", "disabled"]),
                          $setup.form.errors.path ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "banner",
                            message: $setup.form.errors.path
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Event/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
