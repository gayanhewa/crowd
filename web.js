var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());
var html;

// Read HTML into memory.
fs.readFile(__dirname + '/index.html', 'UTF-8', function (err, data) {
    if (err) {
	throw err;
    }
    html = data;
});

app.get('/', function(request, response) {
    response.writeHead(200, {
	'Content-Type': 'text/html'
    });
    response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});