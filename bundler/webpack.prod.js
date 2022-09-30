import path from 'path'
import Dotenv from 'dotenv-webpack'
import { __dirname } from './utils/routes.js'

export default {
  mode: 'production',
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '..', '..', './.env.production'),
    }),
  ],
  devServer: 
  {
    static: path.resolve(__dirname, './dist'),
  },
  devtool: 'source-map',
}
