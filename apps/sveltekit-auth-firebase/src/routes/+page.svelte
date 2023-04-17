<script lang="ts">
	import '$styles/app.css';
</script>

<svelte:head>
	<title>SvelteKit authentication with Firebase</title>
</svelte:head>

<main class="p-8 space-y-12 font-serif">
	<h1 class="text-4xl font-bold">SvelteKit authentication with Firebase</h1>

    <form class="flex flex-col gap-4 p-8 space-y-4 bg-white sm:w-8/12">
        <input type="email" placeholder="Email" class="px-4 py-2 border border-gray-300 rounded-md" />
        <input type="password" placeholder="Password" class="px-4 py-2 border border-gray-300 rounded-md" />

        <button type="submit" class="px-4 py-2 text-white bg-blue-500 rounded-md w-fit">Sign in</button>
    </form>
</main>
