var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("Yooo!! Server funcionando!! \\o/");
    res.end();

}).listen(3000);
  console.log('Servidor iniciado em localhost:3000. Ctrl+C para encerrar…');