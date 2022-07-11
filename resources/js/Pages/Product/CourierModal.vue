<template>
    <div
        class="offcanvas offcanvas-start suha-offcanvas-wrap"
        tabindex="-1"
        id="courierModal"
        aria-labelledby="courierModalLabel"
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
                                <h5 class="modal-title" id="exampleModalLongTitle">Pilih Kurir</h5>
                            </div>
                            <div class="modal-body" style="border: 0px !important">
                                <div class="list-group">
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <img src="https://picsum.photos/30" alt="">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">JNE Express</h5>
                                        </div>
                                        <p class="mb-1"><b>Rp. 40.000</b></p>
                                        <p class="mb-1"><b>Estimasi : </b> 4 Hari</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <img src="https://picsum.photos/30" alt="">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">JNT REGULER</h5>
                                        </div>
                                        <p class="mb-1"><b>Rp. 30.000</b></p>
                                        <p class="mb-1"><b>Estimasi : </b> 3 Hari</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <img src="https://picsum.photos/30" alt="">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">Tiki REGULER</h5>
                                        </div>
                                        <p class="mb-1"><b>Rp. 30.000</b></p>
                                        <p class="mb-1"><b>Estimasi : </b> 3 Hari</p>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
                                        <img src="https://picsum.photos/30" alt="">
                                        <div class="d-flex w-100 justify-content-between">
                                            <h5 class="mb-1">LNP Cargo</h5>
                                        </div>
                                        <p class="mb-1"><b>Rp. 30.000</b></p>
                                        <p class="mb-1"><b>Estimasi : </b> 3 Hari</p>
                                    </a>
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
