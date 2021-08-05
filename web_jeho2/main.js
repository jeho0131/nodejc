var http = require('http');
var fs = require('fs');
var url = require('url');

function templateHTML(title,list,body) {
  return `
  <!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="index.html">WEB3</a></h1>
      ${list}
      ${body}
    </body>
  </html>
  `;
}

function templateList(filelist) {
  var list = '<ul>';
  var i = 0;
  while(i < filelist.length) {
    list = list + `<li><a href="?title=${filelist[i]}">click ${filelist[i]}</a></li>`;
    i = i + 1;
  }
  list = list + '</ul>';

  return list;
}

var host = '192.168.0.35';
var port = 3000;

var dooliwebServer = http.createServer(function(request, response) {
  var _url = request.url;
  var queryData = url.parse(_url, true).query;

  fs.readdir('./data', function(error, filelist) {
    if(queryData.title === undefined) {
      var title = 'MAIN';
      var description = "Hello";

      var list = templateList(filelist);
      var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);

      response.writeHead(200);
      response.end(template);
    } else {
      fs.readFile(`data/${queryData.title}`, 'utf8', function(err, description) {
        title = queryData.title;
        var list = templateList(filelist);
        var template = templateHTML(title, list, `<h2>${title}</h2><p>${description}</p>`);

        response.writeHead(200);
        response.end(template);
      });
    }
  });
});

dooliwebServer.listen(port,host);
