React + Tailwind CSS + Webpack 5 Boilerplate
===

> React + React Router + Tailwind Css with Webpack 5 boilerplate.

A bare minimum, and as much as un-opinionated as can be, boilerplate so you can start develope and deploy React apps with Tailwind CSS and Webpack 5.

### Features

- [x] Routing and Lazy Loading routes
- [x] New React 17 JSX Transform
- [x] Importing `svg` as React Components  
- [ ] Fast Refresh
- [x] Tailwind CSS Forms, Typography and Aspect Ratio plugins
- [x] Create new project with `npx create-rtw-app` or `yarn create rtw-app`

### Install

```$shell
$ git clone && yarn
```

### Development

Copy `.env.example` to `.env`

```$shell
$ yarn dev
```

Default port is 8080 (or first available port). You can pass `--port`.

If you want to watch changes to `tailwind.config.js` run `yarn watch-css` in a different process.

### Build

```$shell
$ export BASE_URL=https://jsonplaceholder.typicode.com
$ yarn build
```

### Serve dist

```$shell
$ yarn start
```

Default port is 5000 (or first available port). You can pass `-l`.


