const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // Start at the context path
  context: path.resolve(__dirname, '../src'),
  // Entry point...
  entry: {
    app: './main.jsx',
  },
  // Output endpoint (production)
  output: {
    path: path.resolve(__dirname, '../build/js'),
    filename: '[name].bundle.min.js',
  },
  // Add '.jsx' to the resolve.extensions array.
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // Run tasks with loaders...
  module: {
    rules: [
      {
        // Transpile ES6/ES7/JSX
        test: /\.jsx?$/,
        use: [
          'babel-loader'
        ],
      }, {
        // Transpile SASS
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader!resolve-url-loader!sass-loader?sourceMap',
        })
      }, {
        // Lint JavaScript (Airbnb Style Guide)
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: [{loader: 'eslint-loader', options: {rules: {semi: 0}}}],
      }
    ],
  },
  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoEmitOnErrorsPlugin(),
    // Extract CSS to separate file
    new ExtractTextPlugin({
      filename: '[name].bundle.min.css',
      allChunks: true,
    }),
    // Optimize environment
    new webpack.DefinePlugin({ 
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({   
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    // Generate the index.html file
    new HtmlWebpackPlugin({
      title: 'Evite Prep',
      template: '../src/main.ejs',
      filename: '../index.html'
    })
  ],
};
