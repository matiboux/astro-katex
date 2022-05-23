import { AstroIntegration } from 'astro';

function createScript(): string {
	return `
	        import render from 'katex/contrib/auto-render';
			const elements = window?.document.getElementsByClassName('astro-katex');
			let size = elements.length;
			for (let i = 0; i<size; i++) {
				render(elements[i], {
					throwOnError: false
				});
			}
		`
}


export default function (): AstroIntegration {
	return {
		name: '@astrojs/astro-katex',
		hooks: {
			'astro:config:setup': ({ injectScript }) => {
				injectScript(
                    'page',
                    createScript()
                )
			},
		},
	};
}