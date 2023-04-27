<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const headingElement = document.querySelector('h1');
		console.log(headingElement);
	});
</script>

<h1>How to fix the "document is not defined" error in SvelteKit</h1>
