import { computed, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/inertia-vue3";
const _sfc_main = {
  __name: "ValidationErrors",
  __ssrInlineRender: true,
  setup(__props) {
    const errors = computed(() => usePage().props.value.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasErrors)) {
        _push(`<div${ssrRenderAttrs(_attrs)}><div class="font-medium text-red-600"> Whoops! Something went wrong. </div><ul class="mt-3 list-disc list-inside text-sm text-red-600"><!--[-->`);
        ssrRenderList(unref(errors), (error, key) => {
          _push(`<li>${ssrInterpolate(error)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Jetstream/ValidationErrors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
