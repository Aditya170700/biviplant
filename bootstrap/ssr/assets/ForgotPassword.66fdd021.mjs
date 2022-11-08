import { mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import { F as FormText, S as SpinnerProcessing } from "./SpinnerProcessing.d7cf9601.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login-wrapper d-flex align-items-center justify-content-center text-center",
        style: { "background": "white !important" }
      }, _attrs))}><div class="background-shape" style="${ssrRenderStyle({ "background": "rgb(80, 208, 72) !important" })}"></div><div class="container"><div class="row justify-content-center"><div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><div class="d-flex justify-content-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("homepage")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="big-logo" src="/img/core-img/logo-white.png" alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "big-logo",
                src: "/img/core-img/logo-white.png",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-5 px-4"><form><div class="form-group text-start mb-5"><span class="text-dark">Email</span><input class="form-control rounded" id="email" type="text" placeholder="info@example.com"${ssrRenderAttr("value", unref(form).email)} name="email" autofocus>`);
      if (unref(form).errors.email) {
        _push(ssrRenderComponent(FormText, {
          id: "email",
          message: unref(form).errors.email
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="btn btn-warning btn-lg w-100 text-white" type="submit" style="${ssrRenderStyle({ "background": "rgb(80, 208, 72) !important" })}"><div class="d-flex justify-content-center">`);
      if (unref(form).processing) {
        _push(ssrRenderComponent(SpinnerProcessing, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` Email Password Reset Link </div></button></form></div><div class="login-meta-data">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("login"),
        class: "forgot-password d-block mt-3 mb-1 text-dark"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Already registered? `);
          } else {
            return [
              createTextVNode(" Already registered? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
