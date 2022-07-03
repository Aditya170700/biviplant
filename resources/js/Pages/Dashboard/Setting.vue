<template>
    <Layout
        :title="'Pengaturan'"
        :typeButton="'back'"
        :href="route('admin.dashboard')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="owner" class="form-label"
                                            >Owner</label
                                        >
                                        <input
                                            class="form-control"
                                            id="owner"
                                            v-model="form.owner"
                                        />
                                        <FormText
                                            :id="'owner'"
                                            :message="form.errors.owner"
                                            v-if="form.errors.owner"
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
                                        <label for="email" class="form-label"
                                            >Email</label
                                        >
                                        <input
                                            class="form-control"
                                            id="email"
                                            v-model="form.email"
                                        />
                                        <FormText
                                            :id="'email'"
                                            :message="form.errors.email"
                                            v-if="form.errors.email"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="phone" class="form-label"
                                            >No HP</label
                                        >
                                        <input
                                            class="form-control"
                                            id="phone"
                                            v-model="form.phone"
                                        />
                                        <FormText
                                            :id="'phone'"
                                            :message="form.errors.phone"
                                            v-if="form.errors.phone"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="mb-3">
                                        <label for="facebook" class="form-label"
                                            >Facebook</label
                                        >
                                        <input
                                            class="form-control"
                                            id="facebook"
                                            v-model="form.facebook"
                                        />
                                        <FormText
                                            :id="'facebook'"
                                            :message="form.errors.facebook"
                                            v-if="form.errors.facebook"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="mb-3">
                                        <label for="ig" class="form-label"
                                            >Instagram</label
                                        >
                                        <input
                                            class="form-control"
                                            id="ig"
                                            v-model="form.ig"
                                        />
                                        <FormText
                                            :id="'ig'"
                                            :message="form.errors.ig"
                                            v-if="form.errors.ig"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="mb-3">
                                        <label for="tiktok" class="form-label"
                                            >Tiktok</label
                                        >
                                        <input
                                            class="form-control"
                                            id="tiktok"
                                            v-model="form.tiktok"
                                        />
                                        <FormText
                                            :id="'tiktok'"
                                            :message="form.errors.tiktok"
                                            v-if="form.errors.tiktok"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label for="about_us" class="form-label"
                                            >Tentang Kami</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="about_us"
                                            rows="3"
                                            v-model="form.about_us"
                                        ></textarea>
                                        <FormText
                                            :id="'about_us'"
                                            :message="form.errors.about_us"
                                            v-if="form.errors.about_us"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="logo" class="form-label"
                                            >Logo</label
                                        >
                                        <crop
                                            field="img"
                                            :langType="'en'"
                                            @crop-success="cropLogoSuccess"
                                            :width="100"
                                            :height="100"
                                            v-model="showLogoCroper"
                                        >
                                        </crop>
                                        <div class="mb-3">
                                            <img
                                                class="img rounded fluid"
                                                alt=""
                                                :src="logo"
                                                style="width: 100px"
                                            />
                                        </div>
                                        <a
                                            @click="showLogoCroper = true"
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
                                            :id="'logo'"
                                            :message="form.errors.logo"
                                            v-if="form.errors.logo"
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
import Layout from "../../Layouts/Dashboard/App.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../Shared/Form/SpinnerProcessing";
import FormText from "../../Shared/Form/FormText";
import { ref } from "@vue/reactivity";
import { imageReader, dataURLtoFile } from "../../utils";
import Cropper from "vue-image-crop-upload";

export default {
    components: { Layout, Link, SpinnerProcessing, FormText, crop: Cropper },
    props: {
        errors: Object,
        result: Object,
    },
    setup(props) {
        const form = useForm({
            owner: props.result.owner ?? "",
            meta_title: props.result.meta_title ?? "",
            meta_description: props.result.meta_description ?? "",
            meta_keyword: props.result.meta_keyword ?? "",
            facebook: props.result.facebook ?? "",
            ig: props.result.ig ?? "",
            tiktok: props.result.tiktok ?? "",
            email: props.result.email ?? "",
            phone: props.result.phone ?? "",
            about_us: props.result.about_us ?? "",
            logo: "",
        });
        const logo = ref(props.result.logo_url ?? "");
        const showLogoCroper = ref(false);

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.settings.store"));
        }

        function cropLogoSuccess(imgDataUrl, field) {
            form.logo = dataURLtoFile(imgDataUrl);
            logo.value = imgDataUrl;
        }

        return {
            form,
            submit,
            logo,
            showLogoCroper,
            cropLogoSuccess,
        };
    },
};
</script>
