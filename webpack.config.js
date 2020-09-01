const path = require("path");

module.exports = {
  name: "webpack-mjs-library-export-issue",
  entry: path.resolve("./entry.mjs"),
  devtool: false,
  output: {
    filename: "build.mjs",
    path: path.resolve("."),
    module: true,
    libraryTarget: "module",
    libraryExport: "default",
  },
  optimization: {
    minimize: false,
  },
  experiments: {
    mjs: true,
    outputModule: true,
  },
};
