const path = require('path'),
	webpack = require('webpack');

module.exports = {
	entry: './preview/src/index.js',
	output: {
		path: path.resolve(__dirname, 'preview/public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
