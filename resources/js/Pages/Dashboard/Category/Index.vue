<template>
    <Layout
        :title="'Category'"
        :typeButton="'create'"
        :href="route('admin.categories.create')"
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
                                        placeholder="Search..."
                                        v-model="params.search"
                                    />
                                </div>
                            </div>
                            <div class="col-lg-2 col-sm-6 me-2">
                                <select
                                    class="form-control mb-3"
                                    v-model="params.limit"
                                >
                                    <option value="25">Show 25 data</option>
                                    <option value="50">Show 50 data</option>
                                    <option value="100">Show 100 data</option>
                                    <option value="200">Show 200 data</option>
                                </select>
                            </div>
                        </div>
                        <div
                            v-if="$page.props.flash.success_delete"
                            class="alert alert-success"
                            role="alert"
                        >
                            <i class="fas fa-check me-2"></i
                            >{{ $page.props.flash.success_delete }}
                        </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class="table-dark">
                                    <tr>
                                        <th>No</th>
                                        <th>ICON</th>
                                        <th>
                                            <span
                                                @click="sort('name')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                NAME
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
                                                @click="sort('meta_title')"
                                                class="d-flex justify-content-between"
                                                style="cursor: pointer"
                                            >
                                                META TITLE
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'asc' &&
                                                        params.field ==
                                                            'meta_title'
                                                    "
                                                    class="fa-solid fa-arrow-down-a-z"
                                                ></i>
                                                <i
                                                    v-if="
                                                        params.direction ==
                                                            'desc' &&
                                                        params.field ==
                                                            'meta_title'
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
                                        <td>
                                            <img
                                                :src="result.icon_url"
                                                alt=""
                                                class="img-fluid"
                                                style="width: 50px"
                                            />
                                        </td>
                                        <td>{{ result.name }}</td>
                                        <td>{{ result.meta_title }}</td>
                                        <td class="d-flex justify-content-end">
                                            <Link
                                                :href="
                                                    route(
                                                        'admin.categories.show',
                                                        {
                                                            id: result.id,
                                                        }
                                                    )
                                                "
                                                class="btn btn-sm btn-primary me-2 rounded-custom"
                                            >
                                                <i class="fas fa-eye"></i>
                                            </Link>
                                            <Link
                                                :href="
                                                    route(
                                                        'admin.categories.edit',
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
            confirmation("This action will delete this data").then((res) => {
                if (res) {
                    Inertia.delete(
                        route("admin.categories.destroy", { id: id })
                    );
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
                Inertia.get(route("admin.categories.index"), params, {
                    replace: true,
                    preserveState: true,
                });
            },
            deep: true,
        },
    },
};
</script>
