var webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");
var env = process.argv.splice(2);
//env[0] 入口
//env[1] 出口
module.exports = {
	entry: "./app.js",
	output: {
		path: __dirname + "/build/",
		filename: "test.js"
	}
	// 新添加的module属性
    /*module: {
        preLoaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'jsxhint'
        }],
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            {test: /\.jsx$/, loader: 'jsx-loader' },
            {test: /\.css$/, loader: "style!css" },
			{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.(jpg|png)$/, loader: 'url-loader'},//?limit=8192
            {test: /\.scss$/, loader: "style!css!sass"}
        ]
    },
	plugins: [
	    new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
	]

    ,plugins: [
        new ExtractTextPlugin("./[name].css", {allChunks: true})
    ]*/
};