<script lang="ts">
	import { page } from '$app/stores';
</script>

<header class="space-y-4">
	<a href="/" class="font-bold hover:underline">Home</a>

	<nav class="flex gap-4">
		<a href="/register" class="hover:underline" class:active={$page.url.pathname === '/register'}
			>Register</a
		>
		<a href="/login" class="hover:underline" class:active={$page.url.pathname === '/login'}>Login</a
		>
	</nav>
</header>

<style lang="postcss">
	nav a.active {
		@apply font-bold text-indigo-700;
	}
</style>
