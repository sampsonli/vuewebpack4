const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const vendorManifest = require('../static/vendor-manifest')
const bundleConfig = require('../static/bundle-config')
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const { srcDir, staticDir, distDir, ctxDir } = require('./config')
module.exports = {
    mode: 'production',
    entry: {
        main: [path.resolve(srcDir, 'main')]
    },
    output: {
        path: distDir, // 将文件打包到此目录下
        publicPath: process.env.PUB_PATH || '', // 在生成的html中，文件的引入路径会相对于此地址，生成的css中，以及各类图片的URL都会相对于此地址
        filename: '[name].[contenthash:6].js',
        chunkFilename: '[id].[contenthash:6].chunk.js'
    },
    context: ctxDir,
    module: {
        rules: [
            {
                // .js .jsx用babel解析
                test: /\.js?$/,
                include: srcDir,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                // .less 解析
                test: /\.(less|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                // 文件解析
                test: /\.(eot|woff|svg|ttf|woff2|appcache|mp3|mp4|pdf)(\?|$)/,
                // include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/[name].[hash:6].[ext]'
                        }
                    }
                ]
            },
            {
                // 图片解析
                test: /\.(png|jpg|gif)$/,
                include: srcDir,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'assets/[name].[hash:6].[ext]'
                        }
                    }
                ]
            }

        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '~': srcDir
        },
        extensions: ['*', '.js', '.vue', '.json']
    },

    plugins: [
        new VueLoaderPlugin(),
        new webpack.DllReferencePlugin({
            context: ctxDir,
            manifest: vendorManifest
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.PUB_PATH': JSON.stringify(process.env.PUB_PATH || '')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:6].css',
            chunkFilename: '[id].[contenthash:6].chunk.css'
        }),
        new CopyWebpackPlugin([{ from: staticDir, flatten: false }]),
        new HtmlWebpackPlugin({
            // 根据模板插入css/js等生成最终HTML
            filename: 'index.html', // 生成的html存放路径，相对于 output.path
            template: path.join(srcDir, 'index.ejs'), // html模板路径
            // favicon: "./public/favicon.ico", // 自动把根目录下的favicon.ico图片加入html
            dllName: bundleConfig.vendor.js,
            inject: true // 是否将js放在body的末尾
        })
    // new PreloadWebpackPlugin(),
    // new BundleAnalyzerPlugin() // 打包分析插件，打包后会自动弹出tree图：127.0.0.1:8888
    ].concat((process.env.ANALYSE && [
        new BundleAnalyzerPlugin()
    ]) || []),
    optimization: {
        // minimizer: [
        //     new OptimizeCSSAssetsPlugin({})
        // ],
        runtimeChunk: true,
        splitChunks: {
            chunks: 'all', // Taken from https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
            minSize: 0,
            maxAsyncRequests: Infinity,
            maxInitialRequests: Infinity,
            cacheGroups: {
                default: {
                    chunks: 'async',
                    minSize: 3000,
                    minChunks: 2,
                    maxAsyncRequests: 5,
                    maxInitialRequests: 3,
                    priority: -20,
                    reuseExistingChunk: true
                },
                vendor: {
                    name: 'vendor',
                    chunks: 'initial', // 必须三选一： "initial" | "all" | "async"(默认就是异步)
                    reuseExistingChunk: true,
                    priority: -5,
                    enforce: true,
                    test: /[\\/]node_modules[\\/]/
                }

            }
        }
    }
}
