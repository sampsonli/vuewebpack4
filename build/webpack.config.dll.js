const webpack = require('webpack')
const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        vendor: ['axios', 'v-tap', 'vue', 'vue-router', 'vuex', 'vuex-router-sync', 'es6-promise']
    },

    output: {
        filename: '[name].dll.js?[chunkhash:8]',
        path: path.resolve(__dirname, '../static'),
        library: '[name]_lib'
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../static/[name]-manifest.json'),
            name: '[name]_lib'
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: path.resolve(__dirname, '../static')
        })
    ]
}
