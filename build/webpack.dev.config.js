const path = require("path");
const webpack = require("webpack");
const common = require("./webpack.common.config.js");
const { merge } = require("webpack-merge");


module.exports = merge(common, {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 9000,
    useLocalIp: true,
    hot: true,
    hotOnly: true,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
})