import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main$1 = {
  props: {
    message: {
      type: String,
      required: true
    },
    type: {
      type: String
    },
    id: {
      type: String,
      required: true
    }
  },
  setup() {
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: $props.id,
    class: ["form-text", $props.type ? $props.type : "text-danger"]
  }, _attrs))}>${ssrInterpolate($props.message)}</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Form/FormText.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FormText = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  props: {
    me: {
      type: String,
      default: "me-5"
    },
    color: {
      type: String,
      default: "text-success"
    },
    size: {
      type: String,
      default: ""
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: `spinner-border ${$props.color} ${$props.me} spinner-border-${$props.size}`
  }, _attrs))}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Form/SpinnerProcessing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SpinnerProcessing = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  FormText as F,
  SpinnerProcessing as S
};
