const common = require('./common.config')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
})
