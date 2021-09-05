const MessageController = require("../controllers/message.controller");

module.exports = app => {
    //create
    app.post("/api/messages", MessageController.create);
    //find all
    app.get("/api/messages", MessageController.findAll);
    //find by ID
    app.get("/api/messages/:id", MessageController.findById);
    // //update
    app.put("/api/messages/:id", MessageController.findOneAndUpdate);
    // //delete
    app.delete("/api/messages/:id", MessageController.delete)
}