import { WORDPRESS_BASE_URL } from '$env/static/private';
import { createClient } from '$lib/data/generated';

const client = createClient({
	url: `${WORDPRESS_BASE_URL}/graphql`
});

export { client };
