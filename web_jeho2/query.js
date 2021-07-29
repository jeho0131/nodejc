var http = require('http');
var fs = require('fs');
var url = require('url');

var host = '192.168.0.35';
var port = 3000;
var dooliwebServer = http.createServer(
  function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData);
    console.log(queryData.a);
    console.log(queryData.b);
    response.writeHead(200);
    response.end(queryData.a+','+queryData.b);
  }
);

dooliwebServer.listen(port,host);
