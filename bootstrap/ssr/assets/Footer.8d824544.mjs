import { mergeProps, unref, withCtx, createVNode, createTextVNode, openBlock, createBlock, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import { s as socket } from "./socket.0d6bda6b.mjs";
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const unreadMessage = ref({});
    const notifChat = ref(0);
    onMounted(() => {
      axios.get(route("chat.get-unread-messages")).then((res) => {
        var _a;
        unreadMessage.value = res.data;
        notifChat.value = (_a = unreadMessage.value) == null ? void 0 : _a.unread_messages_count;
      });
    });
    socket.on("notif-chat", (data) => {
      notifChat.value++;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "footer-nav-area",
        id: "footerNav"
      }, _attrs))}><div class="container h-100 px-0"><div class="suha-footer-nav h-100"><ul class="h-100 d-flex align-items-center justify-content-between ps-0"><li><a href="/"><i class="lni lni-home"></i>Home</a></li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("cart.index")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="lni lni-shopping-basket"${_scopeId}></i>Keranjang`);
          } else {
            return [
              createVNode("i", { class: "lni lni-shopping-basket" }),
              createTextVNode("Keranjang")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("chat.index"),
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (notifChat.value > 0) {
              _push2(`<span class="badge bg-danger rounded-pill" style="${ssrRenderStyle({ "font-size": "8px", "position": "absolute" })}"${_scopeId}>${ssrInterpolate(notifChat.value)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<i class="lni lni-wechat"${_scopeId}></i>Chat `);
          } else {
            return [
              notifChat.value > 0 ? (openBlock(), createBlock("span", {
                key: 0,
                class: "badge bg-danger rounded-pill",
                style: { "font-size": "8px", "position": "absolute" }
              }, toDisplayString(notifChat.value), 1)) : createCommentVNode("", true),
              createVNode("i", { class: "lni lni-wechat" }),
              createTextVNode("Chat ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
