<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../Shared/Homepage/Header.vue";
import Sidebar from "./../Shared/Homepage/Sidebar.vue";
import Footer from "./../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import { rupiah, toastError } from "../utils";
import AddressModal from "./AddressModal.vue";
import CourierModal from "./CourierModal.vue";
import { Inertia } from "@inertiajs/inertia";

let attrs = useAttrs();
const props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
});

const metaTitle = ref(props.meta_title);
const metaDescription = ref(props.meta_description);
const metaKeyword = ref(props.meta_keyword);
const voucher = ref(0);

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

    attrs.carts.forEach((cart) => {
        let strikePrice = cart.product.strike_price;
        let price = parseInt(cart.product.price);
        let qty = parseInt(cart.qty);
        let shippingCost = parseInt(cart.shipping_cost);

        res += price * qty + shippingCost;
        strikeRes += strikePrice * qty + shippingCost;
    });

    return { res, strikeRes };
}

function destroy(id) {
    Inertia.delete(route("cart.destroy", id), {
        _method: "delete",
    });
}

function checkVoucher() {
    //
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
                                <div class="col-12"><hr /></div>
                            </div>
                            <div class="row mb-3">
                                <div class="col-12">
                                    <h6 class="mb-0">Voucher</h6>
                                    <p class="mb-2">
                                        Masukkan kode voucher dan dapatkan
                                        diskon
                                    </p>
                                </div>
                                <div class="col-12">
                                    <input
                                        class="form-control"
                                        placeholder="KODE-1234"
                                    />
                                </div>
                                <div class="col-12 mt-3"><hr /></div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <span>Voucher : </span>
                                    <span
                                        class="small text-muted text-decoration-line-through"
                                        >{{ rupiah(voucher) }}</span
                                    >
                                </div>
                                <div class="col-12 mb-3">
                                    <span class="me-2">Total :</span
                                    ><span
                                        class="small text-muted text-decoration-line-through me-2"
                                        >{{
                                            rupiah(total().strikeRes - voucher)
                                        }}</span
                                    ><span class="text-primary fw-bold">{{
                                        rupiah(total().res - voucher)
                                    }}</span>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-success">
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
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
