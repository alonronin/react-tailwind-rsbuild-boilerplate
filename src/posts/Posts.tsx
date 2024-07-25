import { useEffect, useState } from 'react';

import { getPosts } from './service.ts';

type Post = { title: string; body: string };

function Post({ title, body }: Post) {
  return (
    <div className="prose lg:prose-xl">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="prose prose-blue lg:prose-xl">
      <h1>Posts</h1>

      <div className="space-y-4">
        {posts.map((props, key) => (
          <Post key={key} {...props} />
        ))}
      </div>
    </div>
  );
}
