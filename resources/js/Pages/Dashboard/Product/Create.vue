<template>
    <Layout
        :title="'Tambah Produk'"
        :typeButton="'back'"
        :href="route('admin.products.index')"
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
                                    <label for="category_id" class="form-label"
                                        >Kategori</label
                                    >
                                    <select
                                        class="form-control mb-3"
                                        v-model="form.category_id"
                                        id="category_id"
                                    >
                                        <option
                                            :value="category.id"
                                            v-for="(category, i) in categories"
                                            :key="i"
                                        >
                                            {{ category.name }}
                                        </option>
                                    </select>
                                    <FormText
                                        :id="'category_id'"
                                        :message="form.errors.category_id"
                                        v-if="form.errors.category_id"
                                    />
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
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="description"
                                            class="form-label"
                                            >Deskripsi</label
                                        >
                                        <QuillEditor
                                            theme="snow"
                                            v-model:content="form.description"
                                            contentType="html"
                                            style="min-height:300px;"
                                        />
                                        <FormText
                                            :id="'description'"
                                            :message="form.errors.description"
                                            v-if="form.errors.description"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label for="is_featured" class="form-label">Tampilkan di Unggulan</label>
                                        <select class="form-control" v-model="form.is_featured" id="is_featured">
                                            <option value="1" selected>Tidak</option>
                                            <option value="2">Ya</option>
                                        </select>
                                        <FormText
                                            :id="'is_featured'"
                                            :message="form.errors.is_featured"
                                            v-if="form.errors.is_featured"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="price" class="form-label"
                                            >Harga</label
                                        >
                                        <CurrencyInput
                                            id="price"
                                            v-model="form.price"
                                            :options="{ currency: 'IDR' }"
                                        />
                                        <FormText
                                            :id="'price'"
                                            :message="form.errors.price"
                                            v-if="form.errors.price"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="strike_price"
                                            class="form-label"
                                            >Harga Coret</label
                                        >
                                        <CurrencyInput
                                            id="strike_price"
                                            v-model="form.strike_price"
                                            :options="{ currency: 'IDR' }"
                                        />
                                        <FormText
                                            :id="'strike_price'"
                                            :message="form.errors.strike_price"
                                            v-if="form.errors.strike_price"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="stock" class="form-label"
                                            >Stock</label
                                        >
                                        <input
                                            class="form-control"
                                            id="stock"
                                            v-model="form.stock"
                                        />
                                        <FormText
                                            :id="'stock'"
                                            :message="form.errors.stock"
                                            v-if="form.errors.stock"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="weight" class="form-label"
                                            >Berat (gr)</label
                                        >
                                        <input
                                            class="form-control"
                                            id="weight"
                                            v-model="form.weight"
                                        />
                                        <FormText
                                            :id="'weight'"
                                            :message="form.errors.weight"
                                            v-if="form.errors.weight"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="condition"
                                            class="form-label"
                                            >Kondisi</label
                                        >
                                        <select
                                            class="form-control mb-3"
                                            v-model="form.condition"
                                            id=""
                                        >
                                            <option
                                                :value="i"
                                                v-for="(productCondition, i) in product_conditions"
                                                :key="i"
                                            >
                                                {{ productCondition }}
                                            </option>
                                        </select>
                                        <FormText
                                            :id="'condition'"
                                            :message="form.errors.condition"
                                            v-if="form.errors.condition"
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
import SpinnerProcessing from "../../../Shared/Form/SpinnerProcessing.vue";
import FormText from "../../../Shared/Form/FormText.vue";
import { slugify } from "../../../utils";
import CurrencyInput from "../../../Shared/Form/CurrencyInput.vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
    components: {
        Layout,
        Link,
        SpinnerProcessing,
        FormText,
        CurrencyInput,
        QuillEditor,
    },
    props: {
        errors: Object,
        categories: Array,
        product_conditions: Array
    },
    setup() {
        const form = useForm({
            meta_title: "",
            meta_description: "",
            meta_keyword: "",
            name: "",
            slug: "",
            price: 0,
            strike_price: 0,
            description: "",
            stock: 0,
            weight: 0,
            condition: "",
            category_id: "",
            is_featured: 1
        });

        function changeName() {
            form.slug = slugify(form.name);
        }

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.products.store"));
        }

        return {
            form,
            changeName,
            submit,
        };
    },
};
</script>
