const tailwindcss = require('tailwindcss')
const tailwindConfig = require("./tailwind.config.cjs" )
const postcssPresetEnv = require('postcss-preset-env')

module.exports =
{
  plugins: 
  [
    require('postcss-import'),
    tailwindcss(tailwindConfig),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
    postcssPresetEnv({
      features: { 'nesting-rules': false },
    }),
  ],
};
