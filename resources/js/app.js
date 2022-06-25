require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { imageReader } from './utils';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

InertiaProgress.init({
    color: '#4B5563',
    showSpinner: true,
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        const myApp = createApp({ render: () => h(app, props) })
            .use(plugin)
            .mixin({ methods: { route } });

        // global function for helper

        /**
         * Image Reader
         */
        myApp.config.globalProperties.$imageReader = imageReader;
        myApp.provide('imageReader', imageReader);


        myApp.mount(el);
        return myApp;
    },
});
