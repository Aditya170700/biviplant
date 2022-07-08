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
                        v-for="(file, i) in product.files" :key="i"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        :data-bs-slide-to="i"
                        :class="(i == 0) ? 'active' : ''"
                        :aria-current="(i == 0) ? true : false"
                        :aria-label="`Slide ${i+1}`"
                    ></button>
                </div>
                <div class="carousel-inner">
                    <div 
                        :class="['carousel-item', (i == 0) ? 'active' : '']" 
                        v-for="(file, i) in product.files" :key="i"
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
            <div class="product-description pb-3 bg-fug">
                <div class="product-title-meta-data bg-white py-3 mb-3">
                    <div class="container d-flex justify-content-between">
                        <div class="p-title-price">
                            <h6 class="mb-1">{{ product.name }}</h6>
                            <p class="sale-price mb-0">{{ product.price_rp }}<span>{{ product.strike_price_rp }}</span></p>
                        </div>
                        <div class="p-wishlist-share">
                            <a href="wishlist-grid.html"
                                ><i class="lni lni-heart"></i
                            ></a>
                        </div>
                    </div>
                    <div class="product-ratings">
                        <div
                            class="container d-flex align-items-center justify-content-between"
                        >
                            <div class="ratings">
                                <i class="lni lni-star-filled"></i
                                ><i class="lni lni-star-filled"></i
                                ><i class="lni lni-star-filled"></i
                                ><i class="lni lni-star-filled"></i
                                ><i class="lni lni-star-filled"></i
                                ><span class="ps-1">3 ratings</span>
                            </div>
                            <div class="total-result-of-ratings">
                                <span>5.0</span><span>Very Good </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flash-sale-panel bg-white py-3 mb-3">
                    <div class="container">
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Kondisi</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>Sudah mulai berbunga</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Berat</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>2000 gram</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Stok</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>40</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Terjual</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>39</p>
                            </div>
                        </div>
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Kategori</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>{{ product?.category?.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flash-sale-panel bg-white py-3 mb-3">
                    <div class="container">
                        <!-- alamat -->
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Dikirim ke</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>Pertani Graha Gabah, Jl. Pertanian No.6, RT.6/RW.3, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760</p>
                            </div>
                            <div class="mb-1 font-weight-bold btn-side">
                                <p class="text-end"><i class="lni lni-chevron-right"></i></p>
                            </div>
                        </div>
                        <!-- kurir -->
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Kurir</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>JNE Express</p>
                                <p><strong>Rp. 20.000</strong></p>
                            </div>
                            <div class="mb-1 font-weight-bold btn-side">
                                <p class="text-end"><i class="lni lni-chevron-right"></i></p>
                            </div>
                        </div>
                        <!-- estimasi kirim -->
                        <div class="sales-offer-content d-flex mt-2" style="align-items: center;">
                            <div class="d-flex-30">
                                <p class="mb-1 font-weight-bold">
                                    <strong>Estimasi</strong>
                                </p>
                            </div>
                            <div class="mb-1 font-weight-bold">
                                <p>3 Hari</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="selection-panel bg-white py-3 mb-3">
                    <div
                        class="container d-flex align-items-center justify-content-between"
                    >
                        <div class="container">
                        <ul class="mb-3 ps-3">
                            <li>
                                <i class="lni lni-checkmark-circle"> </i> 100%
                                Kualitas Unggul
                            </li>
                            <li>
                                <i class="lni lni-checkmark-circle"> </i> 7 Hari Retur
                            </li>
                            <li>
                                <i class="lni lni-checkmark-circle"> </i>
                                Bergaransi
                            </li>
                            <li>
                                <i class="lni lni-checkmark-circle"> </i> 100%
                                Terpercaya
                            </li>
                        </ul>
                        <p class="mb-0">
                            Deskripsi untuk ajakan beli dan benefit jika membeli dan kemudahannya.
                        </p>
                    </div>
                    </div>
                </div>
                <div class="cart-form-wrapper bg-white py-3 mb-3">
                    <div class="container">
                        <form class="cart-form" action="#" method="">
                            <div
                                class="order-plus-minus d-flex align-items-center"
                            >
                                <div class="quantity-button-handler">-</div>
                                <input
                                    class="form-control cart-quantity-input"
                                    type="text"
                                    step="1"
                                    name="quantity"
                                    value="1"
                                />
                                <div class="quantity-button-handler">+</div>
                            </div>
                            <button class="btn btn-danger ms-3" type="submit">
                                Keranjang
                            </button>
                        </form>
                    </div>
                </div>
                <div class="p-specification bg-white py-3 mb-3">
                    <div class="container">
                        <h6>Deskripsi</h6>
                        <p v-html="product.description"></p>
                        <ul class="mb-3 ps-3">
                            <li>
                                <i class="lni lni-checkmark-circle"> </i> 100%
                                Good Reviews
                            </li>
                            <li>
                                <i class="lni lni-checkmark-circle"> </i> 7 Days
                                Returns
                            </li>
                            <li>
                                <i class="lni lni-checkmark-circle"> </i>
                                Warranty not Aplicable
                            </li>
                            <li>
                                <i class="lni lni-checkmark-circle"> </i> 100%
                                Brand New Product
                            </li>
                        </ul>
                        <p class="mb-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi, eum? Id, culpa? At officia quisquam
                            laudantium nisi mollitia nesciunt, qui porro
                            asperiores cum voluptates placeat similique
                            recusandae in facere quos vitae?
                        </p>
                    </div>
                </div>
                <div class="related-product-wrapper mb-3">
                    <div class="container">
                        <div
                            class="section-heading d-flex align-items-center justify-content-between"
                        >
                            <h6>Produk Terkait</h6>
                            <a class="btn" href="shop-grid.html">Lihat Semua</a>
                        </div>
                        <div class="related-product-slide owl-carousel">
                            <div class="single-related-product-slide">
                                <div class="card product-card">
                                    <div class="card-body">
                                        <span
                                            class="badge rounded-pill badge-warning"
                                            >Sale</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"> </i></a
                                        ><a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                class="mb-2"
                                                src="/img/product/11.png"
                                                alt="" /></a
                                        ><a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Beach Cap</a
                                        >
                                        <p class="sale-price">
                                            $13<span>$42</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i>
                                        </div>
                                        <a
                                            class="btn btn-success btn-sm"
                                            href="#"
                                            ><i class="lni lni-plus"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-related-product-slide">
                                <div class="card product-card">
                                    <div class="card-body">
                                        <span
                                            class="badge rounded-pill badge-success"
                                            >New</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"> </i></a
                                        ><a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                class="mb-2"
                                                src="/img/product/5.png"
                                                alt=""
                                            />
                                            <ul
                                                class="offer-countdown-timer d-flex align-items-center shadow-sm"
                                                data-countdown="2021/12/31 23:59:59"
                                            >
                                                <li>
                                                    <span class="days">0</span>d
                                                </li>
                                                <li>
                                                    <span class="hours">0</span
                                                    >h
                                                </li>
                                                <li>
                                                    <span class="minutes"
                                                        >0</span
                                                    >m
                                                </li>
                                                <li>
                                                    <span class="seconds"
                                                        >0</span
                                                    >s
                                                </li>
                                            </ul></a
                                        ><a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Wooden Sofa</a
                                        >
                                        <p class="sale-price">
                                            $74<span>$99</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i>
                                        </div>
                                        <a
                                            class="btn btn-success btn-sm"
                                            href="#"
                                            ><i class="lni lni-plus"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                            <div class="single-related-product-slide">
                                <div class="card product-card">
                                    <div class="card-body">
                                        <span
                                            class="badge rounded-pill badge-success"
                                            >Sale</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"> </i></a
                                        ><a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                class="mb-2"
                                                src="/img/product/6.png"
                                                alt="" /></a
                                        ><a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Roof Lamp</a
                                        >
                                        <p class="sale-price">
                                            $99<span>$113</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i>
                                        </div>
                                        <a
                                            class="btn btn-success btn-sm"
                                            href="#"
                                            ><i class="lni lni-plus"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rating-and-review-wrapper bg-white py-3 mb-3">
                    <div class="container">
                        <hr />
                        <h6>Bintang &amp; Ulasan</h6>
                        <div class="rating-review-content">
                            <ul class="ps-0">
                                <li class="single-user-review d-flex">
                                    <div class="user-thumbnail">
                                        <img src="/img/bg-img/7.jpg" alt="" />
                                    </div>
                                    <div class="rating-comment">
                                        <div class="rating">
                                            <i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i>
                                        </div>
                                        <p class="comment mb-0">
                                            Very good product. It's just
                                            amazing!
                                        </p>
                                        <span class="name-date"
                                            >Designing World 12 Dec 2021</span
                                        ><a
                                            class="review-image mt-2 border rounded"
                                            href="/img/product/3.png"
                                            ><img
                                                class="rounded-3"
                                                src="/img/product/3.png"
                                                alt=""
                                        /></a>
                                    </div>
                                </li>
                                <li class="single-user-review d-flex">
                                    <div class="user-thumbnail">
                                        <img src="/img/bg-img/8.jpg" alt="" />
                                    </div>
                                    <div class="rating-comment">
                                        <div class="rating">
                                            <i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i>
                                        </div>
                                        <p class="comment mb-0">
                                            Very excellent product. Love it.
                                        </p>
                                        <span class="name-date"
                                            >Designing World 8 Dec 2021</span
                                        ><a
                                            class="review-image mt-2 border rounded"
                                            href="/img/product/4.png"
                                            ><img
                                                class="rounded-3"
                                                src="/img/product/4.png"
                                                alt="" /></a
                                        ><a
                                            class="review-image mt-2 border rounded"
                                            href="/img/product/6.png"
                                            ><img
                                                class="rounded-3"
                                                src="/img/product/6.png"
                                                alt=""
                                        /></a>
                                    </div>
                                </li>
                                <li class="single-user-review d-flex">
                                    <div class="user-thumbnail">
                                        <img src="/img/bg-img/9.jpg" alt="" />
                                    </div>
                                    <div class="rating-comment">
                                        <div class="rating">
                                            <i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i
                                            ><i class="lni lni-star-filled"></i>
                                        </div>
                                        <p class="comment mb-0">
                                            What a nice product it is. I am
                                            looking it's.
                                        </p>
                                        <span class="name-date"
                                            >Designing World 28 Nov 2021</span
                                        >
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="ratings-submit-form bg-white py-3">
                    <div class="container">
                        <hr />
                        <h6>Beri Ulasan Yuk</h6>
                        <form action="#" method="">
                            <div class="stars mb-3">
                                <input
                                    class="star-1"
                                    type="radio"
                                    name="star"
                                    id="star1"
                                />
                                <label class="star-1" for="star1"></label>
                                <input
                                    class="star-2"
                                    type="radio"
                                    name="star"
                                    id="star2"
                                />
                                <label class="star-2" for="star2"></label>
                                <input
                                    class="star-3"
                                    type="radio"
                                    name="star"
                                    id="star3"
                                />
                                <label class="star-3" for="star3"></label>
                                <input
                                    class="star-4"
                                    type="radio"
                                    name="star"
                                    id="star4"
                                />
                                <label class="star-4" for="star4"></label>
                                <input
                                    class="star-5"
                                    type="radio"
                                    name="star"
                                    id="star5"
                                />
                                <label class="star-5" for="star5"></label
                                ><span></span>
                            </div>
                            <textarea
                                class="form-control mb-3"
                                id="comments"
                                name="comment"
                                cols="30"
                                rows="10"
                                data-max-length="200"
                                placeholder="Write your review..."
                            ></textarea>
                            <button
                                class="btn btn-sm btn-primary"
                                type="submit"
                            >
                                Kirim
                            </button>
                        </form>
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
    import Header from "../../Shared/Product/Header.vue";
    import Sidebar from "../../Shared/Product/Sidebar.vue";
    import Footer from "../../Shared/Footer.vue";
    import { Head } from '@inertiajs/inertia-vue3'
    import { ref } from "@vue/reactivity";

    const props = defineProps({
        meta_title: String,
        meta_description: String,
        meta_keyword: String,
        categories: Object,
        products: Object,
        product: Object
    })

    const metaTitle = ref(props.meta_title)
    const metaDescription = ref(props.meta_description)
    const metaKeyword = ref(props.meta_keyword)

</script>

<style>
    .btn-danger {
        background-color: #ea4c62 !important;
        border-color: #ea4c62 !important;
    }
    .btn-primary {
        background-color: #100DD1 !important;
        border-color: #100DD1 !important;
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
</style>
