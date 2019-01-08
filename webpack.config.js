const path = require('path');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

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
    path: path.resolve(__dirname, 'web/js/'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new cleanWebpackPlugin(['web'], {
        verbose: false
    }),
    new htmlWebpackPlugin({
        customHash: 'config.CustomTimeHash',
        inject: false,
        hash: false,
        template: path.resolve(__dirname, 'assets/js/view/html') + '/page.handlebars',
        filename: path.resolve(__dirname, 'web') + '/index.html'
    })
  ]
};