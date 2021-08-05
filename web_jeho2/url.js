var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response) {
  var _url = request.url;

  console.log(url.parse(_url,true));

  response.writeHead(200);
});
app.listen(3000);
