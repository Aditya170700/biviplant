<template>
    <div id="sidebar" :class="sidebar">
        <div class="sidebar-wrapper active" style="z-index: 99999 !important">
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
                        <a
                            href="#"
                            @click="setSidebar"
                            class="sidebar-hide d-xl-none d-block"
                            ><i class="fas fa-xmark"></i
                        ></a>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul class="menu">
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.dashboard')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.dashboard')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-dashboard"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li class="sidebar-title">Data Master</li>

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
                            <span>Kategori</span>
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
                            <i class="fas fa-images"></i>
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
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.events.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.events.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-calendar"></i>
                            <span>Event</span>
                        </Link>
                    </li>
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.vouchers.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.vouchers.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-money-bill"></i>
                            <span>Voucher</span>
                        </Link>
                    </li>
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.products.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.products.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-cubes"></i>
                            <span>Produk</span>
                        </Link>
                    </li>
                    <li class="sidebar-title">Lainnya</li>

                    <li class="sidebar-item">
                        <a
                            href="#"
                            class="sidebar-link"
                            @click.prevent="logout"
                        >
                            <i class="fas fa-power-off"></i>
                            <span>Keluar</span>
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
import { ref, toRef } from "@vue/reactivity";

export default {
    components: {
        Link,
    },
    props: {
        sidebar: String,
    },
    setup(props, { emit }) {
        const logout = () => {
            Inertia.post(route("logout"));
        };

        const setSidebar = () => {
            emit("changeSidebar", "");
            sidebar.value = "";
            console.log(sidebar.value);
        };

        return {
            logout,
            setSidebar,
        };
    },
};
</script>

<style lang="scss" scoped>
#sidebar {
    &.active {
        .sidebar-wrapper {
            margin-left: 0 !important;
        }
    }
    &:not(.active) {
        .sidebar-wrapper {
            margin-left: -300px;
        }
        & ~ #main {
            margin-left: 0;
        }
    }
}
@media screen and (max-width: 1199px) {
    .sidebar-wrapper {
        position: absolute;
        margin-left: -300px !important;
        .sidebar-toggler.x {
            display: block;
        }
    }
}
@media screen and (min-width: 1199px) {
    .sidebar-wrapper {
        margin-left: 0 !important;
    }
}
</style>
