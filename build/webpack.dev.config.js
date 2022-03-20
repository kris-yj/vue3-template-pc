const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  devServer: {
    host: 'localhost',
    port: '8008',
    hot: true,
    compress: false,
    open: false,
  },
  module: {
    rules: [
      { test: /\.vue$/, use: 'vue-loader' },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ]
};