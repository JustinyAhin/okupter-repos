import { client } from '$lib/data/client';

const getSingleBlogPost = async (slug: string) => {
	const post = client.chain.query.post({ id: slug, idType: 'SLUG' }).get({
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

export { getSingleBlogPost };
