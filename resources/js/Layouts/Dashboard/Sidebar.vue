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
                    <!-- DASHBOARD -->
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

                    <!-- CHAT -->
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.chat')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.chat.index')"
                            class="sidebar-link"
                        >
                            <i class="fa fa-paper-plane"></i>
                            <span>Chat</span>
                        </Link>
                    </li>

                    <!-- DATA MASTER -->
                    <li
                        :class="[
                            'sidebar-item',
                            'has-sub',
                            route().current().includes('admin.categories') ||
                            route().current().includes('admin.banners') ||
                            route().current().includes('admin.users') ||
                            route().current().includes('admin.events') ||
                            route().current().includes('admin.origins') ||
                            route().current().includes('admin.vouchers')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <a
                            href="#"
                            class="sidebar-link"
                            @click="menuColapse($event)"
                        >
                            <i class="fas fa-book"></i>
                            <span>Data Master</span>
                        </a>
                        <ul
                            :class="[
                                'submenu',
                                'has-sub',
                                route().current().includes('admin')
                                    ? 'active'
                                    : '',
                            ]"
                        >
                            <li
                                :class="[
                                    'submenu-item',
                                    route()
                                        .current()
                                        .includes('admin.categories.')
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                <Link
                                    :href="route('admin.categories.index')"
                                    class="sidebar-link"
                                >
                                    <i class="fas fa-o"></i>
                                    <span>Kategori</span>
                                </Link>
                            </li>
                            <li
                                :class="[
                                    'submenu-item',
                                    route().current().includes('admin.banners.')
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                <Link
                                    :href="route('admin.banners.index')"
                                    class="sidebar-link"
                                >
                                    <i class="fas fa-o"></i>
                                    <span>Banner</span>
                                </Link>
                            </li>
                            <li
                                :class="[
                                    'submenu-item',
                                    route().current().includes('admin.users.')
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                <Link
                                    :href="route('admin.users.index')"
                                    class="sidebar-link"
                                >
                                    <i class="fas fa-o"></i>
                                    <span>Pengguna</span>
                                </Link>
                            </li>
                            <li
                                :class="[
                                    'submenu-item',
                                    route().current().includes('admin.events.')
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                <Link
                                    :href="route('admin.events.index')"
                                    class="sidebar-link"
                                >
                                    <i class="fas fa-o"></i>
                                    <span>Event</span>
                                </Link>
                            </li>
                            <li
                                :class="[
                                    'submenu-item',
                                    route()
                                        .current()
                                        .includes('admin.vouchers.')
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                <Link
                                    :href="route('admin.vouchers.index')"
                                    class="sidebar-link"
                                >
                                    <i class="fas fa-o"></i>
                                    <span>Voucher</span>
                                </Link>
                            </li>
                            <li
                                :class="[
                                    'submenu-item',
                                    route()
                                        .current()
                                        .includes('admin.origins.')
                                        ? 'active'
                                        : '',
                                ]"
                            >
                                <Link
                                    :href="route('admin.origins.index')"
                                    class="sidebar-link"
                                >
                                    <i class="fas fa-o"></i>
                                    <span>Suplier</span>
                                </Link>
                            </li>
                        </ul>
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
                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.orders.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.orders.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-cart-shopping"></i>
                            <span>Pesanan</span>
                        </Link>
                    </li>

                    <!-- OTHERS -->

                    <li class="sidebar-title">Lainnya</li>

                    <li
                        :class="[
                            'sidebar-item',
                            route().current().includes('admin.settings.')
                                ? 'active'
                                : '',
                        ]"
                    >
                        <Link
                            :href="route('admin.settings.index')"
                            class="sidebar-link"
                        >
                            <i class="fas fa-cog"></i>
                            <span>Pengaturan</span>
                        </Link>
                    </li>
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
        const colapse = ref(null);
        const logout = () => {
            Inertia.post(route("logout"));
        };

        const menuColapse = (e) => {
            let $parent = e.target.closest(".sidebar-item");
            let $child = $parent.querySelector(".submenu");
            $child.style.display === "none"
                ? ($child.style.display = "block")
                : ($child.style.display = "none");
        };

        const setSidebar = () => {
            emit("changeSidebar", "");
            sidebar.value = "";
            console.log(sidebar.value);
        };

        return {
            logout,
            setSidebar,
            colapse,
            menuColapse,
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
