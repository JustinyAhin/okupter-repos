<script lang="ts">
	export let data;

	const { post } = data;

	const getHumanReadableDate = (date: string) => {
		const dateObj = new Date(date);

		const readableDate = new Intl.DateTimeFormat('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		}).format(dateObj);

		return readableDate;
	};
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div>
	<a href="/" class="flex text-indigo-700 bold hover:underline">Back to home</a>
</div>

<article class="mt-16 space-y-8">
	<header class="space-y-4">
		<h1>{post.title}</h1>

		<div class="author-box">
			{#if post.author}
				<img
					src={post.author.node.avatar?.url}
					alt={`${post.author.node.firstName} ${post.author.node.lastName}`}
				/>

				{#if post.dateGmt}
					<p>Written on {getHumanReadableDate(post.dateGmt)}</p>
				{/if}
				<p>By {post.author.node.firstName} {post.author.node.lastName}</p>
			{/if}
		</div>
	</header>

	<div class="space-y-4">
		{@html post.content}
	</div>
</article>

<style>
	:global(.post-content img) {
		@apply max-w-full h-auto;
	}
</style>
