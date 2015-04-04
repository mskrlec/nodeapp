/*var http = require('http'); // http module

http.createServer(function(req, res) { // http module method 
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('Hello!');
}).listen(1337, '127.0.0.1');

console.log('Webserver has started');*/

var http = require('http'); // http module
var fs = require('fs'); // filesystem module

http.createServer(function(req, res) { // http module method 
	fs.readFile('index.html', function(err, data) {
		res.writeHead(200, {'Content-type':'text/html'});
		res.end(data);
	});
}).listen(1337, '127.0.0.1');

console.log('Webserver has started');

