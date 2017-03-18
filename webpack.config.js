var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var appName=require('./package').name;

const src = path.resolve(process.cwd(), 'demo');
const nodeModules = path.resolve(process.cwd(), 'node_modules');

module.exports = {
  context: src,
  entry: {
    app: [ path.resolve(src, 'index.js')]
  },
  output: {
    path: path.resolve(__dirname, '_dist'),
    filename: '[name]_[hash:8].js',
    libraryTarget:'umd',
  },
  resolve: {
    modules: [
      src,
      nodeModules,
    ],
    extensions: ['.js','.jsx','.ts','.tsx','.json','.css','.less'],
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader:'babel-loader',
      exclude: [nodeModules],
    }, {
      test: /\.tsx?$/,
      use:['babel-loader','ts-loader'],
      exclude: [nodeModules],
    },{
      test: /\.(jpe?g|png|gif|svg|ico)/i,
      loader: 'file-loader?name=img/img_[hash:8].[ext]',
    },{
      test: /\.(ttf|eot|svg|woff|woff2)/,
      loader: 'file-loader',
    }, {
      test: /\.(pdf)/,
      loader: 'file-loader',
    }, {
      test: /\.(swf|xap)/,
      loader: 'file-loader',
    }, {
      test: /\.huy/,
      loader: 'file-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:appName,
      template: path.resolve(src, 'index.html'),
      favicon: path.resolve(src, 'favicon.ico'),
      inject: false,
      minify: {
        html5: true,
        collapseWhitespace: true,
        removeComments: true,
        removeTagWhitespace: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
};
