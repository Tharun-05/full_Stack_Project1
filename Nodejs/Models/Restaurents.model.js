const mongoose=require("mongoose");
// const {Schema}=mongoose;
const RestaurentSchema=mongoose.Schema({
    name:String,
    cusiens:String,
    time:String,
    Rating:String,
    ImageUrl:String,
});
const restaurentModel=mongoose.model("Restaurent",RestaurentSchema);
module.exports=restaurentModel;