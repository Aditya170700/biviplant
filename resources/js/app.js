require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { imageReader } from './utils';
import { createToast } from 'mosha-vue-toastify'
import 'mosha-vue-toastify/dist/style.css'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Biviplant';

InertiaProgress.init({
    color: '#4B5563',
    showSpinner: true,
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
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
                        createToast(this.$page.props.flash.success, {
                        type: 'success',
                        timeout: 3000,
                        position: 'top-right',
                        showIcon: true,
                        toastBackgroundColor: '#188753',
                        })
                        this.$page.props.flash.success = "";
                    }
                    if (this.$page.props.flash.failed) {
                        createToast(this.$page.props.flash.failed, {
                        type: 'danger',
                        timeout: 3000,
                        position: 'top-right',
                        showIcon: true,
                        toastBackgroundColor: '#ff4560',
                        })
                        this.$page.props.flash.failed = "";
                    }
                    if (this.$page.props.flash.login) {
                        this.$page.props.flash.login = false;
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
