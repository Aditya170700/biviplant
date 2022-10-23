<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";
import { rupiah } from "../../utils";

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
                                <span class="h6">Riwayat Pesanan</span>
                            </div>
                            <div
                                class="d-flex align-items-center justify-content-between mb-3 overflow-auto"
                            >
                                <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == null ? 'text-white' : ''
                                    }`"
                                    :style="`${
                                        attrs.status == null
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: null,
                                        })
                                    "
                                >
                                    Semua
                                </Link>
                                <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == 'Pending'
                                            ? 'text-white'
                                            : ''
                                    }`"
                                    :style="`${
                                        attrs.status == 'Pending'
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: 'Pending',
                                        })
                                    "
                                >
                                    Pending
                                </Link>
                                <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == 'Dikemas'
                                            ? 'text-white'
                                            : ''
                                    }`"
                                    :style="`${
                                        attrs.status == 'Dikemas'
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: 'Dikemas',
                                        })
                                    "
                                >
                                    Dikemas
                                </Link>
                                <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == 'Dikirim'
                                            ? 'text-white'
                                            : ''
                                    }`"
                                    :style="`${
                                        attrs.status == 'Dikirim'
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: 'Dikirim',
                                        })
                                    "
                                >
                                    Dikirim
                                </Link>
                                <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == 'Selesai'
                                            ? 'text-white'
                                            : ''
                                    }`"
                                    :style="`${
                                        attrs.status == 'Selesai'
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: 'Selesai',
                                        })
                                    "
                                >
                                    Selesai
                                </Link>
                                <!-- <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == 'Dibatalkan'
                                            ? 'text-white'
                                            : ''
                                    }`"
                                    :style="`${
                                        attrs.status == 'Dibatalkan'
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: 'Dibatalkan',
                                        })
                                    "
                                >
                                    Dibatalkan
                                </Link>
                                <Link
                                    :class="`col-5 text-center py-2 rounded ${
                                        attrs.status == 'Pengembalian'
                                            ? 'text-white'
                                            : ''
                                    }`"
                                    :style="`${
                                        attrs.status == 'Pengembalian'
                                            ? 'background-color: #00b893 !important'
                                            : ''
                                    }`"
                                    :href="
                                        route('orders.history', {
                                            status: 'Pengembalian',
                                        })
                                    "
                                >
                                    Pengembalian
                                </Link> -->
                            </div>
                            <div v-if="attrs.order.data.length > 0">
                                <div
                                    class="row mb-5"
                                    v-for="(order, iorder) in attrs.order.data"
                                    :key="iorder"
                                >
                                    <div class="col-lg-12 mb-2">
                                        <div
                                            class="d-flex justify-content-start"
                                        >
                                            <img
                                                :src="`${order.order_details[0].product.files[0].src}`"
                                                alt=""
                                                style="width: 100px"
                                                class="rounded me-2"
                                            />
                                            <div class="col-8">
                                                <span
                                                    :class="`text-warning rounded small text-uppercase`"
                                                    >{{
                                                        order.payment_status
                                                    }}</span
                                                >
                                                <div class="h6 one-line">
                                                    {{
                                                        order.order_details[0]
                                                            .product.name
                                                    }}
                                                </div>
                                                <div class="small mb-3">
                                                    {{
                                                        order.order_details[0]
                                                            .qty
                                                    }}
                                                    pcs
                                                </div>
                                                <div
                                                    class="d-flex justify-content-between small"
                                                >
                                                    <span
                                                        class="opacity-25 text-decoration-line-through small"
                                                        >{{
                                                            rupiah(
                                                                order
                                                                    .order_details[0]
                                                                    .strike_price
                                                            )
                                                        }}</span
                                                    >
                                                    <span class="small">
                                                        {{
                                                            rupiah(
                                                                order
                                                                    .order_details[0]
                                                                    .price
                                                            )
                                                        }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <hr />
                                        <div
                                            class="d-flex justify-content-between my-2"
                                        >
                                            <div class="small">
                                                {{ order.order_details.length }}
                                                produk
                                            </div>
                                            <div class="small">
                                                Total Pesanan:
                                                {{ rupiah(order.total) }}
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
                                                    route(
                                                        'orders.detail',
                                                        order.id
                                                    )
                                                "
                                                class="btn btn-sm btn-light px-2"
                                            >
                                                LIHAT DETAIL
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="row">
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
                            <div class="row mt-5">
                                <div
                                    class="col-lg-12 mb-2 text-center small text-muted"
                                    v-if="attrs.order.data.length > 0"
                                >
                                    Menampilkan {{ attrs.order.from }} -
                                    {{ attrs.order.to }} dari
                                    {{ attrs.order.total }} data
                                </div>
                                <div
                                    class="col-lg-12 py-2 text-center border rounded"
                                    v-if="attrs.order.next_page_url"
                                >
                                    <Link :href="attrs.order.next_page_url">
                                        Tampilkan Lebih Banyak
                                    </Link>
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
