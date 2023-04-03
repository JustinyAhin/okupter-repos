import { error, json } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const POST = async ({ request }) => {
  const requestBody = await request.json();

  if (!requestBody.fileData || requestBody.fileData === 'data:') {
    throw error(400, { message: 'No file data' });
  }

  console.log(requestBody);

  const { fileData, fileName } = requestBody as {
    fileData: string;
    fileName: string;
  };

  writeFileSync(`static/${fileName}`, fileData.split(',')[1], 'base64');

  return json({ success: true, message: 'File uploaded successfully' });
};
