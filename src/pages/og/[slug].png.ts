import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { SITE_TITLE } from '../../consts';
import { generateOgImage } from '../../lib/og-image';

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = await getCollection('blog');
	return posts
		.filter((post) => !post.data.heroImage)
		.map((post) => ({
			params: { slug: post.id },
			props: { title: post.data.title, pubDate: post.data.pubDate },
		}));
};

export const GET: APIRoute = async ({ props }) => {
	const { title, pubDate } = props as { title: string; pubDate: Date };
	const png = await generateOgImage(title, pubDate, SITE_TITLE);
	return new Response(png, {
		headers: { 'Content-Type': 'image/png' },
	});
};
