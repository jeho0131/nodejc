var http = require('http');
var fs = require('fs');
var url = require('url');

var host = '192.168.0.35';
var port = 3000;

var dooliwebServer = http.createServer(
  function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    response.writeHead(200);
    if(queryData.title == undefined) {
      var template = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1> MAIN </h1>
          <ol>
            <a href="/?title=ABC">click1</a>
            <a href="/?title=DEF">click2</a>
            <a href="/?title=GHI">click3</a>
          </ol>
        </body>
      </html>
      `;
      response.end(template);
    } else {
      var template = `
      <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body>
          <h1> ${queryData.title} </h1>
          <ol>
            <a href="/?title=ABC">click1</a>
            <a href="/?title=DEF">click2</a>
            <a href="/?title=GHI">click3</a>
          </ol>
        </body>
      </html>
      `;
      response.end(template);
    }
  }
);

dooliwebServer.listen(port,host);
