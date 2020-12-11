const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode: 'production', //修改
    entry: path.join(__dirname,'src','index.js'),
    output:{
        filename:'bundle.[contenthash].js', //修改,改成hash
        path: path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader:'babel-loader',
                include: path.join(__dirname,'src'),
                exclude: /node_modules/,
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname,'src','index.html'),
            filename: 'index.html'
        })
    ],
    //去掉
    // devServer:{
    //     port: 8082,
    //     contentBase: path.join(__dirname,'dist')
    // }
}