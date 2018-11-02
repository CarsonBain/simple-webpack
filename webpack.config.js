const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {main: './src/index.js'},
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
	},
	devServer: {
    contentBase: "./dist"
  },
	module: {
    rules: [
      {
        test: /\.scss$/,
        use:
          [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						'sass-loader'
          ]
      }
    ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    })
	]
};