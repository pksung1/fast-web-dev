const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
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
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 9000,
    watchFiles: {
      paths: ['./index.html']
    }
  }
}