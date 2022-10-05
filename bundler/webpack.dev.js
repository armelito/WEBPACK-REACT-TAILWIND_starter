import path from 'path'
import webpack from 'webpack'
import Dotenv from 'dotenv-webpack'
import { dirRoot } from './utils/routes.js'

export default {
  mode: 'development',
  plugins: 
  [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.join(dirRoot, '.env.development'),
    }),
  ],
  devServer: 
  {
    hot: true,
    liveReload: true,
  },
  devtool: 'eval-source-map',
}
