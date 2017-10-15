const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts.js');
const packageJson = require('../package.json');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const VENDOR_LIBS = Object.keys(packageJson.dependencies);

const commonConfig = merge([
  {
    entry: {
      bundle: './src/index.jsx',
      vendor: VENDOR_LIBS,
    },
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss']
    },
    // TODO - move plugins to 'parts'
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        name: ['vendor', 'manifest'],
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      // TODO - review this
      new ExtractTextPlugin('style.css'),
    ],
  },
  parts.lintJavaScript(),
  parts.babel(),
  parts.loadStyles(),
  parts.images(),
]);

module.exports = commonConfig;
