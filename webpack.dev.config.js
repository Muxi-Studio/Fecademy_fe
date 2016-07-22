const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname,'./js/entry.js')
	],
	output: {
		path: path.join(__dirname, '/static'),
		publicPath: 'http://localhost:3000/static',
		filename: 'bundle.js'
	},
	module: {
    loaders: [{
	      test: /\.scss$/,
	      exclude: /node_modules/,
	      loader: 'style!css?sourceMap!sass?sourceMap&sourceComments'
    	}],
  	},
  	resolve: {
	    extensions: ['', '.js', '.scss'],
	},
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
  	],
};