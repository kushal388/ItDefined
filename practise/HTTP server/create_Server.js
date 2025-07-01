// let http = require('http')

// let server = http.createServer(( request , response )=> {
    
//     response.write('<h2> server cretse dsuccesfully</h2>')
//     response.end()
// })

// server.listen(3000, () => console.log("server crated sucesdullty"))


// const http = require('http');

// const server = http.createServer((request, response) => {
//   // ❌ Remove the 'if (err)' block — not needed here

//   response.write('<h2>Server created successfully</h2>');
//   response.end();
// });

// server.listen(3000, () => console.log("✅ Server created successfully on port 3000"));



// let http = require('http');

// let server = http.createServer((request, response) => {
//     response.write("<h1>Created a HTTP server</h1>");
//     response.end();
// });

// server.listen(3000, () => {
//     console.log(" Server is running at http://localhost:3000");
// });


// let http = require('http')

// let server2 = http.createServer((request, response)=> {
//     response.write("<h1> Welcome to second server</h12>")
//     response.end()

// })

// server2.listen(3004 , () => {
//     console.log("server is running at http://localhost:3004");
    
// })



let http = require('http');

let server = http.createServer((request, response) => {

    console.log(request.url);
    

    if(request.url == '/about'){
        response.writeHead(200 , { 'content-type' : 'text/html'})
        response.write("<h2>welcome to about page</h2>")
        response.end()
    }

    else  if (request.url == '/contact'){

        response.writeHead(200 , { 'content-type': 'text/html'})
        response.write("<h2> Wlcome to contact pAge</h2>")
        response.end()
    }

    else{

    response.writeHead(200 , { 'content-Type' : 'text/html'});
    response.write(`<h2>Created a HTTP server</h2>


                    <ul>
                        <li><a href="/" style = "text-decoration:none" > Home</a></li>
                        <li><a href="/about" style = "text-decoration:none" > ABout </a></li>
                        <li><a href="/contact" style = "text-decoration:none" > Contact </a></li>

                    </ul>
        
        
        
        `);
    response.end();

    }
});

server.listen(3000, () => {
    console.log(" Server is running at http://localhost:3000");
});

