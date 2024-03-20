const userModel=require("../Models/users.model");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken")
exports.register=(req,res)=>{
       const{fullName,email,password}=req.body;

       const user=new userModel({
        fullName,email,password:bcrypt.hashSync(password,10)
       });
       user.save().then(data=>{
        res.send({message:"user registered successfully"});
       }).catch(err=>{
        res.status(500).send({message:err.message})
       });
    }
exports.login=(req,res)=>{
      const{email,password}=req.body;
      userModel.findOne({email:email}).then(data=>{
         if(!data){
            res.send({message:"Invalid user"});
         }
         const isValidPassword=bcrypt.compareSync(password,data.password);
         if(!isValidPassword){
            res.send({message:"Invalid password"});
         }
         var token=jwt.sign({id:data._id},"secretkey");
         res.send(
            {
               user:{
                  id:data._id,
                  email:data.email,
                  fullName:data.fullName,
               },
               accessToken:token,
            }
         )
      }) .catch((err)=>{
         res.send({message:"Somthing went wrong"})
      })
    }