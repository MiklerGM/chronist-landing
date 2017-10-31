const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  context: path.join(__dirname, 'client'),
  entry: {
    client: path.resolve(__dirname, 'client'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].bundle-[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    modules: [
      path.join(__dirname, 'client'),
      'node_modules'
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        WEBPACK: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: true
      }
    }),
    new FaviconsWebpackPlugin({
      logo: './images/favicon.png',
      prefix: 'icons-[hash]/',
      emitStats: true,
      persisentCache: true,
      background: '#000',
      inject: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: { warnings: false }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle-[hash].js'
    }),
    new ExtractTextPlugin({
      filename: 'style.bundle-[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: 'body',
      filename: 'client.html'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: true
      }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract([
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' }
        ])
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['url-loader?limit=4096&name=[name].[ext]']
      },
      {
        test: /\.ico$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
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
        test: /\.(mp4|m4v)$/,
        loader: 'file-loader'
      },
      {
        test: /\.md$/,
        loader: 'markdown-with-front-matter-loader'
      },
    ]
  },
};
