<template>
    <Layout
        :title="'Tambah Pengguna'"
        :typeButton="'back'"
        :href="route('admin.users.index')"
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
                                        />
                                        <FormText
                                            :id="'name'"
                                            :message="form.errors.name"
                                            v-if="form.errors.name"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <label for="role" class="form-label"
                                        >Role</label
                                    >
                                    <select
                                        class="form-control mb-3"
                                        v-model="form.role"
                                        id="role"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="customer">
                                            Customer
                                        </option>
                                    </select>
                                    <FormText
                                        :id="'role'"
                                        :message="form.errors.role"
                                        v-if="form.errors.role"
                                    />
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="email" class="form-label"
                                            >E-Mail</label
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
                                            >No Telepon</label
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
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="password" class="form-label"
                                            >Password</label
                                        >
                                        <input
                                            class="form-control"
                                            id="password"
                                            v-model="form.password"
                                        />
                                        <FormText
                                            :id="'password'"
                                            :message="form.errors.password"
                                            v-if="form.errors.password"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="password_confirmation"
                                            class="form-label"
                                            >Konfirmasi Password</label
                                        >
                                        <input
                                            class="form-control"
                                            id="password_confirmation"
                                            v-model="form.password_confirmation"
                                        />
                                        <FormText
                                            :id="'password_confirmation'"
                                            :message="
                                                form.errors
                                                    .password_confirmation
                                            "
                                            v-if="
                                                form.errors
                                                    .password_confirmation
                                            "
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="photo" class="form-label"
                                            >Foto Profil</label
                                        >
                                        <input
                                            type="file"
                                            class="form-control"
                                            id="photo"
                                            @input="
                                                form.photo =
                                                    $event.target.files[0]
                                            "
                                        />
                                        <FormText
                                            :id="'photo'"
                                            :message="form.errors.photo"
                                            v-if="form.errors.photo"
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
            role: "",
            email: "",
            phone: "",
            password: "",
            password_confirmation: "",
            photo: "",
        });

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.users.store"));
        }

        return {
            form,
            submit,
        };
    },
};
</script>
