var vue = require('vue-loader');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.js',
	output: {
		path: './static',
		publicPath: '/static/',
		filename: 'build.js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				// excluding some local linked packages.
				// for normal use cases only node_modules is needed.
				exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
				loader: 'babel?optional[]=runtime&loose=all'
			}
		]
	}
};

if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		new webpack.optimize.OccurenceOrderPlugin()
	]
} else {
	module.exports.devtool = '#source-map'
}
