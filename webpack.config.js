var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    target: 'web',
    entry: [
        'webpack-hot-middleware/client',
        './client.jsx'
    ],
    output: {
        path: require('path').resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx|es6)/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015', 'react-hmre']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
}