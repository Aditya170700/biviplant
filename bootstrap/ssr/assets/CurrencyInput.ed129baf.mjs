import { useCurrencyInput } from "vue-currency-input";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  name: "CurrencyInput",
  props: {
    modelValue: Number,
    options: Object
  },
  setup(props) {
    const { inputRef } = useCurrencyInput(props.options);
    return { inputRef };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<input${ssrRenderAttrs(mergeProps({
    ref: "inputRef",
    class: "form-control"
  }, _attrs))}>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Form/CurrencyInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CurrencyInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  CurrencyInput as C
};
