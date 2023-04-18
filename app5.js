const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 5000;

http.createServer((req, res) => {
  switch(req.url) {
    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'});
      const data = fs.readFileSync(path.join(__dirname, '/vues/', 'index.html'));
      res.write(data);
      break;

    case '/a-propos':
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.write('Page à propos');
      break;

    case '/contacts':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('Page contact');
      break;

    default:
      res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
      res.write('Page non trouvée');
      break;
  }

  res.end();
}).listen(port, () => {
  console.log('Serveur démarré et en écoute sur le port', port);
});