const path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'prod.js',
    path: path.join(process.cwd(), 'dist')
  }
}