const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  const sr = fs.createReadStream('./data/charge.txt', 'utf8');

  res.writeHead(200);
  
  sr.pipe(res);

}).listen(5000, () => console.log('En écoute sur le port', 5000));




