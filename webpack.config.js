const { merge } = require('webpack-merge')
const commonConfig = require('./webpack/webpack.common')
// const { WebpackPluginServe } = require('webpack-plugin-serve')

module.exports = ({ env }) => {
  const envConfig = require(`./webpack/webpack.${env}.js`)
  const config = merge(commonConfig, envConfig)
  return config
}
