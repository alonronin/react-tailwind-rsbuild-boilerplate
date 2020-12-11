import { useEffect, useState } from 'react';

import { getPosts } from './service.js';

const Post = ({ title, body }, key) => (
  <li className="prose prose-gray lg:prose-xl" key={key}>
    <h2>{title}</h2>
    <p>{body}</p>
  </li>
);

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(setPosts).catch(console.error);
  }, []);

  return (
    <div className="container m-auto p-4">
      <h1 className="text-gray-700 text-5xl font-bold my-4">Posts</h1>

      <ul className="space-y-4">{posts.map(Post)}</ul>
    </div>
  );
};

export default Home;
