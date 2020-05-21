const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.js',
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
				test: /\.(svg|png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						// copy images with original name and a hash for cache busting
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'imgs'
						}
					}
				]
			},
			{
				test: /\.html$/,
				use: [ 'html-loader' ]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/template.html'
		})
	]
};
