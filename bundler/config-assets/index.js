/*
*   I love separate my config in several files. 🚀
*   It is personal choice.
*   I prefere have a readable code easy to maintain. 🤷🏼‍♂️
*/

import { webpackOptimization } from "./webpack.optimization.js"
import { webpackPlugins } from "./webpack.plugins.js"
import { webpackRules } from "./webpack.rules.js"

export {
  webpackOptimization,
  webpackPlugins,
  webpackRules
}