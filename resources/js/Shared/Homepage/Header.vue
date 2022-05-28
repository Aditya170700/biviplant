<template>
    <div class="header-area" id="headerArea">
        <div
            class="container h-100 d-flex align-items-center justify-content-between"
        >
            <div class="logo-wrapper">
                <a href="home.html"
                    ><img src="img/core-img/logo-small.png" alt=""
                /></a>
            </div>
            <div class="top-search-form">
                <form action="" method="">
                    <input
                        class="form-control"
                        type="search"
                        placeholder="Enter your keyword"
                    />
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <div
                class="suha-navbar-toggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#suhaOffcanvas"
                aria-controls="suhaOffcanvas"
            >
                <span></span><span></span><span></span>
            </div>
        </div>
    </div>
</template>
