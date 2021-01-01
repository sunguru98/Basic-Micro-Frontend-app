const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),

  new ModuleFederationPlugin({
    name: "products",
    filename: "remoteEntryProducts.js",
    exposes: {
      "./ProductsList": "./src/bootstrap",
    },
    shared: ["faker"],
  }),
];

const config = {
  mode: "development",
  devServer: {
    port: 8081,
  },
  plugins,
};

module.exports = config;
