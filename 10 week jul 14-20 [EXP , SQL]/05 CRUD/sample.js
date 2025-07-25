let express=require("express");
let app=express();

app.use(express.json())

let data=[{"id":1,"name":"sharan","email":"shara@gmail.com"},
           {"id":2,"name":"kiran","email":"kiran@gmail.com"}];


let id=3;

//create post
app.post("/items",(req,res)=>{
const item={id,...req.body};
id++;
data.push(item);
// res.send("item added");
res.send(item)
// res.send("item added", item) // wont work
// res.json({ message: "item added", item });
// res.send({ message: "item added", item });



})

app.get("/items",(req,res)=>{
    res.json(data);
})

app.get("/items/:id", (req, res) => {
  const userid = req.params.id; 

  const item = data.find(u => u.id == userid); // keep 'data' as the array

  if (!item) return res.status(404).json({ message: "data not found" });

  res.json(item);
});

// update using put
app.put("/items/:id",(req,res)=>{
   const userid = req.params.id; 

  const item=data.find(u=>u.id==userid);
  if(!item) return res.status(404).json({message:"item not found"});
  
  item.name=req.body.name;
  item.email=req.body.email;

  // Object.assign(item,req.body)

 res.json({message:"item updated" , item})


});


// delete
app.delete("/items/:id",(req,res)=>{
   const userid = req.params.id; 
const item=data.find(u=>u.id==userid);
if(!item){
  return res.status(404).json({message:"item not found"})
}
  
data=data.filter(u=>u.id!=userid)


res.json({message:"item deleted"})

})

//patch

app.patch("/items/:id",(req,res)=>{
  const userid =req.params.id;
  let item=data.find(u=>u.id==userid);
  if(!item) return res.status(404).json({message:"item not found"})


for(let key in req.body){
  if(key !="id"){
   item[key]=req.body[key];
  }
}



// if(req.body.name){
//   item.name=req.body.name
// }
// if(req.body.email){
//   item.email=req.body.email
// }
res.json({message:"item updated",item})
})

app.listen(3000,()=>console.log("server started"));
