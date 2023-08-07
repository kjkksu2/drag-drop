const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "./dist"),
    clean: true,
  },
  mode: "development",
  devServer: {
    port: 3000,
    hot: true,
    static: { directory: path.join(__dirname, "./dist") },
    devMiddleware: {
      index: "index.html",
      writeToDisk: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      index: "index.html",
      template: "./src/index.html",
    }),
  ],
};
