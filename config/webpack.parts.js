// module rules

exports.babel = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
});

exports.loadCSS = () => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }],
      },
    ],
  },
});

exports.loadSass = () => ({
  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'fast-sass-loader'],
      },
    ],
  },
});

// exports.loadCSSOld = () => ({
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ExtractTextPlugin.extract({
//           fallback: 'style-loader',
//           use: 'css-loader',
//         }),
//       },
//     ],
//   },
// });

exports.images = () => ({
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 },
          },
          'image-webpack-loader',
        ],
      },
    ],
  },
});

exports.lintJavaScript = () => ({
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          emitWarning: true,
        },
      },
    ],
  },
});

// dev server

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
