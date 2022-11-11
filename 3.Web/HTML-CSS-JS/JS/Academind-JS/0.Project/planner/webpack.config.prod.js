const path = require("path");
const cleanPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "assets", "scripts"),
  },
  devtool: "cheap-source-map", // used for debugging in the browser. Refer to webpack documentation for more.
  devServer: {
    port: 5050,
    static: "./",
  },
  plugins: [new cleanPlugin.CleanWebpackPlugin()],
};
