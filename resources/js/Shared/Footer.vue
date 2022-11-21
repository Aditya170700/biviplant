<script setup>
import { Link } from "@inertiajs/inertia-vue3";

const props = defineProps({
    notif_chat: Number
})

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
                            ><i class="lni lni-shopping-basket"></i>Keranjang</Link
                        >
                    </li>
                    <li>
                        <Link :href="route('chat.index')" target="_blank">
                            <span class="badge bg-danger rounded-pill" style="font-size: 8px; position: absolute;" v-if="notif_chat > 0">
                                {{ notif_chat }}
                            </span>
                            <i class="lni lni-wechat"></i>Chat
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
