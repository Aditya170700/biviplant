<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
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
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper">
            <!-- Catagory Single Image-->
            <div class="pt-3">
                <div class="container">
                <div class="catagory-single-img pt-3" style="background-image: url('/img/bg-img/5.jpg')"></div>
                </div>
            </div>
            
            <!-- Top Products-->
            <div class="top-products-area pb-3">
                <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between">
                    <h6>Kategori</h6>
                </div>
                <div class="row g-3">
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-warning">Sale</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/11.png" alt="">
                            <!-- Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss -->
                            <ul class="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/12/31 23:59:59">
                            <li><span class="days">0</span>d</li>
                            <li><span class="hours">0</span>h</li>
                            <li><span class="minutes">0</span>m</li>
                            <li><span class="seconds">0</span>s</li>
                            </ul></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Beach Cap</a>
                        <!-- Product Price -->
                        <p class="sale-price">$13<span>$42</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-success">New</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/5.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Wooden Sofa</a>
                        <!-- Product Price -->
                        <p class="sale-price">$74<span>$99</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-success">Sale</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/6.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Roof Lamp</a>
                        <!-- Product Price -->
                        <p class="sale-price">$99<span>$113</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-danger">-18%</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/9.png" alt="">
                            <!-- Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss -->
                            <ul class="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/11/23 23:21:29">
                            <li><span class="days">0</span>d</li>
                            <li><span class="hours">0</span>h</li>
                            <li><span class="minutes">0</span>m</li>
                            <li><span class="seconds">0</span>s</li>
                            </ul></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Sneaker Shoes</a>
                        <!-- Product Price -->
                        <p class="sale-price">$87<span>$92</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-danger">-11%</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/8.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Wooden Chair</a>
                        <!-- Product Price -->
                        <p class="sale-price">$21<span>$25</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-warning">On Sale</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/4.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Polo Shirts</a>
                        <!-- Product Price -->
                        <p class="sale-price">$38<span>$41</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-warning">Sale</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/11.png" alt="">
                            <!-- Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss -->
                            <ul class="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/12/31 23:59:59">
                            <li><span class="days">0</span>d</li>
                            <li><span class="hours">0</span>h</li>
                            <li><span class="minutes">0</span>m</li>
                            <li><span class="seconds">0</span>s</li>
                            </ul></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Beach Cap</a>
                        <!-- Product Price -->
                        <p class="sale-price">$13<span>$42</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-success">New</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/5.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Wooden Sofa</a>
                        <!-- Product Price -->
                        <p class="sale-price">$74<span>$99</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-success">Sale</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/6.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Roof Lamp</a>
                        <!-- Product Price -->
                        <p class="sale-price">$99<span>$113</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-danger">-18%</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart">                       </i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/9.png" alt="">
                            <!-- Offer Countdown Timer: Please use event time this format: YYYY/MM/DD hh:mm:ss -->
                            <ul class="offer-countdown-timer d-flex align-items-center shadow-sm" data-countdown="2021/11/23 23:21:29">
                            <li><span class="days">0</span>d</li>
                            <li><span class="hours">0</span>h</li>
                            <li><span class="minutes">0</span>m</li>
                            <li><span class="seconds">0</span>s</li>
                            </ul></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Sneaker Shoes</a>
                        <!-- Product Price -->
                        <p class="sale-price">$87<span>$92</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-danger">-11%</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/8.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Wooden Chair</a>
                        <!-- Product Price -->
                        <p class="sale-price">$21<span>$25</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
                        </div>
                    </div>
                    </div>
                    <!-- Single Top Product Card -->
                    <div class="col-6 col-md-4 col-lg-3">
                    <div class="card product-card">
                        <div class="card-body">
                        <!-- Badge--><span class="badge rounded-pill badge-warning">On Sale</span>
                        <!-- Wishlist Button--><a class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a>
                        <!-- Thumbnail --><a class="product-thumbnail d-block" href="single-product.html"><img class="mb-2" src="/img/product/4.png" alt=""></a>
                        <!-- Product Title --><a class="product-title d-block" href="single-product.html">Polo Shirts</a>
                        <!-- Product Price -->
                        <p class="sale-price">$38<span>$41</span></p>
                        <!-- Rating -->
                        <div class="product-rating"><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                        <!-- Add to Cart --><a class="btn btn-success btn-sm" href="#"><i class="lni lni-plus"></i></a>
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