// resources/scripts/inertia/with-vite.ts
export function withVite(pages, name = '') {
	for (const path in pages) {
		if (path.endsWith(`${name.replace('.', '/')}.vue`)) {
			return typeof pages[path] === 'function' 
				? pages[path]()
				: pages[path]
		}
	}

	throw new Error('Page not found: ' + name)
}