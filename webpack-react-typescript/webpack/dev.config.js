const prod = require('./prod.config')

module.exports = {
  ...prod,
  mode: 'development',
}