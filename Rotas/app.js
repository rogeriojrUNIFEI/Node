var url = require('url');
var fs = require('fs');

function renderHTML(path, res){
  fs.readFile(path, function(err, data) {
    if(err){
      res.writeHead(404);
      res.write('Arquivo nao encontrado');
    }
    else{
      res.write(data);
    }
    res.end();
});
}

module.exports = {

  onRequest: function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});

      var path = url.parse(req.url).pathname;

      switch (path){
        case '/':
          renderHTML('./index.html', res);
          break;
        case '/yoo':
          renderHTML('yoo.html', res);
          break;
        default:
          res.writeHead(404);
          res.write('Arquivo nao encontrado');
          res.end();
          break;          
      }

  }

};