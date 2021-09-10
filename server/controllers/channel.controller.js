const Channel = require("../models/channel.model")

module.exports = {

    //Create
    create: (req, res) => {
        Channel.create(req.body)
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },

    // Read
    findAll: (req, res) => {
        Channel.find()
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },
    findById: (req, res) => {
        Channel.findById(req.params.id) // object
            .then(data => {
                console.log(data)
                res.json(data)
            })
            .catch(err => { res.status(400).json(err) })
    },

    // Update
    findOneAndUpdate: (req, res) => {
        Channel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, new: true })
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },
    addMessage:(req, res)=> {
        Channel.findOneAndUpdate({_id:req.params.id}, {$addToSet:{messages: req.body}}, {runValidators:true, useFindAndModify:false, new:true})
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },
    deleteMessage:(req,res)=>{
        Channel.findOneAndUpdate({_id:req.params.id}, {$pull:{messages:{_id: req.params.m_id}}})
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },


    // Delete
    delete: (req, res) => {

        Channel.deleteOne({ _id: req.params.id }) // hardcoded variable .params.{variable name here}
            .then(data => res.json(data))
            .catch(err => { res.status(400).json(err) })
    },
}