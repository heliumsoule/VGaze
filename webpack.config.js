var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: path.join(__dirname, '/app/index.html'),
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: ['./app/index.js'],
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'index.js'
	},
	devServer: {
		port: 8000,
		inline: true,
		contentBase: 'build'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				include: path.join(__dirname, '/app'),
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	},
	plugins: [HTMLWebpackPluginConfig],
	watch: true

}