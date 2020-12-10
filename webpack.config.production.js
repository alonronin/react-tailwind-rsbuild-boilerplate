const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssNano = require('cssnano');
const { EnvironmentPlugin } = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

const config = require('./webpack.config.js');

module.exports = merge(config, {
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'assets/js/[name].[contenthash].js',
    chunkFilename: `assets/js/[contenthash].js`,
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  CssNano({
                    preset: 'default',
                  }),
                ],
              },
            },
          },
        ],
      },

      {
        test: /\.(woff2?|ttf|eot)(\?-.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[contenthash].[ext]',
          esModule: false,
        },
      },

      {
        test: /\.(png|jpe?g|ico|gif)(\?-.*)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[contenthash].[ext]',
          esModule: false,
        },
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),

    new EnvironmentPlugin(['BASE_URL']),

    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
      chunkFilename: 'assets/css/[id].[contenthash].css',
    }),
  ],

  optimization: {
    chunkIds: 'named',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor',
          priority: 10,
          enforce: true,
        },
      },
    },
  },
});
