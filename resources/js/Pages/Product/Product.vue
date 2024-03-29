<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "../../Shared/Product/Header.vue";
import Sidebar from "../../Shared/Homepage/Sidebar.vue";
import Footer from "../../Shared/Footer.vue";
import AddressModal from "./AddressModal.vue";
import CourierModal from "./CourierModal.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import { toastError, toastSuccess } from "../../utils.js";
import { onMounted, useAttrs, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import AddressModalGuest from "./AddressModalGuest.vue";
import { Inertia } from "@inertiajs/inertia";

let attrs = useAttrs();
let store = useStore();

let props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    related_products: Object,
    product: Object,
    user_addresses: Object,
    primary_address: Object,
});

onMounted(() => {
    loadFeedback();
});

if (typeof window !== "undefined") {
    let primary_address = reactive(
        props.primary_address ??
            JSON.parse(localStorage.getItem("primary_address"))
    );
}

let form = reactive({
    user_id: attrs.user?.id,
    product_id: props.product.id,
    user_address_id: props.primary_address?.id,
    user_address: "",
    courier: "",
    shipping_service: "",
    shipping_cost: "",
    shipping_etd: "",
    qty: props.product.cart_user?.qty ?? 0 + 1,
});

let feedback = reactive({
    data: [],
    meta: "",
    loading: false,
    more: true,
});

function loadFeedback() {
    axios
        .get(`/api/feedbacks/${props.product.id}`)
        .then((res) => {
            feedback.data = res.data.data;
            feedback.meta = res.data.meta;
            feedback.loading = false;
            // feedback.more = res.data.meta.current_page < res.data.meta.last_page;
        })
        .catch((err) => {
            feedback.loading = false;
            toastError(err.response.data.message);
        });
}

const metaTitle = ref(props.meta_title);
const metaDescription = ref(props.meta_description);
const metaKeyword = ref(props.meta_keyword);

function buyNow() {
    if (!form.user_address_id) {
        toastError("Silahkan pilih alamat pengiriman terlebih dahulu");
        return;
    }

    Inertia.post(route("cart.store"), form);
}

function storeCart() {
    if (!form.user_address_id) {
        toastError("Silahkan pilih alamat pengiriman terlebih dahulu");
        return;
    }

    if (props.product.cart_user == null) {
        axios
            .post("/api/carts", form)
            .then((res) => {
                props.product.cart_user = res.data.data;
                toastSuccess(res.data.message);
            })
            .catch((err) => {
                toastError(err.response.data.message);
            });
    } else {
        axios
            .put("/api/carts", form)
            .then((res) => {
                props.product.cart_user = res.data.data;
                toastSuccess(res.data.message);
            })
            .catch((err) => {
                toastError(err.response.data.message);
            });
    }
}

function storeCartGuest() {
    if (!form.user_address_id) {
        toastError("Silahkan pilih alamat pengiriman terlebih dahulu");
        return;
    }

    form.user_id = null;
    form.courier = store.getters.courier.name;
    form.shipping_service = store.getters.courier.service;
    form.shipping_cost = store.getters.courier.value;
    form.shipping_etd = store.getters.courier.etd;
    form.user_address = primary_address;

    if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(form));
    }
    toastSuccess("Produk berhasil ditambahkan ke keranjang");
}

