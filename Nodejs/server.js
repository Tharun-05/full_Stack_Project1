const express=require('express');
const app=express();
const bodyParser=require("body-parser");
const mongoose=require("mongoose");
const dbConfig=require("./Config/db.config");
const path=require("path");
app.use(bodyParser.json())
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
mongoose.connect(dbConfig.url);
const db=mongoose.connection;
db.on("error",()=>{
    console.log("Error in connecting db");
})
db.on("open",()=>{
    console.log("successfully connected");
})
require(path.join(__dirname,"./Routes/restaurents.routes"))(app);
require(path.join(__dirname,"./Routes/user.routes"))(app);
// const users=[
//     {
//         name:"tharun",
//         age:"21",
//         id:1260,
//     },
//     {
//         name:"kumar",
//         age:"22",
//         id:1262,
//     },
//     {
//         name:"Tirupathi",
//         age:"23",
//         id:1263,
//     },
//     {
//         name:"kumari",
//         age:"24",
//         id:1264,
//     },
// ];
// app.get("/", (req, res) => {
//     console.log("I am working");
//     res.send("hi");
// });
// app.get("/api/users/:id",(req,res)=>{
//     const id=req.params.id;
//     const result=users.find((user)=>user.id==id);
//     if(!result){
//         res.status(404).json({"message":"Invalid id"});
//     }
//     res.send(result);
// });
// app.post("/api/user",(req,res)=>{
//     const name=req.body.name;
//     const age=req.body.age;
//     const user=
//         {
//             id:Math.random()*1000,
//             name:name,
//             age:age,
//         };
    
//     users.push(user);
//     res.json(users);
// });

// app.put("/api/user/:id",(req,res)=>{
//     const id=req.params.id;
//     const user=users.find((user)=>user.id==id);
//     if(!user){
//         res.status(404).json({"message":"Invalid user id"});
//     }
//     const keys=Object.keys(req.body);
//     keys.forEach(key => {
//         if(!user[key]){
//             res.status(404).json({"message":"Invalid key"});
//         } 
//         user[key]=req.body[key];
//     });
//     res.json(user);
// });
// app.delete("/api/user/:id",(req,res)=>{
//     const id=req.params.id;
//     const user=users.find((user)=>user.id==id);

//     if(!user){
//         res.status(404).json({"message":"Invalid user id"});
//     }
//     const filtered=users.filter((user)=>user.id!=id);
//     res.json(filtered);
// });

// app.get("/api/users",(req,res)=>{
//     res.send(users);
// });