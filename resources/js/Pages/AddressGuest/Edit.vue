<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import FormText from "../../Shared/Form/FormText.vue";
import SpinnerProcessing from "../../Shared/Form/SpinnerProcessing.vue";
import {
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    LTooltip,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";

let attrs = useAttrs();

let map = reactive({
    zoom: 5,
});

let addresses = JSON.parse(localStorage.getItem("address"));

let form = reactive(JSON.parse(addresses[route().params.id]));

let other = reactive({
    provinces: [],
    cities: [],
    subdistricts: [],
    searchAddress: [],
    preview: null,
});

function preview(data) {
    other.preview = data;
    let myModal = new bootstrap.Modal(document.getElementById("preview"), {
        keyboard: false,
    });
    myModal.show();
}

let getProvince = () => {
    axios
        .get("/api/provinces")
        .then((response) => {
            other.provinces = response.data.data;
            getCity(form.subdistrict.city.province.id, true);
        })
        .catch((error) => {
            console.log(error);
        });
};

let getCity = (provinceId, init = false) => {
    if (!init) {
        form.subdistrict.city.province.id = provinceId;
        form.subdistrict.city.province.name =
            document.querySelector("#province_id").options[
                document.querySelector("#province_id").selectedIndex
            ].text;
    }

    axios
        .get("/api/cities", {
            params: {
                province_id: provinceId,
            },
        })
        .then((response) => {
            other.cities = response.data.data;
            if (init) {
                getSubdistrict(form.subdistrict.city.id, true);
            }
        })
        .catch((error) => {
            console.log(error);
        });
};

let getSubdistrict = (cityId, init = false) => {
    if (!init) {
        form.subdistrict.city.id = cityId;
        form.subdistrict.city.name =
            document.querySelector("#city_id").options[
                document.querySelector("#city_id").selectedIndex
            ].text;
    }

    axios
        .get("/api/subdistricts", {
            params: {
                city_id: cityId,
            },
        })
        .then((response) => {
            other.subdistricts = response.data.data;
        })
        .catch((error) => {
            console.log(error);
        });
};

let changeSubdistrict = (subdistrictId) => {
    form.subdistrict.id = subdistrictId;
    form.subdistrict.name =
        document.querySelector("#subdistrict_id").options[
            document.querySelector("#subdistrict_id").selectedIndex
        ].text;
};

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            form.latitude = position.coords.latitude;
            form.longitude = position.coords.longitude;
        });
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

onMounted(() => {
    getProvince();
    getLocation();
});

function log(ev) {
    let loc = ev.target.getLatLng();
    form.longitude = loc.lng;
    form.latitude = loc.lat;
}

function changeMarker(event) {
    form.longitude = event.latlng.lng;
    form.latitude = event.latlng.lat;
}

function search(event) {
    let provider = new OpenStreetMapProvider();
    provider.search({ query: event.target.value }).then((res) => {
        other.searchAddress = res;
    });
}

function selectAddress(lat, lng) {
    form.longitude = lng;
    form.latitude = lat;

    other.searchAddress = [];
}

function submit() {
    let address =
        localStorage.getItem("address") != null
            ? JSON.parse(localStorage.getItem("address"))
            : [];
    address.push(JSON.stringify(form));
    form.processing = true;
    localStorage.setItem("address", JSON.stringify(address));
    form.processing = false;

    window.location.href = "/address-guest";
}
</script>

