<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";

let attrs = useAttrs();

let addresses = ref(JSON.parse(localStorage.getItem("address")));
let newAddresses = [];

function updateStatus(id) {
    addresses.value.forEach((address, index) => {
        let parse = JSON.parse(address);
        if (index == id) {
            parse.is_primary = 1;
            localStorage.setItem("primary_address", JSON.stringify(parse));
        } else {
            parse.is_primary = 0;
        }
        newAddresses.push(JSON.stringify(parse));
    });
    localStorage.setItem("address", JSON.stringify(newAddresses));
    window.location.reload();
}

onBeforeMount(() => {
    document.title = "Address Guest";
});
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
        <Header></Header>
        <Sidebar></Sidebar>

        <div class="page-content-wrapper">
            <div class="container">
                <div class="profile-wrapper-area py-3">
                    <div class="card">
                        <div class="card-body p-4">
                            <div
                                class="d-flex align-items-center justify-content-between mb-3"
                            >
                                <span class="h6">Daftar Alamat</span>
                                <Link
                                    :href="route('address-guest.create')"
                                    class="btn btn-sm btn-success"
                                >
                                    <i class="lni lni-plus me-2"></i>Tambah
                                </Link>
                            </div>
                            <div class="row">
                                <div
                                    class="col-lg-12 py-2"
                                    v-if="addresses == null"
                                >
                                    <hr />
                                    <div
                                        class="d-flex justify-content-center align-items-center mt-2"
                                    >
                                        <span class="small"
                                            >Belum ada alamat</span
                                        >
                                    </div>
                                </div>
                                <div
                                    class="col-lg-12 py-2"
                                    v-for="(data, i) in addresses"
                                    :key="i"
                                >
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between align-items-center mt-2"
                                    >
                                        <span class="small">{{
                                            JSON.parse(data).receiver
                                        }}</span>
                                        <span>
                                            <Link
                                                :href="
                                                    route(
                                                        'address-guest.edit',
                                                        i
                                                    )
                                                "
                                                class="btn btn-sm btn-warning me-2 rounded-circle"
                                            >
                                                <i class="lni lni-pencil"></i>
                                            </Link>
                                            <button
                                                v-if="
                                                    JSON.parse(data).is_primary
                                                "
                                                :class="`btn btn-sm btn-success rounded-circle`"
                                            >
                                                <i
                                                    class="lni lni-checkmark"
                                                ></i>
                                            </button>
                                            <button
                                                v-else
                                                :class="`btn btn-sm btn-light rounded-circle`"
                                                @click="updateStatus(i)"
                                            >
                                                <i
                                                    class="lni lni-power-switch"
                                                ></i>
                                            </button>
                                        </span>
                                    </div>
                                    <span class="d-block small">{{
                                        JSON.parse(data).phone
                                    }}</span>
                                    <span class="d-block small">{{
                                        JSON.parse(data).detail
                                    }}</span>
                                    <span class="d-block small">{{
                                        `${
                                            JSON.parse(data).subdistrict.name
                                        }, ${
                                            JSON.parse(data).subdistrict.city
                                                .name
                                        }, ${
                                            JSON.parse(data).subdistrict.city
                                                .province.name
                                        }, ${JSON.parse(data).postal_code}`
                                    }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
