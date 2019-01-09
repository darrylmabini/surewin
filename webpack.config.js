const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dateTimeHash = new Date().getTime();

module.exports = {
    entry: './assets/js/system/main.ts',
    resolve: {
        alias: {
            Sass: path.resolve(__dirname, './assets/sass/'),
            View: path.resolve(__dirname, './assets/js/view/'),
            Model: path.resolve(__dirname, './assets/js/model/'),
            Config: path.resolve(__dirname, './assets/js/config/'),
            System: path.resolve(__dirname, './assets/js/system/'),
            Libraries: path.resolve(__dirname, './assets/js/libraries/'),
            Controller: path.resolve(__dirname, './assets/js/controller/')
        },
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'web/'),
        filename: './js/app.' + dateTimeHash + '.js'
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    'sass-loader'
                ]
            },{
                test: /\.handlebars$/,
                loader: 'handlebars-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['web'], {
            verbose: false
        }),
        new MiniCssExtractPlugin({
            filename: './css/app.' + dateTimeHash + '.css'
        }),
        new HtmlWebpackPlugin({
            dateTimeHash: dateTimeHash,
            inject: false,
            hash: false,
            template: path.resolve(__dirname, 'assets/js/view/html') + '/page.handlebars',
            filename: path.resolve(__dirname, 'web') + '/index.html'
        }),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: true
        }),
        new OptimizeCSSAssetsPlugin({})
    ]
};