<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../Shared/Homepage/Header.vue";
import Sidebar from "./../Shared/Homepage/Sidebar.vue";
import Footer from "./../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onBeforeMount, onMounted, useAttrs } from "@vue/runtime-core";
import { rupiah, toastError, toastSuccess } from "../utils";
import AddressModal from "./AddressModal.vue";
import CourierModal from "./CourierModal.vue";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";

let attrs = useAttrs();
const props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
});
let voucherCode = reactive({
    code: "",
    data: null,
    loading: false,
});
const metaTitle = ref(props.meta_title);
const metaDescription = ref(props.meta_description);
const metaKeyword = ref(props.meta_keyword);
const voucher = ref(0);
const paymentMethod = reactive({
    data: [],
    selected: {
        paymentMethod: null,
        paymentChannel: null,
        fee: 0,
        feeType: 0,
    },
    loading: false,
});

onBeforeMount(() => {
    paymentMethod.loading = true;
    axios
        .get("/api/orders/list-payment-method")
        .then((res) => {
            paymentMethod.data = res.data.data;
            paymentMethod.loading = false;
        })
        .catch((err) => {
            paymentMethod.loading = false;
            toastError(err);
        });
});

function changeQty(cart, val) {
    let res = cart.qty + val;

    if (res == 0) {
        toastError("Kuantitas tidak boleh 0");
        return;
    }

    if (res > cart.product.stock) {
        toastError("Stok tidak mencukupi");
        return;
    }

    voucherCode.code = "";
    voucherCode.data = null;
    voucher.value = 0;

    Inertia.put(
        route("cart.update", cart.id),
        {
            user_address_id: cart.user_address_id,
            user_id: cart.user_id,
            product_id: cart.product_id,
            qty: cart.qty + val,
            courier: null,
            shipping_cost: null,
            shipping_etd: null,
            shipping_service: null,
        },
        {
            _method: "put",
        }
    );
}

function total() {
    let res = 0;
    let strikeRes = 0;
    let shippingCost = 0;

    attrs.carts.forEach((cart) => {
        let strikePrice = cart.product.strike_price;
        let price = parseInt(cart.product.price);
        let qty = parseInt(cart.qty);
        let ongkir = parseInt(cart.shipping_cost ?? 0);

        res += price * qty + ongkir;
        strikeRes += strikePrice * qty + ongkir;
        shippingCost += ongkir;
    });

    res -= voucher.value;

    return { res, strikeRes, shippingCost };
}

function destroy(id) {
    Inertia.delete(route("cart.destroy", id), {
        _method: "delete",
    });
}

function selectPaymentMethod(ipm, imethod) {
    let pm = paymentMethod.data[ipm];
    let method = null;
    if (pm.Code == "va") {
        method = pm.Channels[imethod];
    } else {
        method = pm.PaymentMethod[imethod];
    }

    paymentMethod.selected.paymentMethod = pm.Code;
    paymentMethod.selected.paymentChannel = method.Code;
    paymentMethod.selected.fee = method.TransactionFee?.ActualFee ?? 0;
    paymentMethod.selected.feeType = method.TransactionFee?.ActualFeeType ?? 0;
}

function checkVoucher() {
    voucherCode.loading = true;
    axios
        .post("/api/vouchers/check", {
            code: voucherCode.code,
            total: total().res,
        })
        .then((res) => {
            voucherCode.data = res.data.data;
            voucher.value = (total().res * res.data.data.discount) / 100;
            voucherCode.loading = false;
        })
        .catch((err) => {
            toastError(err.response.data.message);
            voucherCode.loading = false;
        });
}

function checkout() {
    if (
        !paymentMethod.selected.paymentMethod ||
        !paymentMethod.selected.paymentChannel
    ) {
        toastError("Belum memilih metode pembayaran");
        return false;
    }

    attrs.carts.forEach((cart) => {
        if (
            !cart.courier ||
            !cart.shipping_cost ||
            !cart.shipping_etd ||
            !cart.shipping_service
        ) {
            toastError("Belum memilih kurir");
            return false;
        }
        if (!cart.user_address_id) {
            toastError("Belum memilih alamat pengiriman");
            return false;
        }
    });

    Inertia.post(
        route("orders.store"),
        {
            carts: attrs.carts,
            payment_method: paymentMethod.selected,
            voucher_code: voucherCode.data?.code,
            voucher: voucher.value,
            total: total(),
        },
        {
            _method: "post",
        }
    );
}
</script>

