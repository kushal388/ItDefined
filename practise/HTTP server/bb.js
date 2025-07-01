const { error } = require('console')
const fs = require('fs')


// fs.readFile('sample.read.txt','utf-8', (err, data)=>{
//     if(err) console.log(error);
//     console.log("file contet :", data);
    
    
// })

// fs.writeFile('example.txt', 'Hey how are you!!!!', (err)=>
// {
//     if(err) console.log(err);
//     console.log("content written sucesfully!!!");
   
// }
// )


// fs.appendFile('example.txt', '\n i am good how are you!?', (err)=> {
//     if(err) console.log(err);
//     console.log("data appended sucessfully");
    
// })


fs.unlink('example2.txt', (err)=> {
    if(err) console.log(err);
    console.log("file delted");
    
    
})