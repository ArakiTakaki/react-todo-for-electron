module.exports = {
  entry: './src/index.js',
  output: {
    filename: './scripts/main.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.jsx', '.js']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          {loader: 'babel-loader',
          options: {
            presets: ['react','env']
          }}

        ]
      }
    ]
  }
};