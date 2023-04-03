<script lang="ts">
  import '$styles/app.css';

  const authorizedExtensions = ['.jpg', '.jpeg', '.png', '.svg'];

  let fileData: string | undefined;

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  };

  const handleFileUpload = async (event: SubmitEvent) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const file = formData.get('file') as File;

    fileData = await readFile(file);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: JSON.stringify({
        fileData,
        fileName: file.name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.message);
    }

    fileData = undefined;
    (event.target as HTMLFormElement).reset();

    const data = await response.json();

    alert(data.message);
  };
</script>

<svelte:head>
  <title>SvelteKit file upload</title>
</svelte:head>

<main class="max-w-5xl px-8 mx-auto my-16 space-y-8">
  <h1 class="text-3xl font-bold text-indigo-700">SvelteKit file upload</h1>

  <form on:submit|preventDefault={handleFileUpload}>
    <div class="group">
      <label for="file">Upload yout profile picture</label>
      <input type="file" id="file" name="file" accept={authorizedExtensions.join(',')} required />
    </div>

    <button type="submit">Submit</button>
  </form>
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
