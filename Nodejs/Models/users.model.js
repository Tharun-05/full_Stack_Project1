    const mongoose=require("mongoose");
    const userSchema=mongoose.Schema({
        fullName:{
            type:String,
            require:true,
        },
        email:{
            type:String,
            lowercase:true,
            unique:[true,"email alredy exist"],
            spasparse: true,
            require:true,
        },
        password:{
            type:String,
            require:true,
        }
    })
    const userModel=mongoose.model("user",userSchema);
    module.exports=(userModel);