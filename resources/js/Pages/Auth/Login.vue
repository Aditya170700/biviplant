<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";

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
        onFinish: () => form.reset("password"),
    });
};
</script>

<template>
    <div
        class="login-wrapper d-flex align-items-center justify-content-center text-center"
        style="background: rgb(163, 228, 153) !important"
    >
        <div
            class="background-shape"
            style="background: rgb(80, 208, 72) !important"
        ></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
                    <img
                        class="big-logo"
                        src="/img/core-img/logo-white.png"
                        alt=""
                    />
                    <div class="register-form mt-5 px-4">
                        <form @submit.prevent="submit">
                            <div class="form-group text-start mb-4">
                                <span>Email</span>
                                <label for="email"
                                    ><i class="lni lni-user"></i
                                ></label>
                                <input
                                    class="form-control"
                                    id="email"
                                    type="text"
                                    placeholder="info@example.com"
                                    v-model="form.email"
                                    name="email"
                                />
                            </div>
                            <div class="form-group text-start mb-4">
                                <span>Password</span>
                                <label for="password"
                                    ><i class="lni lni-lock"></i
                                ></label>
                                <input
                                    class="form-control"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    v-model="form.password"
                                    name="password"
                                />
                            </div>
                            <div class="form-check text-start text-white mb-5">
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
                                style="
                                    background: rgb(192, 210, 118) !important;
                                "
                            >
                                Log In
                            </button>
                        </form>
                    </div>
                    <div class="login-meta-data">
                        <Link
                            v-if="canResetPassword"
                            :href="route('password.request')"
                            class="forgot-password d-block mt-3 mb-1 text-white"
                        >
                            Forgot password?
                        </Link>
                        <p class="mb-0">
                            Didn't have an account?<Link
                                class="ms-1"
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
