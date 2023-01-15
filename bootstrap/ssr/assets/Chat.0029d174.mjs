import { ref, nextTick, onMounted, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./HeaderWithTitle.8fd337c7.mjs";
import { Head } from "@inertiajs/inertia-vue3";
import { S as Sidebar } from "./Sidebar.7d303b8e.mjs";
import { s as socket } from "./socket.0d6bda6b.mjs";
import "@inertiajs/inertia";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "socket.io-client";
const _sfc_main = {
  __name: "Chat",
  __ssrInlineRender: true,
  props: {
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    user: Object,
    conversation: Object
  },
  setup(__props) {
    const props = __props;
    let textMessage = ref("");
    let messages = ref([]);
    messages.value = props.conversation.messages;
    socket.on("message", (data) => {
      messages.value.push(data);
      nextTick(() => {
        window.scrollTo(0, window.document.getElementsByClassName("page-content-wrapper")[0].scrollHeight);
      });
    });
    onMounted(() => {
      nextTick(() => {
        window.scrollTo(0, window.document.getElementsByClassName("page-content-wrapper")[0].scrollHeight);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>${ssrInterpolate(__props.meta_title)}</title><meta head-key="description" name="description"${ssrRenderAttr("content", __props.meta_description)}${_scopeId}><meta head-key="keyword" name="keyword"${ssrRenderAttr("content", __props.meta_keyword)}${_scopeId}>`);
          } else {
            return [
              createVNode("title", null, toDisplayString(__props.meta_title), 1),
              createVNode("meta", {
                "head-key": "description",
                name: "description",
                content: __props.meta_description
              }, null, 8, ["content"]),
              createVNode("meta", {
                "head-key": "keyword",
                name: "keyword",
                content: __props.meta_keyword
              }, null, 8, ["content"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        link_back: "/",
        title: "Chat"
      }, null, _parent));
      _push(ssrRenderComponent(Sidebar, null, null, _parent));
      _push(`<div class="page-content-wrapper"><div class="live-chat-intro mb-3" style="${ssrRenderStyle({ "position": "fixed", "width": "100%", "z-index": "1000" })}"><p>Mulai Percakapan Dengan Admin</p><img src="/assets/images/customer-service.png" alt=""><div class="status online">Admin sedang online</div></div><div class="support-wrapper py-3" style="${ssrRenderStyle({ "padding-top": "200px !important" })}"><div class="container"><!--[-->`);
      ssrRenderList(unref(messages), (message, i) => {
        _push(`<div class="live-chat-wrapper">`);
        if (message.user.role == "admin") {
          _push(`<div class="agent-message-content d-flex align-items-start"><div class="agent-message-text"><div class="d-block mt-2"><p>${ssrInterpolate(message.message)}</p><span style="${ssrRenderStyle({ "font-size": "10px" })}">${ssrInterpolate(message.date_time_formated)}</span></div></div></div>`);
        } else {
          _push(`<div class="user-message-content"><div class="user-message-text"><div class="d-block mt-2 mt-3"><p style="${ssrRenderStyle({ "background-color": "#FFFFFF !important", "color": "#747794" })}">${ssrInterpolate(message.message)}</p></div><span style="${ssrRenderStyle({ "font-size": "10px" })}">${ssrInterpolate(message.date_time_formated)}</span></div></div>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></div><div class="type-text-form"><form action="#"><textarea style="${ssrRenderStyle({ "height": "69px" })}" class="form-control" cols="30" rows="20" placeholder="Tulis pesan">${ssrInterpolate(unref(textMessage))}</textarea><button type="submit"><img src="/assets/images/send-message.png" alt="" style="${ssrRenderStyle({ "opacity": "0.5" })}"></button></form></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Chat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
