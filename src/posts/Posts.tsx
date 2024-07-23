import { useEffect, useState } from 'react';

import { getPosts } from './service.ts';

const Post = (
  { title, body }: { title: string; body: string },
  key: number,
) => (
  <div className="prose lg:prose-xl" key={key}>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="prose prose-blue lg:prose-xl">
      <h1>Posts</h1>

      <div className="space-y-4">{posts.map(Post)}</div>
    </div>
  );
};

export default Posts;
