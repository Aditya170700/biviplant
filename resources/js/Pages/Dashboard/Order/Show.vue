<template>
    <Layout
        :title="'Detail Pengguna'"
        :typeButton="'back'"
        :href="route('admin.users.index')"
    >
        <div class="row">
            <div class="col-md-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <div class="row mt-3">
                            <div class="col-lg-2">Nama</div>
                            <div class="col-lg-10">: {{ result.name }}</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Role</div>
                            <div class="col-lg-10">: {{ result.role }}</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">E-Mail</div>
                            <div class="col-lg-10">: {{ result.email }}</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">No Telepon</div>
                            <div class="col-lg-10">: {{ result.phone }}</div>
                        </div>
                        <div class="row mt-3">
                            <div class="col-lg-2">Foto Profil</div>
                            <div class="col-lg-10">
                                <img
                                    :src="result.profile_photo_path_url"
                                    alt=""
                                    style="width: 200px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
import Layout from "../../../Layouts/Dashboard/App.vue";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: { Layout, Link },
    props: {
        errors: Object,
        result: Object,
    },
};
</script>
