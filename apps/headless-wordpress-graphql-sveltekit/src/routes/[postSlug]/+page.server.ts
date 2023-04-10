import { getSingleBlogPost } from '$lib/data/queries/posts';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { postSlug } = params;
	const post = await getSingleBlogPost(postSlug);

	if (!post) {
		throw error(404, {
			message: 'The post you are looking for does not exist'
		});
	}


	return {
		post
	};
};
