var path = require('path')
var webpack = require('webpack')


module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        root: [
            path.resolve('./node_modules')
        ],
    },
    resolveLoader: {
        modulesDirectories: [
            path.resolve('./node_modules')
        ]
    },
    babel: {
        compact: false,
        cacheDirectory: true,
        presets: [
            require.resolve('babel-preset-es2015'),
            require.resolve('babel-preset-react'),
        ],
        plugins: [
            require.resolve('babel-plugin-transform-object-rest-spread'),
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.(png|jpg|gif)$/,
                loaders: ['url?limit=4096&name=[name].[ext]']
            },
            {
                test: /\.(html|ico)$/,
                loaders: ['file?name=[name].[ext]']
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    devServer: {
        proxy: {
            '/': {
                target: process.env.SERVER || 'http://127.0.0.1:9993/',
                secure: false,
                changeOrigin: true,
                historyApiFallback: true,
            },
        },
    },
    plugins: (process.env.NODE_ENV == 'production') ? [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
    ] : [],
}
