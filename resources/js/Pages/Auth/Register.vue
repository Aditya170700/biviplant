<script setup>
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../Shared/Form/SpinnerProcessing";
import FormText from "../../Shared/Form/FormText";

const form = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms: false,
});

const submit = () => {
    form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation"),
    });
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
                            <div class="form-group text-start mb-4">
                                <span class="text-dark">Name</span>
                                <input
                                    class="form-control rounded"
                                    id="name"
                                    type="text"
                                    placeholder="Alex"
                                    v-model="form.name"
                                    name="name"
                                />
                                <FormText
                                    :id="'name'"
                                    :message="form.errors.name"
                                    v-if="form.errors.name"
                                />
                            </div>
                            <div class="form-group text-start mb-4">
                                <span class="text-dark">Email</span>
                                <input
                                    class="form-control rounded"
                                    id="email"
                                    type="email"
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
                            <div class="form-group text-start mb-4">
                                <span class="text-dark"
                                    >Password Confirmation</span
                                >
                                <input
                                    class="form-control rounded"
                                    id="password_confirmation"
                                    type="password"
                                    placeholder="Password Confirmation"
                                    v-model="form.password_confirmation"
                                    name="password_confirmation"
                                />
                            </div>
                            <div class="form-check text-start text-white mb-5">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="terms"
                                    v-model="form.terms"
                                    name="terms"
                                />
                                <label
                                    class="form-check-label text-dark"
                                    for="terms"
                                >
                                    I agree to the
                                    <a
                                        target="_blank"
                                        :href="route('terms.show')"
                                        class="text-decoration-none text-dark"
                                        >Terms of Service</a
                                    >
                                    and
                                    <a
                                        target="_blank"
                                        :href="route('policy.show')"
                                        class="text-decoration-none text-dark"
                                        >Privacy Policy</a
                                    >
                                </label>
                                <FormText
                                    :id="'terms'"
                                    :message="form.errors.terms"
                                    v-if="form.errors.terms"
                                />
                            </div>
                            <button
                                class="btn btn-warning btn-lg w-100 text-white"
                                type="submit"
                                style="background: rgb(80, 208, 72) !important"
                            >
                                <div class="d-flex justify-content-center">
                                    <SpinnerProcessing v-if="form.processing" />
                                    Register
                                </div>
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
