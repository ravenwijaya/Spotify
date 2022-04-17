/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef   */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  target: 'web',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, 'src'),
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
            },
          },
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: 'css-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.jsx', '.js'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.REACT_APP_API_URL': JSON.stringify(
        process.env.REACT_APP_API_URL
      ),
      'process.env.REACT_APP_API_AUTH_URL': JSON.stringify(
        process.env.REACT_APP_API_AUTH_URL
      ),
      'process.env.REACT_APP_SPOTIFY_CLIENT_ID': JSON.stringify(
        process.env.REACT_APP_SPOTIFY_CLIENT_ID
      ),
      'process.env.REACT_APP_SPOTIFY_CLIENT_SECRET': JSON.stringify(
        process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
      ),
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './src/index.css',
    }),
  ],
};
