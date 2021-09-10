const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema({
//    nu_id:{assigned by default.}
    author_name: {
        type: String,
        required: [true, "What is your username?"],
        minLength: [2, "Username must be at least 2 characters."]
    },
    author_email:{
        type: String,
        required: [true, "What is your email?"]
        // make sure it's ** @ **.**
        // regex for email
    },
    author_password: {
        //store a hashed password, never the real password
        type:String,
        required:[true, "Please enter a password."]

    },
    // author_password_confirm store hashed password?

    //friends list
        // $addToSet once friend request function is created.
        //friends_list:[AuthorSchema]

    //channel list
        // $addToSet once friend request function is created.
        // friends_list:[AuthorSchema]
        // author_isAdmin?:  default = false;


    //relationship to MessageSchema
        //which message did they write?

    //relationship to ChannelSchema
        //which channel is the message in?

}, { timestamps: true })

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author