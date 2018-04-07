const glob = require('glob');


module.exports = {
    webpack: (config, {dev}) => {
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            ,
            {
                test: /\.pcss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            })

        return config;
    },
    exportPathMap: function () {
        const pathMap = {}
        glob.sync('pages/**/*.js', {ignore: 'pages/_document.js'}).forEach(s => {
            const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
            pathMap[path] = {page: path}
        })
        return pathMap
    }
}
