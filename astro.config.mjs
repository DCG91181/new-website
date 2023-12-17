import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://dc91181.org',
	integrations: [
		starlight({
			favicon: '/images/favicon.ico',
			title: 'DCG91181',
			components: {
				// Override the default `SocialIcons` component.
				SiteTitle: './src/components/SiteTitle.astro',
			  },
			social: {
				discord: 'https://discord.gg/j3VMgyVaDt',
				linkedin: 'https://www.linkedin.com/company/dcg91181/',
				twitter: 'https://twitter.com/dcg91181/',
				instagram: 'https://www.instagram.com/dcg91181/',
				github: 'https://github.com/dcg91181/',
			},
			sidebar: [
				// {
				// 	label: 'Guides',
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: 'Example Guide', link: '/guides/example/' },
				// 	],
				// },
				{
					label: 'Weekly Challenges',
					autogenerate: { directory: 'challenges' },
				},
				{
					label: 'Articles',
					autogenerate: { directory: 'articles' },
				},
				{
					label: 'Advent Of Cyber 2023',
					autogenerate: { directory: 'advent-of-cyber' },
				},
				// {
				// 	label: 'TryHackMe Writeups',
				// 	autogenerate: { directory: 'articles' },
				// },
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
