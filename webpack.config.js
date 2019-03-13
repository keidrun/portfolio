const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const HashOutput = require('webpack-plugin-hash-output');
const FlowWebpackPlugin = require('flow-webpack-plugin');

const PATH = {
  INDEX: {
    JS: './src/components/index.jsx',
    CSS: './src/styles/index.scss',
    HTML: './src/index.html',
  },
  DIST: path.join(__dirname, 'build'),
  ROBOTSTXT: { IN: './src/robots.txt', OUT: '' },
};

const config = {
  entry: {
    bundle: [PATH.INDEX.JS, PATH.INDEX.CSS, PATH.INDEX.HTML],
  },
  output: { path: PATH.DIST, filename: '[name].[hash].js' },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /react|react-dom|bootstrap|jquery|popper.js|tether/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['remove-flow-types-loader'],
        enforce: 'pre',
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              fix: true,
            },
          },
        ],
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'css-url-loader',
              query: {
                from: '/assets/',
                to: 'https://keisukesasaki.com/assets/',
                env: 'development',
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        }),
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [{ loader: 'url-loader', options: { limit: 8192 } }],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: PATH.INDEX.HTML }),
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new CopyWebpackPlugin([
      { from: PATH.ROBOTSTXT.IN, to: PATH.ROBOTSTXT.OUT },
    ]),
    new ExtractTextPlugin('bundle.[hash].css'),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'production') {
    config.plugins.push(
      new HashOutput({
        validateOutput: true,
        validateOutputRegex: /^build\/.*\.{js|css}$/,
      }),
    );
  } else {
    // 'development'
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.plugins.push(new FlowWebpackPlugin());
    config.watchOptions = {
      aggregateTimeout: 300,
      poll: 1000,
    };
    config.devtool = 'source-map';
    config.devServer = {
      hot: true,
      contentBase: PATH.DIST,
      host: '0.0.0.0',
      port: 8080,
      inline: true,
      historyApiFallback: true,
      stats: {
        version: false,
        hash: false,
        chunkModules: false,
      },
    };
  }

  return config;
};
