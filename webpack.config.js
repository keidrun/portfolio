const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ['./src/main.jsx', './src/main.css', './public/index.html'],
  output: {
    path: `${__dirname}/build`,
    filename: 'static/js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['remove-flow-types-loader'],
        include: `${__dirname}/src`,
      },
      {
        test: /\.(js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: ['eslint-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  plugins: [
    new ExtractTextPlugin('static/css/bundle.css'),
    new CopyWebpackPlugin(
      [{ from: './public/', to: `${__dirname}/build` }],
      { copyUnmodified: true }
    ),
    new webpack.HotModuleReplacementPlugin(), // react-hot-loader
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }), // --optimize-minimize
  ],
  devtool: 'source-map',
  devServer: {
    hot: true, // react-hot-loader
    contentBase: './build',
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
