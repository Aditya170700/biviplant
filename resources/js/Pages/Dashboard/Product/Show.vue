<template>
    <Layout
        :title="'Detail Produk'"
        :typeButton="'back'"
        :href="route('admin.products.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="row mb-3">
                            <div class="col-lg-2">Nama</div>
                            <div class="col-lg-10">: {{ result.name }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Slug</div>
                            <div class="col-lg-10">: {{ result.slug }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Kategori</div>
                            <div class="col-lg-10">
                                : {{ result.category.name }}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Meta Title</div>
                            <div class="col-lg-10">
                                : {{ result.meta_title }}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Meta Description</div>
                            <div class="col-lg-10">
                                : {{ result.meta_description }}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Meta Keyword</div>
                            <div class="col-lg-10">
                                : {{ result.meta_keyword }}
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Harga</div>
                            <div class="col-lg-10">
                                : {{ result.price_rp }}
                                <del>{{ result.strike_price_rp }}</del>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Stok</div>
                            <div class="col-lg-10">: {{ result.stock }}</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Berat</div>
                            <div class="col-lg-10">: {{ result.weight }}gr</div>
                        </div>
                        <div class="row mb-3">
                            <div class="col-lg-2">Description</div>
                            <div
                                class="col-lg-10"
                                v-html="result.description"
                            ></div>
                        </div>
                        <hr class="my-3" />
                        <div class="row mb-3">
                            <div
                                class="col-lg-2"
                                v-for="(image, i) in result.files"
                                :key="i"
                            >
                                <div class="card bg-dark text-white">
                                    <img
                                        :src="image.src"
                                        class="card-img"
                                        :alt="image.alt"
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
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: { Layout, Link },
    props: {
        errors: Object,
        result: Object,
    },
};
</script>
