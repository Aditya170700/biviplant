<script setup>
    import axios from "axios";
    import { nextTick, onMounted, reactive, ref, watch } from "vue";
    import Layout from "../../../Layouts/Dashboard/App.vue";
    import socket from "../../../socket.js";
    import { toastError, toastSuccess } from "../../../utils";

    const props = defineProps({
        user: Object,
        customers: Object
    })
    const textMessage = ref('')
    const conversation = reactive({})
    const activeUser = ref({})
    let customers = ref(props.customers.data)
    let messages = ref([])
    /**
     * SOCKET EVENT
     */
    socket.on('message', (data) => {
        if (activeUser.value?.id) {
            messages.value.push(data)
            nextTick(() => {
                window.document.getElementsByClassName("chat-room")[0].scrollTo(0, window.document.getElementsByClassName("chat-room")[0].scrollHeight)
            })
        }
    })

    socket.on('notif-chat-admin', (data) => {
        getCustomers()
    })

    socket.on('user-leave', () => {
        getCustomers()
    })

    socket.on('user-join', () => {
        getCustomers()
    })

    function submit() {
        if (textMessage.value != '') {
            let toUser = conversation.data.sender.id != props.user.id ? conversation.data.sender : conversation.data.receiver
            activeUser.value = toUser
            socket.emit("message-to-customer", {
                user_id: props.user.id,
                message: textMessage.value,
                conversation_id: conversation.data.id,
                to_user_id: toUser.id
            })
            textMessage.value = ''
            show(toUser)
        }
    }

    function getCustomers() {
        axios.get(route('admin.chat.customers')).then((res) => {
            customers.value = res.data.data
        }).catch((error) => {
            toastError('failed sync customers!')
        })
    }

    function show(user) {
        axios.get(route('admin.chat.show', {
            id: user.id
        })).then((res) => {
            activeUser.value = user
            conversation.data = res.data
            messages.value = res.data.messages
            syncReadMessage(user)
            nextTick(() => {
                window.document.getElementsByClassName("chat-room")[0].scrollTo(0, window.document.getElementsByClassName("chat-room")[0].scrollHeight)
            })
        }).catch((error) => {
            toastError('something went wrooongg!')
        })
    }

    function syncReadMessage(user) {
        customers.value?.map(customer => {
            if (customer.id == user.id) {
                user.unread_messages = []
                return user
            }else {
                return customer
            }
        })
    }
</script>
<template>
    <Layout
        :title="'Chat'"
    >
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="chat3" style="border-radius: 15px">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0">
                                <div class="p-3">
                                    <div class="input-group rounded mb-3 shadow-sm">
                                        <input
                                            type="search"
                                            class="form-control rounded"
                                            placeholder="Cari"
                                            aria-label="Search"
                                            aria-describedby="search-addon"
                                        />
                                        <span  class="input-group-text border-0" id="search-addon">
                                            <i class="fas fa-search"></i>
                                        </span>
                                    </div>

                                    <div data-mdb-perfect-scrollbar="true" style="position: relative; height: 400px; overflow: scroll;" >
                                        <ul class="list-unstyled mb-0">
                                            <li class="p-2 border-bottom" v-for="(customer, i) in customers" :key="i">
                                                <a href="#" class="d-flex justify-content-between" @click="show(customer)">
                                                    <div class="d-flex flex-row">
                                                        <div>
                                                            <img
                                                                :src="customer.profile_photo_path_url"
                                                                alt="avatar"
                                                                class="d-flex align-self-center me-3"
                                                                width="50"
                                                            />
                                                            <span class="badge bg-success badge-dot"></span>
                                                        </div>
                                                        <div class="pt-1">
                                                            <p class="fw-bold mb-0">
                                                                {{ customer.name }}
                                                                <i class="fa-solid fa-circle-dot" style="color: green;" v-if="customer.is_online == 1"></i>
                                                            </p>
                                                            <p class="small text-muted">
                                                                {{ customer.email }}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div class="pt-1" v-if="customer.unread_messages.length > 0">
                                                        <span class="badge bg-danger rounded-pill float-end">{{ customer.unread_messages.length }}</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-lg-7 col-xl-8">
                                <div class="input-group rounded mb-3 px-2 py-2 shadow-sm" v-if="activeUser.id">
                                    <div class="d-flex flex-row">
                                        <div>
                                            <img
                                                :src="activeUser.profile_photo_path_url"
                                                alt="avatar"
                                                class="d-flex align-self-center me-3"
                                                width="50"
                                            />
                                            <span class="badge bg-success badge-dot"></span>
                                        </div>
                                        <div class="pt-1">
                                            <p class="fw-bold mb-0">
                                                {{ activeUser.name }}
                                            </p>
                                            <p class="small text-muted">
                                                {{ activeUser.email }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="pt-3 pe-3 chat-room"
                                    data-mdb-perfect-scrollbar="true"
                                    style="position: relative; height: 400px; overflow: scroll;"
                                >
                                    <div v-for="(message, i) in messages" :key="i">

                                        <!-- CUSTOMER -->
                                        <div class="d-flex flex-row justify-content-start" v-if="!message.user.is_admin">
                                            <div>
                                                <p class="small p-2 ms-3 mb-1 rounded-3" style="background-color: #f5f6f7;">
                                                    {{ message.message }}
                                                </p>
                                                <p class="small ms-3 mb-3 rounded-3 text-muted float-end">
                                                    {{ message.date_time_formated }}
                                                </p>
                                            </div>
                                        </div>

                                        <!-- ADMIN -->
                                        <div class="d-flex flex-row justify-content-end" v-else>
                                            <div>
                                                <p class="small p-2 me-3 mb-1 rounded-3" style="background-color: #f5f6f7;">
                                                    {{ message.message }}
                                                </p>
                                                <p class="small me-3 mb-3 rounded-3 text-muted">
                                                    {{ message.date_time_formated }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2" v-if="activeUser.id">
                                    <textarea
                                        type="text"
                                        v-model="textMessage"
                                        class="form-control form-control-lg"
                                        id="exampleFormControlInput2"
                                        placeholder="Tulis pesan"
                                    ></textarea>
                                    <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
                                    <a class="ms-3" href="#!" @click="submit()"><i class="fas fa-paper-plane"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<style>
    .badge-dot {
        border-radius: 50%;
        height: 10px;
        width: 10px;
        margin-left: 2.9rem;
        margin-top: -0.75rem;
    }

    p {
        font-size: 12px !important;
    }

    /* width */
    ::-webkit-scrollbar {
        height: 5px;
        width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
