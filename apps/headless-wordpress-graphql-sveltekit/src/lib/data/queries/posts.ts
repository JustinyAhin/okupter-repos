import { client } from '$lib/data/client';

const getSingleBlogPost = async (slug: string) => {
	try {
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
	} catch (error) {
		console.error(error);
	}
};

const getAllBlogPosts = async () => {
	try {
		const posts = await client.chain.query.posts().get({
			nodes: {
				__typename: true,
				id: true,
				slug: true,
				dateGmt: true,
				title: true,
				excerpt: true
			}
		});

		return posts?.nodes;
	} catch (error) {
		console.error(error);
	}
};

export { getSingleBlogPost, getAllBlogPosts };
