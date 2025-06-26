
let http = require('http')


let server = http.createServer((request ,response )=>{

    console.log(request.url);
    

    if(request.url == '/about')
    {
         response.write("<h1>Wlc to about page</h1>")
    response.end()
    }
     else if(request.url == '/blog')
    {
         response.write("<h1>Wlc to blog page</h1>")
    response.end()
    }

     else if(request.url == '/contact')
    {
         response.write("<h1>Wlc to contact page</h1>")
    response.end()
    }

    else{ response.write(`
            <h1>Created a HTTP Server</h1>
            <ul>
                <li style="display:inline-block; margin-right: 10px;">
                <a href="/" style="text-decoration: none;">Home</a>
                </li>
                <li style="display:inline-block; margin-right: 10px;">
                <a href="/about" style="text-decoration: none;">About</a>
                </li>
                <li style="display:inline-block; margin-right: 10px;">
                <a href="/contact" style="text-decoration: none;">Contact</a>
                </li>
                <li style="display:inline-block; margin-right: 10px;">
                <a href="/blog" style="text-decoration: none;">Blog</a>
                </li>
            </ul>
            `)
    response.end()}

  

    
})



server.listen(3000, () => {
    console.log(" Server is running at http://localhost:3000");
});

