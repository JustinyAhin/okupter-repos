<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';
	import { authUser } from '$lib/authStore';

	const handleLogout = () => {
		signOut(firebaseAuth)
			.then(() => {
				$authUser = undefined;
				goto('/login');
			})
			.catch((error) => {
				console.log(error);
			});
	};
</script>

<header class="space-y-4">
	<a href="/" class="font-bold hover:underline">Home</a>

	<nav class="flex gap-4">
		{#if $authUser}
			<a
				href="/protected"
				class="hover:underline"
				class:active={$page.url.pathname === '/protected'}>Protected</a
			>
			<button class="hover:underline" on:click={handleLogout}>Logout</button>
		{:else}
			<a href="/register" class="hover:underline" class:active={$page.url.pathname === '/register'}
				>Register</a
			>
			<a href="/login" class="hover:underline" class:active={$page.url.pathname === '/login'}
				>Login</a
			>
		{/if}
	</nav>
</header>

<style lang="postcss">
	nav a.active {
		@apply font-bold text-indigo-700;
	}
</style>
