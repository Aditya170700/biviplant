<script>
import Layout from "../../../Layouts/Dashboard/App.vue";
import Pagination from "../../../Shared/Pagination.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { reactive } from "vue";
import { pickBy } from "lodash";

export default {
    components: { Layout, Link, Pagination },
    props: {
        errors: Object,
        results: Object,
        filters: Object,
    },
    setup(props) {
        let params = reactive({
            search: props.filters.search,
            limit: props.filters.limit ?? 25,
            field: props.filters.field,
            direction: props.filters.direction,
        });

        let sort = (field) => {
            params.field = field;
            params.direction = params.direction == "asc" ? "desc" : "asc";
        };

        return {
            params,
            sort,
        };
    },
    watch: {
        params: {
            handler() {
                let params = pickBy(this.params);
                Inertia.get(route("admin.orders.index"), params, {
                    replace: true,
                    preserveState: true,
                });
            },
            deep: true,
        },
    },
};
</script>

<template>
    <Layout :title="'Pesanan'">
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="d-flex justify-content-start">
                            <div class="col-lg-2 col-sm-6 me-2">
                                <div class="mb-3">
                                    <input
                                        class="form-control"
                                        placeholder="Cari..."
                                        v-model="params.search"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-6 me-2">
                                <select
                                    class="form-control mb-3"
                                    v-model="params.limit"
                                >
                                    <option value="25">Lihat 25 data</option>
                                    <option value="50">Lihat 50 data</option>
                                    <option value="100">Lihat 100 data</option>
                                    <option value="200">Lihat 200 data</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th>NO</th>
                                        <th>PEMESAN</th>
                                        <th>PRODUK</th>
                                        <th>VOUCHER</th>
                                        <th>TOTAL</th>
                                        <th>STATUS</th>
                                        <th>TGL ORDER</th>
                                        <th>TGL BAYAR</th>
                                        <th>TGL KIRIM</th>
                                        <th>TGL SELESAI</th>
                                        <th>AKSI</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(result, i) in results.data"
                                        :key="i"
                                    >
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ result.user?.name }}</td>
                                        <td>
                                            {{
                                                result.order_details[0].product
                                                    .name
                                            }}
                                            <span
                                                v-if="
                                                    result.order_details
                                                        .length > 1
                                                "
                                            >
                                                dan
                                                {{
                                                    result.order_details
                                                        .length - 1
                                                }}
                                                produk lainnya</span
                                            >
                                        </td>
                                        <td>{{ result.voucher_rp }}</td>
                                        <td>{{ result.total_rp }}</td>
                                        <td>{{ result.payment_status }}</td>
                                        <td>{{ result.created_at }}</td>
                                        <td>{{ result.paid_at }}</td>
                                        <td>{{ result.send_at }}</td>
                                        <td>{{ result.finish_at }}</td>
                                        <td>
                                            <div class="d-flex">
                                                <Link
                                                    :href="
                                                        route(
                                                            'admin.orders.show',
                                                            {
                                                                id: result.id,
                                                            }
                                                        )
                                                    "
                                                    class="btn btn-sm btn-primary me-2 rounded-custom"
                                                >
                                                    <i class="fas fa-eye"></i>
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <Pagination
                                class="mt-6"
                                :links="results.links"
                                :from="results.from"
                                :to="results.to"
                                :total="results.total"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>
