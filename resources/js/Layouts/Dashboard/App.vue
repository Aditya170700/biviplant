<template>
    <div id="app">
        <Sidebar />
        <div id="main">
            <header class="mb-3">
                <a href="#" class="burger-btn d-block d-xl-none">
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
import { computed } from "vue";

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
