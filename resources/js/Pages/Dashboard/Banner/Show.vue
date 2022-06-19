<template>
    <Layout
        :title="'Show Category'"
        :typeButton="'back'"
        :href="route('admin.banners.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-2">Title</div>
                            <div class="col-lg-10">: {{ result.title }}</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Sub Title</div>
                            <div class="col-lg-10">
                                : {{ result.sub_title }}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Link</div>
                            <div class="col-lg-10">
                                : {{ result.link }}
                            </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Banner</div>
                            <div class="col-lg-10">
                                <img
                                    :src="result.path_url"
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
