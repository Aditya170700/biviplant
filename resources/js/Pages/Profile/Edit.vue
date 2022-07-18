<script setup>
import { Link, useForm } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";
import { Inertia } from "@inertiajs/inertia";
import { imageReader, dataURLtoFile } from "./../../utils.js";
import SpinnerProcessing from "../../Shared/Form/SpinnerProcessing";
import FormText from "../../Shared/Form/FormText";
import Cropper from "vue-image-crop-upload";

let attrs = useAttrs();

let form = useForm({
    id: attrs.user.id,
    name: attrs.user.name,
    email: attrs.user.email,
    role: attrs.user.role,
    phone: attrs.user.phone,
    password: "",
    password_confirmation: "",
    profile_photo_path: "",
});

const profile_photo_path = ref(attrs.user.profile_photo_path_url ?? "");
const showCroper = ref(false);

function uploadFile() {
    showCroper.value = true;
    let wrap = document.querySelector(".vicp-wrap");
    wrap.style.width = "80%";
}

function submit() {
    let data = form.data();
    Inertia.post(route("profile.update"), {
        _method: "put",
        ...data,
    });
}

function cropSuccess(imgDataUrl, field) {
    form.profile_photo_path = dataURLtoFile(imgDataUrl);
    profile_photo_path.value = imgDataUrl;
}

function srcFileSet(fileName, fileType, fileSize) {
    setTimeout(() => {
        let preview = document.querySelector(".vicp-preview");
        preview.classList.add("d-none");
    }, 500);
}
</script>

<template>
    <div>
        <Head>
            <title>{{ attrs.metaTitle }}</title>
            <meta
                head-key="description"
                name="description"
                :content="attrs.metaDescription"
            />
            <meta
                head-key="keyword"
                name="keyword"
                :content="attrs.metaKeyword"
            />
        </Head>
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="page-content-wrapper">
            <form @submit.prevent="submit">
                <div class="container">
                    <div class="profile-wrapper-area py-3">
                        <div class="card user-info-card">
                            <div
                                class="card-body p-4 d-flex align-items-center"
                            >
                                <div class="user-profile me-3">
                                    <img
                                        :src="profile_photo_path"
                                        :alt="form.name"
                                    />
                                    <FormText
                                        :id="'name'"
                                        :message="
                                            attrs.errors.profile_photo_path
                                        "
                                        v-if="attrs.errors.profile_photo_path"
                                    />
                                    <div class="change-user-thumb">
                                        <Cropper
                                            field="img"
                                            :langType="'en'"
                                            @crop-success="cropSuccess"
                                            @srcFileSet="srcFileSet"
                                            :width="200"
                                            :height="200"
                                            v-model="showCroper"
                                        >
                                        </Cropper>
                                        <a
                                            @click="uploadFile"
                                            :disabled="form.processing"
                                        >
                                            <i class="lni lni-pencil"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="user-info">
                                    <p class="mb-0 text-dark">
                                        {{ form.role }}
                                    </p>
                                    <h5 class="mb-0">{{ form.name }}</h5>
                                </div>
                            </div>
                        </div>
                        <div
                            class="card user-data-card"
                            style="z-index: 0 !important"
                        >
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div class="title mb-2">
                                                <i class="lni lni-user"></i
                                                ><span>Nama Lengkap</span>
                                            </div>
                                            <input
                                                class="form-control"
                                                type="text"
                                                v-model="form.name"
                                            />
                                            <FormText
                                                :id="'name'"
                                                :message="attrs.errors.name"
                                                v-if="attrs.errors.name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div class="title mb-2">
                                                <i class="lni lni-phone"></i
                                                ><span>No Telepon</span>
                                            </div>
                                            <input
                                                class="form-control"
                                                type="text"
                                                v-model="form.phone"
                                            />
                                            <FormText
                                                :id="'phone'"
                                                :message="attrs.errors.phone"
                                                v-if="attrs.errors.phone"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div class="title mb-2">
                                                <i class="lni lni-envelope"></i
                                                ><span>Alamat Email</span>
                                            </div>
                                            <input
                                                class="form-control"
                                                type="email"
                                                v-model="form.email"
                                            />
                                            <FormText
                                                :id="'email'"
                                                :message="attrs.errors.email"
                                                v-if="attrs.errors.email"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div class="title mb-2">
                                                <i class="lni lni-lock"></i
                                                ><span>Password</span>
                                            </div>
                                            <input
                                                class="form-control"
                                                type="password"
                                                v-model="form.password"
                                            />
                                            <FormText
                                                :id="'password'"
                                                :message="attrs.errors.password"
                                                v-if="attrs.errors.password"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="mb-3">
                                            <div class="title mb-2">
                                                <i class="lni lni-lock"></i
                                                ><span
                                                    >Konfirmasi Password</span
                                                >
                                            </div>
                                            <input
                                                class="form-control"
                                                type="password"
                                                v-model="
                                                    form.password_confirmation
                                                "
                                            />
                                        </div>
                                    </div>
                                    <div class="col-6 d-grid">
                                        <button class="btn btn-success">
                                            <div
                                                class="d-flex justify-content-center align-items-center"
                                            >
                                                <SpinnerProcessing
                                                    :color="'text-white'"
                                                    :size="'sm'"
                                                    :me="'me-2'"
                                                    v-if="form.processing"
                                                />
                                                <span>Simpan</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div class="col-6 d-grid">
                                        <Link
                                            :href="route('profile.index')"
                                            class="btn btn-secondary"
                                        >
                                            Batal
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
