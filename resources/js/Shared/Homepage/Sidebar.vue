<template>
    <div
        class="offcanvas offcanvas-start suha-offcanvas-wrap"
        tabindex="-1"
        id="suhaOffcanvas"
        aria-labelledby="suhaOffcanvasLabel"
        style="background: rgb(80, 208, 72) !important"
    >
        <button
            class="btn-close btn-close-white text-reset"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
        ></button>
        <div class="offcanvas-body">
            <div class="sidenav-profile">
                <div class="user-profile">
                    <img
                        :src="
                            $page.props.user
                                ? $page.props.user.profile_photo_url
                                : 'https://ui-avatars.com/api/?name=Guest&color=50D048&background=C0D276&size=500'
                        "
                        alt=""
                    />
                </div>
                <div class="user-info">
                    <h6 class="user-name mb-1">
                        {{ $page.props.user ? $page.props.user.name : "Guest" }}
                    </h6>
                    <p class="available-balance" v-if="$page.props.user">
                        Total balance $<span class="counter">583.67</span>
                    </p>
                </div>
            </div>
            <ul class="sidenav-nav ps-0" v-if="$page.props.user">
                <li>
                    <a href="profile.html"
                        ><i class="lni lni-user"></i>My Profile</a
                    >
                </li>
                <li>
                    <a href="notifications.html"
                        ><i class="lni lni-alarm lni-tada-effect"></i
                        >Notifications<span class="ms-3 badge badge-warning"
                            >3</span
                        ></a
                    >
                </li>
                <li class="suha-dropdown-menu">
                    <a href="wishlist-grid.html"
                        ><i class="lni lni-heart"></i>My Wishlist</a
                    >
                </li>
                <li>
                    <a href="settings.html"
                        ><i class="lni lni-cog"></i>Settings</a
                    >
                </li>
                <li>
                    <a href="#" @click="logout"
                        ><i class="lni lni-power-switch"></i>Sign Out</a
                    >
                </li>
            </ul>
            <ul class="sidenav-nav ps-0" v-else>
                <li>
                    <Link :href="route('login')"
                        ><i class="lni lni-power-switch"></i>Login</Link
                    >
                </li>
            </ul>
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
