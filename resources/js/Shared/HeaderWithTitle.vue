<template>
    <div class="header-area" id="headerArea">
        <div
            class="container h-100 d-flex align-items-center justify-content-between"
        >
            <div class="back-button">
                <Link :href="link_back">
                    <svg
                        class="bi bi-arrow-left"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        ></path>
                    </svg>
                </Link>
            </div>
            <div class="page-heading">
                <h6 class="mb-0">{{ title }}</h6>
            </div>
            <div
                class="suha-navbar-toggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#suhaOffcanvas"
                aria-controls="suhaOffcanvas"
            >
                <span></span><span></span><span></span>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { Link } from "@inertiajs/inertia-vue3";
    const props = defineProps({
        title: String,
        link_back: String
    })
</script>
