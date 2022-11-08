import { L as Layout } from "./App.be33ee16.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.d7cf9601.mjs";
import { i as imageReader, d as dataURLtoFile, s as slugify } from "./utils.3a466e9c.mjs";
import { ref } from "@vue/reactivity";
import { C as Cropper } from "./upload-3.d826e72d.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@inertiajs/inertia";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main = {
  components: { Layout, Link, SpinnerProcessing, FormText, crop: Cropper },
  props: {
    errors: Object
  },
  setup() {
    const form = useForm({
      name: "",
      slug: "",
      meta_title: "",
      meta_description: "",
      meta_keyword: "",
      banner: "",
      icon: ""
    });
    const banner = ref("");
    const showBannerCroper = ref(false);
    const icon = ref("");
    const showIconCroper = ref(false);
    function submit() {
      form.transform((data) => ({
        ...data
      })).post(route("admin.categories.store"));
    }
    const setBanner = (e) => {
      imageReader(form.banner, banner);
    };
    const setIcon = (e) => {
      imageReader(form.icon, icon);
    };
    function cropBannerSuccess(imgDataUrl, field) {
      form.banner = dataURLtoFile(imgDataUrl);
      banner.value = imgDataUrl;
    }
    function cropIconSuccess(imgDataUrl, field) {
      form.icon = dataURLtoFile(imgDataUrl);
      icon.value = imgDataUrl;
    }
    function changeName() {
      form.slug = slugify(form.name);
    }
    return {
      form,
      submit,
      setBanner,
      setIcon,
      changeName,
      banner,
      showBannerCroper,
      cropBannerSuccess,
      icon,
      showIconCroper,
      cropIconSuccess
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_crop = resolveComponent("crop");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Tambah Kategori",
    typeButton: "back",
    href: _ctx.route("admin.categories.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="name" class="form-label"${_scopeId}>Nama</label><input class="form-control" id="name"${ssrRenderAttr("value", $setup.form.name)}${_scopeId}>`);
        if ($setup.form.errors.name) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "name",
            message: $setup.form.errors.name
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="slug" class="form-label"${_scopeId}>Slug</label><input class="form-control" id="slug"${ssrRenderAttr("value", $setup.form.slug)}${_scopeId}>`);
        if ($setup.form.errors.slug) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "slug",
            message: $setup.form.errors.slug
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
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="banner" class="form-label"${_scopeId}>Banner</label>`);
        _push2(ssrRenderComponent(_component_crop, {
          field: "img",
          langType: "en",
          onCropSuccess: $setup.cropBannerSuccess,
          width: 744,
          height: 300,
          modelValue: $setup.showBannerCroper,
          "onUpdate:modelValue": ($event) => $setup.showBannerCroper = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-3"${_scopeId}><img class="img rounded fluid" alt=""${ssrRenderAttr("src", $setup.banner)} style="${ssrRenderStyle({ "width": "200px" })}"${_scopeId}></div><a class="btn btn-success btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}><i class="fas fa-upload me-2"${_scopeId}></i>Pilih</span></a>`);
        if ($setup.form.errors.banner) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "banner",
            message: $setup.form.errors.banner
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="icon" class="form-label"${_scopeId}>Ikon</label>`);
        _push2(ssrRenderComponent(_component_crop, {
          field: "img",
          langType: "en",
          onCropSuccess: $setup.cropIconSuccess,
          width: 50,
          height: 50,
          modelValue: $setup.showIconCroper,
          "onUpdate:modelValue": ($event) => $setup.showIconCroper = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-3"${_scopeId}><img class="img rounded fluid" alt=""${ssrRenderAttr("src", $setup.icon)} style="${ssrRenderStyle({ "width": "50px" })}"${_scopeId}></div><a class="btn btn-success btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}><i class="fas fa-upload me-2"${_scopeId}></i>Pilih</span></a>`);
        if ($setup.form.errors.icon) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "icon",
            message: $setup.form.errors.icon
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
                            for: "name",
                            class: "form-label"
                          }, "Nama"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "name",
                            "onUpdate:modelValue": ($event) => $setup.form.name = $event,
                            onKeyup: $setup.changeName
                          }, null, 40, ["onUpdate:modelValue", "onKeyup"]), [
                            [vModelText, $setup.form.name]
                          ]),
                          $setup.form.errors.name ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "name",
                            message: $setup.form.errors.name
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "slug",
                            class: "form-label"
                          }, "Slug"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "slug",
                            "onUpdate:modelValue": ($event) => $setup.form.slug = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.slug]
                          ]),
                          $setup.form.errors.slug ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "slug",
                            message: $setup.form.errors.slug
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
                            for: "banner",
                            class: "form-label"
                          }, "Banner"),
                          createVNode(_component_crop, {
                            field: "img",
                            langType: "en",
                            onCropSuccess: $setup.cropBannerSuccess,
                            width: 744,
                            height: 300,
                            modelValue: $setup.showBannerCroper,
                            "onUpdate:modelValue": ($event) => $setup.showBannerCroper = $event
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
                            onClick: ($event) => $setup.showBannerCroper = true,
                            class: "btn btn-success btn-sm rounded-custom",
                            disabled: $setup.form.processing
                          }, [
                            createVNode("span", null, [
                              createVNode("i", { class: "fas fa-upload me-2" }),
                              createTextVNode("Pilih")
                            ])
                          ], 8, ["onClick", "disabled"]),
                          $setup.form.errors.banner ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "banner",
                            message: $setup.form.errors.banner
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "icon",
                            class: "form-label"
                          }, "Ikon"),
                          createVNode(_component_crop, {
                            field: "img",
                            langType: "en",
                            onCropSuccess: $setup.cropIconSuccess,
                            width: 50,
                            height: 50,
                            modelValue: $setup.showIconCroper,
                            "onUpdate:modelValue": ($event) => $setup.showIconCroper = $event
                          }, null, 8, ["onCropSuccess", "modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("img", {
                              class: "img rounded fluid",
                              alt: "",
                              src: $setup.icon,
                              style: { "width": "50px" }
                            }, null, 8, ["src"])
                          ]),
                          createVNode("a", {
                            onClick: ($event) => $setup.showIconCroper = true,
                            class: "btn btn-success btn-sm rounded-custom",
                            disabled: $setup.form.processing
                          }, [
                            createVNode("span", null, [
                              createVNode("i", { class: "fas fa-upload me-2" }),
                              createTextVNode("Pilih")
                            ])
                          ], 8, ["onClick", "disabled"]),
                          $setup.form.errors.icon ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "icon",
                            message: $setup.form.errors.icon
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Category/Create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Create as default
};
