const ChannelController = require("../controllers/channel.controller");

module.exports = app => {
    //create
    app.post("/api/channels", ChannelController.create);
    //find all
    app.get("/api/channels", ChannelController.findAll);
    //find by ID
    app.get("/api/channels/:id", ChannelController.findById);
    // //update
    app.put("/api/channels/:id", ChannelController.findOneAndUpdate);
    // //delete
    app.delete("/api/channels/:id", ChannelController.delete)
}