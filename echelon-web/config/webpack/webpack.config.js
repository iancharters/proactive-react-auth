// =============================================================================
// Import modules
// =============================================================================
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postCSSConfig = require('../postcss/postcss.config');

const paths = {
  BUILD: path.resolve(__dirname, '../../build'),
  ENTRY: path.resolve(__dirname, '../../src/entry'),
  SRC: path.resolve(__dirname, '../../src'),
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.ENTRY, 'index.js'),

  output: {
    path: paths.BUILD,
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    port: 3000,
  },
  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.ENTRY, 'index.html'),
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: 'config/postcss/postcss.config.js',
                },
              },
            },
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
