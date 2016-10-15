const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

module.exports = {
	entry: path.resolve(__dirname,'./src/main.js'),
	output: {
		path: path.join(__dirname, '/static'),
		publicPath: '/static/',
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
				loader: 'file?limit=8192',
				query: {
					name: '[name].[ext]?[hash]'
				}
			}
	    ]
	},
	vue: {
		loaders: {
			sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader!postcss-loader'),
		},
	},
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
		new ExtractTextPlugin('style.css', {
	      	allChunks: true,
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	      	compress: {
	        	warnings: false
	      	}
	    }),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.NoErrorsPlugin(),
	    new DashboardPlugin(dashboard.setData)
  	]
};