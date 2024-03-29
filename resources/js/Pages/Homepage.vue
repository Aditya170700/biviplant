<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../Shared/Homepage/Header.vue";
import Sidebar from "./../Shared/Homepage/Sidebar.vue";
import Footer from "./../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import socket from "../socket";
import { toastSuccess } from "../utils";

const props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    banners: Object,
    categories: Object,
    event: Object,
    products: Object,
    product_best_sellers: Object,
    seed_plants: Object,
    young_plants: Object,
    fruit_plants: Object,
    big_plants: Object,
    flower_plants: Object,
    vouchers: Object,
    setting: Object,
    origins: Object,
    user: Object,
});

onMounted(() => {
    if (props.seed_plants.data.length > 0) {
        $(".seed-plants").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            center: true,
        });
    }
    if (props.young_plants.data.length > 0) {
        $(".young-plants").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            center: true,
        });
    }
    if (props.fruit_plants.data.length > 0) {
        $(".fruit-plants").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            center: true,
        });
    }
    if (props.big_plants.data.length > 0) {
        $(".big-plants").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            center: true,
        });
    }
    if (props.flower_plants.data.length > 0) {
        $(".flower-plants").owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            margin: 10,
            center: true,
        });
    }
});
</script>

<template>
    <div>
        <Head>
            <title>{{ props.meta_title }}</title>
            <meta
                head-key="description"
                name="description"
                :content="props.meta_description"
            />
            <meta
                head-key="keyword"
                name="keyword"
                :content="props.meta_keyword"
            />
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
                                                route('product.index', {
                                                    category: category.slug,
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
                                        >
                                            <img
                                                :src="data.thumbnail"
                                                :alt="data.thumbnail"
                                            />
                                        </Link>
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
            <div class="container" v-if="seed_plants.data.length > 0">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6>Bibit Tamanan</h6>
                </div>
                <div class="seed-plants owl-carousel">
                    <div
                        class="card collection-card"
                        v-for="(data, i) in seed_plants.data"
                        :key="i"
                    >
                        <Link
                            :href="
                                route('product.show', {
                                    id: data.slug,
                                })
                            "
                            ><img
                                class="mb-2"
                                :src="data.files[0]?.src"
                                :alt="data.files[0]?.alt"
                        /></Link>
                    </div>
                </div>
                <div class="pb-3"></div>
            </div>
            <div class="container" v-if="young_plants.data.length > 0">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6>Tamanan Remaja</h6>
                </div>
                <div class="young-plants owl-carousel">
                    <div
                        class="card collection-card"
                        v-for="(data, i) in young_plants.data"
                        :key="i"
                    >
                        <Link
                            :href="
                                route('product.show', {
                                    id: data.slug,
                                })
                            "
                            ><img
                                class="mb-2"
                                :src="data.files[0]?.src"
                                :alt="data.files[0]?.alt"
                        /></Link>
                    </div>
                </div>
                <div class="pb-3"></div>
            </div>
            <div class="container" v-if="fruit_plants.data.length > 0">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6>Tamanan Berbuah</h6>
                </div>
                <div class="fruit-plants owl-carousel">
                    <div
                        class="card collection-card"
                        v-for="(data, i) in fruit_plants.data"
                        :key="i"
                    >
                        <Link
                            :href="
                                route('product.show', {
                                    id: data.slug,
                                })
                            "
                            ><img
                                class="mb-2"
                                :src="data.files[0]?.src"
                                :alt="data.files[0]?.alt"
                        /></Link>
                    </div>
                </div>
                <div class="pb-3"></div>
            </div>
            <div class="container" v-if="big_plants.data.length > 0">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6>Tamanan Induk</h6>
                </div>
                <div class="big-plants owl-carousel">
                    <div
                        class="card collection-card"
                        v-for="(data, i) in big_plants.data"
                        :key="i"
                    >
                        <Link
                            :href="
                                route('product.show', {
                                    id: data.slug,
                                })
                            "
                            ><img
                                class="mb-2"
                                :src="data.files[0]?.src"
                                :alt="data.files[0]?.alt"
                        /></Link>
                    </div>
                </div>
                <div class="pb-3"></div>
            </div>
            <div class="container" v-if="flower_plants.data.length > 0">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6>Tamanan Hias</h6>
                </div>
                <div class="flower-plants owl-carousel">
                    <div
                        class="card collection-card"
                        v-for="(data, i) in flower_plants.data"
                        :key="i"
                    >
                        <Link
                            :href="
                                route('product.show', {
                                    id: data.slug,
                                })
                            "
                            ><img
                                class="mb-2"
                                :src="data.files[0]?.src"
                                :alt="data.files[0]?.alt"
                        /></Link>
                    </div>
                </div>
                <div class="pb-3"></div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
