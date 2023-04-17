<script lang="ts">
	import '$styles/app.css';
	import { page } from '$app/stores';
</script>

<main class="p-8 space-y-12 font-serif">
	<div class="space-y-4">
		<a href="/" class="font-bold hover:underline">Home</a>

		<nav class="flex gap-4">
			<a href="/register" class:active={$page.url.pathname === '/register'}>Register</a>
			<a href="/login" class:active={$page.url.pathname === '/login'}>Login</a>
		</nav>
	</div>

	<slot />
</main>

<style lang="postcss">
	nav a {
		@apply hover:underline;
	}

	nav a.active {
		@apply font-bold text-indigo-700;
	}
</style>
