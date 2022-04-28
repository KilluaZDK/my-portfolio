const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = (env) => {
  return {
    mode: env.production ? 'production' : 'development',
    devServer: {
      hot: true,
    },
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: '[name].[contenthash:6].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: 'assets/[name][ext]',
    },
    devtool: env.production ? 'source-map' : 'inline-source-map',
    resolveLoader: {
      alias: {
        'pug-loader': '@webdiscus/pug-loader',
      },
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            method: 'render',
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        },
        {
          test: /\.(s[ac]ss|css)$/i,
          use: [
            // Creates `style` nodes from JS strings
            'style-loader',
            // Translates CSS into CommonJS
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [postcssPresetEnv({ browsers: 'last 2 versions' })],
                },
              },
            },
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset',
          generator: {
            filename: 'images/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My Portfolio - CHUNG NI-YIN',
        template: './index.html',
      }),
      new CopyPlugin({
        patterns: [{ from: 'public', to: 'public' }],
      }),
    ],
  }
}
