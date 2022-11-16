<script setup>
import { reactive } from "@vue/reactivity";

let center = reactive({ lat: 40.689247, lng: -74.044502 });

function dragend(e) {
    console.log(e.latLng.lat(), e.latLng.lng());
    center.lat = e.latLng.lat();
    center.lng = e.latLng.lng();
}

function setPlace(e) {
    console.log(e.geometry.location.lat(), e.geometry.location.lng());
    center.lat = e.geometry.location.lat();
    center.lng = e.geometry.location.lng();
}
</script>

<template>
    <div class="col-lg-12 px-lg-5 mb-3">
        <div class="mb-3">
            <label
                for="address"
                class="form-label d-flex justify-content-between"
            >
                <span>Lokasi</span>
            </label>
            <GMapAutocomplete
                placeholder="Cari..."
                @place_changed="setPlace"
                class="form-control mb-2"
            >
            </GMapAutocomplete>
            <GMapMap
                style="width: 100%; height: 500px"
                :center="{ lat: center.lat, lng: center.lng }"
                :zoom="15"
                @click="dragend"
            >
                <GMapMarker
                    :position="center"
                    :clickable="true"
                    :draggable="true"
                    @drag="dragend"
                />
            </GMapMap>
        </div>
    </div>
</template>
