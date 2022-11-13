const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist/assets/scripts"),
    filename: "main.js",
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
};
