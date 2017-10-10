const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = ['lodash'];

const commonConfig = merge([
  {
    entry: {
      bundle: './src/index.js',
      vendor: VENDOR_LIBS,
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].[chunkhash].js',
    },
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new ExtractTextPlugin('style.css'),
    ],
  },
  parts.babel(),
  parts.stylesheets(),
  parts.images(),
  parts.lintJavaScript(),
]);

module.exports = commonConfig;
