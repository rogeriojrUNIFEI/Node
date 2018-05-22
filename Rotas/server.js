var http = require('http');
var app = require('./app')

http.createServer(app.onRequest).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');