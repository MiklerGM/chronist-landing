const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools');

module.exports = {
  context: path.join(__dirname, 'app'),
  entry: {
    app: path.resolve(__dirname, 'app'),
    vendor: ['react', 'react-dom'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
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
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'stage-0', 'react'],
            plugins: ['transform-object-rest-spread'],
            cacheDirectory: true
          },
        },
        // include: path.resolve(__dirname, 'app')
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
  devServer: {
    historyApiFallback: true,
    inline: true,
  },
  plugins:
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: true
      }
    }),
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
  ]
};
