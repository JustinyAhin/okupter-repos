import { getAllBlogPosts } from '$lib/data/queries/posts';
import { error } from '@sveltejs/kit';

export const load = async () => {
	const posts = await getAllBlogPosts();

	if (!posts) {
		throw error(404, {
			message: 'Posts not found'
		});
	}

	return {
		posts
	};
};
