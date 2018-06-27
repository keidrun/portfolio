const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

const PATH = {
  INDEX: {
    JS: './src/components/index.jsx',
    CSS: './src/styles/index.scss',
    HTML: './src/index.html',
  },
  DIST: path.join(__dirname, 'public'),
  IMG: { IN: './src/assets', OUT: 'assets' },
  ROBOTSTXT: { IN: './src/robots.txt', OUT: '' },
};

module.exports = {
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
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
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
    alias: { images: path.join(__dirname, 'public/assets') },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: PATH.INDEX.HTML }),
    new ManifestPlugin({
      fileName: 'manifest.json',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),
    new ExtractTextPlugin('bundle.[hash].css'),
    new CopyWebpackPlugin([{ from: PATH.IMG.IN, to: PATH.IMG.OUT }]),
    new CopyWebpackPlugin([
      { from: PATH.ROBOTSTXT.IN, to: PATH.ROBOTSTXT.OUT },
    ]),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    hot: true,
    contentBase: PATH.DIST,
    port: 8080,
    inline: true,
    historyApiFallback: true,
    stats: {
      version: false,
      hash: false,
      chunkModules: false,
    },
  },
};
