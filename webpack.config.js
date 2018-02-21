const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports={
	entry:{
		main:path.resolve(__dirname,"src", "index.js"),
		// posts:path.resolve(__dirname,"src","posts.js")
	},
	output:{
		filename:"[name].js",
		path: path.resolve(__dirname,"build"),
	},
	devServer:{
		contentBase: path.resolve(__dirname,"dist"),
		compress:true,
		disableHostCheck:true,
		port:8080,
		open:true,
		hot:true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template: "./index.html"})
	],
	// watch: true,
	module:{
		rules:[
			{
				test: /\.css$/, 
				use:[
					{
						loader: "scc-loader",
					}
				]
			},
			{
				test: /\.scss$/, 
				use:[
					{loader: "style-loader"},
					{loader: "css-loader"},
					{loader: "sass-loader"}
				]
			}
		]
	}
}
