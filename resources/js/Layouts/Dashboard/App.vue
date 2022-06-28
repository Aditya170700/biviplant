<template>
    <div id="app">
        <Sidebar :sidebar="sidebar" @changeSidebar="changeSidebar" />
        <div id="main">
            <header class="mb-3">
                <a href="#" @click="setSidebar" class="burger-btn d-block">
                    <i class="fas fa-bars"></i>
                </a>
            </header>

            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div
                                class="d-flex justify-content-between align-items-center fw-bold"
                            >
                                <h3>{{ title }}</h3>
                                <Link
                                    v-if="typeButton == 'back'"
                                    class="btn btn-secondary btn-sm rounded-custom"
                                    :href="href"
                                >
                                    <i class="fas fa-arrow-left me-2"></i>
                                    Kembali
                                </Link>
                                <Link
                                    v-if="typeButton == 'create'"
                                    class="btn btn-success btn-sm rounded-custom"
                                    :href="href"
                                >
                                    <i class="fas fa-plus me-2"></i> Tambah
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-content">
                <slot />
            </div>
            <Footer />
        </div>
    </div>
</template>

<script>
import Sidebar from "../../Layouts/Dashboard/Sidebar.vue";
import Footer from "../../Layouts/Dashboard/Footer.vue";
import { usePage, Link } from "@inertiajs/inertia-vue3";
import { computed, ref } from "vue";

export default {
    components: { Sidebar, Footer, Link },
    props: {
        title: {
            type: String,
            required: true,
        },
        typeButton: {
            type: String,
            required: true,
        },
        href: {
            type: String,
            required: false,
        },
    },
    emits: ["changeSidebar"],
    setup() {
        const shared = computed(() => usePage().props.value);
        const sidebar = ref("active");
        const changeSidebar = (e) => {
            sidebar.value = e;
        };

        const setSidebar = () => {
            if (sidebar.value == "") {
                sidebar.value = "active";
            } else {
                sidebar.value = "";
            }
        };

        return {
            sidebar,
            setSidebar,
            changeSidebar,
        };
    },
};
</script>
