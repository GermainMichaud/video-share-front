import axios from 'axios';

export const srcToFile = async (src: string, filename: string) => {
  const response = await axios.get(src, {
    responseType: 'blob',
  });
  const mimeType = response.headers['content-type'];
  const file = new File([response.data as BlobPart], filename, {
    type: mimeType,
  });
  return file;
};
