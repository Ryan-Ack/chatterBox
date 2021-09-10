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
    app.patch("/api/channels/:id/message", ChannelController.addMessage);
    app.patch('/api/channels/:id/message/:m_id', ChannelController.deleteMessage);
    // //delete
    app.delete("/api/channels/:id", ChannelController.delete);
}