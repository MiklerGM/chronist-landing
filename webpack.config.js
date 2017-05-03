const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      'node_modules'
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-object-rest-spread'],
            cacheDirectory: true
          },
        },
        include: path.resolve(__dirname, 'app')
      },
      {
        test: /\.less$/,
        use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'less-loader']
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
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader'
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
  plugins: (process.env.NODE_ENV === 'production') ? [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
      },
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
  ],
};
