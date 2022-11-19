<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/HeaderWithTitle.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";

let attrs = useAttrs();
</script>

<template>
    <div>
        <Head>
            <title>{{ attrs.metaTitle }}</title>
            <meta
                head-key="description"
                name="description"
                :content="attrs.metaDescription"
            />
            <meta
                head-key="keyword"
                name="keyword"
                :content="attrs.metaKeyword"
            />
        </Head>
        <Header link_back="/" title="Kebijakan & Privasi"></Header>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper py-3">
            <div class="container">
                <div class="card">
                <div class="card-body">
                    <div class="about-content-wrap" v-html="attrs.privacy_policy">
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
