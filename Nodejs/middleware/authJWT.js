const jwt=require("jsonwebtoken");
const userModel=require("../Models/users.model");

const verifyToken=(req,res,next)=>{
    if(req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0]=="JWT"
        ){
                jwt.verify(req.headers.authorization.split(" ")[1],"secretkey",function(err,verifyToken){
                    if(err){
                        res.status(403).send({message:"Invalid JWT Token"});
                    }
                    userModel.findById(verifyToken.id).then((user)=>{
                        req.user=user;
                        next();
                    })
                    .catch((err)=>{
res.send(500).send({message:err.message})
                    });
                })
        }
        else{
            res.send({message:"Token not recived"});
            next();
        }
};
module.exports=verifyToken;