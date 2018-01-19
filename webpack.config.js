const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [{
                loader: 'babel-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /\.less$/,
            use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'less-loader'
                }
            ]
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 100
                }
            }]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            hash: true,
            template: 'index.html'
        })
    ],
    devtool: 'source-map',
    devServer: {
        port: 9006,
        historyApiFallback: true,
       
    },


}


module.exports = config