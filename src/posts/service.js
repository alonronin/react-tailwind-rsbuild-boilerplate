import client from '@/client.js';

export const getPosts = async () => {
  const { data } = await client.get('/posts');
  return data;
};
