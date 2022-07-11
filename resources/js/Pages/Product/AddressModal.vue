<template>
    <div
        class="offcanvas offcanvas-start suha-offcanvas-wrap"
        tabindex="-1"
        id="addressModal"
        aria-labelledby="addressModalLabel"
        style="background: #f1f5f0 !important;"
    >
        <button
            class="btn-close btn-close-black text-reset"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        >
            <i class="lni lni-close"></i>
        </button>
        <div class="offcanvas-body">
            <div class="bg-white">
                <div id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content" style="border: 0px !important">
                            <div class="modal-header" style="border: 0px !important">
                                <h5 class="modal-title" id="exampleModalLongTitle">Pilih Alamat</h5>
                            </div>
                            <div class="modal-body" style="border: 0px !important">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Bisri Musthofa</h5>
                                        </div>
                                        <p class="mb-1">Pertani Graha Gabah, Jl. Pertanian No.6, RT.6/RW.3, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">List group item heading</h5>
                                        </div>
                                        <p class="mb-1">Pertani Graha Gabah, Jl. Pertanian No.6, RT.6/RW.3, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">List group item heading</h5>
                                        </div>
                                        <p class="mb-1">Pertani Graha Gabah, Jl. Pertanian No.6, RT.6/RW.3, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12760</p>
                                    </a>
                                    <button type="button" class="btn btn-outline-success">Tambah Alamat</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
    setup() {
        const logout = () => {
            Inertia.post(route("logout"));
        };

        return {
            logout,
        };
    },
};
</script>

<style>
    .active .justify-content-between h5 {
        color: white;
    }

    .active p {
        color: white;
    }

    .list-group-item.active {
        background-color: #5fbf7f;
    }
</style>
