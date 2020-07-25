const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './assets/javascripts/bootstrap.js',
    './assets/stylesheets/bootstrap.scss',
    './assets/stylesheets/additional.scss'
  ],
  output: {
    path: path.resolve(__dirname, '.tmp/dist/assets'),
    filename: 'javascripts/app.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'stylesheets/app.css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets/images',
          to: 'images',
          globOptions: {
            dot: false,
            gitignore: false,
          },
        },
      ],
    }),
  ],
};
