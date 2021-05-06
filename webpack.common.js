const webpack = require("webpack");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const pathMainJs = require.resolve("./src/app.js");
const pathIndexCss = require.resolve("./src/css/style.css");
const pathIndexHtml = require.resolve("./src/index.html");
const pathIndexFavicon = require.resolve("./src/img/favicon.ico");

module.exports =  {
    entry: [
      '@babel/polyfill',
      pathMainJs,
      pathIndexHtml,
      pathIndexCss,
      pathIndexFavicon
    ],
    plugins: [
      new CleanWebpackPlugin(),
    ],
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'app.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/i,
          type: 'asset/resource',
          generator: {
            filename: 'css/[name][ext][query]'
          }
        },
        {
          test: /\.html$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name][ext][query]'
          }
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'img/[name][ext][query]'
          }
        },
      ]
    }
  };