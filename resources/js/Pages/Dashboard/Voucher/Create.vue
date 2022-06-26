<template>
    <Layout
        :title="'Tambah Voucher'"
        :typeButton="'back'"
        :href="route('admin.vouchers.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="code" class="form-label"
                                            >Code</label
                                        >
                                        <input
                                            class="form-control"
                                            id="code"
                                            v-model="form.code"
                                        />
                                        <FormText
                                            :id="'code'"
                                            :message="form.errors.code"
                                            v-if="form.errors.code"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="limit"
                                            class="form-label"
                                            >Limit</label
                                        >
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="limit"
                                            v-model="form.limit"
                                        />
                                        <FormText
                                            :id="'limit'"
                                            :message="form.errors.limit"
                                            v-if="form.errors.limit"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="expired_at"
                                            class="form-label"
                                            >Waktu Berakhir</label
                                        >
                                        <input
                                            class="form-control"
                                            id="expired_at"
                                            v-model="form.expired_at"
                                        />
                                        <FormText
                                            :id="'expired_at'"
                                            :message="form.errors.expired_at"
                                            v-if="form.errors.expired_at"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="min_order"
                                            class="form-label"
                                            >Minimal Order</label
                                        >
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="min_order"
                                            v-model="form.min_order"
                                        />
                                        <FormText
                                            :id="'min_order'"
                                            :message="form.errors.min_order"
                                            v-if="form.errors.min_order"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="discount"
                                            class="form-label"
                                            >Diskon</label
                                        >
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="discount"
                                            v-model="form.discount"
                                        />
                                        <FormText
                                            :id="'discount'"
                                            :message="form.errors.discount"
                                            v-if="form.errors.discount"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="max_discount"
                                            class="form-label"
                                            >Maksimal Diskon</label
                                        >
                                        <input
                                            type="number"
                                            class="form-control"
                                            id="max_discount"
                                            v-model="form.max_discount"
                                        />
                                        <FormText
                                            :id="'max_discount'"
                                            :message="form.errors.max_discount"
                                            v-if="form.errors.max_discount"
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

export default {
    components: { Layout, Link, SpinnerProcessing, FormText },
    props: {
        errors: Object,
    },
    setup() {
        const form = useForm({
            code: "",
            limit: "",
            expired_at: "",
            min_order: "",
            discount: "",
            max_discount: "",
        });

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.vouchers.store"));
        }

        return {
            form,
            submit,
        };
    },
};
</script>
