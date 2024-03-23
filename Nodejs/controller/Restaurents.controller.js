const restaurentModel = require("../Models/Restaurents.model");

exports.create=(req,res)=>{
    const {name,cuisines,locality,areaName,costForTwo,time,Rating,ItemUrl,ImageUrl}=req.body;
    const newRestaurent=new restaurentModel({name,cuisines,locality,areaName,costForTwo,time,Rating,ItemUrl,ImageUrl});
    newRestaurent.save().then(data=>{
      if(!data){
          res.status(400).json({"message":"Data not found"});
      }
      res.send(data);
    }).catch(err=>{
      res.status(500).json({"message":"Server not found"});
    })
}
exports.fetch=(req,res)=>{
  restaurentModel.find().then(data=>{
      if(!data){
          res.status(400).json({"message":"Data not found"});
      }
      res.send(data);
    }).catch(err=>{
      res.status(500).json({"message":"Server not found"});
  })
}
exports.fetchOne=(req,res)=>{
  const _id=req.params.id;
  restaurentModel.findById(_id).then(data=>{
      if(!data){
          res.status(400).json({"message":"Data not found"});
      }
      res.send(data);
    }).catch(err=>{
      res.status(500).json({"message":"Server not found"});
    })
  }
exports.update=((req,res)=>{
  const _id=req.params.id;
  restaurentModel.findByIdAndUpdate(_id,{Rating:"4.8"}).then(data=>{
      if(!data){
          res.status(400).json({"message":"Data not found"});
      }
      res.send(data);
    }).catch(err=>{
      res.status(500).json({"message":"Server not found"});
  })
})
exports.delete=((req,res)=>{
  const _id=req.params.id;
  restaurentModel.findByIdAndDelete(_id).then(data=>{
      res.send(data);
  });
})
