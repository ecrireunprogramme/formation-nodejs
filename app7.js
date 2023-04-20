const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log('Nouvelle requête', req.url);

  res.writeHead(200);
  res.end('Bienvenu sur mon site');
});

server.on('error', () => console.log('Une erreur est survenue'));
server.on('close', () =>  console.log(''));

server.listen(5000, () => 
  console.log('En écoute sur le port', 5000))