const debug = false;
const path = require('path');

module.exports = {
  devtool: debug ? "inline-sourcemap" : false,
  entry:  './examples/simple/main.jsx',
  resolve: {
   extensions: ['.js', '.jsx'],
   alias: {
     reactalikeSource: path.resolve( __dirname, 'index.js'),
     component: path.resolve( __dirname, 'examples/simple/components'),
     constants: path.resolve( __dirname, 'examples/simple/constants.js'),
     redux: path.resolve( __dirname, 'examples/simple/node_modules/redux')
   }
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
    filename: "./examples/simple/bundle.js"
  }
};
