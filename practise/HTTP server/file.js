const { error } = require('console');
const fs = require('fs')


// fs.readFile('sample.read.txt', 'utf-8', (err , data)=> {
//     if (err) return console.log(err);
//     console.log("file.content ; ", data);
    
    
// })



// fs.readFile('sample.txt', 'utf-8', (err, data) => {
//     if(err) return console.log(err);
//     console.log("file content is : ," , data);
    
// })


// let read_file = (file) => {

//     fs.readFile(file , 'utf-8', (error , data) => {
//         if(error){
//             console.log(error);
//             return
//         }
//         else{
//             console.log("filr content iiisssssssss :", data);
            
//         }
//     })
// }


// let file_name = "sample.txt"

// read_file(file_name)



// let readfile2 = (file) => {
//     fs.readFile(file, 'utf-8' , (error , data)=> {
//         if(error){
//             console.log(error);
//             return
//         }
//         else{
//             console.log("the data is : " , data);
            
//         }
//     })
// }

// let file = "sample.read.txt"
// readfile2(file)


// fs.writeFile('sample.write.txt',"this is some sample data", (err)=>{
//     if(err) console.log(err);
//     console.log("file wrire sux=cessfult!!!") 
    
// })


// let_write_file = (file ) => {
//     fs.writeFile(file , "something in the new file", (err)=> {
//         if(err){
//             console.log(error);
//             return
//         }
//         else{
//             console.log("content write sucessully!!!!");
            
//         }
//     })
// }

// let file____name = "sample2.wr.txt"
// let_write_file(file____name)



// fs.appendFile('sample2.wr.txt' , '\n this is the new line', (err)=> {
//     if(err) console.log(err);
//     console.log("data appendenden sucessfully");
    
    
// })


// fs.appendFile('sample2.wr.txt', '\n this is the new line', (err) => {
//   if (err) {
//     console.log("❌ Error:", err);
//   } else {
//     console.log("✅ Data appended successfully");
//   }
// });



// let appended = (file) =>{
//     fs.appendFile(file , '\n this is the new second line', (error) => {
//         if(error){
//             console.log(error);
//             return
            
//         }
//         else{
//             console.log("data is appended sucessfully");
            
//         }
//     })
// }
// file = "sample2.wrt.txt"

// appended(file)



// fs.unlink('sample.txt' , (error) => {
//     if(error) console.log(error);
//     console.log("file deleted");
    
    
// }) 



let delete_file = (file) => {
    fs.unlink (file , (err)=> {
        if(err){
        console.log(err);
        
        }
        else{
            console.log("deleted sucesffulyy!!!!");
            
        }
    })
}


file = 'sample2.wrt.txt'

delete_file(file)