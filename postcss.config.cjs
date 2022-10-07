module.exports =
{
  plugins: 
  [
    require('postcss-import'),
    require('postcss-simple-vars'),
    require('postcss-define-function'),
    require('postcss-each'),
    require('postcss-conditionals'),
    require('postcss-for'),
    require('postcss-functions'),
    require('postcss-mixins'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    [
      'postcss-define-property',
      {
        syntax: 
        {
          atrule: true,
          parameter: '',
          property: '+',
          separator: ''
        }
      }
    ],
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
