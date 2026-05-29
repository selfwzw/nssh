import { defineConfig } from 'vite'

export default defineConfig({
	base: '/nssh/',
	build: {
		minify: 'esbuild',
		chunkSizeWarningLimit: 1200,
	},
})
