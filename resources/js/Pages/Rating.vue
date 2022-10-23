<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../Shared/Homepage/Header.vue";
import Sidebar from "./../Shared/Homepage/Sidebar.vue";
import Footer from "./../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";

const props = defineProps({
    meta_title: String,
    meta_description: String,
    meta_keyword: String,
    results: Array,
});

const metaTitle = ref(props.meta_title);
const metaDescription = ref(props.meta_description);
const metaKeyword = ref(props.meta_keyword);

function rate(data, rating) {
    data.rating = rating;
}

function store() {
    Inertia.post(route("rating.store"), {
        results: props.results,
    });
}
</script>

<template>
    <div>
        <Head>
            <title>{{ metaTitle }}</title>
            <meta
                head-key="description"
                name="description"
                :content="metaDescription"
            />
            <meta head-key="keyword" name="keyword" :content="metaKeyword" />
        </Head>
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper bg-fug">
            <div class="container">
                <div class="py-3">
                    <div class="card p-0">
                        <div class="card-body">
                            <div
                                class="row mb-3"
                                v-for="(result, i) in results"
                                :key="i"
                            >
                                <div
                                    class="col-12 d-flex justify-content-center mb-2"
                                >
                                    <img
                                        :src="result.image"
                                        alt="Product Image"
                                        style="width: 100px"
                                        class="rounded"
                                    />
                                </div>
                                <div class="col-12 text-center">
                                    <span class="fw-bold">{{
                                        result.product
                                    }}</span>
                                </div>
                                <div class="col-12 text-center">
                                    <div class="my-3">
                                        <div class="product-rating">
                                            <i
                                                :class="`lni me-2 ${
                                                    result.rating >= 1
                                                        ? 'lni-star-filled text-warning'
                                                        : 'lni-star'
                                                }`"
                                                @click="rate(result, 1)"
                                                style="font-size: 20px"
                                            ></i
                                            ><i
                                                :class="`lni me-2 ${
                                                    result.rating >= 2
                                                        ? 'lni-star-filled text-warning'
                                                        : 'lni-star'
                                                }`"
                                                @click="rate(result, 2)"
                                                style="font-size: 20px"
                                            ></i
                                            ><i
                                                :class="`lni me-2 ${
                                                    result.rating >= 3
                                                        ? 'lni-star-filled text-warning'
                                                        : 'lni-star'
                                                }`"
                                                @click="rate(result, 3)"
                                                style="font-size: 20px"
                                            ></i
                                            ><i
                                                :class="`lni me-2 ${
                                                    result.rating >= 4
                                                        ? 'lni-star-filled text-warning'
                                                        : 'lni-star'
                                                }`"
                                                @click="rate(result, 4)"
                                                style="font-size: 20px"
                                            ></i
                                            ><i
                                                :class="`lni me-2 ${
                                                    result.rating >= 5
                                                        ? 'lni-star-filled text-warning'
                                                        : 'lni-star'
                                                }`"
                                                @click="rate(result, 5)"
                                                style="font-size: 20px"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="mb-3">
                                        <textarea
                                            class="form-control"
                                            :id="`comment-${i}`"
                                            v-model="result.comment"
                                            placeholder="Comment"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="col-12"><hr /></div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="d-grid">
                                        <button
                                            class="btn btn-sm btn-success"
                                            @click="store"
                                        >
                                            <i class="lni lni-save me-2"></i
                                            >Simpan
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
