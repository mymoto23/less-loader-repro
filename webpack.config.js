const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

const miniCssExtractPlugin = new MiniCssExtractPlugin({
	filename: "bundle-style-[contenthash:8].css",
});

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				use: ["html-loader"],
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/i,
				use: [
					{ loader: MiniCssExtractPlugin.loader },
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: {
								exportLocalsConvention: "camelCaseOnly",
								localIdentName: "[name]___[local]--[md5:contenthash:base64:7]",
							},
						},
					},
					{
						loader: "less-loader",
					},
				],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin(),
		miniCssExtractPlugin,
	],
	devServer: {
		hot: true,
		port: 3000,
		liveReload: false,
		static: {
			watch: false,
		},

		historyApiFallback: true,
		compress: true,
	},
};
