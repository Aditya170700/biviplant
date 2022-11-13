<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../Shared/Homepage/Header.vue";
import Sidebar from "./../Shared/Homepage/Sidebar.vue";
import Footer from "./../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

const props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    banners: Object,
    categories: Object,
    event: Object,
    products: Object,
    product_best_sellers: Object,
    vouchers: Object,
    setting: Object,
    origins: Object,
});

const metaTitle = ref(props.meta_title);
const metaDescription = ref(props.meta_description);
const metaKeyword = ref(props.meta_keyword);
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
        <div class="page-content-wrapper bg-fug">
            <div class="container">
                <div class="pt-3">
                    <div
                        id="carouselExampleIndicators"
                        class="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                :data-bs-slide-to="i"
                                :class="i == 0 ? 'active' : ''"
                                :aria-current="i == 0 ? true : false"
                                :aria-label="`Slide ${i + 1}`"
                                v-for="(banner, i) in banners.data"
                                :key="i"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div
                                :class="[
                                    'carousel-item',
                                    i == 0 ? 'active' : '',
                                ]"
                                v-for="(banner, i) in banners.data"
                                :key="i"
                            >
                                <div
                                    class="single-hero-slide"
                                    :style="{
                                        backgroundImage: `url('${banner.path_url}')`,
                                        width: '100% !important',
                                    }"
                                >
                                    <div
                                        class="slide-content h-100 d-flex align-items-center"
                                    >
                                        <div class="slide-text">
                                            <h4
                                                class="text-white mb-0"
                                                data-animation="fadeInUp"
                                                data-delay="100ms"
                                                data-duration="1000ms"
                                            >
                                                {{ banner.title }}
                                            </h4>
                                            <p
                                                class="text-white"
                                                data-animation="fadeInUp"
                                                data-delay="400ms"
                                                data-duration="1000ms"
                                            >
                                                {{ banner.sub_title }}
                                            </p>
                                            <a
                                                v-if="banner.link"
                                                class="btn btn-primary btn-sm"
                                                :href="banner.link"
                                                data-animation="fadeInUp"
                                                data-delay="800ms"
                                                data-duration="1000ms"
                                                >Lihat</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6 class="fw-bold">KATEGORI</h6>
                </div>
            </div>
            <div class="product-catagories-wrapper pb-3">
                <div class="container">
                    <div class="product-catagory-wrap">
                        <div class="row g-3">
                            <div
                                class="col-4"
                                v-for="(category, i) in categories.data"
                                :key="i"
                            >
                                <div class="card catagory-card">
                                    <div class="card-body">
                                        <Link
                                            class="text-danger"
                                            :href="
                                                route('category.show', {
                                                    slug: category.slug,
                                                })
                                            "
                                        >
                                            <div
                                                class="d-flex justify-content-center"
                                            >
                                                <img
                                                    :src="category.icon_url"
                                                    alt=""
                                                    class="mb-2"
                                                />
                                            </div>
                                            <span>{{ category.name }}</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6 class="fw-bold">PRODUK UNGGULAN</h6>
                    <Link class="btn" href="/products">Lihat Semua</Link>
                </div>
            </div>
            <div class="top-products-area pb-3">
                <div class="container">
                    <div class="row g-3">
                        <div
                            class="col-6 col-md-4 col-lg-3"
                            v-for="(product, i) in products.data"
                            :key="i"
                        >
                            <div class="card product-card">
                                <div class="card-body">
                                    <Link
                                        class="product-thumbnail d-block"
                                        :href="
                                            route('product.show', {
                                                id: product.slug,
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
                                                id: product.slug,
                                            })
                                        "
                                        >{{ product.name }}</Link
                                    >
                                    <p class="sale-price">
                                        {{ product.price_rp }}<br /><span>{{
                                            product.strike_price_rp
                                        }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta-area py-3" v-if="event">
                <div class="container">
                    <div
                        class="cta-text p-4 p-lg-5"
                        :style="{
                            backgroundImage: `url('${event.banner_url}')`,
                        }"
                    >
                        <h4 class="text-white">{{ event.title }}</h4>
                        <p class="text-white">
                            {{ event.sub_title }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="container mt-4">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6 class="fw-bold">PRODUK TERLARIS</h6>
                </div>
            </div>
            <div class="weekly-best-seller-area pb-3">
                <div class="container">
                    <div class="row g-3">
                        <div
                            class="col-12 col-md-6"
                            v-for="(data, i) in product_best_sellers"
                            :key="i"
                        >
                            <div class="card horizontal-product-card">
                                <div class="card-body d-flex">
                                    <div class="product-thumbnail-side">
                                        <Link
                                            class="product-thumbnail d-block"
                                            :href="
                                                route('product.show', {
                                                    id: data.slug,
                                                })
                                            "
                                            ><img
                                                :src="data.files[0]?.src"
                                                :alt="data.files[0]?.alt"
                                        /></Link>
                                    </div>
                                    <div class="product-description">
                                        <Link
                                            class="product-title d-block"
                                            :href="
                                                route('product.show', {
                                                    id: data.slug,
                                                })
                                            "
                                            >{{ data.name }}
                                        </Link>
                                        <p class="sale-price">
                                            {{ data.price_rp }}<br /><span>{{
                                                data.strike_price_rp
                                            }}</span>
                                        </p>
                                        <Link
                                            class="btn btn-danger btn-sm"
                                            :href="
                                                route('product.show', {
                                                    id: data.slug,
                                                })
                                            "
                                            ><i class="me-1 lni lni-cart"></i
                                            >Beli</Link
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mt-4" v-if="vouchers.length > 0">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6 class="fw-bold">VOUCHER</h6>
                </div>
            </div>
            <div class="container pb-3 px-4">
                <div
                    class="row mb-3 shadow-sm bg-white rounded"
                    v-for="(voucher, i) in vouchers"
                    :key="i"
                >
                    <div class="col-4 bg-success rounded-start py-4">
                        <p class="small text-white">Kode</p>
                        <h1 class="text-white pe-3 mb-0 fw-bold">
                            {{ voucher.code }}
                        </h1>
                    </div>
                    <div class="col-8 rounded-end py-3">
                        <span>Min. order</span>
                        <p class="fw-bold">
                            {{ voucher.min_order_rp }}
                        </p>
                        <span class="small"
                            >Berlaku hingga:
                            {{ voucher.expired_at_formatted }}</span
                        >
                    </div>
                </div>
            </div>
            <div class="container pb-3">
                <div class="card">
                    <div
                        class="background-shape"
                        style="background: rgb(80, 208, 72) !important"
                    ></div>
                    <div class="card-body">
                        <div class="row mb-3 p-3 text-center">
                            <div class="col">
                                <i class="fa fa-money"></i>
                                <p>Pembayaran Terintegrasi</p>
                            </div>
                            <div class="col">
                                <i class="fa fa-truck"></i>
                                <p>Kirim Seluruh Indonesia</p>
                            </div>
                            <div class="col">
                                <i class="fa fa-check"></i>
                                <p>100% Terpercaya</p>
                            </div>
                        </div>
                        <hr />
                        <div class="row mb-3 p-3">
                            <div class="col-lg-6 my-auto">
                                <img
                                    src="https://dn56y54v4g6fs.cloudfront.net/product/25_04_2022_10_57_10_anggur_merah.jpg"
                                    class="img-fluid"
                                    alt=""
                                />
                            </div>
                            <div class="col-lg-6 my-auto">
                                <p>
                                    Untuk menjaga agar kualitas bibit tetap
                                    terjaga, kami bekerja sama dengan ahli
                                    pembibitan dari IPB sebagai konsultan dan
                                    pelatih pelaksana di kebun bibit kami.
                                    Selain itu kami juga menerapkan standard
                                    kualitas bibit hasil kebun kami. Sehingga
                                    hanya bibit yang sesuai standard yang kami
                                    kirim ke pelanggan. Harga bibit buah yang
                                    kami tampilkan adalah harga eceran/satuan.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div class="row mt-3">
                            <div class="col-lg-6 mb-3">
                                <div class="row">
                                    <div class="card-title">
                                        <strong>Kontak Kami</strong>
                                    </div>
                                    <div class="col-3">
                                        <p>Email</p>
                                    </div>
                                    <div class="col-9">
                                        <p>: {{ setting.email }}</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-3">
                                        <p>Telepon</p>
                                    </div>
                                    <div class="col-9">
                                        <p>: {{ setting.phone }}</p>
                                    </div>
                                </div>
                                <div class="row mt-3">
                                    <div class="card-title">
                                        <strong>Temukan Kami di</strong>
                                    </div>
                                    <div
                                        class="col-12 d-flex justify-content-around"
                                    >
                                        <div class="img">
                                            <a
                                                :href="setting.ig"
                                                target="_blank"
                                            >
                                                <img
                                                    src="assets/images/logo/instagram.jpg"
                                                    class="opacity-75"
                                                    width="50"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="img">
                                            <a
                                                :href="setting.facebook"
                                                target="_blank"
                                            >
                                                <img
                                                    src="assets/images/logo/youtube.png"
                                                    class="opacity-75"
                                                    width="50"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div class="img">
                                            <a
                                                :href="setting.tiktok"
                                                target="_blank"
                                            >
                                                <img
                                                    src="assets/images/logo/tiktok.png"
                                                    class="opacity-75"
                                                    width="50"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 mb-3">
                                <div class="row">
                                    <div class="card-title">
                                        <strong>Kebun Kami</strong>
                                    </div>
                                    <div class="col-lg-12">
                                        <div
                                            class="row mb-2"
                                            v-for="(origin, i) in origins"
                                            :key="i"
                                        >
                                            <div class="col-lg-12">
                                                <div
                                                    class="d-flex align-items-center"
                                                >
                                                    <div class="img">
                                                        <img
                                                            src="assets/images/logo/map-point.png"
                                                            class="opacity-75"
                                                            width="60"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div class="tex-left">
                                                        <p class="mb-2">
                                                            {{
                                                                origin
                                                                    .subdistrict
                                                                    .city
                                                                    .province
                                                                    .name
                                                            }}
                                                        </p>
                                                        <p>
                                                            {{ origin.detail }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <div class="text-left">
                                    <p>
                                        All rights reserved Biviplant
                                        {{ new Date().getFullYear() }}
                                    </p>
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
