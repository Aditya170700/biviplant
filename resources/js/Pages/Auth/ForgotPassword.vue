<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";

defineProps({
    status: String,
});

const form = useForm({
    email: "",
});

const submit = () => {
    form.post(route("password.email"));
};
</script>

<template>
    <div
        class="login-wrapper d-flex align-items-center justify-content-center text-center"
        style="background: white !important"
    >
        <div
            class="background-shape"
            style="background: rgb(80, 208, 72) !important"
        ></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                    <div class="d-flex justify-content-center">
                        <Link :href="route('homepage')">
                            <img
                                class="big-logo"
                                src="/img/core-img/logo-white.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div class="mt-5 px-4">
                        <form @submit.prevent="submit">
                            <div class="form-group text-start mb-5">
                                <span class="text-dark">Email</span>
                                <input
                                    class="form-control rounded"
                                    id="email"
                                    type="text"
                                    placeholder="info@example.com"
                                    v-model="form.email"
                                    name="email"
                                    required
                                    autofocus
                                />
                            </div>
                            <button
                                class="btn btn-warning btn-lg w-100 text-white"
                                type="submit"
                                style="background: rgb(80, 208, 72) !important"
                            >
                                Email Password Reset Link
                            </button>
                        </form>
                    </div>
                    <div class="login-meta-data">
                        <Link
                            :href="route('login')"
                            class="forgot-password d-block mt-3 mb-1 text-dark"
                        >
                            Already registered?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
