const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")

const isProd = process.env.NODE_ENV === "production";
const staticDestination = isProd ? "/dist" : "/dev";

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body',
	destination: staticDestination
});

module.exports = {
	entry: [
		'./app/main.jsx'
	],
	output: {
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include:path.resolve('app'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					"css-loader"
				]
			},
			{
				test: /\.(gif|png|jpg|jpeg|woff|woff2|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader:"file-loader"
			},
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	devtool: 'source-map',
	stats: {
		colors:true,
		reasons:true,
		chunks:true
	}
}
