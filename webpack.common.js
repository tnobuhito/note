const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    './assets/javascripts/bootstrap.js',
    './assets/javascripts/additional.js',
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
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'stylesheets/app.css',
      allChunks: true
    }),
    new CopyWebpackPlugin([{
      from: './assets/images',
      to: 'images',
      ignore: '.*'
    }])
  ],
};
