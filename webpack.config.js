var webpack  = require('webpack');
var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/controller.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "dist/bundle.js"

    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react','stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase:'public/',
        historyApiFallback: true,
        inline: true,
        hot:true,
        port:5000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
