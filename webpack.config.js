const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	output: {
		filename: 'main.js',
		// absolute path to dist
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', //3 inject styles to dom
					'css-loader', //2 turn css into commonjs
					'sass-loader' // 1. turns sass into css
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			}
		]
	},
	plugins: [ new HtmlWebpackPlugin({}), new CleanWebpackPlugin() ]
};
