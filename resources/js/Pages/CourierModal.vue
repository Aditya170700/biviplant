<script setup>
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";
import { onMounted, ref } from "@vue/runtime-core";
import axios from "axios";
import { useStore } from "vuex";
import { toastError } from "../utils";

let store = useStore();
let props = defineProps({
    cart: Object,
});
let shippingCosts = ref(null);
let loading = ref(false);

function getShippingCost() {
    loading.value = true;
    store.commit("setCourier", null);
    shippingCosts.value = null;
    axios
        .get("/api/shipping-costs/get-nearest", {
            params: {
                lat: props.cart.user_address.latitude,
                lng: props.cart.user_address.longitude,
                product_id: props.cart.product.id,
                destination: props.cart.user_address.subdistrict.id,
                destination_type: props.cart.user_address.subdistrict.type,
                weight: props.cart.product.weight * props.cart.qty,
            },
        })
        .then((res) => {
            loading.value = false;
            if (res.data.rajaongkir.status.code != 200)
                throw res.data.rajaongkir.status.description;
            shippingCosts.value = res.data.rajaongkir;
        })
        .catch((err) => {
            loading.value = false;
            toastError(err);
        });
}

function selectCourier(parentId, childId) {
    Inertia.put(
        route("cart.update", props.cart.id),
        {
            user_address_id: props.cart.user_address_id,
            user_id: props.cart.user_id,
            product_id: props.cart.product_id,
            qty: props.cart.qty,
            courier: shippingCosts.value.results[parentId].name,
            shipping_service:
                shippingCosts.value.results[parentId].costs[childId].service,
            shipping_cost:
                shippingCosts.value.results[parentId].costs[childId].cost[0]
                    .value,
            shipping_etd:
                shippingCosts.value.results[parentId].costs[childId].cost[0]
                    .etd,
        },
        {
            _method: "put",
        }
    );

    shippingCosts.value = null;
}

function isActive(name, service) {
    return (
        store.getters.courier?.name == name &&
        store.getters.courier?.service == service
    );
}
</script>

<template>
    <div
        class="offcanvas offcanvas-start suha-offcanvas-wrap p-0"
        tabindex="-1"
        :id="`courierModal${cart.id}`"
        :aria-labelledby="`courierModal${cart.id}Label`"
        style="background: #f1f5f0 !important"
    >
        <div class="offcanvas-body">
            <div class="profile-wrapper-area">
                <div class="card">
                    <div class="card-body p-4">
                        <div
                            class="d-flex align-items-center justify-content-between mb-3"
                        >
                            <span class="h6">Pilih Kurir</span>
                            <button
                                class="btn btn-sm btn-light"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            >
                                <i class="lni lni-close"></i>
                            </button>
                        </div>
                        <div class="d-flex justify-content-between my-3">
                            <div class="col-6">
                                <div class="row">
                                    <div class="col-12 small">
                                        {{ cart.product.name }}
                                    </div>
                                    <div class="col-12 small">
                                        {{
                                            Math.round(
                                                (cart.product.weight / 1000) *
                                                    cart.qty
                                            )
                                        }}
                                        kg
                                    </div>
                                    <div class="col-12 small">
                                        {{ cart.qty }} pcs
                                    </div>
                                </div>
                            </div>
                            <div class="col-6 text-end">
                                <button
                                    class="btn btn-sm btn-success"
                                    @click="getShippingCost"
                                    :disabled="loading"
                                >
                                    <i class="lni lni-search-alt me-2"></i>
                                    Cari Kurir
                                </button>
                            </div>
                        </div>
                        <div class="list-group text-center" v-if="loading">
                            <span
                                class="list-group-item list-group-item-action blink"
                                aria-current="true"
                                >Mencari kurir...</span
                            >
                        </div>
                        <div
                            class="list-group text-center"
                            v-if="
                                (!loading && shippingCosts == null) ||
                                shippingCosts?.results?.length == 0
                            "
                        >
                            <span
                                class="list-group-item list-group-item-action"
                                aria-current="true"
                                >Kurir tidak ditemukan</span
                            >
                        </div>
                        <div
                            class="list-group"
                            v-if="
                                !loading &&
                                shippingCosts != null &&
                                shippingCosts?.results?.length > 0
                            "
                        >
                            <div
                                v-for="(data, i) in shippingCosts.results"
                                :key="i"
                                :class="`${
                                    data.costs.length > 0 ? '' : 'd-none'
                                }`"
                            >
                                <a
                                    href="#"
                                    data-bs-toggle="offcanvas"
                                    :data-bs-target="`#courierModal${cart.id}`"
                                    :aria-controls="`courierModal${cart.id}`"
                                    style="align-items: center"
                                    :class="`list-group-item list-group-item-action ${
                                        isActive(data.name, cost.service)
                                            ? 'active'
                                            : ''
                                    }`"
                                    aria-current="true"
                                    v-for="(cost, iCost) in data.costs"
                                    :key="iCost"
                                    @click="selectCourier(i, iCost)"
                                >
                                    <div class="row mt-2">
                                        <div class="col-3">
                                            <img
                                                :src="`/courier/${data.code}.png`"
                                                class="rounded mx-auto d-block mt-4"
                                                alt=""
                                                width="60"
                                            />
                                        </div>
                                        <div class="col-9">
                                            <div
                                                class="d-flex w-100 justify-content-between"
                                            >
                                                <h5 class="mb-1 small">
                                                    {{ data.name }}
                                                </h5>
                                            </div>
                                            <span
                                                class="mb-1 d-block small fw-bold"
                                            >
                                                {{ cost.service }}
                                            </span>
                                            <span class="mb-1 d-block small">
                                                <b
                                                    >Rp.
                                                    {{ cost.cost[0].value }}</b
                                                >
                                            </span>
                                            <small class="mb-1 d-block small">
                                                <b>Estimasi : </b>
                                                {{ cost.cost[0].etd }} Hari
                                            </small>
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
</template>

<style>
.active .justify-content-between h5 {
    color: white;
}

.active p {
    color: white;
}

.list-group-item.active {
    background-color: rgb(0, 184, 148) !important;
}
</style>
