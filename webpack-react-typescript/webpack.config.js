module.exports = (env) =>  {
  const envFile = require(`./webpack/${env.mode}.config.js`)
  return envFile
}