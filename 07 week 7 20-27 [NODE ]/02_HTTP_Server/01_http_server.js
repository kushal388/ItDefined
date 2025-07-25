

let http = require('http');

let server = http.createServer((request, response) => {
    response.write("<h1>Created a HTTP server</h1>");
    response.end();
});

server.listen(3000, () => {
    console.log(" Server is running at http://localhost:3000");
});




/*
let http = require('http')

let server = http.createServer((request,response)=>{

    response.write("<h1>Cretaed a HTTP server</h1>")
    response.end()
})

server.listen(3000)

*/

/*

For using Https 
2 steps

 step 1 :  Generate SSL Certificate (for local use)

openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -in csr.pem -signkey key.pem -out cert.pem

            step 2 : create a server 


            const https = require('https');
const fs = require('fs');

// Read the certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(options, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Secure HTTPS Server is Running</h1>');
  res.end();
});

server.listen(3443, () => {
  console.log('🔒 HTTPS Server running at https://localhost:3443');
});

*/
