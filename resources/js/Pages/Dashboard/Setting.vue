<template>
    <Layout
        :title="'Pengaturan'"
        :typeButton="'back'"
        :href="route('admin.dashboard')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="owner" class="form-label"
                                            >Owner</label
                                        >
                                        <input
                                            class="form-control"
                                            id="owner"
                                            v-model="form.owner"
                                        />
                                        <FormText
                                            :id="'owner'"
                                            :message="form.errors.owner"
                                            v-if="form.errors.owner"
                                        />
                                    </div>
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
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="email" class="form-label"
                                            >Email</label
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
                                            >No HP</label
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
                                <div class="col-lg-4 mb-3">
                                    <div class="mb-3">
                                        <label for="facebook" class="form-label"
                                            >Facebook</label
                                        >
                                        <input
                                            class="form-control"
                                            id="facebook"
                                            v-model="form.facebook"
                                        />
                                        <FormText
                                            :id="'facebook'"
                                            :message="form.errors.facebook"
                                            v-if="form.errors.facebook"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="mb-3">
                                        <label for="ig" class="form-label"
                                            >Instagram</label
                                        >
                                        <input
                                            class="form-control"
                                            id="ig"
                                            v-model="form.ig"
                                        />
                                        <FormText
                                            :id="'ig'"
                                            :message="form.errors.ig"
                                            v-if="form.errors.ig"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-4 mb-3">
                                    <div class="mb-3">
                                        <label for="tiktok" class="form-label"
                                            >Tiktok</label
                                        >
                                        <input
                                            class="form-control"
                                            id="tiktok"
                                            v-model="form.tiktok"
                                        />
                                        <FormText
                                            :id="'tiktok'"
                                            :message="form.errors.tiktok"
                                            v-if="form.errors.tiktok"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label for="about_us" class="form-label"
                                            >Tentang Kami</label
                                        >

                                        <QuillEditor
                                            theme="snow"
                                            v-model:content="form.about_us"
                                            contentType="html"
                                            style="height: 100px"
                                        />
                                        <FormText
                                            :id="'about_us'"
                                            :message="form.errors.about_us"
                                            v-if="form.errors.about_us"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-12 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="privacy_policy"
                                            class="form-label"
                                            >Kebijakan Privasi</label
                                        >

                                        <QuillEditor
                                            theme="snow"
                                            v-model:content="
                                                form.privacy_policy
                                            "
                                            contentType="html"
                                            style="height: 100px"
                                        />
                                        <FormText
                                            :id="'privacy_policy'"
                                            :message="
                                                form.errors.privacy_policy
                                            "
                                            v-if="form.errors.privacy_policy"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label for="logo" class="form-label"
                                            >Logo</label
                                        >
                                        <crop
                                            field="img"
                                            :langType="'en'"
                                            @crop-success="cropLogoSuccess"
                                            :width="100"
                                            :height="100"
                                            v-model="showLogoCroper"
                                        >
                                        </crop>
                                        <div class="mb-3">
                                            <img
                                                class="img rounded fluid"
                                                alt=""
                                                :src="logo"
                                                style="width: 100px"
                                            />
                                        </div>
                                        <a
                                            @click="showLogoCroper = true"
                                            class="btn btn-success btn-sm rounded-custom"
                                            :disabled="form.processing"
                                        >
                                            <span
                                                ><i
                                                    class="fas fa-upload me-2"
                                                ></i
                                                >Pilih</span
                                            >
                                        </a>
                                        <FormText
                                            :id="'logo'"
                                            :message="form.errors.logo"
                                            v-if="form.errors.logo"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_mailer"
                                            class="form-label"
                                            >Protokol Mail Server</label
                                        >
                                        <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            v-model="form.mail_mailer"
                                        >
                                            <option value="">Pilih</option>
                                            <option value="smtp">SMTP</option>
                                            <option value="imap">IMAP</option>
                                            <option value="pop3">POP3</option>
                                        </select>
                                        <FormText
                                            :id="'mail_mailer'"
                                            :message="form.errors.mail_mailer"
                                            v-if="form.errors.mail_mailer"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_host"
                                            class="form-label"
                                            >Host</label
                                        >
                                        <input
                                            class="form-control"
                                            id="mail_host"
                                            v-model="form.mail_host"
                                        />
                                        <FormText
                                            :id="'mail_host'"
                                            :message="form.errors.mail_host"
                                            v-if="form.errors.mail_host"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_port"
                                            class="form-label"
                                            >Port</label
                                        >
                                        <input
                                            class="form-control"
                                            id="mail_port"
                                            v-model="form.mail_port"
                                        />
                                        <FormText
                                            :id="'mail_port'"
                                            :message="form.errors.mail_port"
                                            v-if="form.errors.mail_port"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_username"
                                            class="form-label"
                                            >Username</label
                                        >
                                        <input
                                            class="form-control"
                                            id="mail_username"
                                            v-model="form.mail_username"
                                        />
                                        <FormText
                                            :id="'mail_username'"
                                            :message="form.errors.mail_username"
                                            v-if="form.errors.mail_username"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_password"
                                            class="form-label"
                                            >Password</label
                                        >
                                        <input
                                            class="form-control"
                                            id="mail_password"
                                            v-model="form.mail_password"
                                        />
                                        <FormText
                                            :id="'mail_password'"
                                            :message="form.errors.mail_password"
                                            v-if="form.errors.mail_password"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_encryption"
                                            class="form-label"
                                            >Encryption</label
                                        >
                                        <select
                                            class="form-select"
                                            aria-label="Default select example"
                                            v-model="form.mail_encryption"
                                        >
                                            <option value="">Pilih</option>
                                            <option value="ssl">SSL</option>
                                            <option value="tls">TLS</option>
                                        </select>
                                        <FormText
                                            :id="'mail_encryption'"
                                            :message="
                                                form.errors.mail_encryption
                                            "
                                            v-if="form.errors.mail_encryption"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_from_address"
                                            class="form-label"
                                            >Mail From Address</label
                                        >
                                        <input
                                            class="form-control"
                                            id="mail_from_address"
                                            v-model="form.mail_from_address"
                                        />
                                        <FormText
                                            :id="'mail_from_address'"
                                            :message="
                                                form.errors.mail_from_address
                                            "
                                            v-if="form.errors.mail_from_address"
                                        />
                                    </div>
                                </div>
                                <div class="col-lg-6 mb-3">
                                    <div class="mb-3">
                                        <label
                                            for="mail_from_name"
                                            class="form-label"
                                            >Mail From Name</label
                                        >
                                        <input
                                            class="form-control"
                                            id="mail_from_name"
                                            v-model="form.mail_from_name"
                                        />
                                        <FormText
                                            :id="'mail_from_name'"
                                            :message="
                                                form.errors.mail_from_name
                                            "
                                            v-if="form.errors.mail_from_name"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="row">
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
import Layout from "../../Layouts/Dashboard/App.vue";
import { Link } from "@inertiajs/inertia-vue3";
import { useForm } from "@inertiajs/inertia-vue3";
import SpinnerProcessing from "../../Shared/Form/SpinnerProcessing.vue";
import FormText from "../../Shared/Form/FormText.vue";
import { ref } from "@vue/reactivity";
import { imageReader, dataURLtoFile } from "../../utils.js";
import Cropper from "vue-image-crop-upload";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

