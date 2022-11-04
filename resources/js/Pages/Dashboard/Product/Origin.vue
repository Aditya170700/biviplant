<template>
    <Layout
        :title="'Suplier Produk'"
        :typeButton="'back'"
        :href="route('admin.products.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-12 mb-3">
                                <div class="h6 mb-2">Data Suplier</div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Pengirim</th>
                                                <th>Kecamatan</th>
                                                <th>Kabupaten/Kota</th>
                                                <th>Provinsi</th>
                                                <th>Kode Pos</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(origin, i) in origins"
                                                :key="i"
                                                :class="`${
                                                    originUsed.includes(
                                                        origin.id
                                                    )
                                                        ? 'd-none'
                                                        : ''
                                                }`"
                                            >
                                                <td>{{ i + 1 }}</td>
                                                <td>{{ origin.sender }}</td>
                                                <td>
                                                    {{
                                                        origin.subdistrict.name
                                                    }}
                                                </td>
                                                <td>
                                                    {{
                                                        origin.subdistrict.city
                                                            .name
                                                    }}
                                                </td>
                                                <td>
                                                    {{
                                                        origin.subdistrict.city
                                                            .province.name
                                                    }}
                                                </td>
                                                <td>
                                                    {{ origin.postal_code }}
                                                </td>
                                                <td>
                                                    <button
                                                        @click="
                                                            attach(origin.id)
                                                        "
                                                        class="btn btn-sm btn-success me-2 rounded-custom"
                                                    >
                                                        <i
                                                            class="fas fa-check"
                                                        ></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="col-lg-12 mb-3">
                                <div class="h6 mb-2">Suplier Dipilih</div>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead class="table-dark">
                                            <tr>
                                                <th>No</th>
                                                <th>Nama Pengirim</th>
                                                <th>Kecamatan</th>
                                                <th>Kabupaten/Kota</th>
                                                <th>Provinsi</th>
                                                <th>Kode Pos</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr
                                                v-for="(
                                                    origin, i
                                                ) in result.origins"
                                                :key="i"
                                            >
                                                <td>{{ i + 1 }}</td>
                                                <td>{{ origin.sender }}</td>
                                                <td>
                                                    {{
                                                        origin.subdistrict.name
                                                    }}
                                                </td>
                                                <td>
                                                    {{
                                                        origin.subdistrict.city
                                                            .name
                                                    }}
                                                </td>
                                                <td>
                                                    {{
                                                        origin.subdistrict.city
                                                            .province.name
                                                    }}
                                                </td>
                                                <td>
                                                    {{ origin.postal_code }}
                                                </td>
                                                <td>
                                                    <button
                                                        @click="
                                                            detach(origin.id)
                                                        "
                                                        class="btn btn-sm btn-danger me-2 rounded-custom"
                                                    >
                                                        <i
                                                            class="fas fa-times"
                                                        ></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing.vue";
import FormText from "../../../Shared/Form/FormText.vue";
import { Inertia } from "@inertiajs/inertia";
import { ref, onMounted, reactive } from "vue";
import axios from "axios";

export default {
    components: {
        Layout,
        Link,
        SpinnerProcessing,
        FormText,
        Pagination,
    },
    props: {
        errors: Object,
        result: Object,
        origins: Array,
    },
    setup(props) {
        let originUsed = props.result.origins.map((origin) => origin.id);

        let attach = (originId) => {
            Inertia.post(
                route("admin.products.origins.attach", {
                    id: props.result.id,
                    originId,
                })
            );
        };

        let detach = (originId) => {
            Inertia.delete(
                route("admin.products.origins.detach", {
                    id: props.result.id,
                    originId,
                })
            );
        };

        return {
            originUsed,
            attach,
            detach,
        };
    },
};
</script>
