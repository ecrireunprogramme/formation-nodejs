var http = require('http');
var options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(JSON.stringify(res.statusCode));

  res.on('data', function (chunk) {
    console.log('Response: ' + chunk);

    require('fs').appendFile('fichier.txt', chunk, (err) => {});
    });
    res.on('end', function (chunk) {
    console.log('Response ENDED');
    });
}).on('error', err => {
  console.log('Error: ', err.message);
});

req.end();