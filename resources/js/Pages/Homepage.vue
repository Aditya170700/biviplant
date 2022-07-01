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
                        <h6>Product Categories</h6>
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
            <div class="flash-sale-wrapper">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6 class="me-1 d-flex align-items-center">
                            <svg
                                class="bi bi-lightning me-1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
                                ></path>
                            </svg>
                            Flash sale
                        </h6>
                        <ul
                            class="sales-end-timer ps-0 d-flex align-items-center"
                            data-countdown="2022/01/01 14:21:37"
                        >
                            <li><span class="days">0</span>d</li>
                            <li><span class="hours">0</span>h</li>
                            <li><span class="minutes">0</span>m</li>
                            <li><span class="seconds">0</span>s</li>
                        </ul>
                    </div>
                    <div class="flash-sale-slide owl-carousel">
                        <div class="card flash-sale-card shadow-sm">
                            <div class="card-body">
                                <a href="single-product.html"
                                    ><img
                                        src="/img/product/1.png"
                                        alt="" /><span class="product-title"
                                        >Black Table Lamp</span
                                    >
                                    <p class="sale-price">
                                        $7.99<span class="real-price">$15</span>
                                    </p>
                                    <span class="progress-title"
                                        >33% Sold Out</span
                                    >
                                    <div class="progress">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style="width: 33%"
                                            aria-valuenow="33"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div></div
                                ></a>
                            </div>
                        </div>
                        <div class="card flash-sale-card shadow-sm">
                            <div class="card-body">
                                <a href="single-product.html"
                                    ><img src="img/product/2.png" alt="" /><span
                                        class="product-title"
                                        >Modern Sofa</span
                                    >
                                    <p class="sale-price">
                                        $14<span class="real-price">$21</span>
                                    </p>
                                    <span class="progress-title"
                                        >57% Sold Out</span
                                    >
                                    <div class="progress">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style="width: 57%"
                                            aria-valuenow="57"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div></div
                                ></a>
                            </div>
                        </div>
                        <div class="card flash-sale-card shadow-sm">
                            <div class="card-body">
                                <a href="single-product.html"
                                    ><img src="img/product/3.png" alt="" /><span
                                        class="product-title"
                                        >Classic Garden Chair</span
                                    >
                                    <p class="sale-price">
                                        $36<span class="real-price">$49</span>
                                    </p>
                                    <span class="progress-title"
                                        >99% Sold Out</span
                                    >
                                    <div class="progress">
                                        <div
                                            class="progress-bar bg-danger"
                                            role="progressbar"
                                            style="width: 100%"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div></div
                                ></a>
                            </div>
                        </div>
                        <div class="card flash-sale-card shadow-sm">
                            <div class="card-body">
                                <a href="single-product.html"
                                    ><img src="img/product/1.png" alt="" /><span
                                        class="product-title"
                                        >Black Table Lamp</span
                                    >
                                    <p class="sale-price">
                                        $7.99<span class="real-price">$15</span>
                                    </p>
                                    <span class="progress-title"
                                        >33% Sold Out</span
                                    >
                                    <div class="progress">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style="width: 33%"
                                            aria-valuenow="33"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div></div
                                ></a>
                            </div>
                        </div>
                        <div class="card flash-sale-card shadow-sm">
                            <div class="card-body">
                                <a href="single-product.html"
                                    ><img src="img/product/2.png" alt="" /><span
                                        class="product-title"
                                        >Modern Sofa</span
                                    >
                                    <p class="sale-price">
                                        $14<span class="real-price">$21</span>
                                    </p>
                                    <span class="progress-title"
                                        >57% Sold Out</span
                                    >
                                    <div class="progress">
                                        <div
                                            class="progress-bar"
                                            role="progressbar"
                                            style="width: 57%"
                                            aria-valuenow="57"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div></div
                                ></a>
                            </div>
                        </div>
                        <div class="card flash-sale-card shadow-sm">
                            <div class="card-body">
                                <a href="single-product.html"
                                    ><img src="img/product/3.png" alt="" /><span
                                        class="product-title"
                                        >Classic Garden Chair</span
                                    >
                                    <p class="sale-price">
                                        $36<span class="real-price">$49</span>
                                    </p>
                                    <span class="progress-title"
                                        >99% Sold Out</span
                                    >
                                    <div class="progress">
                                        <div
                                            class="progress-bar bg-danger"
                                            role="progressbar"
                                            style="width: 100%"
                                            aria-valuenow="100"
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                        ></div></div
                                ></a>
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
                        <h6>Top Products</h6>
                        <Link class="btn" href="/products">View All</Link>
                    </div>
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-3">
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
                                            src="img/product/11.png"
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
                                                <span class="hours">0</span>h
                                            </li>
                                            <li>
                                                <span class="minutes">0</span>m
                                            </li>
                                            <li>
                                                <span class="seconds">0</span>s
                                            </li>
                                        </ul></Link
                                    ><Link
                                        class="product-title d-block"
                                        href="/products/beach-cap"
                                        >Beach Cap</Link
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
                                    <a class="btn btn-success btn-sm" href="#"
                                        ><i class="lni lni-plus"></i
                                    ></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-success"
                                        >New</span
                                    >
                                    <a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i
                                    ></a>
                                    <Link
                                        class="product-thumbnail d-block"
                                        href="/products/wooden-sofa"
                                        ><img
                                            class="mb-2"
                                            src="img/product/5.png"
                                            alt=""
                                    /></Link>
                                    <Link
                                        class="product-title d-block"
                                        href="/products/wooden-sofa"
                                        >Wooden Sofa</Link
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
                                    <a class="btn btn-success btn-sm" href="#"
                                        ><i class="lni lni-plus"></i
                                    ></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-success"
                                        >Sale</span
                                    >
                                    <a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i
                                    ></a>
                                    <a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/6.png"
                                            alt=""
                                    /></a>
                                    <a
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
                                    <a class="btn btn-success btn-sm" href="#"
                                        ><i class="lni lni-plus"></i
                                    ></a>
                                </div>
                            </div>
                        </div>

                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-danger"
                                        >-18%</span
                                    >
                                    <a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i
                                    ></a>
                                    <a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/9.png"
                                            alt=""
                                        />
                                        <ul
                                            class="offer-countdown-timer d-flex align-items-center shadow-sm"
                                            data-countdown="2021/11/23 23:21:29"
                                        >
                                            <li>
                                                <span class="days">0</span>d
                                            </li>
                                            <li>
                                                <span class="hours">0</span>h
                                            </li>
                                            <li>
                                                <span class="minutes">0</span>m
                                            </li>
                                            <li>
                                                <span class="seconds">0</span>s
                                            </li>
                                        </ul></a
                                    >
                                    <a
                                        class="product-title d-block"
                                        href="single-product.html"
                                        >Sneaker Shoes</a
                                    >

                                    <p class="sale-price">
                                        $87<span>$92</span>
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

                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-danger"
                                        >-11%</span
                                    >
                                    <a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i
                                    ></a>
                                    <a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/8.png"
                                            alt=""
                                    /></a>
                                    <a
                                        class="product-title d-block"
                                        href="single-product.html"
                                        >Wooden Chair</a
                                    >

                                    <p class="sale-price">
                                        $21<span>$25</span>
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

                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-warning"
                                        >On Sale</span
                                    >
                                    <a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i
                                    ></a>
                                    <a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/4.png"
                                            alt=""
                                    /></a>
                                    <a
                                        class="product-title d-block"
                                        href="single-product.html"
                                        >Polo Shirts</a
                                    >

                                    <p class="sale-price">
                                        $38<span>$41</span>
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
                        style="background-image: url(img/bg-img/24.jpg)"
                    >
                        <h4 class="text-white">On Sale 50% Off!</h4>
                        <p class="text-white">
                            Suha is a multipurpose, creative &amp; <br />modern
                            mobile template.
                        </p>
                        <a class="btn btn-warning" href="#">Shop Today</a>
                    </div>
                </div>
            </div>
            <div class="weekly-best-seller-area py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>Weekly Best Sellers</h6>
                        <a class="btn" href="shop-list.html">View All</a>
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
                        <div class="col-12 col-md-6">
                            <div class="card horizontal-product-card">
                                <div
                                    class="card-body d-flex align-items-center"
                                >
                                    <div class="product-thumbnail-side">
                                        <span class="badge badge-primary"
                                            >Sale</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"></i
                                        ></a>
                                        <a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                src="img/product/7.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Office Chair</a
                                        >
                                        <p class="sale-price">
                                            <i class="lni lni-dollar"></i
                                            >$100<span>$160</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            >4.82 (125)
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
                        <div class="col-12 col-md-6">
                            <div class="card horizontal-product-card">
                                <div
                                    class="card-body d-flex align-items-center"
                                >
                                    <div class="product-thumbnail-side">
                                        <span class="badge badge-danger"
                                            >-10%</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"></i
                                        ></a>
                                        <a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                src="img/product/12.png"
                                                alt=""
                                            />
                                            <ul
                                                class="offer-countdown-timer d-flex align-items-center shadow-sm"
                                                data-countdown="2022/12/09 23:59:59"
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
                                        >
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Sun Glasses</a
                                        >
                                        <p class="sale-price">
                                            <i class="lni lni-dollar"></i
                                            >$24<span>$32</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            >4.79 (63)
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
                        <div class="col-12 col-md-6">
                            <div class="card horizontal-product-card">
                                <div
                                    class="card-body d-flex align-items-center"
                                >
                                    <div class="product-thumbnail-side">
                                        <span class="badge badge-warning"
                                            >New</span
                                        ><a class="wishlist-btn" href="#"
                                            ><i class="lni lni-heart"></i
                                        ></a>
                                        <a
                                            class="product-thumbnail d-block"
                                            href="single-product.html"
                                            ><img
                                                src="img/product/13.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Wall Clock</a
                                        >
                                        <p class="sale-price">
                                            <i class="lni lni-dollar"></i
                                            >$31<span>$47</span>
                                        </p>
                                        <div class="product-rating">
                                            <i class="lni lni-star-filled"></i
                                            >4.99 (7)
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
                        <div
                            class="coupon-text-wrap d-flex align-items-center p-3"
                        >
                            <h4 class="text-white pe-3 mb-0">
                                Get 20% <br />
                                discount
                            </h4>
                            <p class="text-white ps-3 mb-0">
                                To get discount, enter the<strong class="px-1"
                                    >GET20</strong
                                >code on the checkout page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="featured-products-wrapper py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>Featured Products</h6>
                        <a class="btn" href="featured-products.html"
                            >View All</a
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
                                                src="img/product/15.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Travel Bag</a
                                        >
                                        <p class="sale-price">
                                            $14.7<span>$21</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                src="img/product/16.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Cotton T-shirts</a
                                        >
                                        <p class="sale-price">
                                            $3.69<span>$5</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                src="img/product/6.png"
                                                alt=""
                                        /></a>
                                    </div>
                                    <div class="product-description">
                                        <a
                                            class="product-title d-block"
                                            href="single-product.html"
                                            >Roof Lamp</a
                                        >
                                        <p class="sale-price">
                                            $27.9<span>$31</span>
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
        categories: Object
    })

    const metaTitle = ref(props.meta_title)
    const metaDescription = ref(props.meta_description)
    const metaKeyword = ref(props.meta_keyword)

</script>
