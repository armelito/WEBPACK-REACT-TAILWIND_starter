import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

export const webpackOptimization = 
{
  minimize: true,
  minimizer: 
  [
    new TerserPlugin(),
    new ImageMinimizerPlugin({
      minimizer: 
      {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: 
        {
          plugins: 
          [
            ["gifsicle", { interlaced: true }],
            ["jpegtran", { progressive: true }],
            ["optipng", { optimizationLevel: 5 }],
            [
              "svgo",
              {
                plugins: 
                [
                  {
                    name: "preset-default",
                    params: 
                    {
                      overrides: 
                      {
                        removeViewBox: false,
                        addAttributesToSVGElement: 
                        {
                          params: 
                          {
                            attributes: 
                            [
                              { xmlns: "http://www.w3.org/2000/svg" },
                            ],
                          },
                        },
                      },
                    },
                  },
                ],
              },
            ],
          ],
        },
      },
    }),
  ],
}
