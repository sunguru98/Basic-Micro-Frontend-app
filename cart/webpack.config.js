const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),

  new ModuleFederationPlugin({
    name: "cart",
    filename: "remoteEntryCart.js",
    exposes: {
      "./CartIndex": "./src/index",
    },
  }),
];

const config = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins,
};

module.exports = config;