<template>
    <div>
        <Head>
            <title>{{ attrs.metaTitle }}</title>
            <meta
                head-key="description"
                name="description"
                :content="attrs.metaDescription"
            />
            <meta
                head-key="keyword"
                name="keyword"
                :content="attrs.metaKeyword"
            />
        </Head>
        <Header></Header>
        <Sidebar></Sidebar>

        <div class="page-content-wrapper">
            <div class="container">
                <div class="profile-wrapper-area py-3">
                    <div class="card">
                        <div class="card-body p-4">
                            <div
                                class="d-flex align-items-center justify-content-between mb-3"
                            >
                                <span class="h6">Ubah Alamat</span>
                                <Link
                                    :href="route('address-guest.index')"
                                    class="btn btn-sm btn-outline-secondary"
                                >
                                    <i class="lni lni-arrow-left me-2"></i
                                    >Kembali
                                </Link>
                            </div>
                            <form @submit.prevent="submit">
                                <div class="row">
                                    <div class="col-lg-12 py-2">
                                        <hr />
                                    </div>
                                    <div class="col-1g-12 py-2">
                                        <div
                                            style="
                                                height: 50vh;
                                                width: 100%;
                                                z-index: 1 !important;
                                            "
                                        >
                                            <l-map
                                                v-model="map.zoom"
                                                v-model:zoom="map.zoom"
                                                :center="[
                                                    form.latitude,
                                                    form.longitude,
                                                ]"
                                                @click="changeMarker"
                                            >
                                                <l-tile-layer
                                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                                ></l-tile-layer>
                                                <l-control position="topright">
                                                    <input
                                                        @keyup="search"
                                                        type="text"
                                                        placeholder="Cari..."
                                                        style="width: 100%"
                                                    />
                                                    <div
                                                        class="collapse show"
                                                        style="width: 205px"
                                                        v-if="
                                                            other.searchAddress
                                                                .length > 0
                                                        "
                                                    >
                                                        <div
                                                            class="card card-body rounded-0 border border-dark p-0"
                                                        >
                                                            <p
                                                                style="
                                                                    cursor: pointer;
                                                                "
                                                                v-for="(
                                                                    addr, i
                                                                ) in other.searchAddress"
                                                                :key="i"
                                                                @click="
                                                                    selectAddress(
                                                                        addr.y,
                                                                        addr.x
                                                                    )
                                                                "
                                                            >
                                                                {{ addr.label }}
                                                            </p>
                                                            <p
                                                                v-if="
                                                                    other.searchAddress <
                                                                    1
                                                                "
                                                            >
                                                                Alamat tidak
                                                                ditemukan
                                                            </p>
                                                        </div>
                                                    </div>
                                                </l-control>
                                                <l-marker
                                                    :lat-lng="[
                                                        form.latitude,
                                                        form.longitude,
                                                    ]"
                                                    draggable
                                                    @moveend="log"
                                                >
                                                    <l-tooltip>
                                                        {{
                                                            `Lat: ${form.latitude} Lng: ${form.longitude}`
                                                        }}
                                                    </l-tooltip>
                                                </l-marker>
                                            </l-map>
                                        </div>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <div class="mb-3">
                                            <label
                                                for="longitude"
                                                class="form-label"
                                                >Longitude</label
                                            >
                                            <input
                                                class="form-control"
                                                id="longitude"
                                                v-model="form.longitude"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <div class="mb-3">
                                            <label
                                                for="latitude"
                                                class="form-label"
                                                >Latitude</label
                                            >
                                            <input
                                                class="form-control"
                                                id="latitude"
                                                v-model="form.latitude"
                                                disabled
                                            />
                                        </div>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <div class="mb-3">
                                            <label
                                                for="receiver"
                                                class="form-label"
                                                >Nama Penerima</label
                                            >
                                            <input
                                                class="form-control"
                                                id="receiver"
                                                v-model="form.receiver"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-6 mb-3">
                                        <div class="mb-3">
                                            <label
                                                for="phone"
                                                class="form-label"
                                                >No HP</label
                                            >
                                            <input
                                                class="form-control"
                                                id="sender"
                                                v-model="form.phone"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label
                                            for="province_id"
                                            class="form-label"
                                            >Provinsi</label
                                        >
                                        <select
                                            class="form-control mb-3"
                                            v-model="form.province_id"
                                            id="province_id"
                                            @change="getCity(form.province_id)"
                                        >
                                            <option
                                                :value="province.id"
                                                v-for="(
                                                    province, i
                                                ) in other.provinces"
                                                :key="i"
                                            >
                                                {{ province.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label for="city_id" class="form-label"
                                            >Kabupaten / Kota</label
                                        >
                                        <select
                                            class="form-control mb-3"
                                            v-model="form.city_id"
                                            id="city_id"
                                            @change="
                                                getSubdistrict(form.city_id)
                                            "
                                        >
                                            <option
                                                :value="city.id"
                                                v-for="(
                                                    city, i
                                                ) in other.cities"
                                                :key="i"
                                            >
                                                {{ city.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <label
                                            for="subdistrict_id"
                                            class="form-label"
                                            >Kecamatan</label
                                        >
                                        <select
                                            class="form-control mb-3"
                                            v-model="form.subdistrict_id"
                                            id="subdistrict_id"
                                            @change="
                                                changeSubdistrict(
                                                    form.subdistrict_id
                                                )
                                            "
                                        >
                                            <option
                                                :value="subdistrict.id"
                                                v-for="(
                                                    subdistrict, i
                                                ) in other.subdistricts"
                                                :key="i"
                                            >
                                                {{ subdistrict.name }}
                                            </option>
                                        </select>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="mb-3">
                                            <label
                                                for="postal_code"
                                                class="form-label"
                                                >Kode Pos</label
                                            >
                                            <input
                                                class="form-control"
                                                id="postal_code"
                                                v-model="form.postal_code"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12 mb-3">
                                        <div class="mb-3">
                                            <label
                                                for="detail"
                                                class="form-label"
                                                >Alamat Detail</label
                                            >
                                            <textarea
                                                class="form-control"
                                                id="detail"
                                                rows="3"
                                                v-model="form.detail"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="d-grid">
                                            <button
                                                class="btn btn-success rounded-custom"
                                                :disabled="form.processing"
                                            >
                                                <div
                                                    class="d-flex justify-content-center align-items-center"
                                                >
                                                    <SpinnerProcessing
                                                        :color="'text-white'"
                                                        :size="'sm'"
                                                        :me="'me-2'"
                                                        v-if="form.processing"
                                                    />
                                                    <span
                                                        ><i
                                                            class="lni lni-save me-2"
                                                        ></i
                                                        >Simpan</span
                                                    >
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="d-grid">
                                            <Link
                                                :href="
                                                    route('address-guest.index')
                                                "
                                                class="btn btn-outline-secondary rounded-custom"
                                                ><i
                                                    class="lni lni-arrow-left me-2"
                                                ></i
                                                >Kembali
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
