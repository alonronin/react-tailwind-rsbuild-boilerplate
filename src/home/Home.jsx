import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="prose prose-blue lg:prose-xl">
      <h1>React, Tailwind and Webpack 5 Boilerplate</h1>

      <p>
        A bare minimum, and as much as un-opinionated as can be, boilerplate so
        you can start develope and deploy React apps with Tailwind CSS and
        Webpack 5.
      </p>

      <p>
        Checkout <Link to="/posts">Posts</Link> page.
      </p>

      <h2>Resources</h2>

      <ul>
        <li>
          <a href="https://reactjs.com" target="_blank">
            React
          </a>

          <ul>
            <li>
              <a href="https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#whats-a-jsx-transform">
                React 17 JSX Transform
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://tailwindcss.com" target="_blank">
            Tailwind CSS
          </a>

          <ul>
            <li>
              <a href="https://tailwindcss.com/docs/typography-plugin">
                @tailwindcss/typography
              </a>
            </li>

            <li>
              <a href="https://tailwindcss-forms.vercel.app/">
                @tailwindcss/forms
              </a>
            </li>

            <li>
              <a href="https://github.com/tailwindlabs/tailwindcss-aspect-ratio">
                @tailwindcss/aspect-ratio
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://reactrouter.com/">React Router</a>
        </li>

        <li>
          <a href="https://webpack.js.org/">Webpack</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
