const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/app.ts',
  output: {
    filename: '[name].[hashcode].js',
    path: path.resolve(__dirname, 'dist')
  }
}