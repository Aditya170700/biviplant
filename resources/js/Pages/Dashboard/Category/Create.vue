<template>
    <Layout
        :title="'Create Category'"
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
                                            >Name</label
                                        >
                                        <input
                                            class="form-control"
                                            id="name"
                                            v-model="form.name"
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
                                        <input
                                            type="file"
                                            class="form-control"
                                            id="banner"
                                            @input="
                                                form.banner =
                                                    $event.target.files[0]
                                            "
                                        />
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
                                            >Icon</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control"
                                            id="icon"
                                            @input="
                                                form.icon =
                                                    $event.target.files[0]
                                            "
                                        />
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
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing";
import FormText from "../../../Shared/Form/FormText";

export default {
    components: { Layout, Link, SpinnerProcessing, FormText },
    props: {
        errors: Object,
    },
    setup() {
        const form = useForm({
            name: "",
            meta_title: "",
            meta_description: "",
            meta_keyword: "",
            banner: "",
            icon: "",
        });

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.categories.store"));
        }

        return {
            form,
            submit,
        };
    },
};
</script>
