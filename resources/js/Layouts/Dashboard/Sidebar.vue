<template>
    <div id="sidebar" class="active">
        <div class="sidebar-wrapper active">
            <div class="sidebar-header position-relative">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <a href="index.html"
                            ><img
                                src="/assets/images/logo/logo.svg"
                                alt="Logo"
                                srcset=""
                        /></a>
                    </div>
                    <div
                        class="theme-toggle d-flex gap-2 align-items-center mt-2"
                    >
                        <i
                            class="fas fa-sun me-2"
                            style="font-size: 20px !important"
                        ></i>
                        <div class="form-check form-switch fs-6">
                            <input
                                class="form-check-input me-0"
                                type="checkbox"
                                id="toggle-dark"
                            />
                            <label class="form-check-label"></label>
                        </div>
                        <i
                            class="fas fa-moon"
                            style="font-size: 20px !important"
                        ></i>
                    </div>
                    <div class="sidebar-toggler x">
                        <a href="#" class="sidebar-hide d-xl-none d-block"
                            ><i class="fas fa-xmark"></i
                        ></a>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <li class="sidebar-title">Master Data</li>

                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.categories.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.categories.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-boxes"></i>
                            <span>Category</span>
                        </Link>
                    </li>
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.banners.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.banners.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-boxes"></i>
                            <span>Banner</span>
                        </Link>
                    </li>
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.users.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.users.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-users"></i>
                            <span>Pengguna</span>
                        </Link>
                    </li>
                    <li class="sidebar-title">Other</li>

                    <li class="sidebar-item">
                        <a
                            href="#"
                            class="sidebar-link"
                            @click.prevent="logout"
                        >
                            <i class="fas fa-power-off"></i>
                            <span>Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/inertia-vue3";

export default {
    components: {
        Link,
    },
    setup() {
        const logout = () => {
            Inertia.post(route("logout"));
        };

        return {
            logout,
        };
    },
};
</script>
