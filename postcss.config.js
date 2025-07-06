import p from '@fullhuman/postcss-purgecss';

const purgecss = p.default || p;

const config = {
	plugins: [
		// Only run PurgeCSS for production builds
		process.env.NODE_ENV === 'production'
			? purgecss({
				content: ['./src/**/*.html', './src/**/*.svelte'],

				safelist: {
					standard: ['active', 'collapsed', 'show', 'success', 'hidden'],
					greedy: [/:global/]
				},

				keyframes: true,
				variables: true,

				defaultExtractor: (content) => content.match(/[\w\-/:]+(?<!:)/g) || []
			})
			: null
	].filter(Boolean)
};

export default config;
