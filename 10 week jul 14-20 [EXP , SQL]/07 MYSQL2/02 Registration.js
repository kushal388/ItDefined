let express = require("express")
let mysql = require("mysql2")
let app = express()

//middle ware to hanlde req.body
app.use(express.json());




// connect sql
const connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test',
    port: 3306,
    password: 'root',
  });


  connection.connect()

let register_function = ( user_name , email ,password , callback ) => {

    // to check => console.log(user_name , email ,password); // kushal kushal@gmail.com ABC123xyz
    
    /* connection.query( inser into .... values ....), [ ....] // inisde the array we pass hte values
 
    syntax = >  connection.execute(query_string, function (err, results, fields) { 
                                                                            .....    ........   
                                                                                  }  

    
    connection.query('INSERT INTO itd_users (user_name, email , password) values (? ,? ,? )', 
                    [{user_name} , {email} , {password}] , (err, results , fiels)) {

                    }
            make into qury separate and call back separate


    let query = 'INSERT INTO itd_users (user_name, email , password) values (? ,? ,? )', 
                    [{user_name} , {email} , {password}] 


    connection.query( query , (err, results, fields))
    */
    
    // check comemnted part
    let query = `INSERT INTO itd_users (user_name, email , password) values ('${user_name}', '${email}' , '${password}' ) `


    connection.query(query , (err, results , fields) => {

                        if(err) {
                            output = err
                            callback(err.message)
                            // console.log(output); //=> to check sql error
                            
                        }
                        else{

                            callback("sucess")
                            // output = "sucess" // i cannot able to use the global variable output 

                        }

                    })
                  
}

// to register

app.post('/register', (req,res) => {

    // console.log("to check  req body ==>",req.body);

    // destructring form req.body
    let {name ,email , password } = req.body
    


    let out = register_function(name ,email , password , (out) => {

                if(out.toLowerCase().includes("sucess"))
                    {
                        res.send("sucessfully Registered")
                    } 
                else{
                        res.send("failed to register")
                    }

        console.log("final outout => ", out);   
    })

})


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});




/* 
        create  a login application 
        
            ->Register
            ->Login
            -> Forget Password



    */    

