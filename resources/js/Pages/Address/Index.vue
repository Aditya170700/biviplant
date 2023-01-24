<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";

let attrs = useAttrs();

function updateStatus(id) {
    Inertia.post(route("address.update.status", id), {
        _method: "put",
    });
}
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
                                    :href="route('address.create')"
                                    class="btn btn-sm btn-success"
                                >
                                    <i class="lni lni-plus me-2"></i>Tambah
                                </Link>
                            </div>
                            <div class="row">
                                <div
                                    class="col-lg-12 py-2"
                                    v-if="attrs.results.data.length < 1"
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
                                    v-else
                                    v-for="(data, i) in attrs.results.data"
                                    :key="i"
                                >
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between align-items-center mt-2"
                                    >
                                        <span class="small">{{
                                            data.receiver
                                        }}</span>
                                        <span>
                                            <Link
                                                :href="
                                                    route(
                                                        'address.edit',
                                                        data.id
                                                    )
                                                "
                                                class="btn btn-sm btn-warning me-2 rounded-circle"
                                            >
                                                <i class="lni lni-pencil"></i>
                                            </Link>
                                            <button
                                                v-if="data.is_primary == 0"
                                                :class="`btn btn-sm btn-light rounded-circle`"
                                                @click="updateStatus(data.id)"
                                            >
                                                <i
                                                    class="lni lni-power-switch"
                                                ></i>
                                            </button>
                                            <button
                                                v-else
                                                :class="`btn btn-sm btn-success rounded-circle`"
                                            >
                                                <i
                                                    class="lni lni-checkmark"
                                                ></i>
                                            </button>
                                        </span>
                                    </div>
                                    <span class="d-block small">{{
                                        data.phone
                                    }}</span>
                                    <span class="d-block small">{{
                                        data.detail
                                    }}</span>
                                    <span class="d-block small">{{
                                        `${data.subdistrict.name}, ${data.subdistrict.city.name}, ${data.subdistrict.city.province.name}, ${data.postal_code}`
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
