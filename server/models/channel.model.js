const mongoose = require("mongoose")

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
    message_id: {
        type:Number,
    },

}, { timestamps: true })

const Channel = mongoose.model("Channel", ChannelSchema);
module.exports = Channel