watch(
    () => store.getters.courier,
    (val) => {
        form.courier = val?.name ?? null;
        form.shipping_service = val?.service ?? null;
        form.shipping_cost = val?.value ?? null;
        form.shipping_etd = val?.etd ?? null;
        form.qty = val?.qty ?? 0;
    }
);
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
        <AddressModal
            :user_addresses="user_addresses"
            v-if="user_addresses != null"
        ></AddressModal>
        <AddressModalGuest v-else></AddressModalGuest>
        <CourierModal
            v-if="primary_address != null"
            :primary_address="primary_address"
            :product="product"
            :qty="form.qty"
        ></CourierModal>
        <div
            class="card fixed-bottom rounded-0 shadow-0 bg-fug"
            style="bottom: 58px"
        >
            <div class="card-body p-0">
                <div class="d-flex justify-content-start align-items-center">
                    <div
                        class="col-3 text-center bg-fug-2 p-3 text-white border-end"
                    >
                        <a href="/chat">
                            <i
                                class="lni lni-comments"
                                style="font-size: 25px"
                            ></i>
                        </a>
                    </div>
                    <div
                        v-if="attrs.user"
                        class="col-3 text-center bg-fug-2 p-3 text-white border-start"
                        @click="storeCart"
                    >
                        <i
                            class="lni lni-cart-full"
                            style="font-size: 25px"
                        ></i>
                    </div>
                    <div
                        v-else
                        class="col-3 text-center bg-fug-2 p-3 text-white border-start"
                        @click="storeCartGuest"
                    >
                        <i
                            class="lni lni-cart-full"
                            style="font-size: 25px"
                        ></i>
                    </div>
                    <div
                        class="col-6 text-center bg-fug-3 p-3 text-white"
                        style="font-size: 18px"
                        @click="buyNow"
                    >
                        Beli Sekarang
                    </div>
                </div>
            </div>
        </div>
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
                    <img src="/img/icons/icon-72x72.png" alt="" />
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
        <div class="page-content-wrapper bg-fug">
            <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-indicators">
                    <button
                        v-for="(file, i) in product.files"
                        :key="i"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        :data-bs-slide-to="i"
                        :class="i == 0 ? 'active' : ''"
                        :aria-current="i == 0 ? true : false"
                        :aria-label="`Slide ${i + 1}`"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div
                        :class="['carousel-item', i == 0 ? 'active' : '']"
                        v-for="(file, i) in product.files"
                        :key="i"
                    >
                        <div class="single-product-slide text-center">
                            <img
                                class="rounded mx-auto d-block mb-2"
                                :src="file.src"
                                :alt="file.alt"
                            />
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="product-description bg-fug">
                <div class="product-title-meta-data bg-white py-3">
                    <div class="container d-flex justify-content-between">
                        <div class="p-title-price">
                            <h6 class="mb-1">{{ product.name }}</h6>
                            <p class="sale-price mb-0">
                                {{ product.price_rp
                                }}<span>{{ product.strike_price_rp }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="container my-2">
                        <hr />
                        <div class="sales-offer-content d-flex mt-2">
                            <div class="col-3">
                                <p class="mb-1 fw-bold">
                                    <strong>Kondisi</strong>
                                </p>
                            </div>
                            <div class="col-9 fw-bold">
                                <p>{{ product.text_condition ?? "-" }}</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2">
                            <div class="col-3">
                                <p class="mb-1 fw-bold">Berat</p>
                            </div>
                            <div class="col-9 fw-bold">
                                <p>{{ product.weight }} gram</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2">
                            <div class="col-3">
                                <p class="mb-1 fw-bold">Stok</p>
                            </div>
                            <div class="col-9 fw-bold">
                                <p>{{ product.stock }}</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2">
                            <div class="col-3">
                                <p class="mb-1 fw-bold">Terjual</p>
                            </div>
                            <div class="col-9 fw-bold">
                                <p>390</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2">
                            <div class="col-3">
                                <p class="mb-1 fw-bold">Kategori</p>
                            </div>
                            <div class="col-9 fw-bold">
                                <p>{{ product?.category?.name }}</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2">
                            <div class="col-3">
                                <p class="mb-1 fw-bold">Dikirim ke</p>
                            </div>
                            <div class="col-9">
                                <a
                                    href="#"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#addressModal"
                                    aria-controls="addressModal"
                                    style="align-items: center"
                                >
                                    <div
                                        class="d-flex justify-content-between align-items-center"
                                    >
                                        <p v-if="primary_address">
                                            {{
                                                `${primary_address.subdistrict.name}, ${primary_address.subdistrict.city.name}, ${primary_address.subdistrict.city.province.name}, ${primary_address.postal_code}`
                                            }}
                                        </p>
                                        <p v-else>Belum Ada Alamat</p>
                                        <i
                                            class="lni lni-chevron-right small"
                                        ></i>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="sales-offer-content mb-2">
                            <hr class="my-2" />
                            <ul class="mb-2">
                                <li>
                                    <i class="lni lni-checkmark-circle"> </i>
                                    100% Kualitas Unggul
                                </li>
                                <li>
                                    <i class="lni lni-checkmark-circle"> </i>
                                    Bergaransi
                                </li>
                                <li>
                                    <i class="lni lni-checkmark-circle"> </i>
                                    100% Terpercaya
                                </li>
                            </ul>
                        </div>
                        <div class="sales-offer-content mb-2">
                            <hr class="my-2" />
                            <h6 class="mb-2">Deskripsi</h6>
                            <p v-html="product.description"></p>
                        </div>
                        <div class="sales-offer-content my-5">
                            <div
                                class="d-flex justify-content-between align-items-center mb-3"
                            >
                                <h6>Produk Terkait</h6>
                                <Link
                                    class="btn btn-light"
                                    :href="
                                        route('category.show', {
                                            slug: product?.category?.slug,
                                        })
                                    "
                                >
                                    Lihat Semua
                                </Link>
                            </div>
                            <div class="related-product-slide carousel">
                                <carousel :items-to-show="1.5">
                                    <slide
                                        class="single-related-product-slide border-0"
                                        v-for="(
                                            relatedProduct, i
                                        ) in related_products"
                                        :key="i"
                                    >
                                        <div class="card product-card">
                                            <div class="card-body text-start">
                                                <Link
                                                    class="product-thumbnail d-block"
                                                    :href="
                                                        route('product.show', {
                                                            slug: relatedProduct.slug,
                                                        })
                                                    "
                                                >
                                                    <img
                                                        class="mb-2"
                                                        :src="
                                                            relatedProduct
                                                                .files[0]?.src
                                                        "
                                                        :alt="
                                                            relatedProduct
                                                                .files[0]?.alt
                                                        "
                                                        style="width: 100%"
                                                    />
                                                </Link>
                                                <Link
                                                    class="product-title d-block"
                                                    :href="
                                                        route('product.show', {
                                                            slug: relatedProduct.slug,
                                                        })
                                                    "
                                                >
                                                    {{ relatedProduct.name }}
                                                </Link>
                                                <p class="sale-price">
                                                    {{ relatedProduct.price_rp
                                                    }}<br /><span>{{
                                                        relatedProduct.strike_price_rp
                                                    }}</span>
                                                </p>
                                            </div>
                                        </div>
                                    </slide>
                                </carousel>
                            </div>
                        </div>
                        <div class="sales-offer-content my-5">
                            <div
                                class="d-flex justify-content-between align-items-center mb-2"
                            >
                                <h6>Ulasan</h6>
                            </div>
                            <div class="rating-review-content">
                                <ul class="ps-0">
                                    <li
                                        class="single-user-review d-flex"
                                        v-if="feedback.data.length < 1"
                                    >
                                        Belum ada ulasan
                                    </li>
                                    <li
                                        class="single-user-review d-flex"
                                        v-for="(data, i) in feedback.data"
                                        :key="i"
                                    >
                                        <div class="user-thumbnail">
                                            <img
                                                :src="
                                                    data.user
                                                        .profile_photo_path_url
                                                "
                                                alt=""
                                            />
                                        </div>
                                        <div class="rating-comment">
                                            <div class="rating">
                                                <i
                                                    :class="`lni lni-star${
                                                        data.rating >= 1
                                                            ? '-filled'
                                                            : ''
                                                    }`"
                                                ></i
                                                ><i
                                                    :class="`lni lni-star${
                                                        data.rating >= 2
                                                            ? '-filled'
                                                            : ''
                                                    }`"
                                                ></i
                                                ><i
                                                    :class="`lni lni-star${
                                                        data.rating >= 3
                                                            ? '-filled'
                                                            : ''
                                                    }`"
                                                ></i
                                                ><i
                                                    :class="`lni lni-star${
                                                        data.rating >= 4
                                                            ? '-filled'
                                                            : ''
                                                    }`"
                                                ></i
                                                ><i
                                                    :class="`lni lni-star${
                                                        data.rating >= 5
                                                            ? '-filled'
                                                            : ''
                                                    }`"
                                                ></i>
                                            </div>
                                            <p
                                                class="comment mb-0"
                                                v-html="data.comment"
                                            ></p>
                                            <span class="name-date">{{
                                                data.created_at
                                            }}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="sales-offer-content mt-2 mb-5">
                            <hr class="mt-4 mb-2" />
                            &nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>

<style>
.btn-danger {
    background-color: #ea4c62 !important;
    border-color: #ea4c62 !important;
}
.btn-primary {
    background-color: #100dd1 !important;
    border-color: #100dd1 !important;
}
.d-flex-30 {
    flex: 0 0 30%;
    max-width: 60%;
    width: 60%;
}
.btn-side {
    max-width: 49%;
    width: 49%;
}

.carousel__item {
    padding: 10px;
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    border-radius: 8px;
    display: flex;
}

.carousel__slide {
    margin-right: 5px;
    flex-shrink: unset;
    position: relative;
    display: flex;
    justify-content: right;
    align-items: flex-start;
}
</style>
