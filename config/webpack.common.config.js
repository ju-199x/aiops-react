const path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            "babel-polyfill",
            "react-hot-loader/patch",
            path.join(__dirname, "../src/index.js") // 入口文件
        ],
        index: './src/index.js',
        framework: ['react', 'react-dom']
    },
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        noParse: /jquery/,
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve("src"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                            plugins: ["@babel/plugin-syntax-dynamic-import"]
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images/',
                        limit: 8192,
                    }
                }
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name]_[hash].[ext]',
                        outputPath: 'assets/iconfont/'
                    }
                }
            }
        ]
    }
}
