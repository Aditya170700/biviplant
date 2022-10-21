<script setup>
import { useStore } from "vuex";

let store = useStore();
</script>
<template>
    <div
        class="offcanvas offcanvas-start suha-filter-offcanvas-wrap"
        tabindex="-1"
        id="suhaFilterOffcanvas"
        aria-labelledby="suhaFilterOffcanvasLabel"
        style="
            background: linear-gradient(to left, #fff, #fff) !important;
            width: 250px !important;
        "
    >
        <button
            class="btn-close text-reset"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        >
            <i class="lni lni-close"></i>
        </button>
        <div class="offcanvas-body py-5">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="widget catagory mb-4">
                            <h6 class="widget-title mb-2">Jenis Tanaman</h6>
                            <div class="widget-desc">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="pupuk"
                                        type="checkbox"
                                        value="Pupuk"
                                        v-model="
                                            store.state.filterProduct.categories
                                        "
                                    />
                                    <label class="form-check-label" for="pupuk"
                                        >Pupuk</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="tanaman"
                                        type="checkbox"
                                        value="Tanaman"
                                        v-model="
                                            store.state.filterProduct.categories
                                        "
                                    />
                                    <label
                                        class="form-check-label"
                                        for="tanaman"
                                        >Tanaman</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="widget catagory mb-4">
                            <h6 class="widget-title mb-2">Urutkan</h6>
                            <div class="widget-desc">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="asc"
                                        id="asc"
                                        v-model="
                                            store.state.filterProduct.sort_price
                                        "
                                        value="asc"
                                    />
                                    <label class="form-check-label" for="asc">
                                        Harga Termurah
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="desc"
                                        id="desc"
                                        v-model="
                                            store.state.filterProduct.sort_price
                                        "
                                        value="desc"
                                    />
                                    <label class="form-check-label" for="desc">
                                        Harga Termahal
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="widget ratings mb-4">
                            <h6 class="widget-title mb-2">Bintang</h6>
                            <div class="widget-desc">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="5star"
                                        type="checkbox"
                                        checked
                                    />
                                    <label class="form-check-label" for="5star"
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                    ></label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="4star"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="4star"
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                    ></label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="3star"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="3star"
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                    ></label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="2star"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="2star"
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                    ></label>
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="1star"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="1star"
                                        ><i
                                            class="text-warning me-1 lni lni-star-filled"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                        ><i
                                            class="text-warning me-1 lni lni-star"
                                        ></i
                                    ></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
