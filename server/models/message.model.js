const mongoose = require("mongoose")

const MessageSchema = new mongoose.Schema({
//    nu_id:{assigned by default.}
    message_text: {
        type: String,
        required: [true, "What is your message?"],
        minLength: [1, "Username must be at least 1 characters."],
        // maxLength: [255]
    },

    //relationship to AuthorSchema
        //author who wrote the message
    author_id:{
        type: Number,
    },

    //relationship to ChannelSchema
        //where it will be posted
    channel_id: {
        type:Number,
    },
    createdAt:{
        type:Date,
        default: Date.now()
    },
    updatedAt: {
        type:Date,
        default:Date.now()
    },

})
// }, { timestamps: true }) //cannot have timestamps or it causes problems

// const Message = mongoose.model("Message", MessageSchema);
module.exports = MessageSchema;