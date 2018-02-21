const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const parts = require('./webpack.parts.js');

const developmentConfig = merge([
  commonConfig,
  parts.imagesLoader(),
  parts.sourceMapConfig(),
  parts.devServerConfig({
    host: process.env.HOST,
    port: process.env.PORT,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
      },
    },
  }),
]);

module.exports = developmentConfig;
