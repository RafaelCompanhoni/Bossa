exports.lintJavaScript = () => ({
  test: /\.js$/,
  enforce: 'pre',
  loader: 'eslint-loader',
  exclude: /node_modules/,
  options: {
    emitWarning: true,
  },
});

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    host,
    port,
    stats: {
      assets: false,
      modules: false,
      hash: false,
      timings: false,
      version: false,
    },
    overlay: {
      errors: true,
      warnings: true,
    },
  },
});
