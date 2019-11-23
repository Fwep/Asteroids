const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  module: {
    rules: [
      {
        use: {
          loader: "babel-loader",
        }
      }
    ]
  }
};
