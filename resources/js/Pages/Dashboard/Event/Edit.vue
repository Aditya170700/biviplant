<template>
    <Layout
        :title="'Ubah Event'"
        :typeButton="'back'"
        :href="route('admin.events.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="title" class="form-label"
                                            >Judul</label
                                        >
                                        <input
                                            class="form-control"
                                            id="title"
                                            v-model="form.title"
                                        />
                                        <FormText
                                            :id="'title'"
                                            :message="errors.title"
                                            v-if="errors.title"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="sub_title"
                                            class="form-label"
                                            >Sub Judul</label
                                        >
                                        <input
                                            class="form-control"
                                            id="sub_title"
                                            v-model="form.sub_title"
                                        />
                                        <FormText
                                            :id="'sub_title'"
                                            :message="errors.sub_title"
                                            v-if="errors.sub_title"
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
                                            @crop-success="cropSuccess"
                                            :width="1200"
                                            :height="800"
                                            v-model="showCroper">
                                        </crop>
                                        <div class="mb-3">
                                            <img class="img rounded fluid" alt="" :src="banner" style="width: 200px">
                                        </div>
                                         <a
                                            @click="showCroper = true"
                                            class="btn btn-success btn-sm rounded-custom"
                                            :disabled="form.processing"
                                        >
                                            <span><i class="fas fa-upload me-2"></i>Pilih</span>
                                        </a>
                                        <FormText
                                            :id="'banner'"
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
        </div>
    </Layout>
</template>

<script>
import Layout from "../../../Layouts/Dashboard/App.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import { Inertia } from "@inertiajs/inertia";
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing";
import FormText from "../../../Shared/Form/FormText";
import { ref } from '@vue/reactivity';
import { imageReader, dataURLtoFile } from '../../../utils';
import Cropper from 'vue-image-crop-upload';

export default {
    components: { Layout, Link, SpinnerProcessing, FormText, 'crop': Cropper },
    props: {
        errors: Object,
        result: Object,
    },
    setup(props) {
        const form = useForm(props.result);
        const banner = ref(props.result.path_url);
        const showCroper = ref(false);

        function submit() {
            let data = form.data();
            Inertia.post(
                route("admin.events.update", {
                    id: props.result.id,
                }),
                {
                    _method: "put",
                    ...data,
                }
            );
        }

        /**
         * crop success
         *
         * [param] imgDataUrl
         * [param] field
         */
        function cropSuccess(imgDataUrl, field){
            form.path = dataURLtoFile(imgDataUrl)
            banner.value = imgDataUrl
        }

        return {
            form,
            submit,
            banner,
            cropSuccess,
            showCroper
        };
    },
};
</script>
