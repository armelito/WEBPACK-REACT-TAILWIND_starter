import path from 'path'
import { dirSrc } from '../utils/routes.js'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const webpackPlugins =
[
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    title: 'Advanced React with Webpack Setup',
    template: path.join(dirSrc, 'index.html'),
  }),
  new MiniCssExtractPlugin({
    filename: '[name].css',
  }),
]
