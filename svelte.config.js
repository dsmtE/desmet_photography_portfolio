import adapter_static from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');
const base = dev ? '' : '/desmet_photography_portfolio';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	kit: {
		adapter: adapter_static({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		  }),
		alias: {
			$src: "src/",
			$components: "src/components/",
			$static: "static/"
		},
		paths: {
			base: base,
        },
		appDir: 'internal',
		serviceWorker: {
			register: false,
		}
	}
};

export default config;
