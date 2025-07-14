let http = require('http')

let server = http.createServer((request, response)=> {
    response.write("<h1> Server </h1>")
    response.end()
})

server.listen(3000)