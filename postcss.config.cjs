module.exports =
{
  plugins: 
  [
    require('postcss-import'),
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('autoprefixer'),
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
