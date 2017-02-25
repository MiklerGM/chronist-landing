const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: {
        app: path.resolve(__dirname, 'app'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
      modules: [
        path.join(__dirname, "app"),
        "node_modules"
        ]
    },
    
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: ['/node_modules/'],
                use: [{
                  loader: 'babel-loader',
                  options: { presets: ['es2015', 'react'], plugins: 'transform-object-rest-spread'}
                }]
            },
            {
                test: /\.less$/,
                use: ['style-loader', 
                      { loader: 'css-loader', options: { importLoaders: 1 } },
                      'less-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: ['url-loader?limit=4096&name=[name].[ext]']
            },
            {
                test: /\.(html|ico)$/,
                use: ['file-loader?name=[name].[ext]']
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
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
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
    ] : [],
        
};
