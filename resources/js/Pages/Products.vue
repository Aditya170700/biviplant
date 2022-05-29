<template>
    <div>
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
        <div class="page-content-wrapper">
            <div class="top-products-area py-3">
                <div class="container">
                    <div
                        class="section-heading d-flex align-items-center justify-content-between"
                    >
                        <h6>All Products</h6>
                        <div class="select-product-catagory">
                            <select
                                class="form-select"
                                id="selectProductCatagory"
                                name="selectProductCatagory"
                                aria-label="Default select example"
                            >
                                <option selected>Short by</option>
                                <option value="1">Newest</option>
                                <option value="2">Popular</option>
                                <option value="3">Ratings</option>
                            </select>
                        </div>
                    </div>
                    <div class="product-catagories">
                        <div class="row g-3">
                            <div class="col-4">
                                <a class="shadow-sm" href="#"
                                    ><img
                                        src="img/product/5.png"
                                        alt=""
                                    />Furniture</a
                                >
                            </div>
                            <div class="col-4">
                                <a class="shadow-sm" href="#"
                                    ><img
                                        src="img/product/9.png"
                                        alt=""
                                    />Shoes</a
                                >
                            </div>
                            <div class="col-4">
                                <a class="shadow-sm" href="#"
                                    ><img
                                        src="img/product/4.png"
                                        alt=""
                                    />Dress</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="row g-3">
                        <div class="col-6 col-md-4 col-lg-3">
                            <div class="card product-card">
                                <div class="card-body">
                                    <span
                                        class="badge rounded-pill badge-warning"
                                        >Sale</span
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><Link
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><Link
                                        class="product-thumbnail d-block"
                                        href="/products/wooden-sofa"
                                        ><img
                                            class="mb-2"
                                            src="img/product/5.png"
                                            alt="" /></Link
                                    ><Link
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/6.png"
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
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
                                    ><a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/8.png"
                                            alt="" /></a
                                    ><a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/4.png"
                                            alt="" /></a
                                    ><a
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
                        <div class="col-6 col-md-4 col-lg-3">
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
                                        </ul></a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/5.png"
                                            alt="" /></a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/6.png"
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
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
                                    ><a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/8.png"
                                            alt="" /></a
                                    ><a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/4.png"
                                            alt="" /></a
                                    ><a
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
                        <div class="col-6 col-md-4 col-lg-3">
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
                                        </ul></a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/5.png"
                                            alt="" /></a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/6.png"
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"> </i></a
                                    ><a
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
                                    ><a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/8.png"
                                            alt="" /></a
                                    ><a
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
                                    ><a class="wishlist-btn" href="#"
                                        ><i class="lni lni-heart"></i></a
                                    ><a
                                        class="product-thumbnail d-block"
                                        href="single-product.html"
                                        ><img
                                            class="mb-2"
                                            src="img/product/4.png"
                                            alt="" /></a
                                    ><a
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
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../Shared/Products/Header.vue";
import Sidebar from "./../Shared/Products/Sidebar.vue";
import Footer from "./../Shared/Footer.vue";

export default {
    components: {
        Link,
        Header,
        Sidebar,
        Footer,
    },
};
</script>
