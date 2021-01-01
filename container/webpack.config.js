const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
  }),

  new ModuleFederationPlugin({
    name: "container",
    remotes: {
      products: "products@http://localhost:8081/remoteEntryProducts.js",
      cart: "cart@http://localhost:8082/remoteEntryCart.js",
    },
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
