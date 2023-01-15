import { L as Layout } from "./App.6cf91a9e.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import { s as slugify } from "./utils.bec59827.mjs";
import { Inertia } from "@inertiajs/inertia";
import { C as CurrencyInput } from "./CurrencyInput.ed129baf.mjs";
import { QuillEditor } from "@vueup/vue-quill";
/* empty css                          */import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, toDisplayString, vModelSelect, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@vue/reactivity";
import "../ssr.mjs";
import "@vue/server-renderer";
import "process";
import "http";
import "qs";
import "vuex";
import "moment";
import "vue-currency-input";
const _sfc_main = {
  components: {
    Layout,
    Link,
    SpinnerProcessing,
    FormText,
    CurrencyInput,
    QuillEditor
  },
  props: {
    errors: Object,
    categories: Array,
    product_conditions: Array,
    result: Object
  },
  setup(props) {
    const form = useForm({
      ...props.result
    });
    function changeName() {
      form.slug = slugify(form.name);
    }
    function submit() {
      let data = form.data();
      Inertia.post(
        route("admin.products.update", {
          id: props.result.id
        }),
        {
          _method: "put",
          ...data
        }
      );
    }
    return {
      form,
      changeName,
      submit
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_QuillEditor = resolveComponent("QuillEditor");
  const _component_CurrencyInput = resolveComponent("CurrencyInput");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Tambah Produk",
    typeButton: "back",
    href: _ctx.route("admin.products.index")
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
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><label for="category_id" class="form-label"${_scopeId}>Kategori</label><select class="form-control mb-3" id="category_id"${_scopeId}><!--[-->`);
        ssrRenderList($props.categories, (category, i) => {
          _push2(`<option${ssrRenderAttr("value", category.id)}${_scopeId}>${ssrInterpolate(category.name)}</option>`);
        });
        _push2(`<!--]--></select>`);
        if ($setup.form.errors.category_id) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "category_id",
            message: $setup.form.errors.category_id
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="meta_title" class="form-label"${_scopeId}>Meta Title</label><input class="form-control" id="meta_title"${ssrRenderAttr("value", $setup.form.meta_title)}${_scopeId}>`);
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
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="description" class="form-label"${_scopeId}>Deskripsi</label>`);
        _push2(ssrRenderComponent(_component_QuillEditor, {
          theme: "snow",
          content: $setup.form.description,
          "onUpdate:content": ($event) => $setup.form.description = $event,
          contentType: "html"
        }, null, _parent2, _scopeId));
        if ($setup.form.errors.description) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "description",
            message: $setup.form.errors.description
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="is_featured" class="form-label"${_scopeId}>Tampilkan di Unggulan</label><select class="form-control" id="is_featured"${_scopeId}><option value="1" selected${_scopeId}>Tidak</option><option value="2"${_scopeId}>Ya</option></select>`);
        if ($setup.form.errors.is_featured) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "is_featured",
            message: $setup.form.errors.is_featured
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="price" class="form-label"${_scopeId}>Harga</label>`);
        _push2(ssrRenderComponent(_component_CurrencyInput, {
          id: "price",
          modelValue: $setup.form.price,
          "onUpdate:modelValue": ($event) => $setup.form.price = $event,
          options: { currency: "IDR" }
        }, null, _parent2, _scopeId));
        if ($setup.form.errors.price) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "price",
            message: $setup.form.errors.price
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="strike_price" class="form-label"${_scopeId}>Harga Coret</label>`);
        _push2(ssrRenderComponent(_component_CurrencyInput, {
          id: "strike_price",
          modelValue: $setup.form.strike_price,
          "onUpdate:modelValue": ($event) => $setup.form.strike_price = $event,
          options: { currency: "IDR" }
        }, null, _parent2, _scopeId));
        if ($setup.form.errors.strike_price) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "strike_price",
            message: $setup.form.errors.strike_price
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="stock" class="form-label"${_scopeId}>Stock</label><input class="form-control" id="stock"${ssrRenderAttr("value", $setup.form.stock)}${_scopeId}>`);
        if ($setup.form.errors.stock) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "stock",
            message: $setup.form.errors.stock
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="weight" class="form-label"${_scopeId}>Berat (gr)</label><input class="form-control" id="weight"${ssrRenderAttr("value", $setup.form.weight)}${_scopeId}>`);
        if ($setup.form.errors.weight) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "weight",
            message: $setup.form.errors.weight
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-12 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="condition" class="form-label"${_scopeId}>Kondisi</label><select class="form-control mb-3" id=""${_scopeId}><!--[-->`);
        ssrRenderList($props.product_conditions, (productCondition, i) => {
          _push2(`<option${ssrRenderAttr("value", i)}${_scopeId}>${ssrInterpolate(productCondition)}</option>`);
        });
        _push2(`<!--]--></select>`);
        if ($setup.form.errors.condition) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "condition",
            message: $setup.form.errors.condition
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
                        createVNode("label", {
                          for: "category_id",
                          class: "form-label"
                        }, "Kategori"),
                        withDirectives(createVNode("select", {
                          class: "form-control mb-3",
                          "onUpdate:modelValue": ($event) => $setup.form.category_id = $event,
                          id: "category_id"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList($props.categories, (category, i) => {
                            return openBlock(), createBlock("option", {
                              value: category.id,
                              key: i
                            }, toDisplayString(category.name), 9, ["value"]);
                          }), 128))
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, $setup.form.category_id]
                        ]),
                        $setup.form.errors.category_id ? (openBlock(), createBlock(_component_FormText, {
                          key: 0,
                          id: "category_id",
                          message: $setup.form.errors.category_id
                        }, null, 8, ["message"])) : createCommentVNode("", true)
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
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "description",
                            class: "form-label"
                          }, "Deskripsi"),
                          createVNode(_component_QuillEditor, {
                            theme: "snow",
                            content: $setup.form.description,
                            "onUpdate:content": ($event) => $setup.form.description = $event,
                            contentType: "html"
                          }, null, 8, ["content", "onUpdate:content"]),
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
                            for: "is_featured",
                            class: "form-label"
                          }, "Tampilkan di Unggulan"),
                          withDirectives(createVNode("select", {
                            class: "form-control",
                            "onUpdate:modelValue": ($event) => $setup.form.is_featured = $event,
                            id: "is_featured"
                          }, [
                            createVNode("option", {
                              value: "1",
                              selected: ""
                            }, "Tidak"),
                            createVNode("option", { value: "2" }, "Ya")
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, $setup.form.is_featured]
                          ]),
                          $setup.form.errors.is_featured ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "is_featured",
                            message: $setup.form.errors.is_featured
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "price",
                            class: "form-label"
                          }, "Harga"),
                          createVNode(_component_CurrencyInput, {
                            id: "price",
                            modelValue: $setup.form.price,
                            "onUpdate:modelValue": ($event) => $setup.form.price = $event,
                            options: { currency: "IDR" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $setup.form.errors.price ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "price",
                            message: $setup.form.errors.price
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "strike_price",
                            class: "form-label"
                          }, "Harga Coret"),
                          createVNode(_component_CurrencyInput, {
                            id: "strike_price",
                            modelValue: $setup.form.strike_price,
                            "onUpdate:modelValue": ($event) => $setup.form.strike_price = $event,
                            options: { currency: "IDR" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $setup.form.errors.strike_price ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "strike_price",
                            message: $setup.form.errors.strike_price
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "stock",
                            class: "form-label"
                          }, "Stock"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "stock",
                            "onUpdate:modelValue": ($event) => $setup.form.stock = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.stock]
                          ]),
                          $setup.form.errors.stock ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "stock",
                            message: $setup.form.errors.stock
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "weight",
                            class: "form-label"
                          }, "Berat (gr)"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "weight",
                            "onUpdate:modelValue": ($event) => $setup.form.weight = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.weight]
                          ]),
                          $setup.form.errors.weight ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "weight",
                            message: $setup.form.errors.weight
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-12 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "condition",
                            class: "form-label"
                          }, "Kondisi"),
                          withDirectives(createVNode("select", {
                            class: "form-control mb-3",
                            "onUpdate:modelValue": ($event) => $setup.form.condition = $event,
                            id: ""
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList($props.product_conditions, (productCondition, i) => {
                              return openBlock(), createBlock("option", {
                                value: i,
                                key: i
                              }, toDisplayString(productCondition), 9, ["value"]);
                            }), 128))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, $setup.form.condition]
                          ]),
                          $setup.form.errors.condition ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "condition",
                            message: $setup.form.errors.condition
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Product/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
