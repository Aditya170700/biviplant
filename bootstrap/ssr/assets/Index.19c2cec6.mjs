import { ref, reactive, nextTick, mergeProps, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString, createCommentVNode, withDirectives, vModelText, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import axios from "axios";
import { L as Layout } from "./App.6cf91a9e.mjs";
import { s as socket } from "./socket.0d6bda6b.mjs";
import { t as toastError } from "./utils.bec59827.mjs";
import "@inertiajs/inertia";
import "@inertiajs/inertia-vue3";
import "@vue/reactivity";
import "./_plugin-vue_export-helper.43be4956.mjs";
import "socket.io-client";
import "../ssr.mjs";
import "@vue/server-renderer";
import "process";
import "http";
import "qs";
import "vuex";
import "moment";
const Index_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    user: Object,
    customers: Object
  },
  setup(__props) {
    const props = __props;
    const textMessage = ref("");
    const conversation = reactive({});
    const activeUser = ref({});
    let customers = ref(props.customers.data);
    let messages = ref([]);
    socket.on("message", (data) => {
      var _a;
      if ((_a = activeUser.value) == null ? void 0 : _a.id) {
        messages.value.push(data);
        nextTick(() => {
          window.document.getElementsByClassName("chat-room")[0].scrollTo(0, window.document.getElementsByClassName("chat-room")[0].scrollHeight);
        });
      }
    });
    socket.on("notif-chat-admin", (data) => {
      getCustomers();
    });
    socket.on("user-leave", () => {
      getCustomers();
    });
    socket.on("user-join", () => {
      getCustomers();
    });
    function submit() {
      if (textMessage.value != "") {
        let toUser = conversation.data.sender.id != props.user.id ? conversation.data.sender : conversation.data.receiver;
        activeUser.value = toUser;
        socket.emit("message-to-customer", {
          user_id: props.user.id,
          message: textMessage.value,
          conversation_id: conversation.data.id,
          to_user_id: toUser.id
        });
        textMessage.value = "";
        show(toUser);
      }
    }
    function getCustomers() {
      axios.get(route("admin.chat.customers")).then((res) => {
        customers.value = res.data.data;
      }).catch((error) => {
        toastError("failed sync customers!");
      });
    }
    function show(user) {
      axios.get(route("admin.chat.show", {
        id: user.id
      })).then((res) => {
        activeUser.value = user;
        conversation.data = res.data;
        messages.value = res.data.messages;
        syncReadMessage(user);
        nextTick(() => {
          window.document.getElementsByClassName("chat-room")[0].scrollTo(0, window.document.getElementsByClassName("chat-room")[0].scrollHeight);
        });
      }).catch((error) => {
        toastError("something went wrooongg!");
      });
    }
    function syncReadMessage(user) {
      var _a;
      (_a = customers.value) == null ? void 0 : _a.map((customer) => {
        if (customer.id == user.id) {
          user.unread_messages = [];
          return user;
        } else {
          return customer;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(Layout, mergeProps({ title: "Chat" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row"${_scopeId}><div class="col-md-12"${_scopeId}><div class="card" id="chat3" style="${ssrRenderStyle({ "border-radius": "15px" })}"${_scopeId}><div class="card-body"${_scopeId}><div class="row"${_scopeId}><div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0"${_scopeId}><div class="p-3"${_scopeId}><div class="input-group rounded mb-3 shadow-sm"${_scopeId}><input type="search" class="form-control rounded" placeholder="Cari" aria-label="Search" aria-describedby="search-addon"${_scopeId}><span class="input-group-text border-0" id="search-addon"${_scopeId}><i class="fas fa-search"${_scopeId}></i></span></div><div data-mdb-perfect-scrollbar="true" style="${ssrRenderStyle({ "position": "relative", "height": "400px", "overflow": "scroll" })}"${_scopeId}><ul class="list-unstyled mb-0"${_scopeId}><!--[-->`);
            ssrRenderList(unref(customers), (customer, i) => {
              _push2(`<li class="p-2 border-bottom"${_scopeId}><a href="#" class="d-flex justify-content-between"${_scopeId}><div class="d-flex flex-row"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", customer.profile_photo_path_url)} alt="avatar" class="d-flex align-self-center me-3" width="50"${_scopeId}><span class="badge bg-success badge-dot"${_scopeId}></span></div><div class="pt-1"${_scopeId}><p class="fw-bold mb-0"${_scopeId}>${ssrInterpolate(customer.name)} `);
              if (customer.is_online == 1) {
                _push2(`<i class="fa-solid fa-circle-dot" style="${ssrRenderStyle({ "color": "green" })}"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</p><p class="small text-muted"${_scopeId}>${ssrInterpolate(customer.email)}</p></div></div>`);
              if (customer.unread_messages.length > 0) {
                _push2(`<div class="pt-1"${_scopeId}><span class="badge bg-danger rounded-pill float-end"${_scopeId}>${ssrInterpolate(customer.unread_messages.length)}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</a></li>`);
            });
            _push2(`<!--]--></ul></div></div></div><div class="col-md-6 col-lg-7 col-xl-8"${_scopeId}>`);
            if (activeUser.value.id) {
              _push2(`<div class="input-group rounded mb-3 px-2 py-2 shadow-sm"${_scopeId}><div class="d-flex flex-row"${_scopeId}><div${_scopeId}><img${ssrRenderAttr("src", activeUser.value.profile_photo_path_url)} alt="avatar" class="d-flex align-self-center me-3" width="50"${_scopeId}><span class="badge bg-success badge-dot"${_scopeId}></span></div><div class="pt-1"${_scopeId}><p class="fw-bold mb-0"${_scopeId}>${ssrInterpolate(activeUser.value.name)}</p><p class="small text-muted"${_scopeId}>${ssrInterpolate(activeUser.value.email)}</p></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="pt-3 pe-3 chat-room" data-mdb-perfect-scrollbar="true" style="${ssrRenderStyle({ "position": "relative", "height": "400px", "overflow": "scroll" })}"${_scopeId}><!--[-->`);
            ssrRenderList(unref(messages), (message, i) => {
              _push2(`<div${_scopeId}>`);
              if (!message.user.is_admin) {
                _push2(`<div class="d-flex flex-row justify-content-start"${_scopeId}><div${_scopeId}><p class="small p-2 ms-3 mb-1 rounded-3" style="${ssrRenderStyle({ "background-color": "#f5f6f7" })}"${_scopeId}>${ssrInterpolate(message.message)}</p><p class="small ms-3 mb-3 rounded-3 text-muted float-end"${_scopeId}>${ssrInterpolate(message.date_time_formated)}</p></div></div>`);
              } else {
                _push2(`<div class="d-flex flex-row justify-content-end"${_scopeId}><div${_scopeId}><p class="small p-2 me-3 mb-1 rounded-3" style="${ssrRenderStyle({ "background-color": "#f5f6f7" })}"${_scopeId}>${ssrInterpolate(message.message)}</p><p class="small me-3 mb-3 rounded-3 text-muted"${_scopeId}>${ssrInterpolate(message.date_time_formated)}</p></div></div>`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]--></div>`);
            if (activeUser.value.id) {
              _push2(`<div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"${_scopeId}><textarea type="text" class="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Tulis pesan"${_scopeId}>${ssrInterpolate(textMessage.value)}</textarea><a class="ms-1 text-muted" href="#!"${_scopeId}><i class="fas fa-paperclip"${_scopeId}></i></a><a class="ms-3" href="#!"${_scopeId}><i class="fas fa-paper-plane"${_scopeId}></i></a></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-md-12" }, [
                  createVNode("div", {
                    class: "card",
                    id: "chat3",
                    style: { "border-radius": "15px" }
                  }, [
                    createVNode("div", { class: "card-body" }, [
                      createVNode("div", { class: "row" }, [
                        createVNode("div", { class: "col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0" }, [
                          createVNode("div", { class: "p-3" }, [
                            createVNode("div", { class: "input-group rounded mb-3 shadow-sm" }, [
                              createVNode("input", {
                                type: "search",
                                class: "form-control rounded",
                                placeholder: "Cari",
                                "aria-label": "Search",
                                "aria-describedby": "search-addon"
                              }),
                              createVNode("span", {
                                class: "input-group-text border-0",
                                id: "search-addon"
                              }, [
                                createVNode("i", { class: "fas fa-search" })
                              ])
                            ]),
                            createVNode("div", {
                              "data-mdb-perfect-scrollbar": "true",
                              style: { "position": "relative", "height": "400px", "overflow": "scroll" }
                            }, [
                              createVNode("ul", { class: "list-unstyled mb-0" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(customers), (customer, i) => {
                                  return openBlock(), createBlock("li", {
                                    class: "p-2 border-bottom",
                                    key: i
                                  }, [
                                    createVNode("a", {
                                      href: "#",
                                      class: "d-flex justify-content-between",
                                      onClick: ($event) => show(customer)
                                    }, [
                                      createVNode("div", { class: "d-flex flex-row" }, [
                                        createVNode("div", null, [
                                          createVNode("img", {
                                            src: customer.profile_photo_path_url,
                                            alt: "avatar",
                                            class: "d-flex align-self-center me-3",
                                            width: "50"
                                          }, null, 8, ["src"]),
                                          createVNode("span", { class: "badge bg-success badge-dot" })
                                        ]),
                                        createVNode("div", { class: "pt-1" }, [
                                          createVNode("p", { class: "fw-bold mb-0" }, [
                                            createTextVNode(toDisplayString(customer.name) + " ", 1),
                                            customer.is_online == 1 ? (openBlock(), createBlock("i", {
                                              key: 0,
                                              class: "fa-solid fa-circle-dot",
                                              style: { "color": "green" }
                                            })) : createCommentVNode("", true)
                                          ]),
                                          createVNode("p", { class: "small text-muted" }, toDisplayString(customer.email), 1)
                                        ])
                                      ]),
                                      customer.unread_messages.length > 0 ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "pt-1"
                                      }, [
                                        createVNode("span", { class: "badge bg-danger rounded-pill float-end" }, toDisplayString(customer.unread_messages.length), 1)
                                      ])) : createCommentVNode("", true)
                                    ], 8, ["onClick"])
                                  ]);
                                }), 128))
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-md-6 col-lg-7 col-xl-8" }, [
                          activeUser.value.id ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "input-group rounded mb-3 px-2 py-2 shadow-sm"
                          }, [
                            createVNode("div", { class: "d-flex flex-row" }, [
                              createVNode("div", null, [
                                createVNode("img", {
                                  src: activeUser.value.profile_photo_path_url,
                                  alt: "avatar",
                                  class: "d-flex align-self-center me-3",
                                  width: "50"
                                }, null, 8, ["src"]),
                                createVNode("span", { class: "badge bg-success badge-dot" })
                              ]),
                              createVNode("div", { class: "pt-1" }, [
                                createVNode("p", { class: "fw-bold mb-0" }, toDisplayString(activeUser.value.name), 1),
                                createVNode("p", { class: "small text-muted" }, toDisplayString(activeUser.value.email), 1)
                              ])
                            ])
                          ])) : createCommentVNode("", true),
                          createVNode("div", {
                            class: "pt-3 pe-3 chat-room",
                            "data-mdb-perfect-scrollbar": "true",
                            style: { "position": "relative", "height": "400px", "overflow": "scroll" }
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(messages), (message, i) => {
                              return openBlock(), createBlock("div", { key: i }, [
                                !message.user.is_admin ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "d-flex flex-row justify-content-start"
                                }, [
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "small p-2 ms-3 mb-1 rounded-3",
                                      style: { "background-color": "#f5f6f7" }
                                    }, toDisplayString(message.message), 1),
                                    createVNode("p", { class: "small ms-3 mb-3 rounded-3 text-muted float-end" }, toDisplayString(message.date_time_formated), 1)
                                  ])
                                ])) : (openBlock(), createBlock("div", {
                                  key: 1,
                                  class: "d-flex flex-row justify-content-end"
                                }, [
                                  createVNode("div", null, [
                                    createVNode("p", {
                                      class: "small p-2 me-3 mb-1 rounded-3",
                                      style: { "background-color": "#f5f6f7" }
                                    }, toDisplayString(message.message), 1),
                                    createVNode("p", { class: "small me-3 mb-3 rounded-3 text-muted" }, toDisplayString(message.date_time_formated), 1)
                                  ])
                                ]))
                              ]);
                            }), 128))
                          ]),
                          activeUser.value.id ? (openBlock(), createBlock("div", {
                            key: 1,
                            class: "text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2"
                          }, [
                            withDirectives(createVNode("textarea", {
                              type: "text",
                              "onUpdate:modelValue": ($event) => textMessage.value = $event,
                              class: "form-control form-control-lg",
                              id: "exampleFormControlInput2",
                              placeholder: "Tulis pesan"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, textMessage.value]
                            ]),
                            createVNode("a", {
                              class: "ms-1 text-muted",
                              href: "#!"
                            }, [
                              createVNode("i", { class: "fas fa-paperclip" })
                            ]),
                            createVNode("a", {
                              class: "ms-3",
                              href: "#!",
                              onClick: ($event) => submit()
                            }, [
                              createVNode("i", { class: "fas fa-paper-plane" })
                            ], 8, ["onClick"])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Chat/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
