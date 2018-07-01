const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: ['babel-polyfill', './src/index']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        publicPath: '/'
    },

    devServer: {
        hot: true,
        host: 'localhost',
        port: 4000,
        contentBase: path.resolve(__dirname, 'public')
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"),
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './node_modules/@app/view'),
                ],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};
