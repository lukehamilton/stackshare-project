var path = require('path');
var express = require('express');
var request = require('request');
var rp = require('request-promise');
var app = express();
var PORT = process.env.PORT || 8080

// using webpack-dev-server and middleware in development environment
if(process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html')
});

app.get('/api/tags', function(req, res) {
  request({
    uri: 'https://api.stackshare.io/v1/stacks/tags',
    qs: {
      page: '1',
      access_token: '4eade3c673accff18c0711059312d3b8',
    }
  }).pipe(res);
});

app.get('/api/tags/:tag/tools', function (req, res) {
   var tag = req.params.tag;
   request({
     uri: 'https://api.stackshare.io/v1/stacks/lookup',
     qs: {
       tag_id: tag,
       access_token: '4eade3c673accff18c0711059312d3b8'
     }
   }).pipe(res)
});

app.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  }
});
