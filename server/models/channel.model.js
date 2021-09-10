const mongoose = require("mongoose")
const MessageSchema = require("./message.model")

const ChannelSchema = new mongoose.Schema({
//    nu_id:{assigned by default.}
    channel_name:{
        type: String,
        // default will go to (users in channel)
    },
    //relationship to AuthorSchema
        //who wrote the message?
    author_id:{
        type: Number,
    },

    //relationship to MessageSchema
        //what does the message say?
    // message_id: {
    //     type:Number,
    // },

    messages:[MessageSchema], //every message here will have a "mongoose_id" which could be used as a message_id

}, { timestamps: true })

const Channel = mongoose.model("Channel", ChannelSchema);
module.exports = Channel