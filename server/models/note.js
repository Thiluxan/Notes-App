const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    title:String,
    content:String,
    author:String,
    createdAt:{
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('Notes',noteSchema)