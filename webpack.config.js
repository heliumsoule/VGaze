const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
	template: path.join(__dirname, '/app/index.html'),
	filename: 'index.html',
	inject: 'body'
});
const CSSTextPluginConfig = new ExtractTextPlugin('styles.css');

module.exports = {
	entry: [
		'./app/index.js',
		'./app/styles/bootstrapAdd.css'
	],
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
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, '/app/styles'),
				loader: ExtractTextPlugin.extract({
					fallbackLoader: 'style-loader', 
					loader: 'css-loader'
				})
			}
		]
	},
	plugins: [
		HTMLWebpackPluginConfig,
		CSSTextPluginConfig
	],
	watch: true

}