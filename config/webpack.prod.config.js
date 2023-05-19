/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require("webpack-merge");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
//const WebpackRTLPlugin = require('webpack-rtl-plugin');
//const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const WebpackBar = require("webpackbar");
const webpackConfiguration = require("./webpack.config");

module.exports = merge(webpackConfiguration, {
  mode: "production",

  /* Manage source maps generation process. Refer to https://webpack.js.org/configuration/devtool/#production */
  devtool: false,

  /* Optimization configuration */
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
      new CssMinimizerPlugin(),
    ],
  },

  /* Performance treshold configuration values */
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },

  /* Additional plugins configuration */
  plugins: [
    // new RemoveEmptyScriptsPlugin(),
    // new WebpackRTLPlugin({
    //   diffOnly: true,
    //   minify: true,
    // }),
    new WebpackManifestPlugin({
      fileName: "webpack.manifest.json",
      publicPath: "/build",
      filter: file => /\.(js|css)$/.test(file.name),
    }),
    new WebpackBar(),
  ],
});
