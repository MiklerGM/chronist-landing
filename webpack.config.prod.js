const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval',
  bail: true,
  entry: [
    path.resolve(__dirname, 'client'),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 200000,
  },
  optimization: {
    noEmitOnErrors: true,
    nodeEnv: 'production',
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  stats: {
    assets: false,
    colors: true,
    errors: true,
    errorDetails: true,
    hash: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        WEBPACK: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.bundle-[hash].css',
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: 'body',
      filename: 'index.html'
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
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
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
        test: /\.(woff|woff2|ttf|eot)$/,
        loader: 'url-loader?limit=100000&name=[name].[ext]'
      },
      {
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

