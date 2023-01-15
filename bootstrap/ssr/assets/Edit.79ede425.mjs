import { L as Layout } from "./App.6cf91a9e.mjs";
import { Link, useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { S as SpinnerProcessing, F as FormText } from "./SpinnerProcessing.6b8068f7.mjs";
import Datepicker from "@vuepic/vue-datepicker";
/* empty css                */import moment from "moment";
import { resolveComponent, mergeProps, withCtx, createVNode, withModifiers, withDirectives, vModelText, openBlock, createBlock, createCommentVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
import "@vue/reactivity";
const _sfc_main = {
  components: { Layout, Link, SpinnerProcessing, FormText, Datepicker },
  props: {
    errors: Object,
    result: Object
  },
  setup(props) {
    const form = useForm(props.result);
    form.expired_at = moment(form.expired_at);
    function submit() {
      form.expired_at = moment(new Date(form.expired_at)).format("YYYY-MM-DD HH:mm");
      let data = form.data();
      Inertia.post(
        route("admin.vouchers.update", {
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
      submit
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Layout = resolveComponent("Layout");
  const _component_FormText = resolveComponent("FormText");
  const _component_Datepicker = resolveComponent("Datepicker");
  const _component_SpinnerProcessing = resolveComponent("SpinnerProcessing");
  _push(ssrRenderComponent(_component_Layout, mergeProps({
    title: "Ubah Voucher",
    typeButton: "back",
    href: _ctx.route("admin.vouchers.index")
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="row"${_scopeId}><div class="col-md-12 grid-margin"${_scopeId}><div class="card"${_scopeId}><div class="card-body"${_scopeId}><form${_scopeId}><div class="row"${_scopeId}><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="code" class="form-label"${_scopeId}>Code</label><input class="form-control" id="code"${ssrRenderAttr("value", $setup.form.code)}${_scopeId}>`);
        if ($props.errors.code) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "code",
            message: $props.errors.code
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="desc" class="form-label"${_scopeId}>Deskripsi</label><input class="form-control" id="desc"${ssrRenderAttr("value", $setup.form.desc)}${_scopeId}>`);
        if ($props.errors.desc) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "desc",
            message: $setup.form.errors.desc
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="limit" class="form-label"${_scopeId}>Limit</label><input type="number" class="form-control" id="limit"${ssrRenderAttr("value", $setup.form.limit)}${_scopeId}>`);
        if ($props.errors.limit) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "limit",
            message: $props.errors.limit
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="expired_at" class="form-label"${_scopeId}>Waktu Berakhir</label>`);
        _push2(ssrRenderComponent(_component_Datepicker, {
          modelValue: $setup.form.expired_at,
          "onUpdate:modelValue": ($event) => $setup.form.expired_at = $event,
          id: "expired_at"
        }, null, _parent2, _scopeId));
        if ($props.errors.expired_at) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "expired_at",
            message: $props.errors.expired_at
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="min_order" class="form-label"${_scopeId}>Minimal Order</label><input type="number" class="form-control" id="min_order"${ssrRenderAttr("value", $setup.form.min_order)}${_scopeId}>`);
        if ($props.errors.min_order) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "min_order",
            message: $props.errors.min_order
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="discount" class="form-label"${_scopeId}>Diskon</label><input type="number" class="form-control" id="discount"${ssrRenderAttr("value", $setup.form.discount)}${_scopeId}>`);
        if ($props.errors.discount) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "discount",
            message: $props.errors.discount
          }, null, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div><div class="col-lg-6 mb-3"${_scopeId}><div class="mb-3"${_scopeId}><label for="max_discount" class="form-label"${_scopeId}>Maksimal Diskon</label><input type="number" class="form-control" id="max_discount"${ssrRenderAttr("value", $setup.form.max_discount)}${_scopeId}>`);
        if ($props.errors.max_discount) {
          _push2(ssrRenderComponent(_component_FormText, {
            id: "max_discount",
            message: $props.errors.max_discount
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
                            for: "code",
                            class: "form-label"
                          }, "Code"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "code",
                            "onUpdate:modelValue": ($event) => $setup.form.code = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.code]
                          ]),
                          $props.errors.code ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "code",
                            message: $props.errors.code
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "desc",
                            class: "form-label"
                          }, "Deskripsi"),
                          withDirectives(createVNode("input", {
                            class: "form-control",
                            id: "desc",
                            "onUpdate:modelValue": ($event) => $setup.form.desc = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.desc]
                          ]),
                          $props.errors.desc ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "desc",
                            message: $setup.form.errors.desc
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "limit",
                            class: "form-label"
                          }, "Limit"),
                          withDirectives(createVNode("input", {
                            type: "number",
                            class: "form-control",
                            id: "limit",
                            "onUpdate:modelValue": ($event) => $setup.form.limit = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.limit]
                          ]),
                          $props.errors.limit ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "limit",
                            message: $props.errors.limit
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "expired_at",
                            class: "form-label"
                          }, "Waktu Berakhir"),
                          createVNode(_component_Datepicker, {
                            modelValue: $setup.form.expired_at,
                            "onUpdate:modelValue": ($event) => $setup.form.expired_at = $event,
                            id: "expired_at"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          $props.errors.expired_at ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "expired_at",
                            message: $props.errors.expired_at
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "min_order",
                            class: "form-label"
                          }, "Minimal Order"),
                          withDirectives(createVNode("input", {
                            type: "number",
                            class: "form-control",
                            id: "min_order",
                            "onUpdate:modelValue": ($event) => $setup.form.min_order = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.min_order]
                          ]),
                          $props.errors.min_order ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "min_order",
                            message: $props.errors.min_order
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "discount",
                            class: "form-label"
                          }, "Diskon"),
                          withDirectives(createVNode("input", {
                            type: "number",
                            class: "form-control",
                            id: "discount",
                            "onUpdate:modelValue": ($event) => $setup.form.discount = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.discount]
                          ]),
                          $props.errors.discount ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "discount",
                            message: $props.errors.discount
                          }, null, 8, ["message"])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "col-lg-6 mb-3" }, [
                        createVNode("div", { class: "mb-3" }, [
                          createVNode("label", {
                            for: "max_discount",
                            class: "form-label"
                          }, "Maksimal Diskon"),
                          withDirectives(createVNode("input", {
                            type: "number",
                            class: "form-control",
                            id: "max_discount",
                            "onUpdate:modelValue": ($event) => $setup.form.max_discount = $event
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, $setup.form.max_discount]
                          ]),
                          $props.errors.max_discount ? (openBlock(), createBlock(_component_FormText, {
                            key: 0,
                            id: "max_discount",
                            message: $props.errors.max_discount
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Voucher/Edit.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Edit as default
};
