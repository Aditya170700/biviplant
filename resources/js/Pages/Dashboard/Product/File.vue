<template>
    <Layout
        :title="'Foto Produk'"
        :typeButton="'back'"
        :href="route('admin.products.index')"
    >
        <div class="row">
            <div class="col-md-6 grid-margin">
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
                                        <label for="alt" class="form-label"
                                            >Nama Alternatif</label
                                        >
                                        <input
                                            class="form-control"
                                            id="alt"
                                            v-model="form.alt"
                                        />
                                        <FormText
                                            :id="'alt'"
                                            :message="form.errors.alt"
                                            v-if="form.errors.alt"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="description"
                                            class="form-label"
                                            >Deskripsi</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="description"
                                            rows="3"
                                            v-model="form.description"
                                        ></textarea>
                                        <FormText
                                            :id="'description'"
                                            :message="form.errors.description"
                                            v-if="form.errors.description"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label for="path" class="form-label"
                                            >Foto</label
                                        >
                                        <crop
                                            field="img"
                                            :langType="'en'"
                                            @crop-success="cropSuccess"
                                            :width="500"
                                            :height="500"
                                            v-model="showCroper"
                                        >
                                        </crop>
                                        <div class="mb-3">
                                            <img
                                                class="img rounded fluid"
                                                alt=""
                                                :src="path"
                                                style="width: 100px"
                                            />
                                        </div>
                                        <a
                                            @click="showCroper = true"
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
                                            :id="'path'"
                                            :message="form.errors.path"
                                            v-if="form.errors.path"
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
            <div class="col-md-6 grid-margin">
                <div
                    class="modal fade"
                    id="preview"
                    tabindex="-1"
                    aria-labelledby="previewLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-sm">
                        <div class="modal-content rounded-custom">
                            <div class="modal-body">
                                <div
                                    class="d-flex justify-content-between align-items-center mb-3"
                                >
                                    <div class="h5">
                                        {{ previewImg.name }}
                                    </div>
                                    <button
                                        class="btn btn-sm rounded-custom btn-danger"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                        @click="destroy(previewImg.id)"
                                    >
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12 mb-3">
                                        <img
                                            class="img rounded-custom fluid"
                                            alt=""
                                            :src="previewImg.src"
                                            style="width: 100%"
                                        />
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <p>
                                            {{ previewImg.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div
                                class="col-lg-3"
                                v-for="(image, i) in results.data"
                                :key="i"
                            >
                                <div class="card bg-dark text-white">
                                    <img
                                        :src="image.src"
                                        class="card-img"
                                        :alt="image.alt"
                                        @click="preview(image)"
                                    />
                                </div>
                            </div>
                        </div>
                        <Pagination
                            class="mt-2"
                            :links="results.links"
                            :from="results.from"
                            :to="results.to"
                            :total="results.total"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../../Layouts/Dashboard/App.vue";
import Pagination from "../../../Shared/Pagination.vue";
import { useForm, Link } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing";
import FormText from "../../../Shared/Form/FormText";
import { ref } from "@vue/reactivity";
import { Inertia } from "@inertiajs/inertia";
import { imageReader, dataURLtoFile } from "../../../utils";
import Cropper from "vue-image-crop-upload";

export default {
    components: {
        Layout,
        Link,
        SpinnerProcessing,
        FormText,
        crop: Cropper,
        Pagination,
    },
    props: {
        errors: Object,
        results: Object,
        product: Object,
    },
    setup(props) {
        const path = ref("");
        let previewImg = ref({
            name: "",
            src: "",
            description: "",
            id: "",
        });
        const showCroper = ref(false);
        const form = useForm({
            name: "",
            alt: "",
            description: "",
            path: "",
            product_id: props.product.id,
        });

        function cropSuccess(imgDataUrl, field) {
            form.path = dataURLtoFile(imgDataUrl);
            path.value = imgDataUrl;
        }

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.products.files.store", props.product.id), {
                onSuccess: () => {
                    form.reset("name", "alt", "description", "path");
                    path.value = "";
                },
            });
        }

        function preview(image) {
            previewImg.value = image;
            let myModal = new bootstrap.Modal(
                document.getElementById("preview"),
                {
                    keyboard: false,
                }
            );
            myModal.show();
        }

        let destroy = (id) => {
            confirmation(
                "Tindakan ini akan menghapus data secara permanen"
            ).then((res) => {
                if (res) {
                    Inertia.delete(
                        route("admin.products.files.destroy", {
                            id: props.product.id,
                            fileId: id,
                        })
                    );
                }
            });
        };

        return {
            form,
            showCroper,
            path,
            cropSuccess,
            submit,
            preview,
            previewImg,
            destroy,
        };
    },
};
</script>
