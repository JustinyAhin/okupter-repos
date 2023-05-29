import { fail } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());

    if (
      !(formData.fileToUpload as File).name ||
      (formData.fileToUpload as File).name === 'undefined'
    ) {
      return fail(400, {
        error: true,
        message: 'You must provide a file to upload'
      });
    }

    const { fileToUpload } = formData as { fileToUpload: File };

    // Write the file to the static folder
    writeFileSync(`static/${fileToUpload.name}`, Buffer.from(await fileToUpload.arrayBuffer()));

    return {
      success: true
    };
  }
};
