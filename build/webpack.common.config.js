const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpck = require("webpack");

const ENV = process.env.NODE_ENV || "development";
module.exports = {
  mode: ENV,
  context: path.resolve(__dirname, "../src"),
  entry: { //入口
    index: "./index.js"
  },
  output: { //出口
    filename: "js/[name].[hash:5].js",
    path: path.resolve(__dirname, "../emo_pc")
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Emo-PC",
      template: "./index.html",
      filename: "index.html",
    })
  ],
}