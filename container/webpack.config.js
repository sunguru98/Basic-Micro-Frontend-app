const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

const config = {
  mode: "development",
  devServer: {
    port: 8080,
  },
  plugins,
};

module.exports = config;
