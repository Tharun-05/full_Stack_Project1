const RestaurentController=require("../controller/Restaurents.controller");
const authJWt=require("../middleware/authJWT");
module.exports=(app)=>{
    app.post("/api/restaurent",RestaurentController.create);
    app.get("/api/restaurent",RestaurentController.fetch);
    app.get("/api/restaurent/:id",RestaurentController.fetchOne);
    app.put("/api/restaurent/:id",RestaurentController.update);
    app.delete("/api/restaurent/:id",RestaurentController.delete);
};