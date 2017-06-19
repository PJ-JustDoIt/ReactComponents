var path = require('path');       // utilities for dealing with file dirs - comes with npm automatically - no need of separate install
var HtmlWebpackPlugin = require('html-webpack-plugin');   // craetes index.html in dist dir and puts in index.js here with script tag as well
var webpack = require('webpack');

var config = {                // exports an object out of this file
  entry: './app/index.js',        //webpack takes code from here
  output: {
    path: path.resolve(__dirname, 'dist'),  // runs JSX to JS transformation and puts the output file in dist dir
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },   // babel-loader runs on .js files:wq. babel loader looks for "babel":{} in package.json - so add that
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};


if (process.env.NODE_ENV === 'production') {            // for production deployment
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)   // sets env for production
      }
    }),
    new webpack.optimize.UglifyJsPlugin()               // for minnifying the code
  )
}

module.exports = config;