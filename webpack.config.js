const { truncate } = require('fs');
const { extension } = require('mime');
const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // contentBase の代わり
            },
        open: true,
    },
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/
            }
        ]
    }
}