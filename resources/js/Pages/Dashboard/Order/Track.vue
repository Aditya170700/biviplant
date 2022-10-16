<template>
    <Layout
        :title="'Detail Pengiriman'"
        :typeButton="'back'"
        :href="route('admin.orders.show', { id: attrs.order_detail?.order_id })"
        ><div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-lg-12 py-2">
                                <div class="d-flex justify-content-between">
                                    <span class="h6"> No. Resi </span>
                                    <span
                                        class="opacity-50"
                                        @click="
                                            copyClipboard(
                                                attrs.order_detail.receipt,
                                                'Nomor resi berhasi disalin'
                                            )
                                        "
                                        v-if="attrs.order_detail.receipt"
                                        >{{ attrs.order_detail.receipt }}
                                        <i class="fas fa-paste ms-2"></i
                                    ></span>
                                    <span class="opacity-50" v-else
                                        >Belum Ada Resi</span
                                    >
                                </div>
                                <hr class="my-2" />
                            </div>
                        </div>
                        <div class="row" v-if="!attrs.order_detail.receipt">
                            <div class="col-lg-12 py-2 text-center">
                                <div class="alert alert-danger" role="alert">
                                    <i
                                        class="fas fa-clock mb-3"
                                        style="font-size: 40px"
                                    ></i>
                                    <br />
                                    <div class="h6 fw-bold text-white">
                                        Jika pembayaran sudah dilakukan, segera
                                        kirim pesanan
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="row"
                            v-if="
                                attrs.order_detail.receipt && !shipping.loading
                            "
                        >
                            <div
                                class="col-lg-12 py-2 text-center"
                                v-if="shipping.data && shipping.data.delivered"
                            >
                                <div class="alert alert-success" role="alert">
                                    <i
                                        class="fas fa-check mb-3"
                                        style="font-size: 40px"
                                    ></i>
                                    <br />
                                    <div class="h6 fw-bold">
                                        Pesanan telah tiba ditujuan
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="row"
                            v-if="
                                attrs.order_detail.receipt &&
                                !shipping.loading &&
                                shipping.data &&
                                shipping.data.manifest.length > 0
                            "
                        >
                            <div class="col-lg-12 py-2">
                                <ul class="list-group">
                                    <li
                                        class="list-group-item"
                                        v-for="(
                                            data, i
                                        ) in shipping.data.manifest.reverse()"
                                        :key="i"
                                    >
                                        <p class="small mb-2 text-dark">
                                            {{ data.manifest_description }}
                                        </p>
                                        <span class="small text-muted"
                                            >2 Feb 2021 - 12:38 PM</span
                                        >
                                    </li>
                                </ul>
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
import { onMounted, reactive, useAttrs } from "@vue/runtime-core";
import { rupiah, toastError, toastSuccess } from "../../../utils";
import { copyText } from "vue3-clipboard";
import axios from "axios";

let attrs = useAttrs();
let shipping = reactive({
    data: null,
    loading: false,
});

function copyClipboard(text, pesan) {
    copyText(text, undefined, (error, event) => {
        if (error) {
            toastError(pesan);
        } else {
            toastSuccess(pesan);
        }
    });
}

onMounted(() => {
    if (attrs.order_detail?.receipt && attrs.order_detail?.courier) {
        shipping.loading = true;
        axios
            .get("/api/orders/track", {
                params: {
                    receipt: attrs.order_detail.receipt,
                    courier: attrs.order_detail.courier.toLowerCase(),
                },
            })
            .then((res) => {
                shipping.data = res.data.data;
                shipping.loading = false;
            })
            .catch((err) => {
                shipping.loading = false;
                toastError(err.response.data.message);
            });
    }
});
</script>
