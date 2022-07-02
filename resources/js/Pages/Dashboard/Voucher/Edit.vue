<template>
    <Layout
        :title="'Ubah Voucher'"
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
                                            :message="errors.code"
                                            v-if="errors.code"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="desc" class="form-label"
                                            >Deskripsi</label
                                        >
                                        <input
                                            class="form-control"
                                            id="desc"
                                            v-model="form.desc"
                                        />
                                        <FormText
                                            :id="'desc'"
                                            :message="form.errors.desc"
                                            v-if="errors.desc"
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
                                            :message="errors.limit"
                                            v-if="errors.limit"
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
                                        <Datepicker 
                                            v-model="form.expired_at"
                                            id="expired_at"
                                        >
                                        </Datepicker>
                                        <FormText
                                            :id="'expired_at'"
                                            :message="errors.expired_at"
                                            v-if="errors.expired_at"
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
                                            :message="errors.min_order"
                                            v-if="errors.min_order"
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
                                            :message="errors.discount"
                                            v-if="errors.discount"
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
                                            :message="errors.max_discount"
                                            v-if="errors.max_discount"
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
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import moment from 'moment';

export default {
    components: { Layout, Link, SpinnerProcessing, FormText, Datepicker },
    props: {
        errors: Object,
        result: Object,
    },
    setup(props) {
        const form = useForm(props.result);
        form.expired_at = moment(form.expired_at)
        function submit() {
            form.expired_at = moment(new Date(form.expired_at)).format('YYYY-MM-DD HH:mm');
            let data = form.data();
            Inertia.post(
                route("admin.vouchers.update", {
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
