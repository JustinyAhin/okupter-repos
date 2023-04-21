<script lang="ts">
	import '$styles/app.css';

	import Header from '$lib/Header.svelte';
</script>

<main class="p-8 space-y-12 font-serif">
	<Header />
	<slot />
</main>
