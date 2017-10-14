const commonConfig = require('./webpack.common.js');
const parts = require('./webpack.parts.js');
const merge = require('webpack-merge');

const productionConfig = merge([
  commonConfig,
  parts.uglify(),
]);

module.exports = productionConfig;
