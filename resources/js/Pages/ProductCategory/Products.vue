<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/HeaderWithTitle.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";
import Footer from "./../../Shared/Footer.vue";

let attrs = useAttrs();

</script>

<template>
    <div>
        <Header :link_back="'/'" :title="attrs.category.name"></Header>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper">
            <!-- Catagory Single Image-->
            <div class="pt-3">
                <div class="container">
                <div class="catagory-single-img pt-3" :style="{backgroundImage: `url('${attrs.category.banner_url}')`}"></div>
                </div>
            </div>
            
            <!-- Top Products-->
            <div class="top-products-area pb-3">
                <div class="container">
                    <div class="section-heading d-flex align-items-center justify-content-between mb-3">
                        
                    </div>
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-3" v-for="(product, i) in attrs.products.data" :key="i">
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
        <Footer></Footer>
    </div>
</template>