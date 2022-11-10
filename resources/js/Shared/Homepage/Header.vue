<template>
    <div class="header-area" id="headerArea">
        <div
            class="container h-100 d-flex align-items-center justify-content-between"
        >
            <div class="logo-wrapper">
                <a href="/"
                    ><img src="/img/core-img/logo-small.png" alt=""
                /></a>
            </div>
            <div class="top-search-form">
                <form action="" method="">
                    <input
                        class="form-control"
                        type="search"
                        placeholder="Cari kebutuhanmu di sini"
                        @click="search"
                    />
                    <button type="submit">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
                <div
                    class="offcanvas offcanvas-start suha-offcanvas-wrap"
                    tabindex="-1"
                    id="searchOffcanvas"
                    aria-labelledby="searchOffcanvasLabel"
                    style="background: #fff !important"
                >
                    <div class="offcanvas-body">
                        <div class="bg-white">
                            <div
                                id="exampleModalCenter"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="exampleModalCenterTitle"
                            >
                                <div
                                    class="modal-dialog modal-dialog-centered"
                                    role="document"
                                >
                                    <div
                                        class="modal-content"
                                        style="border: 0px !important"
                                    >
                                        <div
                                            class="modal-header"
                                            style="border: 0px !important"
                                        >
                                            <h5
                                                class="modal-title"
                                                id="exampleModalLongTitle"
                                            >
                                                Cari
                                            </h5>
                                            <button
                                                class="btn-close btn-close-black text-reset"
                                                type="button"
                                                data-bs-dismiss="offcanvas"
                                                aria-label="Close"
                                                @click="closeSearchOffcanvas"
                                            >
                                                <i class="lni lni-close"></i>
                                            </button>
                                        </div>
                                        <div
                                            class="modal-body"
                                            style="border: 0px !important"
                                        >
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div
                                                        class="input-group mb-3 shadow-sm"
                                                    >
                                                        <span
                                                            class="input-group-text bg-white border-0"
                                                            id="basic-addon1"
                                                        >
                                                            <i
                                                                class="lni lni-search-alt"
                                                            ></i>
                                                        </span>
                                                        <input
                                                            v-model="keyword"
                                                            class="form-control border-0"
                                                            placeholder="Masukkan kata kunci"
                                                            aria-label="Masukkan kata kunci"
                                                            aria-describedby="basic-addon1"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="row"
                                                v-if="keyword == ''"
                                            >
                                                <div class="col-lg-12">
                                                    <span class="small">
                                                        Masukkan kata kunci
                                                        untuk mencari produk
                                                        atau kategori produk
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div
                                                    class="col-lg-12 text-center"
                                                >
                                                    <div
                                                        class="spinner-border text-secondary"
                                                        role="status"
                                                        v-if="loading"
                                                    >
                                                        <span
                                                            class="visually-hidden"
                                                            >Loading...</span
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="row mb-4 overflow-scroll"
                                                style="max-height: 500px"
                                                v-if="keyword != ''"
                                            >
                                                <div class="col-lg-12 mb-2">
                                                    <span class="small d-block"
                                                        >Produk</span
                                                    >
                                                </div>
                                                <div
                                                    :class="`col-lg-12 mb-2 ${
                                                        searchProducts.length >
                                                        0
                                                            ? ''
                                                            : 'd-none'
                                                    }`"
                                                    v-for="(
                                                        product, i
                                                    ) in searchProducts"
                                                    :key="i"
                                                >
                                                    <Link
                                                        :href="
                                                            route(
                                                                'product.show',
                                                                {
                                                                    id: product.slug,
                                                                }
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            >#
                                                            {{
                                                                product.name
                                                            }}</span
                                                        >
                                                        <hr
                                                    /></Link>
                                                </div>
                                                <div
                                                    :class="`col-lg-12 mb-2 ${
                                                        searchProducts.length <
                                                        1
                                                            ? ''
                                                            : 'd-none'
                                                    }`"
                                                >
                                                    <Link
                                                        :href="
                                                            route(
                                                                'product.index'
                                                            )
                                                        "
                                                    >
                                                        <span
                                                            ># Lihat semua
                                                            produk</span
                                                        >
                                                        <hr
                                                    /></Link>
                                                </div>
                                            </div>
                                            <div
                                                class="row mb-4 overflow-scroll"
                                                style="max-height: 500px"
                                                v-if="keyword != ''"
                                            >
                                                <div class="col-lg-12 mb-2">
                                                    <span class="small d-block"
                                                        >Kategori Produk</span
                                                    >
                                                </div>
                                                <div
                                                    :class="`col-lg-12 mb-2 ${
                                                        searchCategories.length >
                                                        0
                                                            ? ''
                                                            : 'd-none'
                                                    }`"
                                                    v-for="(
                                                        category, i
                                                    ) in searchCategories"
                                                    :key="i"
                                                >
                                                    <span
                                                        >#
                                                        {{
                                                            category.name
                                                        }}</span
                                                    >
                                                    <hr />
                                                </div>
                                                <div
                                                    :class="`col-lg-12 mb-2 ${
                                                        searchCategories.length <
                                                        1
                                                            ? ''
                                                            : 'd-none'
                                                    }`"
                                                >
                                                    <span
                                                        ># Lihat semua kategori
                                                        produk</span
                                                    >
                                                    <hr />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="suha-navbar-toggler"
                data-bs-toggle="offcanvas"
                data-bs-target="#suhaOffcanvas"
                aria-controls="suhaOffcanvas"
                id="suhaOffcanvasToggler"
            >
                <span></span><span></span><span></span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { watch } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { pickBy } from "lodash";
import axios from "axios";
import { Link } from "@inertiajs/inertia-vue3";

let keyword = ref("");
let loading = ref(false);
let searchProducts = ref([]);
let searchCategories = ref([]);

function search() {
    let btnSuhaOffcanvas = document.querySelector("#suhaOffcanvasToggler");
    let el = document.querySelector("#searchOffcanvas");
    let off = new bootstrap.Offcanvas(el);

    btnSuhaOffcanvas.classList.toggle("d-none");
    off.show();
}

function closeSearchOffcanvas() {
    document.querySelector("#suhaOffcanvasToggler").classList.toggle("d-none");
}

watch(
    () => keyword,
    (keyword) => {
        loading.value = true;
        axios
            .get(`/api/search?keyword=${keyword.value}`)
            .then((response) => {
                searchProducts.value = response.data.products;
                searchCategories.value = response.data.categories;
                loading.value = false;
            })
            .catch((error) => {
                loading.value = false;
                console.log(error);
            });
    },
    {
        deep: true,
    }
);
</script>
