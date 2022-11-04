<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../Shared/Form/SpinnerProcessing.vue";
import FormText from "../../Shared/Form/FormText.vue";

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: "",
    password: "",
    remember: false,
});

const submit = () => {
    form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : "",
    })).post(route("login"), {
        onFinish: () => {
            form.reset("password");
        },
    });
};
</script>

<template>
    <div
        class="login-wrapper d-flex align-items-center justify-content-center text-center"
        style="background: white !important"
    >
        <Head>
            <title>Login</title>
            <meta
                head-key="description"
                name="description"
                content="Login untuk pengalaman yang menakjubkan"
            />
            <meta head-key="keyword" name="keyword" content="tanaman buah, biviplant" />
        </Head>
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
                            <div class="form-group text-start mb-4">
                                <span class="text-dark">Email</span>
                                <input
                                    class="form-control rounded"
                                    id="email"
                                    type="text"
                                    placeholder="info@example.com"
                                    v-model="form.email"
                                    name="email"
                                />
                                <FormText
                                    :id="'email'"
                                    :message="form.errors.email"
                                    v-if="form.errors.email"
                                />
                            </div>
                            <div class="form-group text-start mb-4">
                                <span class="text-dark">Password</span>
                                <input
                                    class="form-control rounded"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    v-model="form.password"
                                    name="password"
                                />
                                <FormText
                                    :id="'password'"
                                    :message="form.errors.password"
                                    v-if="form.errors.password"
                                />
                            </div>
                            <div class="form-check text-start text-dark mb-5">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="remember"
                                    v-model="form.remember"
                                    name="remember"
                                />
                                <label class="form-check-label" for="remember">
                                    Remember me
                                </label>
                            </div>
                            <button
                                class="btn btn-warning btn-lg w-100 text-white"
                                type="submit"
                                style="background: rgb(80, 208, 72) !important"
                                :disabled="form.processing"
                            >
                                <div class="d-flex justify-content-center">
                                    <SpinnerProcessing v-if="form.processing" />
                                    Log In
                                </div>
                            </button>
                        </form>
                    </div>
                    <div class="login-meta-data">
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="forgot-password d-block mt-3 mb-1 text-dark"
                        >
                            Forgot password?
                        </Link>
                        <p class="mb-0 text-dark">
                            Didn't have an account?<Link
                                class="ms-1 text-dark"
                                :href="route('register')"
                                >Register</Link
                            >
                        </p>
                    </div>
                    <div class="view-as-guest mt-3">
                        <Link class="btn" href="/">View as Guest</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
