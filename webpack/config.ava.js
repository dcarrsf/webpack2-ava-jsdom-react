const path = require('path');

const PATHS = {
  app: path.resolve(__dirname, '../src'),
};

module.exports = {
   resolve: {
     modulesDirectories: [
       __dirname,
      'node_modules',
       PATHS.app,
     ]
   },
   module: {
     loaders: [{
         test: /\.css$/,
         loader: 'style-loader!css-loader?modules&importLoaders=1!postcss-loader',
       },
     ]
   }
};