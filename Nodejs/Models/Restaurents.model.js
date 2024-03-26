const mongoose=require("mongoose");
// const {Schema}=mongoose;
const RestaurentSchema=mongoose.Schema({
    name:String,
    cuisines:[String],
    locality:String,
    areaName:String,
    costForTwo:String,
    time:String,
    Rating:String,
    ItemUrl:String,
    ImageUrl:String,
    latitude:String,
    longitude:String,
});
const restaurentModel=mongoose.model("Restaurent",RestaurentSchema);
module.exports=restaurentModel;