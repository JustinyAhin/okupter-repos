import { client } from '$lib/data/client';

const getSingleBlogPost = async (slug: string) => {
	const post = await client.chain.query.post({ id: slug, idType: 'SLUG' }).get({
		__typename: true,
		id: true,
		dateGmt: true,
		title: true,
		author: {
			node: {
				__typename: true,
				id: true,
				firstName: true,
				lastName: true,
				avatar: {
					url: true
				}
			}
		},
		content: true,
		categories: {
			nodes: {
				__typename: true,
				id: true,
				name: true,
				slug: true
			}
		}
	});

	return post;
};

const getAllBlogPosts = async () => {
	const posts = await client.chain.query.posts().get({
		nodes: {
			__typename: true,
			id: true,
			slug: true,
			dateGmt: true,
			title: true,
			excerpt: true,
		}
	});

	return posts?.nodes;
};

export { getSingleBlogPost, getAllBlogPosts };
