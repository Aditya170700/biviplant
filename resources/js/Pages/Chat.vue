<script setup>
    import { onMounted, reactive, ref, watch } from "vue";
    import HeaderWithTitle from '../Shared/HeaderWithTitle.vue';
    import { Head } from "@inertiajs/inertia-vue3";
    import Sidebar from "./../Shared/Homepage/Sidebar.vue";
    import openSocket from '../socket.js';

    const props = defineProps({
        meta_title: String,
        meta_description: String,
        meta_keyword: String,
        user: Object,
        conversation: Object
    })
    let textMessage = ref('')
    let messages = ref([])

    messages.value = props.conversation.messages

    /**
     * SOCKET CONNECTED
     */
     const socket = openSocket(props.user.id)

    /**
     * SOCKET EVENT
     */
    socket.on('message', (data) => {
        messages.value.push(data)
    })

    function submit() {
        if (textMessage.value != '') {
            socket.emit("message-to-admin", {
                user_id: props.user.id,
                message: textMessage.value,
                conversation_id: props.conversation.id
            })
            textMessage.value = ''
        }
    }

</script>

<template>
    <div>
        <Head>
            <title>{{ meta_title }}</title>
            <meta
                head-key="description"
                name="description"
                :content="meta_description"
            />
            <meta head-key="keyword" name="keyword" :content="meta_keyword" />
        </Head>
        <HeaderWithTitle link_back="/" title="Terhubung Dengan Kami"></HeaderWithTitle>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper">
            <!-- Live Chat Intro-->
            <div class="live-chat-intro mb-3">
                <p>Mulai Percakapan Dengan Admin</p>
                <img src="/img/bg-img/9.jpg" alt="" />
                <div class="status online">Admin sedang online</div>
                <!-- Use this code for "Offline" Status-->
                <!-- .status.offline We’ll be back soon-->
            </div>
            <!-- Support Wrapper-->
            <div class="support-wrapper py-3">
                <div class="container">
                    <!-- Live Chat Wrapper-->
                    <div class="live-chat-wrapper" v-for="(message, i) in messages" :key="i">
                        
                        <!-- Agent Message Content-->
                        <div class="agent-message-content d-flex align-items-start" v-if="message.user.role == 'admin'">
                            <div class="agent-thumbnail me-2 mt-3">
                                <img src="/img/bg-img/9.jpg" alt="" />
                            </div>
                            <div class="agent-message-text">
                                <div class="d-block mt-2">
                                    <p>
                                        {{ message.message }}
                                    </p>
                                    <span style="font-size: 10px;">{{ message.date_time_formated }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Customer Message Content-->
                        <div class="user-message-content" v-else>
                            <div class="user-message-text">
                                <div class="d-block mt-2">
                                    <p style="background-color: #FFFFFF !important; color: #747794;">
                                        {{ message.message }}
                                    </p>
                                </div>
                                <span style="font-size: 10px;">{{ message.date_time_formated }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Type Message Form-->
        <div class="type-text-form">
            <form action="#">
                <textarea
                    style="height: 69px"
                    class="form-control"
                    v-model="textMessage"
                    cols="30"
                    rows="20"
                    placeholder="Tulis pesan"
                ></textarea>
                <button type="submit" @click="submit()">
                    <img src="/assets/images/send-message.png" alt="" style="opacity: 0.5;">
                </button>
            </form>
        </div>
    </div>
</template>
