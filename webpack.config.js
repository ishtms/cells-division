var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output:{
        filename: 'public/build/app.bundle.js',
        sourceMapFilename: 'public/build/app.bundle.js'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
}