module.exports =
{
  plugins: 
  [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('postcss-define-property'),
    require('postcss-each'),
    require('postcss-conditionals'),
    require('postcss-for'),
    require('postcss-functions'),
    require('postcss-mixins'),
    require('autoprefixer'),
    require('cssnano'),
    require('tailwindcss'),
    [
      'postcss-preset-env',
      {
        features: 
        {
          'nesting-rules': true,
        },
      },
    ],
  ],
};
