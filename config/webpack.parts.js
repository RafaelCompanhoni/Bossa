const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

exports.babel = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react']
            }
          },
        ]
      },
    ],
  },
});

exports.loadStyles = () => ({
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            }
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 2,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer({ browsers: ['last 2 versions'] })
              ]
            }
          },
          {
            loader: 'fast-sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
    ],
  },
});

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
        test: /\.(js|jsx)$/,
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

exports.sourceMap = () => ({
  devtool: '#source-map',
});

exports.uglify = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warnings: false,
      mangle: true,
    }),
  ],
});
