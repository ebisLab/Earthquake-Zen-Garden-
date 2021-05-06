const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry:"./index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
          test:/\.css$/,
          use:['style-loader', 'css-loader']
      }
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle-[hash].js",
    publicPath: '/'
  },
  mode:'development',
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({template: './index.html'})
    ],
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    hot: true,
    historyApiFallback: true
  },
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");

// module.exports={
//     entry:"./index.js",
//     output:{
//         path: __dirname + "/dist",
//         filename:"./bundle.js"
//     },
//     module:{
//         rules:[
//             {test: /\.(js|jsx)$/, loader:'babel-loader', exclude: /node_modules/}
//         ]
//     },
//     plugins:[
//         new HtmlWebpackPlugin({template: './index.html'})
//     ]
// }