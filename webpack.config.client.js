const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'eval',
  entry: './client/index.js',
  output: {
    filename: '[name].[hash:6].js',
    chunkFilename: '[name].[hash:6].js',
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
      maxAsyncRequests: 3,
      maxInitialRequests: 3,
      name: true,
      automaticNameDelimiter: '.',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          maxSize: 1000000,
          minSize: 300000,
          priority: 1
        }
      },
    }
  },
  stats: {
    assets: true,
    colors: true,
    errors: true,
    errorDetails: false,
    hash: false
  },
  resolve: {
    modules: [
      path.join(__dirname, 'client'),
      'node_modules'
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.bundle-[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: 'body',
      filename: 'client.html'
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
        use: 'url-loader'
      },
      {
        test: /\.ico$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.md$/,
        use: ['file-loader?name=[hash].[ext]'],
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: 'url-loader'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader'
      }
    ]
  },
};
