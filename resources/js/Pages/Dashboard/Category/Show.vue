<template>
    <Layout
        :title="'Show Category'"
        :typeButton="'back'"
        :href="route('admin.categories.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-2">Name</div>
                            <div class="col-lg-10">: {{ result.name }}</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Meta Title</div>
                            <div class="col-lg-10">
                                : {{ result.meta_title }}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Meta Description</div>
                            <div class="col-lg-10">
                                : {{ result.meta_description }}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Meta Keyword</div>
                            <div class="col-lg-10">
                                : {{ result.meta_keyword }}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Icon</div>
                            <div class="col-lg-10">
                                <img
                                    :src="result.icon_url"
                                    alt=""
                                    style="width: 100px"
                                />
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Banner</div>
                            <div class="col-lg-10">
                                <img
                                    :src="result.banner_url"
                                    alt=""
                                    style="width: 200px"
                                />
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
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: { Layout, Link },
    props: {
        errors: Object,
        result: Object,
    },
};
</script>
