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
                                        <div class="row mt-2">
                                            <div class="col-3">
                                                <img src="https://2.bp.blogspot.com/-PcSzxZIV0hg/Wg0iTMrXEXI/AAAAAAAAE_A/v2fMx3iHJAYPVZErFr-bSysWCNylGvVdACLcBGAs/s320/J%2B%2526%2BT.jpg" class="rounded mx-auto d-block mt-4" alt="" width="60">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">JNT Express</h5>
                                                </div>
                                                <p class="mb-1"><b>Rp. 40.000</b></p>
                                                <p class="mb-1"><b>Estimasi : </b> 4 Hari</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <div class="row mt-2">
                                            <div class="col-3">
                                                <img src="https://www.lintasnusantaraperdana.co.id/modules/PublicSite/themes/default//logo-lnp.png" class="rounded mx-auto d-block mt-4" alt="" width="60">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">LNP Kereta Api</h5>
                                                </div>
                                                <p class="mb-1"><b>Rp. 40.000</b></p>
                                                <p class="mb-1"><b>Estimasi : </b> 4 Hari</p>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item list-group-item-action" aria-current="true">
                                        <div class="row mt-2">
                                            <div class="col-3">
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/New_Logo_JNE.png/800px-New_Logo_JNE.png" class="rounded mx-auto d-block mt-4" alt="" width="60">
                                            </div>
                                            <div class="col-9">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h5 class="mb-1">JNE Express</h5>
                                                </div>
                                                <p class="mb-1"><b>Rp. 40.000</b></p>
                                                <p class="mb-1"><b>Estimasi : </b> 4 Hari</p>
                                            </div>
                                        </div>
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
        background-color: #da5353;
    }
</style>
