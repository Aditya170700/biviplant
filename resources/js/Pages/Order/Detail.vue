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
                                <span class="h6">Rincian Pesanan</span>
                                <Link
                                    :href="route('orders.history')"
                                    class="btn btn-outline-secondary px-2 btn-sm"
                                >
                                    <i class="lni lni-arrow-left me-2"></i>
                                    Kembali
                                </Link>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 py-2">
                                    <hr class="mb-2" />
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="h6">
                                            <i class="lni lni-caravan me-2"></i>
                                            Informasi Pengiriman
                                        </span>
                                        <Link
                                            :href="
                                                route('orders.track', `uuid`)
                                            "
                                            class="btn btn-sm btn-light"
                                            >LIHAT</Link
                                        >
                                    </div>
                                    <div class="opacity-50">HEMAT</div>
                                    <div class="opacity-50">
                                        Anteraja Ekonomi - 19283671283121
                                    </div>
                                    <div class="text-success small">
                                        Paket telah diterima Aditya
                                    </div>
                                    <div class="opacity-50 small">
                                        29 Juli 2022 17:07
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2">
                                    <hr class="mb-2" />
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="h6">
                                            <i
                                                class="lni lni-map-marker me-2"
                                            ></i>
                                            Alamat Pengiriman
                                        </span>
                                    </div>
                                    <div class="opacity-50">Aditya</div>
                                    <div class="opacity-50">08812668976</div>
                                    <div class="opacity-50 small">
                                        RT 03 RW 12 Watusigar, Ngawen
                                    </div>
                                    <div class="opacity-50 small">
                                        Ngawen, Gunungkidul, DI Yogyakarta,
                                        55853
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-2">
                                    <hr class="mb-2" />
                                    <div class="d-flex justify-content-start">
                                        <img
                                            src="https://1.bp.blogspot.com/-BTgclWrOs2g/UoD9qBE5McI/AAAAAAAAZz0/tUMAGpA-x2o/s1600/kendall+charcoal+HC-166.jpg"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
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
                                        class="d-flex justify-content-between opacity-50 my-2"
                                    >
                                        <div class="small">Subtotal Produk</div>
                                        <div class="small">Rp. 10.000</div>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between opacity-50 my-2"
                                    >
                                        <div class="small">
                                            Subtotal Pengiriman
                                        </div>
                                        <div class="small">Rp. 7.000</div>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">Total Pesanan</div>
                                        <div class="small">Rp. 17.000</div>
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2">
                                    <hr class="mb-2" />
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="h6">
                                            <i
                                                class="lni lni-credit-cards me-2"
                                            ></i>
                                            Metode Pembayaran
                                        </span>
                                    </div>
                                    <div class="opacity-50">
                                        BRIVA - 91283789123679
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2">
                                    <hr class="mb-2" />
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            No. Pesanan
                                        </span>
                                        <span class="small opacity-50">
                                            2198376128391283
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pemesanan
                                        </span>
                                        <span class="small opacity-50">
                                            20 Juli 2022 17:07
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pembayaran
                                        </span>
                                        <span class="small opacity-50">
                                            20 Juli 2022 17:07
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pengiriman
                                        </span>
                                        <span class="small opacity-50">
                                            20 Juli 2022 17:07
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pesanan Selesai
                                        </span>
                                        <span class="small opacity-50">
                                            20 Juli 2022 17:07
                                        </span>
                                    </div>
                                    <hr class="mt-2" />
                                </div>
                                <div class="col-6">
                                    <div class="d-grid">
                                        <button class="btn btn-sm btn-light">
                                            <i class="lni lni-cart me-2"></i
                                            >Beli Lagi
                                        </button>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="d-grid">
                                        <button
                                            class="btn btn-sm btn-light text-white"
                                            style="
                                                background-color: #00b893 !important;
                                            "
                                        >
                                            <i class="lni lni-pencil me-2"></i
                                            >Nilai
                                        </button>
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
