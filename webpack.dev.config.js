const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

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
	devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        grogress: true,
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
	devtool: '#eval-source-map',
  	resolve: {
	    extensions: ['', '.js', '.scss','.vue'],
	},
	plugins: [
		new ExtractTextPlugin('style.css', {
	      	allChunks: true,
	    }),
	    new webpack.optimize.OccurenceOrderPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
  	]
};