<template>
    <Layout
        :title="'Detail Pesanan'"
        :typeButton="'back'"
        :href="route('admin.orders.index')"
        ><div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div
                                class="col-lg-6"
                                v-for="(detail, idetail) in attrs.order
                                    .order_details"
                                :key="idetail"
                            >
                                <div class="row">
                                    <div class="col-lg-12 py-2">
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <span class="h6">
                                                <i class="fas fa-gift me-2"></i>
                                                Produk
                                            </span>
                                        </div>
                                        <div
                                            class="d-flex justify-content-start"
                                        >
                                            <img
                                                :src="
                                                    detail.product.files[0].src
                                                "
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
                                                        {{
                                                            rupiah(detail.price)
                                                        }}
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
                                                    class="fas fa-location-dot me-2"
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
                                                <i
                                                    class="fas fa-circle-info me-2"
                                                ></i>
                                                Informasi Pengiriman
                                            </span>
                                            <Link
                                                :href="
                                                    route(
                                                        'admin.orders.track',
                                                        detail.id
                                                    )
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
                                            {{
                                                detail.receipt ??
                                                "Belum ada resi"
                                            }}
                                        </div>
                                        <div class="opacity-50 small">
                                            {{ detail.shipping_etd }} hari
                                        </div>
                                        <div class="opacity-50 small">
                                            {{ rupiah(detail.shipping_cost) }}
                                        </div>
                                        <div class="row my-3">
                                            <div class="col-lg-12">
                                                <div class="input-group mb-3">
                                                    <input
                                                        class="form-control"
                                                        placeholder="Nomor resi"
                                                        v-model="detail.receipt"
                                                    />
                                                    <button
                                                        class="btn btn-success"
                                                        @click.prevent="
                                                            updateReceipt(
                                                                detail
                                                            )
                                                        "
                                                        :disabled="
                                                            detail.receipt ===
                                                                null ||
                                                            attrs.order
                                                                .payment_status !==
                                                                'Dikemas'
                                                        "
                                                    >
                                                        <i
                                                            class="fas fa-save"
                                                        ></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 py-2">
                                <hr class="mb-2" />
                                <div
                                    class="d-flex justify-content-between align-items-center"
                                >
                                    <span class="h6">
                                        <i class="fas fa-credit-card me-2"></i>
                                        Metode Pembayaran
                                    </span>
                                </div>
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
                                        <div class="small fw-bold text-success">
                                            Total
                                        </div>
                                        <div class="small fw-bold text-success">
                                            {{ rupiah(attrs.order.total) }}
                                        </div>
                                    </div>
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
                                            {{ attrs.order.payment_channel }}
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
                                        <div
                                            class="small text-uppercase"
                                            v-if="
                                                attrs.order.payment_channel !=
                                                'qris'
                                            "
                                        >
                                            {{ attrs.order.payment_no
                                            }}<i
                                                class="fas fa-paste ms-2 pointer"
                                                @click="
                                                    copyClipboard(
                                                        attrs.order.payment_no,
                                                        'VA berhasil disalin'
                                                    )
                                                "
                                            ></i>
                                        </div>
                                        <div
                                            class="small text-decoration-none"
                                            v-else
                                        >
                                            <a
                                                :href="`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${attrs.order.payment_no}`"
                                                target="_blank"
                                                ><i class="fas fa-eye me-2"></i
                                                >Lihat QR</a
                                            >
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
                                        {{ attrs.order.created_at }}
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
                                        {{ attrs.order.paid_at }}
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
                                        {{ attrs.order.send_at }}
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
                                        {{ attrs.order.finish_at }}
                                    </span>
                                    <span class="small opacity-50" v-else
                                        >-</span
                                    >
                                </div>
                                <hr class="mt-2" />
                            </div>
                            <div
                                class="col-12"
                                v-if="attrs.order.payment_status == 'Dikirim'"
                            >
                                <div class="d-grid">
                                    <button
                                        class="btn btn-sm btn-light text-white"
                                        style="
                                            background-color: #00b893 !important;
                                        "
                                        @click="finishOrder(attrs.order.id)"
                                    >
                                        <i class="fas fa-gift me-2"></i>Pesanan
                                        sudah diterima?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script setup>
import Layout from "../../../Layouts/Dashboard/App.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { useAttrs } from "@vue/runtime-core";
import { rupiah, toastError, toastSuccess } from "../../../utils";
import { copyText } from "vue3-clipboard";
import { Inertia } from "@inertiajs/inertia";

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

function updateReceipt(detail) {
    confirmation("Apakah nomor resi sudah benar?").then((res) => {
        if (res) {
            let data = { receipt: detail.receipt };
            Inertia.post(
                route("admin.orders.update-receipt", {
                    id: detail.id,
                }),
                {
                    _method: "put",
                    ...data,
                }
            );
        }
    });
}

function finishOrder(orderId) {
    Inertia.post(
        route("admin.orders.finish", {
            id: orderId,
        }),
        {
            _method: "put",
        }
    );
}
</script>
