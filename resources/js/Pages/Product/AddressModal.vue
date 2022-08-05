<script setup>
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";

defineProps({
    user_addresses: Object,
});

const updateStatus = (id) => {
    Inertia.post(route("address.update.status", id), {
        _method: "put",
    });
};
</script>

<template>
    <div
        class="offcanvas offcanvas-start suha-offcanvas-wrap"
        tabindex="-1"
        id="addressModal"
        aria-labelledby="addressModalLabel"
        style="background: #f1f5f0 !important"
    >
        <div class="offcanvas-body">
            <div class="profile-wrapper-area">
                <div class="card">
                    <div class="card-body p-4">
                        <div
                            class="d-flex align-items-center justify-content-between mb-3"
                        >
                            <span class="h6">Daftar Alamat</span>
                            <div>
                                <Link
                                    :href="route('address.create')"
                                    class="btn btn-sm btn-success me-2"
                                >
                                    <i class="lni lni-plus"></i>
                                </Link>
                                <button
                                    class="btn btn-sm btn-light"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                >
                                    <i class="lni lni-close"></i>
                                </button>
                            </div>
                        </div>
                        <div class="row">
                            <div
                                class="col-lg-12 py-2"
                                v-if="user_addresses.data.length < 1"
                            >
                                <hr />
                                <div
                                    class="d-flex justify-content-center align-items-center mt-2"
                                >
                                    <span class="small">Belum ada alamat</span>
                                </div>
                            </div>
                            <div
                                class="col-lg-12 py-2"
                                v-else
                                v-for="(data, i) in user_addresses.data"
                                :key="i"
                            >
                                <hr />
                                <div
                                    class="d-flex justify-content-between align-items-center mt-2"
                                >
                                    <span class="small">{{
                                        data.receiver
                                    }}</span>
                                    <span>
                                        <button
                                            v-if="data.is_primary"
                                            :class="`btn btn-sm btn-success rounded-circle`"
                                            @click="updateStatus(data.id)"
                                        >
                                            <i class="lni lni-checkmark"></i>
                                        </button>
                                        <button
                                            v-else
                                            :class="`btn btn-sm btn-light rounded-circle`"
                                            @click="updateStatus(data.id)"
                                        >
                                            <i class="lni lni-power-switch"></i>
                                        </button>
                                    </span>
                                </div>
                                <span class="d-block small">{{
                                    data.phone
                                }}</span>
                                <span class="d-block small">{{
                                    data.detail
                                }}</span>
                                <span class="d-block small">{{
                                    `${data.subdistrict.name}, ${data.subdistrict.city.name}, ${data.subdistrict.city.province.name}, ${data.postal_code}`
                                }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
