import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

// const dev = process.env.NODE_ENV === 'development';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	
	kit: {
		adapter: adapter({
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
			base: dev ? '' : '/desmet_photography_portfolio',
        },
		appDir: 'internal',
	}
};

export default config;
