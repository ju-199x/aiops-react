const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
//自动编译html并引入js文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//打包编译前清理dist目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//压缩JS文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
//打包出CSS独立文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//压缩css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: 'js/[name].[chunkhash:8].bundle.js',
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin(),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.css$/g,
                cssProcessor: require("cssnano"),
                cssProcessorPluginOptions: {
                    preset: ['default', {discardComments: {removeAll: true}}]
                },
                canPrint: true
            })
        ],
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            cacheGroups: {
                framework: {
                    priority: 100,
                    test: "framework",
                    name: "framework",
                    enforce: true
                },
                vendors: {
                    priority: -10,
                    test: /node_modules/,
                    name: "vendor",
                    enforce: true,
                },
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
            'react-native': 'react-native-web',
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html',
            inject: 'body',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[id].[hash].css',
        }),
        new CleanWebpackPlugin()
    ]
});
