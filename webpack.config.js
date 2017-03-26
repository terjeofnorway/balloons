const webpack = require('webpack');
const path = require('path');
const fileloader = require('file-loader');

/* Plugins */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


var isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: 'css-loader!sass-loader'
                })
            },
            {
                test: /\.(svg|jpg|gif)$/,
                use: 'url-loader?limit=1000!name=[name].[ext]&outputPath=../images/',
                exclude: /fonts/
            },
            {
                test: /\.(eot|ttf|woff|woff2|svg)$/,
                use: 'file-loader?name=[name].[ext]&outputPath=../fonts/',
                exclude: /images/
            }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist', 'build'], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false,
            exclude: ['shared.js']
        }),
        new ExtractTextPlugin({filename: '../styles/app.css', disable: !isProd}),
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': process.env.NODE_ENV
            }
        }),
    ]
}
