const tailwindcss = require('tailwindcss')
const tailwindConfig = require("./tailwind.config.cjs" )

module.exports =
{
  plugins: 
  [
    'postcss-preset-env',
    require('postcss-import'),
    tailwindcss(tailwindConfig),
    require('postcss-nesting'),
    require('autoprefixer'),
  ],
};
