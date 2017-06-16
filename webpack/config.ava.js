const path = require('path');

const PATHS = {
  app: path.resolve(__dirname, '../src'),
};

module.exports = {
   resolve: {
     modulesDirectories: [
       PATHS.app,
     ]
   },
   module: {
     loaders: [{
         test: /\.css$/,
         loader: 'style-loader!css-loader?modules&importLoaders=1!sass-loader',
       },
     ]
   }
};