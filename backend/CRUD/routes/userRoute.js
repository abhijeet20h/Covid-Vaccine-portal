
module.exports = app => {
    const userdata = require("../controllers/userController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/addUser", userdata.create);
  
    // Retrieve all userdata
    router.get("/displayData", userdata.findAll);
  
    // Retrieve all published userdata
    router.get("/published", userdata.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", userdata.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", userdata.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", userdata.delete);
  
    // Delete all userdata
    router.delete("/", userdata.deleteAll);
  
    app.use('/api/userdata', router);


  };