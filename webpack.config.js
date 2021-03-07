const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.png$/,
          type: 'asset/resource'
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/template.html',
        filename: './index.html',
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};
