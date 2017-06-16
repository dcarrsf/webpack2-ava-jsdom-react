const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src'),
  // Entry point...
  entry: {
    app: './main.jsx',
  },
  // Output endpoint (development)
  output: {
    path: '/',
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:8080/',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Run the Dev Server (Hot reloading)
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: [
          'babel-loader',
        ],
      },{
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader', 
          'sass-loader?sourceMap'
        ]
      },{
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      },
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Evite Prep',
      template: '../src/main.ejs',
      filename: '../index.html'
    })
  ],
};
