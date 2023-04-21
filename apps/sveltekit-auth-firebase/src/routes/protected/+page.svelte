<script lang="ts">
	import { goto } from '$app/navigation';
	import { authUser } from '$lib/authStore';

	$: if (!$authUser) {
		goto('/login');
	}
</script>

<svelte:head>
	<title>Protected route</title>
</svelte:head>

<h1 class="text-4xl font-bold">Protected route</h1>
