module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: ['last 2 versions', 'iOS >= 8']
        }),
        require('postcss-cssnext')(),
        require('cssnano')({zindex: false})
    ]
}