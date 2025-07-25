const express = require("express");

let app = express();



// Middleware to parse JSON from request body
app.use(express.json());

// harcoded data
let data = [ {id:1, name : "Kushal", email :"kushal@gmail.com" },
            {id:2 , name : "Raki" , email : "raki@gmail.com" }
        ]


let id =3;  //for post 
       
/*

Note : 
we  need to use parseInt  with const id = parseInt(req.params.id);

bcz: console.log(typeof req.params.id); // "string"
it retrun string type

but in our code w ehceck loosley euquala
const item = data.find(u => u.id == req.params.id);

so it wont be a problem but we need to striclty check
         

*/

/* GET METHOD */

// get  => all users
app.get("/users" ,(req, res) =>{
    res.json(data)
} )

// get ==> inidvidual by id
app.get("/users/:id" ,(req,res) => {

    let user_id = req.params.id
    let user = data.find(u => u.id == user_id)

    /*
    if(user){
        res.json(user)
    }
    else{
        // res.json({message : " invalid user id"})
         res.status(404).send("User not found");  // better way mention status code  with msg
         res.status(404).json({ message: "data not found" }); // ststus code with json

    }
    */     

    if (!user) return res.status(404).json({ message: "data not found" });

    res.json(user)



})


/* POST METHOD */

// POST 1st way -> some problem with order
/*
app.post("/users", (req, res) => {
  const newUser = req.body;

  // Generate new unique id
  newUser.id = data.length + 1;

  // Add to data array
  data.push(newUser);

  res.status(201).send("New user added successfully");
});
*/


//  POST 2nd way
/*
app.post("/users", (req, res) => {
  const body = req.body;

  // Manually create object in correct order
  const newUser = {
    id: data.length + 1,
    name: body.name,
    email: body.email
  };

  data.push(newUser);

  res.status(201).send("New user added successfully");
});
*/

//POST 3rd way => hard code let id=3 at line 15
app.post("/users/",(req,res)=>{
    const new_users = {id,...req.body}
    id++;
    data.push(new_users)
    
    // res.send("users added")
    // res.send(new_users)
    //  res.json({ message: "user added", new_users });
    res.send({ message: "item added", item });
})



/* PUT METHOD */
app.put("/users/:id",(req,res) => {
    const userid = req.params.id

    const user = data.find( u =>u.id == userid)

    if(!user) return res.status(404).json({message:"users not found"})

    user.name = req.body.name;
    user.email = req.body.email;

    // Object.assign(user, req.body)  // another method in put acts as a patch

    // Object.assign works as a patch we can send individual element and remain the same
    // where as in above method if we send just name but in res email will be deleted

    res.json({message:"item updated", user })
})



/* DELETE  METHOD */
app.delete("/users/:id" ,(req, res) => {
    
    const userid = req.params.id ;

    const item = data.find(  u => u.id == userid);

    if(!item) return res.status(404).json({message: "user not found"})

    data = data.filter(u => u.id != userid)

    res.json({message:"item deleted", data})
    
    
})


/* PATCH METHOD */
app.patch("/users/:id" , (req,res) => {
    
    const userid = req.params.id
    const user = data.find( u => u.id == userid)
    
    if(!user) return res.status(400).json({message : "user not found!!"})

    // one way

    // if(req.body.name) user.name = req.body.name;
    // if(req.body.email) user.email = req.body.email;

    // another way
    for(let key in req.body){
        if(key !="id"){   // to skip the id part
            user[key]=req.body[key];
        }
    }

    res.json({message : "user updated partially", user})

})




app.listen(3000 , () => {
    console.log("server is running at http://localhost:3000");
    
})