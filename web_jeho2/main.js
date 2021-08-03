var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB</a></h1>
      <ul>
        <li><a href="/?title=Hello">click1</a></li>
        <li><a href="/?title=My Name Is">click2</a></li>
        <li><a href="/?title=Jeho">click3</a></li>
      </ul>
      <h2> ${title} </h2>
    </body>
  </html>
  `;
}

var host = '192.168.0.4';
var port = 3000;

var dooliwebServer = http.createServer(
  function(request, response) {
    var _url = request.url;
    var queryData = url.parse(_url, true).query;

    if(queryData.title === undefined) {
      fs.readdir('./data', function(error, filelist) {
        title = 'MAIN';
        var list = '<ul>';
        var i = 0;
        while(i < filelist.length) {
          list = list + `<li><a href="?title=${filelist[i]}">click+${filelist[i]}</a></li>`;
          i = i + 1;
        }
        list = list + '</ul>';
      });
      title = 'MAIN';
      var template = templateHTML(title);
    } else {
      title = queryData.title;
      var template = templateHTML(title);
    }
    response.writeHead(200);
    response.end(template);
  }
);

dooliwebServer.listen(port,host);
