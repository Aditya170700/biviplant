<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import axios from "axios";
import socket from "../socket.js";
import { toastSuccess } from "../utils";

const unreadMessage = ref({});
const notifChat = ref(0);
onMounted(() => {
    axios.get(route("chat.get-unread-messages")).then((res) => {
        unreadMessage.value = res.data;
        notifChat.value = unreadMessage.value?.unread_messages_count;
    });
});

socket.on("notif-chat", (data) => {
    toastSuccess("Admin membalas chat anda.");
    notifChat.value++;
});
</script>

<template>
    <div class="footer-nav-area" id="footerNav">
        <div class="container h-100 px-0">
            <div class="suha-footer-nav h-100">
                <ul
                    class="h-100 d-flex align-items-center justify-content-between ps-0"
                >
                    <li>
                        <a href="/"><i class="lni lni-home"></i>Home</a>
                    </li>
                    <li>
                        <Link :href="route('cart.index')"
                            ><i class="lni lni-shopping-basket"></i
                            >Keranjang</Link
                        >
                    </li>
                    <li>
                        <Link :href="route('chat.index')">
                            <span
                                class="badge bg-danger rounded-pill"
                                style="font-size: 8px; position: absolute"
                                v-if="notifChat > 0"
                            >
                                {{ notifChat }}
                            </span>
                            <i class="lni lni-wechat"></i>Chat
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
