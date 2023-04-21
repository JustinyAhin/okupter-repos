<script lang="ts">
	import { goto } from '$app/navigation';

	import { signInWithEmailAndPassword, type User } from 'firebase/auth';
	import { firebaseAuth } from '$lib/firebase';

	const errorMessages = [
		{
			type: 'auth/user-not-found',
			message:
				'This email is not registered. Please register first or try again with a different email.'
		},
		{
			type: 'auth/wrong-password',
			message: 'The password you entered is incorrect. Please try again.'
		}
	];

	let email: string;
	let password: string;
	let success: boolean | undefined = undefined;

	let customError = {
		type: '',
		message: ''
	};

	let authUser:
		| {
				uid: string;
				email: string;
		  }
		| undefined = undefined;

	$: console.log(authUser);

	const login = () => {
		signInWithEmailAndPassword(firebaseAuth, email, password)
			.then((userCredential) => {
				authUser = {
					uid: userCredential.user.uid,
					email: userCredential.user.email as string
				};

				goto('/protected');
			})
			.catch((error) => {
				const errorCode = error.code;

				const errorMatch = errorMessages.find((error) => error.type === errorCode);

				if (errorMatch) {
					customError = errorMatch;
				} else {
					customError = {
						type: 'unknown',
						message: 'There was an error logging in. Please try again.'
					};
				}

				success = false;
			});
	};
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<h1 class="text-4xl font-bold">Login</h1>

<form class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-10/12" on:submit|preventDefault={login}>
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

	<button type="submit" class="default-action">Login</button>

	{#if !success && success !== undefined}
		<div class="p-8 text-red-500 bg-red-100">{customError.message}</div>
	{/if}
</form>
