const fs = require('fs');

// ****************  Read File *********************

/*

// syntax : fs.readFile(path[, options], callback)

// method 1

        fs.readFile('sample_readfile.txt', 'utf8', (err, data) => {
        if (err) return console.error(err);
        console.log("File content:", data);
        });

*/


/*

// method 2

        let read_file = (file) => {
            fs.readFile(file, 'utf-8', (err, data)=>{
                if(err){
                    console.log("Error reading file: ", err);
                    return
                    
                }
                console.log("file content: ", data);
                
            })
        }

        let file_name  = "sample_readfile.txt"
        read_file(file_name)

*/



// ****************  Write File *********************

//  syntax : fs.readFile(file, data[, options], callback)
//  syntax : fs.readFile('filename','content', callback)

// method 1
/*
    fs.writeFile('sample_writefile.txt', "hello this is sample files sytem Write FIle" , (err)=>{
        if(err) return console.log(err);
        console.log("file write sucessFully!!");
        
        
    }) 
*/


// method2
/*
let write_file = (file, content_to_write) => {
    fs.writeFile(file, content_to_write , (err)=>{
         if(err){
             console.log("Error reading file: ", err);
             return
            }
        console.log("content sucessfully written to file");
    })
}


let file_name = "sample_writefile2.txt"
let content_to_write = "\n\n  Good Day Kushal!!!"

write_file(file_name, content_to_write)

*/