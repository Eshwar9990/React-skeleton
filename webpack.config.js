const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "./main.js"
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    watchContentBase: true,
    progress: true
  },
}
