const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = {
  mode: "development",
  entry: {
    main: "./dev/static/js/main.js"
  },
  output: {
    filename: "[name].bundle.js"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = config;
