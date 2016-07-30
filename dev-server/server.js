var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use('/css', express.static(path.resolve('css')));
app.use('/icon', express.static(path.resolve('icon')));
app.use('/images', express.static(path.resolve('images')));
app.use('/dist', express.static(path.resolve('dist')));

app.use('/', (req, res) => {
     res.sendFile(path.resolve('index.html'));

});

var port = 3000;

app.listen(port, (error) => {
    if (error) throw error;
    console.log('Express server is listening on port', port);
})