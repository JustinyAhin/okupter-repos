import { error, json } from '@sveltejs/kit';
import { writeFileSync } from 'fs';

export const POST = async ({ request }) => {
  const requestBody = await request.json();

  if (!requestBody.fileData || requestBody.fileData === 'data:') {
    throw error(400, { message: 'No file data' });
  }

  const fileData = (requestBody.fileData as string).split(',')[1];

  writeFileSync(`static/avatar.svg`, fileData, 'base64');

  return json({ success: true, message: 'File uploaded successfully' });
};
