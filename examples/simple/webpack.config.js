const debug = false;
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry:  path.resolve( __dirname, 'main.js'),
  resolve: {
   extensions: ['.js', '.jsx']
 },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
      presets: ['es2015', 'stage-0'],
      plugins: [
        ['transform-react-jsx', {
          'pragma': 'EX.node'
        }]
      ]
    },
      }
    ]
  },
  output: {
    filename: "./bundle.js"
  }
};
