var http = require('http');
var fs = require('fs');
var hora_data = require('./time');


function onRequest(req,res) {
 
  fs.readFile('htmlPage.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
  });

}

http.createServer(onRequest).listen(3000);
console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');