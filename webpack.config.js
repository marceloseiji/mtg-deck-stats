const path = require('path')

module.exports = {
  // Entry point that indicates where
  // should the webpack starts bundling
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // checks for .js or .jsx files
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/, //checks for .css files
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  // Options for resolving module requests
  // extensions that are used
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['*', '.js', '.jsx']
  },

  // Output point is where webpack should
  // output the bundles and assets
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/public/dist/',
    filename: 'bundle.js'
  },

  // Set the default por of webpack-dev-server
  // from 8080 to 3000
  devServer: {
    port: 3000
  }
}
