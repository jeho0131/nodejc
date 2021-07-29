var urlModule = require('url');

var urlFromClient = 'https://abc.co.kr:3000/def/hig?a=10&b=20&name="hello"';

var parseUrl = urlModule.parse(urlFromClient);
console.log(parseUrl);
