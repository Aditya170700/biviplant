<template>
    <Layout
        :title="'Voucher'"
        :typeButton="'create'"
        :href="route('admin.vouchers.create')"
    >
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
                                        <th>
                                            <span
                                                @click="sort('code')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                CODE
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'code'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'code'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('desc')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                DESKRIPSI
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'desc'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'desc'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('limit')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                LIMIT
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'limit'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'limit'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('expired_at')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                BERAKHIR
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field ==
                                                            'expired_at'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field ==
                                                            'expired_at'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('min_order')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                MIN ORDER
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field ==
                                                            'min_order'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field ==
                                                            'min_order'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('discount')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                DISKON
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field ==
                                                            'discount'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field ==
                                                            'discount'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="(result, i) in results.data"
                                        :key="i"
                                    >
                                        <td>{{ i + 1 }}</td>
                                        <td>{{ result.code }}</td>
                                        <td>{{ result.desc }}</td>
                                        <td>{{ result.limit }}</td>
                                        <td>{{ result.expired_at }}</td>
                                        <td>{{ result.min_order }}</td>
                                        <td>
                                            {{ result.discount }} -
                                            {{ result.max_discount }}
                                        </td>
                                        <td class="d-flex justify-content-end">
                                            <Link
                                                :href="
                                                    route(
                                                        'admin.vouchers.edit',
                                                        {
                                                            id: result.id,
                                                        }
                                                    )
                                                "
                                                class="btn btn-sm btn-warning me-2 rounded-custom"
                                            >
                                                <i class="fas fa-pencil"></i>
                                            </Link>
                                            <button
                                                class="btn btn-sm btn-danger me-2 rounded-custom"
                                                @click="destroy(result.id)"
                                            >
                                                <i class="fas fa-trash"></i>
                                            </button>
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

        let destroy = (id) => {
            confirmation(
                "Tindakan ini akan menghapus data secara permanen"
            ).then((res) => {
                if (res) {
                    Inertia.delete(route("admin.vouchers.destroy", { id: id }));
                }
            });
        };

        return {
            params,
            sort,
            destroy,
        };
    },
    watch: {
        params: {
            handler() {
                let params = pickBy(this.params);
                Inertia.get(route("admin.vouchers.index"), params, {
                    replace: true,
                    preserveState: true,
                });
            },
            deep: true,
        },
    },
};
</script>
