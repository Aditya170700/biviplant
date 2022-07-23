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

let status = ref(null);
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
                                <span class="h6">Riwayat Pesanan</span>
                            </div>
                            <div
                                class="d-flex align-items-center justify-content-between mb-3 overflow-auto"
                            >
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == null ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == null
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = null"
                                >
                                    Semua
                                </div>
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == 0 ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == 0
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = 0"
                                >
                                    Belum Bayar
                                </div>
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == 1 ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == 1
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = 1"
                                >
                                    Dikemas
                                </div>
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == 2 ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == 2
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = 2"
                                >
                                    Dikirim
                                </div>
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == 3 ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == 3
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = 3"
                                >
                                    Selesai
                                </div>
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == 4 ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == 4
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = 4"
                                >
                                    Dibatalkan
                                </div>
                                <div
                                    :class="`col-5 text-center py-2 rounded ${
                                        status == 5 ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        status == 5
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    @click="status = 5"
                                >
                                    Pengembalian
                                </div>
                            </div>
                            <div class="row mb-2" v-if="status == null">
                                <div class="col-lg-12 mb-2">
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <span
                                                class="text-warning rounded small"
                                                >BELUM BAYAR</span
                                            >
                                            <div class="h6">
                                                Sandal Jepit Sun Swallow Hitam
                                            </div>
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <div class="small">1 pcs</div>
                                                <div class="small">
                                                    <span
                                                        class="opacity-25 text-decoration-line-through"
                                                        >Rp. 20.000</span
                                                    >
                                                    Rp. 10.000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">1 produk</div>
                                        <div class="small">
                                            Total Pesanan: Rp. 10.000
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2 align-items-center"
                                    >
                                        <div class="small opacity-25">
                                            Belum Dinilai
                                        </div>
                                        <Link
                                            :href="
                                                route('orders.detail', `uuid`)
                                            "
                                            class="btn btn-sm btn-light px-2"
                                        >
                                            LIHAT DETAIL
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2" v-if="status == null">
                                <div class="col-lg-12 mb-2">
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <span
                                                class="text-warning rounded small"
                                                >DIKEMAS</span
                                            >
                                            <div class="h6">
                                                Sandal Jepit Sun Swallow Hitam
                                            </div>
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <div class="small">1 pcs</div>
                                                <div class="small">
                                                    <span
                                                        class="opacity-25 text-decoration-line-through"
                                                        >Rp. 20.000</span
                                                    >
                                                    Rp. 10.000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">1 produk</div>
                                        <div class="small">
                                            Total Pesanan: Rp. 10.000
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2 align-items-center"
                                    >
                                        <div class="small opacity-25">
                                            Belum Dinilai
                                        </div>
                                        <button
                                            class="btn btn-sm btn-light px-2"
                                        >
                                            LIHAT DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2" v-if="status == null">
                                <div class="col-lg-12 mb-2">
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <span
                                                class="text-info rounded small"
                                                >DIKIRIM</span
                                            >
                                            <div class="h6">
                                                Sandal Jepit Sun Swallow Hitam
                                            </div>
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <div class="small">1 pcs</div>
                                                <div class="small">
                                                    <span
                                                        class="opacity-25 text-decoration-line-through"
                                                        >Rp. 20.000</span
                                                    >
                                                    Rp. 10.000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">1 produk</div>
                                        <div class="small">
                                            Total Pesanan: Rp. 10.000
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2 align-items-center"
                                    >
                                        <div class="small opacity-25">
                                            Belum Dinilai
                                        </div>
                                        <button
                                            class="btn btn-sm btn-light px-2"
                                        >
                                            LIHAT DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2" v-if="status == null">
                                <div class="col-lg-12 mb-2">
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <span
                                                class="text-success rounded small"
                                                >SELESAI</span
                                            >
                                            <div class="h6">
                                                Sandal Jepit Sun Swallow Hitam
                                            </div>
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <div class="small">1 pcs</div>
                                                <div class="small">
                                                    <span
                                                        class="opacity-25 text-decoration-line-through"
                                                        >Rp. 20.000</span
                                                    >
                                                    Rp. 10.000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">1 produk</div>
                                        <div class="small">
                                            Total Pesanan: Rp. 10.000
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2 align-items-center"
                                    >
                                        <div class="small opacity-25">
                                            Belum Dinilai
                                        </div>
                                        <button
                                            class="btn btn-sm btn-light px-2"
                                        >
                                            LIHAT DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2" v-if="status == null">
                                <div class="col-lg-12 mb-2">
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <span
                                                class="text-danger rounded small"
                                                >DIBATALKAN</span
                                            >
                                            <div class="h6">
                                                Sandal Jepit Sun Swallow Hitam
                                            </div>
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <div class="small">1 pcs</div>
                                                <div class="small">
                                                    <span
                                                        class="opacity-25 text-decoration-line-through"
                                                        >Rp. 20.000</span
                                                    >
                                                    Rp. 10.000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">1 produk</div>
                                        <div class="small">
                                            Total Pesanan: Rp. 10.000
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2 align-items-center"
                                    >
                                        <div class="small opacity-25">
                                            Belum Dinilai
                                        </div>
                                        <button
                                            class="btn btn-sm btn-light px-2"
                                        >
                                            LIHAT DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-2" v-if="status == null">
                                <div class="col-lg-12 mb-2">
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <span
                                                class="text-danger rounded small"
                                                >PENGEMBALIAN</span
                                            >
                                            <div class="h6">
                                                Sandal Jepit Sun Swallow Hitam
                                            </div>
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <div class="small">1 pcs</div>
                                                <div class="small">
                                                    <span
                                                        class="opacity-25 text-decoration-line-through"
                                                        >Rp. 20.000</span
                                                    >
                                                    Rp. 10.000
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">1 produk</div>
                                        <div class="small">
                                            Total Pesanan: Rp. 10.000
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <hr />
                                    <div
                                        class="d-flex justify-content-between my-2 align-items-center"
                                    >
                                        <div class="small opacity-25">
                                            Belum Dinilai
                                        </div>
                                        <button
                                            class="btn btn-sm btn-light px-2"
                                        >
                                            LIHAT DETAIL
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row" v-else>
                                <div class="col-lg-12 py-2">
                                    <div class="border rounded">
                                        <div
                                            class="d-flex justify-content-center align-items-center my-2"
                                        >
                                            <span class="small"
                                                >Belum ada pesanan</span
                                            >
                                        </div>
                                    </div>
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
