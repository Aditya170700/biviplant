import './bootstrap';
import '../css/app.css';

import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { createStore } from 'vuex';
import Toast from "vue-toastification";
import { imageReader, toastError, toastSuccess } from './utils';
import VueGoogleMaps from "@fawmi/vue-google-maps";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Biviplant';

InertiaProgress.init({
    color: '#4B5563',
    showSpinner: true,
});

let store = createStore({
    state: {
        courier: null,
        filterProduct: {
            categories: [],
            category: [],
            sort_price: "asc",
        },
    },
    mutations: {
        setCourier(state, courier) {
            state.courier = courier;
        }
    },
    getters: {
        courier(state) {
            return state.courier;
        }
    }
});

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(store)
            .use(Toast)
            .use(VueGoogleMaps, {
                load: {
                    key: 'AIzaSyBGEoiVjO46M-okQCc9BH8g8-iG1SPIid8',
                    libraries: 'places',
                },
            })
            .mixin({
                methods: {
                    route,
                    // can: function (permission) {
                    //     return this.$page.props.flash.auth.access.includes(permission);
                    // },
                    // canOr: function (permissions) {
                    //     let can = false;
                    //     permissions.forEach((item) => {
                    //     if (this.can(item)) {
                    //         can = true;
                    //     }
                    //     });
                    //     return can;
                    // },
                },
                updated() {
                    if (this.$page.props.flash.success) {
                        toastSuccess(this.$page.props.flash.success);
                        this.$page.props.flash.success = "";
                    }
                    if (this.$page.props.flash.failed) {
                        toastError(this.$page.props.flash.failed);
                        this.$page.props.flash.failed = "";
                    }
                    if (this.$page.props.flash.login) {
                        this.$page.props.flash.login = false;
                        localStorage.removeItem("address");
                        localStorage.removeItem("primary_address");
                        localStorage.removeItem("cart");
                        window.location.reload();
                    }
                    if (this.$page.props.flash.logout) {
                        this.$page.props.flash.logout = false;
                        window.location.reload();
                    }
                },
                mounted() {
                    document.querySelector('meta[name="title"]').setAttribute('content', this.$page.props.meta_title ?? this.$page.props.flash.meta_title);
                    document.querySelector('meta[name="description"]').setAttribute('content', this.$page.props.meta_description ?? this.$page.props.flash.meta_description);
                    document.querySelector('meta[name="keyword"]').setAttribute('content', this.$page.props.meta_keyword ?? this.$page.props.flash.meta_keyword);
                }
            })
            .mount(el);
    },
});
