/*  
*   I love separating my config in several files. 🚀
*   It is a personal choice. Do as you want.
*   I prefere writing a readable code easy to maintain. 🤷🏼‍♂️
*/

import { webpackOptimization } from "./webpack.optimization.js"
import { webpackPlugins } from "./webpack.plugins.js"
import { webpackRules } from "./webpack.rules.js"

export 
{
  webpackOptimization,
  webpackPlugins,
  webpackRules
}