const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var VueResource = require("vue-resource");
// Vue.use(VueResource);
module.exports={
	entry:{
		main:path.resolve(__dirname,"src", "index.js"),
		// posts:path.resolve(__dirname,"src","posts.js")
	},
	output:{
		filename:"[name].js",
		path: path.resolve(__dirname,"build"),
	},
	devtool: "eval",
	devServer:{
		contentBase: path.resolve(__dirname,"build"),
		compress:true,
		disableHostCheck:true,
		port:8080,
		open:true,
		hot:true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({template: "./index.html"}),
		new CopyWebpackPlugin([{ from: 'static/img/*.*'}]),
		new CopyWebpackPlugin([{ from: 'static/fonts/*.*'}])
		],
	// watch: true,
	module:{
		rules:[
			{
				test: /\.css$/, 
				use:[
					{
						loader: "css-loader",
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
			},
			{
				test: /\.vue$/, 
				use:[
					{loader: "vue-loader"}
				]
			},
			{
				test: /\.pug$/, 
				use:[
					{loader: 'pug-loader'}     
				]
			},
			{
		        test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: "file-loader"
	      	},
	      	{
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            //  name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            }
		]
	}
}
