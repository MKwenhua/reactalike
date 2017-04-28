const debug = false;
const path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./src/ex.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
        query: {
          presets: [ 'es2015',  'stage-0']
        }
      }
    ]
  },
  output: {
    filename: "./src/dist/reactalike.js",
    libraryTarget: 'commonjs-module',
    library: 'EX'
  }
};
