/* ***************************************************************************
  Use the following sufixes to indicate the purpose of each 'part':
    * Loader
    * Config
    * Plugin
**************************************************************************** */
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.jsLinterLoader = () => ({
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

exports.jsTranspilerLoader = () => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env', 'react'],
            },
          },
        ],
      },
    ],
  },
});

exports.stylesLoader = () => ({
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 2,
                localIdentName: '[local]___[hash:base64:5]',
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  autoprefixer({ browsers: ['last 2 versions'] }),
                ],
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-resources-loader',
              options: {
                resources: ['./styles/index.scss'], // global sass imports (so you don't need to import in every specific sass file)
              },
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].[chunkhash].css'),
  ],
});

exports.imagesLoader = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|mp4|webm)$/,
        include,
        exclude,
        use: {
          loader: 'url-loader',
          options,
        },
      },
    ],
  },
});

exports.devServerConfig = ({ host, port, proxy } = {}) => ({
  devServer: {
    host,
    port,
    proxy,
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

exports.sourceMapConfig = () => ({
  devtool: '#source-map',
});

exports.minificationPlugin = () => ({
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      warnings: false,
      mangle: true,
    }),
  ],
});

exports.useHtmlTemplatePlugin = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: './assets/img/favicon.png',
    }),
  ],
});

exports.codeSplittingPlugin = () => ({
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
    }),
  ],
});

exports.setFreeVariablePlugin = (key, value) => {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [new webpack.DefinePlugin(env)],
  };
};
