import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="prose prose-blue lg:prose-xl">
      <h1>React, Tailwind and RSBuild Boilerplate</h1>

      <p>
        A blazingly fast, bare minimum, and as much as un-opinionated as can be,
        boilerplate so you can start develop and deploy React apps with Tailwind
        CSS and RSBuild.
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
          </ul>
        </li>

        <li>
          <a href="https://reactrouter.com/">React Router</a>
        </li>

        <li>
          <a href="https://rsbuild.dev/">RSBuild</a>
        </li>
      </ul>
    </div>
  );
}
