var http = require('http');
var static = require('node-static');
var file = new static.Server('.');

var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8080);

console.log('Server running on port 8080');
