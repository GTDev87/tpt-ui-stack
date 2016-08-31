/*globals __dirname:false */
"use strict";

var webpack = require("webpack");

// postcss plugins
const autoprefixer = require('autoprefixer');
const flexibility = require('postcss-flexibility');

module.exports = {
  devServer: {
    contentBase: __dirname,
    noInfo: false,
    historyApiFallback: {
      index: 'index.html'
    },
    port: (process.env.PORT || 3000)
  },
  output: {
    path: __dirname,
    filename: "main.js",
    publicPath: "/assets/"
  },
  cache: true,
  devtool: "source-map",
  entry: {
    app: [ __dirname + "/src/app.jsx"]
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: /(node_modules|examples)/ },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loaders: ["style", "css?sourceMap", "sass?sourceMap", "postcss?sourceMap"]},
      { test: /\.css$/, loader: "style-loader!css-loader"}, 
      { test: /\.(ttf|eot|svg|woff|woff2|md)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file' },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  postcss: function postcss() {
    return [
      autoprefixer,
      flexibility
    ];
  }
};
