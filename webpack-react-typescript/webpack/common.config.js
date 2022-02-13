const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { optimize } = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/app.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { // 2
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: './index.html'})
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'dist')
  },
  performance: {
    maxAssetSize: 1024 * 250,
    maxEntrypointSize: 1024 * 250,
  },
}