/*
*   Exporting an config object to analyze bundle performance. 🚀
*   It is a very basic configuration. 🤷🏼‍♂️
*   If you want to dive into a more advanced configuration for
*   analyzing specific information please read the doc: 
*   https://github.com/webpack-contrib/webpack-bundle-analyzer ❤️
*/

import path from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { dirDist} from '../utils/routes.js'

export default 
{
  plugins: 
  [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.join( dirDist, 'report.html' ),
      openAnalyzer: false,
    }),
  ],
}
