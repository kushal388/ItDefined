const { error, log } = require('console');
const fs = require('fs');


// Append file 
// if file doesnt exist it create a new file
// Method 1
/*
fs.appendFile('sample_appendFile.txt', '\n i am 26 years old .', (err) => {
  if (err) return console.error(err);
  console.log("Content appended");
});
*/

// method 2
/*
let append_file = (file, contentToAppend) => {
    fs.appendFile(file, contentToAppend, (err)=>{
        if(err){
             console.log("Error reading file: ", err);
             return
            }
        console.log("content sucessfully Appended to file");
    })
}

let file = 'sample_appendFile.txt'
let contentToAppend = "\n i am working in XYZ company!!"

append_file(file, contentToAppend)
*/


// *************** DELETE (unlink) ***************************
// method 1

/*
fs.unlink('sample_deletefile.txt',(err)=>{
    if (err)  return console.log(err);
    console.log("File Deleted!!");
    
})
 */   

// method 2 

let delete_file = (file) =>{
    fs.unlink(file, (err)=>{
        if(err){
            console.log("error deleting File", err);
            return
        }
        console.log("File deletd sucessfully!!!");
        
    })
}

let file = "sample_deletefile.txt"

delete_file(file)