var path = require('path');
var react = require('react');
var webpack = require('webpack');
 
module.exports = {
  entry: path.resolve(__dirname, 'essence.js'),
  output: { 
    path: path.resolve(__dirname, 'lib'), 
    publicPath: '/lib',
    filename: 'essence.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        loader: 'babel-loader',
        extensions: ['.jsx', '.js'],
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: true
        },
    }),
  ]
};