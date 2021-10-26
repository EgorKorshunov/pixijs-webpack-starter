const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    // UNCOMMENT WHEN YOU CREATE A FOLDER WITH IMAGES
    // new CopyWebpackPlugin({
    //   patterns: [{ from: "./src/img", to: "./img/" }],
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.filename$/,
        use: ["loader-b", "loader-a"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // UNCOMMENT IF YOU HAVE IMAGES
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loader: "file-loader",
      //   options: {
      //     name: "/src/img/[name].[ext]",
      //   },
      // },
      // UNCOMMENT IF YOU HAVE .json FILES or delete "json-loader" dependency and delete this part if you won't have any
      // {
      //   test: /\.json$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "/src/json/[name].json",
      //   },
      // },
    ],
  },
};
