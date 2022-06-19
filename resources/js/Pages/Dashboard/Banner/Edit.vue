<template>
    <Layout
        :title="'Update Banner'"
        :typeButton="'back'"
        :href="route('admin.banners.index')"
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
                                            >Title</label
                                        >
                                        <input
                                            class="form-control"
                                            id="title"
                                            v-model="form.title"
                                        />
                                        <FormText
                                            :id="'title'"
                                            :message="form.errors.title"
                                            v-if="form.errors.title"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="sub_title"
                                            class="form-label"
                                            >Sub Title</label
                                        >
                                        <input
                                            class="form-control"
                                            id="sub_title"
                                            v-model="form.sub_title"
                                        />
                                        <FormText
                                            :id="'sub_title'"
                                            :message="form.errors.sub_title"
                                            v-if="form.errors.sub_title"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="link"
                                            class="form-label"
                                            >Link</label
                                        >
                                        <textarea
                                            class="form-control"
                                            id="link"
                                            rows="3"
                                            v-model="form.link"
                                        ></textarea>
                                        <FormText
                                            :id="'link'"
                                            :message="form.errors.link"
                                            v-if="form.errors.link"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="banner" class="form-label"
                                            >Banner</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control"
                                            id="banner"
                                            @input="
                                                form.path =
                                                    $event.target.files[0]
                                            "
                                        />
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
                                                >Save</span
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

export default {
    components: { Layout, Link, SpinnerProcessing, FormText },
    props: {
        errors: Object,
        result: Object
    },
    setup(props) {
        const form = useForm(props.result);

        function submit() {
            let data = form.data();
            Inertia.post(
                route("admin.banners.update", {
                    id: props.result.id,
                }),
                {
                    _method: "put",
                    ...data,
                }
            );
        }

        return {
            form,
            submit,
        };
    },
};
</script>
