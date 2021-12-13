const webpack = require('webpack');
const path = require('path');
const common = require('./webpack.common')

module.exports = {
  ...common,
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: path.resolve(__dirname, "./public"),
    hot: true,
  },
};


