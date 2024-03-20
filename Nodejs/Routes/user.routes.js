const userController=require("../controller/user.control");
module.exports=(app)=>{
    app.post("/api/register",userController.register);
    app.post("/api/login",userController.login);
    // app.get("/api/restaurent",RestaurentController.fetch);
    // app.get("/api/restaurent/:id",RestaurentController.fetchOne);
    // app.put("/api/restaurent/:id",RestaurentController.update);
    // app.delete("/api/restaurent/:id",RestaurentController.delete);
};