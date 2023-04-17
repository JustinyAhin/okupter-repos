<svelte:head>
	<title>Register</title>
</svelte:head>

<h1 class="text-4xl font-bold">Register</h1>

<form class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-8/12">
	<input
		type="email"
		placeholder="Email"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
	/>
	<input
		type="password"
		placeholder="Password"
		class="px-4 py-2 border border-gray-300 rounded-md"
		required
	/>

	<button type="submit" class="default-action">Register</button>
</form>
