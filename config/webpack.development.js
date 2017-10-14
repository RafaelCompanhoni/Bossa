const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const parts = require('./webpack.parts.js');

const developmentConfig = merge([
  commonConfig,
  parts.sourceMap(),
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = developmentConfig;
