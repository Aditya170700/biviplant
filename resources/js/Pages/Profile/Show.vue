<script setup>
import { Link } from "@inertiajs/inertia-vue3";
import Header from "./../../Shared/Homepage/Header.vue";
import Sidebar from "./../../Shared/Homepage/Sidebar.vue";
import Footer from "./../../Shared/Footer.vue";
import { Head } from "@inertiajs/inertia-vue3";
import { reactive, ref } from "@vue/reactivity";
import { onMounted, useAttrs } from "@vue/runtime-core";

let attrs = useAttrs();
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
            <div class="container">
                <div class="profile-wrapper-area py-3">
                    <div class="card user-info-card">
                        <div class="card-body p-4 d-flex align-items-center">
                            <div class="user-profile me-3">
                                <img
                                    :src="attrs.user.profile_photo_path_url"
                                    :alt="attrs.user.name"
                                />
                            </div>
                            <div class="user-info">
                                <p class="mb-0 text-uppercase">
                                    {{ attrs.user.role }}
                                </p>
                                <h5 class="mb-0">{{ attrs.user.name }}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="card user-data-card">
                        <div class="card-body">
                            <div
                                class="single-profile-data d-flex align-items-center justify-content-between"
                            >
                                <div class="title d-flex align-items-center">
                                    <i class="lni lni-user"></i
                                    ><span>Nama Lengkap</span>
                                </div>
                                <div class="data-content">
                                    {{ attrs.user.name }}
                                </div>
                            </div>
                            <div
                                class="single-profile-data d-flex align-items-center justify-content-between"
                            >
                                <div class="title d-flex align-items-center">
                                    <i class="lni lni-phone"></i
                                    ><span>No Telepon</span>
                                </div>
                                <div class="data-content">
                                    {{ attrs.user.phone }}
                                </div>
                            </div>
                            <div
                                class="single-profile-data d-flex align-items-center justify-content-between"
                            >
                                <div class="title d-flex align-items-center">
                                    <i class="lni lni-envelope"></i
                                    ><span>Alamat Email</span>
                                </div>
                                <div class="data-content">
                                    {{ attrs.user.email }}
                                </div>
                            </div>
                            <div class="edit-profile-btn mt-3">
                                <Link
                                    class="btn btn-info w-100"
                                    :href="route('profile.edit')"
                                    ><i class="lni lni-pencil me-2"></i
                                    >Ubah</Link
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="internet-connection-status" id="internetStatus"></div>
        <Footer></Footer>
    </div>
</template>
