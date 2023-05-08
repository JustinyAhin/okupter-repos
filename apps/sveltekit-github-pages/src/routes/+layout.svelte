<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
</nav>

<main>
	<slot />
</main>

<style>
	nav {
		max-width: 40rem;
		margin: auto;
		padding: 1rem;
		display: flex;
		gap: 1rem;
	}

	main {
		max-width: 40rem;
		margin: auto;
		padding: 0 1rem;
	}

	main > *:not(:last-child) {
		margin-bottom: 1rem;
	}

	:global(img) {
		max-width: 100%;
	}
</style>