export default {
    components: {
        Layout,
        Link,
        SpinnerProcessing,
        FormText,
        crop: Cropper,
        QuillEditor,
    },
    props: {
        errors: Object,
        result: Object,
    },
    setup(props) {
        const form = useForm({
            owner: props.result?.owner ?? "",
            meta_title: props.result?.meta_title ?? "",
            meta_description: props.result?.meta_description ?? "",
            meta_keyword: props.result?.meta_keyword ?? "",
            facebook: props.result?.facebook ?? "",
            ig: props.result?.ig ?? "",
            tiktok: props.result?.tiktok ?? "",
            email: props.result?.email ?? "",
            phone: props.result?.phone ?? "",
            about_us: props.result?.about_us ?? "",
            privacy_policy: props.result?.privacy_policy ?? "",
            logo: "",
            mail_mailer: props.result?.mail_mailer ?? "smtp",
            mail_host: props.result?.mail_host ?? "",
            mail_port: props.result?.mail_port ?? "",
            mail_username: props.result?.mail_username ?? "",
            mail_password: props.result?.mail_password ?? "",
            mail_encryption: props.result?.mail_encryption ?? "",
            mail_from_address: props.result?.mail_from_address ?? "",
            mail_from_name: props.result?.mail_from_name ?? "",
        });
        const logo = ref(props.result?.logo_url ?? "");
        const showLogoCroper = ref(false);

        function submit() {
            form.transform((data) => ({
                ...data,
            })).post(route("admin.settings.store"));
        }

        function cropLogoSuccess(imgDataUrl, field) {
            form.logo = dataURLtoFile(imgDataUrl);
            logo.value = imgDataUrl;
        }

        return {
            form,
            submit,
            logo,
            showLogoCroper,
            cropLogoSuccess,
        };
    },
};
</script>
