import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import postcssDefineProperty from 'postcss-define-property'

export const webpackRules = 
[
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader', 'eslint-loader'],
  },
  {
    test: /\.m?js/,
    type: "javascript/auto",
  },
  {
    test: /\.m?js/,
    resolve: 
    {
      fullySpecified: false,
    },
  },
  {
    test: /\.css$/i,
    use: 
    [
      { loader: MiniCssExtractPlugin.loader },
      { loader: "css-loader", options: { sourceMap: true } },
      { loader: "postcss-loader", options: 
        { 
          sourceMap: true,
          postcssOptions: 
          {
            /*
            *   Make you able to parse like this :
            *   
            *   @property size height width {
            *     height: $height;
            *     width: $width;
            *   }
            *   
            *   .rectangle {
            *     +size: 50px 100px;
            *   }
            */
            plugins: 
            [
              postcssDefineProperty({
                syntax: {
                  atrule: true,
                  parameter: '',
                  property: '+',
                  separator: ''
                }
              })
            ]
          }
        } 
      },
    ],
  },
  {
    test: /\.(png|jpg|gif|jpe?g)$/,
    type: 'asset/resource',
    generator: { filename: 'images/[name].[ext]' },
  },
  /*
  *   Generate a specific diretory for SVG 
  *   because react components cannot deal with SVG.
  *   I prefere generate SVG in a specific directory
  *   to handling this issue. 🚀
  *   
  *   It is personal choice. Feel free to generate SVG
  *   whereever you want. 🤷🏼‍♂️
  */
  {
    test: /\.(svg)$/,
    type: 'asset/resource',
    generator: { filename: 'svg/[name].[ext]' },
  },
  {
    test: /\.(woff2?|fnt|webp)$/,
    type: 'asset/resource',
    generator: { filename: 'fonts/[name].[ext]' },
  },
]