// to build a sql connection



const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', 
  database: 'test',

});

let query_string = "SELECT * FROM itd_users";


// similar as  app.get( '.... ', (r.. ,res) => {  })  => sytax

connection.execute(query_string, function (err, results, fields) {
  if (err) {
    console.error("Error executing query:", err);
    return;
  }

  console.log("Results:", results);  // JSON array of rows
  console.log("Fields:", fields);    // Metadata about columns
});


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

// ***************************************************************************************************

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

