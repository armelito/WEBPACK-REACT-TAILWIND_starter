import path from 'path'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { __dirname } from '../utils/routes.js'

export default {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: path.resolve(
        __dirname,
        '..',
        '..',
        './dist/report.html'
      ),
      openAnalyzer: false,
    }),
  ],
};
