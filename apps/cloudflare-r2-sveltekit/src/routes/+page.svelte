<script lang="ts">
	import { PUBLIC_R2_BUCKET_DOMAIN } from '$env/static/public';
	import { Fileupload } from 'flowbite-svelte';

	let uploadedFileUrl: string | undefined = undefined;

	const handleFileUpload = async (e: Event) => {
		const target = e.target as HTMLInputElement;
		const file = target.files?.[0];

		if (file) {
			const getPresignedUrlResponse = await fetch('/api/upload', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					fileName: file.name,
					fileType: file.type
				})
			});

			if (!getPresignedUrlResponse.ok) {
				console.error('Failed to get presigned URL');
			}

			const { presignedUrl, objectKey } = await getPresignedUrlResponse.json();

			const uploadToR2Response = await fetch(presignedUrl, {
				method: 'PUT',
				headers: {
					'Content-Type': file.type
				},
				body: file
			});

			if (!uploadToR2Response.ok) {
				console.error('Failed to upload file to R2');
			}

			uploadedFileUrl = `${PUBLIC_R2_BUCKET_DOMAIN}/${objectKey}`;
		}
	};
</script>

<svelte:head>
	<title>How to upload files to Cloudflare R2 in SvelteKit</title>
</svelte:head>

<main class="max-w-5xl py-12 mx-auto space-y-12">
	<h1>How to upload files to Cloudflare R2 in SvelteKit</h1>

	<div>
		<p>
			Blog post: <a
				href="https://www.okupter.com/blog/upload-files-cloudflare-r2-in-sveltekit"
				target="_blank"
				class="font-bold hover:text-blue-700 hover:underline"
				>https://www.okupter.com/blog/upload-files-cloudflare-r2-in-sveltekit</a
			>
		</p>

		<p>
			Demo website: <a
				href="https://cloudflare-r2-sveltekit.vercel.app"
				target="_blank"
				class="font-bold hover:text-blue-700 hover:underline"
				>https://cloudflare-r2-sveltekit.vercel.app</a
			>
		</p>
	</div>

	<Fileupload id="with_helper" class="mb-2" on:change={handleFileUpload} />

	{#if uploadedFileUrl}
		<img src={uploadedFileUrl} alt="Uploaded file" width="1200" height="700" />
	{/if}
</main>
