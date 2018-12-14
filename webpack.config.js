const path = require('path');
const BatteryWebpackPlugin = require('@battery/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const batteryConfig = require('./battery.config').default;

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src/client');

const config = {
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: './build/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(jsx|js)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          BatteryWebpackPlugin.loader
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|mp4)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new BatteryWebpackPlugin({ config: batteryConfig })
  ]
};

module.exports = config;
