<template>
    <Layout :title="'Suplier'">
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-1g-12 mb-3">
                                    <div
                                        style="
                                            height: 75vh;
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
                                                    style="width: 500px"
                                                />
                                                <div
                                                    class="collapse show"
                                                    style="width: 500px"
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
                                <div class="col-lg-6 mb-3">
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
                                        <FormText
                                            :id="'longitude'"
                                            :message="form.errors.longitude"
                                            v-if="form.errors.longitude"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="latitude" class="form-label"
                                            >Latitude</label
                                        >
                                        <input
                                            class="form-control"
                                            id="latitude"
                                            v-model="form.latitude"
                                            disabled
                                        />
                                        <FormText
                                            :id="'latitude'"
                                            :message="form.errors.latitude"
                                            v-if="form.errors.latitude"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="sender" class="form-label"
                                            >Nama Pengirim</label
                                        >
                                        <input
                                            class="form-control"
                                            id="sender"
                                            v-model="form.sender"
                                        />
                                        <FormText
                                            :id="'sender'"
                                            :message="form.errors.sender"
                                            v-if="form.errors.sender"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="phone" class="form-label"
                                            >No HP</label
                                        >
                                        <input
                                            class="form-control"
                                            id="sender"
                                            v-model="form.phone"
                                        />
                                        <FormText
                                            :id="'phone'"
                                            :message="form.errors.phone"
                                            v-if="form.errors.phone"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <label for="province_id" class="form-label"
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
                                    <FormText
                                        :id="'province_id'"
                                        :message="form.errors.province_id"
                                        v-if="form.errors.province_id"
                                    />
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <label for="city_id" class="form-label"
                                        >Kabupaten / Kota</label
                                    >
                                    <select
                                        class="form-control mb-3"
                                        v-model="form.city_id"
                                        id="city_id"
                                        @change="getSubdistrict(form.city_id)"
                                    >
                                        <option
                                            :value="city.id"
                                            v-for="(city, i) in other.cities"
                                            :key="i"
                                        >
                                            {{ city.name }}
                                        </option>
                                    </select>
                                    <FormText
                                        :id="'city_id'"
                                        :message="form.errors.city_id"
                                        v-if="form.errors.city_id"
                                    />
                                </div>
                                <div class="col-lg-3 mb-3">
                                    <label
                                        for="subdistrict_id"
                                        class="form-label"
                                        >Kecamatan</label
                                    >
                                    <select
                                        class="form-control mb-3"
                                        v-model="form.subdistrict_id"
                                        id="subdistrict_id"
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
                                    <FormText
                                        :id="'subdistrict_id'"
                                        :message="form.errors.subdistrict_id"
                                        v-if="form.errors.subdistrict_id"
                                    />
                                </div>
                                <div class="col-lg-3 mb-3">
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
                                        <FormText
                                            :id="'postal_code'"
                                            :message="form.errors.postal_code"
                                            v-if="form.errors.postal_code"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label for="detail" class="form-label"
                                            >Alamat Detail</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="detail"
                                            rows="3"
                                            v-model="form.detail"
                                        ></textarea>
                                        <FormText
                                            :id="'detail'"
                                            :message="form.errors.detail"
                                            v-if="form.errors.detail"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <button
                                        class="btn btn-primary btn-sm rounded-custom"
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
                                                ><i class="fas fa-save me-2"></i
                                                >Simpan</span
                                            >
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-md-12 grid-margin">
                <div
                    class="modal fade"
                    id="preview"
                    tabindex="-1"
                    aria-labelledby="previewLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content rounded-custom">
                            <div class="modal-body" v-if="other.preview">
                                <div
                                    class="d-flex justify-content-between align-items-center mb-3"
                                >
                                    <div class="h5">Preview Suplier</div>
                                    <a
                                        :href="`https://www.google.com/maps/?q=${other.preview.latitude},${other.preview.longitude}`"
                                        target="_blank"
                                        class="btn btn-primary btn-sm rounded-custom"
                                    >
                                        <i class="fas fa-location-arrow"></i>
                                    </a>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">Pengirim</div>
                                    <div class="col-lg-8">
                                        : {{ other.preview.sender }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">No HP</div>
                                    <div class="col-lg-8">
                                        : {{ other.preview.phone }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">Provinsi</div>
                                    <div class="col-lg-8">
                                        :
                                        {{
                                            other.preview.subdistrict.city
                                                .province.name
                                        }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">Kota / Kabupaten</div>
                                    <div class="col-lg-8">
                                        :
                                        {{
                                            other.preview.subdistrict.city.name
                                        }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">Kecamatan</div>
                                    <div class="col-lg-8">
                                        : {{ other.preview.subdistrict.name }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">Kode Pos</div>
                                    <div class="col-lg-8">
                                        : {{ other.preview.postal_code }}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-4">Alamat Detail</div>
                                    <div class="col-lg-8">
                                        : {{ other.preview.detail }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>No</th>
                                                <th>Pengirim</th>
                                                <th>No Hp</th>
                                                <th>Provinsi</th>
                                                <th>Kota / Kabupaten</th>
                                                <th>Kecamatan</th>
                                                <th>Kode Pos</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(
                                                    result, i
                                                ) in result.data"
                                                :key="i"
                                            >
                                                <td>{{ i + 1 }}</td>
                                                <td>{{ result.sender }}</td>
                                                <td>{{ result.phone }}</td>
                                                <td>
                                                    {{
                                                        result.subdistrict.city
                                                            .province.name
                                                    }}
                                                </td>
                                                <td>
                                                    {{
                                                        result.subdistrict.city
                                                            .name
                                                    }}
                                                </td>
                                                <td>
                                                    {{
                                                        result.subdistrict.name
                                                    }}
                                                </td>
                                                <td>
                                                    {{ result.postal_code }}
                                                </td>
                                                <td
                                                    class="d-flex justify-content-end"
                                                >
                                                    <button
                                                        class="btn btn-sm btn-primary me-2 rounded-custom"
                                                        @click="preview(result)"
                                                    >
                                                        <i
                                                            class="fas fa-eye"
                                                        ></i>
                                                    </button>
                                                    <button
                                                        class="btn btn-sm btn-danger me-2 rounded-custom"
                                                        @click="
                                                            destroy(result.id)
                                                        "
                                                    >
                                                        <i
                                                            class="fas fa-trash"
                                                        ></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <Pagination
                                        class="mt-2"
                                        :links="result.links"
                                        :from="result.from"
                                        :to="result.to"
                                        :total="result.total"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../../Layouts/Dashboard/App.vue";
import Pagination from "../../../Shared/Pagination.vue";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing";
import FormText from "../../../Shared/Form/FormText";
import { Inertia } from "@inertiajs/inertia";
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControl,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
} from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";

export default {
    components: {
        Layout,
        Link,
        SpinnerProcessing,
        FormText,
        Pagination,
        LMap,
        LIcon,
        LTileLayer,
        LMarker,
        LControl,
        LControlLayers,
        LTooltip,
        LPopup,
        LPolyline,
        LPolygon,
        LRectangle,
    },
    props: {
        errors: Object,
        result: Object,
    },
    setup(props) {
        let map = reactive({
            zoom: 15,
        });

        const form = useForm({
            province_id: "",
            city_id: "",
            subdistrict_id: "",
            longitude: 0,
            latitude: 0,
            sender: "",
            phone: "",
            postal_code: "",
            detail: "",
        });

        let other = reactive({
            provinces: [],
            cities: [],
            subdistricts: [],
            searchAddress: [],
            preview: null,
        });

        function preview(data) {
            other.preview = data;
            let myModal = new bootstrap.Modal(
                document.getElementById("preview"),
                {
                    keyboard: false,
                }
            );
            myModal.show();
        }

        let getProvince = () => {
            axios
                .get("/api/provinces")
                .then((response) => {
                    other.provinces = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        let getCity = (provinceId) => {
            axios
                .get("/api/cities", {
                    params: {
                        province_id: provinceId,
                    },
                })
                .then((response) => {
                    other.cities = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        let getSubdistrict = (cityId) => {
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

        function submit() {
            console.log(form);
            form.transform((data) => ({
                ...data,
            })).post(route("admin.origins.store"), {
                onSuccess: () => {
                    form.reset(
                        "province_id",
                        "city_id",
                        "subdistrict_id",
                        "longitude",
                        "latitude",
                        "sender",
                        "phone",
                        "postal_code",
                        "detail"
                    );
                },
            });
        }

        let destroy = (id) => {
            confirmation(
                "Tindakan ini akan menghapus data secara permanen"
            ).then((res) => {
                if (res) {
                    Inertia.delete(
                        route("admin.origins.destroy", {
                            id: id,
                        })
                    );
                }
            });
        };

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

        return {
            other,
            getCity,
            getSubdistrict,
            form,
            preview,
            submit,
            destroy,
            map,
            log,
            changeMarker,
            search,
            selectAddress,
        };
    },
};
</script>
