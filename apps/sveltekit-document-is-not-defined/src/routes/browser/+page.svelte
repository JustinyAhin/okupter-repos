<script lang="ts">
	import { browser } from '$app/environment';

	if (browser) {
		const headingElement = document.querySelector('h1');
		console.log(headingElement);
	}
</script>

<h1>How to fix the "document is not defined" error in SvelteKit</h1>
