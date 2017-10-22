const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'index.js'),
    output: {
        path: __dirname,
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.pug$/,
            use: 'pug-loader'
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader',
                }],
                fallback: 'style-loader',
            })
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Required 
            inject: false,
            template: path.join(__dirname, 'index.pug')
        }),
        new ExtractTextPlugin({
            filename: 'assets/[name].[contenthash].css'
        })
    ],
    externals: {
        jquery: 'jQuery'
    }
};