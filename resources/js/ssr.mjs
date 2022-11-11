import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { ZiggyVue } from "../../vendor/tightenco/ziggy/dist/vue.m.js";
import route from "ziggy"
import { createStore } from 'vuex';
import Toast from "vue-toastification";

let store = createStore({
    state: {
        courier: null,
        filterProduct: {
            categories: [],
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

function withVite(pages, name) {
	for (const path in pages) {
		if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
			return typeof pages[path] === 'function' 
				? pages[path]()
				: pages[path]
		}
	}

	throw new Error('Page not found: ' + name)
}

createServer((page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => withVite(import.meta.glob('./Pages/**/*.vue'), name),
    setup({ app, props, plugin }) {
        const Ziggy = {
            // Pull the Ziggy config off of the props.
            ...props.initialPage.props.ziggy,
            // Build the location, since there is
            // no window.location in Node.
            location: new URL(props.initialPage.props.ziggy.url)
        }
        return createSSRApp({
            render: () => h(app, props),
        })
        .use(plugin)
        .use(ZiggyVue)
        .use(store)
        .use(Toast)
        .mixin({ 
                methods: {
                    route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
                },
            })
    },
}))
