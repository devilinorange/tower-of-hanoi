const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const getHtmlTemplate = ({ htmlWebpackPlugin }) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>${htmlWebpackPlugin.options.title}</title>
  </head>
  <body>
    <div id='root'></div>
  </body>
</html>
`;

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', 'js'],
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Tower of Hanoi',
            templateContent: getHtmlTemplate
        })
    ]
}