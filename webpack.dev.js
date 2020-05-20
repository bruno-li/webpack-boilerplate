const path = require('path');
const common = require('./webpack.common');
const merge = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	output: {
		filename: 'main.js',
		// absolute path to dist
		path: path.resolve(__dirname, 'dist')
	}
});
