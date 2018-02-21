const commonConfig = require('./webpack.common.js');
const parts = require('./webpack.parts.js');
const merge = require('webpack-merge');

const productionConfig = merge([
  commonConfig,
  parts.imagesLoader({
    options: {
      limit: 8192,
      name: './assets/[name].[ext]',
    },
  }),
  parts.minificationPlugin(),
  parts.setFreeVariablePlugin('process.env.NODE_ENV', 'production'),
]);

module.exports = productionConfig;
