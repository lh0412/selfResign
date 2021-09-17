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
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { //注意，此处使用insert，不能使用insertAt，否则会报错
              insert: 'top'//Style-loader 将 <style> 元素附加到样式目标(style target)的末尾，即页面的 <head> 标签，。这将导致 loader 创建的 CSS 优先于目标中已经存在的 CSS。
            }
          }, 'css-loader']
      },
      {
        test: /\.less$/,
        exclude: [/node_modules/],
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: ["url-loader"]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    host: "0.0.0.0",
    port: 8081,
    useLocalIp: true,
    hot: true,
    hotOnly: true,
    open: true,
    disableHostCheck: true,
    historyApiFallback: true
  }
})