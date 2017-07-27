var path = require('path')

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  }
}
