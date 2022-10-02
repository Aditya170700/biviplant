<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";
import { rupiah, toastError, toastSuccess, formatDate } from "../../utils";
import { copyText } from "vue3-clipboard";

let attrs = useAttrs();

function copyClipboard(text, pesan) {
    copyText(text, undefined, (error, event) => {
        if (error) {
            toastError(pesan);
        } else {
            toastSuccess(pesan);
        }
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
                                <span class="h6">Rincian Pesanan</span>
                                <Link
                                    :href="route('orders.history')"
                                    class="btn btn-outline-secondary px-2 btn-sm"
                                >
                                    <i class="lni lni-arrow-left me-2"></i>
                                    Kembali
                                </Link>
                            </div>
                            <div
                                class="row"
                                v-for="(detail, idetail) in attrs.order
                                    .order_details"
                                :key="idetail"
                            >
                                <div class="col-lg-12 py-2">
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="h6">
                                            <i class="lni lni-gift me-2"></i>
                                            Produk
                                        </span>
                                    </div>
                                    <div class="d-flex justify-content-start">
                                        <img
                                            :src="detail.product.files[0].src"
                                            alt=""
                                            style="width: 100px"
                                            class="rounded me-2"
                                        />
                                        <div>
                                            <div class="h6 one-line">
                                                {{ detail.product.name }}
                                            </div>
                                            <div class="small mb-3">
                                                {{ detail.qty }}
                                                pcs
                                            </div>
                                            <div
                                                class="d-flex justify-content-between small"
                                            >
                                                <span
                                                    class="opacity-25 text-decoration-line-through small"
                                                    >{{
                                                        rupiah(
                                                            detail.strike_price
                                                        )
                                                    }}</span
                                                >
                                                <span class="small">
                                                    {{ rupiah(detail.price) }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2">
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
                                    <div class="opacity-50">
                                        {{ detail.user_address.receiver }}
                                    </div>
                                    <div class="opacity-50">
                                        {{ detail.user_address.phone }}
                                    </div>
                                    <div class="opacity-50 small">
                                        {{ detail.user_address.detail }}
                                    </div>
                                    <div class="opacity-50 small">
                                        {{
                                            `${detail.user_address.subdistrict.name}, ${detail.user_address.subdistrict.city.name}, ${detail.user_address.subdistrict.city.province.name} ${detail.user_address.postal_code}`
                                        }}
                                    </div>
                                </div>
                                <div class="col-lg-12 py-2">
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="h6">
                                            <i class="lni lni-caravan me-2"></i>
                                            Informasi Pengiriman
                                        </span>
                                        <Link
                                            :href="
                                                route('orders.track', detail.id)
                                            "
                                            class="btn btn-sm btn-light"
                                            >LIHAT</Link
                                        >
                                    </div>
                                    <div class="opacity-50">
                                        {{ detail.courier }}
                                    </div>
                                    <div class="opacity-50">
                                        {{ detail.shipping_service }} -
                                        {{ detail.receipt ?? "Belum ada resi" }}
                                    </div>
                                    <div class="opacity-50 small">
                                        {{ detail.shipping_etd }} hari
                                    </div>
                                    <div class="opacity-50 small">
                                        {{ rupiah(detail.shipping_cost) }}
                                    </div>
                                    <hr class="my-2" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <div
                                        class="d-flex justify-content-between opacity-50 my-2"
                                    >
                                        <div class="small">Voucher</div>
                                        <div class="small">
                                            {{ rupiah(attrs.order.voucher) }}
                                        </div>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between my-2"
                                    >
                                        <div class="small">Total</div>
                                        <div class="small">
                                            {{ rupiah(attrs.order.total) }}
                                        </div>
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
                                    <div class="col-lg-12">
                                        <div
                                            class="d-flex justify-content-between opacity-50 my-2"
                                        >
                                            <div class="small">Metode</div>
                                            <div class="small text-uppercase">
                                                {{ attrs.order.payment_method }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="d-flex justify-content-between opacity-50 my-2"
                                        >
                                            <div class="small">Channel</div>
                                            <div class="small text-uppercase">
                                                {{
                                                    attrs.order.payment_channel
                                                }}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="d-flex justify-content-between opacity-50 my-2"
                                        >
                                            <div class="small">
                                                Nomor Pembayaran
                                            </div>
                                            <div class="small text-uppercase">
                                                {{ attrs.order.payment_no
                                                }}<i
                                                    class="lni lni-empty-file ms-2"
                                                    @click="
                                                        copyClipboard(
                                                            attrs.order
                                                                .payment_no,
                                                            'VA berhasil disalin'
                                                        )
                                                    "
                                                ></i>
                                            </div>
                                        </div>
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
                                        <span
                                            class="small opacity-50 text-uppercase"
                                        >
                                            {{ attrs.order.id.substr(0, 13) }}
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pemesanan
                                        </span>
                                        <span class="small opacity-50">
                                            {{
                                                formatDate(
                                                    attrs.order.created_at,
                                                    "DD MMMM YYYY HH:mm"
                                                )
                                            }}
                                        </span>
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pembayaran
                                        </span>
                                        <span
                                            class="small opacity-50"
                                            v-if="attrs.order.paid_at"
                                        >
                                            {{
                                                formatDate(
                                                    attrs.order.paid_at,
                                                    "DD MMMM YYYY HH:mm"
                                                )
                                            }}
                                        </span>
                                        <span class="small opacity-50" v-else
                                            >-</span
                                        >
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pengiriman
                                        </span>
                                        <span
                                            class="small opacity-50"
                                            v-if="attrs.order.send_at"
                                        >
                                            {{
                                                formatDate(
                                                    attrs.order.send_at,
                                                    "DD MMMM YYYY HH:mm"
                                                )
                                            }}
                                        </span>
                                        <span class="small opacity-50" v-else
                                            >-</span
                                        >
                                    </div>
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <span class="small opacity-50">
                                            Waktu Pesanan Selesai
                                        </span>
                                        <span
                                            class="small opacity-50"
                                            v-if="attrs.order.finish_at"
                                        >
                                            {{
                                                formatDate(
                                                    attrs.order.finish_at,
                                                    "DD MMMM YYYY HH:mm"
                                                )
                                            }}
                                        </span>
                                        <span class="small opacity-50" v-else
                                            >-</span
                                        >
                                    </div>
                                    <hr class="mt-2" />
                                </div>
                                <div class="col-12">
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
