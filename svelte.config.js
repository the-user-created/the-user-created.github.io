import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are fine for GitHub pages,
			// but you can customize them here.
			// pages: 'build',
			// assets: 'build',
			fallback: undefined, // can be '404.html' or '200.html' for SPA mode
			precompress: false,
			strict: true
		}),
		// Important for GitHub pages: set the base path to your repository name
		// if you are deploying to username.github.io/repo-name/
		// If deploying to username.github.io, you can omit this.
		// paths: {
		//  base: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
		// }
	}
};

export default config;
