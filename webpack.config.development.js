const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');

const config = require('./webpack.config.js');

module.exports = merge(config, {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(png|jpe?g|ico|gif|woff2?|ttf|eot)(\?-.*)?$/,
        loader: 'url-loader',
      },
    ],
  },

  plugins: [new Dotenv()],
});
