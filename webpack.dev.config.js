const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname,'./src/main.js')
	],
	output: {
		path: path.join(__dirname, '/static'),
		publicPath: 'http://localhost:3000/static',
		filename: 'bundle.js'
	},
	module: {
	    loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{ 
				test: /\.(html|tpl)$/, 
				loader: 'html-loader' 
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
	    ]
	},
	devServer: {
		historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true
	},
	devtool: '#eval-source-map',
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
  	]
};