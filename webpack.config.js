// var debug = true;
// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   //context: path.join(__dirname, "public"),
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./src/ex.js",
//   // resolve: {
//   // alias: {
//   //   'react': 'react-lite',
//   //   'react-dom': 'react-lite'
//   // }
//   // }, 
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: [ 'es2015']
//         }
//       }
//     ]
//   },
//   output: {
//   //  path: __dirname + "./",
//     filename: "reactalike.js"
//   },
//   plugins: debug ? [["transform-react-jsx", {
//               "pragma": "EX.node" // default pragma is React.createElement but this uses EX.node
//             }]] : [
//             ["transform-react-jsx", {
//               "pragma": "EX.node" // default pragma is React.createElement but this uses EX.node
//             }],
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin(),
//     new webpack.optimize.AggressiveMergingPlugin()
//     //new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],
// };