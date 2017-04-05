const {resolve} = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: resolve('./src/components/app.js')
  },

  devtool: 'source-map',

  module: {
    rules: [{
      // Compile ES2015 using buble
      test: /\.js$/,
      loader: 'buble-loader',
      include: [resolve('.')],
      exclude: [/node_modules/],
      options: {
        objectAssign: 'Object.assign'
      }
    },
    {
     test: /\.json$/,
     loader: 'json-loader'
    },
    {
      test: /\.scss$/,
      // cooler loaders ever
      loaders: ['style-loader', 'css-loader', 'sass-loader', 'autoprefixer-loader']
    }]
  },

  resolve: {
    alias: {
      'mapbox-gl$': resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    }
  },

  plugins: [
  ]
};
