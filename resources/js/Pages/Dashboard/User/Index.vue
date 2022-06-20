<template>
    <Layout
        :title="'Pengguna'"
        :typeButton="'create'"
        :href="route('admin.users.create')"
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
                        <Alert
                            v-if="$page.props.flash.success_delete"
                            :type="'success'"
                            :icon="'check'"
                            :message="$page.props.flash.success_delete"
                        />
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th>NO</th>
                                        <th>
                                            <span
                                                @click="sort('name')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                NAMA
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'name'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'name'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('role')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                ROLE
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'role'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'role'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('email')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                EMAIL
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'email'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'email'
                                                    "
                                                    class="fa-solid fa-arrow-up-z-a"
                                                ></i>
                                            </span>
                                        </th>
                                        <th>
                                            <span
                                                @click="sort('phone')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                TELEPON
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field == 'phone'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field == 'phone'
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
                                        <td>{{ result.name }}</td>
                                        <td>{{ result.role }}</td>
                                        <td>{{ result.email }}</td>
                                        <td>{{ result.phone }}</td>
                                        <td class="d-flex justify-content-end">
                                            <Link
                                                :href="
                                                    route('admin.users.show', {
                                                        id: result.id,
                                                    })
                                                "
                                                class="btn btn-sm btn-primary me-2 rounded-custom"
                                            >
                                                <i class="fas fa-eye"></i>
                                            </Link>
                                            <Link
                                                :href="
                                                    route('admin.users.edit', {
                                                        id: result.id,
                                                    })
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
import Alert from "../../../Shared/Alert.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import { reactive } from "vue";
import { pickBy } from "lodash";

export default {
    components: { Layout, Link, Pagination, Alert },
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
                    Inertia.delete(route("admin.users.destroy", { id: id }));
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
                Inertia.get(route("admin.users.index"), params, {
                    replace: true,
                    preserveState: true,
                });
            },
            deep: true,
        },
    },
};
</script>
