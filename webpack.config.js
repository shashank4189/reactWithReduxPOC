var config = {
  entry: './main.js',

  output: {
    path:__dirname + 'dist',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 5050
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}

module.exports = config;