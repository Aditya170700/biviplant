import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { withVite } from './with-vite.mjs'

createServer.default((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: name => withVite(import.meta.glob('../../views/pages/**/*.vue'), name),
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props),
    }).use(plugin)
  },
}))
