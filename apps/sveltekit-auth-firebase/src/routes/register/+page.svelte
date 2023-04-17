<script lang="ts">
	import { goto } from '$app/navigation';

	import { createUserWithEmailAndPassword } from 'firebase/auth';
	import { firebaseApp, firebaseAuth } from '$lib/firebase';

	let email: string;
	let password: string;

	let success: boolean | undefined = undefined;

	const register = () => {
		createUserWithEmailAndPassword(firebaseAuth, email, password)
			.then(() => {
				goto('/login');
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(errorCode, errorMessage);

				success = false;
			});
	};
</script>

<svelte:head>
	<title>Register</title>
</svelte:head>

<h1 class="text-4xl font-bold">Register</h1>

<form
	class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-8/12"
	on:submit|preventDefault={register}
>
	<input
		type="email"
		placeholder="Email"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
		bind:value={email}
	/>
	<input
		type="password"
		placeholder="Password"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
		bind:value={password}
	/>

	<button type="submit" class="default-action">Register</button>

	{#if !success && success !== undefined}
		<div class="p-8 text-red-500 bg-red-100">There was an error registering. Please try again.</div>
	{/if}
</form>
