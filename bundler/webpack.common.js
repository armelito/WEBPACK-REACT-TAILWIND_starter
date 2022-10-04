import path from 'path'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
//import CopyPlugin from 'copy-webpack-plugin'
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

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
        test: /\.css$/i,
        use: 
        [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpe?g)$/,
        type: 'asset/resource',
        generator: { filename: 'images/[name].[ext]' },
      },
      {
        test: /\.(svg)$/,
        type: 'asset/resource',
        generator: { filename: 'svg/[name].[ext]' },
      },
      {
        test: /\.(woff2?|fnt|webp)$/,
        type: 'asset/resource',
        generator: { filename: 'fonts/[name].[ext]' },
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
    /*new CopyPlugin({
      patterns: [
        {
          from: './src/shared',
          to: '',
        },
      ],
    })*/
  ],
  output: 
  {
    path: path.resolve(__dirname, '..', '..', './dist'),
    filename: 'bundle.js',
    clean: true
  },
  optimization: 
  {
    minimize: true,
    minimizer: 
    [
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: 
        {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: 
          {
            plugins: 
            [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              [
                "svgo",
                {
                  plugins: 
                  [
                    {
                      name: "preset-default",
                      params: 
                      {
                        overrides: 
                        {
                          removeViewBox: false,
                          addAttributesToSVGElement: 
                          {
                            params: 
                            {
                              attributes: 
                              [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
}