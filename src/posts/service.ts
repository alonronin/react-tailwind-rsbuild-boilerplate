import client from '@/client.ts';

export const getPosts = async () => {
  const { data } = await client.get('/posts');

  return data;
};
