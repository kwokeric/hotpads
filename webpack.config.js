var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './js/main.js',  // single js entrypoint
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.[hash].bundle.js'  // output with hashed added to output filename
  },
  module: {
    loaders: [
      {        // accepts either js or jsx
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {        // handles .scss extensions with has added to output filename
        test: /\.scss$/,
        loader: ['file?name=styles.[hash].css', 'css', 'sass']
      },
      {        // handles .jpeg, .jpg, .png, and .gif extensions
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {        // handles .svg extension
        test: /\.svg$/,
        use: [
          'file-loader'
        ]
      }
    ],
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
