import { merge } from 'webpack-merge'
import { commonConfig } from './webpack.common.js'

const getAddons = (addonsArgs) => 
{
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs]

  return addons
    .filter(Boolean)
    .map((name) => import(`./addons/webpack.${name}.js`))
};

export default async ({ env, addon }) => 
{
  let { default: envConfig } = await import(`./webpack.${env}.js`)

  return merge(commonConfig, envConfig, ...getAddons(addon))
}