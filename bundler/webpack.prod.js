import path from 'path'
import Dotenv from 'dotenv-webpack'
import { dirRoot } from './utils/routes.js'

export default 
{
  mode: 'production',
  plugins: [ new Dotenv({ path: path.join(dirRoot, '.env.production') }) ],
  devtool: 'source-map'
}
