<script lang="ts">
  import { enhance } from '$app/forms';
  import '$styles/app.css';

  export let form;
</script>

<svelte:head>
  <title>SvelteKit file upload</title>
</svelte:head>

<main class="max-w-5xl px-8 mx-auto my-16 space-y-8">
  <h1 class="text-3xl font-bold text-indigo-700">SvelteKit file upload</h1>

  <form method="post" use:enhance enctype="multipart/form-data">
    <div class="group">
      <label for="file">Upload your file</label>
      <input
        type="file"
        id="file"
        name="fileToUpload"
        required
      />
    </div>

    <button type="submit">Submit</button>
  </form>

  {#if form?.error}
    <div class="p-4 text-white bg-red-500 rounded">
      <p>{form.message}</p>
    </div>
  {/if}

  {#if form?.success}
    <div class="p-4 text-white bg-green-500 rounded">
      <p>File uploaded successfully!</p>
    </div>
  {/if}
</main>

<style>
  form {
    @apply flex flex-col p-8 space-y-8 bg-gray-50;
  }

  form .group {
    @apply flex flex-col gap-2;
  }

  form input[type='file'] {
    @apply px-4 py-2 border border-indigo-400;
  }

  form button[type='submit'] {
    @apply px-4 py-2 font-bold text-white bg-indigo-700 w-fit;
  }
</style>
