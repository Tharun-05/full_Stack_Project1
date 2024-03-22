const mongoose=require("mongoose");
// const {Schema}=mongoose;
const RestaurentSchema=mongoose.Schema({
    name:String,
    cuisines:{
        type:Array,
    },
    locality:String,
    areaName:String,
    costForTwo:String,
    time:String,
    Rating:String,
    ImageUrl:String,
});
const restaurentModel=mongoose.model("Restaurent",RestaurentSchema);
module.exports=restaurentModel;