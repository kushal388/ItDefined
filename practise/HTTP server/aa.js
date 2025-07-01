// let http = require('http')




// let serverone = http.createServer((request, response) => {

//     console.log(request.url);

//     response.writeHead(200, { 'content-Type' : 'text/html'})
//     response.write('<h5> Welcoem to sssss!!!</h5>')
//     response.end()
// })


// serverone.listen(3000 , () => console.log("server cretaed at http://localhost:3000"))


let http = require('http')

let nested_Server = http.createServer((request, response)=> {


  if( request.url === '/'){

     response.write(`<h1>Welcome to server</h1>

        <ul style="display:flex ; gap: 20px; list-style:none">
                <li> <a href="/"  style = "text-decoration:none">Home</a></li>
                <li><a href="/contact" style = "text-decoration:none" >Contact</a></li>
                <li><a href="/about" style = "text-decoration:none" >ABout</a></li>
                <li><a href="/something" style = "text-decoration:none" >Something</a></li>
        </ul>

        `)
        response.end()
  }

  else if(request.url === '/something'){
        response.writeHead(200 , {'content-Type' : 'text/html'})
    response.write("<h3> Welocem to some new page</h3>")
    response.end()

  }

 else  if(request.url === '/about'){
    response.writeHead(200 , {'content-Type' : 'text/html'})
    response.write("<h3> Welocem to contact page</h3>")
    response.end()

  }

  else if(request.url === '/contact'){
    response.writeHead(200, {"content-Type" : "text/html"})
    response.write("<h3> Welocem to contact page</h3>")
    response.end()

  }

  else {
        
        response.write("<h1>404 oage not found</h1>")
        response.end()
       
  }


})


nested_Server.listen(3000)