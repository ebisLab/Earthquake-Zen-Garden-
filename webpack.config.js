const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports={
    entry:"./index.js",
    output:{
        path: __dirname + "/dist",
        filename:"./bundle.js"
    },
    module:{
        rules:[
            {test: /\.(js|jsx)$/, loader:'babel-loader', exclude: /node_modules/}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({template: './index.html'})
    ]
}