const http = require('http');
const fs = require('fs');
const path = require('path');

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log('status', res.statusCode);

  res.on('data', (chunk) => {
    fs.appendFile(path.join(__dirname, '/data/', 'reponse.txt'), chunk, (err) => {
      if (err) {console.log('Erreur lors de l\' écriture', err); return;}
    })
  });

  res.on('error', (err) => {
    console.log('Erreur survenue', err);
  })
});

req.end();