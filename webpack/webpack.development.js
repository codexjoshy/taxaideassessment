const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true, //enables hot-middleware,
    open: true, //ensures that the server is listening on the same port as the
  },
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
}
