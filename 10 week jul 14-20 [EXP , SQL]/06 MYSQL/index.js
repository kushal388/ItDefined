
// Thi file shows how to connect sql to express
// Only sql connect is moved to index2.js or commented below

let express = require("express")

const mysql = require('mysql2');
const { log } = require("node:console");

let app = express()


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'test'
});


let query_string = "SELECT * FROM itd_users";



app.get('/get_users' ,(req,res) => {

    connection.execute(query_string, function (err, results, fields) {

          if(err) throw err

        res.send(results)

       
    });


})


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});







// const mysql = require('mysql2');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'test'
// });

// let query_string = "SELECT * FROM itd_users";


// // similar as  app.get( '.... ', (res ,req) => {  })  => sytax

// connection.execute(query_string, function (err, results, fields) {
//   if (err) {
//     console.error("Error executing query:", err);
//     return;
//   }

//   console.log("Results:", results);  // JSON array of rows
//   console.log("Fields:", fields);    // Metadata about columns
// });


// another methods
// const mysql = require('mysql2');

// // Connect to the database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',      // Put password if you have one
//   database: 'test'
// });

// const query = "SELECT * FROM itd_users";

// connection.query(query, (err, results, fields) => {
//   if (err) {
//     console.error("Error: ", err);
//     return;
//   }

//   console.log("Results:");
//   console.log(results);     // ✅ This should print array of rows

//   console.log("Fields:");
//   console.log(fields);      // ✅ This prints column info
// });



// const mysql = require('mysql2');

// // Create the connection to database
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'root',         // Add your MySQL password here if required
//   database: 'test'
// });

// const query = "SELECT * FROM itd_users";

// connection.query(query, (err, results, fields) => {
//   if (err) {
//     console.error("Query Error:", err);
//     return;
//   }

//   console.log("🟢 Results:");
//   console.log(results); // this will be an array of rows

//   console.log("🟢 Fields:");
//   console.log(fields);  // this is column metadata
// });

