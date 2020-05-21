//development mode mergerd with common.js
//npm start

const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		// absolute path to dist
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html'
		})
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', //3 inject styles to dom
					'css-loader', //2 turn css into commonjs
					'sass-loader' // 1. turns sass into css
				]
			}
		]
	}
});
