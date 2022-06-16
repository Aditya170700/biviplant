<template>
    <div class="wrapper">
        <Navbar />
        <Sidebar />
        <main class="page-content">
            <slot />
        </main>

        <a href="javaScript:;" class="back-to-top"
            ><i class="bx bxs-up-arrow-alt"></i
        ></a>
    </div>
</template>

<script>
import Navbar from "../../Layouts/Dashboard/Navbar.vue";
import Sidebar from "../../Layouts/Dashboard/Sidebar.vue";
import Footer from "../../Layouts/Dashboard/Footer.vue";
import { usePage } from "@inertiajs/inertia-vue3";
import { computed } from "vue";

export default {
    components: { Navbar, Sidebar, Footer },
    setup() {
        const shared = computed(() => usePage().props.value);

        if (shared.value.flash.success) {
            success(shared.value.flash.success);
        }

        if (shared.value.flash.failed) {
            failed(shared.value.flash.failed);
        }
    },
};
</script>
