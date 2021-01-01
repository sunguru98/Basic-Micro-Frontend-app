const HtmlWebpackPlugin = require("html-webpack-plugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),
];

const config = {
  mode: "production",
  devServer: {
    port: 8081,
  },
  plugins,
};

module.exports = config;
