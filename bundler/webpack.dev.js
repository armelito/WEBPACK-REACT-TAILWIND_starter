import path from 'path'
import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
import { __dirname } from './utils/routes.js'

export default {
  mode: 'development',
  plugins: 
  [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', '..', './.env.development'),
    }),
  ],
  devServer: 
  {
    hot: true,
    liveReload: true,
  },
  devtool: 'eval-source-map',
}
