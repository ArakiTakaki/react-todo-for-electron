const path = require('path');
const POST_CSS_PLUGINS = [
  require('autoprefixer')({ grid: true }),
  require('css-declaration-sorter'),
  require('css-mqpacker')
]
const CSS_META = {
  loader: 'css-loader', options: { importLoaders: 1 }
}
const STYLE_META = {
  loader: 'style-loader'
}
const POST_CSS_META = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: POST_CSS_PLUGINS
  },
}
const BABLE_META = {
  loader: 'babel-loader',
  options: {
    presets: ['react', 'env']
  }
}

module.exports = {

  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './dist/scripts'),
    filename: 'main.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          BABLE_META
        ]
      },
      {
        test: /\.css$/,
        use: [
          CSS_META,
          STYLE_META,
          POST_CSS_META
        ]
      }
    ]
  }
};