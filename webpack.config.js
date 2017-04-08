var config = {
  entry: './src/main.js',

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
          presets: ['es2015', 'react','stage-1']
        }
      },
      {test: /(\.css|\.scss)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']},

      {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'}
        /*'postcss-loader'*/
    ]
  },


}

module.exports = config;