<template>
    <div>
        <Head>
            <title>{{ metaTitle }}</title>
            <meta
                head-key="description"
                name="description"
                :content="metaDescription"
            />
            <meta head-key="keyword" name="keyword" :content="metaKeyword" />
        </Head>
        <Header></Header>
        <Sidebar></Sidebar>
        <div
            class="toast pwa-install-alert shadow bg-white"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-bs-delay="5000"
            data-bs-autohide="true"
        >
            <div class="toast-body">
                <div class="content d-flex align-items-center mb-2">
                    <img src="img/icons/icon-72x72.png" alt="" />
                    <h6 class="mb-0">Add to Home Screen</h6>
                    <button
                        class="btn-close ms-auto"
                        type="button"
                        data-bs-dismiss="toast"
                        aria-label="Close"
                    ></button>
                </div>
                <span class="mb-0 d-block"
                    >Add Suha on your mobile home screen. Click the<strong
                        class="mx-1"
                        >Add to Home Screen</strong
                    >button &amp; enjoy it like a regular app.</span
                >
            </div>
        </div>
        <div class="page-content-wrapper" style="min-height: 100">
            <div class="container">
                <div
                    class="cart-wrapper-area py-3 text-center"
                    v-if="attrs.carts.length <= 0"
                >
                    <div class="alert alert-danger" role="alert">
                        <i class="fa fa-cart-plus fa-3x mb-3"></i>
                        <br />
                        <div class="h6 fw-bold">Cart kamu kosong!</div>
                    </div>
                </div>
                <div class="py-3" v-else>
                    <div class="card p-0">
                        <div class="card-body">
                            <div
                                class="row mb-3"
                                v-for="(cart, i) in attrs.carts"
                                :key="i"
                            >
                                <AddressModal
                                    :user_addresses="attrs.user_addresses"
                                    :cart="cart"
                                ></AddressModal>
                                <CourierModal :cart="cart"></CourierModal>
                                <div class="col-2">
                                    <img
                                        class="rounded"
                                        src="img/product/11.png"
                                        alt=""
                                        v-if="cart.product.files.length <= 0"
                                    />
                                    <img
                                        class="rounded"
                                        :src="cart.product.files[0].src"
                                        alt=""
                                        v-else
                                    />
                                </div>
                                <div class="col-8">
                                    <Link
                                        class="product-title d-block"
                                        :href="
                                            route('product.show', {
                                                slug: cart.product.slug,
                                            })
                                        "
                                    >
                                        {{ cart.product.name }}
                                    </Link>
                                    <span
                                        class="text-muted text-decoration-line-through me-2 small"
                                        >{{
                                            cart.product.strike_price_rp
                                        }}</span
                                    ><span class="text-dark small">{{
                                        cart.product.price_rp
                                    }}</span>
                                    <div
                                        class="d-flex justify-content-start align-items-center p-0 my-3"
                                    >
                                        <i
                                            @click="changeQty(cart, -1)"
                                            :class="`lni lni-circle-minus text-danger`"
                                            style="font-size: 20px"
                                        ></i>
                                        <span class="mx-2"
                                            >{{ cart.qty }} pcs</span
                                        >
                                        <i
                                            @click="changeQty(cart, +1)"
                                            :class="`lni lni-circle-plus text-primary`"
                                            style="font-size: 20px"
                                        ></i>
                                    </div>
                                </div>
                                <div class="col-2 text-end">
                                    <a
                                        href="#"
                                        @click.prevent="destroy(cart.id)"
                                        style="font-size: 20px"
                                    >
                                        <i
                                            class="lni lni-cross-circle text-danger"
                                        ></i>
                                    </a>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row">
                                        <div
                                            class="col-12 d-flex justify-content-between"
                                        >
                                            <span class="fw-bold">
                                                Dikirim ke :</span
                                            ><a
                                                href="#"
                                                data-bs-toggle="offcanvas"
                                                :data-bs-target="`#addressModal${cart.id}`"
                                                :aria-controls="`addressModal${cart.id}`"
                                                style="align-items: center"
                                            >
                                                <i
                                                    class="lni lni-pencil text-warning"
                                                ></i>
                                            </a>
                                        </div>
                                        <div class="col-12 small text-muted">
                                            {{
                                                `${cart.user_address.subdistrict.name}, ${cart.user_address.subdistrict.city.name}, ${cart.user_address.subdistrict.city.province.name}, ${cart.user_address.postal_code}`
                                            }}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="row">
                                        <div
                                            class="col-12 d-flex justify-content-between"
                                        >
                                            <span class="fw-bold"> Kurir :</span
                                            ><a
                                                href="#"
                                                data-bs-toggle="offcanvas"
                                                :data-bs-target="`#courierModal${cart.id}`"
                                                :aria-controls="`courierModal${cart.id}`"
                                                style="align-items: center"
                                            >
                                                <i
                                                    class="lni lni-pencil text-warning"
                                                ></i
                                            ></a>
                                        </div>
                                        <div
                                            class="col-12 small text-muted"
                                            v-if="
                                                cart.courier ||
                                                cart.shipping_service ||
                                                cart.shipping_cost ||
                                                cart.shipping_etd
                                            "
                                        >
                                            <p class="small">
                                                {{ cart.courier }}
                                            </p>
                                            <p class="small">
                                                {{ cart.shipping_service }}
                                            </p>
                                            <p class="small">
                                                Rp. {{ cart.shipping_cost }}
                                            </p>
                                            <p class="small">
                                                {{ cart.shipping_etd }} hari
                                            </p>
                                            <p class="small">
                                                {{ cart.qty }} pcs
                                            </p>
                                        </div>
                                        <div
                                            class="col-12 small text-muted"
                                            v-else
                                        >
                                            <span class="text-danger blink"
                                                >Belum memilih kurir</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-12">
                                    <h6 class="fw-bold mb-0">Voucher</h6>
                                    <p class="mb-2">
                                        Masukkan kode voucher dan dapatkan
                                        diskon
                                    </p>
                                </div>
                                <div class="col-12">
                                    <div class="input-group mb-3">
                                        <input
                                            class="form-control"
                                            placeholder="KODE"
                                            v-model="voucherCode.code"
                                        />
                                        <button
                                            class="btn btn-success"
                                            @click="checkVoucher"
                                            :disabled="
                                                voucherCode.code == '' ||
                                                voucherCode.loading
                                            "
                                        >
                                            <i
                                                class="lni lni-checkmark"
                                                v-if="!voucherCode.loading"
                                            ></i>
                                            <div
                                                class="spinner-border spinner-border-sm text-light"
                                                role="status"
                                                v-else
                                            >
                                                <span class="visually-hidden"
                                                    >Loading...</span
                                                >
                                            </div>
                                        </button>
                                    </div>
                                    <span
                                        class="small text-muted blink"
                                        v-if="voucherCode.loading"
                                        >Cek voucher...</span
                                    >
                                    <span
                                        class="small text-success"
                                        v-if="voucher > 0"
                                        >Mendapat potongan sebesar
                                        {{ rupiah(voucher) }}</span
                                    >
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-12">
                                    <h6 class="fw-bold mb-0">Pembayaran</h6>
                                    <p class="mb-2">
                                        Pilih metode pembayaran yang kamu
                                        inginkan
                                    </p>
                                </div>
                                <div class="col-12">
                                    <ul class="list-group">
                                        <li
                                            class="list-group-item small border-danger"
                                            v-if="paymentMethod.loading"
                                        >
                                            <span
                                                class="small blink text-danger"
                                                >Sedang memuat metode
                                                pembayaran...</span
                                            >
                                        </li>
                                        <li
                                            class="list-group-item small border-danger small text-danger"
                                            v-if="
                                                !paymentMethod.loading &&
                                                paymentMethod.data.length == 0
                                            "
                                        >
                                            Metode pembayaran tidak ditemukan
                                        </li>
                                    </ul>
                                    <ul
                                        class="list-group"
                                        v-if="
                                            !paymentMethod.loading &&
                                            paymentMethod.data.length > 0
                                        "
                                    >
                                        <li
                                            class="list-group-item small"
                                            v-for="(
                                                pm, ipm
                                            ) in paymentMethod.data"
                                            :key="ipm"
                                        >
                                            <a
                                                data-bs-toggle="collapse"
                                                :href="`#collapse-pm-${ipm}`"
                                                role="button"
                                                aria-expanded="false"
                                                :aria-controls="`collapse-pm-${ipm}`"
                                                class="text-decoration-none text-dark d-flex justify-content-between align-items-center"
                                            >
                                                {{ pm.Description }}
                                                <i
                                                    class="lni lni-chevron-right"
                                                ></i
                                            ></a>
                                            <div
                                                class="collapse pt-3"
                                                :id="`collapse-pm-${ipm}`"
                                            >
                                                <div
                                                    class="row"
                                                    v-if="pm.Code != 'va'"
                                                >
                                                    <div
                                                        class="col-6 mb-3"
                                                        v-for="(
                                                            method, imethod
                                                        ) in pm.PaymentMethod"
                                                        :key="imethod"
                                                    >
                                                        <div
                                                            :class="`rounded text-center border py-2 ${
                                                                paymentMethod
                                                                    .selected
                                                                    .paymentMethod ==
                                                                    pm.Code &&
                                                                paymentMethod
                                                                    .selected
                                                                    .paymentChannel ==
                                                                    method.Code
                                                                    ? 'border-success'
                                                                    : ''
                                                            }`"
                                                            @click="
                                                                selectPaymentMethod(
                                                                    ipm,
                                                                    imethod
                                                                )
                                                            "
                                                        >
                                                            <div
                                                                :class="`h6 one-line fw-bold text-uppercase ${
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentMethod ==
                                                                        pm.Code &&
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentChannel ==
                                                                        method.Code
                                                                        ? 'text-success'
                                                                        : 'opacity-25'
                                                                }`"
                                                            >
                                                                {{
                                                                    method.Code
                                                                }}
                                                            </div>
                                                            <span
                                                                :class="`small one-line ${
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentMethod ==
                                                                        pm.Code &&
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentChannel ==
                                                                        method.Code
                                                                        ? 'text-success'
                                                                        : 'opacity-25'
                                                                }`"
                                                                >{{
                                                                    method.Description
                                                                }}</span
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="row" v-else>
                                                    <div
                                                        class="col-6 mb-3"
                                                        v-for="(
                                                            method, imethod
                                                        ) in pm.Channels"
                                                        :key="imethod"
                                                    >
                                                        <div
                                                            :class="`rounded text-center border py-2 ${
                                                                paymentMethod
                                                                    .selected
                                                                    .paymentMethod ==
                                                                    pm.Code &&
                                                                paymentMethod
                                                                    .selected
                                                                    .paymentChannel ==
                                                                    method.Code
                                                                    ? 'border-success'
                                                                    : ''
                                                            }`"
                                                            @click="
                                                                selectPaymentMethod(
                                                                    ipm,
                                                                    imethod
                                                                )
                                                            "
                                                        >
                                                            <div
                                                                :class="`h6 one-line fw-bold text-uppercase ${
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentMethod ==
                                                                        pm.Code &&
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentChannel ==
                                                                        method.Code
                                                                        ? 'text-success'
                                                                        : 'opacity-25'
                                                                }`"
                                                            >
                                                                {{
                                                                    method.Code
                                                                }}
                                                            </div>
                                                            <span
                                                                :class="`small one-line ${
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentMethod ==
                                                                        pm.Code &&
                                                                    paymentMethod
                                                                        .selected
                                                                        .paymentChannel ==
                                                                        method.Code
                                                                        ? 'text-success'
                                                                        : 'opacity-25'
                                                                }`"
                                                                >{{
                                                                    method.Description
                                                                }}</span
                                                            >
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-12 mt-3"><hr /></div>
                            </div>
                            <div class="row">
                                <div
                                    class="col-12 d-flex justify-content-between"
                                >
                                    <span class="small fw-bold"
                                        >Metode Pembayaran</span
                                    >
                                    <span
                                        class="small text-success text-uppercase"
                                        v-if="
                                            paymentMethod.selected
                                                .paymentMethod &&
                                            paymentMethod.selected
                                                .paymentChannel
                                        "
                                        >{{
                                            paymentMethod.selected
                                                .paymentMethod
                                        }}({{
                                            paymentMethod.selected
                                                .paymentChannel
                                        }})</span
                                    >
                                    <span class="small text-danger" v-else
                                        >Belum memilih</span
                                    >
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between"
                                >
                                    <span class="small fw-bold">Voucher</span>
                                    <span class="small text-success">{{
                                        rupiah(voucher)
                                    }}</span>
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between"
                                >
                                    <span class="small fw-bold"
                                        >Ongkos Kirim
                                    </span>
                                    <span
                                        class="small text-muted text-decoration-line-through"
                                        >{{
                                            rupiah(total().shippingCost)
                                        }}</span
                                    >
                                </div>
                                <div
                                    class="col-12 d-flex justify-content-between"
                                >
                                    <span class="small fw-bold">Total</span>
                                    <span class="text-success fw-bold">{{
                                        rupiah(total().res)
                                    }}</span>
                                </div>
                                <div
                                    class="col-12 mb-3 d-flex justify-content-between"
                                >
                                    <span class="small fw-bold">Hemat</span>
                                    <span
                                        class="small text-muted text-decoration-line-through"
                                        >{{ rupiah(total().strikeRes) }}</span
                                    >
                                </div>
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button
                                            class="btn btn-success btn-sm"
                                            @click="checkout"
                                        >
                                            <i class="lni lni-postcard me-2"></i
                                            >Checkout
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
