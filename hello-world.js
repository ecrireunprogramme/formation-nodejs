const http = require('http');

const port = 5000;
const host = 'localhost';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('Hello World!');

  res.end();
}).listen(port, host, () => {
  console.log(`Listening on ${host}:${port}`);
})