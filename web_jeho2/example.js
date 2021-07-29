var http = require('http');

var myServer = http.createServer();

var port = 3000;

myServer.listen(port, function() {
  console.log('web server start~.');
});

myServer.on('connection', function(socket) {
  var addr = socket.address();
  console.log('클라이언트와 연결되었습니다 : %s, %d', addr.address, addr.port);
});
