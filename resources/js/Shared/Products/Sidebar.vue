<template>
    <div
        class="offcanvas offcanvas-start suha-filter-offcanvas-wrap"
        tabindex="-1"
        id="suhaFilterOffcanvas"
        aria-labelledby="suhaFilterOffcanvasLabel"
        style="background: linear-gradient(to left, #fff, #fff) !important; width: 250px !important;"
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
                                        id="zara"
                                        type="checkbox"
                                        checked
                                    />
                                    <label class="form-check-label" for="zara"
                                        >Zara</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="Gucci"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="Gucci"
                                        >Gucci</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="Addidas"
                                        type="checkbox"
                                    />
                                    <label
                                        class="form-check-label"
                                        for="Addidas"
                                        >Addidas</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="Nike"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="Nike"
                                        >Nike</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="Denim"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="Denim"
                                        >Denim</label
                                    >
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
                    <div class="col-12">
                        <div class="widget catagory mb-4">
                            <h6 class="widget-title mb-2">Urutkan</h6>
                            <div class="widget-desc">
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="zara"
                                        type="checkbox"
                                        checked
                                    />
                                    <label class="form-check-label" for="zara"
                                        >Harga Termurah</label
                                    >
                                </div>
                                <div class="form-check">
                                    <input
                                        class="form-check-input"
                                        id="Gucci"
                                        type="checkbox"
                                    />
                                    <label class="form-check-label" for="Gucci"
                                        >Harga Termahal</label
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="apply-filter-btn">
                            <a class="btn btn-success w-100" href=""
                                >Terapkan Filer</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
