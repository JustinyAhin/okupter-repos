<script lang="ts">
	export let data;

	const { posts } = data;
</script>

<svelte:head>
	<title>Headless WordPress with SvelteKit</title>
</svelte:head>

<div class="space-y-4">
	<h1>Headless WordPress with SvelteKit</h1>

	{#each posts as post (post.id)}
		<article class="p-8 space-y-4 bg-gray-50">
			<h2>{post.title}</h2>
            
            <div>
                {@html post.excerpt}
            </div>
            
			<a href="/{post.slug}" class="flex text-indigo-700 bold hover:underline">Read more</a>
		</article>
	{/each}
</div>
