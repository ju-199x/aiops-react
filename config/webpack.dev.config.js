const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const os = require('os');
let arr = []
let HOST
for (let key in os.networkInterfaces()) {
  os.networkInterfaces()[key].forEach((item) => {
    if (item.family === 'IPv4' && item.address.indexOf('192.168.') !== -1) {
      arr.push(item.address)
    }
  })
}
HOST = arr[0]

module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: 'js/[name].[hash:8].bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        open: true,
        port: 3000,
        compress: true,
        hot: true,
		host:HOST,
        proxy: {
            "/opsApi": {
                target: 'http://192.168.2.227:56020',
                pathRewrite: {'^/api': ''},
                changeOrigin: true
            }
        }
    },
    resolve: {
        // modules: [
        //     path.join(__dirname, "app"),
        //     "node_modules"
        // ],
        extensions: ['.js', '.json', '.less', '.jsx'],
        alias: {
            //'react-native': 'react-native-web',
            '@': path.resolve(__dirname, '../src'),
            // '@view': path.resolve(__dirname, '../src/view'),
            '@com': path.resolve(__dirname, '../src/component')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            inject: 'body',
            hash: false
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
        ]
    }
});
