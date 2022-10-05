import path from 'path'
import { webpackOptimization, webpackPlugins, webpackRules } from './config-assets/index.js'
import { dirRoot, dirSrc } from './utils/routes.js'

export const commonConfig = 
{
  entry: path.join(dirSrc, 'index.js'),
  module: { rules: webpackRules },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: webpackPlugins,
  output: 
  {
    path: path.join(dirRoot, 'dist'),
    filename: 'bundle.js',
    clean: true
  }, 
  optimization: webpackOptimization
}
