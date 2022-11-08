import { L as Layout } from "./App.be33ee16.mjs";
import { P as Pagination } from "./Pagination.65791fe2.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.d7cf9601.mjs";
import { ref } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";
import { d as dataURLtoFile } from "./utils.3a466e9c.mjs";
import { C as Cropper } from "./upload-3.d826e72d.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "mosha-vue-toastify";
/* empty css                 */import "moment";
const _sfc_main = {
  components: {
    Layout,
    Link,
    SpinnerProcessing,
    FormText,
    crop: Cropper,
    Pagination
  },
  props: {
    errors: Object,
    result: Object
  },
  setup(props) {
    const path = ref("");
    let previewImg = ref({
      name: "",
      src: "",
      description: "",
      id: ""
    });
    const showCroper = ref(false);
    const form = useForm({
      name: "",
      alt: "",
      description: "",
      path: "",
      ext: "",
      product_id: props.result.id
    });
    function cropSuccess(imgDataUrl, field) {
      form.path = dataURLtoFile(imgDataUrl);
      form.ext = imgDataUrl.split(";")[0].split("/")[1];
      path.value = imgDataUrl;
    }
    function submit() {
      form.transform((data) => ({
        ...data
      })).post(route("admin.products.files.store", props.result.id), {
        onSuccess: () => {
          form.reset("name", "alt", "description", "path");
          path.value = "";
        }
      });
    }
    function preview(image) {
      previewImg.value = image;
      let myModal = new bootstrap.Modal(
        document.getElementById("preview"),
        {
          keyboard: false
        }
      );
      myModal.show();
    }
    let destroy = (id) => {
      confirmation(
        "Tindakan ini akan menghapus data secara permanen"
      ).then((res) => {
        if (res) {
          Inertia.delete(
            route("admin.products.files.destroy", {
              id: props.result.id,
              fileId: id
            })
          );
        }
      });
    };
    return {
      form,
      showCroper,
      path,
      cropSuccess,
      submit,
      preview,
      previewImg,
      destroy
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_crop = resolveComponent("crop");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  const _component_Pagination = resolveComponent("Pagination");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Foto Produk",
    typeButton: "back",
    href: _ctx.route("admin.products.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-6 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="name" class="form-label"${_scopeId}>Nama</label><input class="form-control" id="name"${ssrRenderAttr("value", $setup.form.name)}${_scopeId}>`);
        if ($setup.form.errors.name) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "name",
            message: $setup.form.errors.name
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="alt" class="form-label"${_scopeId}>Nama Alternatif</label><input class="form-control" id="alt"${ssrRenderAttr("value", $setup.form.alt)}${_scopeId}>`);
        if ($setup.form.errors.alt) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "alt",
            message: $setup.form.errors.alt
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="description" class="form-label"${_scopeId}>Deskripsi</label><textarea class="form-control" id="description" rows="3"${_scopeId}>${ssrInterpolate($setup.form.description)}</textarea>`);
        if ($setup.form.errors.description) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "description",
            message: $setup.form.errors.description
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="path" class="form-label"${_scopeId}>Foto</label>`);
        _push2(ssrRenderComponent(_component_crop, {
          field: "img",
          langType: "en",
          onCropSuccess: $setup.cropSuccess,
          width: 500,
          height: 500,
          modelValue: $setup.showCroper,
          "onUpdate:modelValue": ($event) => $setup.showCroper = $event
        }, null, _parent2, _scopeId));
        _push2(`<div class="mb-3"${_scopeId}><img class="img rounded fluid" alt=""${ssrRenderAttr("src", $setup.path)} style="${ssrRenderStyle({ "width": "100px" })}"${_scopeId}></div><a class="btn btn-success btn-sm rounded-custom"${ssrIncludeBooleanAttr($setup.form.processing) ? " disabled" : ""}${_scopeId}><span${_scopeId}><i class="fas fa-upload me-2"${_scopeId}></i>Pilih</span></a>`);
        if ($setup.form.errors.path) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "path",
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
        _push2(`<span${_scopeId}><i class="fas fa-save me-2"${_scopeId}></i>Simpan</span></div></button></div></div></form></div></div></div><div class="col-md-6 grid-margin"${_scopeId}><div class="modal fade" id="preview" tabindex="-1" aria-labelledby="previewLabel" aria-hidden="true"${_scopeId}><div class="modal-dialog modal-sm"${_scopeId}><div class="modal-content rounded-custom"${_scopeId}><div class="modal-body"${_scopeId}><div class="d-flex justify-content-between align-items-center mb-3"${_scopeId}><div class="h5"${_scopeId}>${ssrInterpolate($setup.previewImg.name)}</div><button class="btn btn-sm rounded-custom btn-danger" data-bs-dismiss="modal" aria-label="Close"${_scopeId}><i class="fas fa-trash"${_scopeId}></i></button></div><div class="row"${_scopeId}><div class="col-lg-12 mb-3"${_scopeId}><img class="img rounded-custom fluid" alt=""${ssrRenderAttr("src", $setup.previewImg.src)} style="${ssrRenderStyle({ "width": "100%" })}"${_scopeId}></div><div class="col-lg-12 mb-3"${_scopeId}><p${_scopeId}>${ssrInterpolate($setup.previewImg.description)}</p></div></div></div></div></div></div><div class="card"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><!--[-->`);
        ssrRenderList($props.result.files.data, (image, i) => {
          _push2(`<div class="col-lg-3"${_scopeId}><div class="card bg-dark text-white"${_scopeId}><img${ssrRenderAttr("src", image.src)} class="card-img"${ssrRenderAttr("alt", image.alt)}${_scopeId}></div></div>`);
        });
        _push2(`<!--]--></div>`);
        _push2(ssrRenderComponent(_component_Pagination, {
          class: "mt-2",
          links: $props.result.files.links,
          from: $props.result.files.from,
          to: $props.result.files.to,
          total: $props.result.files.total
        }, null, _parent2, _scopeId));
        _push2(`</div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "row" }, [
            createVNode("div", { class: "col-md-6 grid-margin" }, [
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
                            onKeyup: _ctx.changeName
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
                            for: "alt",
                            class: "form-label"
                          }, "Nama Alternatif"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "alt",
                            "onUpdate:modelValue": ($event) => $setup.form.alt = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.alt]
                          ]),
                          $setup.form.errors.alt ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "alt",
                            message: $setup.form.errors.alt
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "description",
                            class: "form-label"
                          }, "Deskripsi"),
                          withDirectives(createVNode("textarea", {
                            class: "form-control",
                            id: "description",
                            rows: "3",
                            "onUpdate:modelValue": ($event) => $setup.form.description = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.description]
                          ]),
                          $setup.form.errors.description ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "description",
                            message: $setup.form.errors.description
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "path",
                            class: "form-label"
                          }, "Foto"),
                          createVNode(_component_crop, {
                            field: "img",
                            langType: "en",
                            onCropSuccess: $setup.cropSuccess,
                            width: 500,
                            height: 500,
                            modelValue: $setup.showCroper,
                            "onUpdate:modelValue": ($event) => $setup.showCroper = $event
                          }, null, 8, ["onCropSuccess", "modelValue", "onUpdate:modelValue"]),
                          createVNode("div", { class: "mb-3" }, [
                            createVNode("img", {
                              class: "img rounded fluid",
                              alt: "",
                              src: $setup.path,
                              style: { "width": "100px" }
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
                            id: "path",
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
            ]),
            createVNode("div", { class: "col-md-6 grid-margin" }, [
              createVNode("div", {
                class: "modal fade",
                id: "preview",
                tabindex: "-1",
                "aria-labelledby": "previewLabel",
                "aria-hidden": "true"
              }, [
                createVNode("div", { class: "modal-dialog modal-sm" }, [
                  createVNode("div", { class: "modal-content rounded-custom" }, [
                    createVNode("div", { class: "modal-body" }, [
                      createVNode("div", { class: "d-flex justify-content-between align-items-center mb-3" }, [
                        createVNode("div", { class: "h5" }, toDisplayString($setup.previewImg.name), 1),
                        createVNode("button", {
                          class: "btn btn-sm rounded-custom btn-danger",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Close",
                          onClick: ($event) => $setup.destroy($setup.previewImg.id)
                        }, [
                          createVNode("i", { class: "fas fa-trash" })
                        ], 8, ["onClick"])
                      ]),
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-lg-12 mb-3" }, [
                          createVNode("img", {
                            class: "img rounded-custom fluid",
                            alt: "",
                            src: $setup.previewImg.src,
                            style: { "width": "100%" }
                          }, null, 8, ["src"])
                        ]),
                        createVNode("div", { class: "col-lg-12 mb-3" }, [
                          createVNode("p", null, toDisplayString($setup.previewImg.description), 1)
                        ])
                      ])
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "card" }, [
                createVNode("div", { class: "card-body" }, [
                  createVNode("div", { class: "row" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList($props.result.files.data, (image, i) => {
                      return openBlock(), createBlock("div", {
                        class: "col-lg-3",
                        key: i
                      }, [
                        createVNode("div", { class: "card bg-dark text-white" }, [
                          createVNode("img", {
                            src: image.src,
                            class: "card-img",
                            alt: image.alt,
                            onClick: ($event) => $setup.preview(image)
                          }, null, 8, ["src", "alt", "onClick"])
                        ])
                      ]);
                    }), 128))
                  ]),
                  createVNode(_component_Pagination, {
                    class: "mt-2",
                    links: $props.result.files.links,
                    from: $props.result.files.from,
                    to: $props.result.files.to,
                    total: $props.result.files.total
                  }, null, 8, ["links", "from", "to", "total"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Product/File.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const File = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  File as default
};
