import { resolveComponent, mergeProps, withCtx, createVNode, unref, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import { F as FormText, S as SpinnerProcessing } from "./SpinnerProcessing.6b8068f7.mjs";
import "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Head = resolveComponent("Head");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "login-wrapper d-flex align-items-center justify-content-center text-center",
        style: { "background": "white !important" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Head, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Login</title><meta head-key="description" name="description" content="Login untuk pengalaman yang menakjubkan"${_scopeId}><meta head-key="keyword" name="keyword" content="tanaman buah, biviplant"${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, "Login"),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: "Login untuk pengalaman yang menakjubkan"
              }),
              createVNode("meta", {
                "head-key": "keyword",
                name: "keyword",
                content: "tanaman buah, biviplant"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="background-shape" style="${ssrRenderStyle({ "background": "rgb(80, 208, 72) !important" })}"></div><div class="container"><div class="row justify-content-center"><div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5"><div class="d-flex justify-content-center">`);
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
      _push(`</div><div class="mt-5 px-4"><form><div class="form-group text-start mb-4"><span class="text-dark">Email</span><input class="form-control rounded" id="email" type="text" placeholder="info@example.com"${ssrRenderAttr("value", unref(form).email)} name="email">`);
      if (unref(form).errors.email) {
        _push(ssrRenderComponent(FormText, {
          id: "email",
          message: unref(form).errors.email
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-group text-start mb-4"><span class="text-dark">Password</span><input class="form-control rounded" id="password" type="password" placeholder="Password"${ssrRenderAttr("value", unref(form).password)} name="password">`);
      if (unref(form).errors.password) {
        _push(ssrRenderComponent(FormText, {
          id: "password",
          message: unref(form).errors.password
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="form-check text-start text-dark mb-5"><input class="form-check-input" type="checkbox" id="remember"${ssrIncludeBooleanAttr(Array.isArray(unref(form).remember) ? ssrLooseContain(unref(form).remember, null) : unref(form).remember) ? " checked" : ""} name="remember"><label class="form-check-label" for="remember"> Ingat saya </label></div><button class="btn btn-warning btn-lg w-100 text-white" type="submit" style="${ssrRenderStyle({ "background": "rgb(80, 208, 72) !important" })}"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}><div class="d-flex justify-content-center">`);
      if (unref(form).processing) {
        _push(ssrRenderComponent(SpinnerProcessing, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` Login </div></button></form></div><div class="login-meta-data">`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("password.request"),
          class: "forgot-password d-block mt-3 mb-1 text-dark"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Lupa kata sandi? `);
            } else {
              return [
                createTextVNode(" Lupa kata sandi? ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="mb-0 text-dark"> Apakah anda belum memiliki akun?`);
      _push(ssrRenderComponent(unref(Link), {
        class: "ms-1 text-dark",
        href: _ctx.route("register")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Daftar`);
          } else {
            return [
              createTextVNode("Daftar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div><div class="row mt-3"><p class="mb-2 text-dark"> Atau masuk melalui </p><div class="col-6 text-end"><a${ssrRenderAttr("href", _ctx.route("socialite.redirect", "google"))} class="text-decoration-none"><i class="lni lni-google"></i></a></div><div class="col-6 text-start"><a${ssrRenderAttr("href", _ctx.route("socialite.redirect", "facebook"))} class="text-decoration-none"><i class="lni lni-facebook"></i></a></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
