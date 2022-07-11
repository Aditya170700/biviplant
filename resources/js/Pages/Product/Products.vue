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
            <div class="top-products-area py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>Semua Produk</h6>
                        <div class="select-product-catagory">
                            <select
                                class="form-select"
                                id="selectProductCatagory"
                                name="selectProductCatagory"
                                aria-label="Default select example"
                            >
                                <option selected>Urutkan</option>
                                <option value="1">Newest</option>
                                <option value="2">Popular</option>
                                <option value="3">Ratings</option>
                            </select>
                        </div>
                    </div>
                    <div class="product-catagories">
                        <div class="row g-3">
                            <div class="col-4" v-for="(category, i) in categories.data" :key="i">
                                <a class="shadow-sm" href="#">
                                    <img :src="category.icon_url" alt="" class="mb-2">
                                    {{ category.name }}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-3" v-for="(product, i) in products.data" :key="i">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span class="badge rounded-pill badge-warning">
                                        Sale
                                    </span>
                                    <a class="wishlist-btn" href="#">
                                        <i class="lni lni-heart"> </i>
                                    </a>
                                    <Link
                                        class="product-thumbnail d-block"
                                        :href="route('product.show', {slug: product.slug})"
                                        ><img
                                            class="mb-2"
                                            :src="product.files[0]?.src"
                                            :alt="product.files[0]?.alt"
                                        />
                                    </Link>
                                    <Link
                                        class="product-title d-block"
                                        :href="route('product.show', {slug: product.slug})"
                                    >
                                        {{ product.name }}
                                    </Link>
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
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>

<script setup>
    import { Link } from "@inertiajs/inertia-vue3";
    import Header from "./../../Shared/Products/Header.vue";
    import Sidebar from "./../../Shared/Products/Sidebar.vue";
    import Footer from "./../../Shared/Footer.vue";
    import { Head } from '@inertiajs/inertia-vue3'
    import { ref } from "@vue/reactivity";

    const props = defineProps({
        meta_title: String,
        meta_description: String,
        meta_keyword: String,
        categories: Object,
        products: Object
    })

    const metaTitle = ref(props.meta_title)
    const metaDescription = ref(props.meta_description)
    const metaKeyword = ref(props.meta_keyword)

</script>
