import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyPlugin from 'copy-webpack-plugin'

import { __dirname, dirRoot } from './utils/routes.js'

export const commonConfig = 
{
  entry: path.join(dirRoot, 'index.js'),
  module: 
  {
    rules: 
    [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.m?js/,
        type: "javascript/auto",
      },
      {
        test: /\.m?js/,
        resolve: 
        {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|jpe?g|svg|woff2?|fnt|webp|mp4)$/,
        type: 'asset/resource',
        generator: {
          filename: '[name].[hash].[ext]',
        },
      },
    ],
  },
  resolve: 
  {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: 
  [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Advanced React with Webpack Setup',
      template: path.resolve(dirRoot, 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: './src/shared',
          to: '',
        },
      ],
    }),
  ],
  output: 
  {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}