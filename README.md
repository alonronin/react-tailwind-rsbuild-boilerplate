React + Tailwind CSS + Webpack 5 Boilerplate
===

> React + React Router + Tailwind Css with Webpack 5 boilerplate.


### Install

```$shell
$ git clone && yarn
```

### Dev

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


