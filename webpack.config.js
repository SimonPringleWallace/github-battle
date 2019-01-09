var path = require('path')
var HtmlWebpackPlugin =  require('html-webpack-plugin')

module.exports = {
  entry: "./app/index.js",
  output: {
    //two underscores on __dirname...
    // path is taking the info from the root (__dirname) and compiling it into
    // a folder called 'dist'
    path: path.resolve(__dirname, 'dist'),
    //the end product of this bundling will be named in 'filename'
    filename: 'index_bundle.js'
  },
  module: {
    rules:[
      // if the file ends in .js, apply the babel-loader
      {test: /\.(js)$/, use: 'babel-loader'},
      // if the file ends in .js, apply the loaders below
      // css-loader is going to take any 'url()' and convert them to 'require() or import'
      // style-loader then inserts these directly into the html so the styles are active
      {test:/\.css$/, use:['style-loader', 'css-loader']}
    ]
  },
  // which path either development or production
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
}
