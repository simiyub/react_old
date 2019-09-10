var path = require('path');

module.exports = {
  devtool: "eval",
  entry: './app/app.jsx',
  mode: 'development',
  output: {
    path: path.join(__dirname, './wwwroot', 'build'),
    filename: 'app-bundle.js'
  },
  resolve:{
    extensions: [".js", ".jsx", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loaders: ['babel-loader']
      }
    ]
  }
};
