<script setup>
import { Head, Link, useForm } from "@inertiajs/inertia-vue3";
// import JetAuthenticationCard from "@/Jetstream/AuthenticationCard.vue";
// import JetAuthenticationCardLogo from "@/Jetstream/AuthenticationCardLogo.vue";
// import JetButton from "@/Jetstream/Button.vue";
// import JetInput from "@/Jetstream/Input.vue";
// import JetCheckbox from "@/Jetstream/Checkbox.vue";
// import JetLabel from "@/Jetstream/Label.vue";
// import JetValidationErrors from "@/Jetstream/ValidationErrors.vue";

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
                                <span>Name</span>
                                <label for="name"
                                    ><i class="lni lni-user"></i
                                ></label>
                                <input
                                    class="form-control"
                                    id="name"
                                    type="text"
                                    placeholder="Alex"
                                    v-model="form.name"
                                    name="name"
                                />
                            </div>
                            <div class="form-group text-start mb-4">
                                <span>Email</span>
                                <label for="email"
                                    ><i class="lni lni-user"></i
                                ></label>
                                <input
                                    class="form-control"
                                    id="email"
                                    type="email"
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
                            <div class="form-group text-start mb-4">
                                <span>Password Confirmation</span>
                                <label for="password_confirmation"
                                    ><i class="lni lni-lock"></i
                                ></label>
                                <input
                                    class="form-control"
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
                                <label class="form-check-label" for="terms">
                                    I agree to the
                                    <a
                                        target="_blank"
                                        :href="route('terms.show')"
                                        class="text-decoration-none"
                                        >Terms of Service</a
                                    >
                                    and
                                    <a
                                        target="_blank"
                                        :href="route('policy.show')"
                                        class="text-decoration-none"
                                        >Privacy Policy</a
                                    >
                                </label>
                            </div>
                            <button
                                class="btn btn-warning btn-lg w-100 text-white"
                                type="submit"
                                style="
                                    background: rgb(192, 210, 118) !important;
                                "
                            >
                                Register
                            </button>
                        </form>
                    </div>
                    <div class="login-meta-data">
                        <Link
                            :href="route('login')"
                            class="forgot-password d-block mt-3 mb-1 text-white"
                        >
                            Already registered?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <Head title="Register" />

    <JetAuthenticationCard>
        <template #logo>
            <JetAuthenticationCardLogo />
        </template>

        <JetValidationErrors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <JetLabel for="name" value="Name" />
                <JetInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    required
                    autofocus
                    autocomplete="name"
                />
            </div>

            <div class="mt-4">
                <JetLabel for="email" value="Email" />
                <JetInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    required
                />
            </div>

            <div class="mt-4">
                <JetLabel for="password" value="Password" />
                <JetInput
                    id="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
            </div>

            <div class="mt-4">
                <JetLabel
                    for="password_confirmation"
                    value="Confirm Password"
                />
                <JetInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
            </div>

            <div
                v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature"
                class="mt-4"
            >
                <JetLabel for="terms">
                    <div class="flex items-center">
                        <JetCheckbox
                            id="terms"
                            v-model:checked="form.terms"
                            name="terms"
                        />

                        <div class="ml-2">
                            I agree to the
                            <a
                                target="_blank"
                                :href="route('terms.show')"
                                class="underline text-sm text-gray-600 hover:text-gray-900"
                                >Terms of Service</a
                            >
                            and
                            <a
                                target="_blank"
                                :href="route('policy.show')"
                                class="underline text-sm text-gray-600 hover:text-gray-900"
                                >Privacy Policy</a
                            >
                        </div>
                    </div>
                </JetLabel>
            </div>

            <div class="flex items-center justify-end mt-4">
                <Link
                    :href="route('login')"
                    class="underline text-sm text-gray-600 hover:text-gray-900"
                >
                    Already registered?
                </Link>

                <JetButton
                    class="ml-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Register
                </JetButton>
            </div>
        </form>
    </JetAuthenticationCard> -->
</template>
