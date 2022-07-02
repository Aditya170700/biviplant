<template>
    <div>
        <Head>
            <title>{{ metaTitle }}</title>
            <meta head-key="description" name="description" :content="metaDescription" />
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
                                :class="(i == 0) ? 'active' : ''"
                                :aria-current="(i == 0) ? true : false"
                                :aria-label="`Slide ${i+1}`"
                                v-for="(banner, i) in banners.data" :key="i"
                            ></button>
                        </div>
                        <div class="carousel-inner">
                            <div 
                                :class="[
                                    'carousel-item',
                                    (i == 0) ? 'active' : ''
                                ]" 
                                v-for="(banner, i) in banners.data" :key="i">
                                <div
                                    class="single-hero-slide"
                                    :style="{
                                        backgroundImage: `url('${banner.path_url}')`,
                                        width: '100% !important'
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
            <div class="product-catagories-wrapper py-3">
                <div class="container">
                    <div class="section-heading">
                        <h6>Kategori</h6>
                    </div>
                    <div class="product-catagory-wrap">
                        <div class="row g-3">
                            <div class="col-4" v-for="(category, i) in categories.data" :key="i">
                                <div class="card catagory-card">
                                    <div class="card-body">
                                        <a
                                            class="text-danger"
                                            href="catagory.html"
                                        >
                                            <div class="d-flex justify-content-center">
                                                <img :src="category.icon_url" alt="" class="mb-2">
                                            </div>
                                            <span>{{ category.name }}</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="top-products-area py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>Produk Unggulan</h6>
                        <Link class="btn" href="/products">Lihat Semua</Link>
                    </div>
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-3" v-for="(product, i) in products.data" :key="i">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-warning"
                                        >Sale</span
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i
                                    ></a>
                                    <Link
                                        class="product-thumbnail d-block"
                                        href="/products/beach-cap"
                                        ><img
                                            class="mb-2"
                                            :src="product.files[0]?.src"
                                            :alt="product.files[0]?.alt"
                                        />
                                    </Link>
                                    <Link
                                        class="product-title d-block"
                                        href="/products/beach-cap"
                                        >{{ product.name }}</Link
                                    >
                                    <p class="sale-price">
                                        {{ product.price_rp }}<br/><span>{{ product.strike_price_rp }}</span>
                                    </p>
                                    <div class="product-rating">
                                        <i class="lni lni-star-filled"></i
                                        ><i class="lni lni-star-filled"></i
                                        ><i class="lni lni-star-filled"></i
                                        ><i class="lni lni-star-filled"></i
                                        ><i class="lni lni-star-filled"></i>
                                    </div>
                                    <a class="btn btn-success btn-sm" href="#"
                                        ><i class="lni lni-plus"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta-area">
                <div class="container">
                    <div
                        class="cta-text p-4 p-lg-5"
                        :style="{backgroundImage: `url('${event.banner_url}')`}"
                    >
                        <h4 class="text-white">{{ event.title }}</h4>
                        <p class="text-white">
                            {{ event.sub_title }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="weekly-best-seller-area py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>Terlaris Minggu Ini</h6>
                    </div>
                    <div class="row g-3">
                        <div class="col-12 col-md-6">
                            <div class="card horizontal-product-card">
                                <div
                                    class="card-body d-flex align-items-center"
                                >
                                    <div class="product-thumbnail-side">
                                        <span class="badge badge-success"
                                            >Sale</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"></i
                                        ></a>
                                        <a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                src="img/product/10.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Modern Sofa</a
                                        >
                                        <p class="sale-price">
                                            <i class="lni lni-dollar"></i
                                            >$64<span>$89</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            >4.88 (39)
                                        </div>
                                        <a
                                            class="btn btn-danger btn-sm"
                                            href="#"
                                            ><i class="me-1 lni lni-cart"></i
                                            >Buy Now</a
                                        >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="card discount-coupon-card">
                    <div class="card-body">
                        <h2 class="text-white">Gunakan Code Voucher saat checkout ya!</h2>
                        <div
                            class="coupon-text-wrap d-flex align-items-center p-3"
                            v-for="(voucher, i) in vouchers.data"
                            :key="i"
                        >
                            <h4 class="text-white pe-3 mb-0">
                                <strong>{{ voucher.code }}</strong>
                            </h4>
                            <p class="text-white ps-3 mb-0">{{ voucher.desc }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="featured-products-wrapper py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>Jangan Lupa Alat Bertani Anda Di Sini</h6>
                        <a class="btn" href="featured-products.html"
                            >Lihat Semua</a
                        >
                    </div>
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card featured-product-card">
                                <div class="card-body">
                                    <span
                                        class="badge badge-warning custom-badge"
                                        ><i class="lni lni-star"></i
                                    ></span>
                                    <div class="product-thumbnail-side">
                                        <a
                                            class="wishlist-btn shadow-sm border"
                                            href="#"
                                            ><i class="lni lni-heart"></i
                                        ></a>
                                        <a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                src="img/product/14.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Blue Skateboard</a
                                        >
                                        <p class="sale-price">
                                            $39.8<span>$89</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div
                    class="section-heading d-flex align-items-center justify-content-between"
                >
                    <h6>Collections</h6>
                    <a class="btn" href="#">View All</a>
                </div>
                <div class="collection-slide owl-carousel">
                    <div class="card collection-card">
                        <a href="single-product.html"
                            ><img src="img/product/17.jpg" alt=""
                        /></a>
                        <div class="collection-title">
                            <span>Women</span><span>9 new items</span>
                        </div>
                    </div>
                    <div class="card collection-card">
                        <a href="single-product.html"
                            ><img src="img/product/19.jpg" alt=""
                        /></a>
                        <div class="collection-title">
                            <span>Men</span><span>29 items</span>
                        </div>
                    </div>
                    <div class="card collection-card">
                        <a href="single-product.html"
                            ><img src="img/product/21.jpg" alt=""
                        /></a>
                        <div class="collection-title">
                            <span>Kids</span><span>4 new items</span>
                        </div>
                    </div>
                    <div class="card collection-card">
                        <a href="single-product.html"
                            ><img src="img/product/22.jpg" alt=""
                        /></a>
                        <div class="collection-title">
                            <span>Gadget</span><span>11 items</span>
                        </div>
                    </div>
                    <div class="card collection-card">
                        <a href="single-product.html"
                            ><img src="img/product/23.jpg" alt=""
                        /></a>
                        <div class="collection-title">
                            <span>Foods</span><span>2 new items</span>
                        </div>
                    </div>
                    <div class="card collection-card">
                        <a href="single-product.html"
                            ><img src="img/product/24.jpg" alt=""
                        /></a>
                        <div class="collection-title">
                            <span>Sports</span><span>5 items</span>
                        </div>
                    </div>
                </div>
                <div class="pb-3"></div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import { Link } from "@inertiajs/inertia-vue3";
    import Header from "./../Shared/Homepage/Header.vue";
    import Sidebar from "./../Shared/Homepage/Sidebar.vue";
    import Footer from "./../Shared/Footer.vue";
    import { Head } from '@inertiajs/inertia-vue3'
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
        vouchers: Object
    })

    const metaTitle = ref(props.meta_title)
    const metaDescription = ref(props.meta_description)
    const metaKeyword = ref(props.meta_keyword)

</script>
