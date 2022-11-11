import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
// import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue';
import path from 'path'

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.mjs',
        }),
        // react(),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    ssr: {
        noExternal: ['@inertiajs/server', 'vue-toastification'],
    },
    resolve: {
        alias: {
            'ziggy': path.resolve("vendor/tightenco/ziggy/src/js"),
            'ziggy-vue': '/vendor/tightenco/ziggy/src/js/vue',
            '@': '/resources/js'
        }
    }
});