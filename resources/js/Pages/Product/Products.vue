<script setup>
import { onMounted, watch } from "vue";
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Products/Header.vue";
import Sidebar from "./../../Shared/Products/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";
import axios from "axios";
import { useStore } from "vuex";

const props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    categories: Object,
    products: Object,
    product_conditions: Object,
});
let store = useStore();
let category = ref("");
const isLoading = ref(false);
const dataProducts = ref(props.products);
const listProducts = ref(props.products.data);
const productConditions = ref(props.product_conditions);

const nextProduct = () => {
    window.onscroll = () => {
        let bottomOfWindow =
            document.documentElement.scrollTop + window.innerHeight ===
            document.documentElement.offsetHeight;
        if (bottomOfWindow && dataProducts.value.next_page_url) {
            isLoading.value = true;
            Inertia.get(
                dataProducts.value.next_page_url,
                {},
                {
                    preserveState: true,
                    preserveScroll: true,
                    only: ["products"],
                    onSuccess: (res) => {
                        dataProducts.value = res.props.products;
                        listProducts.value = [
                            ...listProducts.value,
                            ...res.props.products.data,
                        ];
                        isLoading.value = false;
                    },
                }
            );
        }
    };
};

onMounted(() => {
    nextProduct();

    const url = new URL(window.location.href);
    category.value = url.searchParams.get("category");
});

const metaTitle = ref(props.meta_title);
const metaDescription = ref(props.meta_description);
const metaKeyword = ref(props.meta_keyword);
const filterCategories = reactive([]);

watch(store.state.filterProduct, (val) => {
    axios
        .get("/api/products", {
            params: store?.state?.filterProduct,
        })
        .then((res) => {
            dataProducts.value = res.data;
            listProducts.value = res.data.data;
        })
        .catch((err) => {
            console.log(err);
        });
});

function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);

    var kvp = document.location.search.substr(1).split("&");
    let i = 0;

    for (; i < kvp.length; i++) {
        if (kvp[i].startsWith(key + "=")) {
            let pair = kvp[i].split("=");
            pair[1] = value;
            kvp[i] = pair.join("=");
            break;
        }
    }

    if (i >= kvp.length) {
        kvp[kvp.length] = [key, value].join("=");
    }

    let params = kvp.join("&");

    document.location.search = params;
}

function setCategory(category) {
    insertParam("category", category);
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
        <Sidebar :product_conditions="productConditions"></Sidebar>
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
        <div class="page-content-wrapper bg-fug">
            <div class="top-products-area py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6 class="fw-bold">KATEGORI</h6>
                    </div>
                    <div class="product-catagories">
                        <div class="row g-3">
                            <div class="col-4">
                                <a
                                    href="#"
                                    :class="`shadow-sm d-flex align-items-center ${
                                        category == '' || !category
                                            ? 'bg-light border border-success'
                                            : ''
                                    }`"
                                    @click.prevent="setCategory('')"
                                >
                                    <img
                                        src="/assets/images/logo/store.svg"
                                        alt=""
                                    />
                                    Semua
                                </a>
                            </div>
                            <div
                                class="col-4"
                                v-for="(cat, i) in categories.data"
                                :key="i"
                            >
                                <a
                                    :class="`shadow-sm d-flex align-items-center ${
                                        category == cat.slug
                                            ? 'bg-light border border-success'
                                            : ''
                                    }`"
                                    href="#"
                                    @click.prevent="setCategory(cat.slug)"
                                >
                                    <img
                                        :src="cat.icon_url"
                                        alt=""
                                        style="width: 19px"
                                    />
                                    {{ cat.name }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3">
                        <div
                            class="section-heading d-flex align-items-center justify-content-between mt-5"
                        >
                            <h6 class="fw-bold">DAFTAR PRODUK</h6>
                        </div>
                        <div
                            class="col-12 text-center"
                            v-if="listProducts.length < 1"
                        >
                            Produk tidak ditemukan
                        </div>
                        <div
                            class="col-6 col-md-4 col-lg-3"
                            v-for="(product, i) in listProducts"
                            :key="i"
                        >
                            <div class="card product-card">
                                <div class="card-body">
                                    <Link
                                        class="product-thumbnail d-block"
                                        :href="
                                            route('product.show', {
                                                slug: product.slug,
                                            })
                                        "
                                        ><img
                                            class="mb-2"
                                            :src="product.files[0]?.src"
                                            :alt="product.files[0]?.alt"
                                        />
                                    </Link>
                                    <Link
                                        class="product-title d-block"
                                        :href="
                                            route('product.show', {
                                                slug: product.slug,
                                            })
                                        "
                                    >
                                        {{ product.name }}
                                    </Link>
                                    <p class="sale-price">
                                        {{ product.price_rp }}<br /><span>{{
                                            product.strike_price_rp
                                        }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3 g-3" v-if="isLoading">
                        <div class="col text-center">
                            <span style="color: blue">Sedang memuat ...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
