<template>
    <Layout
        :title="'Tambah Kategori'"
        :typeButton="'back'"
        :href="route('admin.categories.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="name" class="form-label"
                                            >Nama</label
                                        >
                                        <input
                                            class="form-control"
                                            id="name"
                                            v-model="form.name"
                                            @keyup="changeName"
                                        />
                                        <FormText
                                            :id="'name'"
                                            :message="form.errors.name"
                                            v-if="form.errors.name"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="slug" class="form-label"
                                            >Slug</label
                                        >
                                        <input
                                            class="form-control"
                                            id="slug"
                                            v-model="form.slug"
                                        />
                                        <FormText
                                            :id="'slug'"
                                            :message="form.errors.slug"
                                            v-if="form.errors.slug"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="meta_title"
                                            class="form-label"
                                            >Meta Title</label
                                        >
                                        <input
                                            class="form-control"
                                            id="meta_title"
                                            v-model="form.meta_title"
                                        />
                                        <FormText
                                            :id="'meta_title'"
                                            :message="form.errors.meta_title"
                                            v-if="form.errors.meta_title"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="meta_description"
                                            class="form-label"
                                            >Meta Description</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="meta_description"
                                            rows="3"
                                            v-model="form.meta_description"
                                        ></textarea>
                                        <FormText
                                            :id="'meta_description'"
                                            :message="
                                                form.errors.meta_description
                                            "
                                            v-if="form.errors.meta_description"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="meta_keyword"
                                            class="form-label"
                                            >Meta Keyword</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="meta_keyword"
                                            rows="3"
                                            v-model="form.meta_keyword"
                                        ></textarea>
                                        <FormText
                                            :id="'meta_keyword'"
                                            :message="form.errors.meta_keyword"
                                            v-if="form.errors.meta_keyword"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="banner" class="form-label"
                                            >Banner</label
                                        >
                                        <crop
                                            field="img"
                                            :langType="'en'"
                                            @crop-success="cropBannerSuccess"
                                            :width="744"
                                            :height="300"
                                            v-model="showBannerCroper"
                                        >
                                        </crop>
                                        <div class="mb-3">
                                            <img
                                                class="img rounded fluid"
                                                alt=""
                                                :src="banner"
                                                style="width: 200px"
                                            />
                                        </div>
                                        <a
                                            @click="showBannerCroper = true"
                                            class="btn btn-success btn-sm rounded-custom"
                                            :disabled="form.processing"
                                        >
                                            <span
                                                ><i
                                                    class="fas fa-upload me-2"
                                                ></i
                                                >Pilih</span
                                            >
                                        </a>
                                        <FormText
                                            :id="'banner'"
                                            :message="form.errors.banner"
                                            v-if="form.errors.banner"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="icon" class="form-label"
                                            >Ikon</label
                                        >
                                        <crop
                                            field="img"
                                            :langType="'en'"
                                            @crop-success="cropIconSuccess"
                                            :width="50"
                                            :height="50"
                                            v-model="showIconCroper"
                                        >
                                        </crop>
                                        <div class="mb-3">
                                            <img
                                                class="img rounded fluid"
                                                alt=""
                                                :src="icon"
                                                style="width: 50px"
                                            />
                                        </div>
                                        <a
                                            @click="showIconCroper = true"
                                            class="btn btn-success btn-sm rounded-custom"
                                            :disabled="form.processing"
                                        >
                                            <span
                                                ><i
                                                    class="fas fa-upload me-2"
                                                ></i
                                                >Pilih</span
                                            >
                                        </a>
                                        <FormText
                                            :id="'icon'"
                                            :message="form.errors.icon"
                                            v-if="form.errors.icon"
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
        </div>
    </Layout>
</template>

<script>
import Layout from "../../../Layouts/Dashboard/App.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing";
import FormText from "../../../Shared/Form/FormText";
import { slugify } from "../../../utils";
import { ref } from "@vue/reactivity";
import { imageReader, dataURLtoFile } from "../../../utils";
import Cropper from "vue-image-crop-upload";

export default {
    components: { Layout, Link, SpinnerProcessing, FormText, crop: Cropper },
    props: {
        errors: Object,
    },
    setup() {
        const form = useForm({
            name: "",
            slug: "",
            meta_title: "",
            meta_description: "",
            meta_keyword: "",
            banner: "",
            icon: "",
        });
        const banner = ref("");
        const showBannerCroper = ref(false);
        const icon = ref("");
        const showIconCroper = ref(false);

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.categories.store"));
        }

        const setBanner = (e) => {
            imageReader(form.banner, banner);
        };

        const setIcon = (e) => {
            imageReader(form.icon, icon);
        };

        function cropBannerSuccess(imgDataUrl, field) {
            form.banner = dataURLtoFile(imgDataUrl);
            banner.value = imgDataUrl;
        }

        function cropIconSuccess(imgDataUrl, field) {
            form.icon = dataURLtoFile(imgDataUrl);
            icon.value = imgDataUrl;
        }

        function changeName() {
            form.slug = slugify(form.name);
        }

        return {
            form,
            submit,
            setBanner,
            setIcon,
            changeName,
            banner,
            showBannerCroper,
            cropBannerSuccess,
            icon,
            showIconCroper,
            cropIconSuccess,
        };
    },
};
</script>
