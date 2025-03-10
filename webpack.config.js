const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'src/index.js'),

    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
    },

    devServer: {
        static:{
            directory:path.resolve(__dirname,'dist')
        },
        port: 3000,
        open:true,
        hot:true,
        compress:true,
        historyApiFallback:true,
    },

    module: {
        rules : [
            {
                test:/\.css$/,
                use: [ 'style-loader','css-loader']
            },
            {
                test:/\.mp3$/,
                type: 'asset/resource',
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
        }),
      ],
}