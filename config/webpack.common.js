const path = require('path');
const merge = require('webpack-merge');
const parts = require('./webpack.parts.js');

const commonConfig = merge([
  {
    entry: {
      bundle: path.resolve(__dirname, '../src/index.jsx'),
    },
    output: {
      path: path.resolve(__dirname, '../build'),
      filename: '[name].[chunkhash].js',
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },
  },
  parts.jsLinterLoader(),
  parts.jsTranspilerLoader(),
  parts.stylesLoader(),
  parts.useHtmlTemplatePlugin(),
  parts.codeSplittingPlugin(),
]);

module.exports = commonConfig;
