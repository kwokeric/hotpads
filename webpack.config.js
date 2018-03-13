var path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),

module.exports = {
  entry: './js/main.js',  // single js entrypoint
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.[hash].bundle.js'  // output with hashed added to output filename
  },
  module: {
    rules: [
      {        // accepts either js or jsx
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {        // handles .scss extensions with has added to output filename
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!cssnext-loader')
      },
      {        // handles .jpeg, .jpg, .png, and .gif extensions
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {        // handles .svg extension with 1mb limit
        test: /\.svg$/,
        use: [
          loader: 'url-loader',
          query: { limit : 10000 }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/bundle.[hash].css'), // bundle.css with hash added to filename
  ]
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
